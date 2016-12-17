// maxiGos v6.57 > mgosNavigation.js

if (typeof mxG.G.prototype.createNavigation=='undefined'){

mxG.G.prototype.setNFocus=function(b)
{
	// to be able to navigate using arrow keys immediately after a button becomes disable
	if (this.getE(b+"Btn").disabled) this.getE("NavigationDiv").focus();
};

mxG.G.prototype.doFirst=function()
{
	this.backNode(this.rN.KidOnFocus());
	this.updateAll();
	this.setNFocus("First");
};

mxG.G.prototype.doTenPred=function()
{
	var k,aN=this.cN;
	for (k=0;k<10;k++)
	{
		if (aN.Dad!=this.rN) aN=aN.Dad;else break;
		if (this.hasC("Variations")&&!(this.styleMode&2))
		{
			if (this.styleMode&1) {if (aN.Dad.Kid.length>1) break;}
			else if (aN.Kid.length>1) break;
		}
	}
	this.backNode((aN==this.rN)?aN.KidOnFocus():aN);
	this.updateAll();
	this.setNFocus("TenPred");
};

mxG.G.prototype.doPred=function()
{
	var aN=this.cN.Dad;
	this.backNode((aN==this.rN)?aN.KidOnFocus():aN);
	this.updateAll();
	this.setNFocus("Pred");
};

mxG.G.prototype.doNext=function()
{
	this.placeNode();
	this.updateAll();
	this.setNFocus("Next");
};

mxG.G.prototype.doTenNext=function()
{
	for (var k=0;k<10;k++)
	{
		if (this.cN.KidOnFocus()) this.placeNode();else break;
		if (this.hasC("Variations")&&!(this.styleMode&2))
		{
			// break if some variation are found
			if (this.styleMode&1) {if (this.cN.Dad.Kid.length>1) break;}
			else if (this.cN.Kid.length>1) break;
		}
	}
	this.updateAll();
	this.setNFocus("TenNext");
};

mxG.G.prototype.doLast=function()
{
	while (this.cN.KidOnFocus()) this.placeNode();
	this.updateAll();
	this.setNFocus("Last");
};

mxG.G.prototype.doTopVariation=function()
{
	var aN,k,km;
	if (this.styleMode&1) aN=this.cN.Dad;else aN=this.cN;
	k=aN.Focus;
	km=aN.Kid.length;
	if (km>1)
	{
		aN.Focus=(k>1)?k-1:km;
		if (this.styleMode&1) this.backNode(aN.KidOnFocus());
		this.hasToDrawWholeGoban=1;
		this.updateAll();
	}
};

mxG.G.prototype.doBottomVariation=function()
{
	var aN,bN,k,km;
	if (this.styleMode&1) aN=this.cN.Dad;else aN=this.cN;
	k=aN.Focus;
	km=aN.Kid.length;
	if (km>1)
	{
		aN.Focus=(k<km)?k+1:1;
		if (this.styleMode&1) this.backNode(aN.KidOnFocus());
		this.hasToDrawWholeGoban=1;
		this.updateAll();
	}
};

mxG.G.prototype.doKeydownNavigation=function(ev)
{
	var r=0;
	switch(mxG.GetKCode(ev))
	{
		case 36:case 70:this.doFirst();r=1;break;
		case 33:case 71:this.doTenPred();r=1;break;
		case 37:case 72:this.doPred();r=1;break;
		case 39:case 74:this.doNext();r=1;break;
		case 34:case 75:this.doTenNext();r=1;break;
		case 35:case 76:this.doLast();r=1;break;
		case 38:case 85:this.doTopVariation();r=1;break;
		case 40:case 78:this.doBottomVariation();r=1;break;
	}
	if (r) ev.preventDefault();
};

mxG.G.prototype.doWheelNavigation=function(ev)
{
	if (!this.gBox)
	{
		if (ev.deltaY>0) {this.doNext();}
		else if (ev.deltaY<0) {this.doPred();}
		ev.preventDefault();
	}
};

mxG.G.prototype.initNavigation=function()
{
	var k=this.k;
	this.getE("NavigationDiv").addEventListener("keydown",function(ev){mxG.D[k].doKeydownNavigation(ev);},false);
	this.getE("GobanDiv").addEventListener("wheel",function(ev){mxG.D[k].doWheelNavigation(ev);},false);
};

mxG.G.prototype.updateNavigation=function()
{
	if (this.gBox)
	{
		this.disableBtn("First");
		this.disableBtn("Pred");
		this.disableBtn("TenPred");
		this.disableBtn("Next");
		this.disableBtn("TenNext");
		this.disableBtn("Last");
	}
	else
	{
		if (this.cN.Kid.length)
		{
			this.enableBtn("Next");
			this.enableBtn("TenNext");
			this.enableBtn("Last");
		}
		else
		{
			this.disableBtn("Next");
			this.disableBtn("TenNext");
			this.disableBtn("Last");
		}
		if (this.cN.Dad==this.rN)
		{
			this.disableBtn("First");
			this.disableBtn("Pred");
			this.disableBtn("TenPred");
		}
		else
		{
			this.enableBtn("First");
			this.enableBtn("Pred");
			this.enableBtn("TenPred");
		}
	}
};

mxG.G.prototype.getNavElementFullWidth=function(e)
{
	var r=0;
	r+=mxG.GetPxStyle(e,"marginLeft");
	r+=mxG.GetPxStyle(e,"marginRight");
	r+=mxG.GetPxStyle(e,"paddingLeft");
	r+=mxG.GetPxStyle(e,"paddingRight");
	r+=mxG.GetPxStyle(e,"borderLeftWidth");
	r+=mxG.GetPxStyle(e,"borderRightWidth");
	r+=mxG.GetPxStyle(e,"width");
	return r;
};

mxG.G.prototype.refreshNavigation=function()
{
	var e,g,gti,w,fs,b,wb,n,k;
	if (this.adjustNavigationWidth) this.adjust("Navigation","Width");
	if (this.fitParent&2)
	{
		e=this.getE("NavigationDiv");
		gti=this.getE("GotoInput");
		b=this.getE("FirstBtn");
		w=mxG.GetPxStyle(e,"width");
		wb=this.getNavElementFullWidth(b);
		n=e.getElementsByTagName("button").length;
		if ((w!=this.lastNavW4B)||(wb!=this.lastNavBtnFullWidth))
		{
			fs=24;
			while ((this.getNavElementFullWidth(b)*n+(gti?this.getNavElementFullWidth(gti):0))<w)
			{
				if (fs>63) break;
				fs++;
				e.style.fontSize=fs+"px";
			}
			while ((this.getNavElementFullWidth(b)*n+(gti?this.getNavElementFullWidth(gti):0))>w)
			{
				if (fs<3) break;
				fs--;
				e.style.fontSize=fs+"px";
			}
			this.lastNavW4B=w;
			this.lastNavBtnFullWidth=this.getNavElementFullWidth(b);
		}
	}
};

mxG.G.prototype.createNavigation=function()
{
	if (this.navigationBtnColor)
	{
		mxG.AddCssRule("#"+this.n+"NavigationDiv button {color:"+this.navigationBtnColor+";}");
		mxG.AddCssRule("#"+this.n+"NavigationDiv button div:before {border-color:transparent "+this.navigationBtnColor+";}");
		mxG.AddCssRule("#"+this.n+"NavigationDiv button div:after {border-color:transparent "+this.navigationBtnColor+";}");
	}
	if (this.navigationBtnFs)
	{
		mxG.AddCssRule("#"+this.n+"NavigationDiv button {font-size:"+this.navigationBtnFs+";}");
	}
	this.bNav=["First","TenPred","Pred","Next","TenNext","Last"];
	this.vNav=["|&lt;","&lt;&lt;","&lt;","&gt;","&gt;&gt;","&gt;|"];
	this.write("<div tabindex=\"-1\" style=\"outline:none;\" class=\"mxNavigationDiv\" id=\""+this.n+"NavigationDiv\">");
	for (var b=0;b<6;b++) this.addBtn({n:this.bNav[b],v:this.vNav[b]});
	this.write("</div>");
};

}
