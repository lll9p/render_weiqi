// maxiGos v6.62 > mgos.js

if (!mxG.G){

mxG.Z.fr["Require HTML5!"]="Requiert HTML5 !";
mxG.Z.fr["Loading..."]="Chargement...";

// mxG.G class

mxG.G=function(k)
{
	this.k=k; // indice of this in mxG.D;
	this.n="d"+k; // name of this
	this.g="mxG.D["+k+"]"; // global name of this
	this.b=[]; // box list
	this.c=[]; // component list set from boxes
	this.gBox=""; // popup box
	this.initMethod="last"; // "first", "last", ...
	this.refreshTime=1000;
	this.so="(;FF[4]CA[UTF-8]GM[1]SZ[19])";
	this.gor=new mxG.R(); // rules manager
	// rN is root node, cN is current displayed node
	// rN kids are game tree root nodes (several rN kids means collection)
	this.rN=new mxG.N(null,null,null);
	this.rN.sgf=""; // sgf filename used in components such as "File" or "Sgf"
	this.sgf=""; // sgf source set by data-maxigos-sgf or $sgf parameter of gosStart
	this.j=document.scripts[document.scripts.length-1]; // current javascript script HTML element
	this.t=this.j; // target HTML element where player displays
	this.h=""; // content to write in target HTML element if (t!=j)
};

mxG.G.prototype.debug=function(s,m)
{var e=this.getE("DebugDiv");if (e) {if (m) e.innerHTML+=s;else e.innerHTML=s;}};
mxG.G.prototype.write=function(s){if (this.t!=this.j) this.h+=s;else document.write(s);};
mxG.G.prototype.local=function(s){return (mxG.Z[this.l]&&(mxG.Z[this.l][s]!==undefined))?mxG.Z[this.l][s]:s;};
mxG.G.prototype.build=function(x,a)
{var f="build"+x;if (mxG.Z[this.l]&&mxG.Z[this.l][f]) return mxG.Z[this.l][f](a);if (this[f]) return this[f](a);return a+"";};
mxG.G.prototype.label=function(s,t)
{return this[t+"_"+this.l_]?this[t+"_"+this.l_]:this.local(s);};

mxG.G.prototype.hasC=function(x)
{
	var b,bm,c,cm;
	bm=this.b.length;
	for (b=0;b<bm;b++)
	{
		cm=this.b[b].c.length;
		for (c=0;c<cm;c++) if (this.b[b].c[c]==x) return 1;
	}
	return 0;
};

mxG.G.prototype.getE=function(id){return document.getElementById(this.n+id);};

mxG.G.prototype.getDW=function(e)
{
	var r=0;
	r+=mxG.GetPxStyle(e,"paddingLeft");
	r+=mxG.GetPxStyle(e,"paddingRight");
	r+=mxG.GetPxStyle(e,"borderLeftWidth");
	r+=mxG.GetPxStyle(e,"borderRightWidth");
	return r;
};

mxG.G.prototype.getDH=function(e)
{
	var r=0;
	r+=mxG.GetPxStyle(e,"paddingTop");
	r+=mxG.GetPxStyle(e,"paddingBottom");
	r+=mxG.GetPxStyle(e,"borderTopWidth");
	r+=mxG.GetPxStyle(e,"borderBottomWidth");
	return r;
};

mxG.G.prototype.adjust=function(c,a)
{
	var z,p=a.toLowerCase(),i=a.substr(0,1),e=this.getE(c+"Div"),o,b=this["adjust"+c+a];
	if (b==1) b="Goban";
	o=this.getE(b+"Div");
	if (o)
	{
		z=mxG.GetPxStyle(o,p)+this["getD"+i](o)-this["getD"+i](e);
		if (z!=this["last"+c+i]) {this["last"+c+i]=z;e.style[p]=z+"px";}
	}
};

mxG.G.prototype.createGBox=function(b)
{
	var e=document.createElement('div'),g;
	if (!this[b+"Parent"]) this[b+"Parent"]="Goban";
	g=this.getE(this[b+"Parent"]+"Div");
	e.className="mx"+b+"Div";
	e.id=this.n+b+"Div";
	e.tabIndex="-1";
	e.style.position="absolute";
	e.style.left="0";
	e.style.top="0";
	e.style.right="0";
	e.style.bottom="0";
	e.style.display="none";
	e.style.outline="0";
	g.appendChild(e);
	return e;
};

mxG.G.prototype.hideGBox=function(b)
{
	if (b==this.gBox)
	{
		var e=this.getE(b+"Div"),p,c;
		e.style.display="none";
		this.gBox="";
		p=this.getE(this[b+"Parent"]+"Div");
		c=p.className;
		p.className=c.replace(/\smxUnder/,"");
		this.updateAll();
	}
};

mxG.G.prototype.showGBox=function(b)
{
	if (b==this.gBox) return;
	var e=this.getE(b+"Div"),p,c;
	if (this.inLoop) this.inLoop=0; //otherwise form input mess
	if (this.gBox)
	{
		this.getE(this.gBox+"Div").style.display="none";
		p=this.getE(this[this.gBox+"Parent"]+"Div");
		c=p.className;
		p.className=c.replace(/\smxUnder/,"");
	}
	e.style.display="block";
	this.gBox=b;
	p=this.getE(this[b+"Parent"]+"Div");
	p.className+=" mxUnder";
	this.updateAll();
};

mxG.G.prototype.enableBtn=function(b)
{
	this.getE(b+"Btn").disabled=false;
};

mxG.G.prototype.disableBtn=function(b)
{
	this.getE(b+"Btn").disabled=true;
};

mxG.G.prototype.addBtn=function(b)
{
	if (!b.t&&this[b.n.lcFirst()+"Tip_"+this.l_]) b.t=this[b.n.lcFirst()+"Tip_"+this.l_];
	this.write("<button class=\"mxBtn mx"+b.n+"Btn\""
			   +" "+(b.t?"title=\""+b.t+"\"":"")
			   +" autocomplete=\"off\""
			   +" id=\""+this.n+b.n+"Btn\""
			   +" onclick=\""+this.g+".do"+b.n+"();\">");
	this.write("<div><span>"+(b.v?b.v:"")+"</span></div>");
	this.write("</button>");
};

mxG.G.prototype.xy=function(x,y){return (x-1)*this.DY+y-1;};
mxG.G.prototype.xy2s=function(x,y)
{return (x&&y)?String.fromCharCode(x+((x>26)?38:96),y+((y>26)?38:96)):"";};

// place nodes
//////////////

mxG.G.prototype.placeAX=function()
{
	var v,z,k,km,s,x,y,x1,y1,x2,y2,AX=["AB","AW","AE"];
	for (z=0;z<3;z++)
	{
		km=((v=this.cN.P[AX[z]])?v.length:0);
		for (k=0;k<km;k++)
		{
			s=v[k];
			if (s.length==2)
			{
				x=s.c2n(0);
				y=s.c2n(1);
				this.gor.place(AX[z],x,y);
			}
			else if (s.length==5)
			{
				x1=s.c2n(0);
				y1=s.c2n(1);
				x2=s.c2n(3);
				y2=s.c2n(4);
				for (x=x1;x<=x2;x++) for (y=y1;y<=y2;y++) this.gor.place(AX[z],x,y);
			}
		}
	}
};

mxG.G.prototype.placeBW=function(nat)
{
	var s=this.cN.P[nat][0],x=0,y=0;
	if (s.length==2)
	{
		x=s.c2n(0);
		y=s.c2n(1);
	}
	this.gor.place(nat,x,y);
};

mxG.G.prototype.repareNode=function(aN)
{
	var k,ko,km,c;
	if (aN.P.L)
	{
		km=aN.P.L.length;
		if (km)
		{
			if (!aN.P.LB) aN.P.LB=[];
			ko=aN.P.LB.length;
			for (k=0;k<km;k++) aN.P.LB[k+ko]=aN.P.L[k]+":"+String.fromCharCode(97+k);
		}
		delete aN.P.L;
	}
	if (aN.P.M)
	{
		if (aN.P.M.length)
		{
			if (!aN.P.MA) aN.P.MA=aN.P.M;
			else aN.P.MA=aN.P.MA.concat(aN.P.M);
		}
		delete aN.P.M;
	}
};

mxG.G.prototype.placeNode=function()
{
	if (this.cN.KidOnFocus())
	{
		this.cN=this.cN.KidOnFocus();
		if (this.cN.P.L||this.cN.P.M) this.repareNode(this.cN);
		if (this.cN.P.B) this.placeBW("B");
		else if (this.cN.P.W) this.placeBW("W");
		else if (this.cN.P.AB||this.cN.P.AW||this.cN.P.AE) this.placeAX();
	}
};

mxG.G.prototype.changeFocus=function(aN)
{
	var k,km,bN=aN;
	while (bN!=this.rN)
	{
		if (bN.Dad.KidOnFocus()!=bN)
		{
			km=bN.Dad.Kid.length;
			for (k=0;k<km;k++) if (bN.Dad.Kid[k]==bN) {bN.Dad.Focus=k+1;break;}
		}
		bN=bN.Dad;
	}
};

mxG.G.prototype.backNode=function(aN)
{
	this.changeFocus(aN);
	this.cN=this.rN;
	this.setSz();
	this.gor.init(this.DX,this.DY);
	while (this.cN!=aN) this.placeNode();
};

// set
//////

mxG.G.prototype.htmlProtect=function(s)
{
	var r=s+'';
	r=r.replace(/</g,'&lt;').replace(/>/g,'&gt;');
	if (this.mayHaveExtraTags&&(this.htmlP===undefined))
	{
		r=r.replace(/&lt;p&gt;/gi,'');
		r=r.replace(/&lt;\/p&gt;/gi,'<br><br>');
	}
	else if (this.htmlP) r=r.replace(/&lt;(\/?)p(\s+class="[a-zA-Z0-9_-]+")?&gt;/gi,'<$1p$2>');
	if ((this.mayHaveExtraTags&&(this.htmlBr===undefined))||this.htmlBr) r=r.replace(/&lt;br\s?\/?&gt;/gi,'<br>');
	if (this.htmlSpan) r=r.replace(/&lt;(\/?)span(\s+class="[a-zA-Z0-9_-]+")?&gt;/gi,'<$1span$2>');
	if (this.htmlDiv) r=r.replace(/&lt;(\/?)div(\s+class="[a-zA-Z0-9_-]+")?&gt;/gi,'<$1div$2>');
	return r;
};

mxG.G.prototype.getInfo=function(p)
{
	var aN=this.cN;
	if ((p=="MN")||(p=="PM")||(p=="FG")) {if (aN==this.rN) aN=aN.KidOnFocus();}
	if ((p=="PM")||(p=="FG")) while ((aN!=this.rN)&&!aN.P[p]) aN=aN.Dad;
	else {aN=this.rN;while (aN&&!aN.P[p]) aN=aN.KidOnFocus();}
	if (aN&&aN.P[p]) return aN.P[p][0]+"";
	if (p=="SZ") return "19";
	if (p=="PM") return "1";
	if ((p=="ST")||(p=="FG")) return "0";
	return "";
};

mxG.G.prototype.getInfoS=function(p)
{
	return this.htmlProtect(this.getInfo(p));
};

mxG.G.prototype.setSz=function()
{
	var D=this.getInfo("SZ").split(":"),DX=this.DX,DY=this.DY;
	this.DX=parseInt(D[0]);
	this.DY=((D.length>1)?parseInt(D[1]):this.DX);
	if ((DX!=this.DX)||(DY!=this.DY)) this.hasToDrawWholeGoban=1;
};

mxG.G.prototype.setVw=function()
{
	// if VW is not a rectangle, set surrounding rectangle of all VW
	var aN=this.cN,x,y,s,k,km,xl,yt,xr,yb;
	if (aN==this.rN) aN=this.rN.KidOnFocus();
	while ((aN!=this.rN)&&!aN.P.VW) aN=aN.Dad;
	xl=this.xl;
	yt=this.yt;
	xr=this.xr;
	yb=this.yb;
	if (aN.P.VW)
	{
		this.xl=this.DX;
		this.yt=this.DY;
		this.xr=1;
		this.yb=1;
		km=aN.P.VW.length;
		for (k=0;k<km;k++)
		{
			s=aN.P.VW[k];
			if (s.length==5)
			{
				this.xl=Math.min(this.xl,s.c2n(0));
				this.yt=Math.min(this.yt,s.c2n(1));
				this.xr=Math.max(this.xr,s.c2n(3));
				this.yb=Math.max(this.yb,s.c2n(4));
			}
			else if (s.length==2)
			{
				x=s.c2n(0);
				y=s.c2n(1);
				this.xl=Math.min(this.xl,x);
				this.yt=Math.min(this.yt,y);
				this.xr=Math.max(this.xl,x);
				this.yb=Math.max(this.yt,y);
			}
			else
			{
				this.xl=1;
				this.yt=1;
				this.xr=this.DX;
				this.yb=this.DY;
				break;
			}
		}
	}
	else
	{
		this.xl=1;
		this.yt=1;
		this.xr=this.DX;
		this.yb=this.DY;
	}
	this.xli=this.xl;
	this.yti=this.yt;
	this.xri=this.xr;
	this.ybi=this.yb;
	if ((xl!=this.xl)||(yt!=this.yt)||(xr!=this.xr)||(yb!=this.yb)) this.hasToDrawWholeGoban=1;
};

mxG.G.prototype.setPl=function()
{
	var aN=this.rN;
	this.uC="B";
	while (aN.Focus)
	{
		aN=aN.Kid[0];
		if (aN.P)
		{
			if (aN.P.PL)
			{
				this.uC=aN.P.PL;
				break;
			}
			else if (aN.P.B||aN.P.W)
			{
				if (aN.P.B) this.uC="B";
				else if (aN.P.W) this.uC="W";
				break;
			}
		}
	}
	this.oC=((this.uC=="W")?"B":"W");
};

mxG.G.prototype.colorize=function(a,b) {return Math.floor(a+b*(255-a)/255);};

mxG.G.prototype.setImg=function(nat,d)
{
	var cn,cx,im=new Image(),s,sz,c=(nat=="B")?"black":"white",cs;
	im.canDraw=0;
	im.onload=function(){if (this.src) this.canDraw=1;};
	if (this.customStone)
	{
		if (d<9) sz=9;else if (d<31) sz=d;else sz=31;
		s=c+(this.in3dOn?"3d":"2d")+sz;
		if (this.customStone=="data:")
		{
			if (this[s]) {im.src=this[s];return im;}
			s=c+"StoneData";
			if (this[s]) {im.src=this[s];return im;}
		}
		else
		{
			im.src=this.path+this.customStone+s+".png";
			return im;
		}
	}
	cn=document.createElement("canvas");
	cn.width=cn.height=d;
	cx=cn.getContext("2d");
	this.drawStone(cx,nat,d);
	if (this.in3dOn)
	{
		cs=mxG.Color2Rgba((nat=="B")?this.blackStoneColor:this.whiteStoneColor);
		if (((nat=="B")&&(cs[0]!=0||cs[1]!=0||cs[2]!=0))
			||((nat=="W")&&(cs[0]!=255||cs[1]!=255||cs[2]!=255)))
		{
			// colorize 3d stone
			var imgData,data,k,kmax;
			imgData=cx.getImageData(0,0,d,d);
			data=imgData.data;
			kmax=data.length;
			for (k=0;k<kmax;k+=4)
			{
				data[k]=this.colorize(data[k],cs[0]);
				data[k+1]=this.colorize(data[k+1],cs[1]);
				data[k+2]=this.colorize(data[k+2],cs[2]);
			}
			cx.putImageData(imgData,0,0);
		}
	}
	im.src=cn.toDataURL("image/png");
	return im;
};
  
mxG.G.prototype.setD=function()
{
	var exD=(this.d?this.d:0),cn=this.getE("GobanCanvas"),g,gp,gb,gbp,fs,wgbp,z,dx,i;
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
		wgbp=mxG.GetPxStyle(gbp,"width")-this.getDW(gb)-this.getDW(gp)-this.getDW(g);
		// don't try to compute margin here: browsers don't give the same thing
		wgbp-=(this.fitDelta?this.fitDelta:0);
		// trick to avoid possible resizing loop
		if (!mxG.hasVerticalScrollBar()) wgbp-=mxG.verticalScrollBarWidth(); 
		fs=Math.max(3,Math.min(fs,Math.floor(wgbp/(this.fitMax*1.5))));
	}
	this.d=2*Math.floor(fs*3/4)+1;
	z=(this.border===undefined)?this.d>>3:this.border;
	if ((this.fitParent&1)&&((this.d*this.fitMax+z*2)>wgbp)) this.d-=2;
	if (this.d!=exD)
	{
		this.z=z;
		this.d2=(this.stretchOn?Math.floor(this.d/10):0);
		this.lw=(this.lineWidth?this.lineWidth:Math.floor(1+this.d/42));
		this.img={B:this.setImg("B",this.d),W:this.setImg("W",this.d)};
		this.imgSmall={B:this.setImg("B",1+this.d>>1),W:this.setImg("W",1+this.d>>1)};
		if (this.hasC("Edit"))
			this.imgBig={B:this.setImg("B",this.toolSize()-this.et*2),
						 W:this.setImg("W",this.toolSize()-this.et*2)};
	}
};

