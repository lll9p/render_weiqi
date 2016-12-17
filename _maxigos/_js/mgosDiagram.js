// maxiGos v6.52 > mgosDiagram.js

if (typeof mxG.G.prototype.createDiagram=='undefined'){

mxG.G.prototype.k2n=function(k){return (this.DY+1-k)+"";};
mxG.G.prototype.k2c=function(k){var r=((k-1)%25)+1;return String.fromCharCode(r+((r>8)?65:64))+((k>25)?(k-r)/25:"");};

mxG.G.prototype.getIndices=function(x,y)
{
	if ((x==0)&&(y>0)&&(y<=this.DY)) return this.k2n(y);
	if ((y==0)&&(x>0)&&(x<=this.DX)) return this.k2c(x);
	if ((x==(this.DX+1))&&(y>0)&&(y<=this.DY)) return this.k2n(y);
	if ((y==(this.DY+1))&&(x>0)&&(x<=this.DX)) return this.k2c(x);
	return "";
};

mxG.G.prototype.setIndices=function()
{
	var indicesOn=this.indicesOn;
	if (this.configIndicesOn===undefined) this.indicesOn=((parseInt(this.getInfo("FG"))&1)?0:1);
	if (this.indicesOn&&(this.xl==1)) this.xli=0;else this.xli=this.xl;
	if (this.indicesOn&&(this.yt==1)) this.yti=0;else this.yti=this.yt;
	if (this.indicesOn&&(this.xr==this.DX)) this.xri=this.DX+1;else this.xri=this.xr;
	if (this.indicesOn&&(this.yb==this.DY)) this.ybi=this.DY+1;else this.ybi=this.yb;
	if (indicesOn!=this.indicesOn) this.hasToDrawWholeGoban=1;
};

mxG.G.prototype.setNumbering=function()
{
	if (this.configAsInBookOn===undefined) this.asInBookOn=((parseInt(this.getInfo("FG"))&256)?1:0);
	if (this.configNumberingOn===undefined)
	{
		var aN=this.cN;
		this.numberingOn=parseInt(this.getInfo("PM"));
		if (this.numberingOn&&(aN!=this.rN))
		{
			var ka=0,kb=0,kc=0,de,bN=null,cN=null,fg;
			while (aN!=this.rN)
			{
				if (!bN&&aN.P.MN) {kb=ka;bN=aN;}
				if (!cN&&aN.P.FG) {kc=ka;cN=aN;}
				if (aN.P.AB||aN.P.AW||aN.P.AE) break;
				if (aN.P.B||aN.P.W) ka++;
				aN=aN.Dad;
			}
			if (!cN) {cN=this.rN.KidOnFocus();kc=ka;}
			de=((!cN.P.B&&!cN.P.W)?1:0);
			fg=ka-kc+(bN?parseInt(bN.P.MN[0])-ka+kb-((bN==cN)?de:0):0);
			this.numFrom=ka-kc;
			if (!this.numFrom) {this.numFrom=1;fg++;}
			if (this.numberingOn==2) fg=fg%100;
			this.numWith=fg;
		}
		else
		{
			this.numFrom=1;
			this.numWith=1;
		}
	}
};

mxG.G.prototype.addMarksAndLabels=function()
{
	if (!this.marksAndLabelsOn) return;
	var MX=["MA","TR","SQ","CR","LB","TB","TW"];
	var k,aLen,s,x,y,x1,y1,x2,y2,z;
	for (z=0;z<7;z++)
	{
		if (this.cN.P[MX[z]]) aLen=this.cN.P[MX[z]].length;else aLen=0;
		for (k=0;k<aLen;k++)
		{
			s=this.cN.P[MX[z]][k];
			if (MX[z]=="LB")
			{
				if (s.length>3)
				{
					x=s.c2n(0);
					y=s.c2n(1);
					this.vStr[this.xy(x,y)]="|"+s.substr(3)+"|";
				}
			}
			else if (s.length==2)
			{
				x=s.c2n(0);
				y=s.c2n(1);
				this.vStr[this.xy(x,y)]="_"+MX[z]+"_";
			}
			else if (s.length==5)
			{
				x1=s.c2n(0);
				y1=s.c2n(1);
				x2=s.c2n(3);
				y2=s.c2n(4);
				for (x=x1;x<=x2;x++) for (y=y1;y<=y2;y++) this.vStr[this.xy(x,y)]="_"+MX[z]+"_";
			}
		}
	}
};

mxG.G.prototype.isNumbered=function(aN)
{
	if (!(aN.P["B"]||aN.P["W"])) return 0;
	if (this.configNumberingOn!=undefined) return this.numberingOn;
	var bN=((aN==this.rN)?aN.KidOnFocus():aN);
	while(bN!=this.rN)
	{
		if (bN.P["PM"]) return parseInt(bN.P["PM"][0]);
		bN=bN.Dad;
	}
	return 1;
};

mxG.G.prototype.getAsInTreeNum=function(xN)
{
	// return num of the node as it was when placed
	var aN=xN,ka=0,kb=0,kc=0,de,bN=null,cN=null,fg;
	while (aN!=this.rN)
	{
		if (!bN&&aN.P["MN"]) {bN=aN;kb=ka;}
		if (!cN&&aN.P["FG"]) {cN=aN;kc=ka;}
		if (aN.P["AB"]||aN.P["AW"]||aN.P["AE"]) break;
		if (aN.P["B"]||aN.P["W"]) ka++;
		if ((aN.Dad.P["B"]&&aN.P["B"])||(aN.Dad.P["W"]&&aN.P["W"])) ka++; // tenuki
		aN=aN.Dad;
	}
	if (!cN) {cN=this.rN.KidOnFocus();kc=ka;}
	de=((!cN.P.B&&!cN.P.W)?1:0);
	fg=ka-kc+(bN?parseInt(bN.P.MN[0])-ka+kb-((bN==cN)?de:0):0);
	if (this.isNumbered(xN)==2) fg=fg%100;
	return fg+kc;
};

mxG.G.prototype.getVisibleMove=function(x,y)
// if (asInBookOn and numberingOn) return the visible move as in book
// 		return the move which was on (x,y) when the current first numbered move was played if any
//		else return the first move played later on (x,y) if any
//		else return 0
// else return the last move played at (x,y) if any
{
	var k,kmin,kmax;
	if (this.asInBookOn&&this.numberingOn)
	{
		kmin=Math.min(this.gor.setup+this.numFrom,this.gor.play);
		for (k=kmin;k>0;k--)
			if ((!this.gor.getO(k)||(this.gor.getO(k)>=kmin))&&(this.gor.getX(k)==x)&&(this.gor.getY(k)==y)&&(this.gor.getNat(k)!="E")) return k;
		kmax=this.gor.getBanNum(x,y);
		if (!kmax) kmax=this.gor.play;
		for (k=(kmin+1);k<=kmax;k++)
			if ((this.gor.getX(k)==x)&&(this.gor.getY(k)==y)&&(this.gor.getNat(k)!="E")) return k;
		return this.gor.getBanNum(x,y);
	}
	else return this.gor.getBanNum(x,y);
};

mxG.G.prototype.getVisibleNat=function(n)
{
	// n is the num of the visible move in gor history
	return this.gor.getNat(n);
};

mxG.G.prototype.getTenuki=function(m,n)
{
	var k,r=0;
	for (k=m;k>n;k--) if (this.gor.getNat(k)==this.gor.getNat(k-1)) r++;
	return r;
};

mxG.G.prototype.getCoreNum=function(m)
{
	// m is the num of the move in gor history
	var s=this.gor.setup;
	if (m>s)
	{
		var n=s+this.numFrom,r;
		if (m>=n) {r=m-n+this.numWith+this.getTenuki(m,n);return (r<1)?"":r+"";}
	}
	return "";
};

mxG.G.prototype.getVisibleNum=function(m)
{
	// m is the num of the move in gor history
	if (this.numberingOn) return this.getCoreNum(m);
	return "";
};

mxG.G.prototype.addNatAndNum=function(x,y,z)
{
	var m=this.getVisibleMove(x,y),n=this.getVisibleNum(m),k=this.xy(x,y);
	this.vNat[k]=this.getVisibleNat(m);
	this.vStr[k]=(this.markOnLastOn&&(z==k)&&!n)?(this.numAsMarkOnLastOn?this.getCoreNum(m):"_ML_"):n;
};

mxG.G.prototype.buildStone=function(nat,d,s)
{
	var cn,cx,c;
	cn=document.createElement("canvas");
	cn.width=cn.height=d;
	cx=cn.getContext("2d");
	this.drawStone(cx,nat,d);
	this.drawText(cx,0,0,d,s,{c:(nat=="B")?this.onBlackColor:this.onWhiteColor});
	return '<img alt="'+nat+'" src="'+cn.toDataURL("image/png")+'">';
};

mxG.G.prototype.drawMark=function(cx,x,y,d)
{
	var z=(d>>2);
	cx.beginPath();
	cx.moveTo(x+z,y+z);
	cx.lineTo(x+d-z,y+d-z);
	cx.moveTo(x+d-z,y+z);
	cx.lineTo(x+z,y+d-z);
	cx.stroke();
};

mxG.G.prototype.drawTriangle=function(cx,x,y,d)
{
	var r=(d>>1),s=(r>>1),t=(s>>1),e=0.5;
	cx.beginPath();
	cx.moveTo(x+r+e,y+s+e);
	cx.lineTo(x+d-s,y+d-s-t+e);
	cx.lineTo(x+s,y+d-s-t+e);
	cx.closePath();
	cx.stroke();
};

mxG.G.prototype.drawCircle=function(cx,x,y,d)
{
	var r=d/3;
	cx.beginPath();
	cx.arc(x+d/2,y+d/2,r,0,Math.PI*2,false);
	cx.stroke();
};

mxG.G.prototype.drawSquare=function(cx,x,y,d)
{
	var z=(d>>2),e=0.5;
	cx.strokeRect(x+z+e,y+z+e,d-2*e-(z<<1),d-2*e-(z<<1));
};

mxG.G.prototype.preTerritory=function(x,y,nat,m)
{
	if (this.marksAndLabelsOn&&(this.cN.P.TB||this.cN.P.TW))
	{
		if (this.asInBookOn&&(m!="_TB_")&&(m!="_TW_"))
		{
			if ((nat=="B")&&(this.gor.getBanNat(x,y)=="W")) m="_TW_";
			else if ((nat=="W")&&(this.gor.getBanNat(x,y)=="B")) m="_TB_";
		}
	}
	return m;
};

mxG.G.prototype.isLabel=function(m){return m.search(/^\|(.*)\|$/)>-1;};

mxG.G.prototype.removeLabelDelimiters=function(m){return m.replace(/^(\|)+(.*)(\|)+$/,"$2");};

mxG.G.prototype.createDiagram=function()
{
	if (!this.hasC("Edit"))
	{
		this.configIndicesOn=this.indicesOn;
		this.configAsInBookOn=this.asInBookOn;
		this.configNumberingOn=this.numberingOn;
	}
	this.numFrom=1;
	this.numWith=1;
};

}