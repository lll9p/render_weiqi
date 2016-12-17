// maxiGos v6.57 > tatamiCartouchePatch.js

if (typeof mxG.G.prototype.createTatamiCartouche=='undefined'){

mxG.G.prototype.strokeStone4TatamiCartouche=function(cx,x,y,d)
{
	cx.lineWidth=this.lw;
	cx.beginPath();
	cx.arc(x+d/2,y+d/2,d/2,0,Math.PI*2,false);
	cx.strokeStyle="#fff";
	cx.stroke();
};

mxG.G.prototype.drawStone4TatamiCartouche=function(cx,nat,x,y,d)
{
	cx.drawImage(this.img[nat],x,y,d,d);
};

mxG.G.prototype.drawBowl=function(cx,nat,bowlW)
{
	var e=Math.floor(bowlW/16),r=bowlW/2-e,xo=e,yo=e,x1=xo+r,y1=yo+r,xk,yk,dk=this.d;
	cx.clearRect(0,0,bowlW,bowlW);
	if (this.in3dOn)
	{
		cx.beginPath();
		cx.arc(x1,y1,r,0,Math.PI*2,false);
		cx.save();
		x1=xo+r;
		y1=yo+r;
		rG=cx.createRadialGradient(x1,y1,r,x1,y1,r/2);
		rG.addColorStop(0,"#966441");
		rG.addColorStop(0.3,"#855330");
		rG.addColorStop(0.4,"#daa774");
		rG.addColorStop(0.5,"#daa774");
		rG.addColorStop(0.6,(nat=="B")?"#000":"#fff");
		rG.addColorStop(1,(nat=="B")?"#000":"#fff");
		cx.fillStyle=rG;
		cx.shadowColor='#c96';
		cx.shadowBlur=e;
		cx.shadowOffsetX=0;
		cx.shadowOffsetY=e/2;
		cx.fill();
		cx.restore();
	}
	cx.save();
	cx.beginPath();
	cx.arc(xo+r,yo+r,r*0.75,0,Math.PI*2,false);
	cx.clip();
	cx.fillStyle=(nat=="B")?"#222":"#ddd";
	cx.fill();
	for (var k=0;k<181;k++)
	{
		xk=xo+0.4*r+1.6*r*Math.random()-dk/2;
		yk=yo+0.4*r+1.6*r*Math.random()-dk/2;
		this.drawStone4TatamiCartouche(cx,nat,xk,yk,dk);
		if (!this.in3dOn&&(nat=="B")) this.strokeStone4TatamiCartouche(cx,xk,yk,dk);
	}
	cx.restore();
	if (!this.in3dOn)
	{
		cx.beginPath();
		cx.arc(xo+r,yo+r,r-r*0.25*0.3,0,Math.PI*2,false);
		cx.strokeStyle="#855330";
		cx.lineWidth=r*0.25*0.6;
		cx.stroke();
		cx.beginPath();
		cx.arc(xo+r,yo+r,r-r*0.25*0.6-r*0.25*0.2,0,Math.PI*2,false);
		cx.strokeStyle="#daa774";
		cx.lineWidth=r*0.25*0.4;
		cx.stroke();
	}
};

mxG.G.prototype.xyp=function(k,p,r,d)
{
	var x,y,z,a=0,b=0;
	if (k<5) z=0.5;
	else if (k<10) z=k*0.1;
	else z=0.9;
	if (k==0) {x=r-d*0.75-z*d*Math.random();y=r-d/2;}
	else if (k==1) {x=r-d*0.25+z*d*Math.random();y=r-d/2;}
	else if (k==2) {x=r-d/2;y=r-d*0.75-z*d*Math.random();}
	else if (k==3) {x=r-d/2;y=r-d*0.25+z*d*Math.random();}
	else {x=r-d/2-z*d+2*z*d*Math.random();y=r-d/2-z*d+2*z*d*Math.random();}
	return {x:x,y:y};
};

mxG.G.prototype.drawCap=function(cx,nat,capW)
{
	var e=Math.floor(capW/16),r=(capW-2*e)/2,d=this.d,xo=e,yo=e,x1=xo+r,y1=yo+r;
	var p=this.gor.getPrisoners((nat=="B")?"W":"B"),s=""+p,k,xy;

	cx.clearRect(0,0,capW,capW);
	cx.beginPath();
	cx.arc(x1,y1,r,0,Math.PI*2,false);
	cx.save();
	rG=cx.createRadialGradient(x1,y1,r,x1,y1,r/2);
	rG.addColorStop(0,"#966441");
	rG.addColorStop(0.2,"#8d562d");
	rG.addColorStop(0.3,"#741");
	rG.addColorStop(0.4,"#741");
	rG.addColorStop(0.5,"#8f5430");
	rG.addColorStop(1,"#a74");
	cx.fillStyle=rG;
	if (this.in3dOn)
	{
		cx.shadowColor='#c96';
		cx.shadowBlur=e;
		cx.shadowOffsetX=0;
		cx.shadowOffsetY=e/4;
	}
	cx.fill();
	cx.restore();
	if (!this.lastP) {this.lastP={B:0,W:0};this.lastDWhenP={B:0,W:0};}
	if ((this.lastP[nat]!=p)||(d!=this.lastDWhenP[nat]))
	{
		if (!this.xP) this.xP={B:[],W:[]};
		if (!this.yP) this.yP={B:[],W:[]};
		if (!p) {this.xP[nat]=[];this.yP[nat]=[];}
		else
		{
			if (d!=this.lastDWhenP[nat])
			{
				this.xP[nat]=[];
				this.yP[nat]=[];
				this.lastP[nat]=0;
			}
			if (p>this.lastP[nat])
			{
				for (k=this.lastP[nat];k<p;k++)
				{
					xy=this.xyp(k,p,r,d);
					this.xP[nat][k]=xy.x;
					this.yP[nat][k]=xy.y;
				}
			}
			else if (p<this.lastP[nat])
			{
				this.xP[nat].length=p;
				this.yP[nat].length=p;
			}
		}
		this.lastP[nat]=p;
		this.lastDWhenP[nat]=d;
	}
	for (var k=0;k<p;k++)
	{
		this.drawStone4TatamiCartouche(cx,nat,xo+this.xP[nat][k],yo+this.yP[nat][k],d);
		if (!this.in3dOn&&(nat=="B"))
			this.strokeStone4TatamiCartouche(cx,xo+this.xP[nat][k],yo+this.yP[nat][k],d);
	}
	if (p>4)
	{
		cx.font=6*e+"px Arial";
		cx.textAlign="center";
		cx.textBaseline="middle";
		cx.fillStyle=(nat=="B")?"#fff":"#000";
		cx.fillText(s,xo+r,yo+r);
	}
};

mxG.G.prototype.drawInCartouche=function(a,c,w,t)
{
	var cn,cx,n,exW;
	if (t=="Bowl") n=c+t;
	else n=((c=="B")?"W":"B")+t;
	cn=this.getE(n+"Canvas");
	w=Math.floor(w);// w is real, cn.width is integer
	exW=cn.width;
	if ((a=="i")||(exW!=w))
	{
		cn.width=w;
		cn.height=w;
	}
	if ((a=="i")||(a=="u")||(exW!=w))
	{
		cx=cn.getContext("2d");
		this["draw"+t](cx,c,w);
	}
};

mxG.G.prototype.initTatamiCartouche=function()
{
	if (!this.img.B.canDraw||!this.img.W.canDraw) {setTimeout(this.g+".initTatamiCartouche()",10);return;}
	var bowlW=this.bowlS*this.d,capW=this.capS*this.d,bs,ws;
	this.drawInCartouche("i","B",bowlW,"Bowl");
	this.drawInCartouche("i","W",bowlW,"Bowl");
	this.drawInCartouche("i","B",capW,"Cap");
	this.drawInCartouche("i","W",capW,"Cap");
	this.in3dOnWhenDrawingCartouche=this.in3dOn;
};

mxG.G.prototype.updateTatamiCartouche=function()
{
	if (!this.img.B.canDraw||!this.img.W.canDraw) {setTimeout(this.g+".updateTatamiCartouche()",20);return;}
	var bowlW=this.bowlS*this.d,capW=this.capS*this.d,bs,ws;
	if (this.in3dOnWhenDrawingCartouche!=this.in3dOn)
	{
		this.drawInCartouche("u","B",bowlW,"Bowl");
		this.drawInCartouche("u","W",bowlW,"Bowl");
		this.in3dOnWhenDrawingCartouche=this.in3dOn;
	}
	this.drawInCartouche("u","B",capW,"Cap");
	this.drawInCartouche("u","W",capW,"Cap");
};

mxG.G.prototype.showHideBowlsAndPlayers=function()
{
	if (!this.fitParent) return;
	var g,gp,bs,bw,bpl,wpl,nav,hnav,hg,hd,wbs,wws,hbs,hws;
	g=this.getE("GobanDiv");
	gp=g.parentNode;
	bs=this.getE("BlackStonesDiv");
	ws=this.getE("WhiteStonesDiv");
	if (this.bowlsAndCapsVisible)
	{
		bs.style.display="block";
		ws.style.display="block";
		wbs=mxG.GetPxStyle(bs,"width")+this.getDW(bs);
		wws=mxG.GetPxStyle(ws,"width")+this.getDW(ws);
		hbs=mxG.GetPxStyle(bs,"height")+this.getDH(bs);
		hws=mxG.GetPxStyle(ws,"height")+this.getDH(ws);
		gp.style.padding="1px "+wws+"px 1px "+wbs+"px"; // 1px to make mxPlayerDiv margins working
		gp.style.minHeight=Math.max(hws,hbs)+"px";
	}
	else
	{
		gp.style.padding="";
		gp.style.minHeight="0";
		bs.style.display="none";
		ws.style.display="none";
	}
	if (this.tatamiPlayerOn)
	{
		bpl=this.getE("BlackPlayerDiv");
		wpl=this.getE("WhitePlayerDiv");
		nav=this.getE("NavigationDiv");
		hnav=mxG.GetPxStyle(nav,"height")+this.getDH(nav);
		hg=mxG.GetPxStyle(g,"height")+this.getDH(g);
		hd=document.documentElement.clientHeight;
		if (hd<(hg+6*hnav))
		{
			bpl.style.display="none";
			wpl.style.display="none";
		}
		else
		{
			bpl.style.display="block";
			wpl.style.display="block";
		}
	}
};

mxG.G.prototype.refreshTatamiCartouche=function()
{
	if (!this.img.B.canDraw||!this.img.W.canDraw) {setTimeout(this.g+".refreshTatamiCartouche()",30);return;}
	var bowlW=this.bowlS*this.d,capW=this.capS*this.d,bs,ws;
	this.drawInCartouche("r","B",bowlW,"Bowl");
	this.drawInCartouche("r","W",bowlW,"Bowl");
	this.drawInCartouche("r","B",capW,"Cap");
	this.drawInCartouche("r","W",capW,"Cap");
	this.in3dOnWhenDrawingCartouche=this.in3dOn;
	if (this.showHideBowlsAndPlayersOn) this.showHideBowlsAndPlayers();
};

mxG.G.prototype.setD4Tatami=function()
{
	var exD=(this.d?this.d:0),cn=this.getE("GobanCanvas"),g,gp,gb,gbp,fs,fs2,wa,z,dx,i,d,d2;
	if (!exD&&this.gobanFs) cn.style.fontSize=this.gobanFs;
	fs=mxG.GetPxStyle(cn,"fontSize");
	if (this.fitParent&1)
	{
		if (this.configFitMax===undefined) this.configFitMax=this.fitMax?this.fitMax:0;
		if (!this.configFitMax)
		{
			i=((this.configIndicesOn||this.indicesOn)?2:0);
			if (this.maximizeGobanWidth) dx=Math.max(19,this.DX)+i;
			else if (this.xri) dx=this.xri-this.xli+1;
			else if (this.DX) dx=this.DX+i;
			else dx=19+i;
			this.fitMax=dx;
		}
		g=this.getE("GobanDiv");
		gp=g.parentNode;
		gb=this.getE("GlobalBoxDiv");
		gbp=gb.parentNode;
		wa=mxG.GetPxStyle(gbp,"width")-this.getDW(gbp);
		// don't try to compute margin here: browsers don't give the same thing
		wa-=4;// mxGobanBoxDiv border
		// trick to avoid possible resizing loop
		if (!mxG.hasVerticalScrollBar()) wa-=mxG.verticalScrollBarWidth();
		fs2=Math.max(4,2/3*wa/(this.fitMax+2*this.bowlS));
		d=Math.floor(fs*3/2);if (!(d&1)) d--;
		d2=Math.floor(fs2*3/2);if (!(d2&1)) d2--;
		if (d2<d)
		{
			this.bowlsAndCapsVisible=0;
			if (document.documentElement.clientWidth>360) wa-=16;// mxGobanBoxDiv padding
			fs=Math.min(fs,Math.max(4,2/3*wa/this.fitMax));
		}
		else this.bowlsAndCapsVisible=1;
	}
	this.d=Math.floor(fs*3/2);
	if (!(this.d&1)) this.d--;
	this.border=0;
	z=(this.border===undefined)?this.d>>3:this.border;
	if (this.d!=exD)
	{
		this.z=0;
		this.d2=(this.stretchOn?Math.floor(this.d/10):0);
		this.lw=(this.lineWidth?this.lineWidth:Math.floor(1+this.d/42));
		this.img={B:this.setImg("B",this.d),W:this.setImg("W",this.d)};
		this.imgSmall={B:this.setImg("B",1+this.d>>1),W:this.setImg("W",1+this.d>>1)};
		if (this.hasC("Edit"))
			this.imgBig={B:this.setImg("B",this.toolSize()-this.et*2),
						 W:this.setImg("W",this.toolSize()-this.et*2)};
	}
};

mxG.G.prototype.createTatamiCartouche=function()
{
	// parameters:
	// bowlS, capS: size of bowl and cap (unit in stone diameter)
	// tatamiPlayerOn: add players boxes
	// showHideBowlsAndPlayersOn: show/hide bowls and players according to sgf player parent size
	this.bowlS=6; 
	this.capS=5;
	this.setD=this.setD4Tatami;
};

}

