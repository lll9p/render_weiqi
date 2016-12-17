// maxiGos v6.57 > mgosSolve.js

if (typeof mxG.G.prototype.createSolve=='undefined'){

mxG.Z.fr["Retry"]="Recommencer tout";
mxG.Z.fr["Undo"]="Reprendre un coup";

mxG.G.prototype.doUndo=function()
{
	var aN=this.cN;
	// if something is strange (case of aN with no move) simplify and go back to the beginning
	if ((aN.Dad==this.rN)||(!aN.P["B"]&&!aN.P["W"])) {this.doRetry();return;}
	// aN has "B" or "W" and his parent is not this.rN
	// undo the last move whatever its color
	aN=aN.Dad;
	if (this.cN.P[this.oC]&&!this.cN.Add)
	{
		if (aN.P[this.uC]) {aN=aN.Dad;} // else extra virtual move
	}
	// else the user placed the last move
	this.backNode(aN);
	this.updateAll();
};

mxG.G.prototype.doRetry=function()
{
	if (this.rN&&this.rN.KidOnFocus())
	{
		this.backNode(this.rN.KidOnFocus());
		this.updateAll();
	}
};

mxG.G.prototype.addExtraPlay=function(nat,x,y,tenuki)
{
	var aN,v=this.xy2s(x,y),bN=this.cN.KidOnFocus(),cN;
	if (bN) this.zN=bN.Clone(null);
	if (tenuki||!bN)
	{
		aN=this.cN.N(nat,v);
		this.cN.Focus=this.cN.Kid.length;
		if (!bN) aN.Add=1;
	}
	else
	{
		aN=this.cN;
		this.zN.P[nat]=[v];
	}
	if (bN)
	{
		this.zN.Dad=aN;
		aN.Kid[aN.Kid.length]=this.zN;
		aN.Focus=aN.Kid.length;
	}
	this.placeNode();
	if (this.hasC("Tree"))
	{
		if (bN) this.initTree();
		else this.addNodeInTree(this.cN);
	}
};

mxG.G.prototype.updateVirtualComment=function(s)
{
	var c,span=s.ucFirst()+"Span";
	c="<span class=\"mx"+span+"\" id=\""+this.n+span+"\">"+this[s+"Message_"+this.l_]+"</span>";
	if (this.hasC("Comment")) this.getE("CommentContentDiv").innerHTML=c;
};

mxG.G.prototype.updateSolveComment=function()
{
	var c,s="",e;
	if (!this.hasC("Comment")) return;
	e=this.getE("CommentDiv");
	if (this.cN.P.BM) e.className="mxCommentDiv mxBM";
	else if (this.cN.P.DO) e.className="mxCommentDiv mxDO";
	else if (this.cN.P.IT) e.className="mxCommentDiv mxIT";
	else if (this.cN.P.TE) e.className="mxCommentDiv mxTE";
	else e.className="mxCommentDiv";
	c=this.getOneComment(this.cN);
	if (c) this.getE("CommentContentDiv").innerHTML=c;
	else
	{
		this.getE("CommentContentDiv").innerHTML="";
		if ((this.cN.Dad==this.rN)&&this["initialMessage_"+this.l_])
			this.updateVirtualComment("initial");
		else if (this.cN.Add&&this["offpathMessage_"+this.l_])
			this.updateVirtualComment("offpath");
		else if (!this.cN.Focus)
		{
			if (this.cN.P[this.uC]&&this["successMessage_"+this.l_]) s="success";
			else if (this.cN.P[this.oC]&&this["failMessage_"+this.l_]) s="fail";
			if (s) this.updateVirtualComment(s);
		}
	} 
};

mxG.G.prototype.doVirtualNext=function()
{
	if (this.cN.Kid.length&&!this.cN.KidOnFocus().P[this.uC])
	{
		this.placeNode();
		this.updateAll();
	}
};

mxG.G.prototype.doSolve=function(a,b)
{
	var x,y,s,aN=this.cN,bN,k=0,km=aN.Kid.length,kz=-1,nat,tenuki=0;
	if (km) do
	{
		bN=aN.Kid[k];
		x=-9;
		y=-9;
		if (bN)
		{
			if (bN.P[this.uC]||(bN.P[this.oC]&&aN.Add))
			{
				s=bN.P[bN.P[this.uC]?this.uC:this.oC][0];
				if (s.length==2)
				{
					x=s.c2n(0);
					y=s.c2n(1);
					// replace B[tt] by B[] and W[tt] by W[] excepted if goban is larger than 19x19
					if ((this.DX<=19)&&(this.DY<=19)&&(x==20)&&(y==20)) {x=0;y=0;}
				}
				else {x=0;y=0;}
			}
			else if ((bN.P[this.oC]&&!aN.Add)&&(kz<0))
			{
				tenuki=1;
				kz=k;
			}
		}
		if ((x==a)&&(y==b))
		{
			aN.Focus=k+1;
			this.placeNode();
			this.updateAll();
			if (this.cN.Kid.length&&!this.cN.KidOnFocus().Add)
			{
				if (this.animatedStoneOn) this.doVirtualNext();
				else setTimeout(this.g+".doVirtualNext()",200);
			}
			return;
		}
		else if (this.specialMoveMatch&&(kz<0))
		{
			switch(this.specialMoveMatch)
			{
				case 1: if (x&&y&&!this.gor.inGoban(x,y)) kz=k;
						break; // match because outside found in sgf
				case 2: if (x&&y&&!this.inView(x,y)) kz=k;
						break; // match because outside or hidden move found in sgf
				case 3: if (!this.inView(x,y)) kz=k;
						break; // match because outside or hidden or pass move found in sgf
			}
		}
		// check all kids anyway
		k++;
	}
	while (k<km);
	// the user didn't find any moves
	nat=this.cN.P[this.uC]?this.oC:this.uC;
	if (this.gor.isValid(nat,a,b))
	{
		kz++;
		if (kz||this.canPlaceExtra)
		{
			// "elsewhere" move information was found in the sgf, or can place variation
			// place user move as is
			aN.Focus=kz; // ok even if !kz
			this.addExtraPlay(nat,a,b,tenuki);
			this.updateAll();
			if (kz && this.cN.Focus)
			{
				if (this.animatedStoneOn) this.doVirtualNext();
				else setTimeout(this.g+".doVirtualNext()",200);
			}
			return;
		}
		else if (this["nowhereMessage_"+this.l_]) this.updateVirtualComment("nowhere");
	}
	else if (this["forbiddenMessage_"+this.l_]) this.updateVirtualComment("forbidden");
	this.plonk();
};

mxG.G.prototype.checkSolve=function(x,y)
{
	var aN=this.cN,bN,k,km=aN.Kid.length;
	if (!this.uC) this.setPl();
	if (km)
	{
		for (k=0;k<km;k++)
		{
			bN=aN.Kid[k];
			if (bN.P[this.uC]||bN.P[this.oC]) {this.doSolve(x,y);return;}
		}
		// no "B" or "W" properties in continuation nodes
		// don't happen if the sgf is "normal"
		// just place onfocus kid then wait for another user click
		this.placeNode();
		this.updateAll();
	}
	else
	{
		if (this.canPlaceExtra) this.doSolve(x,y);
		else
		{
			if (this["endMessage_"+this.l_]) this.updateVirtualComment("end");
			this.plonk(); // sgf end
		}
	}
};

mxG.G.prototype.doClickSolve=function(ev)
{
	if (this.canPlaceSolve)
	{
		var c=this.getC(ev);
		this.checkSolve(c.x,c.y);
	}
};

mxG.G.prototype.doKeydownGobanForSolve=function(ev)
{
	var c;
	if (this.isGobanDisabled()) return;
	if (this.canPlaceSolve)
	{
		c=mxG.GetKCode(ev);
		if ((c==13)||(c==32))
		{
			this.checkSolve(this.xFocus,this.yFocus);
			ev.preventDefault();
		}
	}
};

mxG.G.prototype.initSolve=function()
{
	var el=this.getE("GobanCanvas"),k=this.k;
	el.getMClick=mxG.GetMClick;
	el.addEventListener("click",function(ev){mxG.D[k].doClickSolve(ev);},false);
	if (this.gobanFocus) this.getE("GobanDiv").addEventListener("keydown",function(ev){mxG.D[k].doKeydownGobanForSolve(ev);},false);
};

mxG.G.prototype.updateSolve=function()
{
	if (this.cN.Dad==this.rN)
	{
		if (this.canRetry) this.disableBtn("Retry");
		if (this.canUndo) this.disableBtn("Undo");
	}
	else
	{
		if (this.canRetry) this.enableBtn("Retry");
		if (this.canUndo) this.enableBtn("Undo");
	}
	this.updateSolveComment();
};

mxG.G.prototype.refreshSolve=function()
{
	if (this.adjustSolveWidth) this.adjust("Solve","Width");
};

mxG.G.prototype.createSolve=function()
{
	// set specialMoveMatch parameter to manage tenuki
	if (this.canPlaceSolve===undefined) this.canPlaceSolve=1;
	if (this.canRetry||this.canUndo)
	{
		this.write("<div tabindex=\"-1\" style=\"outline:none;\" class=\"mxSolveDiv\" id=\""+this.n+"SolveDiv\">");
		if (this.canRetry) this.addBtn({n:"Retry",v:this.local("Retry")});
		if (this.canUndo) this.addBtn({n:"Undo",v:this.local("Undo")});
		this.write("</div>");
	}
};

}