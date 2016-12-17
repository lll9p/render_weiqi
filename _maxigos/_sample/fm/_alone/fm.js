// maxiGos v6.61 Copyright 1998-2016 Francois Mizessyn, BSD license (see license.txt)
if (typeof mxG=='undefined') mxG={};
if (!mxG.V){
String.prototype.c2n=function(k){var n=this.charCodeAt(k);return n-((n<97)?38:96);};
String.prototype.ucFirst=function(){return this.charAt(0).toUpperCase()+this.slice(1);}
String.prototype.lcFirst=function(){return this.charAt(0).toLowerCase()+this.slice(1);}
mxG.D=[];
mxG.K=0;
mxG.S=[];
mxG.V="6.61";
if (typeof mxG.Z=='undefined') mxG.Z=[];
if (!mxG.Z.fr) mxG.Z.fr=[];
if (!mxG.Z.en) mxG.Z.en=[];
mxG.IsArray=function(a) {return a.constructor===Array;};
mxG.GetStyle=function(e,p){return window.getComputedStyle?window.getComputedStyle(e,null)[p]:"";};
mxG.GetPxStyle=function(e,p){var r=parseFloat(mxG.GetStyle(e,p));return isNaN(r)?0:r;};
mxG.GetPxrStyle=function(e,p){return Math.round(mxG.GetPxStyle(e,p))};
mxG.GetDir=function()
{
var s=document.getElementsByTagName('script'),p=s[s.length-1].src.split('?')[0];
return p.split("/").slice(0,-1).join("/")+"/";
};
mxG.AddCss=function(s)
{
var k,km=mxG.S.length,e;
for (k=0;k<km;k++) if (s==mxG.S[k]) return;
mxG.S.push(s);
e=document.createElement('link');
e.setAttribute('rel','stylesheet');
e.setAttribute('type','text/css');
e.setAttribute('href',s);
document.getElementsByTagName('head')[0].appendChild(e);
};
mxG.AddCssRule=function(css)
{
var s;
document.getElementsByTagName('head')[0].appendChild(document.createElement("style"));
s=document.styleSheets[document.styleSheets.length-1];
s.insertRule(css,0);
};
mxG.Color2Rgba=function(c)
{
var cn,cx;
cn=document.createElement("canvas");
cn.width=1;
cn.height=1;
cx=cn.getContext("2d");
cx.fillStyle=c;
cx.fillRect(0,0,1,1);
return cx.getImageData(0,0,1,1).data;
};
mxG.GetMClick=function(ev)
{
var box=this.getBoundingClientRect();
return {x:ev.clientX-box.left,y:ev.clientY-box.top};
};
mxG.GetKCode=function(ev)
{
var c;
if (!ev) ev=window.event;
if (ev.altKey||ev.ctrlKey||ev.metaKey) return 0;
c=ev.keyCode;
if (ev.charCode&&(c==0)) c=ev.charCode;
return c;
};
mxG.CreateUnselectable=function()
{
if (!mxG.Unselectable)
{
var s=document.createElement('style'),c='',k,a=['-moz-','-webkit-','-ms-',''];
for (k=0;k<4;k++) c+=(a[k]+'user-select:none;');
s.type='text/css';
s.innerHTML='.mxUnselectable {'+c+'}';
document.getElementsByTagName('head')[0].appendChild(s);
mxG.Unselectable=1;
}
};
mxG.CanCn=function(){return !!document.createElement('canvas').getContext;};
mxG.CanToDataURL=function()
{
var c=document.createElement("canvas"),d=c.toDataURL("image/png");
return (d.indexOf("data:image/png")==0);
};
mxG.CanOpen=function()
{var r;return !(typeof FileReader=='undefined')&&(r=new FileReader())&&(r.readAsText);};
mxG.IsMacSafari=(function()
{
var u=navigator.userAgent.toLowerCase();
return (u.indexOf('safari')!=-1)&&(u.indexOf('macintosh')!=-1)&&!(u.indexOf('chrome')>-1);
})();
mxG.IsAndroid=(navigator.userAgent.toLowerCase().indexOf("android")>-1);
mxG.IsIOS=(navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?1:0);
mxG.IsWebkit=('WebkitAppearance' in document.documentElement.style);
mxG.IsFirefox=(navigator.userAgent.toLowerCase().indexOf('firefox')>-1);
mxG.hasVerticalScrollBar=function()
{
var w=window,d=w.document,c=d.compatMode;
r=c&&/CSS/.test(c)?d.documentElement:d.body;
if (typeof w.innerWidth=='number') return w.innerWidth>r.clientWidth;
else return r.scrollWidth>r.clientWidth;
};
mxG.verticalScrollBarWidth=function()
{
var w=window,d=w.document,b=d.body,r=0,t,s;
if (b)
{
t=d.createElement('div');
s='position:absolute;overflow:scroll;top:-100px;left:-100px;width:100px;height:100px;';
t.style.cssText=s;
b.insertBefore(t,b.firstChild);
r=t.offsetWidth-t.clientWidth;
b.removeChild(t);
}
return r;
};
mxG.fileExist=function(f)
{
var xhr=new XMLHttpRequest();
xhr.z=0;
xhr.onreadystatechange=function(){if ((this.readyState==4)&&(this.status==200)) xhr.z=1;};
xhr.open("GET",f,false);
xhr.send(null);
return xhr.z;
};
}
if (!mxG.R){
mxG.R=function()
{
this.act=[""]; 
this.nat=["E"]; 
this.x=[0]; 
this.y=[0]; 
this.o=[0]; 
};
mxG.R.prototype.inGoban=function(x,y)
{
return (x>=1)&&(y>=1)&&(x<=this.DX)&&(y<=this.DY);
};
mxG.R.prototype.init=function(DX,DY)
{
var i,j;
this.play=0; 
this.setup=0; 
this.DX=DX; 
this.DY=DY; 
this.ban=[]; 
for (i=1;i<=this.DX;i++) 
{
this.ban[i]=[];
for (j=1;j<=this.DY;j++) this.ban[i][j]=0;
}
this.prisoners={B:[0],W:[0]}; 
};
mxG.R.prototype.lib=function(nat,x,y)
{
var k,km;
if (!this.inGoban(x,y)) return 0;
if (this.nat[this.ban[x][y]]=="E") return 1;
if (this.nat[this.ban[x][y]]!=nat) return 0;
km=this.s.length;
for (k=0;k<km;k++) if ((this.s[k].x==x)&&(this.s[k].y==y)) return 0;
this.s[km]={x:x,y:y};
if (this.lib(nat,x,y-1)||this.lib(nat,x+1,y)||this.lib(nat,x,y+1)||this.lib(nat,x-1,y)) return 1;
return 0;
};
mxG.R.prototype.capture=function(nat,x,y)
{
this.s=[];
if (this.lib(nat,x,y)) return 0;
var numOfPrisoner=this.s.length,pt;
while (this.s.length)
{
pt=this.s.pop();
this.o[this.ban[pt.x][pt.y]]=this.play;
this.ban[pt.x][pt.y]=0;
}
return numOfPrisoner;
};
mxG.R.prototype.place=function(nat,x,y)
{
this.play++;
var act=((nat.length>1)?"A":""),pNat=nat.substr(nat.length-1,1),oNat=((pNat=="B")?"W":((pNat=="W")?"B":"E")),prisoners,m=this.play;
this.act[m]=act;
this.nat[m]=pNat;
this.prisoners.B[m]=this.prisoners.B[m-1];
this.prisoners.W[m]=this.prisoners.W[m-1];
this.o[m]=0;
if (this.inGoban(x,y))
{
this.x[m]=x;
this.y[m]=y;
if (act!="A") 
{
this.ban[x][y]=m;
prisoners=this.capture(oNat,x-1,y);
prisoners+=this.capture(oNat,x+1,y);
prisoners+=this.capture(oNat,x,y-1);
prisoners+=this.capture(oNat,x,y+1);
if (!prisoners)
{
prisoners=this.capture(pNat,x,y); 
this.prisoners[oNat][m]+=prisoners;
}
else this.prisoners[pNat][m]+=prisoners;
}
else 
{
this.setup=m;
this.ban[x][y]=(pNat!="E"?m:0);
}
}
else
{
this.x[m]=0;
this.y[m]=0;
}
};
mxG.R.prototype.back=function(play)
{
this.init(this.DX,this.DY);
for (var k=1;k<=play;k++) this.place(this.act[k]+this.nat[k],this.x[k],this.y[k]);
};
mxG.R.prototype.isOccupied=function(x,y)
{
return this.nat[this.ban[x][y]]!="E";
};
mxG.R.prototype.isOnlyOne=function(k,nat)
{
var n=1,x=this.x[k],y=this.y[k];
if ((x>1)&&(this.nat[this.ban[x-1][y]]==nat)) n++;
if ((y>1)&&(this.nat[this.ban[x][y-1]]==nat)) n++;
if ((x<this.DX)&&(this.nat[this.ban[x+1][y]]==nat)) n++;
if ((y<this.DY)&&(this.nat[this.ban[x][y+1]]==nat)) n++;
return n==1;
};
mxG.R.prototype.hasOnlyOneLib=function(k)
{
var n=0,x=this.x[k],y=this.y[k];
if ((x>1)&&(this.nat[this.ban[x-1][y]]=="E")) n++;
if ((y>1)&&(this.nat[this.ban[x][y-1]]=="E")) n++;
if ((x<this.DX)&&(this.nat[this.ban[x+1][y]]=="E")) n++;
if ((y<this.DY)&&(this.nat[this.ban[x][y+1]]=="E")) n++;
return n==1;
};
mxG.R.prototype.captureOnlyOnePrisoner=function(k,nat)
{
return (this.prisoners[nat][k]-this.prisoners[nat][k-1])==1;
};
mxG.R.prototype.isKo=function(nat,x,y)
{
var m=this.play;
if (m<4) return 0;
var pNat=nat.substr(nat.length-1,1),oNat=((pNat=="B")?"W":((pNat=="W")?"B":"E")),
nNat=this.nat[m-1],mxNat=this.nat[m],
xpred=this.x[m],ypred=this.y[m];
return (((xpred==(x-1))&&(ypred==y))||((xpred==x)&&(ypred==(y-1)))||((xpred==(x+1))&&(ypred==y))||((xpred==x)&&(ypred==(y+1))))
&&this.isOnlyOne(m,oNat)
&&this.hasOnlyOneLib(m)
&&this.captureOnlyOnePrisoner(m,oNat)
&&(pNat==nNat)
&&(oNat==mxNat);
};
mxG.R.prototype.canCapture=function(nat,x,y)
{
this.s=[];
if (this.lib(nat,x,y)) return 0;
return this.s.length;
};
mxG.R.prototype.isLib=function(x,y)
{
return this.inGoban(x,y)&&(this.nat[this.ban[x][y]]=="E");
};
mxG.R.prototype.isSuicide=function(nat,x,y)
{
var m=this.play,pNat=nat.substr(nat.length-1,1),oNat=((pNat=="B")?"W":((pNat=="W")?"B":"E")),
s=1,exNat=this.nat[m+1],exBan=this.ban[x][y];
this.nat[m+1]=pNat;
this.ban[x][y]=m+1;
if (this.isLib(x-1,y)||this.isLib(x,y-1)||this.isLib(x+1,y)||this.isLib(x,y+1)
||this.canCapture(oNat,x-1,y)||this.canCapture(oNat,x,y-1)
||this.canCapture(oNat,x+1,y)||this.canCapture(oNat,x,y+1)
||!this.canCapture(pNat,x,y)) s=0;
this.ban[x][y]=exBan;
this.nat[m+1]=exNat;
return s;
};
mxG.R.prototype.isValid=function(nat,x,y)
{
return (!x&&!y)||!(this.inGoban(x,y)&&(this.isOccupied(x,y)||this.isKo(nat,x,y)||this.isSuicide(nat,x,y)));
};
mxG.R.prototype.getBanNum=function(x,y){return this.ban[x][y];};
mxG.R.prototype.getBanNat=function(x,y){return this.nat[this.ban[x][y]];};
mxG.R.prototype.getNat=function(n){return this.nat[n];};
mxG.R.prototype.getX=function(n){return this.x[n];};
mxG.R.prototype.getY=function(n){return this.y[n];};
mxG.R.prototype.getAct=function(n){return this.act[n];};
mxG.R.prototype.getPrisoners=function(nat){return this.prisoners[nat][this.play];};
mxG.R.prototype.getO=function(n){return this.o[n];};
}
if (!mxG.N){
mxG.N=function(n,p,v)
{
this.Kid=[];
this.P={}; 
this.Dad=n;
this.Focus=0; 
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
r=r.replace(/([^\\])((\\\\)*)\\((\n\r)|(\r\n)|\r|\n)/g,'$1$2');
r=r.replace(/^((\\\\)*)\\((\n\r)|(\r\n)|\r|\n)/g,'$1');
r=r.replace(/([^\\])((\\\\)*)\\/g,'$1$2');
r=r.replace(/^((\\\\)*)\\/g,'$1');
r=r.replace(/\\\\/g,'\\');
r=r.replace(/(\n\r)|(\r\n)|\r/g,"\n");
return r;
};
mxG.P.prototype.parseValue=function(p,K,c)
{
var v="",a;
K++; 
while ((K<this.l)&&((a=this.s.charAt(K))!=']'))
{
if (a=='\\') {v+=a;K++;a=this.s.charAt(K);}
if (K<this.l) v+=a;
K++;
}
v=this.clean(v);
if (p=="RE") {a=v.slice(0,1);if ((a=="V")||(a=="D")) v=a;}
if (this.nc) {this.nc=0;this.out("N",p,v);}
else if (!c) this.out("P",p,v);
else this.out("V",p,v);
K++; 
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
this.nv=0; 
this.nc=0; 
this.s=s;
this.l=this.s.length;
while (K<this.l) if (this.s.charAt(K)=='(') {K++;K=this.parseVariation(K);} else K++;
while (this.v.length) this.out("v-","","");
};
}
if (!mxG.G){
mxG.Z.fr["Require HTML5!"]="Requiert HTML5 !";
mxG.Z.fr["Loading..."]="Chargement...";
mxG.G=function(k)
{
this.k=k; 
this.n="d"+k; 
this.g="mxG.D["+k+"]"; 
this.b=[]; 
this.c=[]; 
this.gBox=""; 
this.initMethod="last"; 
this.refreshTime=1000;
this.so="(;FF[4]CA[UTF-8]GM[1]SZ[19])";
this.gor=new mxG.R(); 
this.rN=new mxG.N(null,null,null);
this.rN.sgf=""; 
this.sgf=""; 
this.j=document.scripts[document.scripts.length-1]; 
this.t=this.j; 
this.h=""; 
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
if (this.inLoop) this.inLoop=0; 
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
wgbp-=(this.fitDelta?this.fitDelta:0);
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
this.gos.getF(this.f,c);
return;
}
}
this.gos.fromF=s;
this.gos.afterGetF();
}
};
xhr.open("GET",xhr.f,c?false:true); 
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
this.l_=this.l.replace("-","_"); 
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
if (this.j==this.t) 
window.addEventListener("load",function(){mxG.D[k].start();},false);
else 
{
this.t.innerHTML=this.h;
this.start();
}
};
}
if (typeof mxG.G.prototype.createDiagram=='undefined'){
mxG.G.prototype.k2n=function(k){return (this.DY+1-k)+"";};
mxG.G.prototype.k2c=function(k){var r=((k-1)%25)+1;return String.fromCharCode(r+((r>8)?65:64))+((k>25)?(k-r)/25:"");};
mxG.G.prototype.getIndices=function(x,y)
{
if ((x==0)&&(y>0)&&(y<=this.DY)) return this.k2n(y);
if ((y==0)&&(x>0)&&(x<=this.DX)) return this.k2c(x);
if ((x==(this.DX+1))&&(y>0)&&(y<=this.DY)) return this.k2n(y);
if ((y==(this.DY+1))&&(x>0)&&(x<=this.DX)) return this.k2c(x);
return "";
};
mxG.G.prototype.setIndices=function()
{
var indicesOn=this.indicesOn;
if (this.configIndicesOn===undefined) this.indicesOn=((parseInt(this.getInfo("FG"))&1)?0:1);
if (this.indicesOn&&(this.xl==1)) this.xli=0;else this.xli=this.xl;
if (this.indicesOn&&(this.yt==1)) this.yti=0;else this.yti=this.yt;
if (this.indicesOn&&(this.xr==this.DX)) this.xri=this.DX+1;else this.xri=this.xr;
if (this.indicesOn&&(this.yb==this.DY)) this.ybi=this.DY+1;else this.ybi=this.yb;
if (indicesOn!=this.indicesOn) this.hasToDrawWholeGoban=1;
};
mxG.G.prototype.setNumbering=function()
{
if (this.configAsInBookOn===undefined) this.asInBookOn=((parseInt(this.getInfo("FG"))&256)?1:0);
if (this.configNumberingOn===undefined)
{
var aN=this.cN;
this.numberingOn=parseInt(this.getInfo("PM"));
if (this.numberingOn&&(aN!=this.rN))
{
var ka=0,kb=0,kc=0,de,bN=null,cN=null,fg;
while (aN!=this.rN)
{
if (!bN&&aN.P.MN) {kb=ka;bN=aN;}
if (!cN&&aN.P.FG) {kc=ka;cN=aN;}
if (aN.P.AB||aN.P.AW||aN.P.AE) break;
if (aN.P.B||aN.P.W) ka++;
aN=aN.Dad;
}
if (!cN) {cN=this.rN.KidOnFocus();kc=ka;}
de=((!cN.P.B&&!cN.P.W)?1:0);
fg=ka-kc+(bN?parseInt(bN.P.MN[0])-ka+kb-((bN==cN)?de:0):0);
this.numFrom=ka-kc;
if (!this.numFrom) {this.numFrom=1;fg++;}
if (this.numberingOn==2) fg=fg%100;
this.numWith=fg;
}
else
{
this.numFrom=1;
this.numWith=1;
}
}
};
mxG.G.prototype.addMarksAndLabels=function()
{
if (!this.marksAndLabelsOn) return;
var MX=["MA","TR","SQ","CR","LB","TB","TW"];
var k,aLen,s,x,y,x1,y1,x2,y2,z;
for (z=0;z<7;z++)
{
if (this.cN.P[MX[z]]) aLen=this.cN.P[MX[z]].length;else aLen=0;
for (k=0;k<aLen;k++)
{
s=this.cN.P[MX[z]][k];
if (MX[z]=="LB")
{
if (s.length>3)
{
x=s.c2n(0);
y=s.c2n(1);
this.vStr[this.xy(x,y)]="|"+s.substr(3)+"|";
}
}
else if (s.length==2)
{
x=s.c2n(0);
y=s.c2n(1);
this.vStr[this.xy(x,y)]="_"+MX[z]+"_";
}
else if (s.length==5)
{
x1=s.c2n(0);
y1=s.c2n(1);
x2=s.c2n(3);
y2=s.c2n(4);
for (x=x1;x<=x2;x++) for (y=y1;y<=y2;y++) this.vStr[this.xy(x,y)]="_"+MX[z]+"_";
}
}
}
};
mxG.G.prototype.isNumbered=function(aN)
{
if (!(aN.P["B"]||aN.P["W"])) return 0;
if (this.configNumberingOn!=undefined) return this.numberingOn;
var bN=((aN==this.rN)?aN.KidOnFocus():aN);
while(bN!=this.rN)
{
if (bN.P["PM"]) return parseInt(bN.P["PM"][0]);
bN=bN.Dad;
}
return 1;
};
mxG.G.prototype.getAsInTreeNum=function(xN)
{
var aN=xN,ka=0,kb=0,kc=0,de,bN=null,cN=null,fg;
while (aN!=this.rN)
{
if (!bN&&aN.P["MN"]) {bN=aN;kb=ka;}
if (!cN&&aN.P["FG"]) {cN=aN;kc=ka;}
if (aN.P["AB"]||aN.P["AW"]||aN.P["AE"]) break;
if (aN.P["B"]||aN.P["W"]) ka++;
if ((aN.Dad.P["B"]&&aN.P["B"])||(aN.Dad.P["W"]&&aN.P["W"])) ka++; 
aN=aN.Dad;
}
if (!cN) {cN=this.rN.KidOnFocus();kc=ka;}
de=((!cN.P.B&&!cN.P.W)?1:0);
fg=ka-kc+(bN?parseInt(bN.P.MN[0])-ka+kb-((bN==cN)?de:0):0);
if (this.isNumbered(xN)==2) fg=fg%100;
return fg+kc;
};
mxG.G.prototype.getVisibleMove=function(x,y)
{
var k,kmin,kmax;
if (this.asInBookOn&&this.numberingOn)
{
kmin=Math.min(this.gor.setup+this.numFrom,this.gor.play);
for (k=kmin;k>0;k--)
if ((!this.gor.getO(k)||(this.gor.getO(k)>=kmin))&&(this.gor.getX(k)==x)&&(this.gor.getY(k)==y)&&(this.gor.getNat(k)!="E")) return k;
kmax=this.gor.getBanNum(x,y);
if (!kmax) kmax=this.gor.play;
for (k=(kmin+1);k<=kmax;k++)
if ((this.gor.getX(k)==x)&&(this.gor.getY(k)==y)&&(this.gor.getNat(k)!="E")) return k;
return this.gor.getBanNum(x,y);
}
else return this.gor.getBanNum(x,y);
};
mxG.G.prototype.getVisibleNat=function(n)
{
return this.gor.getNat(n);
};
mxG.G.prototype.getTenuki=function(m,n)
{
var k,r=0;
for (k=m;k>n;k--) if (this.gor.getNat(k)==this.gor.getNat(k-1)) r++;
return r;
};
mxG.G.prototype.getCoreNum=function(m)
{
var s=this.gor.setup;
if (m>s)
{
var n=s+this.numFrom,r;
if (m>=n) {r=m-n+this.numWith+this.getTenuki(m,n);return (r<1)?"":r+"";}
}
return "";
};
mxG.G.prototype.getVisibleNum=function(m)
{
if (this.numberingOn) return this.getCoreNum(m);
return "";
};
mxG.G.prototype.addNatAndNum=function(x,y,z)
{
var m=this.getVisibleMove(x,y),n=this.getVisibleNum(m),k=this.xy(x,y);
this.vNat[k]=this.getVisibleNat(m);
this.vStr[k]=(this.markOnLastOn&&(z==k)&&!n)?(this.numAsMarkOnLastOn?this.getCoreNum(m):"_ML_"):n;
};
mxG.G.prototype.buildStone=function(nat,d,s)
{
var cn,cx,c;
cn=document.createElement("canvas");
cn.width=cn.height=d;
cx=cn.getContext("2d");
this.drawStone(cx,nat,d);
this.drawText(cx,0,0,d,s,{c:(nat=="B")?this.onBlackColor:this.onWhiteColor});
return '<img alt="'+nat+'" src="'+cn.toDataURL("image/png")+'">';
};
mxG.G.prototype.drawMark=function(cx,x,y,d)
{
var z=(d>>2);
cx.beginPath();
cx.moveTo(x+z,y+z);
cx.lineTo(x+d-z,y+d-z);
cx.moveTo(x+d-z,y+z);
cx.lineTo(x+z,y+d-z);
cx.stroke();
};
mxG.G.prototype.drawTriangle=function(cx,x,y,d)
{
var r=(d>>1),s=(r>>1),t=(s>>1),e=0.5;
cx.beginPath();
cx.moveTo(x+r+e,y+s+e);
cx.lineTo(x+d-s,y+d-s-t+e);
cx.lineTo(x+s,y+d-s-t+e);
cx.closePath();
cx.stroke();
};
mxG.G.prototype.drawCircle=function(cx,x,y,d)
{
var r=d/3;
cx.beginPath();
cx.arc(x+d/2,y+d/2,r,0,Math.PI*2,false);
cx.stroke();
};
mxG.G.prototype.drawSquare=function(cx,x,y,d)
{
var z=(d>>2),e=0.5;
cx.strokeRect(x+z+e,y+z+e,d-2*e-(z<<1),d-2*e-(z<<1));
};
mxG.G.prototype.preTerritory=function(x,y,nat,m)
{
if (this.marksAndLabelsOn&&(this.cN.P.TB||this.cN.P.TW))
{
if (this.asInBookOn&&(m!="_TB_")&&(m!="_TW_"))
{
if ((nat=="B")&&(this.gor.getBanNat(x,y)=="W")) m="_TW_";
else if ((nat=="W")&&(this.gor.getBanNat(x,y)=="B")) m="_TB_";
}
}
return m;
};
mxG.G.prototype.isLabel=function(m){return m.search(/^\|(.*)\|$/)>-1;};
mxG.G.prototype.removeLabelDelimiters=function(m){return m.replace(/^(\|)+(.*)(\|)+$/,"$2");};
mxG.G.prototype.createDiagram=function()
{
if (!this.hasC("Edit"))
{
this.configIndicesOn=this.indicesOn;
this.configAsInBookOn=this.asInBookOn;
this.configNumberingOn=this.numberingOn;
}
this.numFrom=1;
this.numWith=1;
};
}
if (typeof mxG.G.prototype.createGoban=='undefined'){
mxG.G.prototype.deplonkGoban=function()
{
this.getE("GobanDiv").style.visibility="visible";
};
mxG.G.prototype.plonk=function()
{
if (!this.silentFail)
{
this.getE("GobanDiv").style.visibility="hidden";
setTimeout(this.g+".deplonkGoban()",50);
}
};
mxG.G.prototype.getEmphasisColor=function(k)
{
if (k)
{
if (k&this.goodnessCode.Good) return this.goodColor?this.goodColor:0;
if (k&this.goodnessCode.Bad) return this.badColor?this.badColor:0;
if (k&this.goodnessCode.Even) return this.evenColor?this.evenColor:0;
if (k&this.goodnessCode.Warning) return this.warningColor?this.warningColor:0;
if (k&this.goodnessCode.Unclear) return this.unclearColor?this.unclearColor:0;
if (k&this.goodnessCode.OffPath) return this.offPathColor?this.offPathColor:0;
}
return this.neutralColor?this.neutralColor:0;
};
mxG.G.prototype.getC=function(ev)
{
var x,y,c=this.getE("GobanCanvas").getMClick(ev);
x=Math.max(Math.min(Math.floor((c.x-this.z)/this.d)+this.xli,this.xri),this.xli);
y=Math.max(Math.min(Math.floor((c.y-this.z)/(this.d+this.d2))+this.yti,this.ybi),this.yti);
return {x:x,y:y}
};
mxG.G.prototype.whichMove=function(x,y)
{
var cN=this.cN,aN,s,a,b,km;
if (!(this.styleMode&3))
{
km=cN.Kid.length;
for (k=0;k<km;k++)
{
aN=cN.Kid[k];
if (aN.P.B) s=aN.P.B[0];
else if (aN.P.W) s=aN.P.W[0];
else s="";
if (s)
{
a=s.c2n(0);
b=s.c2n(1);
if ((a==x)&&(b==y)) return aN;
}
}
}
return 0;
};
mxG.G.prototype.isNextMove=function(x,y)
{
var aN,s,a,b;
if (!(this.styleMode&3))
{
aN=this.cN.KidOnFocus();
if (aN)
{
if (aN.P.B) s=aN.P.B[0];
else if (aN.P.W) s=aN.P.W[0];
else s="";
if (s)
{
a=s.c2n(0);
b=s.c2n(1);
if ((a==x)&&(b==y)) return aN;
}
}
}
return 0;
};
mxG.G.prototype.star=function(x,y)
{
var DX=this.DX,DY=this.DY,A=4,B=((DX+1)>>1),C=DX+1-A,D=((DY+1)>>1),E=DY+1-A;
if ((DX&1)&&(DY&1))
{
if ((DX>17)&&(DY>17)) return ((x==A)||(x==B)||(x==C))&&((y==A)||(y==D)||(y==E));
if ((DX>11)&&(DY>11)) return (((x==A)||(x==C))&&((y==A)||(y==E)))||((x==B)&&(y==D));
return (x==B)&&(y==D);
}
if ((DX>11)&&(DY>11)) return ((x==A)||(x==C))&&((y==A)||(y==E));
return false;
};
mxG.G.prototype.inView=function(x,y)
{
return (x>=this.xl)&&(y>=this.yt)&&(x<=this.xr)&&(y<=this.yb);
};
mxG.G.prototype.isCross=function(x,y)
{
return (this.inView(x,y)&&(this.vNat[this.xy(x,y)]=="E")&&((this.vStr[this.xy(x,y)]=="")||(this.vStr[this.xy(x,y)]=="_TB_")||(this.vStr[this.xy(x,y)]=="_TW_")));
};
mxG.G.prototype.drawStar=function(cx,a,b,r)
{
if (r>1)
{
var q=(this.starRatio?this.starRatio:0.2);
cx.fillStyle=this.starColor?this.starColor:this.lineColor;
cx.beginPath();
cx.arc(a+r,b+r,this.starRadius?this.starRadius:Math.max(1.5,r*q+0.5),0,Math.PI*2,false);
cx.fill();
}
};
mxG.G.prototype.drawStone=function(cx,nat,d)
{
var r=d/2,c1,c2;
cx.beginPath();
cx.arc(r,r,r-0.6*this.lw,0,Math.PI*2,false);
if (this.in3dOn)
{
var zx=0.8,zy=0.5,x1,y1,rG;
x1=zx*r;
y1=zy*r;
rG=cx.createRadialGradient(x1,y1,0.2*r,x1,y1,2*r);
rG.addColorStop(0,(nat=="B")?"#999":"#fff");
rG.addColorStop(0.3,(nat=="B")?"#333":"#ccc");
rG.addColorStop(1,"#000");
cx.fillStyle=rG;
cx.fill();
if (nat=="B")
{
rG=cx.createRadialGradient((zx>1?0.8:1.2)*r,(zy>1?0.8:1.2)*r,1,(zx>1?0.8:1.2)*r,(zy>1?0.8:1.2)*r,0.9*r);
rG.addColorStop(0,"rgba(0,0,0,0.8)");
rG.addColorStop(0.5,"rgba(0,0,0,0.6)");
rG.addColorStop(1,"rgba(0,0,0,0.1)");
cx.fillStyle=rG;
cx.fill();
}
}
else
{
if (nat=="B")
{
c1=this.blackStoneColor;
c2=this.blackStoneBorderColor?this.blackStoneBorderColor:"#000";
}
else
{
c1=this.whiteStoneColor;
c2=this.whiteStoneBorderColor?this.whiteStoneBorderColor:"#000";
}
cx.fillStyle=c1;
cx.fill();
cx.strokeStyle=c2;
cx.lineWidth=this.lw;
cx.stroke();
}
};
mxG.G.prototype.getFs=function(cx,d,fw)
{
var fs=0; 
do {cx.font=fw+" "+(fs++)+"px Arial";} while ((fs<99)&&(3*cx.measureText("9").width<d));
return fs;
};
mxG.G.prototype.drawText=function(cx,x,y,d,s,op)
{
var r=d/2,sf,c=0,sc=0;
cx.save();
if (op&&op.c) c=op.c;
if (op&&op.sc) sc=op.sc;
if (c) cx.fillStyle=c;
if (sc) {cx.strokeStyle=sc;cx.lineWidth=3;}
else if (mxG.IsMacSafari&&(c=="#fff"))
{
sc=c;cx.strokeStyle=sc;cx.lineWidth=0.75;
}
if (op&&op.fw) fw=op.fw;
else fw="normal";
s+="";
cx.textBaseline="alphabetic"; 
cx.textAlign="center";
cx.font=fw+" "+this.getFs(cx,d,fw)+"px Arial";
sf=(s.length>3)?0.5:(s.length>2)?0.7:(s.length>1)?0.9:1;
cx.scale(sf,1);
if (sc) cx.strokeText(s,(x+r)/sf,y+0.72*d); 
cx.fillText(s,(x+r)/sf,y+0.72*d); 
cx.restore();
};
mxG.G.prototype.drawMarkOnLast=function(cx,x,y,d,c)
{
var dm=Math.floor(d/3);
cx.fillStyle=this.markOnLastColor?this.markOnLastColor:c;
cx.fillRect(x+dm,y+dm,d-2*dm,d-2*dm);
};
mxG.G.prototype.drawVariationEmphasis=function(cx,a,b,d,x,y,m)
{
var aN,c,fw,sc;
aN=this.whichMove(x,y);
c=this.getEmphasisColor(aN?aN.Good:0);
c=(c?c:this.lineColor);
if (this.variationAsMarkOn||!this.hasC("Diagram"))
{
cx.lineWidth=2;
cx.strokeStyle=c;
cx.beginPath();
cx.arc(a+d/2,b+d/2,d/5,0,Math.PI*2,false);
cx.stroke();
if (this.isNextMove(x,y))
{
cx.fillStyle=c;
cx.beginPath();
cx.arc(a+d/2,b+d/2,d/10,0,Math.PI*2,false);
cx.fill();
}
}
else
{
if (this.variationOnFocusFontWeight&&this.isNextMove(x,y)) fw=this.variationOnFocusFontWeight;
else if (this.variationFontWeight) fw=this.variationFontWeight;
else fw="normal";
if (this.variationOnFocusStrokeColor&&this.isNextMove(x,y)) sc=this.variationOnFocusStrokeColor;
else if (this.variationStrokeColor) sc=this.variationStrokeColor;
else sc=0;
m=this.removeLabelDelimiters(m);
this.drawText(cx,a,b,d,m,{c:c,fw:fw,sc:sc});
}
};
mxG.G.prototype.drawPointColor=function(x,y,nat,v,l,mtsc)
{
var c;
if (v&&this.variationOnFocusColor&&this.isNextMove(x,y)) c=this.variationOnFocusColor;
else if (v&&this.variationColor) c=this.variationColor;
else if ((l||mtsc)&&this.markAndLabelColor) c=this.markAndLabelColor;
else c=(nat=="B")?this.onBlackColor:(nat=="W")?this.onWhiteColor:((nat=="O")&&this.outsideColor)?this.outsideColor:this.lineColor;
return c;
};
mxG.G.prototype.drawPoint=function(cx,x,y,nat,m)
{
var d=this.d,r=d/2,z=this.z,d2=this.d2,d3=(d2&1?1:0),d4;
var a=(x-this.xli)*d+z,b=(y-this.yti)*(d+d2)+(d2>>1)+d3+z;
var dxl=0,dyt=0,dxr=0,dyb=0,v=0,l=0,mtsc=0,xo,yo,wo,ho,bk,c,fw,sbk,sbkw,sc;
var aN;
cx.lineWidth=this.lw;
if (this.hasC("Diagram")) m=this.preTerritory(x,y,nat,m);
if (x==this.xl) dxl=z;
if (y==this.yt) dyt=z;
if (x==this.xr) dxr=z;
if (y==this.yb) dyb=z;
if (x==0) a=a-z;
if (y==0) {b=b-z;dyb=dyb-d3;}
if (x==(this.DX+1)) a=a+z;
if (y==(this.DY+1)) {b=b+z+d3;dyb=dyb-d3;}
xo=a-dxl;
yo=b-(d2>>1)-d3-dyt;
wo=d+dxl+dxr;
ho=d+d2+d3+dyt+dyb;
cx.beginPath();
if ((nat=="O")&&this.outsideBk)
{
cx.fillStyle=this.outsideBk;
cx.fillRect(xo,yo,wo,ho);
}
else if (!this.hasToDrawWholeGoban) cx.clearRect(xo,yo,wo,ho);
if (this.gobanFocusVisible&&(this.xFocus==x)&&(this.yFocus==y)&&this.inView(x,y)&&!this.inSelect)
{
this.flw=(this.focusLineWidth?this.focusLineWidth:2*this.lw);
cx.lineWidth=this.flw;
cx.strokeStyle=this.focusColor;
cx.strokeRect(a+this.flw/2,b+this.flw/2,d-this.flw,d-this.flw);
cx.lineWidth=this.lw;
}
if (this.hasC("Variations")&&this.isVariation(m))
{
v=1;
m=this.removeVariationDelimiters(m);
if (!this.variationEmphasisOn)
{
if (this.variationOnFocusBk&&this.isNextMove(x,y)) bk=this.variationOnFocusBk;
else if (this.variationBk) bk=this.variationBk;
if (bk) {cx.fillStyle=bk;cx.fillRect(a+1,b+1,d-2,d-2);}
if (this.variationOnFocusStrokeBk&&this.isNextMove(x,y)) sbk=this.variationOnFocusStrokeBk;
else if (this.variationStrokeBk) sbk=this.variationStrokeBk;
if (sbk) {sbkw=this.lw/2;cx.strokeStyle=sbk;cx.strokeRect(a+1+sbkw,b+1+sbkw,d-2-2*sbkw,d-2-2*sbkw);}
}
}
if ((!v&&(((nat=="E")&&!m)||(m=="_TB_")||(m=="_TW_")))||(v&&this.variationEmphasisOn))
{
if (((m=="_TB_")||(m=="_TW_"))||!(v&&this.variationEmphasisOn&&!this.variationAsMarkOn))
{
cx.strokeStyle=this.lineColor;
if (this.borderLineWidth&&((x==1)||(x==this.DX))) cx.lineWidth=this.borderLineWidth;
cx.beginPath();
if ((d3==1)&&!this.isCross(x,y-1)) d4=1;else d4=0;
cx.moveTo(a+r,b+(y==1?r:-(d2>>1)-d3+d4));
if ((d3==1)&&!this.isCross(x,y+1)) d4=1;else d4=0;
cx.lineTo(a+r,b+(y==this.DY?r:d+(d2>>1)+d3-d4));
cx.stroke();
cx.lineWidth=this.lw;
if (this.borderLineWidth&&((y==1)||(y==this.DY))) cx.lineWidth=this.borderLineWidth;
cx.beginPath();
cx.moveTo(a+(x==1?r:0),b+r);
cx.lineTo(a+(x==this.DX?r:d),b+r);
cx.stroke();
cx.lineWidth=this.lw;
}
if ((m=="_TB_")||(m=="_TW_"))
{
if ((nat=="B")||(nat=="W"))
{
cx.globalAlpha=0.5;
cx.drawImage(this.img[nat],a,b,d,d);
cx.globalAlpha=1;
}
cx.drawImage(this.imgSmall[(m=="_TW_")?"W":"B"],a+d/4,b+d/4,1+d>>1,1+d>>1);
}
else if (v&&this.variationEmphasisOn) this.drawVariationEmphasis(cx,a,b,d,x,y,m);
else if (this.star(x,y)) this.drawStar(cx,a,b,r);
}
else
{
if (!v&&((nat=="B")||(nat=="W"))) cx.drawImage(this.img[nat],a,b,d,d);
if (m)
{
if (this.hasC("Diagram"))
{
if (this.isLabel(m)) {l=1;m=this.removeLabelDelimiters(m);}
else if ((m=="_MA_")||(m=="_TR_")||(m=="_SQ_")||(m=="_CR_")) mtsc=1;
}
c=this.drawPointColor(x,y,nat,v,l,mtsc);
if (mtsc)
{
cx.strokeStyle=c;
cx.lineWidth=this.markLineWidth?this.markLineWidth:this.lw;
switch(m)
{
case "_MA_":this.drawMark(cx,a,b,d);break;
case "_TR_":this.drawTriangle(cx,a,b,d);break;
case "_SQ_":this.drawSquare(cx,a,b,d);break;
case "_CR_":this.drawCircle(cx,a,b,d);break;
}
}
else
{
if (m=="_ML_") this.drawMarkOnLast(cx,a,b,d,c);
else
{
if (v&&this.variationOnFocusFontWeight&&this.isNextMove(x,y)) fw=this.variationOnFocusFontWeight;
else if (v&&this.variationFontWeight) fw=this.variationFontWeight;
else if (l&&this.labelFontWeight) fw=this.labelFontWeight;
else if ((nat=="O")&&this.outsideFontWeight) fw=this.outsideFontWeight;
else fw="normal";
if (v&&this.variationOnFocusStrokeColor&&this.isNextMove(x,y)) sc=this.variationOnFocusStrokeColor;
else if (v&&this.variationStrokeColor) sc=this.variationStrokeColor;
else sc=0;
this.drawText(cx,a,b,d,m,{c:c,fw:fw,sc:sc});
}
}
}
}
};
mxG.G.prototype.gobanCnWidth=function(){return (this.xri-this.xli+1)*this.d+2*this.z;};
mxG.G.prototype.gobanCnHeight=function(){return (this.ybi-this.yti+1)*(this.d+this.d2)+((this.d2)&1?1:0)+2*this.z;};
mxG.G.prototype.gobanWidth=function(){return this.maximizeGobanWidth?(Math.max(19,this.DX)+((this.configIndicesOn||this.indicesOn)?2:0))*this.d+2*this.z:this.gobanCnWidth();};
mxG.G.prototype.gobanHeight=function(){return this.maximizeGobanHeight?(Math.max(19,this.DY)+((this.configIndicesOn||this.indicesOn)?2:0))*(this.d+this.d2)+((this.d2)&1?1:0)+2*this.z:this.gobanCnHeight();};
mxG.G.prototype.gobanLeft=function(){return (this.gobanWidth()-this.gobanCnWidth())>>1;};
mxG.G.prototype.gobanTop=function(){return (this.gobanHeight()-this.gobanCnHeight())>>1;};
mxG.G.prototype.setGobanSize=function()
{
var g=this.getE("GobanDiv"),i=this.getE("InnerGobanDiv"),cn=this.gcn;
cn.width=this.gobanCnWidth();
cn.height=this.gobanCnHeight();
i.style.top=this.gobanTop()+"px";
i.style.left=this.gobanLeft()+"px";
i.style.width=this.gobanCnWidth()+"px";
i.style.height=this.gobanCnHeight()+"px";
g.style.width=(this.gobanWidth()+this.getDW(i))+"px";
g.style.height=this.gobanHeight()+this.getDH(i)+"px";
};
mxG.G.prototype.drawGoban=function()
{
if (!this.img.B.canDraw||!this.img.W.canDraw) {setTimeout(this.g+".drawGoban()",25);return;}
var i,j,k;
if (mxG.IsAndroid) this.hasToDrawWholeGoban=1;
if (this.d!=this.exD) this.hasToDrawWholeGoban=1;
if (this.hasToDrawWholeGoban) {this.dNat=[];this.dStr=[];this.setGobanSize();}
for (i=this.xl;i<=this.xr;i++)
for (j=this.yt;j<=this.yb;j++)
{
k=this.xy(i,j);
if ((this.dNat[k]!=this.vNat[k])||(this.dStr[k]!=this.vStr[k])||this.variationEmphasisOn)
{
this.dNat[k]=this.vNat[k];
this.dStr[k]=this.vStr[k];
this.drawPoint(this.gcx,i,j,this.vNat[k],this.vStr[k]);
}
}
if (this.hasC("Diagram")&&this.indicesOn&&this.hasToDrawWholeGoban)
for (i=this.xli;i<=this.xri;i++)
for (j=this.yti;j<=this.ybi;j++)
if (!this.inView(i,j)) this.drawPoint(this.gcx,i,j,"O",this.getIndices(i,j));
if (this.hasC("Edit")&&this.selection) this.selectView();
this.exD=this.d;
this.hasToDrawWholeGoban=0;
};
mxG.G.prototype.focusInView=function()
{
this.xFocus=Math.min(Math.max(this.xFocus,this.xl),this.xr);
this.yFocus=Math.min(Math.max(this.yFocus,this.yt),this.yb);
};
mxG.G.prototype.doFocusGoban=function(ev)
{
if (this.doNotFocusGobanJustAfter) return;
this.focusInView();
this.dNat[this.xy(this.xFocus,this.yFocus)]=0;
this.gobanFocusVisible=1;
this.drawGoban();
};
mxG.G.prototype.hideGobanFocus=function()
{
if (this.inView(this.xFocus,this.yFocus)) this.dNat[this.xy(this.xFocus,this.yFocus)]=0;
this.gobanFocusVisible=0;
this.drawGoban();
this.doNotFocusGobanJustAfter=0;
};
mxG.G.prototype.doBlur4FocusGoban=function(ev)
{
this.hideGobanFocus();
this.doNotFocusGobanJustAfter=0;
};
mxG.G.prototype.doMouseDown4FocusGoban=function(ev)
{
this.doNotFocusGobanJustAfter=1;
};
mxG.G.prototype.doContextMenu4FocusGoban=function(ev)
{
this.hideGobanFocus();
};
mxG.G.prototype.doKeydownGoban=function(ev)
{
var r=0;
switch(mxG.GetKCode(ev))
{
case 37:case 72:if (this.gobanFocusVisible) this.xFocus--;r=1;break;
case 39:case 74:if (this.gobanFocusVisible) this.xFocus++;r=1;break;
case 38:case 85:if (this.gobanFocusVisible) this.yFocus--;r=1;break;
case 40:case 78:if (this.gobanFocusVisible) this.yFocus++;r=1;break;
}
if (r)
{
this.focusInView();
if (this.hasC("Edit")&&(this.editTool=="Select"))
{
if (this.inSelect==2) this.selectGobanArea(this.xFocus,this.yFocus);
else this.gobanFocusVisible=1;
}
this.hasToDrawWholeGoban=1;
this.updateAll();
ev.preventDefault();
}
this.lastKeydownOnGoban=r;
};
mxG.G.prototype.initGoban=function()
{
var s,k=this.k,bki;
if (this.gobanFocus)
{
this.xFocus=0;
this.yFocus=0;
this.getE("InnerGobanDiv").addEventListener("keydown",function(ev){mxG.D[k].doKeydownGoban(ev);},false);
this.getE("InnerGobanDiv").addEventListener("focus",function(ev){mxG.D[k].doFocusGoban(ev);},false);
this.getE("InnerGobanDiv").addEventListener("blur",function(ev){mxG.D[k].doBlur4FocusGoban(ev);},false);
this.getE("InnerGobanDiv").addEventListener("mousedown",function(ev){mxG.D[k].doMouseDown4FocusGoban(ev);},false);
this.getE("InnerGobanDiv").addEventListener("contextmenu",function(ev){mxG.D[k].doContextMenu4FocusGoban(ev);},false);
}
if (this.gobanBk) mxG.AddCssRule("#"+this.n+"GobanCanvas {background:"+this.gobanBk+";}");
else this.gobanBk="";
this.gcn=this.getE("GobanCanvas");
this.gcx=this.gcn.getContext("2d");
if (!this.lineColor) this.lineColor=mxG.GetStyle(this.gcn,"color");
if (this.gobanFocus&&!this.focusColor) this.focusColor="#f00";
};
mxG.G.prototype.disableGoban=function()
{
var e=this.getE("InnerGobanDiv");
if (!e.hasAttribute("data-maxigos-disabled"))
{
e.setAttribute("data-maxigos-disabled","1");
e.setAttribute("tabindex","-1");
}
};
mxG.G.prototype.enableGoban=function()
{
var e=this.getE("InnerGobanDiv");
if (e.hasAttribute("data-maxigos-disabled"))
{
e.removeAttribute("data-maxigos-disabled");
e.setAttribute("tabindex","0");
}
};
mxG.G.prototype.isGobanDisabled=function()
{
return this.getE("InnerGobanDiv").hasAttribute("data-maxigos-disabled");
};
mxG.G.prototype.updateGoban=function()
{
var i,j,k,x,y,z=-1,m;
if (this.markOnLastOn)
{
m=this.gor.play;
if (this.gor.getAct(m)=="")
{
x=this.gor.getX(m);
y=this.gor.getY(m);
if (this.inView(x,y)) z=this.xy(x,y);
}
}
for (i=this.xl;i<=this.xr;i++)
for (j=this.yt;j<=this.yb;j++)
{
if (this.hasC("Diagram")) this.addNatAndNum(i,j,z);
else
{
k=this.xy(i,j);
this.vNat[k]=this.gor.getBanNat(i,j);
this.vStr[k]=(z==k)?"_ML_":"";
}
}
if (this.hasC("Diagram")) this.addMarksAndLabels();
if (this.hasC("Variations")) this.addVariationMarks();
this.drawGoban();
if (this.gobanFocus)
{
if (this.gBox) this.disableGoban();else this.enableGoban();
}
};
mxG.G.prototype.refreshGoban=function()
{
if (this.d!=this.exD) this.drawGoban();
if (this.gBox) this.resizeGBox(this.gBox);
};
mxG.G.prototype.createGoban=function()
{
var s;
if (!this.onBlackColor) this.onBlackColor="#fff";
if (!this.onWhiteColor) this.onWhiteColor="#000";
if (!this.blackStoneColor) this.blackStoneColor="#000";
if (!this.whiteStoneColor) this.whiteStoneColor="#fff";
this.goodnessCode={Good:1,Bad:2,Even:4,Warning:8,Unclear:16,OffPath:32};
this.gobanFocus=(this.hasC("Solve")
||this.hasC("Variations")
||this.hasC("Guess"))?1:0;
this.vNat=[];
this.dNat=[];
this.vStr=[];
this.dStr=[];
this.write("<div class=\"mxGobanDiv\" id=\""+this.n+"GobanDiv\">");
s="position:relative;outline:none;";
this.write("<div"+(this.gobanFocus?" tabindex=\"0\"":"")+" class=\"mxInnerGobanDiv\" id=\""+this.n+"InnerGobanDiv\" style=\""+s+"\">");
s="display:block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:none;";
this.write("<canvas width=\"0\" height=\"0\" style=\""+s+"\" id=\""+this.n+"GobanCanvas\">");
this.write("</canvas></div></div>");
};
}
if (typeof mxG.G.prototype.createVariations=='undefined'){
mxG.Z.fr["Variations: "]="Variations : ";
mxG.Z.fr["no variation"]="aucune";
mxG.G.prototype.setMode=function()
{
this.styleMode=parseInt(this.getInfo("ST"));
if (this.configVariationMarksOn===undefined) this.variationMarksOn=(this.styleMode&2)?0:1;
else
{
if (this.variationMarksOn) this.styleMode&=~2;
else this.styleMode|=2;
}
if (this.configSiblingsOn===undefined) this.siblingsOn=(this.styleMode&1)?1:0;
else
{
if (this.siblingsOn) this.styleMode|=1;
else this.styleMode&=~1;
}
if (this.hideSingleVariationMarkOn) this.styleMode|=4;
};
mxG.G.prototype.doClickVariationInBox=function(a)
{
var aN=this.styleMode&1?this.cN.Dad:this.cN;
if (this.styleMode&1) this.backNode(aN);
aN.Focus=a+1;
this.placeNode();
this.updateAll();
};
mxG.G.prototype.addVariationMarkInBox=function(a,m)
{
var i=document.createElement("input"),k=this.k;
if (this.hasC("Diagram")&&this.isLabel(m)) m=this.removeLabelDelimiters(m);
i.type="button";
i.value=m;
i.addEventListener("click",function(ev){mxG.D[k].doClickVariationInBox(a);},false);
this.getE("VariationsDiv").appendChild(i);
};
mxG.G.prototype.buildVariationMark=function(l)
{
if (this.variationMarkSeed) return String.fromCharCode(this.variationMarkSeed.charCodeAt(0)-1+l);
else return l+"";
};
mxG.G.prototype.addVariationMarks=function()
{
var aN,s,k,km,l=0,x,y,z,m,e=this.getE("VariationsDiv");
var s1="<span class=\"mxVariationsSpan\">"+this.local("Variations: ")+"</span>";
var s2="<span class=\"mxNoVariationSpan\">"+this.local("no variation")+"</span>";
if (this.variationsBoxOn) e.innerHTML=s1;
if (this.styleMode&1)
{
if (!this.cN||!this.cN.Dad) 
{
if (this.variationsBoxOn) e.innerHTML=s1+s2;
return;
}
aN=this.cN.Dad;
}
else
{
if (!this.cN||!this.cN.KidOnFocus())
{
if (this.variationsBoxOn) e.innerHTML=s1+s2;
return;
}
aN=this.cN;
}
km=aN.Kid.length;
if ((this.styleMode&4)&&(km==1))
{
if (this.variationsBoxOn) e.innerHTML=s1;
return;
}
for (k=0;k<km;k++)
if (aN.Kid[k]!=this.cN)
{
s="";
l++;
if (aN.Kid[k].P.B) s=aN.Kid[k].P.B[0];
else if (aN.Kid[k].P.W) s=aN.Kid[k].P.W[0];
if (s.length==2)
{
x=s.c2n(0);
y=s.c2n(1);
z=this.xy(x,y);
if (this.inView(x,y)) m=this.vStr[z];else m=this.buildVariationMark(l);
if ((m+"").search(/^\((.*)\)$/)==-1)
{
if (!m) m=this.buildVariationMark(l);
if (!(this.styleMode&2)&&(!(this.styleMode&1)||(aN.Kid[k]!=this.cN))) this.vStr[z]="("+m+")";
}
if ((m+"").search(/^_.*_$/)==0) m=this.buildVariationMark(l);
}
else m=this.buildVariationMark(l);
if (this.variationsBoxOn&&(aN.Kid[k]!=this.cN)) this.addVariationMarkInBox(k,m);
}
};
mxG.G.prototype.isVariation=function(m)
{
return m.search(/^\((.*)\)$/)>-1;
};
mxG.G.prototype.removeVariationDelimiters=function(m)
{
return m.replace(/^(\()+(.*)(\))+$/,"$2");
};
mxG.G.prototype.getVariationNextNat=function()
{
var aN,k,km;
aN=this.cN;
if (aN.P.PL) return aN.P.PL[0];
aN=this.cN.KidOnFocus();
if (aN)
{
if (aN.P.B) return "B";
if (aN.P.W) return "W";
}
aN=this.cN;
if (aN.P.B) return "W";
if (aN.P.W) return "B";
if (aN.P.AB&&!aN.P.AW) return "W";
else if (aN.P.AW&&!aN.P.AB) return "B";
km=this.cN.Kid.length;
for (k=0;k<km;k++)
{
aN=this.cN.Kid[k];
if (aN.P.B) return "B";
if (aN.P.W) return "W";
}
km=this.cN.Dad.Kid.length;
for (k=0;k<km;k++)
{
aN=this.cN.Dad.Kid[k];
if (aN.P.B) return "W";
if (aN.P.W) return "B";
}
return "B";
};
mxG.G.prototype.addVariationPlay=function(aP,x,y)
{
var aN,aV=this.xy2s(x,y);
aN=this.cN.N(aP,aV);
aN.Add=1;
this.cN.Focus=this.cN.Kid.length;
};
mxG.G.prototype.checkBW=function(aN,a,b)
{
var s="",x,y;
if (aN.P.B||aN.P.W)
{
if (aN.P.B) s=aN.P.B[0];else s=aN.P.W[0];
if (s.length==2) {x=s.c2n(0);y=s.c2n(1);}
else {x=0;y=0;}
return (x==a)&&(y==b);
}
return 0;
};
mxG.G.prototype.checkAX=function(aN,a,b)
{
var AX=["AB","AW","AE"];
var s,x,y,aP,z,k,aLen,x1,x2,y1,y2;
s="";
if (aN.P.AB) aP="AB";
else if (aN.P.AW) aP="AW";
else if (aN.P.AE) aP="AE";
else aP=0;
if (aP) for (z=0;z<3;z++)
{
aP=AX[z];
if (aN.P[aP])
{
aLen=aN.P[aP].length;
for (k=0;k<aLen;k++)
{
s=aN.P[aP][k];
if (s.length==2)
{
x=s.c2n(0);
y=s.c2n(1);
if ((x==a)&&(y==b)) return 1;
}
else if (s.length==5)
{
x1=s.c2n(0);
y1=s.c2n(1);
x2=s.c2n(3);
y2=s.c2n(4);
for (x=x1;x<=x2;x++) for (y=y1;y<=y2;y++) if ((x==a)&&(y==b)) return 1;
}
}
}
}
return 0;
};
mxG.G.prototype.checkVariation=function(a,b)
{
var aN,bN,k,km,ok=0;
if ((this.styleMode&1)&&(this.cN.Dad==this.rN)) {this.plonk();return;}
if (a&&b&&this.gor.isOccupied(a,b))
{
aN=this.cN.Dad;
while (!ok&&(aN!=this.rN))
{
if (this.checkBW(aN,a,b)||this.checkAX(aN,a,b)) ok=1;
else aN=aN.Dad;
}
if (ok)
{
this.backNode(aN);
this.updateAll();
}
return;
}
aN=this.styleMode&1?this.cN.Dad:this.cN;
km=aN.Kid.length;
for (k=0;k<km;k++)
{
bN=aN.Kid[k];
if (this.checkBW(bN,a,b))
{
if (this.styleMode&1) this.backNode(aN);
aN.Focus=k+1;
this.placeNode();
this.updateAll();
return;
}
}
if (this.styleMode&1) {this.plonk();return;}
this.addVariationPlay(this.getVariationNextNat(),a,b);
this.placeNode();
if (this.hasC("Tree")) this.addNodeInTree(this.cN);
this.updateAll();
};
mxG.G.prototype.doClickVariations=function(ev)
{
if (this.isGobanDisabled()) return;
if (this.canPlaceVariation)
{
var c=this.getC(ev);
if (!this.inView(c.x,c.y)) {this.plonk();return;}
this.checkVariation(c.x,c.y);
}
};
mxG.G.prototype.doKeydownGobanForVariations=function(ev)
{
var c;
if (this.isGobanDisabled()) return;
if (this.canPlaceVariation)
{
c=mxG.GetKCode(ev);
if ((c==13)||(c==32))
{
this.checkVariation(this.xFocus,this.yFocus);
ev.preventDefault();
}
}
};
mxG.G.prototype.initVariations=function()
{
var el=this.getE("GobanCanvas"),k=this.k;
el.getMClick=mxG.GetMClick;
el.addEventListener("click",function(ev){mxG.D[k].doClickVariations(ev);},false);
if (this.gobanFocus) this.getE("GobanDiv").addEventListener("keydown",function(ev){mxG.D[k].doKeydownGobanForVariations(ev);},false);
};
mxG.G.prototype.refreshVariations=function()
{
if (this.variationsBoxOn&&this.adjustVariationsWidth) this.adjust("Variations","Width");
};
mxG.G.prototype.createVariations=function()
{
if (!this.hasC("Edit"))
{
this.configVariationMarksOn=this.variationMarksOn;
this.configSiblingsOn=this.siblingsOn;
}
if (this.variationsBoxOn) this.write("<div class=\"mxVariationsDiv\" id=\""+this.n+"VariationsDiv\"></div>");
};
}
if (typeof mxG.G.prototype.createPass=='undefined'){
mxG.Z.fr["Pass"]="Passe";
mxG.G.prototype.doPass=function()
{
if (this.hasC("Edit")) this.checkEdit(0,0);
else if (this.hasC("Variations")&&this.canPlaceVariation) this.checkVariation(0,0);
else if (this.hasC("Guess")) this.checkGuess(0,0);
};
mxG.G.prototype.isPass=function(aN)
{
var s,x,y;
if (aN.P["B"]||aN.P["W"])
{
s=(aN.P["B"]?aN.P["B"][0]:aN.P["W"][0]);
if (s.length==2)
{
x=s.c2n(0);
y=s.c2n(1);
if ((x<1)||(y<1)||(x>this.dimX)||(y>this.dimY)) {x=0;y=0;}
}
else {x=0;y=0;}
return !(x||y);
}
return 0;
};
mxG.G.prototype.updatePass=function()
{
var aN=0,k,km,status,look=0,e=this.getE("PassBtn"),s;
status=this.isPass(this.cN)?1:0;
if (!(this.styleMode&2))
{
if (this.styleMode&1) aN=this.cN.Dad;
else aN=this.cN;
}
if (aN)
{
km=aN.Kid.length;
if (km)
{
if (this.styleMode&1) {if (km>1) look=1;}
else look=1;
}
}
if (look) for (k=0;k<km;k++) if (this.isPass(aN.Kid[k])) status=status|2;
aN=this.cN.KidOnFocus();
if (aN&&this.isPass(aN)) status=status|4;
if (this.canPassOnlyIfPassInSgf)
{
if (status&2) this.enableBtn("Pass");
else this.disableBtn("Pass");
}
s="mxBtn mxPassBtn";
if (status&1) s+=" mxJustPlayedPassBtn";
if (status&2) s+=" mxOnVariationPassBtn";
if (status&4) s+=" mxOnFocusPassBtn";
e.className=s;
if (this.gBox) this.disableBtn("Pass");else this.enableBtn("Pass");
};
mxG.G.prototype.createPass=function()
{
this.write("<div class=\"mxPassDiv\" id=\""+this.n+"PassDiv\">");
this.addBtn({n:"Pass",v:this.label("Pass","passLabel")});
this.write("</div>");
};
}
if (typeof mxG.G.prototype.createNavigation=='undefined'){
mxG.G.prototype.setNFocus=function(b)
{
if (this.getE(b+"Btn").disabled) this.getE("NavigationDiv").focus();
};
mxG.G.prototype.doFirst=function()
{
this.backNode(this.rN.KidOnFocus());
this.updateAll();
this.setNFocus("First");
};
mxG.G.prototype.doTenPred=function()
{
var k,aN=this.cN;
for (k=0;k<10;k++)
{
if (aN.Dad!=this.rN) aN=aN.Dad;else break;
if (this.hasC("Variations")&&!(this.styleMode&2))
{
if (this.styleMode&1) {if (aN.Dad.Kid.length>1) break;}
else if (aN.Kid.length>1) break;
}
}
this.backNode((aN==this.rN)?aN.KidOnFocus():aN);
this.updateAll();
this.setNFocus("TenPred");
};
mxG.G.prototype.doPred=function()
{
var aN=this.cN.Dad;
this.backNode((aN==this.rN)?aN.KidOnFocus():aN);
this.updateAll();
this.setNFocus("Pred");
};
mxG.G.prototype.doNext=function()
{
this.placeNode();
this.updateAll();
this.setNFocus("Next");
};
mxG.G.prototype.doTenNext=function()
{
for (var k=0;k<10;k++)
{
if (this.cN.KidOnFocus()) this.placeNode();else break;
if (this.hasC("Variations")&&!(this.styleMode&2))
{
if (this.styleMode&1) {if (this.cN.Dad.Kid.length>1) break;}
else if (this.cN.Kid.length>1) break;
}
}
this.updateAll();
this.setNFocus("TenNext");
};
mxG.G.prototype.doLast=function()
{
while (this.cN.KidOnFocus()) this.placeNode();
this.updateAll();
this.setNFocus("Last");
};
mxG.G.prototype.doTopVariation=function()
{
var aN,k,km;
if (this.styleMode&1) aN=this.cN.Dad;else aN=this.cN;
k=aN.Focus;
km=aN.Kid.length;
if (km>1)
{
aN.Focus=(k>1)?k-1:km;
if (this.styleMode&1) this.backNode(aN.KidOnFocus());
this.hasToDrawWholeGoban=1;
this.updateAll();
}
};
mxG.G.prototype.doBottomVariation=function()
{
var aN,bN,k,km;
if (this.styleMode&1) aN=this.cN.Dad;else aN=this.cN;
k=aN.Focus;
km=aN.Kid.length;
if (km>1)
{
aN.Focus=(k<km)?k+1:1;
if (this.styleMode&1) this.backNode(aN.KidOnFocus());
this.hasToDrawWholeGoban=1;
this.updateAll();
}
};
mxG.G.prototype.doKeydownNavigation=function(ev)
{
var r=0;
switch(mxG.GetKCode(ev))
{
case 36:case 70:this.doFirst();r=1;break;
case 33:case 71:this.doTenPred();r=1;break;
case 37:case 72:this.doPred();r=1;break;
case 39:case 74:this.doNext();r=1;break;
case 34:case 75:this.doTenNext();r=1;break;
case 35:case 76:this.doLast();r=1;break;
case 38:case 85:this.doTopVariation();r=1;break;
case 40:case 78:this.doBottomVariation();r=1;break;
}
if (r) ev.preventDefault();
};
mxG.G.prototype.doWheelNavigation=function(ev)
{
if (!this.gBox)
{
if (ev.deltaY>0) {this.doNext();}
else if (ev.deltaY<0) {this.doPred();}
ev.preventDefault();
}
};
mxG.G.prototype.initNavigation=function()
{
var k=this.k;
this.getE("NavigationDiv").addEventListener("keydown",function(ev){mxG.D[k].doKeydownNavigation(ev);},false);
this.getE("GobanDiv").addEventListener("wheel",function(ev){mxG.D[k].doWheelNavigation(ev);},false);
};
mxG.G.prototype.updateNavigation=function()
{
if (this.gBox)
{
this.disableBtn("First");
this.disableBtn("Pred");
this.disableBtn("TenPred");
this.disableBtn("Next");
this.disableBtn("TenNext");
this.disableBtn("Last");
}
else
{
if (this.cN.Kid.length)
{
this.enableBtn("Next");
this.enableBtn("TenNext");
this.enableBtn("Last");
}
else
{
this.disableBtn("Next");
this.disableBtn("TenNext");
this.disableBtn("Last");
}
if (this.cN.Dad==this.rN)
{
this.disableBtn("First");
this.disableBtn("Pred");
this.disableBtn("TenPred");
}
else
{
this.enableBtn("First");
this.enableBtn("Pred");
this.enableBtn("TenPred");
}
}
};
mxG.G.prototype.getNavElementFullWidth=function(e)
{
var r=0;
r+=mxG.GetPxStyle(e,"marginLeft");
r+=mxG.GetPxStyle(e,"marginRight");
r+=mxG.GetPxStyle(e,"paddingLeft");
r+=mxG.GetPxStyle(e,"paddingRight");
r+=mxG.GetPxStyle(e,"borderLeftWidth");
r+=mxG.GetPxStyle(e,"borderRightWidth");
r+=mxG.GetPxStyle(e,"width");
return r;
};
mxG.G.prototype.refreshNavigation=function()
{
var e,g,gti,w,fs,b,wb,n,k;
if (this.adjustNavigationWidth) this.adjust("Navigation","Width");
if (this.fitParent&2)
{
e=this.getE("NavigationDiv");
gti=this.getE("GotoInput");
b=this.getE("FirstBtn");
w=mxG.GetPxStyle(e,"width");
wb=this.getNavElementFullWidth(b);
n=e.getElementsByTagName("button").length;
if ((w!=this.lastNavW4B)||(wb!=this.lastNavBtnFullWidth))
{
fs=24;
while ((this.getNavElementFullWidth(b)*n+(gti?this.getNavElementFullWidth(gti):0))<w)
{
if (fs>63) break;
fs++;
e.style.fontSize=fs+"px";
}
while ((this.getNavElementFullWidth(b)*n+(gti?this.getNavElementFullWidth(gti):0))>w)
{
if (fs<3) break;
fs--;
e.style.fontSize=fs+"px";
}
this.lastNavW4B=w;
this.lastNavBtnFullWidth=this.getNavElementFullWidth(b);
}
}
};
mxG.G.prototype.createNavigation=function()
{
if (this.navigationBtnColor)
{
mxG.AddCssRule("#"+this.n+"NavigationDiv button {color:"+this.navigationBtnColor+";}");
mxG.AddCssRule("#"+this.n+"NavigationDiv button div:before {border-color:transparent "+this.navigationBtnColor+";}");
mxG.AddCssRule("#"+this.n+"NavigationDiv button div:after {border-color:transparent "+this.navigationBtnColor+";}");
}
if (this.navigationBtnFs)
{
mxG.AddCssRule("#"+this.n+"NavigationDiv button {font-size:"+this.navigationBtnFs+";}");
}
this.bNav=["First","TenPred","Pred","Next","TenNext","Last"];
this.vNav=["|&lt;","&lt;&lt;","&lt;","&gt;","&gt;&gt;","&gt;|"];
this.write("<div tabindex=\"-1\" style=\"outline:none;\" class=\"mxNavigationDiv\" id=\""+this.n+"NavigationDiv\">");
for (var b=0;b<6;b++) this.addBtn({n:this.bNav[b],v:this.vNav[b]});
this.write("</div>");
};
}
if (typeof mxG.G.prototype.createLoop=='undefined'){
mxG.G.prototype.resetLoop=function()
{
if (this.loopTimeout&&!this.inStepLoop) {clearTimeout(this.loopTimeout);this.loopTimeout=0;}
};
mxG.G.prototype.getLoopTime=function()
{
if (this.initialLoopTime&&(this.cN.Dad==this.rN)) return Math.round(this.initialLoopTime*this.loopTime/1000);
if (this.finalLoopTime&&(this.cN.Focus==0)) return Math.round(this.finalLoopTime*this.loopTime/1000);
if (this.hasC("Comment")||this.hasC("Lesson"))
{
var s=(this.cN.P.C?this.cN.P.C[0]:"").replace(/\n/g,"<br>");
return Math.floor(s.length*this.loopTime/10+this.loopTime);
}
return this.loopTime;
};
mxG.G.prototype.stepLoop=function()
{
this.inStepLoop=1;
if (mxG.IsMacSafari) this.gcn.offsetHeight;
if (this.cN.KidOnFocus()) {this.cN.Focus=1;this.placeNode();}
else if (this.mainVariationOnlyLoop) {this.rN.Focus=1;this.backNode(this.rN.KidOnFocus());}
else if (this.cN.Dad)
{
var aN=this.cN.Dad,bN;
while ((aN!=this.rN)&&(aN.Focus==aN.Kid.length)) aN=aN.Dad;
if (aN.Focus<aN.Kid.length) aN.Focus++;
else aN.Focus=1; 
bN=aN=aN.KidOnFocus();
while (bN.Kid.length) {bN.Focus=1;bN=bN.Kid[0];}
this.backNode(aN);
}
this.updateAll();
this.loopTimeout=setTimeout(this.g+".stepLoop()",this.getLoopTime());
this.inStepLoop=0;
};
mxG.G.prototype.doLoop=function()
{
this.inLoop=this.inLoop?0:1;
this.updateAll();
};
mxG.G.prototype.initLoop=function()
{
var e=this.getE("NavigationDiv"),i,k;
this.inLoop=(this.initMethod=="loop")?1:0;
if (e&&this.loopBtnOn)
{
k=this.k;
i=document.createElement("button");
i.type="button";
i.id=this.n+"LoopBtn";
i.className="mxBtn "+(this.inLoop?"mxPauseBtn":"mxLoopBtn");
i.addEventListener("click",function(ev){mxG.D[k].doLoop();},false);
i.innerHTML="<div><span>&lt;&gt;</div></span>";
if (this["loopTip_"+this.l_]) i.title=this["loopTip_"+this.l_];
switch(this.loopBtnPosition)
{
case "left":e.insertBefore(i,this.getE("FirstBtn"));break;
case "center":e.insertBefore(i,this.getE("NextBtn"));break;
default:e.appendChild(i); 
}
}
};
mxG.G.prototype.updateLoop=function()
{
var b;
if (this.inLoop)
{
if (!this.loopTimeout)
this.loopTimeout=setTimeout(this.g+".stepLoop()",this.getLoopTime());
}
else this.resetLoop();
if (this.getE("NavigationDiv")&&this.loopBtnOn)
{
b=this.getE("LoopBtn");
b.className="mxBtn "+(this.inLoop?"mxPauseBtn":"mxLoopBtn");
if (this.gBox) this.disableBtn("Loop");
else
{
if (this.cN.Kid.length||(this.cN.Dad!=this.rN)) this.enableBtn("Loop");
else this.disableBtn("Loop");
}
}
};
mxG.G.prototype.createLoop=function()
{
if (this.loopTime===undefined) this.loopTime=1000;
};
}
if (typeof mxG.G.prototype.createTitle=='undefined'){
mxG.Z.fr[", "]=", ";
if (!mxG.Z.fr["translateTitle"]) mxG.Z.fr["translateTitle"]=function(ev,ro)
{
var s=ev+"",a=ro+"",c="",of="",t="",between="";
if (a!="")
{
if (a.search(/^([0-9]+)$/)==0) t="ronde";
else if (a.search(/[ ]*\((final|semi-final|quarter-final|playoff|game|round)\)/i)>=0)
{
if (s.search(/[ ]+(cup|league)/i)>=0) of=" de la ";else if (s) of=" du ";
if (a.search(/[ ]*\(final\)/i)>=0) {c="Finale"+of;t="partie";}
else if (a.search(/[ ]*\(semi-final\)/i)>=0) {c="Demi-finale"+of;t="partie";}
else if (a.search(/[ ]*\(quarter-final\)/i)>=0) {c="Quart de finale"+of;t="partie";}
else if (a.search(/[ ]*\(playoff\)/i)>=0) {c="Playoff"+of;t="partie";}
else if (a.search(/[ ]*\(game\)/i)>=0) t="partie";
else t="tour";
a=a.replace(/[ ]*\((final|semi-final|quarter-final|playoff|game|round)\)/i,"");
}
else if (a.search(/[ ]*\(final tournament\)/i)>=0)
{
if (s.search(/[ ]+(cup|league)/i)>=0) of=" de la ";else if (s) of=" du ";
c="Tournoi final"+of;t="ronde";
a=a.replace(/[ ]*\(final tournament\)/i,"");
}
if (a.search(/^([0-9]+)/)==0) a=a.replace(/^([0-9]+)(.*)/,t+(t?" ":"")+"$1$2");
}
if (s.search(/^([0-9]+)(st|nd|rd|th)/i)>=0)
{
s=s.replace(/^([0-9]+)(st|nd|rd|th)[ ]+Female[ ]+(.*)$/i,"$1$2 $3 féminin");
s=s.replace(/^([0-9]+)(st|nd|rd|th)[ ]+(Former|Old)[ ]+(.*)$/i,"$1$2 ancien $4");
s=s.replace(/^([0-9]+)(st|nd|rd|th)/i,"$1<span class=\"sup\">e</span>");
s=s.replace(/^1<span class=\"sup\">ème<\/span>/,(s.search(/[ ]+(cup|league)/i)>=0)?"1<span class=\"sup\">re</span>":"1<span class=\"sup\">er</span>");
}
s=c+s;
if (s&&(a.search(/^[a-zA-Z0-9]/)==0)) s+=", ";else if (s&&a) s+=" ";
if (s) s=s.ucFirst(); else if (a) a=a.ucFirst();
if (s) s="<span class=\"mxEVTitleSpan\">"+s+"</span>";
if (a) a="<span class=\"mxROTitleSpan\">"+a+"</span>";
return s+a;
};
if (!mxG.Z.en["translateTitle"]) mxG.Z.en["translateTitle"]=function(ev,ro)
{
var s=ev+"",a=ro+"",c="",t="",before="",between="";
if (a!="")
{
if (a.search(/^([0-9]+)$/)==0) t="round";
if (a.search(/[ ]*\((final|semi-final|quarter-final|playoff|game|round)\)/i)>=0)
{
if (s) before=", ";
if (a.search(/[ ]*\(final\)/i)>=0) {c=before+"final";t="game";}
else if (a.search(/[ ]*\(semi-final\)/i)>=0) {c=before+"semi-final";t="game";}
else if (a.search(/[ ]*\(quarter-final\)/i)>=0) {c=before+"quarter-final";t="game";}
else if (a.search(/[ ]*\(playoff\)/i)>=0) {c=before+"playoff";t="game";}
else if (a.search(/[ ]*\(game\)/i)>=0) t="game";
else t="round";
a=a.replace(/[ ]*\((final|semi-final|quarter-final|playoff|game|round)\)/i,"");
}
else if (a.search(/[ ]*\(final tournament\)/i)>=0)
{
if (s) before=", ";
c=before+"final tournament";t="round";
a=a.replace(/[ ]*\(final tournament\)/i,"");
}
if (a.search(/^([0-9]+)/)==0) a=a.replace(/^([0-9]+)(.*)/,t+(t?" ":"")+"$1$2");
}
s=s+c;
if (s&&(a.search(/^\(/)==0)) between=" ";else if (s&&a) between=", ";
s=s+between+a;
return s.ucFirst();
};
mxG.G.prototype.buildTitle=function()
{
var ev,ro,f;
ev=this.getInfoS("EV");
ro=this.getInfoS("RO");
if (this.translateTitleOn) f="translateTitle";else f="buildTitle";
if (mxG.Z[this.l]&&mxG.Z[this.l][f]) return mxG.Z[this.l][f](ev,ro);
return ev+((ev&&ro)?this.local(", "):"")+ro;
};
mxG.G.prototype.initTitle=function()
{
if (this.titleBoxOn)
{
var t=this.buildTitle();
this.title=t;
this.getE("TitleH1").innerHTML=t;
if (this.hideEmptyTitle) this.getE("TitleH1").style.visibility=(t?"visible":"hidden");
}
};
mxG.G.prototype.updateTitle=function()
{
if (this.titleBoxOn)
{
var t=this.buildTitle();
if (this.title!=t)
{
this.getE("TitleH1").innerHTML=t;
this.title=t;
if (this.hideEmptyTitle) this.getE("TitleH1").style.visibility=(t?"visible":"hidden");
}
}
};
mxG.G.prototype.createTitle=function()
{
if (this.titleBoxOn) this.write("<h1 class=\"mxTitleH1\" id=\""+this.n+"TitleH1\"></h1>");
};
}
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
mxG.Z.fr[" Close "]="Fermer"; 
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
if (typeof mxG.G.prototype.createOption=='undefined'){
mxG.Z.fr["Options"]="Options";
mxG.Z.fr["Cancel"]="Annuler";
mxG.Z.fr["OK"]="OK";
mxG.Z.fr["Mark on last"]="Affichage d'une marque sur le dernier coup";
mxG.Z.fr["Indices"]="Affichage des coordonnées";
mxG.Z.fr["As in book"]="Comme dans les livres";
mxG.Z.fr["Numbering"]="Numérotation";
mxG.Z.fr["Marks and labels"]="Marques et étiquettes";
mxG.Z.fr["Variation marks"]="Indication des variations";
mxG.Z.fr["Show variations of current move instead of next move"]="Affichage des alternatives au coup courant au lieu des variations du coup suivant";
mxG.Z.fr["In 3d"]="Affichage en 3d";
mxG.Z.fr["When clicking on the goban"]="Un click sur le goban :";
mxG.Z.fr["place a variation"]="place une variation";
mxG.Z.fr["try to guess the next move"]="essaie de deviner le coup suivant";
mxG.Z.fr["from"]="à partir de";
mxG.Z.fr["with"]="avec";
mxG.Z.fr["Loop time:"]="Temps pour l'affichage en boucle :";
mxG.Z.fr["Animated stone"]="Pierres animées";
mxG.Z.fr["Animated stone time:"]="Temps pour l'animation des pierres :";
mxG.G.prototype.getValidNum=function(v)
{
var n=parseInt(v);
if (isNaN(n)) return 1;
return n;
};
mxG.G.prototype.doChangeMarkOnLast=function()
{
var e=this.getE("MarkOnLastOnCheckbox");
this.markOnLastOn=e.checked?1:0;
this.updateAll();
};
mxG.G.prototype.doChangeNumbering=function()
{
var e=this.getE("NumberingOnCheckbox"),nf,nw;
nf=this.getE("NumFromTextInput");
nw=this.getE("NumWithTextInput");
if (nf) nf.disabled=!e.checked;
if (nw) nw.disabled=!e.checked;
if (this.optionBoxOn)
{
this.numberingOn=e.checked?1:0;
this.configNumberingOn=this.numberingOn;
if (this.hasC("Tree")) this.hasToDrawTree=this.hasToDrawTree|1;
this.updateAll();
}
};
mxG.G.prototype.doKeyupNumFrom=function()
{
var e=this.getE("NumFromTextInput");
this.numFrom=this.getValidNum(e.value);
if (this.hasC("Tree")) this.hasToDrawTree=this.hasToDrawTree|1;
this.updateAll();
};
mxG.G.prototype.doKeyupNumWith=function()
{
var e=this.getE("NumWithTextInput");
this.numWith=this.getValidNum(e.value);
if (this.hasC("Tree")) this.hasToDrawTree=this.hasToDrawTree|1;
this.updateAll();
};
mxG.G.prototype.doChangeMarksAndLabels=function()
{
var e=this.getE("MarksAndLabelsOnCheckbox");
this.marksAndLabelsOn=e.checked?1:0;
this.updateAll();
};
mxG.G.prototype.doChangeAsInBook=function()
{
var e=this.getE("AsInBookOnCheckbox");
this.asInBookOn=e.checked?1:0;
this.configAsInBookOn=this.asInBookOn;
this.updateAll();
};
mxG.G.prototype.doChangeIndices=function()
{
var e=this.getE("IndicesOnCheckbox");
this.indicesOn=e.checked?1:0;
this.configIndicesOn=this.indicesOn;
this.hasToDrawWholeGoban=1;
this.d=0;
this.setD();
this.updateAll();
};
mxG.G.prototype.doChangeVariationMarks=function()
{
var e=this.getE("VariationMarksOnCheckbox");
this.variationMarksOn=e.checked?1:0;
this.configVariationMarksOn=this.variationMarksOn;
this.styleMode=this.variationMarksOn?this.styleMode&~2:this.styleMode|2;
this.updateAll();
};
mxG.G.prototype.doChangeSiblings=function()
{
var e=this.getE("SiblingsOnCheckbox");
this.siblingsOn=e.checked?1:0;
this.configSiblingsOn=this.siblingsOn;
this.styleMode=this.siblingsOn?this.styleMode|1:this.styleMode&~1;
this.updateAll();
};
mxG.G.prototype.setIn3dClass=function()
{
var e=this.getE("GlobalBoxDiv");
e.className=e.className.replace((this.in3dOn?"mxIn2d":"mxIn3d"),(this.in3dOn?"mxIn3d":"mxIn2d"));
};
mxG.G.prototype.doChangeIn3d=function()
{
var e=this.getE("In3dOnCheckbox");
this.in3dOn=e.checked?1:0;
this.setIn3dClass();
this.hasToDrawWholeGoban=1;
this.d=0;
this.setD();
this.updateAll();
};
mxG.G.prototype.doKeyupLoopTime=function()
{
var e=this.getE("LoopTimeTextInput");
this.loopTime=this.getValidNum(e.value);
this.updateAll();
};
mxG.G.prototype.doChangeAnimatedStone=function()
{
var e=this.getE("AnimatedStoneOnCheckbox");
this.animatedStoneOn=e.checked?1:0;
this.updateAll();
};
mxG.G.prototype.doKeyupAnimatedStoneTime=function()
{
var e=this.getE("AnimatedStoneTextInput");
this.animatedStoneTime=this.getValidNum(e.value);
this.updateAll();
};
mxG.G.prototype.doOptionOK=function()
{
var e;
if (e=this.getE("MarkOnLastOnCheckbox")) this.markOnLastOn=e.checked?1:0;
if (e=this.getE("NumberingOnCheckbox")) {this.numberingOn=e.checked?1:0;this.configNumberingOn=this.numberingOn;if (this.hasC("Tree")) this.hasToDrawTree=this.hasToDrawTree|1;}
if (e=this.getE("NumFromTextInput")) {this.numFrom=this.getValidNum(e.value);if (this.hasC("Tree")) this.hasToDrawTree=this.hasToDrawTree|1;}
if (e=this.getE("NumWithTextInput")) {this.numWith=this.getValidNum(e.value);if (this.hasC("Tree")) this.hasToDrawTree=this.hasToDrawTree|1;}
if (e=this.getE("MarksAndLabelsOnCheckbox")) this.marksAndLabelsOn=e.checked?1:0;
if (e=this.getE("AsInBookOnCheckbox")) {this.asInBookOn=e.checked?1:0;this.configAsInBookOn=this.asInBookOn;}
if (e=this.getE("IndicesOnCheckbox")) {this.indicesOn=e.checked?1:0;this.configIndicesOn=this.indicesOn;}
if (e=this.getE("VariationMarksOnCheckbox")) {this.variationMarksOn=e.checked?1:0;this.configVariationMarksOn=this.variationMarksOn;this.styleMode=this.variationMarksOn?this.styleMode&~2:this.styleMode|2;}
if (e=this.getE("SiblingsOnCheckbox")) {this.siblingsOn=e.checked?1:0;this.configSiblingsOn=this.siblingsOn;this.styleMode=this.siblingsOn?this.styleMode|1:this.styleMode&~1;}
if (e=this.getE("In3dOnCheckbox")) {this.in3dOn=e.checked?1:0;this.setIn3dClass();}
if (e=this.getE("CanVariationRadio")) this.canPlaceVariation=e.checked?1:0;
if (e=this.getE("CanGuessRadio")) this.canPlaceGuess=e.checked?1:0;
if (e=this.getE("LoopTimeTextInput")) this.loopTime=this.getValidNum(e.value);
if (e=this.getE("AnimatedStoneOnCheckbox")) this.animatedStoneOn=e.checked?1:0;
if (e=this.getE("AnimatedStoneTimeTextInput")) this.animatedStoneTime=this.getValidNum(e.value);
this.hasToDrawWholeGoban=1;
this.d=0;
this.setD();
this.hideGBox("ShowOption");
};
mxG.G.prototype.buildOption=function()
{
var s="";
s+="<div class=\"mxP\">";
if (!this.hideMarkOnLastOn)
{
s+="<input type=\"checkbox\" "+(this.optionBoxOn?"onchange=\""+this.g+".doChangeMarkOnLast()\" ":"")+"id=\""+this.n+"MarkOnLastOnCheckbox\">";
s+=" <label for=\""+this.n+"MarkOnLastOnCheckbox\">"+this.local("Mark on last")+"</label><br>";
}
if (this.hasC("Diagram")&&!this.hideNumberingOn)
{
s+="<input type=\"checkbox\" "+"onchange=\""+this.g+".doChangeNumbering()\" "+"id=\""+this.n+"NumberingOnCheckbox\">";
s+=" <label for=\""+this.n+"NumberingOnCheckbox\">"+this.local("Numbering")+"</label>";
s+=" <span style=\"white-space:nowrap;\">"+(mxG.Z[this.l]["•"]?"：":("<label for=\""+this.n+"NumFromTextInput\">"+this.local("from")))+"</label>";
s+=" <input  class=\"mxNumFromTextInput\" type=\"text\" id=\""+this.n+"NumFromTextInput\" size=\"3\" maxlength=\"3\" ";
s+=(this.optionBoxOn?"onkeyup=\""+this.g+".doKeyupNumFrom()\">":">")+"</span>";
s+=" <span style=\"white-space:nowrap;\">"+(mxG.Z[this.l]["•"]?("<label for=\""+this.n+"NumFromTextInput\">"+this.local("from")):("<label for=\""+this.n+"NumWithTextInput\">"+this.local("with")))+"</label>";
s+=" <input  class=\"mxNumWithTextInput\" type=\"text\" id=\""+this.n+"NumWithTextInput\" size=\"3\" maxlength=\"3\" ";
s+=(this.optionBoxOn?"onkeyup=\""+this.g+".doKeyupNumWith()\">":">")+(mxG.Z[this.l]["•"]?("<label for=\""+this.n+"NumWithTextInput\">"+this.local("with")):"")+"</span><br>";
}
if (this.hasC("Diagram")&&!this.hideMarksAndLabelsdOn)
{
s+="<input type=\"checkbox\" "+(this.optionBoxOn?"onchange=\""+this.g+".doChangeMarksAndLabels()\" ":"")+"id=\""+this.n+"MarksAndLabelsOnCheckbox\">";
s+=" <label for=\""+this.n+"MarksAndLabelsOnCheckbox\">"+this.local("Marks and labels")+"</label><br>";
}
if (this.hasC("Diagram")&&!this.hideAsInBookOn)
{
s+="<input type=\"checkbox\" "+(this.optionBoxOn?"onchange=\""+this.g+".doChangeAsInBook()\" ":"")+"id=\""+this.n+"AsInBookOnCheckbox\">";
s+=" <label for=\""+this.n+"AsInBookOnCheckbox\">"+this.local("As in book")+"</label><br>";
}
if (this.hasC("Diagram")&&!this.hideIndicesOn)
{
s+="<input type=\"checkbox\" "+(this.optionBoxOn?"onchange=\""+this.g+".doChangeIndices()\" ":"")+"id=\""+this.n+"IndicesOnCheckbox\">";
s+=" <label for=\""+this.n+"IndicesOnCheckbox\">"+this.local("Indices")+"</label><br>";
}
if (this.hasC("Variations")&&!this.hideVariationMarksOn)
{
s+="<input type=\"checkbox\" "+(this.optionBoxOn?"onchange=\""+this.g+".doChangeVariationMarks()\" ":"")+"id=\""+this.n+"VariationMarksOnCheckbox\">";
s+=" <label for=\""+this.n+"VariationMarksOnCheckbox\">"+this.local("Variation marks")+"</label><br>";
}
if (this.hasC("Variations")&&!this.hideSiblingsOn)
{
s+="<input type=\"checkbox\" "+(this.optionBoxOn?"onchange=\""+this.g+".doChangeSiblings()\" ":"")+"id=\""+this.n+"SiblingsOnCheckbox\">";
s+=" <label for=\""+this.n+"SiblingsOnCheckbox\">"+this.local("Show variations of current move instead of next move")+"</label><br>";
}
if (!this.hideIn3dOn)
{
s+="<input type=\"checkbox\" "+(this.optionBoxOn?"onchange=\""+this.g+".doChangeIn3d()\" ":"")+"id=\""+this.n+"In3dOnCheckbox\">";
s+=" <label for=\""+this.n+"In3dOnCheckbox\">"+this.local("In 3d")+"</label><br>";
}
s+="</div>";
if (!this.optionBoxOn&&this.hasC("Variations")&&this.hasC("Guess")&&!this.hideVariationOrGuess)
{
s+="<div class=\"mxP\">"+this.local("When clicking on the goban")+"<br>";
s+="<input name=\"variationOrGuessInput\" value=\"1\" type=\"radio\""+"id=\""+this.n+"CanVariationRadio\">";
s+=" <label for=\""+this.n+"CanVariationRadio\">"+this.local("place a variation")+"</label><br>";
s+="<input name=\"variationOrGuessInput\" value=\"2\" type=\"radio\""+"id=\""+this.n+"CanGuessRadio\">";
s+=" <label for=\""+this.n+"CanGuessRadio\">"+this.local("try to guess the next move")+"</label><br>";
s+="</div>";
}
s+="<div class=\"mxP\">";
if (this.hasC("Loop")&&!this.hideLoopTime)
{
s+=" <label for=\""+this.n+"LoopTimeTextInput\">"+this.local("Loop time:")+"</label>";
s+=" <input class=\"mxLoopTimeTextInput\" type=\"text\" id=\""+this.n+"LoopTimeTextInput\" size=\"9\" maxlength=\"9\" ";
s+=(this.optionBoxOn?"onkeyup=\""+this.g+".doKeyupLoopTime()\">":">")+"<br>";
}
if (this.hasC("AnimatedStone")&&!this.hideAnimatedStoneOn)
{
s+="<input type=\"checkbox\" "+(this.optionBoxOn?"onchange=\""+this.g+".doChangeAnimatedStone()\" ":"")+"id=\""+this.n+"AnimatedStoneOnCheckbox\">";
s+=" <label for=\""+this.n+"AnimatedStoneOnCheckbox\">"+this.local("Animated stone")+"</label><br>";
}
if (this.hasC("AnimatedStone")&&!this.hideAnimatedStoneTime)
{
s+=" <label for=\""+this.n+"AnimatedStoneTimeTextInput\">"+this.local("Animated stone time:")+"</label>";
s+=" <input class=\"mxAnimatedStoneTimeTextInput\" type=\"text\" id=\""+this.n+"AnimatedStoneTimeTextInput\" size=\"9\" maxlength=\"9\" ";
s+=(this.optionBoxOn?"onkeyup=\""+this.g+".doKeyupAnimatedStoneTime()\">":">")+"<br>";
}
s+="</div>";
return s;
};
mxG.G.prototype.setInputOption=function()
{
var e;
if (e=this.getE("MarkOnLastOnCheckbox")) e.checked=(this.markOnLastOn==1);
if (e=this.getE("NumberingOnCheckbox")) e.checked=(this.numberingOn>=1);
if (e=this.getE("NumFromTextInput")) {e.value=this.numFrom;e.disabled=!this.numberingOn;}
if (e=this.getE("NumWithTextInput")) {e.value=this.numWith;e.disabled=!this.numberingOn;}
if (e=this.getE("MarksAndLabelsOnCheckbox")) e.checked=(this.marksAndLabelsOn==1);
if (e=this.getE("AsInBookOnCheckbox")) e.checked=(this.asInBookOn==1);
if (e=this.getE("IndicesOnCheckbox")) e.checked=(this.indicesOn==1);
if (e=this.getE("VariationMarksOnCheckbox")) e.checked=(this.variationMarksOn==1);
if (e=this.getE("SiblingsOnCheckbox")) e.checked=(this.siblingsOn==1);
if (e=this.getE("In3dOnCheckbox")) e.checked=(this.in3dOn==1);
if (e=this.getE("CanVariationRadio")) e.checked=(this.canPlaceVariation==1);
if (e=this.getE("CanGuessRadio")) e.checked=(this.canPlaceGuess==1);
if (e=this.getE("LoopTimeTextInput")) e.value=this.loopTime;
if (e=this.getE("AnimatedStoneOnCheckbox")) e.checked=(this.animatedStoneOn==1);
if (e=this.getE("AnimatedStoneTimeTextInput")) e.value=(this.animatedStoneTime?this.animatedStoneTime:this.loopTime?this.loopTime:1000);
};
mxG.G.prototype.doOption=function()
{
if (this.gBox=="ShowOption") {this.hideGBox("ShowOption");return;}
if (!this.getE("ShowOptionDiv"))
{
var s="";
s+="<div class=\"mxShowContentDiv\">";
s+="<h1>"+this.local("Options")+"</h1>";
s+=this.buildOption();
s+="</div>";
s+="<div class=\"mxOKDiv\">";
s+="<button type=\"button\" onclick=\""+this.g+".doOptionOK()\"><span>"+this.local("OK")+"</span></button>";
s+="<button type=\"button\" onclick=\""+this.g+".hideGBox('ShowOption')\"><span>"+this.local("Cancel")+"</span></button>";
s+="</div>";
this.createGBox("ShowOption").innerHTML=s;
}
this.setInputOption();
this.showGBox("ShowOption");
};
mxG.G.prototype.initOption=function()
{
if (this.optionBoxOn) this.setInputOption();
};
mxG.G.prototype.createOption=function()
{
if (this.optionBoxOn||this.optionBtnOn)
{
this.write("<div class=\"mxOptionDiv\" id=\""+this.n+"OptionDiv\">");
if (this.optionBtnOn) this.addBtn({n:"Option",v:this.label("Options","optionLabel")});
else this.write(this.buildOption());
this.write("</div>");
}
};
}
if (typeof mxG.G.prototype.createImage=='undefined'){
mxG.Z.fr["Image"]="Image";
mxG.G.prototype.showImage=function()
{
if (this.im4Show&&!this.im4Show.OK) {setTimeout(this.g+".showImage()",100);return;}
var aW,aH,html,hs=0;
html='<!DOCTYPE HTML>\n';
html+='<html><head>';
html+='<title>maxiGos-Image</title>';
html+='</head><body style="margin:16px;padding:0;text-align:center;">';
html+='<img id="gcni" style="display:block;margin:0 auto;" alt="maxiGos" src="'+this.gcni.toDataURL("image/png")+'">';
html+='</body></html>';
aW=this.gobanCnWidth()+48+(hs?16:0);
aH=this.gobanCnHeight()+48+(hs?16:0)+hs;
if (this.imagePopup&&!this.imagePopup.closed) this.imagePopup.close();
this.imagePopup=window.open('','maxiGosImage','width='+aW+',height='+aH+',scrollbars=no');
this.imagePopup.document.open();
this.imagePopup.document.write(html);
this.imagePopup.document.close();
};
mxG.G.prototype.setImageWithBkColor=function(c)
{
this.im4Show="";
this["gcxi"].save();
this["gcxi"].fillStyle=c;
this["gcxi"].fillRect(0,0,this["gcni"].width,this["gcni"].height);
this["gcxi"].restore(); 
this["gcxi"].drawImage(this.gcn,0,0);
};
mxG.G.prototype.setImageWithBkPattern=function(bk)
{
var gw=this["gcni"].width,gh=this["gcni"].height,c,s;
this.im4Show=new Image();
this.im4Show.OK=0;
this.im4Show.gos=this;
this.im4Show.onload=function()
{
this.OK=1;
this.gos["gcxi"].save();
this.gos["gcxi"].drawImage(this,0,0,this.gos.gcn.width,this.gos.gcn.height);
this.gos["gcxi"].restore(); 
this.gos["gcxi"].drawImage(this.gos.gcn,0,0);
};
this.im4Show.src=bk;
};
mxG.G.prototype.doImage=function()
{
var aW,aH,html,st,bk,bs,w,cn,cx,bkp=0;
bk=mxG.GetStyle(this.getE("GobanCanvas"),"backgroundImage");
if (!bk||(bk=="none")) bk=mxG.GetStyle(this.getE("GobanCanvas"),"backgroundColor");
if (bk.match(/^url\((.*)\)$/))
{
bk=bk.replace(/^url\((.*)\)$/,"$1");
bk=bk.replace(/\"/g,"");
bkp=1;
}
this.gcni=document.createElement('canvas');
this.gcxi=this.gcni.getContext('2d');
this.gcni.width=this.gcn.width;
this.gcni.height=this.gcn.height;
if (bkp) this.setImageWithBkPattern(bk);
else this.setImageWithBkColor(bk);
this.showImage();
};
mxG.G.prototype.createImage=function()
{
var k=this.k;
this.write("<div class=\"mxImageDiv\" id=\""+this.n+"ImageDiv\">");
this.addBtn({n:"Image",v:this.local("Image")});
this.write("</div>");
window.addEventListener("unload",function(ev){if (mxG.D[k].imagePopup&&!mxG.D[k].imagePopup.closed) mxG.D[k].imagePopup.close();},false);
};
}
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
var a;
if (this.downloadLocallyIs===undefined)
{
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
if (first) {aText+=";";first=0;} 
if (aN.Dad&&(aN.Dad==this.rN)) {aText+=rc;c=0;}
aText+=x;
ym=aN.P[x].length;
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
this.sgfPopup.document.open();
this.sgfPopup.document.write("<!DOCTYPE html><html><body><pre>\n");
this.sgfPopup.document.write(this.buildSgf());
this.sgfPopup.document.write("\n</pre></body></html>");
this.sgfPopup.document.close();
this.sgfPopup.document.title="Sgf"; 
};
mxG.G.prototype.downloadSgfLocally=function(f)
{
var u,a;
if (this.canSgfDownloadLocally())
{
u="data:application/octet-stream;charset=utf-8,"+encodeURIComponent(this.buildSgf());
a=document.createElement('a');
document.body.appendChild(a); 
a.download=f;
a.href=u;
a.click();
document.body.removeChild(a);
}
else this.popupSgf(); 
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
if (typeof mxG.G.prototype.createMoveInfo=='undefined'){
mxG.Z.fr[" pass"]=" passe";
mxG.Z.fr[" at "]=" en  ";
mxG.G.prototype.updateMoveInfo=function()
{
var x,y,m=this.gor.play,n=this.gor.setup,num,nat,s4m;
if (m>n)
{
x=this.gor.getX(m);
y=this.gor.getY(m);
nat=this.gor.getNat(m);
num=this.getCoreNum(m);
if (this.onlyMoveNumber) s4m=num+"";
else
{
s4m=this.buildStone(nat,this.d,num);
if (x&&y) s4m+=this.local(" at ")+this.k2c(x)+this.k2n(y);
else s4m+=this.local(" pass");
}
}
else s4m=" ";
this.getE("MoveInfoDiv").innerHTML=s4m;
};
mxG.G.prototype.refreshMoveInfo=function()
{
var div=this.getE("MoveInfoDiv"),img=div.getElementsByTagName("img")[0];
if (img&&(this.d!=mxG.GetPxrStyle(img,"height"))) {this.updateMoveInfo();return;}
};
mxG.G.prototype.createMoveInfo=function()
{
this.write("<div class=\"mxMoveInfoDiv\" id=\""+this.n+"MoveInfoDiv\"> </div>");
};
}
if (typeof mxG.G.prototype.createSpeed=='undefined'){
mxG.G.prototype.setNewSpeed=function(w1)
{
var el=this.getE("SpeedBarDiv"),wn=mxG.GetPxStyle(el,"width"),cn=this.getE("SpeedCanvas"),wo=mxG.GetPxStyle(cn,"width");
if (this.hasC("Loop")) this.resetLoop();
if (w1>wn/2) this.loopTime=1000*(1-w1/wn)*2;
else if (w1<wn/2) this.loopTime=1000+18000*(0.5-w1/wn);
else this.loopTime=1000;
cn.style.left=w1+"px";
this.speedTokenPos=w1/wn;
};
mxG.G.prototype.doClickSpeed=function(ev)
{
this.setNewSpeed(this.getE("SpeedBarDiv").getMClick(ev).x);
this.updateAll();
};
mxG.G.prototype.doClickSpeedPlus=function()
{
var w1=mxG.GetPxStyle(this.getE("SpeedCanvas"),"left"),wn=mxG.GetPxStyle(this.getE("SpeedBarDiv"),"width");
this.setNewSpeed(Math.min(wn,w1+wn/10));
this.updateAll();
};
mxG.G.prototype.doClickSpeedMinus=function()
{
var w1=mxG.GetPxStyle(this.getE("SpeedCanvas"),"left"),wn=mxG.GetPxStyle(this.getE("SpeedBarDiv"),"width");
this.setNewSpeed(Math.max(0,w1-wn/10));
this.updateAll();
};
mxG.G.prototype.doMouseMoveSpeed=function(ev)
{
if (this.inSpeed)
{
var dv=this.getE("SpeedBarDiv"),c=dv.getMClick(ev),x;
x=Math.min(mxG.GetPxStyle(dv,"width"),Math.max(0,c.x-this.speedTokenOffset));
this.setNewSpeed(x);
this.updateAll();
}
};
mxG.G.prototype.doMouseDownSpeed=function(ev)
{
var cn=this.getE("SpeedCanvas");
this.inSpeed=1;
this.speedTokenOffset=cn.getMClick(ev).x-mxG.GetPxStyle(cn,"width")/2;
document.body.className+=" mxUnselectable";
};
mxG.G.prototype.doMouseUpSpeed=function(ev)
{
this.inSpeed=0;
document.body.className.replace(" mxUnselectable","");
};
mxG.G.prototype.doKeydownSpeed=function(ev)
{
var r=0;
switch(mxG.GetKCode(ev))
{
case 39:case 72:case 107:this.doClickSpeedPlus();r=1;break;
case 37:case 74:case 109:this.doClickSpeedMinus();r=1;break;
}
if (r) ev.preventDefault();
};
mxG.G.prototype.initSpeed=function()
{
var dv=this.getE("SpeedBarDiv"),cn=this.getE("SpeedCanvas"),k=this.k;
mxG.CreateUnselectable();
dv.getMClick=mxG.GetMClick;
cn.getMClick=mxG.GetMClick;
cn.addEventListener("mousedown",function(ev){mxG.D[k].doMouseDownSpeed(ev);},false);
document.addEventListener("mousemove",function(ev){mxG.D[k].doMouseMoveSpeed(ev);},false);
document.addEventListener("mouseup",function(ev){mxG.D[k].doMouseUpSpeed(ev);},false);
this.speedTokenPos=0.5;
this.speedTokenWidth=cn.width;
this.speedBarWidth=dv.width;
cn.style.left=(this.speedTokenPos*this.speedBarWidth)+"px";
cn.style.marginLeft=-(this.speedTokenWidth/2+mxG.GetPxStyle(cn,"borderLeftWidth"))+"px";
};
mxG.G.prototype.refreshSpeed=function()
{
var e=this.getE("SpeedBarDiv"),cn=this.getE("SpeedCanvas"),g=this.getE("GobanDiv"),z;
if (this.adjustSpeedBarWidth)
{
z=mxG.GetPxStyle(this.getE("SpeedMinusBtn"),"width")+mxG.GetPxStyle(this.getE("SpeedPlusBtn"),"width")
e.style.width=(this.gobanWidth()+this.getDW(g)-this.getDW(e)-z)+"px";
}
if ((mxG.GetPxStyle(cn,"width")!=this.speedTokenWidth)||(mxG.GetPxStyle(e,"width")!=this.speedBarWidth))
{
this.speedTokenWidth=mxG.GetPxStyle(cn,"width");
this.speedBarWidth=mxG.GetPxStyle(e,"width");
cn.style.left=(this.speedTokenPos*this.speedBarWidth)+"px";
cn.style.marginLeft=-(this.speedTokenWidth/2+mxG.GetPxStyle(cn,"borderLeftWidth"))+"px";
}
};
mxG.G.prototype.createSpeed=function()
{
var s="";
s+="<div tabindex=\"-1\" style=\"outline:none;position:relative;\" class=\"mxSpeedDiv\" onkeydown=\""+this.g+".doKeydownSpeed(event)\">";
s+="<button id=\""+this.n+"SpeedMinusBtn\" type=\"button\" class=\"mxSpeedMinusBtn\" onclick=\""+this.g+".doClickSpeedMinus()\"><span>-</span></button>";
s+="<div style=\"position:relative;\" class=\"mxSpeedBarDiv\"  onclick=\""+this.g+".doClickSpeed(event)\" id=\""+this.n+"SpeedBarDiv\">";
s+="<canvas style=\"position:absolute;\" id=\""+this.n+"SpeedCanvas\"></canvas>";
s+="</div>";
s+="<button id=\""+this.n+"SpeedPlusBtn\" type=\"button\" class=\"mxSpeedPlusBtn\" onclick=\""+this.g+".doClickSpeedPlus()\"><span>+</span></button>";
s+="</div>";
this.write(s);
};
}
if (typeof mxG.G.prototype.createGuess=='undefined'){
mxG.Z.fr["Guess-o-meter"]="Devinette";
mxG.G.prototype.updateGuessBar=function(dz)
{
if (!this.guessBoxOn) return;
if (!this.canPlaceGuess) dz=0;
var dzm=(this.DX+this.DY)>>1,pz,el=this.getE("GuessOMeterDiv"),cn=this.getE("GuessCanvas");
pz=(dz<=0)?100:100-((dz>dzm)?100:((dz*100)/dzm));
if (this.verticalGuessBar)
{
var hb=mxG.GetPxrStyle(el,"height"),hc=Math.floor(hb*pz/100);
cn.style.width="100%";
cn.style.height=(pz==100)?"100%":hc+"px";
cn.style.marginTop=(hb-hc)+"px";
}
else
{
el.style.visibility=((pz==100)?"hidden":"visible");
cn.style.width=pz+"%";
}
this.dz=dz;
};
mxG.G.prototype.checkBW=function(aN,a,b)
{
var s="",x,y;
if (aN.P.B||aN.P.W)
{
if (aN.P.B) s=aN.P.B[0];else s=aN.P.W[0];
if (s.length==2) {x=s.c2n(0);y=s.c2n(1);}
else {x=0;y=0;}
return (x==a)&&(y==b);
}
return 0;
};
mxG.G.prototype.checkGuess=function(a,b)
{
var aN,bN,k,km,s,x,y,dx,dy,dz=this.DX+this.DY;
aN=this.cN;
km=aN.Kid.length;
if (!km) {this.plonk();return;}
for (k=0;k<km;k++)
{
bN=aN.Kid[k];
x=-this.DX;
y=-this.DY;
if (!bN.Add&&(bN.P.B||bN.P.W))
{
s=bN.P[bN.P.B?"B":"W"][0];
if (s.length==2)
{
x=s.c2n(0);
y=s.c2n(1);
if (!this.inView(x,y)) {x=0;y=0;}
}
else {x=0;y=0;}
}
if ((x==a)&&(y==b))
{
if (this.canPlaceGuess)
{
aN.Focus=k+1;
this.placeNode();
this.updateAll();
}
else this.updateGuessBar(0);
return;
}
else
{
if (!bN.Add&&x&&y)
{
if (a&&b)
{
dx=(((x-a)>0)?x-a:a-x);
dy=(((y-b)>0)?y-b:b-y);
dz=Math.min(dz,dx+dy);
}
else dz=(this.DX+this.DY)>>1;
}
}
}
this.updateGuessBar(dz);
};
mxG.G.prototype.doClickGuess=function(ev)
{
if (this.canPlaceGuess)
{
var c=this.getC(ev);
if (!this.inView(c.x,c.y)) {this.plonk();return;}
this.checkGuess(c.x,c.y);
}
};
mxG.G.prototype.doKeydownGobanForGuess=function(ev)
{
if (this.canPlaceGuess)
if (mxG.GetKCode(ev)==13) this.checkGuess(this.xFocus,this.yFocus);
};
mxG.G.prototype.initGuess=function()
{
var el=this.getE("GobanCanvas"),k=this.k;
el.getMClick=mxG.GetMClick;
el.addEventListener("click",function(ev){mxG.D[k].doClickGuess(ev);},false);
if (this.gobanFocus) this.getE("GobanDiv").addEventListener("keydown",function(ev){mxG.D[k].doKeydownGobanForGuess(ev);},false);
};
mxG.G.prototype.updateGuess=function()
{
this.updateGuessBar(this.cN.Add?100:0);
};
mxG.G.prototype.refreshGuess=function()
{
this.updateGuessBar(this.dz);
};
mxG.G.prototype.createGuess=function()
{
if (this.guessBoxOn)
{
var s="<div class=\"mxGuessDiv\" id=\""+this.n+"GuessDiv\">";
s+="<div class=\"mxGuessOMeterDiv\" title=\""+this.local("Guess-o-meter")+"\" id=\""+this.n+"GuessOMeterDiv\"><canvas id=\""+this.n+"GuessCanvas\"></canvas></div>";
s+="</div>";
this.write(s);
}
};
}
(function(){var a="",e=document.createElement("style");
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv{text-align:center;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxErrorDiv {text-align:center;padding:25px;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxGobanBoxDiv,.mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxPanelBoxDiv{display:inline-block;text-align:center;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxGobanBoxDiv{padding:0.5em 0;vertical-align:middle;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxPanelBoxDiv{margin-left:0.5em;padding:0.5em;width:17em;vertical-align:middle;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxGobanDiv{position:relative;margin:0 auto;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv.mxIn3d  div.mxInnerGobanDiv{box-shadow:0 0.5em 1em #963;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv.mxIn3d div.mxGobanDiv.mxUnder div.mxInnerGobanDiv{box-shadow:none;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxGobanDiv canvas{font-size:0.875em;background-color:#fcce9c;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxPassDiv,.mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxLoopDiv,.mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxImageDiv,.mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxSgfDiv{display:inline-block;vertical-align:top;padding:0;text-align:center;margin-top:1em;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxShowSgfDiv{overflow:auto;background-color:white;padding:0.5em;box-shadow: 0em 0.1em 0.1em #963;cursor:default;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxShowSgfDiv div.mxP{text-align:left;font-family:monospace;margin:0 0.5em 0.5em 0.5em;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxShowSgfDiv div.mxOKDiv{padding:0.5em;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxOptionDiv{text-align:left;margin-bottom:0.5em;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxHeaderDiv{text-align:justify;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxHeaderDiv h1{font-size:1.2em;margin:0 2em 1em 2em;padding:0;text-align:center;color:#900;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxHeaderDiv div.mxP{margin-bottom:1em;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxMoveInfoDiv{font-size:0.75em;height:2em;line-height:2em;text-align:center;padding:0.5em 0 0 0;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxMoveInfoDiv img{vertical-align:middle;padding-bottom:0.25em;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv .mxSpeedBarDiv {vertical-align:middle;display:inline-block;cursor:pointer;border:1px solid #777;background:#fff;height:0.5em;width:80%;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv .mxSpeedBarDiv canvas {border:1px solid #777;background:#fff;height:1em;width:0.5em;top:-0.25em}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv .mxSpeedDiv .mxSpeedPlusBtn,.mxFmGlobalBoxDiv.mxGameGlobalBoxDiv .mxSpeedDiv .mxSpeedMinusBtn{font-size:1em;border:0;margin:0;padding:0;width:1em;vertical-align:middle;background:transparent;cursor:pointer;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxGuessDiv{border:1px solid #777;background:#fff;width:80%;margin:0.5em auto 0 auto;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxGuessOMeterDiv{background:#900;height:0.5em;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxGuessOMeterDiv canvas{background:#090;display:block;height:0.5em;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv .mxNavigationDiv{outline:0;display:flex;margin-top:1em;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv .mxNavigationDiv button{flex:1;height:2em;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxPassDiv button div,.mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxImageDiv button div,.mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxSgfDiv button div {line-height:1.25em;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv button:hover {cursor:pointer;}"
a+=".mxFmGlobalBoxDiv.mxGameGlobalBoxDiv button[disabled]:hover {cursor:default;}"
a+="@media (max-width:799px) {.mxFmGlobalBoxDiv.mxGameGlobalBoxDiv div.mxPanelBoxDiv {width:auto;}"
a+="}";
e.type='text/css';
if (e.styleSheet) e.styleSheet.cssText=a;
else e.appendChild(document.createTextNode(a));
document.getElementsByTagName('head')[0].appendChild(e);
})();
mxG.K++;
mxG.D[mxG.K]=new mxG.G(mxG.K);
mxG.D[mxG.K].path=mxG.GetDir()+"../../../";
mxG.D[mxG.K].theme="Fm";
mxG.D[mxG.K].config="Game";
mxG.D[mxG.K].b[0]={n:"GobanBox",c:["Diagram","Goban","Variations","Navigation","Loop"]};
mxG.D[mxG.K].b[1]={n:"PanelBox",c:["Title","Header","Option","Speed","Pass","Image","Sgf","MoveInfo","Guess"]};
mxG.D[mxG.K].initMethod="last";
mxG.D[mxG.K].in3dOn=1;
mxG.D[mxG.K].stretchOn=1;
mxG.D[mxG.K].markOnLastOn=1;
mxG.D[mxG.K].marksAndLabelsOn=0;
mxG.D[mxG.K].numberingOn=0;
mxG.D[mxG.K].asInBookOn=0;
mxG.D[mxG.K].indicesOn=1;
mxG.D[mxG.K].variationMarksOn=1;
mxG.D[mxG.K].hideSingleVariationMarkOn=1;
mxG.D[mxG.K].hideLoopTime=1;
mxG.D[mxG.K].markOnLastColor="#f00";
mxG.D[mxG.K].variationColor="#fff";
mxG.D[mxG.K].variationBk="#9c6e3c";
mxG.D[mxG.K].variationFontWeight="bold";
mxG.D[mxG.K].maximizeGobanHeight=1;
mxG.D[mxG.K].maximizeGobanWidth=1;
mxG.D[mxG.K].headerBoxOn=1;
mxG.D[mxG.K].optionBoxOn=1;
mxG.D[mxG.K].sgfBtnOn=1;
mxG.D[mxG.K].loopBtnOn=1;
mxG.D[mxG.K].headerLabel_en="More";
mxG.D[mxG.K].headerLabel_fr="En savoir +";
mxG.D[mxG.K].loopTip_fr="En boucle";
mxG.D[mxG.K].loopTip_en="Loop";
mxG.D[mxG.K].loopBtnPosition="center";
mxG.D[mxG.K].canPlaceGuess=1;
mxG.D[mxG.K].hidePlace=1;
mxG.D[mxG.K].hideRules=1;
mxG.D[mxG.K].hideNumOfMoves=1;
mxG.D[mxG.K].hideGeneralComment=1;
mxG.D[mxG.K].hideSiblingsOn=1;
mxG.D[mxG.K].guessBoxOn=1;
mxG.D[mxG.K].translateTitleOn=1;
mxG.D[mxG.K].siblingsOn=0;
mxG.D[mxG.K].focusColor="#000";
mxG.D[mxG.K].fitParent=1;
mxG.D[mxG.K].fitMax=22;
mxG.D[mxG.K].alone=1;
mxG.D[mxG.K].createAll();
