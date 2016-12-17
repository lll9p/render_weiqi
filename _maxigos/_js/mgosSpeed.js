// maxiGos v6.57 > mgosSpeed.js

if (typeof mxG.G.prototype.createSpeed=='undefined'){

mxG.G.prototype.setNewSpeed=function(w1)
{
	var el=this.getE("SpeedBarDiv"),wn=mxG.GetPxStyle(el,"width"),cn=this.getE("SpeedCanvas"),wo=mxG.GetPxStyle(cn,"width");
	if (this.hasC("Loop")) this.resetLoop();
	if (w1>wn/2) this.loopTime=1000*(1-w1/wn)*2;
	else if (w1<wn/2) this.loopTime=1000+18000*(0.5-w1/wn);
	else this.loopTime=1000;
	cn.style.left=w1+"px";
	this.speedTokenPos=w1/wn;
};

mxG.G.prototype.doClickSpeed=function(ev)
{
	this.setNewSpeed(this.getE("SpeedBarDiv").getMClick(ev).x);
	this.updateAll();
};

mxG.G.prototype.doClickSpeedPlus=function()
{
	var w1=mxG.GetPxStyle(this.getE("SpeedCanvas"),"left"),wn=mxG.GetPxStyle(this.getE("SpeedBarDiv"),"width");
	this.setNewSpeed(Math.min(wn,w1+wn/10));
	this.updateAll();
};

mxG.G.prototype.doClickSpeedMinus=function()
{
	var w1=mxG.GetPxStyle(this.getE("SpeedCanvas"),"left"),wn=mxG.GetPxStyle(this.getE("SpeedBarDiv"),"width");
	this.setNewSpeed(Math.max(0,w1-wn/10));
	this.updateAll();
};

mxG.G.prototype.doMouseMoveSpeed=function(ev)
{
	if (this.inSpeed)
	{
		var dv=this.getE("SpeedBarDiv"),c=dv.getMClick(ev),x;
		x=Math.min(mxG.GetPxStyle(dv,"width"),Math.max(0,c.x-this.speedTokenOffset));
		this.setNewSpeed(x);
		this.updateAll();
	}
};

mxG.G.prototype.doMouseDownSpeed=function(ev)
{
	var cn=this.getE("SpeedCanvas");
	this.inSpeed=1;
	this.speedTokenOffset=cn.getMClick(ev).x-mxG.GetPxStyle(cn,"width")/2;
	document.body.className+=" mxUnselectable";
};

mxG.G.prototype.doMouseUpSpeed=function(ev)
{
	this.inSpeed=0;
	document.body.className.replace(" mxUnselectable","");
};

mxG.G.prototype.doKeydownSpeed=function(ev)
{
	var r=0;
	switch(mxG.GetKCode(ev))
	{
		case 39:case 72:case 107:this.doClickSpeedPlus();r=1;break;
		case 37:case 74:case 109:this.doClickSpeedMinus();r=1;break;
	}
	if (r) ev.preventDefault();
};

mxG.G.prototype.initSpeed=function()
{
	var dv=this.getE("SpeedBarDiv"),cn=this.getE("SpeedCanvas"),k=this.k;
	mxG.CreateUnselectable();
	dv.getMClick=mxG.GetMClick;
	cn.getMClick=mxG.GetMClick;
	cn.addEventListener("mousedown",function(ev){mxG.D[k].doMouseDownSpeed(ev);},false);
	document.addEventListener("mousemove",function(ev){mxG.D[k].doMouseMoveSpeed(ev);},false);
	document.addEventListener("mouseup",function(ev){mxG.D[k].doMouseUpSpeed(ev);},false);
	this.speedTokenPos=0.5;
	this.speedTokenWidth=cn.width;
	this.speedBarWidth=dv.width;
	cn.style.left=(this.speedTokenPos*this.speedBarWidth)+"px";
	cn.style.marginLeft=-(this.speedTokenWidth/2+mxG.GetPxStyle(cn,"borderLeftWidth"))+"px";
};

mxG.G.prototype.refreshSpeed=function()
{
	var e=this.getE("SpeedBarDiv"),cn=this.getE("SpeedCanvas"),g=this.getE("GobanDiv"),z;
	if (this.adjustSpeedBarWidth)
	{
		z=mxG.GetPxStyle(this.getE("SpeedMinusBtn"),"width")+mxG.GetPxStyle(this.getE("SpeedPlusBtn"),"width")
		e.style.width=(this.gobanWidth()+this.getDW(g)-this.getDW(e)-z)+"px";
	}
	if ((mxG.GetPxStyle(cn,"width")!=this.speedTokenWidth)||(mxG.GetPxStyle(e,"width")!=this.speedBarWidth))
	{
		this.speedTokenWidth=mxG.GetPxStyle(cn,"width");
		this.speedBarWidth=mxG.GetPxStyle(e,"width");
		cn.style.left=(this.speedTokenPos*this.speedBarWidth)+"px";
		cn.style.marginLeft=-(this.speedTokenWidth/2+mxG.GetPxStyle(cn,"borderLeftWidth"))+"px";
	}
};

mxG.G.prototype.createSpeed=function()
{
	var s="";
	s+="<div tabindex=\"-1\" style=\"outline:none;position:relative;\" class=\"mxSpeedDiv\" onkeydown=\""+this.g+".doKeydownSpeed(event)\">";
	s+="<button id=\""+this.n+"SpeedMinusBtn\" type=\"button\" class=\"mxSpeedMinusBtn\" onclick=\""+this.g+".doClickSpeedMinus()\"><span>-</span></button>";
	s+="<div style=\"position:relative;\" class=\"mxSpeedBarDiv\"  onclick=\""+this.g+".doClickSpeed(event)\" id=\""+this.n+"SpeedBarDiv\">";
	s+="<canvas style=\"position:absolute;\" id=\""+this.n+"SpeedCanvas\"></canvas>";
	s+="</div>";
	s+="<button id=\""+this.n+"SpeedPlusBtn\" type=\"button\" class=\"mxSpeedPlusBtn\" onclick=\""+this.g+".doClickSpeedPlus()\"><span>+</span></button>";
	s+="</div>";
	this.write(s);
};

}
