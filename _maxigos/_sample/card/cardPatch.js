// maxiGos v6.57 > mgosCardPatch.js

if (typeof mxG.G.prototype.createCard=='undefined'){

mxG.Z.fr["See the sgf"]="Pour voir le sgf, cliquez ici !";
mxG.Z.en["See the sgf"]="To see the sgf, click here!";
if (!mxG.Z.ja) mxG.Z.ja=[];mxG.Z.ja["See the sgf"]="ＳＧＦ";
if (!mxG.Z.zh) mxG.Z.zh=[];mxG.Z.zh["See the sgf"]="ＳＧＦ";
if (!mxG.Z["zh-tw"]) mxG.Z["zh-tw"]=[];mxG.Z["zh-tw"]["See the sgf"]="ＳＧＦ";

mxG.G.prototype.drawStone4Card=function(cx,nat,d)
{
	var s,r=d/2,fs=0,fw="normal";
	s=this.cardSign; // safari prefer plain spade/heart/diamond/club
	cx.strokeStyle=this.signColor;
	cx.fillStyle=(nat=="B"?this.signColor:"white");
	cx.textBaseline="middle"; // doesn't work in the same way everywhere
	cx.textAlign="center";
	do {cx.font=fw+" "+(fs++)+"px"+" "+"Arial";} while (cx.measureText(s).width<d*0.65);
	cx.lineWidth=2;
	cx.fillText(s,r,r);
	cx.strokeText(s,r,r);
};

mxG.G.prototype.initCard=function()
{
	this.getE("SgfBtn").innerHTML="<span>"+mxG.Z[this.l]["See the sgf"]+"</span>";
};

mxG.G.prototype.createCard=function()
{
	this.drawStone=this.drawStone4Card;
};

}
