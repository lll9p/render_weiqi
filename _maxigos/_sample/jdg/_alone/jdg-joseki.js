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
(function(){var a="",e=document.createElement("style");
a+=".mxJdgGlobalBoxDiv button,.mxJdgGlobalBoxDiv input[type=text] {-webkit-appearance:none;}"
a+=".mxJdgGlobalBoxDiv button,.mxJdgGlobalBoxDiv input[type=text]{font-size:0.875em;border:1px solid #fb2;background:#fff;color:#495257;font-weight:bold;margin:0.125em;border-radius:0;white-space:normal;box-shadow:none;padding-top:0.125em;padding-bottom:0.125em;}"
a+=".mxJdgGlobalBoxDiv button:hover {cursor:pointer;}"
a+=".mxJdgGlobalBoxDiv button[disabled]:hover {cursor:default;}"
a+=".mxJdgGlobalBoxDiv input[type=text][disabled],.mxJdgGlobalBoxDiv button[disabled] {opacity:0.3;}"
a+=".mxJdgGlobalBoxDiv div.mxShowOptionDiv input[type=text]{width:2.4em;;text-align:center;;}"
a+=".mxJdgGlobalBoxDiv div.mxShowOptionDiv input.mxLoopTimeTextInput,.mxJdgGlobalBoxDiv div.mxShowOptionDiv input.mxAnimatedStoneTimeTextInput{width:3.6em;}";
e.type='text/css';
if (e.styleSheet) e.styleSheet.cssText=a;
else e.appendChild(document.createTextNode(a));
document.getElementsByTagName('head')[0].appendChild(e);
})();
(function(){var a="",e=document.createElement("style");
a+=".mxJdgGlobalBoxDiv div.mxNavigationDiv{margin:0 auto;text-align:center;}"
a+=".mxJdgGlobalBoxDiv div.mxNavigationDiv button{font-size:1em;padding:0.25em;min-width:2.25em;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv button div{display:block;position:relative;top:0;height:1em;width:0;margin:0 auto;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv button div span {display:none;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv button div:before,div.mxJdgGlobalBoxDiv div.mxNavigationDiv button div:after{top:0;position:absolute;content:\"\";border-width:0;border-style:solid;border-color:transparent #000;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv button:focus div:before,div.mxJdgGlobalBoxDiv div.mxNavigationDiv button:focus div:after{border-color:transparent #f00;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv button[disabled] div:before,div.mxJdgGlobalBoxDiv div.mxNavigationDiv button[disabled] div:after{border-color:transparent #000;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxFirstBtn div:before{height:1em;left:-0.3125em;border-width:0 0 0 0.125em;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxFirstBtn div:after{height:0;right:-0.3125em;border-width:0.5em 0.5em 0.5em 0; }"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxTenPredBtn div:before{height:0;left:-0.5em;border-width:0.5em 0.5em 0.5em 0; }"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxTenPredBtn div:after{height:0;right:-0.5em;border-width:0.5em 0.5em 0.5em 0; }"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxPredBtn div:after{height:0;left:-0.25em;border-width:0.5em 0.5em 0.5em 0; }"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxNextBtn div:before{height:0;left:-0.25em;border-width:0.5em 0 0.5em 0.5em;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxTenNextBtn div:before{height:0;left:-0.5em;border-width:0.5em 0 0.5em 0.5em;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxTenNextBtn div:after{height:0;right:-0.5em;border-width:0.5em 0 0.5em 0.5em;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxLastBtn div:before{height:0;left:-0.3125em;border-width:0.5em 0 0.5em 0.5em;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxLastBtn div:after{height:1em;right:-0.3125em;border-width:0 0.125em 0 0;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxLoopBtn div:before{height:0;left:-0.625em;border-width:0.5em 0.5em 0.5em 0; }"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxLoopBtn div:after{height:0;right:-0.625em;border-width:0.5em 0 0.5em 0.5em;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxPauseBtn div:before{height:1em;left:0.25em;border-width:0 0 0 0.125em;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv .mxPauseBtn div:after{height:1em;right:0.25em;border-width:0 0.125em 0 0;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv button::-moz-focus-inner {padding:0;border:0;}"
a+="div.mxJdgGlobalBoxDiv div.mxNavigationDiv{-khtml-user-select: none;-webkit-user-select: none;-moz-user-select: -moz-none;-ms-user-select: none;user-select: none;}";
e.type='text/css';
if (e.styleSheet) e.styleSheet.cssText=a;
else e.appendChild(document.createTextNode(a));
document.getElementsByTagName('head')[0].appendChild(e);
})();
(function(){var a="",e=document.createElement("style");
a+=".mxJdgGlobalBoxDiv.mxJosekiGlobalBoxDiv {text-align:center;}"
a+=".mxJdgGlobalBoxDiv.mxJosekiGlobalBoxDiv div.mxGobanDiv {margin:0.5em auto;padding:0 4px 4px 0;font-size:0.9em;}"
a+=".mxJdgGlobalBoxDiv.mxJosekiGlobalBoxDiv div.mxInnerGobanDiv {box-shadow:1px 1px #965400,2px 2px #965400,3px 3px #965400,4px 4px #965400,8px 8px 8px rgba(0,0,0,0.3);}"
a+=".mxJdgGlobalBoxDiv.mxJosekiGlobalBoxDiv div.mxGobanDiv canvas {color:#000;background-color:#fcba54;}"
a+=".mxJdgGlobalBoxDiv.mxJosekiGlobalBoxDiv div.mxCommentDiv {margin:0 auto;}"
a+=".mxJdgGlobalBoxDiv.mxJosekiGlobalBoxDiv div.mxCommentContentDiv {display:inline-block;padding:0.5em;text-align:justify;}"
a+=".mxJdgGlobalBoxDiv.mxJosekiGlobalBoxDiv .mxBM {color:#3ae;font-size:120%;text-align:center;}"
a+=".mxJdgGlobalBoxDiv.mxJosekiGlobalBoxDiv .mxTE {color:crimson;font-size:120%;text-align:center;}"
a+="@media (max-width:499px){.mxJdgGlobalBoxDiv.mxJosekiGlobalBoxDiv button {margin:2px;padding:3px;width:auto;}"
a+="}";
e.type='text/css';
if (e.styleSheet) e.styleSheet.cssText=a;
else e.appendChild(document.createTextNode(a));
document.getElementsByTagName('head')[0].appendChild(e);
})();
mxG.K++;
mxG.D[mxG.K]=new mxG.G(mxG.K);
mxG.D[mxG.K].path=mxG.GetDir()+"../../../";
mxG.D[mxG.K].theme="Jdg";
mxG.D[mxG.K].config="Joseki";
mxG.D[mxG.K].b[0]={n:"1Box",c:["Diagram","Variations","Goban","Navigation"]};
mxG.D[mxG.K].b[1]={n:"2Box",c:["Comment"]};
mxG.D[mxG.K].initMethod="first";
mxG.D[mxG.K].markOnLastOn=0;
mxG.D[mxG.K].marksAndLabelsOn=1;
mxG.D[mxG.K].variationMarksOn=1;
mxG.D[mxG.K].numberingOn=1;
mxG.D[mxG.K].indicesOn=0;
mxG.D[mxG.K].in3dOn=1;
mxG.D[mxG.K].stretchOn=1;
mxG.D[mxG.K].variationColor="#fff";
mxG.D[mxG.K].variationBk="#cc8a24";
mxG.D[mxG.K].variationFontWeight="bold";
mxG.D[mxG.K].canPlaceVariation=1;
mxG.D[mxG.K].adjustCommentWidth=1;
mxG.D[mxG.K].adjustNavigationWidth=1;
mxG.D[mxG.K].fitParent=1;
mxG.D[mxG.K].markLineWidth=2;
mxG.D[mxG.K].alone=1;
mxG.D[mxG.K].createAll();
