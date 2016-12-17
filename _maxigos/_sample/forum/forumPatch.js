// maxiGos v6.57 > forumPatch.js

if (typeof mxG.G.prototype.createForumCartouche=='undefined'){

mxG.Z.fr["Black"]="Noir";
mxG.Z.fr["White"]="Blanc";
mxG.Z.fr[": "]=" : ";

mxG.G.prototype.drawStone4ForumCartouche=function(cx,img,x,y,d)
{
	cx.drawImage(img,x,y,d,d);
};

mxG.G.prototype.drawImagesContentInForumCartouche=function(d,d2)
{
	var cx;
	if (!this.bigImg4ForumCartouche.B.canDraw||!this.bigImg4ForumCartouche.W.canDraw||!this.smallImg4ForumCartouche.B.canDraw||!this.smallImg4ForumCartouche.W.canDraw)
		{setTimeout(this.g+".drawImagesContentInForumCartouche("+d+","+d2+")",10);return;}
	this.getE("BlackCanvas").height=d;
	this.getE("BlackCanvas").width=d;
	cx=this.getE("BlackCanvas").getContext("2d");
	this.drawStone4ForumCartouche(cx,this.bigImg4ForumCartouche.B,0,0,d);
	this.getE("WhiteCanvas").height=d;
	this.getE("WhiteCanvas").width=d;
	cx=this.getE("WhiteCanvas").getContext("2d");
	this.drawStone4ForumCartouche(cx,this.bigImg4ForumCartouche.W,0,0,d);
	this.getE("WhitePrisonersCanvas").height=d2;
	this.getE("WhitePrisonersCanvas").width=d2;
	cx=this.getE("WhitePrisonersCanvas").getContext("2d");
	this.drawStone4ForumCartouche(cx,this.smallImg4ForumCartouche.B,0,0,d2);
	this.getE("BlackPrisonersCanvas").height=d2;
	this.getE("BlackPrisonersCanvas").width=d2;
	cx=this.getE("BlackPrisonersCanvas").getContext("2d");
	this.drawStone4ForumCartouche(cx,this.smallImg4ForumCartouche.W,0,0,d2);
};

mxG.G.prototype.di=function()
{
	return ((Math.min(255,mxG.GetPxrStyle(this.getE("BlackCanvas"),"fontSize")*2)>>1)<<1)-1;
};

mxG.G.prototype.drawImagesInForumCartouche=function()
{
	var d=this.di(),d2=(((d*0.4)>>1)<<1)+1;
	this.bigImg4ForumCartouche={B:this.setImg("B",d),W:this.setImg("W",d)};
	this.smallImg4ForumCartouche={B:this.setImg("B",d2),W:this.setImg("W",d2)};
	this.drawImagesContentInForumCartouche(d,d2);
	this.in3dOn4ForumCartouche=this.in3dOn;
};

mxG.G.prototype.initForumCartouche=function()
{
	this.drawImagesInForumCartouche();
};

mxG.G.prototype.updateForumCartouche=function()
{
	var s,aPlayer,aRank;
	this.getE("BlackPrisonersDiv").innerHTML=this.gor.getPrisoners("B");
	this.getE("WhitePrisonersDiv").innerHTML=this.gor.getPrisoners("W");
	aPlayer=this.getInfoS("PW");
	s=(aPlayer?aPlayer:this.local("White"));
	aRank=this.getInfoS("WR");
	if (aRank) s+=(" "+this.build("Rank",aRank));
	this.getE("WhitePlayerDiv").innerHTML=s;
	aPlayer=this.getInfoS("PB");
	s=(aPlayer?aPlayer:this.local("Black"));
	aRank=this.getInfoS("BR");
	if (aRank) s+=(" "+this.build("Rank",aRank));
	this.getE("BlackPlayerDiv").innerHTML=s;
};

mxG.G.prototype.refreshForumCartouche=function()
{
	// if page is displayed with "no style" option, need to minimize d
	var d=this.di();
	if ((this.getE("BlackCanvas").height!=d)||(this.in3dOn4ForumCartouche!=this.in3dOn)) this.drawImagesInForumCartouche();
};

mxG.G.prototype.createForumCartouche=function()
{
	this.write("<div class=\"mxShortWhiteHeaderDiv\">");
	this.write("<canvas class=\"mxBigStoneCanvas\" height=\"31\" width=\"31\" id=\""+this.n+"WhiteCanvas\"></canvas>");
	this.write("<div class=\"mxPlayerDiv\" id=\""+this.n+"WhitePlayerDiv\"></div>");
	this.write("<div class=\"mxPrisonersDiv\" id=\""+this.n+"WhitePrisonersDiv\">0</div>");
	this.write("<canvas class=\"mxSmallStoneCanvas\" height=\"13\" width=\"13\" id=\""+this.n+"WhitePrisonersCanvas\"></canvas>");
	this.write("</div>");
	this.write("<div class=\"mxShortBlackHeaderDiv\">");
	this.write("<canvas class=\"mxBigStoneCanvas\" height=\"31\" width=\"31\" id=\""+this.n+"BlackCanvas\"></canvas>");
	this.write("<div class=\"mxPlayerDiv\" id=\""+this.n+"BlackPlayerDiv\"></div>");
	this.write("<div class=\"mxPrisonersDiv\" id=\""+this.n+"BlackPrisonersDiv\">0</div>");
	this.write("<canvas class=\"mxSmallStoneCanvas\" height=\"13\" width=\"13\" id=\""+this.n+"BlackPrisonersCanvas\"></canvas>");
	this.write("</div>");
};

}

