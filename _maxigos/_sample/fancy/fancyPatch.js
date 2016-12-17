// maxiGos v6.57 > fancyPatch.js

if (typeof mxG.G.prototype.createFancy=='undefined'){

mxG.G.prototype.alea=function(n)
{
	var r=Math.floor(Math.random()*(n+1));
	if (r==(n+1)) r=n;
	return r;
};

mxG.G.prototype.zz=function()
{
	r=this.alea(15);
	if (r<10) return String.fromCharCode(r+48);
	else return String.fromCharCode(r+87);
};

mxG.G.prototype.wh=function()
{
	var w=630,h=460;
	// don't use "else" here
	if (document.body&&document.body.offsetWidth)
	{
		w=document.body.offsetWidth;
		h=document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat'&&document.documentElement&&document.documentElement.offsetWidth)
	{
		w=document.documentElement.offsetWidth;
		h=document.documentElement.offsetHeight;
	}
	if (window.innerWidth&&window.innerHeight)
	{
		w=window.innerWidth;
		h=window.innerHeight;
	}
	this.getE("GlobalBoxDiv").style.position="absolute";
	this.getE("GlobalBoxDiv").style.top=this.alea(h-this.gobanHeight())+"px";
	this.getE("GlobalBoxDiv").style.left=this.alea(w-this.gobanWidth())+"px";
};

mxG.G.prototype.drawStone4fancy=function(cx,nat,x,y,d)
{
	if (this.in3dOn) cx.drawImage(this.img[nat],x,y,d,d);
	else
	{
		cx.beginPath();
		cx.arc(x+d/2,y+d/2,d/2-1,0,Math.PI*2,false);
		cx.fillStyle=(nat=="B")?this.blackStoneColor:this.whiteStoneColor;
		cx.fill();
	}
};

mxG.G.prototype.drawPoint4fancy=function(cx,x,y,nat,s)
{
	var d=this.d4fancy,r=((d-1)>>1),xo=0,yo=0;
	// fillRect with black doesn't work because of the colorization process
	cx.clearRect((x-this.xli)*d,(y-this.yti)*d,d,d);
	if ((nat=="B")||(nat=="W")) this.drawStone4fancy(cx,nat.substr(0,1),(x-this.xli)*d,(y-this.yti)*d,d);
};

mxG.G.prototype.changeFancy=function()
{
	var toto="a";
	var tata="b";
	this.gcx.fillStyle="#000";
	this.gcx.clearRect(0,0,this.gcn.width,this.gcn.height);
	this.d4fancy=(this.alea(19)+23)*2+1;
	this.blackStoneColor="#"+this.zz()+this.zz()+this.zz()+this.zz()+this.zz()+this.zz();
	this.whiteStoneColor="#"+this.zz()+this.zz()+this.zz()+this.zz()+this.zz()+this.zz();
	this.setD();
	this.setGobanSize();
	this.wh();
};

mxG.G.prototype.setD4Fancy=function()
{
	var exD=0;
	this.d=this.d4fancy;
	if (this.d!=exD)
	{
		this.z=0;
		this.d2=0;
		this.lw=Math.max(1,Math.floor(this.d/23));
		this.img={B:this.setImg("B",this.d),W:this.setImg("W",this.d)};
		this.imgSmall={B:this.setImg("B",1+this.d>>1),W:this.setImg("W",1+this.d>>1)};
	}
};

mxG.G.prototype.initFancy=function()
{
	this.wh();
};

mxG.G.prototype.updateFancy=function()
{
	if (this.cN!=this.lN.KidOnFocus()) this.changeFancy();
	this.lN=this.cN; // set last node
};

mxG.G.prototype.refreshFancy=function()
{
	if (this.cN.KidOnFocus()) this.placeNode();
	else
	{
		var aN=this.cN.Dad;
		while ((aN!=this.rN)&&(aN.Focus==aN.Kid.length)) aN=aN.Dad;
		if (aN.Focus<aN.Kid.length) aN.Focus++;
		else aN.Focus=1; // aN can be only rootNode in this case
		aN=aN.KidOnFocus();
		this.backNode(aN);
	}
	this.updateAll();
};

mxG.G.prototype.createFancy=function()
{
	this.setD=this.setD4Fancy;
	this.drawPoint=this.drawPoint4fancy;
	this.d4fancy=(this.alea(19)+23)*2+1;
	this.blackStoneColor="#"+this.zz()+this.zz()+this.zz()+this.zz()+this.zz()+this.zz();
	this.whiteStoneColor="#"+this.zz()+this.zz()+this.zz()+this.zz()+this.zz()+this.zz();
	this.lN=this.rN; // lN means last node
};

}