// main
///////

mxG.G.prototype.initAll=function()
{
	var c,s;
	if (!this.rN.Focus) {this.mayHaveExtraTags=0;new mxG.P(this,this.so);}
	this.cN=this.rN;
	this.setSz();
	this.gor.init(this.DX,this.DY);
	this.setD();
	for (c=0;c<this.m;c++) {s="init"+this.c[c];if (this[s]) this[s]();}
};

mxG.G.prototype.updateAll=function()
{
	var c,s;
	// reset loop here when lesson only
	if (this.hasC("Loop")&&this.hasC("Lesson")) this.resetLoop();
	if (this.hasC("Variations")) this.setMode();
	this.setVw();
	if (this.hasC("Diagram")) {this.setIndices();this.setNumbering();}
	for (c=0;c<this.m;c++) {s="update"+this.c[c];if (this[s]) this[s]();}
};

mxG.G.prototype.refreshAll=function()
{
	var c,s;
	this.setD();
	for (c=0;c<this.m;c++) {s="refresh"+this.c[c];if (this[s]) this[s]();}
};

mxG.G.prototype.start=function()
{
	var t=this.refreshTime,s=this.g+".refreshAll()";
	this.initAll();
	this.placeNode();
	if (this.initMethod=="last") while (this.cN.KidOnFocus()) this.placeNode();
	this.updateAll();
	this.startDone=1;
	setTimeout(s,t/10);
	setTimeout(s,t/5);
	setInterval(s,t);
	if (mxG.ExecutionTime) mxG.ExecutionTime();
};

