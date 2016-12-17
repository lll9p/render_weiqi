// maxiGos v6.57 > mgosHeader.js

if (typeof mxG.G.prototype.createHeader=='undefined'){

mxG.Z.fr["Header"]="Informations";
mxG.Z.fr[" "]=" ";
mxG.Z.fr[", "]=", ";
mxG.Z.fr[": "]=" : ";
mxG.Z.fr["."]=",";
mxG.Z.fr["Black"]="Noir";
mxG.Z.fr["White"]="Blanc";
mxG.Z.fr[" wins"]=" gagne";
mxG.Z.fr["Date"]="Date";
mxG.Z.fr["Place"]="Lieu";
mxG.Z.fr["Time limits"]="Durée";
mxG.Z.fr["Rules"]="Règle";
mxG.Z.fr["Handicap"]="Handicap";
mxG.Z.fr["Result"]="Résultat";
mxG.Z.fr["none"]="aucun";
mxG.Z.fr[" by resign"]=" par abandon";
mxG.Z.fr[" by time"]=" au temps";
mxG.Z.fr[" by forfeit"]=" par forfait";
mxG.Z.fr[" by "]=" de ";
mxG.Z.fr["game with no result"]="partie sans résultat";
mxG.Z.fr["draw"]="partie nulle";
mxG.Z.fr["unknown result"]="résultat inconnu";
mxG.Z.fr["Komi"]="Komi ";
mxG.Z.fr[" point"]=" point";
mxG.Z.fr[" points"]=" points";
mxG.Z.fr[" Close "]="Fermer"; // add space to avoid confusion with menu "Close"
mxG.Z.fr["h"]="h";
mxG.Z.fr["mn"]="mn";
mxG.Z.fr["s"]="s";
mxG.Z.fr[" per player"]=" par joueur";
mxG.Z.fr["Japanese"]="japonaise";
mxG.Z.fr["Chinese"]="chinoise";
mxG.Z.fr["Korean"]="coréene";
mxG.Z.fr["GOE"]="Ing";
mxG.Z.fr["AGA"]="américaine / française";
mxG.Z.fr[" move"]=" coup";
mxG.Z.fr[" moves"]=" coups";
mxG.Z.fr["Number of moves"]="Nombre de coups";

mxG.Z.fr["buildMonth"]=function(a)
{
	var m=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
	return m[parseInt(a)-1];
};

mxG.Z.fr["buildDay"]=function(a)
{
	if (a=="01") return "1<span class=\"sup\">er</span>";
	return a.replace(/,([0-9]{2})/g,"-$1").replace(/0([1-9])/g,"$1");
};

mxG.Z.fr["buildDate2"]=function(s)
{
	var r,reg=/(^\s*([0-9]{2})(-([0-9]{2}(,[0-9]{2})*))?)(([^-])(.*))*\s*$/g;
	if (s.match(reg))
	{
		r=s.replace(reg,"$8");
		m=s.replace(reg,"$2");
		d=s.replace(reg,"$4");
		return (d?mxG.Z.fr["buildDay"](d)+" ":"")+mxG.Z.fr["buildMonth"](m)+(r?", "+mxG.Z.fr["buildDate2"](r):"");
	}
	return s;
};

mxG.Z.fr["buildDate"]=function(s)
{
	var r,y,m,reg=/(^\s*([0-9]{4})(-([^\.]*))*)(\.)?(.*)\s*$/g,k,km,z;
	if (s.indexOf("~")>=0)
	{
		r=s.split("~");
		km=r.length;
		z=mxG.Z.fr["buildDate"](r[0]);
		for (k=1;k<km;k++) z+=" ~ "+mxG.Z.fr["buildDate"](r[k]);
		return z;
	}
	s=s.replace(/,([0-9]{4})/g,".$1");
	if (s.match(reg))
	{
		r=s.replace(reg,"$6");
		y=s.replace(reg,"$2");
		m=s.replace(reg,"$4");
		return (m?mxG.Z.fr["buildDate2"](m)+" ":"")+y+(r?",  "+mxG.Z.fr["buildDate"](r):"");
	}
	return s;
};

// buildRules, buildTimeLimits, buildKomi, buildResult, buildNumOfMoves are called by this.build()

mxG.G.prototype.buildRules=function(a)
{
	return this.local(a.ucFirst());
};

mxG.G.prototype.buildTimeLimits=function(a)
{
	if (a.match(/^[0-9]+$/g))
	{
		var r="",t,h,mn,s;
		t=parseInt(a);
		h=Math.floor(t/3600);
		if (h) r+=h+this.local("h");
		mn=Math.floor((t-h*3600)/60);
		if (mn) r+=(r?this.local(" "):"")+mn+this.local("mn");
		s=t-h*3600-mn*60;
		if (s) r+=(r?this.local(" "):"")+s+this.local("s");
		return r+this.local(" per player");
	}
	return a;
};

mxG.G.prototype.buildKomi=function(k)
{
	var a=k+"",b;
	if (a.search(/^([0-9]+([,\.]([0-9]+)?)?)?$/)==0)
	{
		b=parseFloat(a.replace(",","."));
		if (b==0) return this.local("none");
		if ((b>-2)&&(b<2)) b+=this.local(" point");else b+=this.local(" points");
		return (b+"").replace(".",this.local("."));
	}
	return a;
};

mxG.G.prototype.buildResult=function(a)
{
	var b="";
	if (a.substr(0,1)=="B") b=this.local("Black");
	else if (a.substr(0,1)=="W") b=this.local("White");
	else if (a.substr(0,1)=="V") return this.local("game with no result");
	else if (a.substr(0,1)=="D") return this.local("draw");
	else if (a.substr(0,1)=="0") return this.local("draw");
	else if (a.substr(0,1)=="?") return this.local("unknown result");
	else return a;
	b+=this.local(" wins");
	if (a.substr(1,1)=="+")
	{
		if (a.substr(2,1)=="R") b+=this.local(" by resign");
		else if (a.substr(2,1)=="T") b+=this.local(" by time");
		else if (a.substr(2,1)=="F") b+=this.local(" by forfeit");
		else if (a.length>2)
		{
			var c=parseFloat(a.substr(2).replace(",","."));
			b+=this.local(" by ")+c;
			if ((c>-2)&&(c<2)) b+=this.local(" point");else b+=this.local(" points");
			b=b.replace(".",this.local("."));
		}
	}
	return b;
};

mxG.G.prototype.buildNumOfMoves=function(k)
{
	return k+((k<2)?this.local(" move"):this.local(" moves"));
};

mxG.G.prototype.getNumOfMoves=function()
{
	var aN=this.rN,n=0,p=0,ex="E",v;
	while (aN.KidOnFocus())
	{
		aN=aN.Kid[0];
		if (aN.P.B||aN.P.W)
		{
			n++;
			if (aN.P.B) v=aN.P.B[0];else v=aN.P.W[0];
			if (v) p=0;else p++;
			if ((aN.P.B&&(ex=="B"))||(aN.P.W&&(ex=="W"))) {n++;if (p) p++;}
		}
		else if (aN.P.AB||aN.P.AW||aN.P.AE) ex="E";
	}
	return n-p;
};

mxG.G.prototype.buildHeader=function()
{
	var h="",a="",t="",b,c,d,r;
	if (!this.hideTitle)
	{
		if (this.hasC("Title")) t=this.buildTitle();
		else {t=this.getInfoS("EV");a=this.getInfoS("RO");if (a) t+=(t?this.local(", "):"")+a;}
		if (this.concatDateToTitle&&(a=this.getInfoS("DT"))) t+=(t?" (":"")+this.build("Date",a)+(t?")":"");
	}
	if (t) t="<h1 class=\"mxTitleH1\">"+t+"</h1>";
	if (this.hideBlack) a="";else a=this.getInfoS("PB");
	if (a)
	{
		h+="<span class=\"mxPBSpan\"><span class=\"mxHeaderSpan\">"+this.local("Black")+this.local(": ")+"</span>"+a;
		a=this.getInfoS("BR");
		if (a) h+=this.local(" ")+this.build("Rank",a);
		if (this.concatTeamToPlayer&&(b=this.getInfoS("BT"))) h+=(a?" (":"")+b+(a?")":"");
		h+="</span><br>";
	}
	if (this.hideWhite) a="";else a=this.getInfoS("PW");
	if (a)
	{
		h+="<span class=\"mxPWSpan\"><span class=\"mxHeaderSpan\">"+this.local("White")+this.local(": ")+"</span>"+a;
		a=this.getInfoS("WR");
		if (a) h+=this.local(" ")+this.build("Rank",a);
		if (this.concatTeamToPlayer&&(b=this.getInfoS("WT"))) h+=(a?" (":"")+b+(a?")":"");
		h+="</span><br>";
	}
	if (this.hideDate) a="";else a=this.getInfoS("DT");
	if (a&&!this.concatDateToTitle) h+="<span class=\"mxDTSpan\"><span class=\"mxHeaderSpan\">"+this.local("Date")+this.local(": ")+"</span>"+this.build("Date",a)+"</span><br>";
	if (this.hidePlace) a="";else a=this.getInfoS("PC");
	if (a) h+="<span class=\"mxPCSpan\"><span class=\"mxHeaderSpan\">"+this.local("Place")+this.local(": ")+"</span>"+a+"</span><br>";
	if (this.hideRules) a="";else a=this.getInfoS("RU");
	if (a) h+="<span class=\"mxRUSpan\"><span class=\"mxHeaderSpan\">"+this.local("Rules")+this.local(": ")+"</span>"+this.build("Rules",a)+"</span><br>";
	if (this.hideTimeLimits) a="";else a=this.getInfoS("TM");
	if (a) h+="<span class=\"mxTMSpan\"><span class=\"mxHeaderSpan\">"+this.local("Time limits")+this.local(": ")+"</span>"+this.build("TimeLimits",a)+"</span><br>";
	if (this.hideKomi) a="";else a=this.getInfoS("KM");
	if (a) b="<span class=\"mxHeaderSpan\">"+this.local("Komi")+this.local(": ")+"</span>"+this.build("Komi",a);else b="";
	if (b&&!this.concatKomiToResult) h+="<span class=\"mxKMSpan\">"+b+"</span><br>";
	if (this.hideHandicap) a="";else a=this.getInfoS("HA");
	if (a) c="<span class=\"mxHeaderSpan\">"+this.local("Handicap")+this.local(": ")+"</span>"+this.build("handicap",a);else c="";
	if (c&&!this.concatHandicapToResult) h+="<span class=\"mxHASpan\">"+c+"</span><br>";
	if (!this.hideNumOfMoves)
	{
		a=this.getNumOfMoves()+"";
		if (this.hideNumOfMovesLabel) d=this.build("NumOfMoves",a);
		else d="<span class=\"mxHeaderSpan\">"+this.local("Number of moves")+this.local(": ")+"</span>"+a;
		if (!this.concatNumOfMovesToResult) h+="<span class=\"mxNMSpan\">"+d+"</span><br>";
	}
	else d="";
	if (!this.hideResult&&(a=this.getInfoS("RE")))
	{
		h+="<span class=\"mxRESpan\">";
		r=this.build("Result",a);
		if (!this.hideResultLabel) h+=("<span class=\"mxHeaderSpan\">"+this.local("Result")+this.local(": ")+"</span>"+r);
		else h+=r.ucFirst();
		if ((d&&this.concatNumOfMovesToResult)||(c&&this.concatHandicapToResult)||(b&&this.concatKomiToResult))
		{
			if (b&&this.concatKomiToResult) b=b.toLowerCase();else b="";
			if (c&&this.concatHandicapToResult) c=c.toLowerCase();else c="";
			if (d&&this.concatNumOfMovesToResult) d=d.toLowerCase();else d="";
			h+=" (";
			h+=(d?d.toLowerCase():"");
			h+=((d&&(c||b))?", ":"");
			h+=(c?c.toLowerCase():"");
			h+=(((d||c)&&b)?", ":"");
			h+=(b?b.toLowerCase():"");
			h+=")";
		}
		h+="</span><br>";
	}
	if (h) h="<div class=\"mxP\">"+h+"</div>";
	if (!this.hideGeneralComment&&(a=this.getInfoS("GC"))) h+="<div class=\"mxP mxGCP\">"+a.replace(/\n/g,"<br>")+"</div>";
	return "<div class=\"mxHeaderContentDiv\">"+t+h+"</div>";
};

mxG.G.prototype.doHeader=function()
{
	if (this.gBox=="ShowHeader") {this.hideGBox("ShowHeader");return;}
	if (!this.getE("ShowHeaderDiv"))
	{
		var s="";
		s+="<div class=\"mxShowContentDiv\" id=\""+this.n+"ShowHeaderContentDiv\"></div>";
		s+="<div class=\"mxOKDiv\">";
		s+="<button type=\"button\" onclick=\""+this.g+".hideGBox('ShowHeader')\"><span>"+this.local(" Close ")+"</span></button>";
		s+="</div>";
		this.createGBox("ShowHeader").innerHTML=s;
	}
	this.showGBox("ShowHeader");
	this.getE("ShowHeaderContentDiv").innerHTML=this.buildHeader();
};

mxG.G.prototype.initHeader=function()
{
};

mxG.G.prototype.updateHeader=function()
{
	if (this.headerBoxOn)
	{
		var h=this.buildHeader();
		if (h!=this.header)
		{
			this.getE("HeaderDiv").innerHTML=h;
			this.header=h;
		}
	}
	this.refreshHeader();
};

mxG.G.prototype.refreshHeader=function()
{
	if (this.headerBoxOn)
	{
		if (this.adjustHeaderWidth) this.adjust("Header","Width");
		if (this.adjustHeaderHeight) this.adjust("Header","Height");
	}
};

mxG.G.prototype.createHeader=function()
{
	if (this.hideNumOfMoves===undefined) this.hideNumOfMoves=1;
	if (this.headerBoxOn||this.headerBtnOn)
	{
		this.write("<div class=\"mxHeaderDiv\" id=\""+this.n+"HeaderDiv\">");
		if (this.headerBtnOn) this.addBtn({n:"Header",v:this.label("Header","headerLabel")});
		this.write("</div>");
	}
};

}