// maxiGos v6.57 > jdgTitlePatch.js

if (typeof mxG.G.prototype.createTitle4Jdg == 'undefined'){

mxG.G.prototype.updateTitle4Jdg=function()
{
	var el=document.getElementById("contentTitle"),t=this.getInfoS("EV");
	if (el&&t) el.innerHTML=t;
};

mxG.G.prototype.createTitle4Jdg=function()
{
};

}
