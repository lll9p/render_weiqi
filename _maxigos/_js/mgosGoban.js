// maxiGos v6.60 > mgosGoban.js

if (typeof mxG.G.prototype.createGoban=='undefined'){

mxG.G.prototype.deplonkGoban=function()
{
	this.getE("GobanDiv").style.visibility="visible";
};

mxG.G.prototype.plonk=function()
{
	if (!this.silentFail)
	{
		this.getE("GobanDiv").style.visibility="hidden";
		setTimeout(this.g+".deplonkGoban()",50);
	}
};

mxG.G.prototype.getEmphasisColor=function(k)
{
	if (k)
	{
		if (k&this.goodnessCode.Good) return this.goodColor?this.goodColor:0;
		if (k&this.goodnessCode.Bad) return this.badColor?this.badColor:0;
		if (k&this.goodnessCode.Even) return this.evenColor?this.evenColor:0;
		if (k&this.goodnessCode.Warning) return this.warningColor?this.warningColor:0;
		if (k&this.goodnessCode.Unclear) return this.unclearColor?this.unclearColor:0;
		if (k&this.goodnessCode.OffPath) return this.offPathColor?this.offPathColor:0;
	}
	return this.neutralColor?this.neutralColor:0;
};

mxG.G.prototype.getC=function(ev)
{
	var x,y,c=this.getE("GobanCanvas").getMClick(ev);
	x=Math.max(Math.min(Math.floor((c.x-this.z)/this.d)+this.xli,this.xri),this.xli);
	y=Math.max(Math.min(Math.floor((c.y-this.z)/(this.d+this.d2))+this.yti,this.ybi),this.yti);
	return {x:x,y:y}
};

mxG.G.prototype.whichMove=function(x,y)
{
	var cN=this.cN,aN,s,a,b,km;
	if (!(this.styleMode&3))
	{
		km=cN.Kid.length;
		for (k=0;k<km;k++)
		{
			aN=cN.Kid[k];
			if (aN.P.B) s=aN.P.B[0];
			else if (aN.P.W) s=aN.P.W[0];
			else s="";
			if (s)
			{
				a=s.c2n(0);
				b=s.c2n(1);
				if ((a==x)&&(b==y)) return aN;
			}
		}
	}
	return 0;
};

mxG.G.prototype.isNextMove=function(x,y)
{
	var aN,s,a,b;
	if (!(this.styleMode&3))
	{
		aN=this.cN.KidOnFocus();
		if (aN)
		{
			if (aN.P.B) s=aN.P.B[0];
			else if (aN.P.W) s=aN.P.W[0];
			else s="";
			if (s)
			{
				a=s.c2n(0);
				b=s.c2n(1);
				if ((a==x)&&(b==y)) return aN;
			}
		}
	}
	return 0;
};

mxG.G.prototype.star=function(x,y)
{
	var DX=this.DX,DY=this.DY,A=4,B=((DX+1)>>1),C=DX+1-A,D=((DY+1)>>1),E=DY+1-A;
	if ((DX&1)&&(DY&1))
	{
		if ((DX>17)&&(DY>17)) return ((x==A)||(x==B)||(x==C))&&((y==A)||(y==D)||(y==E));
		if ((DX>11)&&(DY>11)) return (((x==A)||(x==C))&&((y==A)||(y==E)))||((x==B)&&(y==D));
		return (x==B)&&(y==D);
	}
	if ((DX>11)&&(DY>11)) return ((x==A)||(x==C))&&((y==A)||(y==E));
	return false;
};

mxG.G.prototype.inView=function(x,y)
{
	return (x>=this.xl)&&(y>=this.yt)&&(x<=this.xr)&&(y<=this.yb);
};

mxG.G.prototype.isCross=function(x,y)
{
	return (this.inView(x,y)&&(this.vNat[this.xy(x,y)]=="E")&&((this.vStr[this.xy(x,y)]=="")||(this.vStr[this.xy(x,y)]=="_TB_")||(this.vStr[this.xy(x,y)]=="_TW_")));
};

mxG.G.prototype.drawStar=function(cx,a,b,r)
{
	if (r>1)
	{
		var q=(this.starRatio?this.starRatio:0.2);
		cx.fillStyle=this.starColor?this.starColor:this.lineColor;
		cx.beginPath();
		cx.arc(a+r,b+r,this.starRadius?this.starRadius:Math.max(1.5,r*q+0.5),0,Math.PI*2,false);
		cx.fill();
	}
};

mxG.G.prototype.drawStone=function(cx,nat,d)
{
	var r=d/2,c1,c2;
	cx.beginPath();
	cx.arc(r,r,r-0.6*this.lw,0,Math.PI*2,false);
	if (this.in3dOn)
	{
		var zx=0.8,zy=0.5,x1,y1,rG;
		x1=zx*r;
		y1=zy*r;
		rG=cx.createRadialGradient(x1,y1,0.2*r,x1,y1,2*r);
		rG.addColorStop(0,(nat=="B")?"#999":"#fff");
		rG.addColorStop(0.3,(nat=="B")?"#333":"#ccc");
		rG.addColorStop(1,"#000");
		cx.fillStyle=rG;
		cx.fill();
		if (nat=="B")
		{
			rG=cx.createRadialGradient((zx>1?0.8:1.2)*r,(zy>1?0.8:1.2)*r,1,(zx>1?0.8:1.2)*r,(zy>1?0.8:1.2)*r,0.9*r);
			rG.addColorStop(0,"rgba(0,0,0,0.8)");
			rG.addColorStop(0.5,"rgba(0,0,0,0.6)");
			rG.addColorStop(1,"rgba(0,0,0,0.1)");
			cx.fillStyle=rG;
			cx.fill();
		}
	}
	else
	{
		if (nat=="B")
		{
			c1=this.blackStoneColor;
			c2=this.blackStoneBorderColor?this.blackStoneBorderColor:"#000";
		}
		else
		{
			c1=this.whiteStoneColor;
			c2=this.whiteStoneBorderColor?this.whiteStoneBorderColor:"#000";
		}
		cx.fillStyle=c1;
		cx.fill();
		cx.strokeStyle=c2;
		cx.lineWidth=this.lw;
		cx.stroke();
	}
};

mxG.G.prototype.getFs=function(cx,d,fw)
{
	// better to call it just before fillText
	var fs=0; // safer to start at 0 since zoom text only may be disturbing 
	do {cx.font=fw+" "+(fs++)+"px Arial";} while ((fs<99)&&(3*cx.measureText("9").width<d));
	return fs;
};
		
mxG.G.prototype.drawText=function(cx,x,y,d,s,op)
{
	var r=d/2,sf,c=0,sc=0;
	cx.save();
	if (op&&op.c) c=op.c;
	if (op&&op.sc) sc=op.sc;
	if (c) cx.fillStyle=c;
	if (sc) {cx.strokeStyle=sc;cx.lineWidth=3;}
	else if (mxG.IsMacSafari&&(c=="#fff"))
	{
		// otherwise white text may be too light
		sc=c;cx.strokeStyle=sc;cx.lineWidth=0.75;
	}
	if (op&&op.fw) fw=op.fw;
	else fw="normal";
	s+="";
	cx.textBaseline="alphabetic"; // "middle" is buggy on FF
	cx.textAlign="center";
	cx.font=fw+" "+this.getFs(cx,d,fw)+"px Arial";
	sf=(s.length>3)?0.5:(s.length>2)?0.7:(s.length>1)?0.9:1;
	cx.scale(sf,1);
	if (sc) cx.strokeText(s,(x+r)/sf,y+0.72*d); // if (cx.textBaseline=="middle") use y+r
	cx.fillText(s,(x+r)/sf,y+0.72*d); // if (cx.textBaseline=="middle") use y+r
	cx.restore();
};

mxG.G.prototype.drawMarkOnLast=function(cx,x,y,d,c)
{
	var dm=Math.floor(d/3);
	cx.fillStyle=this.markOnLastColor?this.markOnLastColor:c;
	cx.fillRect(x+dm,y+dm,d-2*dm,d-2*dm);
};

mxG.G.prototype.drawVariationEmphasis=function(cx,a,b,d,x,y,m)
{
	var aN,c,fw,sc;
	aN=this.whichMove(x,y);
	c=this.getEmphasisColor(aN?aN.Good:0);
	c=(c?c:this.lineColor);
	if (this.variationAsMarkOn||!this.hasC("Diagram"))
	{
		cx.lineWidth=2;
		cx.strokeStyle=c;
		cx.beginPath();
		cx.arc(a+d/2,b+d/2,d/5,0,Math.PI*2,false);
		cx.stroke();	
		if (this.isNextMove(x,y))
		{
			cx.fillStyle=c;
			cx.beginPath();
			cx.arc(a+d/2,b+d/2,d/10,0,Math.PI*2,false);
			cx.fill();	
		}
	}
	else
	{
		if (this.variationOnFocusFontWeight&&this.isNextMove(x,y)) fw=this.variationOnFocusFontWeight;
		else if (this.variationFontWeight) fw=this.variationFontWeight;
		else fw="normal";
		if (this.variationOnFocusStrokeColor&&this.isNextMove(x,y)) sc=this.variationOnFocusStrokeColor;
		else if (this.variationStrokeColor) sc=this.variationStrokeColor;
		else sc=0;
		m=this.removeLabelDelimiters(m);
		this.drawText(cx,a,b,d,m,{c:c,fw:fw,sc:sc});
	}
};

mxG.G.prototype.drawPointColor=function(x,y,nat,v,l,mtsc)
{
	var c;
	if (v&&this.variationOnFocusColor&&this.isNextMove(x,y)) c=this.variationOnFocusColor;
	else if (v&&this.variationColor) c=this.variationColor;
	else if ((l||mtsc)&&this.markAndLabelColor) c=this.markAndLabelColor;
	else c=(nat=="B")?this.onBlackColor:(nat=="W")?this.onWhiteColor:((nat=="O")&&this.outsideColor)?this.outsideColor:this.lineColor;
	return c;
};

mxG.G.prototype.drawPoint=function(cx,x,y,nat,m)
{
	var d=this.d,r=d/2,z=this.z,d2=this.d2,d3=(d2&1?1:0),d4;
	var a=(x-this.xli)*d+z,b=(y-this.yti)*(d+d2)+(d2>>1)+d3+z;
	var dxl=0,dyt=0,dxr=0,dyb=0,v=0,l=0,mtsc=0,xo,yo,wo,ho,bk,c,fw,sbk,sbkw,sc;
	var aN;
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
	xo=a-dxl;
	yo=b-(d2>>1)-d3-dyt;
	wo=d+dxl+dxr;
	ho=d+d2+d3+dyt+dyb;
	cx.beginPath();
	if ((nat=="O")&&this.outsideBk)
	{
		cx.fillStyle=this.outsideBk;
		cx.fillRect(xo,yo,wo,ho);
	}
	else if (!this.hasToDrawWholeGoban) cx.clearRect(xo,yo,wo,ho);
	
	if (this.gobanFocusVisible&&(this.xFocus==x)&&(this.yFocus==y)&&this.inView(x,y)&&!this.inSelect)
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
		if (!this.variationEmphasisOn)
		{
			if (this.variationOnFocusBk&&this.isNextMove(x,y)) bk=this.variationOnFocusBk;
			else if (this.variationBk) bk=this.variationBk;
			if (bk) {cx.fillStyle=bk;cx.fillRect(a+1,b+1,d-2,d-2);}
			if (this.variationOnFocusStrokeBk&&this.isNextMove(x,y)) sbk=this.variationOnFocusStrokeBk;
			else if (this.variationStrokeBk) sbk=this.variationStrokeBk;
			if (sbk) {sbkw=this.lw/2;cx.strokeStyle=sbk;cx.strokeRect(a+1+sbkw,b+1+sbkw,d-2-2*sbkw,d-2-2*sbkw);}
		}
	}
	if ((!v&&(((nat=="E")&&!m)||(m=="_TB_")||(m=="_TW_")))||(v&&this.variationEmphasisOn))
	{
		if (((m=="_TB_")||(m=="_TW_"))||!(v&&this.variationEmphasisOn&&!this.variationAsMarkOn))
		{
			cx.strokeStyle=this.lineColor;
			if (this.borderLineWidth&&((x==1)||(x==this.DX))) cx.lineWidth=this.borderLineWidth;
			cx.beginPath();
			if ((d3==1)&&!this.isCross(x,y-1)) d4=1;else d4=0;
			cx.moveTo(a+r,b+(y==1?r:-(d2>>1)-d3+d4));
			if ((d3==1)&&!this.isCross(x,y+1)) d4=1;else d4=0;
			cx.lineTo(a+r,b+(y==this.DY?r:d+(d2>>1)+d3-d4));
			cx.stroke();
			cx.lineWidth=this.lw;
			if (this.borderLineWidth&&((y==1)||(y==this.DY))) cx.lineWidth=this.borderLineWidth;
			cx.beginPath();
			cx.moveTo(a+(x==1?r:0),b+r);
			cx.lineTo(a+(x==this.DX?r:d),b+r);
			cx.stroke();
			cx.lineWidth=this.lw;
		}
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
		else if (v&&this.variationEmphasisOn) this.drawVariationEmphasis(cx,a,b,d,x,y,m);
		else if (this.star(x,y)) this.drawStar(cx,a,b,r);
	}
	else
	{
		if (!v&&((nat=="B")||(nat=="W"))) cx.drawImage(this.img[nat],a,b,d,d);
		if (m)
		{
			if (this.hasC("Diagram"))
			{
				if (this.isLabel(m)) {l=1;m=this.removeLabelDelimiters(m);}
				else if ((m=="_MA_")||(m=="_TR_")||(m=="_SQ_")||(m=="_CR_")) mtsc=1;
			}
			c=this.drawPointColor(x,y,nat,v,l,mtsc);
			if (mtsc)
			{
				cx.strokeStyle=c;
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
						if (v&&this.variationOnFocusFontWeight&&this.isNextMove(x,y)) fw=this.variationOnFocusFontWeight;
						else if (v&&this.variationFontWeight) fw=this.variationFontWeight;
						else if (l&&this.labelFontWeight) fw=this.labelFontWeight;
						else if ((nat=="O")&&this.outsideFontWeight) fw=this.outsideFontWeight;
						else fw="normal";
						if (v&&this.variationOnFocusStrokeColor&&this.isNextMove(x,y)) sc=this.variationOnFocusStrokeColor;
						else if (v&&this.variationStrokeColor) sc=this.variationStrokeColor;
						else sc=0;
						this.drawText(cx,a,b,d,m,{c:c,fw:fw,sc:sc});
				}
			}
		}
	}
};

