// maxiGos v6.57 > mgosComment.js

if (typeof mxG.G.prototype.createComment=='undefined'){

mxG.Z.fr["buildMove"]=function(a){return "Coup "+k;};
mxG.Z.en["buildMove"]=function(a){return "Move "+k;};

mxG.G.prototype.getOneComment=function(aN)
{
	var c=aN.P.C?this.htmlProtect(aN.P.C[0]):"";
	if (this.hasC("Header")&&this.headerInComment&&(aN.Dad==this.rN)) c=this.buildHeader()+c;
	return c.replace(/\n/g,"<br>");
};

mxG.G.prototype.getComment=function()
{
	var aN=this.cN;
	if (this.allInComment)
	{
		var bN=this.rN,s="",c,k=0;
		while (bN=bN.KidOnFocus())
		{
			if (bN.P.B||bN.P.W) {k++;if ((bN.P.B&&bN.Dad.P.B)||(bN.P.W&&bN.Dad.P.W)) k++;}
			else if (bN.P.AB||bN.P.AW||bN.P.AE) k=0;
			if (c=this.getOneComment(bN))
			{
				s+="<div class=\"mxP\">";
				if (k) s+="<span class=\"mxMoveNumberSpan\">"+this.build("Move",k)+"</span><br>";
				s+=c+"</div>";
			}
			if (bN==aN) break;
		}
		return s;
	}
	else return this.getOneComment(aN);
};

mxG.G.prototype.disableComment=function()
{
	var e=this.getE("CommentDiv");
	if (!e.hasAttribute("data-maxigos-disabled"))
	{
		e.setAttribute("data-maxigos-disabled","1");
		if (!mxG.IsFirefox) e.setAttribute("tabindex","-1");
	}
};

mxG.G.prototype.enableComment=function()
{
	var e=this.getE("CommentDiv");
	if (e.hasAttribute("data-maxigos-disabled"))
	{
		e.removeAttribute("data-maxigos-disabled");
		if (!mxG.IsFirefox) e.setAttribute("tabindex","0");
	}
};

mxG.G.prototype.isCommentDisabled=function()
{
	return this.getE("CommentDiv").hasAttribute("data-maxigos-disabled");
};

mxG.G.prototype.updateComment=function()
{
	var e=this.getE("CommentDiv");
	if (this.hasC("Solve")&&this.canPlaceSolve) return;
	if (this.cN.P.BM) e.className="mxCommentDiv mxBM";
	else if (this.cN.P.DO) e.className="mxCommentDiv mxDO";
	else if (this.cN.P.IT) e.className="mxCommentDiv mxIT";
	else if (this.cN.P.TE) e.className="mxCommentDiv mxTE";
	else e.className="mxCommentDiv";
	this.getE("CommentContentDiv").innerHTML=this.getComment();
	this.refreshComment();
	if (this.gBox) this.disableComment();else this.enableComment();
};

mxG.G.prototype.refreshComment=function()
{
	if (this.adjustCommentWidth) this.adjust("Comment","Width");
	if (this.adjustCommentHeight) this.adjust("Comment","Height");
};

mxG.G.prototype.createComment=function()
{
	var a;
	a=mxG.IsFirefox?"":" tabindex=\"0\"";
	this.write("<div class=\"mxCommentDiv\" id=\""+this.n+"CommentDiv\""+a+"><div class=\"mxCommentContentDiv\" id=\""+this.n+"CommentContentDiv\"></div></div>");
};

}