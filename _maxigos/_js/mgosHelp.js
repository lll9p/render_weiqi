// maxiGos v6.57 > mgosHelp.js

if (typeof mxG.G.prototype.createHelp=='undefined'){

mxG.Z.fr[" Close "]="Fermer";
mxG.Z.fr["Help"]="Aide";
mxG.Z.fr["Help not available!"]="Aide non disponible !";
mxG.Z.fr["Error"]="Erreur";

mxG.G.prototype.downloadHelp=function(L_)
{
	var xhr=new XMLHttpRequest(),f,a="helpSource_";
	xhr.L_=L_;
	xhr.msg="<h1>"+this.local("Help")+"</h1><p>"+this.local("Help not available!")+"</p>";
	xhr.gos=this;
	xhr.onreadystatechange=function()
	{
		if (xhr.readyState==4)
		{
			var e=xhr.gos.getE("ShowHelpContentDiv");
			if (xhr.status==200) {e.innerHTML=xhr.responseText;}
			else if (xhr.L_=="en") {e.innerHTML=xhr.msg;}
			else xhr.gos.downloadHelp("en");
		}
	};
	f=(this[a+L_]||this[a+"en"]||"").split('?')[0];
	if (!f||!f.split("/").reverse()[0].match(/help[^\/]*$/))
	{
		this.getE("ShowHelpContentDiv").innerHTML=xhr.msg;
		return;
	}
	xhr.open("GET",this.path+f,true);
	if (xhr.overrideMimeType) xhr.overrideMimeType("text/plain;charset=UTF-8");
	xhr.send(null);
};

mxG.G.prototype.buildHelp=function()
{
	var h=this["helpData_"+this.l_]||this["helpData_en"];
	if (h) this.getE("ShowHelpContentDiv").innerHTML=h;
	else this.downloadHelp(this.l_);
};

mxG.G.prototype.doHelp=function()
{
	if (this.gBox=="ShowHelp") {this.hideGBox("ShowHelp");return;}
	if (!this.getE("ShowHelpDiv"))
	{
		var b,s="<div class=\"mxShowContentDiv\" id=\""+this.n+"ShowHelpContentDiv\"></div>";
		s+="<div class=\"mxOKDiv\">";
		s+="<button type=\"button\" onclick=\""+this.g+".hideGBox('ShowHelp')\"><span>"+this.local(" Close ")+"</span></button>";
		s+="</div>";
		this.createGBox("ShowHelp").innerHTML=s;
		this.buildHelp();
	}
	this.showGBox("ShowHelp");
};

mxG.G.prototype.createHelp=function()
{
 	// if stand-alone player, display help button only if help data are found
	if (this.alone&&!this["helpData_"+this.l_]&&!this["helpData_en"]) return;
	this.write("<div class=\"mxHelpDiv\" id=\""+this.n+"HelpDiv\">");
	this.addBtn({n:"Help",v:this.local("Help")});
	this.write("</div>");
};

}