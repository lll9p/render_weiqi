// maxiGos v6.57 > mgosBackToMain.js

if (typeof mxG.G.prototype.createBackToMain=='undefined'){

mxG.Z.fr["Back to game"]="Revenir à la partie";

mxG.G.prototype.isInMain=function(aN)
{
	var bN=aN;
	while (bN.Dad!=this.rN) {if ((bN.Dad.Kid[0]!=bN)||bN.Add) return 0;bN=bN.Dad;}
	return 1;
};

mxG.G.prototype.doBackToMain=function()
{
	var aN=this.rN,bN=this.cN;
	while (bN.Dad!=this.rN) {if (this.isInMain(bN)) break;bN=bN.Dad;}
	this.backNode(bN);
	while (bN.Kid.length) {bN.Focus=1;bN=bN.Kid[0];}
	this.updateAll();
};

mxG.G.prototype.updateBackToMain=function()
{
	if (this.isInMain(this.cN)) this.disableBtn("BackToMain");else this.enableBtn("BackToMain");
};

mxG.G.prototype.createBackToMain=function()
{
	this.write("<div class=\"mxBackToMainDiv\" id=\""+this.n+"BackToMainDiv\">");
	this.addBtn({n:"BackToMain",v:this.local("Back to game")});
	this.write("</div>");
};

}