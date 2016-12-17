// maxiGos v6.57 > animeGamePatch.js

if (typeof mxG.G.prototype.createAnimeGamePatch=='undefined'){

mxG.G.prototype.refreshAnimeGamePatch=function()
{
	this.adjust("NavigationBox","Width");
	this.adjust("BottomBox","Width");
};

mxG.G.prototype.createAnimeGamePatch=function()
{
};

}

if (typeof mxG.G.prototype.createAnimeGameCartouche=='undefined'){

mxG.G.prototype.drawStone4AnimeGameCartouche=function(cx,img,x,y,d)
{
	cx.drawImage(img,x,y,d,d);
};

mxG.G.prototype.drawImagesContentInAnimeGameCartouche=function(d)
{
	var cx;
	if (!this.bigImg4AnimeGameCartouche.B.canDraw||!this.bigImg4AnimeGameCartouche.W.canDraw)
		{setTimeout(this.g+".drawImagesContentInAnimeGameCartouche("+d+")",10);return;}
	this.getE("BlackCanvas").height=d;
	this.getE("BlackCanvas").width=d;
	cx=this.getE("BlackCanvas").getContext("2d");
	this.drawStone4AnimeGameCartouche(cx,this.bigImg4AnimeGameCartouche.B,0,0,d);
	this.getE("WhiteCanvas").height=d;
	this.getE("WhiteCanvas").width=d;
	cx=this.getE("WhiteCanvas").getContext("2d");
	this.drawStone4AnimeGameCartouche(cx,this.bigImg4AnimeGameCartouche.W,0,0,d);
};

mxG.G.prototype.di=function()
{
	return ((Math.round(mxG.GetPxrStyle(this.getE("BlackPrisonersDiv"),"fontSize")*1.25)>>1)<<1)+1;
};

mxG.G.prototype.drawImagesInAnimeGameCartouche=function()
{
	var d=this.di();
	this.bigImg4AnimeGameCartouche={B:this.setImg("B",d),W:this.setImg("W",d)};
	this.drawImagesContentInAnimeGameCartouche(d);
	this.in3dOn4AnimeGameCartouche=this.in3dOn;
};

mxG.G.prototype.initAnimeGameCartouche=function()
{
	this.drawImagesInAnimeGameCartouche();
};

mxG.G.prototype.updateAnimeGameCartouche=function()
{
	var s,aPlayer,aRank;
	this.getE("BlackPrisonersDiv").innerHTML=this.gor.getPrisoners("B");
	this.getE("WhitePrisonersDiv").innerHTML=this.gor.getPrisoners("W");
};

mxG.G.prototype.refreshAnimeGameCartouche=function()
{
	// if page is displayed with "no style" option, need to minimize d
	var d=this.di();
	if ((this.getE("BlackCanvas").height!=d)||(this.in3dOn4AnimeGameCartouche!=this.in3dOn)) this.drawImagesInAnimeGameCartouche();
};

mxG.G.prototype.createAnimeGameCartouche=function()
{
	this.write("<div class=\"mxAnimeGameCartoucheDiv\">");
	this.write("<div class=\"mxShortBlackHeaderDiv\">");
	this.write("<canvas class=\"mxStoneCanvas\" id=\""+this.n+"BlackCanvas\"></canvas>");
	this.write("<div class=\"mxPrisonersDiv\" id=\""+this.n+"BlackPrisonersDiv\">0</div>");
	this.write("</div>");
	this.write("<div class=\"mxShortWhiteHeaderDiv\">");
	this.write("<canvas class=\"mxStoneCanvas\" id=\""+this.n+"WhiteCanvas\"></canvas>");
	this.write("<div class=\"mxPrisonersDiv\" id=\""+this.n+"WhitePrisonersDiv\">0</div>");
	this.write("</div>");
	this.write("</div>");
};

}