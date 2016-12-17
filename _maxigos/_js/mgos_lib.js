// maxiGos v6.62 > mgos_lib.js
	
// only one global name: mxG
if (typeof mxG=='undefined') mxG={};

if (!mxG.V){
String.prototype.c2n=function(k){var n=this.charCodeAt(k);return n-((n<97)?38:96);};
String.prototype.ucFirst=function(){return this.charAt(0).toUpperCase()+this.slice(1);}
String.prototype.lcFirst=function(){return this.charAt(0).toLowerCase()+this.slice(1);}
mxG.D=[];
mxG.K=0;
mxG.S=[];
mxG.V="6.62";
if (typeof mxG.Z=='undefined') mxG.Z=[];
if (!mxG.Z.fr) mxG.Z.fr=[];
if (!mxG.Z.en) mxG.Z.en=[];
mxG.IsArray=function(a) {return a.constructor===Array;};
mxG.GetStyle=function(e,p){return window.getComputedStyle?window.getComputedStyle(e,null)[p]:"";};
mxG.GetPxStyle=function(e,p){var r=parseFloat(mxG.GetStyle(e,p));return isNaN(r)?0:r;};
mxG.GetPxrStyle=function(e,p){return Math.round(mxG.GetPxStyle(e,p))};
mxG.GetDir=function()
{
	var s=document.getElementsByTagName('script'),p=s[s.length-1].src.split('?')[0];
	return p.split("/").slice(0,-1).join("/")+"/";
};
mxG.AddCss=function(s)
{
	var k,km=mxG.S.length,e;
	for (k=0;k<km;k++) if (s==mxG.S[k]) return;
	mxG.S.push(s);
	e=document.createElement('link');
	e.setAttribute('rel','stylesheet');
	e.setAttribute('type','text/css');
	e.setAttribute('href',s);
	document.getElementsByTagName('head')[0].appendChild(e);
};
mxG.AddCssRule=function(css)
{
	var s;
	document.getElementsByTagName('head')[0].appendChild(document.createElement("style"));
	s=document.styleSheets[document.styleSheets.length-1];
	s.insertRule(css,0);
};
mxG.Color2Rgba=function(c)
{
	var cn,cx;
	cn=document.createElement("canvas");
	cn.width=1;
	cn.height=1;
	cx=cn.getContext("2d");
	cx.fillStyle=c;
	cx.fillRect(0,0,1,1);
	return cx.getImageData(0,0,1,1).data;
};
mxG.GetMClick=function(ev)
{
	var box=this.getBoundingClientRect();
	return {x:ev.clientX-box.left,y:ev.clientY-box.top};
};
mxG.GetKCode=function(ev)
{
	var c;
	if (!ev) ev=window.event;
	if (ev.altKey||ev.ctrlKey||ev.metaKey) return 0;
	c=ev.keyCode;
	if (ev.charCode&&(c==0)) c=ev.charCode;
	return c;
};
mxG.CreateUnselectable=function()
{
	if (!mxG.Unselectable)
	{
		var s=document.createElement('style'),c='',k,a=['-moz-','-webkit-','-ms-',''];
		for (k=0;k<4;k++) c+=(a[k]+'user-select:none;');
		s.type='text/css';
		s.innerHTML='.mxUnselectable {'+c+'}';
		document.getElementsByTagName('head')[0].appendChild(s);
		mxG.Unselectable=1;
	}
};
mxG.CanCn=function(){return !!document.createElement('canvas').getContext;};
mxG.CanToDataURL=function()
{
	var c=document.createElement("canvas"),d=c.toDataURL("image/png");
	return (d.indexOf("data:image/png")==0);
};
mxG.CanOpen=function()
{var r;return !(typeof FileReader=='undefined')&&(r=new FileReader())&&(r.readAsText);};
mxG.IsMacSafari=(function()
{
	var u=navigator.userAgent.toLowerCase();
	return (u.indexOf('safari')!=-1)&&(u.indexOf('macintosh')!=-1)&&!(u.indexOf('chrome')>-1);
})();
mxG.IsAndroid=(navigator.userAgent.toLowerCase().indexOf("android")>-1);
mxG.IsIOS=(navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?1:0);
mxG.IsWebkit=('WebkitAppearance' in document.documentElement.style);
mxG.IsFirefox=(navigator.userAgent.toLowerCase().indexOf('firefox')>-1);
mxG.hasVerticalScrollBar=function()
{
	var w=window,d=w.document,c=d.compatMode;
	r=c&&/CSS/.test(c)?d.documentElement:d.body;
	if (typeof w.innerWidth=='number') return w.innerWidth>r.clientWidth;
	else return r.scrollWidth>r.clientWidth;
};
mxG.verticalScrollBarWidth=function()
{
	var w=window,d=w.document,b=d.body,r=0,t,s;
	if (b)
	{
		t=d.createElement('div');
		s='position:absolute;overflow:scroll;top:-100px;left:-100px;width:100px;height:100px;';
		t.style.cssText=s;
		b.insertBefore(t,b.firstChild);
		r=t.offsetWidth-t.clientWidth;
		b.removeChild(t);
	}
	return r;
};
mxG.fileExist=function(f)
{
	var xhr=new XMLHttpRequest();
	xhr.z=0;
	xhr.onreadystatechange=function(){if ((this.readyState==4)&&(this.status==200)) xhr.z=1;};
	xhr.open("GET",f,false);
	xhr.send(null);
	return xhr.z;
};
}

