// maxiGos v6.57 > mgosLoop.js

if (typeof mxG.G.prototype.createLoop=='undefined'){

mxG.G.prototype.resetLoop=function()
{
	if (this.loopTimeout&&!this.inStepLoop) {clearTimeout(this.loopTimeout);this.loopTimeout=0;}
};

mxG.G.prototype.getLoopTime=function()
{
	if (this.initialLoopTime&&(this.cN.Dad==this.rN)) return Math.round(this.initialLoopTime*this.loopTime/1000);
	if (this.finalLoopTime&&(this.cN.Focus==0)) return Math.round(this.finalLoopTime*this.loopTime/1000);
	if (this.hasC("Comment")||this.hasC("Lesson"))
	{
		var s=(this.cN.P.C?this.cN.P.C[0]:"").replace(/\n/g,"<br>");
		return Math.floor(s.length*this.loopTime/10+this.loopTime);
	}
	return this.loopTime;
};

mxG.G.prototype.stepLoop=function()
{
	this.inStepLoop=1;
	// force reflow otherwise bug when switching tab on Mac Safari
	if (mxG.IsMacSafari) this.gcn.offsetHeight;
	if (this.cN.KidOnFocus()) {this.cN.Focus=1;this.placeNode();}
	else if (this.mainVariationOnlyLoop) {this.rN.Focus=1;this.backNode(this.rN.KidOnFocus());}
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
	this.loopTimeout=setTimeout(this.g+".stepLoop()",this.getLoopTime());
	this.inStepLoop=0;
};

mxG.G.prototype.doLoop=function()
{
	this.inLoop=this.inLoop?0:1;
	this.updateAll();
};

mxG.G.prototype.initLoop=function()
{
	var e=this.getE("NavigationDiv"),i,k;
	this.inLoop=(this.initMethod=="loop")?1:0;
	if (e&&this.loopBtnOn)
	{
		k=this.k;
		i=document.createElement("button");
		i.type="button";
		i.id=this.n+"LoopBtn";
		i.className="mxBtn "+(this.inLoop?"mxPauseBtn":"mxLoopBtn");
		i.addEventListener("click",function(ev){mxG.D[k].doLoop();},false);
		i.innerHTML="<div><span>&lt;&gt;</div></span>";
		if (this["loopTip_"+this.l_]) i.title=this["loopTip_"+this.l_];
		switch(this.loopBtnPosition)
		{
			case "left":e.insertBefore(i,this.getE("FirstBtn"));break;
			case "center":e.insertBefore(i,this.getE("NextBtn"));break;
			default:e.appendChild(i); // right
		}
	}
};

mxG.G.prototype.updateLoop=function()
{
	var b;
	if (this.inLoop)
	{
		if (!this.loopTimeout)
			this.loopTimeout=setTimeout(this.g+".stepLoop()",this.getLoopTime());
	}
	else this.resetLoop();
	if (this.getE("NavigationDiv")&&this.loopBtnOn)
	{
		b=this.getE("LoopBtn");
		b.className="mxBtn "+(this.inLoop?"mxPauseBtn":"mxLoopBtn");
		if (this.gBox) this.disableBtn("Loop");
		else
		{
			if (this.cN.Kid.length||(this.cN.Dad!=this.rN)) this.enableBtn("Loop");
			else this.disableBtn("Loop");
		}
	}
};

mxG.G.prototype.createLoop=function()
{
	if (this.loopTime===undefined) this.loopTime=1000;
};

}