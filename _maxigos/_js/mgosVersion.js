// maxiGos v6.57 > mgosVersion.js

if (typeof mxG.G.prototype.createVersion=='undefined'){

mxG.G.prototype.refreshVersion=function()
{
	if (this.adjustVersionWidth) this.adjust("Version","Width");
	if (this.adjustVersionHeight) this.adjust("Version","Height");
};

mxG.G.prototype.createVersion=function()
{
	this.write("<div class=\"mxVersionDiv\" id=\""+this.n+"VersionDiv\">");
	this.write("<span>maxiGos "+mxG.V+"</span>");
	this.write("</div>");
};

}