mxG.G.prototype.createBox=function(c)
{
	var s="create"+c;
	this.c.push(c);
	if (this[s]) this[s]();
};

mxG.G.prototype.setA=function()
{
	var i,j,im=this.t.attributes.length,jm,n,s,a,b,bs,k,km;
	for (i=0;i<im;i++)
	{
		n=this.t.attributes.item(i).nodeName;
		if (n.match(/^data-maxigos-/))
		{
			a=n.replace(/^data-maxigos-/,"").split("-");
			s=a[0];
			jm=a.length;
			for (j=1;j<jm;j++) s+=a[j].ucFirst();
			b=this.t.getAttribute(n);
			this[s]=b.match(/^[0-9]+$/)?parseInt(b):b;
		}
	}
};

mxG.G.prototype.createWait=function()
{
	var s="display:none;text-align:center;padding:0.25em;",m=this.local("Loading...");
	this.write("<div class=\"mxWaitDiv\" style=\""+s+"\" id=\""+this.n+"Wait\">"+m+"</div>");
};

mxG.G.prototype.showWait=function()
{
	var e=this.getE("Wait");
	if (e&&this.wait) e.style.display="block";
};

mxG.G.prototype.startWait=function()
{
	this.wait=1;
	setTimeout(this.g+".showWait()",1000);
};

