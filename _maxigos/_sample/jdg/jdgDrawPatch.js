// maxiGos v6.57 > jdgDrawPatch.js

if (typeof mxG.G.prototype.createDrawPatch4Jdg == 'undefined'){

mxG.G.prototype.drawPointColor4Jdg=function(x,y,nat,v,l,mtsc)
{
	var c;
	if (v&&this.variationOnFocusColor&&this.isNextMove(x,y)) c=this.variationOnFocusColor;
	else if (v&&this.variationColor) c=this.variationColor;
	else if ((l||mtsc)&&this.markAndLabelColor) c=this.markAndLabelColor;
	else if (l&&this.labelColor) c=this.labelColor;
	else if (mtsc&&this.markOnBlackColor&&(nat=="B")) c=this.markOnBlackColor;
	else if (mtsc&&this.markOnWhiteColor&&(nat=="W")) c=this.markOnWhiteColor;
	else if (mtsc&&this.markOnEmptyColor&&(nat=="E")) c=this.markOnEmptyColor;
	else c=(nat=="B")?"#fff":(nat=="W")?"#000":((nat=="O")&&this.outsideColor)?this.outsideColor:this.lineColor;
	return c;
};

mxG.G.prototype.createDrawPatch4Jdg=function()
{
	this.drawPointColor=this.drawPointColor4Jdg;
};

}
