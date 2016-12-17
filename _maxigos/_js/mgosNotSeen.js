// maxiGos v6.57 > mgosNotSeen.js

if (typeof mxG.G.prototype.createNotSeen=='undefined'){

mxG.Z.fr[" elsewhere"]=" ailleurs";
mxG.Z.fr[" pass"]=" passe";
mxG.Z.fr[" at "]=" en ";

mxG.G.prototype.buildOneNotSeen=function(nat,n,s)
{
	return "<div class=\"mxInNotSeenDiv\">"+this.buildStone(nat,this.d,n)+"<span>"+s+"</span></div>";
};

mxG.G.prototype.buildNotSeen=function()
{
	var k,mo=this.gor.setup+1,m=this.gor.play,x,y,n,nat,s="";
	for (k=mo;k<=m;k++)
	{
		x=this.gor.getX(k);
		y=this.gor.getY(k);
		if (this.inView(x,y)||((x==0)&&(y==0)))
		{
			nat=this.gor.getNat(k);
			n=this.getVisibleNum(k);
			if ((k>mo)&&(nat==this.gor.getNat(k-1))) s+=this.buildOneNotSeen(nat=="B"?"W":"B",(n-1),this.local(" elsewhere"));
			if (!x&&!y) {if (n) s+=this.buildOneNotSeen(nat,n,this.local(" pass"));}
			else {if (n!=this.getVisibleNum(this.getVisibleMove(x,y))) s+=this.buildOneNotSeen(nat,n,this.local(" at ")+this.k2c(x)+this.k2n(y));}
		}
	}
	return s;
};

mxG.G.prototype.setInNotSeenMaxWidth=function()
{
	var e=this.getE("InnerNotSeenDiv"),divs=e.getElementsByTagName("div"),k,km,w=0;
	km=divs.length;
	for (k=0;k<km;k++) divs[k].style.width="auto";
	for (k=0;k<km;k++) w=Math.max(w,mxG.GetPxStyle(divs[k],"width"));
	for (k=0;k<km;k++) divs[k].style.width=w+"px";
};

mxG.G.prototype.setNotSeenWidth=function(wo)
{
	var e=this.getE("InnerNotSeenDiv"),divs,div,w1,w2,wn,p;
	p=0;
	divs=e.getElementsByTagName("div");
	if (divs.length) div=divs[0];
	if (div)
	{
		w1=mxG.GetPxStyle(div,"width");
		w2=w1+this.getDW(div);
		this.nsw=w1;
		wn=Math.floor(wo/w2)*w2;
		p=Math.floor((wo-wn)/2);
	}
	e.style.paddingLeft=p+"px";
	e.style.paddingRight=p+"px";
	e.style.width=(wo-2*p)+"px";
};

mxG.G.prototype.adjustInnerNotSeen=function()
{
	this.setInNotSeenMaxWidth();
	this.setNotSeenWidth(mxG.GetPxStyle(this.getE("NotSeenDiv"),"width"));
};

mxG.G.prototype.updateNotSeen=function()
{
	var s=(this.numberingOn?this.buildNotSeen():""),e=this.getE("InnerNotSeenDiv");
	e.innerHTML=s;
	if (this.adjustNotSeenWidth) this.adjustInnerNotSeen();
};

mxG.G.prototype.refreshNotSeen=function()
{
	var e=this.getE("NotSeenDiv"),divs=e.getElementsByTagName("div"),img,g=this.getE("GobanDiv"),o;
	if (divs.length) // do it before any other adjustment
	{
		img=divs[0].getElementsByTagName("img")[0];
		if (img&&(this.d!=mxG.GetPxrStyle(img,"height"))) {this.updateNotSeen();return;}
	}
	if (this.adjustNotSeenWidth)
	{
		if (this.adjustNotSeenWidth==1) o=g;else o=this.getE(this.adjustNotSeenWidth+"Div");
		e.style.width=(mxG.GetPxStyle(o,"width")+this.getDW(o)-this.getDW(e))+"px";
		this.adjustInnerNotSeen();
	}
};

mxG.G.prototype.createNotSeen=function()
{
	// if no mxInnerNotSeenDiv, one cannot set any padding left or rigth in css for mxNotSeenDiv
	this.write("<div class=\"mxNotSeenDiv\" id=\""+this.n+"NotSeenDiv\">");
	this.write("<div class=\"mxInnerNotSeenDiv\" id=\""+this.n+"InnerNotSeenDiv\">");
	this.write("</div>");
	this.write("</div>");
};

}