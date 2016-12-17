// maxiGos v6.57 > mgosIrohaPatch.js

if (typeof mxG.G.prototype.createIroha=='undefined'){

mxG.G.prototype.k2n4Iroha=function(k)
{
	if (k==0) return "十";
	if (k==1) return "一";
	if (k==2) return "二";
	if (k==3) return "三";
	if (k==4) return "四";
	if (k==5) return "五";
	if (k==6) return "六";
	if (k==7) return "七";
	if (k==8) return "八";
	if (k==9) return "九";
	if (k==10) return "十";
	if (k==11) return "十一";
	if (k==12) return "十二";
	if (k==13) return "十三";
	if (k==14) return "十四";
	if (k==15) return "十五";
	if (k==16) return "十六";
	if (k==17) return "十七";
	if (k==18) return "十八";
	if (k==19) return "十九";
	if (k==20) return "〹";
	return "";
};

mxG.G.prototype.k2c4Iroha=function(k)
{
	if (k==(this.DX-18)) return "ツ";
	if (k==(this.DX-17)) return "ソ";
	if (k==(this.DX-16)) return "レ";
	if (k==(this.DX-15)) return "タ";
	if (k==(this.DX-14)) return "ヨ";
	if (k==(this.DX-13)) return "カ";
	if (k==(this.DX-12)) return "ワ";
	if (k==(this.DX-11)) return "ヲ";
	if (k==(this.DX-10)) return "ル";
	if (k==(this.DX-9)) return "ヌ";
	if (k==(this.DX-8)) return "リ";
	if (k==(this.DX-7)) return "チ";
	if (k==(this.DX-6)) return "ト";
	if (k==(this.DX-5)) return "ヘ";
	if (k==(this.DX-4)) return "ホ";
	if (k==(this.DX-3)) return "ニ";
	if (k==(this.DX-2)) return "ハ";
	if (k==(this.DX-1)) return "ロ";
	if (k==(this.DX-0)) return "イ";
	return "";
};

mxG.G.prototype.num2kanji=function(s)
{
	var k,ko,a,an,b,bn,c,cn,android=mxG.IsAndroid,ios=mxG.IsIOS;
	s+="";
	if (s.search(/^[0-9]+/)!=0) return s;
	k=parseInt(s);
	a=Math.floor(k/100);
	b=Math.floor(k/10)-a*10;
	c=k-b*10-a*100;
	if (a==0) an="";
	else if (a==1) an="口";
	else if (a==2) an="△";
	else if (a==3) an="◯";
	else an="⊙";
	if (b==0) bn="";
	else if (b==1) bn="十";
	else if (b==2) bn="卄";// {if (android||ios) bn="二";else bn="〹";}
	else if (b==3) bn="卅";// {if (android||ios) bn="三";else bn="〺";}
	else bn=this.k2n(b);
	if (c==0)
	{
		if ((b<4)&&!(b&&android)&&!(b&&ios)) cn="";
		else cn="十";
	}
	else if ((b==c)&&(b>3)) {if (android) cn="々";else cn="〻";}
	else cn=this.k2n(c);
	return an+bn+cn;
};

mxG.G.prototype.drawStone4Iroha=function(cx,nat,d)
{
	var r=d/2;
	cx.beginPath();
	cx.arc(r,r,r-0.4*this.lw,0,Math.PI*2,false);
	if (nat=="B") {cx.fillStyle="#000";cx.fill();}
	if (nat=="W") {cx.lineWidth=this.lw;cx.strokeStyle="#000";cx.stroke();}
};

mxG.G.prototype.drawText4Iroha=function(cx,x,y,d,s,op)
{
	var z=(d>>2),r=d/2,sf,fw=(op&&op.fw)?op.fw:"normal",c=0,sc=0;
	var android=mxG.IsAndroid,macos=mxG.IsMacSafari,ios=mxG.IsIOS;
	cx.save();
	if (op&&op.c) c=op.c;
	if (c)
	{
		cx.fillStyle=c;
		if ((android||macos||ios)&&(fw=="normal")&&(c=="#fff"))
		{
			sc="#fff";
			cx.strokeStyle=sc;
			cx.lineWidth=0.75;
		}
	}
	s+="";
	s=this.num2kanji(s);
	cx.textBaseline="middle"; // doesn't work in the same way everywhere
	cx.textAlign="center";
	cx.font=fw+" "+this.getFs(cx,d,fw)+"px"+" "+"Arial";
	if (s.length==1)
	{
		cx.fillText(s,x+(d>>1),y+(d>>1));
		if (sc) cx.strokeText(s,x+(d>>1),y+(d>>1));
	}
	else if (s.length==2)
	{
		sf=0.5;
		cx.scale(1,sf);
		cx.fillText(s.substr(0,1),x+d/2,(y+d/4+d/16)/sf);
		if (sc) cx.strokeText(s.substr(0,1),x+d/2,(y+d/4+d/16)/sf);
		cx.fillText(s.substr(1,1),x+d/2,(y+d/2+d/4-d/16)/sf);
		if (sc) cx.strokeText(s.substr(1,1),x+d/2,(y+d/2+d/4-d/16)/sf);
	}
	else if (s.length==3)
	{
		sf=0.33;
		cx.scale(1,sf);
		cx.fillText(s.substr(0,1),x+d/2,(y+d/6+d/16)/sf);
		if (sc) cx.strokeText(s.substr(0,1),x+d/2,(y+d/6+d/16)/sf);
		cx.fillText(s.substr(1,1),x+d/2,(y+d/2)/sf);
		if (sc) cx.strokeText(s.substr(1,1),x+d/2,(y+d/2)/sf);
		cx.fillText(s.substr(2,1),x+d/2,(y+5*d/6-d/16)/sf);
		if (sc) cx.strokeText(s.substr(2,1),x+d/2,(y+5*d/6-d/16)/sf);
	}
	else
	{
		cx.fillText(s,x+(d>>1),y+(d>>1));
		if (sc) cx.strokeText(s,x+(d>>1),y+(d>>1));
	}
	cx.restore();
};

mxG.G.prototype.drawGoban4Iroha=function()
{
	if (!this.img.B.canDraw||!this.img.W.canDraw) {setTimeout(this.g+".drawGoban()",10);return;}
	var i,j,k;
	if (mxG.IsAndroid) this.hasToDrawWholeGoban=1;
	if (this.d!=this.exD) this.hasToDrawWholeGoban=1;
	if (this.hasToDrawWholeGoban) {this.dNat=[];this.dStr=[];this.setGobanSize();}
	for (i=this.xl;i<=this.xr;i++)
		for (j=this.yt;j<=this.yb;j++)
		{
			k=this.xy(i,j);
			if ((this.dNat[k]!=this.vNat[k])||(this.dStr[k]!=this.num2kanji(this.vStr[k])))
			{
				this.drawPoint(this.gcx,i,j,this.vNat[k],this.vStr[k]);
				this.dNat[k]=this.vNat[k];
				this.dStr[k]=this.num2kanji(this.vStr[k]);
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

mxG.G.prototype.doImage4IrohaNext=function()
{
	if (!this.img4Iroha.canDraw) {setTimeout(this.g+".doImage4IrohaNext()",200);return;}
	var html,cn=document.createElement("canvas"),cx;
	cn.width=this.gcn.width;
	cn.height=this.gcn.height;
	cx=cn.getContext("2d");
	cx.drawImage(this.img4Iroha,0,0,this.gcn.width,this.gcn.height);
	cx.drawImage(this.gcn,0,0);

	html='<!DOCTYPE HTML>\n';
	html+='<html><head></head><body style=\"margin:32px;padding:0;text-align:center\">';
	html+='<img alt="maxiGos" src="'+cn.toDataURL("image/png")+'">';
	html+='</body></html>';
	this.w4Iroha.document.open();
	this.w4Iroha.document.write(html);
	this.w4Iroha.document.close();
};

mxG.G.prototype.doImage4Iroha=function()
{
	var aW=this.gobanCnWidth()+64;
	var aH=this.gobanCnHeight()+64;
	this.w4Iroha=window.open('','maxiGos','width='+aW+',height='+aH+',scrollbars=no'); // cannot be in the setTimeout call
	if (!this.img4Iroha)
	{
		this.img4Iroha=new Image();
		this.img4Iroha.scr=0;
		this.img4Iroha.canDraw=0;
		this.img4Iroha.onload=function() {if (this.src) this.canDraw=1;};
		this.img4Iroha.src=this.path+"_sample/iroha/paper.jpg";
	}
	this.doImage4IrohaNext();
};

mxG.G.prototype.createIroha=function()
{
	this.k2n=this.k2n4Iroha;
	this.k2c=this.k2c4Iroha;
	this.drawStone=this.drawStone4Iroha;
	this.drawText=this.drawText4Iroha;
	this.drawGoban=this.drawGoban4Iroha;
	this.doImage=this.doImage4Iroha;
};

}