mxG.G.prototype.gobanCnWidth=function(){return (this.xri-this.xli+1)*this.d+2*this.z;};
mxG.G.prototype.gobanCnHeight=function(){return (this.ybi-this.yti+1)*(this.d+this.d2)+((this.d2)&1?1:0)+2*this.z;};
mxG.G.prototype.gobanWidth=function(){return this.maximizeGobanWidth?(Math.max(19,this.DX)+((this.configIndicesOn||this.indicesOn)?2:0))*this.d+2*this.z:this.gobanCnWidth();};
mxG.G.prototype.gobanHeight=function(){return this.maximizeGobanHeight?(Math.max(19,this.DY)+((this.configIndicesOn||this.indicesOn)?2:0))*(this.d+this.d2)+((this.d2)&1?1:0)+2*this.z:this.gobanCnHeight();};
mxG.G.prototype.gobanLeft=function(){return (this.gobanWidth()-this.gobanCnWidth())>>1;};
mxG.G.prototype.gobanTop=function(){return (this.gobanHeight()-this.gobanCnHeight())>>1;};

mxG.G.prototype.setGobanSize=function()
{
	var g=this.getE("GobanDiv"),i=this.getE("InnerGobanDiv"),cn=this.gcn;
	cn.width=this.gobanCnWidth();
	cn.height=this.gobanCnHeight();
	i.style.top=this.gobanTop()+"px";
	i.style.left=this.gobanLeft()+"px";
	i.style.width=this.gobanCnWidth()+"px";
	i.style.height=this.gobanCnHeight()+"px";
	g.style.width=(this.gobanWidth()+this.getDW(i))+"px";
	g.style.height=this.gobanHeight()+this.getDH(i)+"px";
};

