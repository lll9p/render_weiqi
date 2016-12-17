// maxiGos v6.57 > mgosVariations.js

if (typeof mxG.G.prototype.createVariations=='undefined'){

mxG.Z.fr["Variations: "]="Variations : ";
mxG.Z.fr["no variation"]="aucune";

mxG.G.prototype.setMode=function()
{
	this.styleMode=parseInt(this.getInfo("ST"));
	if (this.configVariationMarksOn===undefined) this.variationMarksOn=(this.styleMode&2)?0:1;
	else
	{
		if (this.variationMarksOn) this.styleMode&=~2;
		else this.styleMode|=2;
	}
	if (this.configSiblingsOn===undefined) this.siblingsOn=(this.styleMode&1)?1:0;
	else
	{
		if (this.siblingsOn) this.styleMode|=1;
		else this.styleMode&=~1;
	}
	if (this.hideSingleVariationMarkOn) this.styleMode|=4;
};

mxG.G.prototype.doClickVariationInBox=function(a)
{
	var aN=this.styleMode&1?this.cN.Dad:this.cN;
	if (this.styleMode&1) this.backNode(aN);
	aN.Focus=a+1;
	this.placeNode();
	this.updateAll();
};

mxG.G.prototype.addVariationMarkInBox=function(a,m)
{
	var i=document.createElement("input"),k=this.k;
	if (this.hasC("Diagram")&&this.isLabel(m)) m=this.removeLabelDelimiters(m);
	i.type="button";
	i.value=m;
	i.addEventListener("click",function(ev){mxG.D[k].doClickVariationInBox(a);},false);
	this.getE("VariationsDiv").appendChild(i);
};

mxG.G.prototype.buildVariationMark=function(l)
{
	if (this.variationMarkSeed) return String.fromCharCode(this.variationMarkSeed.charCodeAt(0)-1+l);
	else return l+"";
};

mxG.G.prototype.addVariationMarks=function()
{
	var aN,s,k,km,l=0,x,y,z,m,e=this.getE("VariationsDiv");
	var s1="<span class=\"mxVariationsSpan\">"+this.local("Variations: ")+"</span>";
	var s2="<span class=\"mxNoVariationSpan\">"+this.local("no variation")+"</span>";
	if (this.variationsBoxOn) e.innerHTML=s1;
	if (this.styleMode&1)
	{
		if (!this.cN||!this.cN.Dad) 
		{
			if (this.variationsBoxOn) e.innerHTML=s1+s2;
			return;
		}
		aN=this.cN.Dad;
	}
	else
	{
		if (!this.cN||!this.cN.KidOnFocus())
		{
			if (this.variationsBoxOn) e.innerHTML=s1+s2;
			return;
		}
		aN=this.cN;
	}
	km=aN.Kid.length;
	if ((this.styleMode&4)&&(km==1))
	{
		if (this.variationsBoxOn) e.innerHTML=s1;
		return;
	}
	for (k=0;k<km;k++)
		if (aN.Kid[k]!=this.cN)
		{
			s="";
			l++;
			if (aN.Kid[k].P.B) s=aN.Kid[k].P.B[0];
			else if (aN.Kid[k].P.W) s=aN.Kid[k].P.W[0];
			if (s.length==2)
			{
				x=s.c2n(0);
				y=s.c2n(1);
				z=this.xy(x,y);
				if (this.inView(x,y)) m=this.vStr[z];else m=this.buildVariationMark(l);
				if ((m+"").search(/^\((.*)\)$/)==-1)
				{
					if (!m) m=this.buildVariationMark(l);
					if (!(this.styleMode&2)&&(!(this.styleMode&1)||(aN.Kid[k]!=this.cN))) this.vStr[z]="("+m+")";
				}
				if ((m+"").search(/^_.*_$/)==0) m=this.buildVariationMark(l);
			}
			else m=this.buildVariationMark(l);
			if (this.variationsBoxOn&&(aN.Kid[k]!=this.cN)) this.addVariationMarkInBox(k,m);
		}
};

mxG.G.prototype.isVariation=function(m)
{
	return m.search(/^\((.*)\)$/)>-1;
};

mxG.G.prototype.removeVariationDelimiters=function(m)
{
	return m.replace(/^(\()+(.*)(\))+$/,"$2");
};

mxG.G.prototype.getVariationNextNat=function()
{
	var aN,k,km;
	// get color from PL
	aN=this.cN;
	if (aN.P.PL) return aN.P.PL[0];
	// get color of cN.KidOnFocus()
	aN=this.cN.KidOnFocus();
	if (aN)
	{
		if (aN.P.B) return "B";
		if (aN.P.W) return "W";
	}
	// get opposite color of cN
	aN=this.cN;
	if (aN.P.B) return "W";
	if (aN.P.W) return "B";
	// get opposite color if cN has AB and no AW (handicap game?) or AW and no AB, 
	if (aN.P.AB&&!aN.P.AW) return "W";
	else if (aN.P.AW&&!aN.P.AB) return "B";
	// get color of cN children
	km=this.cN.Kid.length;
	for (k=0;k<km;k++)
	{
		aN=this.cN.Kid[k];
		if (aN.P.B) return "B";
		if (aN.P.W) return "W";
	}
	// get opposite color of cN brothers
	km=this.cN.Dad.Kid.length;
	for (k=0;k<km;k++)
	{
		aN=this.cN.Dad.Kid[k];
		if (aN.P.B) return "W";
		if (aN.P.W) return "B";
	}
	// unable to decide who will play
	return "B";
};

mxG.G.prototype.addVariationPlay=function(aP,x,y)
{
	var aN,aV=this.xy2s(x,y);
	aN=this.cN.N(aP,aV);
	aN.Add=1;
	this.cN.Focus=this.cN.Kid.length;
};

mxG.G.prototype.checkBW=function(aN,a,b)
{
	var s="",x,y;
	if (aN.P.B||aN.P.W)
	{
		if (aN.P.B) s=aN.P.B[0];else s=aN.P.W[0];
		if (s.length==2) {x=s.c2n(0);y=s.c2n(1);}
		else {x=0;y=0;}
		return (x==a)&&(y==b);
	}
	return 0;
};

mxG.G.prototype.checkAX=function(aN,a,b)
{
	var AX=["AB","AW","AE"];
	var s,x,y,aP,z,k,aLen,x1,x2,y1,y2;
	s="";
	if (aN.P.AB) aP="AB";
	else if (aN.P.AW) aP="AW";
	else if (aN.P.AE) aP="AE";
	else aP=0;
	if (aP) for (z=0;z<3;z++)
	{
		aP=AX[z];
		if (aN.P[aP])
		{
			aLen=aN.P[aP].length;
			for (k=0;k<aLen;k++)
			{
				s=aN.P[aP][k];
				if (s.length==2)
				{
					x=s.c2n(0);
					y=s.c2n(1);
					if ((x==a)&&(y==b)) return 1;
				}
				else if (s.length==5)
				{
					x1=s.c2n(0);
					y1=s.c2n(1);
					x2=s.c2n(3);
					y2=s.c2n(4);
					for (x=x1;x<=x2;x++) for (y=y1;y<=y2;y++) if ((x==a)&&(y==b)) return 1;
				}
			}
		}
	}
	return 0;
};

mxG.G.prototype.checkVariation=function(a,b)
{
	var aN,bN,k,km,ok=0;
	if ((this.styleMode&1)&&(this.cN.Dad==this.rN)) {this.plonk();return;}
	if (a&&b&&this.gor.isOccupied(a,b))
	{
		aN=this.cN.Dad;
		while (!ok&&(aN!=this.rN))
		{
			if (this.checkBW(aN,a,b)||this.checkAX(aN,a,b)) ok=1;
			else aN=aN.Dad;
		}
		if (ok)
		{
			this.backNode(aN);
			this.updateAll();
		}
		return;
	}
	aN=this.styleMode&1?this.cN.Dad:this.cN;
	km=aN.Kid.length;
	for (k=0;k<km;k++)
	{
		bN=aN.Kid[k];
		if (this.checkBW(bN,a,b))
		{
			if (this.styleMode&1) this.backNode(aN);
			aN.Focus=k+1;
			this.placeNode();
			this.updateAll();
			return;
		}
	}
	// (a,b) not in the sgf, thus add it and play it
	// but don't add anything if (this.styleMode&1) since it leads to a mess
	if (this.styleMode&1) {this.plonk();return;}
	this.addVariationPlay(this.getVariationNextNat(),a,b);
	this.placeNode();
	if (this.hasC("Tree")) this.addNodeInTree(this.cN);
	this.updateAll();
};

mxG.G.prototype.doClickVariations=function(ev)
{
	if (this.isGobanDisabled()) return;
	if (this.canPlaceVariation)
	{
		var c=this.getC(ev);
		if (!this.inView(c.x,c.y)) {this.plonk();return;}
		this.checkVariation(c.x,c.y);
	}
};

mxG.G.prototype.doKeydownGobanForVariations=function(ev)
{
	var c;
	if (this.isGobanDisabled()) return;
	if (this.canPlaceVariation)
	{
		c=mxG.GetKCode(ev);
		if ((c==13)||(c==32))
		{
			this.checkVariation(this.xFocus,this.yFocus);
			ev.preventDefault();
		}
	}
};

mxG.G.prototype.initVariations=function()
{
	var el=this.getE("GobanCanvas"),k=this.k;
	el.getMClick=mxG.GetMClick;
	el.addEventListener("click",function(ev){mxG.D[k].doClickVariations(ev);},false);
	if (this.gobanFocus) this.getE("GobanDiv").addEventListener("keydown",function(ev){mxG.D[k].doKeydownGobanForVariations(ev);},false);
};

mxG.G.prototype.refreshVariations=function()
{
	if (this.variationsBoxOn&&this.adjustVariationsWidth) this.adjust("Variations","Width");
};

mxG.G.prototype.createVariations=function()
{
	if (!this.hasC("Edit"))
	{
		this.configVariationMarksOn=this.variationMarksOn;
		this.configSiblingsOn=this.siblingsOn;
	}
	if (this.variationsBoxOn) this.write("<div class=\"mxVariationsDiv\" id=\""+this.n+"VariationsDiv\"></div>");
};

}