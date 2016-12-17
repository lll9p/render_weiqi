// maxiGos v6.56 > mgosAnimatedStone.js Copyright 2016 Francois Mizessyn, BSD license (see license.txt)

if (typeof mxG.G.prototype.createAnimatedStone=='undefined'){

mxG.G.prototype.canAnimeStone=function()
{
	if (!this.animatedStoneOn) return 0;
	var aN=this.cN.KidOnFocus(),s,a,b;
	if (aN)
	{
		if (aN.P.B) s=aN.P.B[0];
		else if (aN.P.W) s=aN.P.W[0];
		else s="";
		if (s)
		{
			a=s.c2n(0);
			b=s.c2n(1);
			return this.inView(a,b);
		}
	}
	return 0;
};

mxG.G.prototype.isNextMove=function(x,y)
{
	var aN,s,a,b;
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
	return 0;
};

mxG.G.prototype.checkSolve4AnimatedStone=function(x,y)
{
	if (this.cN.KidOnFocus()&&this.cN.KidOnFocus().inMove) return;
	this.checkSolveAsUsual(x,y);
};

mxG.G.prototype.doVirtualNext4AnimatedStone=function()
{
	if (!this.canAnimeStone()) {this.doVirtualNextAsUsual();return;}
	if (this.cN.Kid.length&&!this.cN.KidOnFocus().P[this.uC])
	{
		this.doNext4AnimatedStone();
	}
};

mxG.G.prototype.doNext4AnimatedStone=function()
{
	if (!this.canAnimeStone()) {this.doNextAsUsual();return;}
	var nat="",x=0,y=0,a=0,b=0,s="",aN=this.cN.KidOnFocus();
	while (aN&&aN.inMove) aN=aN.KidOnFocus();
	if (aN)
	{
		if (aN.P.B) {s=aN.P.B[0];nat="B";}
		else if (aN.P.W) {s=aN.P.W[0];nat="W";}
		if (s)
		{
			x=s.c2n(0);
			y=s.c2n(1);
		}
		if (nat&&x&&y)
		{
			var d=this.d,r=d/2,z=this.z,d2=this.d2,d3=(d2&1?1:0);
			var dxl=0,dyt=0,dxr=0,dyb=0;
			a=(x-this.xli)*d+z;
			b=(y-this.yti)*(d+d2)+(d2>>1)+d3+z;
			if (x==this.xl) dxl=z;
			if (y==this.yt) dyt=z;
			if (x==this.xr) dxr=z;
			if (y==this.yb) dyb=z;
			if (x==0) a=a-z;
			if (y==0) {b=b-z;dyb=dyb-d3;}
			if (x==(this.DX+1)) a=a+z;
			if (y==(this.DY+1)) {b=b+z+d3;dyb=dyb-d3;}
		}
		aN.inMove=1;
		this.animatedList.push(aN);
		this.moveStone(x,y,nat,a,b);
	}
};

mxG.G.prototype.stepLoop4AnimatedStone=function()
{
	this.inStepLoop=1;
	// force reflow otherwise bug when switching tab on Mac Safari
	if (mxG.IsMacSafari) this.gcn.offsetHeight;
	if (this.cN.KidOnFocus())
	{
		this.cN.Focus=1;
		this.doNext();
	}
	else
	{
		if (this.mainVariationOnlyLoop) {this.rN.Focus=1;this.backNode(this.rN.KidOnFocus());}
		else if (this.cN.Dad)
		{
			var aN=this.cN.Dad,bN;
			while ((aN!=this.rN)&&(aN.Focus==aN.Kid.length)) aN=aN.Dad;
			if (aN.Focus<aN.Kid.length) aN.Focus++;
			else aN.Focus=1; // aN can be only rootNode in this case
			bN=aN=aN.KidOnFocus();
			while (bN.Kid.length) {bN.Focus=1;bN=bN.Kid[0];}
			this.backNode(aN);
		}
		this.updateAll();
	}
	this.loopTimeout=setTimeout(this.g+".stepLoop()",this.getLoopTime());
	this.inStepLoop=0;
};

mxG.G.prototype.afterMovingStone=function(id,x,y)
{
	var cn,aN;
	this.animatedList[0].inMove=0;
	this.animatedList.shift();
	if (this.isNextMove(x,y))
	{
		if (this.hasC("Solve")) this.doVirtualNextAsUsual();
		else this.doNextAsUsual();
	}
	cn=document.getElementById(id);
	if (cn) cn.parentNode.removeChild(cn);
};

mxG.G.prototype.moveStone=function(x,y,nat,a,b)
{
	var p,i,cn,cx,xy,id,n,t,tm,d=this.d;
	var zz,kk,mm;
	var za,zb;
	xy=this.xy(x,y);
	tm=(this.animatedStoneTime?this.animatedStoneTime:this.loopTime?this.loopTime:1000);
	id=this.n+"cn4ms"+xy;
	if (this.getE("cn4ms"+xy))
	{
		// another move with same coordinates is animated => don't animate this one
		setTimeout(this.g+".afterMovingStone(\""+id+"\","+x+","+y+")",tm);
	}
	else
	{
		za=this.gcn.width;
		zb=this.gcn.height;
		p=this.getE("InnerGobanDiv");
		cn=document.createElement("canvas");
		cn.id=id;
		cn.height=d;
		cn.width=d;
		if (nat=="B") {cn.style.right="0";cn.style.bottom="0";}
		else {cn.style.top="0";cn.style.left="0";}
		cn.style.display="block";
		cn.style.position="absolute";
		cn.style.background="none";
		cx=cn.getContext("2d");
		cx.drawImage(this.img[nat],0,0,d,d);
		n=19+this.indicesOn;
		if (nat=="B") t=(((za-a-d)*(za-a-d)+(zb-b-d)*(zb-b-d))/(za*za+zb*zb)+0.5)*tm;
		else  t=((a*a+b*b)/(za*za+zb*zb)+0.5)*tm;
		if (t>tm) t=tm;
		zz=t/1000+"s ease-out";
		mm=["MozTransition","WebkitTransition","msTransition","OTransition","transition"];
		for (kk=0;kk<5;kk++) cn.style[mm[kk]]=zz;
		p.appendChild(cn);
		cn.offsetHeight;
		if (nat=="B") zz="translate(-"+(za-a-d)+"px,-"+(zb-b-d)+"px)";
		else zz="translate("+a+"px,"+b+"px)";
		mm=["MozTransform","WebkitTransform","msTransform","OTransform","transform"];
		for (kk=0;kk<5;kk++) cn.style[mm[kk]]=zz;
		setTimeout(this.g+".afterMovingStone(\""+id+"\","+x+","+y+")",tm);
	}
};

mxG.G.prototype.createAnimatedStone=function()
{
	// "AnimatedStone" component can be inserted in any box
	// this.animatedStoneTime=1000;
	// this.animatedStoneOn=1;
	if (this.hasC("Solve"))
	{
		this.checkSolveAsUsual=this.checkSolve;
		this.checkSolve=this.checkSolve4AnimatedStone;
		this.doVirtualNextAsUsual=this.doVirtualNext;
		this.doVirtualNext=this.doVirtualNext4AnimatedStone;
	}
	if (this.hasC("Navigation"))
	{
		this.doNextAsUsual=this.doNext;
		this.doNext=this.doNext4AnimatedStone;
	}
	this.stepLoop=this.stepLoop4AnimatedStone;
	this.animatedList=[];
};

}
