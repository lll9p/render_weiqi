// maxiGos v6.57 > mgosSgf.js

if (typeof mxG.G.prototype.createSgf=='undefined'){

mxG.Z.fr[" Close "]="Fermer";

mxG.nl2br=function(s)
{
    return (s+'').replace(/\r\n|\n\r|\r|\n/g,'<br>');
};

mxG.sgfEsc=function(s)
{
	return (s+'').replace(/([^\\\]]?)(\\|])/g,'$1'+"\\"+'$2');
};

mxG.G.prototype.canSgfDownloadLocally=function()
{
	// can force to skip test by setting parameter below to 0 or 1 in configuration file
	var a;
	if (this.downloadLocallyIs===undefined)
	{
		// it seems that the downloaded file is always in UTF-8 (possible to change the charset?)
		// if toCharset is not UTF-8, don't download the file (just display sgf in the browser)
		if (this.toCharset!="UTF-8") this.downloadLocallyIs=0;
		else this.downloadLocallyIs=(typeof document.createElement('a').download==='string')?1:0;
	}
	return this.downloadLocallyIs;
};

mxG.G.prototype.mirror=function(s)
{
	var c1=s.substr(0,1),c2=s.substr(1,1);
	return c1+String.fromCharCode(96+20-c2.c2n());
};

mxG.G.prototype.buildAllSgf=function(aN,only,c)
{
	// build sgf tree starting at aN
	// if only&1, keep B, W, AB, AE, AW, FF, CA, GM, SZ, EV, RO, DT, PC, PB, BR, BT, PW, WR, WT, RU, TM, OT, HA, KM, RE, VW only
	// if only&2, keep main variation only
	// if only&4, keep variation on focus only (useful when show)
	// remove empty nodes
	var rc="\n",k,x,y,ym,aText="",first,keep;
	if (c===undefined) c=0;
	if ((aN.Dad&&(aN.Dad==this.rN))||(aN.Dad&&(aN.Dad.Kid.length>1)))
	{
		if (only&4) {if ((aN.Dad==this.rN)&&(aN==aN.Dad.KidOnFocus())) aText+="(";}
		else if (only&2) {if ((aN.Dad==this.rN)&&(aN==aN.Dad.Kid[0])) aText+="(";}
		else if ((aN.Dad==this.rN)&&(aN==aN.Dad.Kid[0])) aText+="(";
		else {aText+=(rc+"(");c=0;}
	}
	if (aN!=this.rN)
	{
		if (aText[aText.length-1]!="(")
		{
			if (aN.Dad&&aN.Dad.Dad&&(aN.Dad.Dad==this.rN)) {aText+=rc;c=0;}
			else if (c>3) {aText+=rc;c=0;} else c++;
		}
		first=1;
		for (x in aN.P)
		{
			if (x.match(/^[A-Z]+$/))
			{
				if (only&1)
				{
					if ((x=="B")||(x=="W")||(x=="AB")||(x=="AW")||(x=="AE")
						||(x=="FF")||(x=="CA")||(x=="GM")||(x=="SZ")
						||(x=="EV")||(x=="RO")||(x=="DT")||(x=="PC")
						||(x=="PB")||(x=="BR")||(x=="BT")||(x=="PW")||(x=="WR")||(x=="WT")
						||(x=="RU")||(x=="TM")||(x=="OT")||(x=="HA")||(x=="KM")||(x=="RE")||(x=="VW"))
						keep=1;
					else keep=0;
				}
				else keep=1;
				if (keep)
				{
					if (first) {aText+=";";first=0;} // discard empty node
					if (aN.Dad&&(aN.Dad==this.rN)) {aText+=rc;c=0;}
					aText+=x;
					ym=aN.P[x].length;
					//if ((x=="B")||(x=="W")) aText+=("["+this.mirror(aN.P[x][0])+"]");else
					for (y=0;y<ym;y++) aText+=("["+mxG.sgfEsc(aN.P[x][y])+"]");
				}
			}
		}
	}
	if (aN.Kid&&aN.Kid.length)
	{
		if (only&4) {if (aN!=this.cN) aText+=this.buildAllSgf(aN.KidOnFocus(),only,c);}
		else if (only&2) aText+=this.buildAllSgf(aN.Kid[0],only,c);
		else for (k=0;k<aN.Kid.length;k++) aText+=this.buildAllSgf(aN.Kid[k],only,c);
	}
	if (only&4) {if ((aN.Dad==this.rN)&&(aN==aN.Dad.KidOnFocus())) aText+=")";}
	else if (only&2) {if ((aN.Dad==this.rN)&&(aN==aN.Dad.Kid[0])) aText+=")";}
	else {if ((aN.Dad&&(aN.Dad==this.rN))||(aN.Dad&&(aN.Dad.Kid.length>1))) aText+=")";}
	return aText;
};