mxG.G.prototype.drawGoban=function()
{
	if (!this.img.B.canDraw||!this.img.W.canDraw) {setTimeout(this.g+".drawGoban()",25);return;}
	var i,j,k;
	if (mxG.IsAndroid) this.hasToDrawWholeGoban=1;
	if (this.d!=this.exD) this.hasToDrawWholeGoban=1;
	if (this.hasToDrawWholeGoban) {this.dNat=[];this.dStr=[];this.setGobanSize();}
	for (i=this.xl;i<=this.xr;i++)
		for (j=this.yt;j<=this.yb;j++)
		{
			k=this.xy(i,j);
			if ((this.dNat[k]!=this.vNat[k])||(this.dStr[k]!=this.vStr[k])||this.variationEmphasisOn)
			{
				this.dNat[k]=this.vNat[k];
				this.dStr[k]=this.vStr[k];
				this.drawPoint(this.gcx,i,j,this.vNat[k],this.vStr[k]);
			}
		}
	if (this.hasC("Diagram")&&this.indicesOn&&this.hasToDrawWholeGoban)
		for (i=this.xli;i<=this.xri;i++)
			for (j=this.yti;j<=this.ybi;j++)
				if (!this.inView(i,j)) this.drawPoint(this.gcx,i,j,"O",this.getIndices(i,j));
	if (this.hasC("Edit")&&this.selection) this.selectView();
	this.exD=this.d;
	this.hasToDrawWholeGoban=0;
};

