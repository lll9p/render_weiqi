// maxiGos v6.57 > mgosPass.js

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
