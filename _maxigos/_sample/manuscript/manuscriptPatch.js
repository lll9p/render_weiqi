// maxiGos v6.57 > mgosManuscriptPatch.js

if (typeof mxG.G.prototype.createManuscript=='undefined'){

mxG.G.prototype.getCoreNum4Manuscript=function(m)
{
	// m is the num of the move in gor history
	var s=this.gor.setup;
	if (m>s)
	{
		var n=s+this.numFrom,r;
		if (m>=n) {r=m-n+this.numWith+this.getTenuki(m,n);return (r<1)?"":(this.econumOn?((r+1)>>1):r)+"";}
	}
	return "";
};

mxG.G.prototype.drawStone4Manuscript=function(cx,d)
{
	var r=d/2;
	cx.beginPath();
	cx.arc(r,r,r-0.4*this.lw,0,Math.PI*2,false);
	cx.lineWidth=this.lw;cx.strokeStyle="#696";cx.stroke();
};

mxG.G.prototype.buildStone4Manuscript=function(nat,d,s)
{
	var cn,cx;
	cn=document.createElement("canvas");
	cn.width=cn.height=d;
	cx=cn.getContext("2d");
	this.drawStone4Manuscript(cx,d);
	if (nat=="B") cx.fillStyle="#00f";else cx.fillStyle="#f00";
	if (nat=="O") this.fontFamily4Manuscript="Arial";
	else this.fontFamily4Manuscript="maxiGos, cursive";
	this.drawText(cx,0,0,d,s,{fw:"normal"});
	return '<img alt="'+nat+'" src="'+cn.toDataURL("image/png")+'">';
};

mxG.G.prototype.drawText4Manuscript=function(cx,x,y,d,s,op)
{
	var r=d/2,z,fs=0,sf,fw=(op&&op.fw)?op.fw:"normal";
	cx.save();
	if (op&&op.c) cx.fillStyle=op.c;
	s+="";
	cx.textBaseline="middle"; // doesn't work in the same way everywhere
	cx.textAlign="center";
	do {cx.font=fw+" "+(fs++)+"px"+" "+this.fontFamily4Manuscript;} while ((3*cx.measureText("9").width<d)&&(fs<2*d));
	sf=(s.length>2)?0.75:1;
	cx.scale(sf,1);
	cx.fillText(s,(x+r)/sf,y+r);
	cx.restore();
};

mxG.G.prototype.drawPoint4Manuscript=function(cx,x,y,nat,m)
{
	var d=this.d,r=d/2,z=this.z,d2=this.d2,d3=(d2&1?1:0),d4;
	var a=(x-this.xli)*d+z,b=(y-this.yti)*(d+d2)+(d2>>1)+d3+z;
	var dxl=0,dyt=0,dxr=0,dyb=0,v=0,l=0;
	cx.lineWidth=this.lw;
	if (this.hasC("Diagram")) m=this.preTerritory(x,y,nat,m);
	if (x==this.xl) dxl=z;
	if (y==this.yt) dyt=z;
	if (x==this.xr) dxr=z;
	if (y==this.yb) dyb=z;
	if (x==0) a=a-z;
	if (y==0) {b=b-z;dyb=dyb-d3;}
	if (x==(this.DX+1)) a=a+z;
	if (y==(this.DY+1)) {b=b+z+d3;dyb=dyb-d3;}
	cx.beginPath();
	if ((nat=="O")&&this.outsideBk)
	{
		cx.fillStyle=this.outsideBk;
		cx.fillRect(a-dxl,b-(d2>>1)-d3-dyt,d+dxl+dxr,d+d2+d3+dyt+dyb);
	}
	else cx.clearRect(a-dxl,b-(d2>>1)-d3-dyt,d+dxl+dxr,d+d2+d3+dyt+dyb);

	if (this.gobanFocusVisible&&(this.xFocus==x)&&(this.yFocus==y)&&this.inView(x,y))
	{
		this.flw=(this.focusLineWidth?this.focusLineWidth:2*this.lw);
		cx.lineWidth=this.flw;
		cx.strokeStyle=this.focusColor;
		cx.strokeRect(a+this.flw/2,b+this.flw/2,d-this.flw,d-this.flw);
		cx.lineWidth=this.lw;
	}
	
	if (this.hasC("Variations")&&this.isVariation(m))
	{
		v=1;
		m=this.removeVariationDelimiters(m);
		if (this.variationBk) {cx.fillStyle=this.variationBk;cx.fillRect(a+1,b+1,d-2,d-2);}
	}
	if (!v&&(((nat=="E")&&!m)||(m=="_TB_")||(m=="_TW_")))
	{
		cx.strokeStyle=this.lineColor;
		cx.beginPath();
		if ((d3==1)&&!this.isCross(x,y-1)) d4=1;else d4=0;
		cx.moveTo(a+r,b+(y==1?r:-(d2>>1)-d3+d4));
		if ((d3==1)&&!this.isCross(x,y+1)) d4=1;else d4=0;
		cx.lineTo(a+r,b+(y==this.DY?r:d+(d2>>1)+d3-d4));
		cx.moveTo(a+(x==1?r:0),b+r);
		cx.lineTo(a+(x==this.DX?r:d),b+r);
		cx.stroke();
		
		if ((m=="_TB_")||(m=="_TW_"))
		{
			if ((nat=="B")||(nat=="W"))
			{
				cx.globalAlpha=0.5;
				cx.drawImage(this.img[nat],a,b,d,d);
				cx.globalAlpha=1;
			}
			cx.drawImage(this.imgSmall[(m=="_TW_")?"W":"B"],a+d/4,b+d/4,1+d>>1,1+d>>1);
		}
		else if (this.star(x,y)) this.drawStar(cx,a,b,r);
	}
	else
	{
		if (nat=="O") this.fontFamily4Manuscript="Arial";
		else this.fontFamily4Manuscript="maxiGos, cursive";
		if (!v&&((nat=="B")||(nat=="W")))
		{
			if (!m) m="0"; //cx.drawImage(this.img[nat],a,b,d,d);
		}
		if (m)
		{
			var c;
			if (this.hasC("Diagram")&&this.isLabel(m)) {l=1;m=this.removeLabelDelimiters(m);}
			if (v&&this.variationColor) c=this.variationColor;
			else if (l&&this.markAndLabelColor) c=this.markAndLabelColor;
			else c=(nat=="B")?"#00f":(nat=="W")?"#f00":((nat=="O")&&this.outsideColor)?this.outsideColor:this.lineColor;
			if (this.hasC("Diagram")&&((m=="_MA_")||(m=="_TR_")||(m=="_SQ_")||(m=="_CR_")))
			{
				cx.strokeStyle=this.markAndLabelColor?this.markAndLabelColor:c;
				cx.lineWidth=this.markLineWidth?this.markLineWidth:this.lw;
				switch(m)
				{
					case "_MA_":this.drawMark(cx,a,b,d);break;
					case "_TR_":this.drawTriangle(cx,a,b,d);break;
					case "_SQ_":this.drawSquare(cx,a,b,d);break;
					case "_CR_":this.drawCircle(cx,a,b,d);break;
				}
			}
			else
			{
				if (m=="_ML_") this.drawMarkOnLast(cx,a,b,d,c);
				else
				{
					var fw;
					if (v&&this.variationFontWeight) fw=this.variationFontWeight;
					else if (l&&this.labelFontWeight) fw=this.labelFontWeight;
					else if ((nat=="O")&&this.outsideFontWeight) fw=this.outsideFontWeight;
					else fw="normal";
					this.drawText(cx,a,b,d,m,{fw:fw,c:c});
				}
			}
		}
	}
};

mxG.G.prototype.refreshManuscript=function()
{
	if (this.refresh4ManuscriptDone) this.refresh4ManuscriptDone++;
	else this.refresh4ManuscriptDone=1;
	if ((this.refresh4ManuscriptDone==5)||(this.refresh4ManuscriptDone==10))
	{
		// update goban and notSeen since manuscript font loading can be slow
		this.hasToDrawWholeGoban=1;
		this.updateAll();
	}
};

mxG.G.prototype.createManuscript=function()
{
	this.buildStone=this.buildStone4Manuscript;
	this.drawPoint=this.drawPoint4Manuscript;
	this.drawText=this.drawText4Manuscript;
	this.getCoreNum=this.getCoreNum4Manuscript;
};

}
