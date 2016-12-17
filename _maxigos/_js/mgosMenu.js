// maxiGos v6.57 > mgosMenu.js

if (typeof mxG.G.prototype.createMenu=='undefined'){

mxG.Z.fr["File"]="Fichier";
mxG.Z.fr["Edit"]="Édition";
mxG.Z.fr["Cut"]="Couper";
mxG.Z.fr["Copy"]="Copier";
mxG.Z.fr["Paste"]="Coller";
mxG.Z.fr["View"]="Affichage";
mxG.Z.fr["Window"]="Fenêtre";
mxG.Z.fr["Untitled"]="SansTitre";

mxG.G.prototype.toggleMenu=function(m,s)
{
	if (this.toggleMenuTimeout) {clearTimeout(this.toggleMenuTimeout);this.toggleMenuTimeout=0;}
	if (s)
	{
		this.currentMenu=m;this.getE(m+"SubMenuDiv").style.display="block";
		this.toggleMenuTimeout=setTimeout("mxG.D["+this.k+"].toggleMenu(\""+m+"\",0)",9999);
	}
	else
	{
		this.currentMenu="";
		this.getE(m+"SubMenuDiv").style.display="none";
	}
};

mxG.G.prototype.doMenu=function(m)
{
	var c=this.currentMenu;
	if (this.gBox) this.hideGBox(this.gBox);
	if (c) {this.toggleMenu(c,0);if (m==c) return;}
	this.toggleMenu(m,1);
};

mxG.G.prototype.doFile=function(){this.doMenu("File");};

mxG.G.prototype.doEdit=function(){this.doMenu("Edit");};

mxG.G.prototype.doView=function(){this.doMenu("View");};

mxG.G.prototype.doSwitchWindow=function(k)
{
	this.toggleMenu("Window",0);
	this.rN.cN=this.cN;
	this.rN=this.rNs[k];
	this.backNode(this.rN.cN?this.rN.cN:this.rN.Kid[0]);
	if (this.hasC("Tree")) this.initTree();
	this.updateAll();
};

mxG.G.prototype.doWindow=function()
{
	var k,km=this.rNs.length,s="",b={};
	for (k=0;k<km;k++)
	{
		b.n="Win"+k;
		if (this.rNs[k].sgf) b.v=this.rNs[k].sgf.replace(/\.sgf$/,"");else b.v=this.local("Untitled");
		s+="<button class=\"mxBtn"+((this.rNs[k]==this.rN)?" mxCoched":" mxCochable")+"\" type=\"button\" autocomplete=\"off\" id=\""+this.n+b.n+"Btn\" onclick=\""+this.g+".doSwitchWindow("+k+");\">";
		s+="<span>"+b.v+"</span>";
		s+="</button>";
	}
	this.getE("WindowSubMenuDiv").innerHTML=s;
	this.doMenu("Window");
};

mxG.G.prototype.addEditBtns=function()
{
	this.addBtn({n:"Cut",v:this.local("Cut")});
	this.addBtn({n:"Copy",v:this.local("Copy")});
	this.addBtn({n:"Paste",v:this.local("Paste")});
};

mxG.G.prototype.createMenu=function()
{
	var a=this.menus.split(/[\s]*[,][\s]*/),m,k,km=a.length;
	this.rNs=[this.rN];
	this.write("<div class=\"mxMenuDiv\" id=\""+this.n+"MenuDiv\">");
	for (k=0;k<km;k++)
	{
		m=a[k];
		this.write("<div class=\"mxOneMenuDiv\" id=\""+this.n+m+"MenuDiv\">");
		this.addBtn({n:m,v:this.local(m)});
		this.write("<div style=\"z-index:20;\" class=\"mxSubMenuDiv\" id=\""+this.n+m+"SubMenuDiv\">");
		if (this["add"+m+"Btns"]) this["add"+m+"Btns"]();
		this.write("</div></div>");
	}
	this.write("</div>");
};

}