mxG.G.prototype.stopWait=function()
{
	var e=this.getE("Wait");
	this.wait=0;
	if (e) e.style.display="none";
};

mxG.G.prototype.afterGetF=function()
{
	if (!this.startDone) {setTimeout(this.g+".afterGetF()",25);return;}
	this.mayHaveExtraTags=0;
	new mxG.P(this,this.fromF);
	if (this.hasC("Tree")) this.initTree();
	this.backNode(this.rN.KidOnFocus());
	if (this.initMethod=="last") while (this.cN.KidOnFocus()) this.placeNode();
	this.updateAll();
	this.stopWait();
	if (mxG.ExecutionTime) mxG.ExecutionTime();
};

mxG.G.prototype.getF=function(f,c)
{
	var xhr=new XMLHttpRequest();
	xhr.gos=this;
	xhr.f=f;
	xhr.c=c;
	xhr.onreadystatechange=function()
	{
		var s,m,c;
		if (this.readyState==4)
		{
			if (this.status!=200) {this.gos.stopWait();return;}
			s=this.responseText;
			if (!this.c&&this.overrideMimeType)
			{
				if (m=s.match(/CA\[([^\]]*)\]/)) c=m[1].toUpperCase();else c="ISO-8859-1";
				if (c!="UTF-8")
				{
					// retry with charset found in sgf
					this.gos.getF(this.f,c);
					return;
				}
			}
			this.gos.fromF=s;
			this.gos.afterGetF();
		}
	};
	xhr.open("GET",xhr.f,c?false:true); // use false if c, otherwise chrome fails if many players
	if (c&&xhr.overrideMimeType) xhr.overrideMimeType("text/plain;charset="+c);
	xhr.send(null);
};

