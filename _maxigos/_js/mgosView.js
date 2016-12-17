// maxiGos v6.60 > mgosView.js

if (typeof mxG.G.prototype.createView=='undefined'){

mxG.Z.fr["2d/3d"]="2d/3d";
mxG.Z.fr["Zoom+"]="Agrandir";
mxG.Z.fr["No zoom"]="Normal";
mxG.Z.fr["Zoom-"]="Réduire";
mxG.Z.fr["Colors"]="Couleurs";
mxG.Z.fr["Default goban background"]="Fond du goban par défault";
mxG.Z.fr["Customized goban background"]="Fond du goban personnalisé";
mxG.Z.fr["Goban background:"]="Fond du goban :";
mxG.Z.fr["Line color:"]="Couleur des lignes :";
mxG.Z.fr["Variation on focus color:"]="Couleur de la variation ayant le focus :";

mxG.G.prototype.doColorsOK=function()
{
	var t,gbkt,gbk,lc,vofc;
	gbkt=this.getE("GobanBkRadio1Input").checked?1:2;
	if (gbkt==1) gbk=this.configGobanBk;
	else
	{
		gbk=this.getE("GobanBkInput").value;
		if (!gbk) gbk=this.configGobanBk;
	}
	lc=this.getE("LineColorInput").value;
	vofc=this.getE("VariationOnFocusColorInput").value;
	if (gbk!=this.gobanBk)
	{
		this.gobanBk=gbk;
		t=gbk.match(/^url\(/)?"image":"color";
		a=(t=="image")?"color":"image";
		mxG.AddCssRule("#"+this.n+"GobanCanvas {background-"+a+":none;}");
		mxG.AddCssRule("#"+this.n+"GobanCanvas {background-"+t+":"+gbk+";}");
	}
	this.lineColor=lc;
	this.variationOnFocusColor=vofc;
	this.hasToDrawWholeGoban=1;
	this.hideGBox("Colors");
	this.getE("ColorsForm").submit(); // just for autocompletion
};

mxG.G.prototype.doColors=function()
{
	var bk,s,e;
	if (this.hasC("Menu")) this.toggleMenu("View",0);
	if (this.gBox=="Colors") {this.hideGBox("Colors");return;}
	if (!this.getE("ColorsDiv"))
	{
		// use a form to store input values for autocompletion usage
		s="<form id=\""+this.n+"ColorsForm\" action=\"javascript:void(0)\" method=\"post\">";
		s+="<div class=\"mxShowContentDiv\">";
		s+="<h1>"+this.local("Colors")+" (css)</h1>";
		s+="<div class=\"mxP\">";
		s+="<input class=\"mxGobanBkRadioInput\" name=\"GobanBkRadioInput\" value=\"1\" type=\"radio\" id=\""+this.n+"GobanBkRadio1Input\">";
		s+="<label class=\"mxGobanBkRadioInput\" for=\""+this.n+"GobanBkRadio1Input\">"+this.local("Default goban background")+" </label>";
		s+="<br>";
		s+="<input class=\"mxGobanBkRadioInput\" name=\"GobanBkRadioInput\" value=\"2\" type=\"radio\" id=\""+this.n+"GobanBkRadio2Input\">";
		s+="<label class=\"mxGobanBkRadioInput\" for=\""+this.n+"GobanBkRadio2Input\">"+this.local("Customized goban background")+" </label>";
		s+="<br><br>";
		s+="<label for=\""+this.n+"GobanBkInput\">"+this.local("Goban background:")+" </label>";
		s+="<input type=\"text\" id=\""+this.n+"GobanBkInput\">";
		s+="<br><br>";
		s+="<label for=\""+this.n+"LineColorInput\">"+this.local("Line color:")+" </label>";
		s+="<input type=\"text\" id=\""+this.n+"LineColorInput\">";
		s+="<br><br>";
		s+="<label for=\""+this.n+"VariationOnFocusColorInput\">"+this.local("Variation on focus color:")+" </label>";
		s+="<input type=\"text\" id=\""+this.n+"VariationOnFocusColorInput\">";
		s+="</div>";
		s+="</div>";
		s+="<div class=\"mxOKDiv\">";
		s+="<button type=\"button\" onclick=\""+this.g+".doColorsOK()\"><span>"+this.local("OK")+"</span></button>";
		s+="<button type=\"button\" onclick=\""+this.g+".hideGBox('Colors')\"><span>"+this.local("Cancel")+"</span></button>";
		s+="</div>";
		s+="</form>";
		this.createGBox("Colors").innerHTML=s;
	}
	if (this.configGobanBk===undefined)
	{
		// if gobanBk, a css rule using it was already added, thus don't need to use it here
		// don't use "background" here: complex or empty even if others are not
		bk=mxG.GetStyle(this.getE("GobanCanvas"),"backgroundImage");
		if (!bk||(bk=="none")) bk=mxG.GetStyle(this.getE("GobanCanvas"),"backgroundColor");
		this.configGobanBk=bk;
		this.gobanBk=bk;
	}
	if (e=this.getE("GobanBkRadio1Input")) e.checked=(this.gobanBk==this.configGobanBk);
	if (e=this.getE("GobanBkRadio2Input")) e.checked=(this.gobanBk!=this.configGobanBk);
	this.getE("GobanBkInput").value=((this.gobanBk==this.configGobanBk)?"":this.gobanBk);
	this.getE("LineColorInput").value=this.lineColor;
	this.getE("VariationOnFocusColorInput").value=(this.variationOnFocusColor?this.variationOnFocusColor:"");
	this.showGBox("Colors");
};
mxG.G.prototype.doZoom=function(s)
{
	var e=this.getE("GobanCanvas"),n=5,d=this.d,d2;
	if (this.hasC("Menu")) this.toggleMenu("View",0);
	if (!this.d0) this.d0=d;
	do
	{
		n++;
		e.style.fontSize=n+"px";
		d2=2*Math.floor(mxG.GetPxStyle(e,"fontSize")*3/4)+1;
		if ((s=="+")&&((d+2)<=d2)) break;
		if ((s=="-")&&((d-2)<=d2)) break;
		if ((s=="=")&&(this.d0<=d2)) break;
	} while (n<42);
	this.refreshAll();
};

mxG.G.prototype.doZoomPlus=function(){this.doZoom("+");};
mxG.G.prototype.doNoZoom=function(){this.doZoom("=");};
mxG.G.prototype.doZoomMinus=function(){this.doZoom("-");};

mxG.G.prototype.doIn3d=function()
{
	if (this.hasC("Menu")) this.toggleMenu("View",0);
	this.in3dOn=this.in3dOn?0:1;
	var e=this.getE("GlobalBoxDiv");
	e.className=e.className.replace((this.in3dOn?"mxIn2d":"mxIn3d"),(this.in3dOn?"mxIn3d":"mxIn2d"));
	this.hasToDrawWholeGoban=1;
	this.exD=0;
	this.d=0;
	this.setD();
	if (this.hasC("Tree")) {this.hasToDrawTree=this.hasToDrawTree|1;this.dT=0;}
	if (this.hasC("Edit")) this.exEts=0;
	this.refreshAll();
};

mxG.G.prototype.addViewBtns=function()
{
	if (!this.hideViewIn3dBtn) this.addBtn({n:"In3d",v:this.local("2d/3d")});
	if (!this.hideViewZoomPlusBtn) this.addBtn({n:"ZoomPlus",v:this.local("Zoom+")});
	if (!this.hideViewNoZoomBtn) this.addBtn({n:"NoZoom",v:this.local("No zoom")});
	if (!this.hideViewZoomMinusBtn) this.addBtn({n:"ZoomMinus",v:this.local("Zoom-")});
	if (!this.hideViewColorsBtn) this.addBtn({n:"Colors",v:this.local("Colors")});
};

mxG.G.prototype.createView=function()
{
	if (this.viewBoxOn)
	{
		this.write("<div class=\"mxViewDiv\" id=\""+this.n+"ViewDiv\">");
		this.addViewBtns();
		this.write("</div>");
	}
};

}