if (typeof mxG.G.prototype.createForumPatch=='undefined'){

mxG.G.prototype.drawMarkOnLast4Forum=function(cx,x,y,d,c)
{
	var r=d/4;
	cx.strokeStyle=c;
	cx.beginPath();
	cx.arc(x+d/2,y+d/2,r,0,Math.PI*2,false);
	cx.stroke();
};

mxG.G.prototype.refreshForumPatch=function()
{
	var e,z,g,o,c,p,i,f,p10,p1,n1,n10,l,w,wo,wf,em,m;
	e=this.getE("NavigationDiv");
	z=e.parentNode;
	g=this.getE("GuessDiv");
	o=this.getE("OptionDiv");
	c=this.getE("CutDiv");
	p=this.getE("PassDiv");
	i=this.getE("GotoInput");
	f=this.getE("FirstBtn");
	p10=this.getE("TenPredBtn");
	p1=this.getE("PredBtn");
	n1=this.getE("NextBtn");
	n10=this.getE("TenNextBtn");
	l=this.getE("LastBtn");
	w=this.gobanWidth();
	wo=mxG.GetPxrStyle(o,"width")+this.getDW(o);
	wi=mxG.GetPxrStyle(i,"width")+this.getDW(i);
	wf=mxG.GetPxrStyle(f,"width")+this.getDW(f);
	m=mxG.GetPxrStyle(i,"marginLeft");
	em=mxG.GetPxrStyle(o,"width")/1.5;
	e.parentNode.style.width=w+"px";
	if ((!this.modifiedNBox||(this.wWhenModifiedNBox!=w))&&((6*wf+wi)>(w-4*wo-em*2)))
	{
		// modify element order for accessibility
		this.modifiedNBox=1;
		this.wWhenModifiedNBox=w;
		e.style.borderBottom="0.2em solid #cadceb";
		z.style.height="5em";
		z.insertBefore(g,c);
		z.insertBefore(o,c);
		z.insertBefore(i,c);
		
		i.style.position="absolute";
		i.style.top="3.2em";
		g.style.top="3em";
		o.style.top="3em";
		c.style.top="3em";
		p.style.top="3em";
		i.style.left=((w-wi)/2-m)+"px";
		g.style.left=((w-wi)/2-2*wo-wo)+"px";
		o.style.left=((w-wi)/2-wo-wo/2)+"px";
		c.style.right=((w-wi)/2-wo-wo/2)+"px";
		p.style.right=((w-wi)/2-2*wo-wo)+"px";
		
		f.style.position="absolute";
		p10.style.position="absolute";
		p1.style.position="absolute";
		n1.style.position="absolute";
		n10.style.position="absolute";
		l.style.position="absolute";
		f.style.left=w/2-3*Math.min(w/6,wf+4)+"px";
		p10.style.left=w/2-2*Math.min(w/6,wf+4)+"px";
		p1.style.left=w/2-1*Math.min(w/6,wf+4)+"px";
		n1.style.right=w/2-1*Math.min(w/6,wf+4)+"px";
		n10.style.right=w/2-2*Math.min(w/6,wf+4)+"px";
		l.style.right=w/2-3*Math.min(w/6,wf+4)+"px";
		f.style.top="0.2em";
		p10.style.top="0.2em";
		p1.style.top="0.2em";
		n1.style.top="0.2em";
		n10.style.top="0.2em";
		l.style.top="0.2em";
		
	}
	else if ((this.modifiedNBox||(this.wWhenModifiedNBox!=w))&&((6*wf+wi)<=(w-4*wo-em*2)))
	{
		this.modifiedNBox=0;
		this.wWhenModifiedNBox=w;
		e.style.borderBottom="0";
		z.style.height="2.4em";
		e.insertBefore(i,n1);
		z.insertBefore(g,e);
		z.insertBefore(o,e);
		
		g.style.top="0.5em";
		o.style.top="0.5em";
		c.style.top="0.5em";
		p.style.top="0.5em";
		g.style.left="0.25em";
		o.style.left="2em";
		c.style.right="2em";
		p.style.right="0.25em";
		f.style.position="static";
		p10.style.position="static";
		p1.style.position="static";
		n1.style.position="static";
		n10.style.position="static";
		l.style.position="static";
		i.style.position="static";
		f.style.left="auto";
		p10.style.left="auto";
		p1.style.left="auto";
		n1.style.right="auto";
		n10.style.right="auto";
		l.style.right="auto";
		i.style.left="auto";
		f.style.top="auto";
		p10.style.top="auto";
		p1.style.top="auto";
		n1.style.top="auto";
		n10.style.top="auto";
		l.style.top="auto";
		i.style.top="auto";
		
	}
};

mxG.G.prototype.createForumPatch=function()
{
	this.drawMarkOnLast=this.drawMarkOnLast4Forum;
};

}