mxG.G.prototype.focusInView=function()
{
	this.xFocus=Math.min(Math.max(this.xFocus,this.xl),this.xr);
	this.yFocus=Math.min(Math.max(this.yFocus,this.yt),this.yb);
};

mxG.G.prototype.doFocusGoban=function(ev)
{
	// warning: all browsers don't manage event order in the same way
	if (this.doNotFocusGobanJustAfter) return;
	this.focusInView();
	this.dNat[this.xy(this.xFocus,this.yFocus)]=0;
	this.gobanFocusVisible=1;
	this.drawGoban();
};

mxG.G.prototype.hideGobanFocus=function()
{
	if (this.inView(this.xFocus,this.yFocus)) this.dNat[this.xy(this.xFocus,this.yFocus)]=0;
	this.gobanFocusVisible=0;
	this.drawGoban();
	this.doNotFocusGobanJustAfter=0;
};

mxG.G.prototype.doBlur4FocusGoban=function(ev)
{
	this.hideGobanFocus();
	this.doNotFocusGobanJustAfter=0;
};

mxG.G.prototype.doMouseDown4FocusGoban=function(ev)
{
	this.doNotFocusGobanJustAfter=1;
};

mxG.G.prototype.doContextMenu4FocusGoban=function(ev)
{
	this.hideGobanFocus();
};

