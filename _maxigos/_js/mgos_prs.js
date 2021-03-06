// maxiGos v6.57 > mgos_prs.js

// sgf parser

if (!mxG.N){

// mxG.N class (N=Node, P=Property, V=Value)

mxG.N=function(n,p,v)
{
	this.Kid=[];
	this.P={}; // P properties are B, W, AB, ...
	this.Dad=n;
	this.Focus=0; // kid on focus: 0=>no kid, 1=>1st kid, Kid.length=>last kid
	if (n) {n.Kid.push(this);if (!n.Focus) n.Focus=1;}
	if (p) this.P[p]=[v];
};

mxG.N.prototype.N=function(p,v){return new mxG.N(this,p,v);};

mxG.N.prototype.KidOnFocus=function(){return this.Focus?this.Kid[this.Focus-1]:0;};

mxG.N.prototype.TakeOff=function(p,k)
{
	if (this.P[p])
	{
		if (k<0) this.P[p].splice(0,this.P[p].length);else this.P[p].splice(k,1);
		if (!this.P[p].length) delete this.P[p];
	}
};

mxG.N.prototype.Set=function(p,v)
{
	if (typeof(v)=="object") this.P[p]=v;
	else this.P[p]=[v];
};

mxG.N.prototype.Clone=function(dad)
{
	var p,k,bN=new mxG.N(dad,null,null);
	for (p in this.P) if (p.match(/^[A-Z]+$/)) bN.P[p]=this.P[p].concat();
	for (k=0;k<this.Kid.length;k++) bN.Kid[k]=this.Kid[k].Clone(bN);
	bN.Focus=this.Focus;
	return bN;
};

}

if (!mxG.P){

mxG.P=function(gos,s)
{
	// no need to change charset
	this.rN=gos.rN;
	this.coreOnly=gos.sgfLoadCoreOnly;
	this.mainOnly=gos.sgfLoadMainOnly;
	this.parseSgf(s);
	if (!this.rN.Focus) this.parseSgf(gos.so);
	if (gos.repareSgfOn) gos.repareSgf(gos.rN);
};

mxG.P.prototype.keep=function(a,p,v)
{
	if (this.coreOnly&&((a=="N")||(a=="P")||(a=="V")))
		return (p=="B")||(p=="W")||(p=="AB")||(p=="AW")||(p=="AE")
			 ||(p=="FF")||(p=="CA")||(p=="GM")||(p=="SZ")||(p=="EV")||(p=="RO")||(p=="DT")||(p=="PC")
			 ||(p=="PW")||(p=="WR")||(p=="WT")||(p=="PB")||(p=="BR")||(p=="BT")
			 ||(p=="RU")||(p=="TM")||(p=="OT")||(p=="HA")||(p=="KM")||(p=="RE")||(p=="VW");
	return 1;
};

mxG.P.prototype.out=function(a,p,v)
{
	if (this.keep(a,p,v))
		switch(a)
		{
			case "N":this.nN=this.nN.N(p,v);break;
			case "P":this.nN.P[p]=[v];break;
			case "V":this.nN.P[p].push(v);break;
			case "v=":this.nN=this.v[this.v.length-1];break;
			case "v+":this.v.push(this.nN);break;
			case "v-":this.v.pop();break;
		}
};

mxG.P.prototype.clean=function(s)
{
	var r=s;
	// odd number of \ before \n or \r => sgf soft break
	// remove one \ and following \n\r, \r\n, \n or \r
	r=r.replace(/([^\\])((\\\\)*)\\((\n\r)|(\r\n)|\r|\n)/g,'$1$2');
	r=r.replace(/^((\\\\)*)\\((\n\r)|(\r\n)|\r|\n)/g,'$1');
	// remove \ preceded by even number of \
	r=r.replace(/([^\\])((\\\\)*)\\/g,'$1$2');
	r=r.replace(/^((\\\\)*)\\/g,'$1');
	// remove \ preceded by \
	r=r.replace(/\\\\/g,'\\');
	// replace \n\r, \r\n, and \r by \n
	r=r.replace(/(\n\r)|(\r\n)|\r/g,"\n");
	// strip html tags
    // r=r.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi,'');
	return r;
};

mxG.P.prototype.parseValue=function(p,K,c)
{
	var v="",a;
	K++; // by-pass '['
	while ((K<this.l)&&((a=this.s.charAt(K))!=']'))
	{
		if (a=='\\') {v+=a;K++;a=this.s.charAt(K);}
		if (K<this.l) v+=a;
		K++;
	}
	v=this.clean(v);
	// if (((p=="B")||(p=="W"))&&(v=="tt")) v=""; // cannot do it if goban size is larger than 19x19
	if (p=="RE") {a=v.slice(0,1);if ((a=="V")||(a=="D")) v=a;}
	if (this.nc) {this.nc=0;this.out("N",p,v);}
	else if (!c) this.out("P",p,v);
	else this.out("V",p,v);
	K++; // by-pass ']'
	while (K<this.l)
	{
		a=this.s.charAt(K);
		if ((a=='(')||(a==';')||(a==')')||((a>='A')&&(a<='Z'))||(a=='[')) break;else K++;
	}
	return K;
};

mxG.P.prototype.parseProperty=function(K)
{
	var a,p="",c=0;
	while ((K<this.l)&&((a=this.s.charAt(K))!='['))
	{
		if ((a>='A')&&(a<='Z')) p+=a;
		K++;
	}
	while ((K<this.l)&&(this.s.charAt(K)=='[')) {K=this.parseValue(p,K,c);c++;}
	return K;
};

mxG.P.prototype.parseNode=function(K)
{
	var a;
	this.nc=1;
	while (K<this.l)
	{
		switch(a=this.s.charAt(K))
		{
			case '(':
			case ';':
			case ')':return K;
			default : if ((a>='A')&&(a<='Z')) K=this.parseProperty(K);else K++;
		}
	}
	return K;
};

mxG.P.prototype.parseVariation=function(K)
{
	var a=(this.mainOnly?1:0);
	if (this.nv) {if (this.v.length) this.out("v=","","");this.nv=0;} else this.out("v+","","");
	while (K<this.l)
		switch(this.s.charAt(K))
		{
			case '(':if (a) K++;else return K;break;
			case ';':K++;K=this.parseNode(K);break;
			case ')':K++;
					 if (this.nv) {if (this.v.length) this.out("v-","","");} else this.nv=1;
					 if (a) return this.l;break;
			default :K++;
		}
	return K;
};

mxG.P.prototype.parseSgf=function(s)
{
	var K=0;
	this.rN.Kid=[];
	this.rN.Focus=0;
	this.nN=this.rN;
	this.v=[];
	this.nv=0; // if 0, 1st node variation
	this.nc=0; // if 1, create node
	this.s=s;
	this.l=this.s.length;
	while (K<this.l) if (this.s.charAt(K)=='(') {K++;K=this.parseVariation(K);} else K++;
	while (this.v.length) this.out("v-","","");
};

}