mxG.G.prototype.sgfMandatory=function()
{
	var p,km=this.rN.Kid.length;
	for (var k=0;k<km;k++)
	{
		p=this.rN.Kid[k].P;
		p.FF=["4"];
		p.CA=[this.toCharset];
		p.GM=["1"];
		p.AP=["maxiGos:"+mxG.V];
	}
};

mxG.G.prototype.buildSomeSgf=function(only)
{
	this.sgfMandatory();
	return this.buildAllSgf(this.rN,only,0);
};

mxG.G.prototype.buildSgf=function()
{
	this.sgfMandatory();
	return this.buildAllSgf(this.rN,(this.sgfSaveCoreOnly?1:0)+(this.sgfSaveMainOnly?2:0),0);
};

mxG.G.prototype.popupSgf=function()
{
	if (this.sgfPopup&&!this.sgfPopup.closed) this.sgfPopup.close();
	this.sgfPopup=window.open();
	// some browsers (chrome, safari !!!) don't support 'text/plain', thus use default 'text/html'
	// use <pre> tag otherwise line breaks are replaced by spaces
	this.sgfPopup.document.open();
	this.sgfPopup.document.write("<!DOCTYPE html><html><body><pre>\n");
	this.sgfPopup.document.write(this.buildSgf());
	this.sgfPopup.document.write("\n</pre></body></html>");
	this.sgfPopup.document.close();
	this.sgfPopup.document.title="Sgf"; // not working in all browsers
};

mxG.G.prototype.downloadSgfLocally=function(f)
{
	var u,a;
	if (this.canSgfDownloadLocally())
	{
		// Big5, gb18030, Shift_JIS, ... don't seem to be usable here
		u="data:application/octet-stream;charset=utf-8,"+encodeURIComponent(this.buildSgf());
		a=document.createElement('a');
		document.body.appendChild(a); // firefox requires the link to be in the body
		a.download=f;
		a.href=u;
		a.click();
		document.body.removeChild(a);
	}
	else this.popupSgf(); // just display sgf in the browser
};

mxG.G.prototype.doReplaceFromSgf=function()
{
	var s=this.getE("ShowSgfTextArea").value;
	if (s!=this.sgfBeforeEdit)
	{
		this.mayHaveExtraTags=0;
		new mxG.P(this,this.getE("ShowSgfTextArea").value);
		this.backNode(this.rN.KidOnFocus());
		if (this.hasC("Tree")) this.initTree();
		this.updateAll();
	}
	this.hideGBox("ShowSgf");
};

mxG.G.prototype.doEditSgf=function()
{
	if (this.gBox=="ShowSgf") {this.hideGBox("ShowSgf");return;}
	if (!this.getE("ShowSgfDiv"))
	{
		var s="";
		s+="<div class=\"mxShowContentDiv\">";
		s+="<textarea id=\""+this.n+"ShowSgfTextArea\"></textarea>";
		s+="</div>";
		s+="<div class=\"mxOKDiv\">";
		s+="<button type=\"button\" onclick=\""+this.g+".doReplaceFromSgf()\"><span>"+this.local("OK")+"</span></button>";
		s+="<button type=\"button\" onclick=\""+this.g+".hideGBox('ShowSgf')\"><span>"+this.local("Cancel")+"</span></button>";
		s+="</div>";
		this.createGBox("ShowSgf").innerHTML=s;
	}
	this.sgfBeforeEdit=this.buildSgf();
	this.getE("ShowSgfTextArea").value=this.sgfBeforeEdit;
	this.showGBox("ShowSgf");
};

mxG.G.prototype.doSgf=function()
{
	if (this.noSgfDialog)
	{
		this.downloadSgfLocally(this.rN.sgf?this.rN.sgf:"maxiGos.sgf");
	}
	else if (this.allowEditSgf) this.doEditSgf();
	else
	{
		if (this.gBox=="ShowSgf") {this.hideGBox("ShowSgf");return;}
		if (!this.getE("ShowSgfDiv"))
		{
			var s="";
			s+="<div class=\"mxShowContentDiv\">";
			s+="<div class=\"mxP\" id=\""+this.n+"ShowSgfP\"></div>";
			s+="</div>";
			s+="<div class=\"mxOKDiv\">";
			s+="<button type=\"button\" onclick=\""+this.g+".hideGBox('ShowSgf')\"><span>"+this.local(" Close ")+"</span></button>";
			s+="</div>";
			this.createGBox("ShowSgf").innerHTML=s;
		}
		this.getE("ShowSgfP").innerHTML=mxG.nl2br(this.htmlProtect(this.buildSgf()));
		this.showGBox("ShowSgf");
	}
};

mxG.G.prototype.createSgf=function()
{
	var p,fromCharset,toCharset;
	if (this.toCharset===undefined) this.toCharset="UTF-8";
	if (this.sgfBtnOn)
	{
		this.write("<div class=\"mxSgfDiv\" id=\""+this.n+"SgfDiv\">");
		this.addBtn({n:"Sgf",v:this.label("SGF","sgfLabel")});
		this.write("</div>");
	}
};

}