mxG.G.prototype.getS=function()
{
	var e=this.t,s,fo,f;
	this.startWait();
	this.mayHaveExtraTags=0;
	if (this.sgf)
	{
		s=this.sgf;
		if (s.indexOf("(")<0) f=s;
	}
	else if (((e==this.j)&&(e.getAttribute("src")))||(e!=this.j))
	{
		s=e.innerHTML;
		if (this.htmlParenthesis) s=s.replace(/&#40;/g,'(').replace(/&#41;/g,')');
		if (s.indexOf("(")<0) f=s.replace(/^\s+([^\s])/,"$1").replace(/([^\s])\s+$/,"$1");
		else this.mayHaveExtraTags=1;
	}
	else s=this.so;
	if (f)
	{
		fo=f.split("?")[0].split("/").reverse()[0];
		if (fo.match(/\.sgf$/)||(this.sourceFilter&&f.match(new RegExp(this.sourceFilter))))
		{
			// get file with "sgf" extension or url that matches this.sourceFilter
			// the file must have the same origin as the website that uses this script
			this.getF(f.replace("&amp;","&"),"");
			return;
		}
	}
	if (!this.rN.Focus) new mxG.P(this,s);
	this.stopWait();
};

mxG.G.prototype.createAll=function()
{
	var b,bm,c,cm,k=this.k,cls,gb="GlobalBox";
	if (!mxG.CanCn()||!mxG.CanToDataURL())
	{
		this.write("<div class=\"mxErrorDiv\">"+this.local("Require HTML5!")+"</div>");
		return;
	}
	this.setA();
	if (!this.l) this.l="fr";
	this.l_=this.l.replace("-","_"); // to deal language such as "zh-tw"
	cls="mx"+gb+"Div";
	cls+=(this.theme?" mx"+this.theme+gb+"Div":"");
	cls+=(this.config?" mx"+this.config+gb+"Div":"");
	cls+=" mxIn"+(this.in3dOn?"3d":"2d");
	this.write("<div class=\""+cls+"\" id=\""+this.n+gb+"Div\">");
	this.write("<div id=\""+this.n+"DebugDiv\"></div>");
	this.createWait();
	bm=this.b.length;
	for (b=0;b<bm;b++)
	{
		this.write("<div id=\""+this.n+this.b[b].n+"Div\" class=\"mx"+this.b[b].n+"Div\">");
		cm=this.b[b].c.length;
		for (c=0;c<cm;c++) this.createBox(this.b[b].c[c]);
		this.write("</div>");
	}
	this.write("</div>");
	if (!this.rN.Focus) this.getS();
	this.m=this.c.length;
	if (this.j==this.t) // too soon to call this.start()
		window.addEventListener("load",function(){mxG.D[k].start();},false);
	else // too late to call addEventListener(), typically when using mgosLoader.js
	{
		this.t.innerHTML=this.h;
		this.start();
	}
};

}