if (typeof mxG.G.prototype.createTatamiBlack=='undefined'){

mxG.G.prototype.updateTatamiPlayer=function(c)
{
	var p,r,s,e;
	p=this.getInfoS("P"+c);
	r=this.getInfoS(c+"R");
	// ●: U+25CF, ○: U+25CB not so small, no surprise, big in osaka font
	// ⚫: U+26AA, ⚪: U+26AB usually bigger but very small on samsung device
	// ◯:U+25EF large but no black cirle as this one
	// ⬤:U+2B24 not on samsung device
	s="<span class=\"mxCircleSpan\">"+((c=="B")?"●":"○")+"</span>";
	s+="<span class=\"mxPlayerSpan\">";
	if (p) s+=("&nbsp;"+p);
	if (r) s+=("&nbsp;"+this.build("Rank",r));
	s+="</span>";
	if (s!=this["p"+c+"r"])
	{
		e=this.getE(((c=="B")?"Black":"White")+"PlayerDiv");
		e.innerHTML=s;
		if (this.hideEmptyPlayer) e.style.visibility=((p||r)?"visible":"hidden");
		this["p"+c+"r"]=s;
	}
};

mxG.G.prototype.updateTatamiBlack=function()
{
	if (this.tatamiPlayerOn) this.updateTatamiPlayer("B");
};

mxG.G.prototype.createTatamiBlack=function()
{
	this.write("<div id=\""+this.n+"BlackStonesDiv\" class=\"mxBlackStonesDiv\">");
	this.write("<canvas class=\"mxCapCanvas\" id=\""+this.n+"BCapCanvas\"></canvas>");
	this.write("<canvas class=\"mxBowlCanvas\" id=\""+this.n+"BBowlCanvas\"></canvas>");
	this.write("</div>");
	if (this.tatamiPlayerOn)
	{
		this.write("<div id=\""+this.n+"BlackPlayerDiv\" class=\"mxPlayerDiv mxBlackDiv "+(this.in3d?"mxIn3d":"mxIn2d")+"\">");
		this.write("</div>");
	}
};

}

if (typeof mxG.G.prototype.createTatamiWhite=='undefined'){

mxG.G.prototype.updateTatamiWhite=function()
{
	if (this.tatamiPlayerOn) this.updateTatamiPlayer("W");
};

mxG.G.prototype.createTatamiWhite=function()
{
	if (this.tatamiPlayerOn)
	{
		this.write("<div id=\""+this.n+"WhitePlayerDiv\" class=\"mxPlayerDiv mxWhiteDiv "+(this.in3d?"mxIn3d":"mxIn2d")+"\">");
		this.write("</div>");
	}
	this.write("<div id=\""+this.n+"WhiteStonesDiv\" class=\"mxWhiteStonesDiv\">");
	this.write("<canvas class=\"mxBowlCanvas\" id=\""+this.n+"WBowlCanvas\"></canvas>");
	this.write("<canvas class=\"mxCapCanvas\" id=\""+this.n+"WCapCanvas\"></canvas>");
	this.write("</div>");
};

}
