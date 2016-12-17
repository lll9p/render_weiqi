// maxiGos v6.52 > mgosGoto.js

if (typeof mxG.G.prototype.createGoto=='undefined'){

mxG.G.prototype.doKeyupGoto=function()
{
	var k,aN=this.cN,n=parseInt(this.getE("GotoInput").value);
	if (isNaN(n)) n=0;
	k=Math.max(0,this.getAsInTreeNum(aN));
	if (k<n) while (aN.KidOnFocus())
	{
		k=Math.max(0,this.getAsInTreeNum(aN));
		if (k>=n) break;
		aN=aN.KidOnFocus();
	}
	else if (k>n) while (aN.P&&(aN.P.B||aN.P.W))
	{
		k=Math.max(0,this.getAsInTreeNum(aN));
		if (k<=n) break;
		aN=aN.Dad;
	}
	this.backNode(aN);
	this.updateAll();
};

mxG.G.prototype.doClick2Goto=function(ev)
{
	var ko,k1=0,kn=0,aN=this.rN,el=this.getE("GotoDiv"),w1=el.getMClick(ev).x,wn=el.offsetWidth,wo=this.getE("GotoCanvas").offsetWidth;
	while (aN=aN.KidOnFocus()) kn++;
	if (kn<2) ko=0;
	else if (kn==2)
	{
		if (this.cN.Dad==this.rN) {if (w1<wo) ko=0;else ko=1;}
		else {if (w1>(wn-wo)) ko=1;else ko=0;}
	}
	else if (w1<wo) ko=0;
	else if (w1>(wn-wo)) ko=kn-1;
	else ko=Math.floor((w1-wo)/(wn-2*wo)*(kn-2))+1;
	aN=this.rN.KidOnFocus();
	while (aN.KidOnFocus()&&(k1<ko)) {k1++;aN=aN.KidOnFocus()};
	this.backNode(aN);
	this.updateAll();
};

mxG.G.prototype.doClickGoto=function(ev)
{
	if (!this.inGoto) this.doClick2Goto(ev);
};

mxG.G.prototype.doMouseMoveGoto=function(ev)
{
	if (this.inGoto)
	{
		var dv=this.getE("GotoDiv"),c=dv.getMClick(ev),cn=this.getE("GotoCanvas");
		cn.style.left=Math.min(dv.offsetWidth-cn.offsetWidth+1,Math.max(0,(c.x-this.gotoOffset)))+"px";
		this.doClick2Goto(ev);
	}
};

mxG.G.prototype.doMouseDownGoto=function(ev)
{
	this.inGoto=1;
	this.gotoOffset=this.getE("GotoCanvas").getMClick(ev).x;
	document.body.className+=" mxUnselectable";
};

mxG.G.prototype.doMouseUpGoto=function(ev)
{
	this.inGoto=0;
	document.body.className.replace(" mxUnselectable","");
};

mxG.G.prototype.initGoto=function()
{
	var k=this.k;
	if (this.gotoInputOn)
	{
		var i=document.createElement("input"),b,el=this.getE("NavigationDiv");
		i.type="text";
		i.maxLength="3";
		i.id=this.n+"GotoInput";
		i.value=0;
		i.addEventListener("keyup",function(ev){mxG.D[k].doKeyupGoto();},false);
		switch(this.gotoInputPosition)
		{
			case "left":b="First";break;
			case "right":b=(this.getE("LoopBtn")?"Loop":"");break;
			default:b="Next"; // center
		}
		if (b) el.insertBefore(i,this.getE(b+"Btn"));else el.appendChild(i);
	}
	if (this.gotoBoxOn)
	{
		var cn=this.getE("GotoCanvas"),dv=this.getE("GotoDiv");
		mxG.CreateUnselectable();
		dv.getMClick=mxG.GetMClick;
		if (cn)
		{
			cn.getMClick=mxG.GetMClick;
			cn.addEventListener("mousedown",function(ev){mxG.D[k].doMouseDownGoto(ev);},false);
		}
		document.addEventListener("mousemove",function(ev){mxG.D[k].doMouseMoveGoto(ev);},false);
		document.addEventListener("mouseup",function(ev){mxG.D[k].doMouseUpGoto(ev);},false);
		// no need to trigger keydown event since the navigation bar does the job
	}
};

mxG.G.prototype.updateGotoBox=function()
{
	if (this.gotoBoxOn)
	{
		var ko=0,kn=0,aN,wo=this.getE("GotoCanvas").offsetWidth,wn=this.getE("GotoDiv").offsetWidth;
		aN=this.rN.KidOnFocus();
		while (aN=aN.KidOnFocus()) {kn++;if (aN==this.cN) ko=kn;}
		if (!kn) kn=1;
		if (!this.inGoto) this.getE("GotoCanvas").style.left=(ko/kn*(wn-wo))+"px";
		this.gotoBoxWidth=wn;
		this.gotoCanvasWidth=wo;
	}
};

mxG.G.prototype.updateGotoInput=function()
{
	if (this.gotoInputOn)
	{
		var e=this.getE("GotoInput"),ko,k1=e.value;
		// better to set ko to "" when no number (for instance when numbering doesn't start from 1)
		if (!this.cN.P||!(this.cN.P.B||this.cN.P.W)) ko="";
		else ko=this.getAsInTreeNum(this.cN);
		if (ko!=k1) e.value=ko;
		if (this.gBox) e.disabled=true;
		else e.disabled=false;
	}
};

mxG.G.prototype.updateGoto=function()
{
	this.updateGotoInput();
	this.updateGotoBox();
};

mxG.G.prototype.refreshGoto=function()
{
	var bW,cW;
	if (this.gotoBoxOn)
	{
		if (this.adjustGotoWidth) this.adjust("Goto","Width");
		bW=this.getE("GotoDiv").offsetWidth;
		cW=this.getE("GotoCanvas").offsetWidth;
		if ((bW!=this.gotoBoxWidth)||(cW!=this.gotoCanvasWidth)) this.updateGotoBox();
	}
};

mxG.G.prototype.createGoto=function()
{
	if (!this.hasC("Diagram")) this.gotoInputOn=0;
	if (this.gotoBoxOn) this.write("<div style=\"position:relative;\" class=\"mxGotoDiv\" onclick=\""+this.g+".doClickGoto(event)\" id=\""+this.n+"GotoDiv\"><canvas style=\"display:block;position:absolute;\" id=\""+this.n+"GotoCanvas\"></canvas></div>");
};

}