mxG.G.prototype.doKeydownGoban=function(ev)
{
	var r=0;
	switch(mxG.GetKCode(ev))
	{
		case 37:case 72:if (this.gobanFocusVisible) this.xFocus--;r=1;break;
		case 39:case 74:if (this.gobanFocusVisible) this.xFocus++;r=1;break;
		case 38:case 85:if (this.gobanFocusVisible) this.yFocus--;r=1;break;
		case 40:case 78:if (this.gobanFocusVisible) this.yFocus++;r=1;break;
	}
	if (r)
	{
		this.focusInView();
		if (this.hasC("Edit")&&(this.editTool=="Select"))
		{
			if (this.inSelect==2) this.selectGobanArea(this.xFocus,this.yFocus);
			else this.gobanFocusVisible=1;
		}
		this.hasToDrawWholeGoban=1;
		this.updateAll();
		ev.preventDefault();
	}
	this.lastKeydownOnGoban=r;
};

mxG.G.prototype.initGoban=function()
{
	var s,k=this.k,bki;
	if (this.gobanFocus)
	{
		this.xFocus=0;
		this.yFocus=0;
		// add event listeners to InnerGobanDiv otherwise side effect when a gBox is shown
		this.getE("InnerGobanDiv").addEventListener("keydown",function(ev){mxG.D[k].doKeydownGoban(ev);},false);
		this.getE("InnerGobanDiv").addEventListener("focus",function(ev){mxG.D[k].doFocusGoban(ev);},false);
		this.getE("InnerGobanDiv").addEventListener("blur",function(ev){mxG.D[k].doBlur4FocusGoban(ev);},false);
		this.getE("InnerGobanDiv").addEventListener("mousedown",function(ev){mxG.D[k].doMouseDown4FocusGoban(ev);},false);
		this.getE("InnerGobanDiv").addEventListener("contextmenu",function(ev){mxG.D[k].doContextMenu4FocusGoban(ev);},false);
	}
	if (this.gobanBk) mxG.AddCssRule("#"+this.n+"GobanCanvas {background:"+this.gobanBk+";}");
	else this.gobanBk="";
	this.gcn=this.getE("GobanCanvas");
	this.gcx=this.gcn.getContext("2d");
	if (!this.lineColor) this.lineColor=mxG.GetStyle(this.gcn,"color");
	if (this.gobanFocus&&!this.focusColor) this.focusColor="#f00";
};

