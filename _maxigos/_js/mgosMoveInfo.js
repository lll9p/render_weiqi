// maxiGos v6.57 > mgosMoveInfo.js

if (typeof mxG.G.prototype.createMoveInfo=='undefined'){

mxG.Z.fr[" pass"]=" passe";
mxG.Z.fr[" at "]=" en  ";

mxG.G.prototype.updateMoveInfo=function()
{
	// display coordinates of current play
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
