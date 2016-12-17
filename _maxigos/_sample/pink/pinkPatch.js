// maxiGos v6.57 > mgosPinkPatch.js

if (typeof mxG.G.prototype.createPink=='undefined'){

mxG.Z.fr["See the sgf"]="D'après un shicho conçu par Nakayama Noriyuki, modifié pour la présente utilisation. Pour voir le sgf, cliquez ici !";
mxG.Z.en["See the sgf"]="From a shicho designed by Nakayama Noriyuki, modified for this application. To see the sgf, click here!";
if (!mxG.Z.ja) mxG.Z.ja=[];mxG.Z.ja["See the sgf"]="ＳＧＦ";
if (!mxG.Z.zh) mxG.Z.zh=[];mxG.Z.zh["See the sgf"]="ＳＧＦ";
if (!mxG.Z["zh-tw"]) mxG.Z["zh-tw"]=[];mxG.Z["zh-tw"]["See the sgf"]="ＳＧＦ";

mxG.G.prototype.drawStone4Pink=function(cx,nat,d)
{
	var s,r=d/2,fs=0,fw="normal",c="#f69";
	s="♥"; // safari doesn't like "♡" thus better to stroke a plain heart
	cx.strokeStyle=c;
	cx.fillStyle=(nat=="B"?c:"white");
	cx.textBaseline="middle"; // doesn't work in the same way everywhere
	cx.textAlign="center";
	do {cx.font=fw+" "+(fs++)+"px"+" "+"Arial";} while (cx.measureText(s).width<d*0.65);
	cx.lineWidth=2;
	cx.fillText(s,r,r);
	cx.strokeText(s,r,r);
};

mxG.G.prototype.initPink=function()
{
	this.getE("SgfBtn").innerHTML="<span>"+mxG.Z[this.l]["See the sgf"]+"</span>";
};

mxG.G.prototype.createPink=function()
{
	this.drawStone=this.drawStone4Pink;
};

}
