// maxiGos v6.57 > mgosCut.js
if (typeof mxG.G.prototype.createCut=='undefined'){

mxG.Z.fr["Cut"]="Coupe";

mxG.G.prototype.doSimpleCut=function()
{
	var aN,SZ,ST;
	aN=this.cN.Dad;
	if ((aN==this.rN)&&(aN.Kid.length==1))
	{
		SZ=this.getInfo("SZ");
		ST=this.getInfo("ST");
	}
	aN.Kid.splice(aN.Focus-1,1);
	aN.Focus=(aN.Kid.length)?1:0;
	if (aN==this.rN)
	{
		if (aN.Focus) aN=aN.Kid[0];
		else
		{
			aN=aN.N("FF",4);
			aN.P.GM=["1"];
			aN.P.CA=["UTF-8"];
			aN.P.SZ=[SZ];
			aN.P.ST=[ST];
		}
	}
	this.backNode(aN);
	if (this.hasC("Tree")) this.initTree();
	this.updateAll();
};

mxG.G.prototype.updateCut=function()
{
	if (this.gBox) this.disableBtn("SimpleCut");else this.enableBtn("SimpleCut");
};

mxG.G.prototype.createCut=function()
{
	this.write("<div class=\"mxCutDiv\" id=\""+this.n+"CutDiv\">");
	this.addBtn({n:"SimpleCut",v:this.label("Cut","simpleCutLabel")});
	this.write("</div>");
};

}
