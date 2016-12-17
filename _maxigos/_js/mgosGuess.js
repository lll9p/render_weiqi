// maxiGos v6.57 > mgosGuess.js

if (typeof mxG.G.prototype.createGuess=='undefined'){

mxG.Z.fr["Guess-o-meter"]="Devinette";

mxG.G.prototype.updateGuessBar=function(dz)
{
	if (!this.guessBoxOn) return;
	if (!this.canPlaceGuess) dz=0;
	var dzm=(this.DX+this.DY)>>1,pz,el=this.getE("GuessOMeterDiv"),cn=this.getE("GuessCanvas");
	pz=(dz<=0)?100:100-((dz>dzm)?100:((dz*100)/dzm));
	if (this.verticalGuessBar)
	{
		// cannot do that easily with % + css because 1px bad visual effet at least in chrome 23.0.1271.64
		var hb=mxG.GetPxrStyle(el,"height"),hc=Math.floor(hb*pz/100);
		cn.style.width="100%";
		cn.style.height=(pz==100)?"100%":hc+"px";
		cn.style.marginTop=(hb-hc)+"px";
	}
	else
	{
		el.style.visibility=((pz==100)?"hidden":"visible");
		cn.style.width=pz+"%";
	}
	this.dz=dz;
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

mxG.G.prototype.checkGuess=function(a,b)
{
	var aN,bN,k,km,s,x,y,dx,dy,dz=this.DX+this.DY;
	aN=this.cN;
	km=aN.Kid.length;
	if (!km) {this.plonk();return;}
	for (k=0;k<km;k++)
	{
		bN=aN.Kid[k];
		
		x=-this.DX;
		y=-this.DY;
		if (!bN.Add&&(bN.P.B||bN.P.W))
		{
			s=bN.P[bN.P.B?"B":"W"][0];
			if (s.length==2)
			{
				x=s.c2n(0);
				y=s.c2n(1);
				if (!this.inView(x,y)) {x=0;y=0;}
			}
			else {x=0;y=0;}
		}
		if ((x==a)&&(y==b))
		{
			// well guessed, place the move
			if (this.canPlaceGuess)
			{
				aN.Focus=k+1;
				this.placeNode();
				this.updateAll();
			}
			else this.updateGuessBar(0);
			return;
		}
		else
		{
			if (!bN.Add&&x&&y)
			{
				if (a&&b)
				{
					dx=(((x-a)>0)?x-a:a-x);
					dy=(((y-b)>0)?y-b:b-y);
					dz=Math.min(dz,dx+dy);
				}
				else dz=(this.DX+this.DY)>>1;
			}
		}
	}
	this.updateGuessBar(dz);
};

mxG.G.prototype.doClickGuess=function(ev)
{
	if (this.canPlaceGuess)
	{
		var c=this.getC(ev);
		if (!this.inView(c.x,c.y)) {this.plonk();return;}
		this.checkGuess(c.x,c.y);
	}
};

mxG.G.prototype.doKeydownGobanForGuess=function(ev)
{
	if (this.canPlaceGuess)
		if (mxG.GetKCode(ev)==13) this.checkGuess(this.xFocus,this.yFocus);
};

mxG.G.prototype.initGuess=function()
{
	var el=this.getE("GobanCanvas"),k=this.k;
	el.getMClick=mxG.GetMClick;
	el.addEventListener("click",function(ev){mxG.D[k].doClickGuess(ev);},false);
	if (this.gobanFocus) this.getE("GobanDiv").addEventListener("keydown",function(ev){mxG.D[k].doKeydownGobanForGuess(ev);},false);
};

mxG.G.prototype.updateGuess=function()
{
	this.updateGuessBar(this.cN.Add?100:0);
};

mxG.G.prototype.refreshGuess=function()
{
	this.updateGuessBar(this.dz);
};

mxG.G.prototype.createGuess=function()
{
	if (this.guessBoxOn)
	{
		var s="<div class=\"mxGuessDiv\" id=\""+this.n+"GuessDiv\">";
		s+="<div class=\"mxGuessOMeterDiv\" title=\""+this.local("Guess-o-meter")+"\" id=\""+this.n+"GuessOMeterDiv\"><canvas id=\""+this.n+"GuessCanvas\"></canvas></div>";
		s+="</div>";
		this.write(s);
	}
};

}