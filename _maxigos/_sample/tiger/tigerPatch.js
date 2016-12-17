// maxiGos v6.57 > tigerPatch.js

if (typeof mxG.G.prototype.createTigerComment=='undefined'){

mxG.Z.fr["pass"]="passe";

mxG.G.prototype.removeTigerCommentMove=function(c)
{
	return c.replace(/^[0-9]*\s*:\s*([^\s])/,"$1").ucFirst();
};

mxG.G.prototype.doTigerCommentMoveClick=function(s)
{
	var aN=this.rN,k,km=s.length;
	for (k=0;k<km;k++) aN=aN.Kid[parseInt(s.charAt(k))-1];
	this.backNode(aN);
	this.updateAll();
};

mxG.G.prototype.buildTigerCommentMove=function(aN,k,l)
{	
	var c,s,x,y,r="",id=this.n+l+"Span",a=0;
	if (aN==this.cN) this.currentNodeRef=l;
	if (aN.P.B) {s=aN.P.B[0];c="<span class=\"mxCommentCircleSpan\">●</span>";}
	else if (aN.P.W) {s=aN.P.W[0];c="<span class=\"mxCommentCircleSpan\">○</span>";}
	else s="...";
	if (s!="...")
	{
		if (s.length)
		{
			x=s.c2n(0);
			y=s.c2n(1);
		}
		else {x=0;y=0;}
		r="<span class=\"mxCommentNumberSpan\">"+k+"."+"</span>";
		r+="<span id=\""+id+"\" onclick=\""+this.g+".doTigerCommentMoveClick('"+l+"');\" class=\"mxComment"+((aN!=this.cN)?"No":"")+"FocusSpan\">";
		r+=this.local(c);
		if (x&&y) r+=""+this.k2c(x)+this.k2n(y);
		else r+=this.local("pass");
		r+="</span> ";
		a=1;
	}
	else if (this.rN!=aN.Dad)
	{
		r="<span id=\""+id+"\" onclick=\""+this.g+".doTigerCommentMoveClick('"+l+"');\" class=\"mxComment"+((aN!=this.cN)?"No":"")+"FocusSpan\">";
		r+=s;
		r+="</span> ";
		a=2;
	}
	else r="<span id=\""+id+"\" style=\"position:absolute;\"> </span>";
	return a?"<span class=\"mxComment"+((a==2)?"No":"")+"MoveSpan\">"+r+"</span> ":r;
};

mxG.G.prototype.getOneTigerComment=function(aN)
{
	var c=(aN.P.C?aN.P.C[0]:"");
	c=this.htmlProtect(c);
	if (this.hasC("Header")&&this.headerInComment&&(aN.Dad==this.rN)) c=this.buildHeader()+c;
	return c.replace(/\n/g,"<br>");
};

mxG.G.prototype.getAllTigerComment=function(dN,k,l,v)
{
	var aN,s="",c,ko,lo,k1=0,l1="",k2=0,l2="",m,mm;
	mm=dN.Kid.length;
	ko=k;
	lo=l;
	for (m=0;m<mm;m++)
	{
		k1=ko;
		l1=lo;
		if (v||(m>0)) s+="<div class=\"mxCommentVariationDiv\">";
		else s+="<div class=\"mxCommentMainDiv\">";
		aN=dN.Kid[m];
		if (aN.P.B||aN.P.W) {k1++;if ((aN.P.B&&aN.Dad.P.B)||(aN.P.W&&aN.Dad.P.W)) k1++;}
		else if (aN.P.AB||aN.P.AW||aN.P.AE) k1=0;
		l1+=(((aN.Dad==dN)?m:0)+1);
		if (m==0) {k2=k1;l2=l1;}
		c=this.getOneTigerComment(aN);
		s+=this.buildTigerCommentMove(aN,k1,l1);
		if (c)
		{
			if (this.rN!=aN.Dad)
			{
				s+="</div><br>";
				s+="<div class=\"mxComment"+((v||(m>0))?"Variation":"Main")+"TextDiv\">";
			}
			s+=this.removeTigerCommentMove(c);
		}
		s+="</div>";
		if (c||(!c&&!m&&(mm>1)&&!v)) s+="<br>";
		if ((!v&&!m&&(mm==1))&&(aN.Kid.length)) s+=this.getAllTigerComment(aN,k1,l1,0);
		if (v||(m&&(mm>1)))
		{
			if (aN.Kid.length) s+=this.getAllTigerComment(aN,k1,l1,1);
			else if (!c) s+="<br>";
		}
	}
	if (!v&&(mm>1)) s+=this.getAllTigerComment(dN.Kid[0],k2,l2,0);
	return s;
};

mxG.G.prototype.getTigerComment=function()
{
	if (this.allInComment) return this.getAllTigerComment(this.rN,0,"",0);
	else return this.getOneTigerComment(this.cN);
};

mxG.G.prototype.initTigerComment=function()
{
	this.getE("CommentDiv").scrollTop=0;
};

mxG.G.prototype.updateTigerComment=function()
{
	var c="",e=this.getE("CommentDiv");
	if (!(this.hasC("Solve")&&this.uC&&this.cN.P[this.uC]&&this.cN.KidOnFocus()&&!this.cN.KidOnFocus().P[this.uC])) c=this.getTigerComment();
	if (this.cN.P.BM) e.className="mxCommentDiv mxBM";
	else if (this.cN.P.DO) e.className="mxCommentDiv mxDO";
	else if (this.cN.P.IT) e.className="mxCommentDiv mxIT";
	else if (this.cN.P.TE) e.className="mxCommentDiv mxTE";
	else e.className="mxCommentDiv";
	this.getE("CommentContentDiv").innerHTML=(c?c:"&nbsp;");
	this.refreshTigerComment();
	if (this.currentNodeRef)
	{
		f=this.getE(this.currentNodeRef+"Span");
		if (f&&((e.offsetHeight-1.5*mxG.GetPxStyle(e,"fontSize"))<(f.offsetTop-e.scrollTop))) e.scrollTop=f.offsetTop;
		if (f&&((f.offsetTop-e.scrollTop)<0)) e.scrollTop=f.offsetTop;
	}
};

mxG.G.prototype.refreshTigerComment=function()
{
	var p,g,c,t,wg,wp,hg,mw;
	p=this.getE("GlobalBoxDiv").parentNode;
	g=this.getE("GobanDiv");
	c=this.getE("CommentDiv");
	t=this.getE("TreeDiv");
	wp=mxG.GetPxStyle(p,"width");
	wg=this.gobanWidth()+this.getDW(g);
	hg=this.gobanHeight()+this.getDH(g);
	mw=(c?mxG.GetPxStyle(c,"minWidth")+this.getDW(c):(0.6*wg));
	if (wp>(wg+mw))
	{
		if (c) c.style.width=(mw-this.getDW(c))+"px";
		if (c) c.style.height=(hg-this.getDH(c))+"px";
		if (t)
		{
			this.adjustTreeWidth=0;
			this.getE("TreeDiv").style.width="auto";
		}
	}
	else
	{
		if (c) c.style.width=(wg-this.getDW(c))+"px";
		if (c) c.style.height=mxG.GetPxStyle(c,"minHeight")+"px";
		if (t) t.style.width=(wg-this.getDW(t))+"px";
	}
};

mxG.G.prototype.createTigerComment=function()
{
	var a;
	a=mxG.IsFirefox?"":" tabindex=\"0\"";
	this.write("<div class=\"mxCommentDiv\" id=\""+this.n+"CommentDiv\""+a+"><div class=\"mxCommentContentDiv\" id=\""+this.n+"CommentContentDiv\"></div></div>");
};

}