mxG.G.prototype.disableGoban=function()
{
	var e=this.getE("InnerGobanDiv");
	if (!e.hasAttribute("data-maxigos-disabled"))
	{
		e.setAttribute("data-maxigos-disabled","1");
		e.setAttribute("tabindex","-1");
	}
};

mxG.G.prototype.enableGoban=function()
{
	var e=this.getE("InnerGobanDiv");
	if (e.hasAttribute("data-maxigos-disabled"))
	{
		e.removeAttribute("data-maxigos-disabled");
		e.setAttribute("tabindex","0");
	}
};

mxG.G.prototype.isGobanDisabled=function()
{
	return this.getE("InnerGobanDiv").hasAttribute("data-maxigos-disabled");
};

mxG.G.prototype.updateGoban=function()
{
	var i,j,k,x,y,z=-1,m;
	if (this.markOnLastOn)
	{
		m=this.gor.play;
		if (this.gor.getAct(m)=="")
		{
			x=this.gor.getX(m);
			y=this.gor.getY(m);
			if (this.inView(x,y)) z=this.xy(x,y);
		}
	}
	for (i=this.xl;i<=this.xr;i++)
		for (j=this.yt;j<=this.yb;j++)
		{
			if (this.hasC("Diagram")) this.addNatAndNum(i,j,z);
			else
			{
				k=this.xy(i,j);
				this.vNat[k]=this.gor.getBanNat(i,j);
				this.vStr[k]=(z==k)?"_ML_":"";
			}
		}
	if (this.hasC("Diagram")) this.addMarksAndLabels();
	if (this.hasC("Variations")) this.addVariationMarks();
	this.drawGoban();
	if (this.gobanFocus)
	{
		if (this.gBox) this.disableGoban();else this.enableGoban();
	}
};

mxG.G.prototype.refreshGoban=function()
{
	if (this.d!=this.exD) this.drawGoban();
	// always resize gBox otherwise sometimes not proper resize
	if (this.gBox) this.resizeGBox(this.gBox);
};

mxG.G.prototype.createGoban=function()
{
	var s;
	if (!this.onBlackColor) this.onBlackColor="#fff";
	if (!this.onWhiteColor) this.onWhiteColor="#000";
	if (!this.blackStoneColor) this.blackStoneColor="#000";
	if (!this.whiteStoneColor) this.whiteStoneColor="#fff";
	this.goodnessCode={Good:1,Bad:2,Even:4,Warning:8,Unclear:16,OffPath:32};
	this.gobanFocus=(this.hasC("Solve")
				   ||this.hasC("Variations")
				   ||this.hasC("Guess"))?1:0;
	this.vNat=[];
	this.dNat=[];
	this.vStr=[];
	this.dStr=[];
	this.write("<div class=\"mxGobanDiv\" id=\""+this.n+"GobanDiv\">");
	s="position:relative;outline:none;";
	this.write("<div"+(this.gobanFocus?" tabindex=\"0\"":"")+" class=\"mxInnerGobanDiv\" id=\""+this.n+"InnerGobanDiv\" style=\""+s+"\">");
	// -webkit-tap-highlight-color:rgba(0,0,0,0); avoid bad touch effect on mobile
	// -webkit-text-size-adjust:none; avoid minimal font-size effect on mobile chrome
	s="display:block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:none;";
	this.write("<canvas width=\"0\" height=\"0\" style=\""+s+"\" id=\""+this.n+"GobanCanvas\">");
	this.write("</canvas></div></div>");
};

}