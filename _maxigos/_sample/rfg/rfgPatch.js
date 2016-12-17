// maxiGos v6.57 > rfgPatch.js

if (typeof mxG.G.prototype.createRfg=='undefined'){

mxG.G.prototype.createRfg=function()
{
	var s,v=document.querySelector("meta[name=viewport]");
	if (v)
	{
		s=v.getAttribute('content');
		s=s.replace("maximum-scale=1","maximum-scale=4");
		s=s.replace("user-scalable=no","user-scalable=yes");
		v.setAttribute('content',s);
	}
};

}
