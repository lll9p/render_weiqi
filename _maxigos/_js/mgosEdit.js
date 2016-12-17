// maxiGos v6.57 > mgosEdit.js

if (typeof mxG.G.prototype.createEdit=='undefined'){

mxG.Z.fr["Selection"]="Sélection";
mxG.Z.fr["Full/partial view"]="Vue partielle/totale";
mxG.Z.fr["Place a move"]="Placer un coup";
mxG.Z.fr["Add/remove a stone"]="Ajouter/retirer une pierre";
mxG.Z.fr["Cut branch"]="Couper une branche";
mxG.Z.fr["Copy branch"]="Copier une branche";
mxG.Z.fr["Paste branch"]="Coller une branche";
mxG.Z.fr["Label"]="Etiquette";
mxG.Z.fr["Mark"]="Marque";
mxG.Z.fr["Circle"]="Cercle";
mxG.Z.fr["Square"]="Carré;";
mxG.Z.fr["Triangle"]="Triangle";
mxG.Z.fr["Numbering"]="Numérotation";
mxG.Z.fr["As in book"]="Comme dans les livres";
mxG.Z.fr["Indices"]="Indices";
mxG.Z.fr["Variation marks"]="Marques sur les variations";
mxG.Z.fr["Variation style"]="Style des variations";
mxG.Z.fr["Marks and labels"]="Marques et étiquettes";
mxG.Z.fr["Header"]="Entête";
mxG.Z.fr["B"]="L";
mxG.Z.fr["I"]="I";
mxG.Z.fr["V"]="V";
mxG.Z.fr["H"]="E";
mxG.Z.fr["S"]="S";
mxG.Z.fr["OK"]="OK";
mxG.Z.fr["Cancel"]="Annuler";
mxG.Z.fr["New (from this point):"]="Nouvelle (à partir de cette position) :";
mxG.Z.fr["Modify"]="Modifier (seulement pour cette partie de l'arbre des coups)";
mxG.Z.fr["Remove"]="Supprimer (seulement pour cette partie de l'arbre des coups)";
mxG.Z.fr["Start numbering with:"]="Numéroter en commençant par :";
mxG.Z.fr["No numbering"]="Ne pas numéroter";
mxG.Z.fr["Good move"]="Bon coup";
mxG.Z.fr["Bad move"]="Mauvais coup";
mxG.Z.fr["Doubtful move"]="Douteux";
mxG.Z.fr["Interesting move"]="intéressant";
mxG.Z.fr["Good for Black"]="Bon pour Noir";
mxG.Z.fr["Good for White"]="Bon pour Blanc";
mxG.Z.fr["Even"]="Équilibré";
mxG.Z.fr["Unclear"]="Pas clair";
mxG.Z.fr["Add turn in Sgf"]="Ajouter le trait dans le Sgf";

if (this.mxG.CanCn())
{

CanvasRenderingContext2D.prototype.dashedLine=function(x1,y1,x2,y2,e)
{
	var dX=x2-x1,dY=y2-y1,da=Math.floor(Math.sqrt(dX*dX+dY*dY)/(e?e:2)),daX=dX/da,daY=dY/da,k=0;
	this.beginPath();
	this.moveTo(x1,y1);
	while (k++<da)
	{
		x1+=daX;
		y1+=daY;
		this[k%2==0?'moveTo':'lineTo'](x1,y1);
	}
	this[k%2==0?'moveTo':'lineTo'](x2,y2);
	this.stroke();
};

}

mxG.G.prototype.setViewFromSelection=function()
{
	var aN,s,xl,yt,xr,yb,exXl,exYt,exXr,exYb,exXls,exYts,exXrs,exYbs;
	if (this.selection)
	{
		xl=((this.editXrs>this.editXls)?this.editXls:this.editXrs);
		yt=((this.editYbs>this.editYts)?this.editYts:this.editYbs);
		xr=((this.editXrs>this.editXls)?this.editXrs:this.editXls);
		yb=((this.editYbs>this.editYts)?this.editYbs:this.editYts);
		if (xl<1) xl=1;
		if (yt<1) yt=1;
		if (xr>this.DX) xr=this.DX;
		if (yb>this.DY) yb=this.DY;
		this.inSelect=0;
		this.unselectView();
	}
	else
	{
		xl=1;
		yt=1;
		xr=this.DX;
		yb=this.DY;
	}
	if ((xl==1)&&(yt==1)&&(xr==this.DX)&&(yb==this.DY)) s="";
	else s=this.xy2s(xl,yt)+":"+this.xy2s(xr,yb);

	aN=this.cN;
	if (aN.P.VW)
	{
		aN.TakeOff("VW",-1);
		if (s) aN.P.VW=[s];
	}
	else aN.P.VW=[s];
	this.updateAll();
};

mxG.G.prototype.selectPoint=function(x,y)
{
	var cx=this.gcx;
	var d=this.d,r=d/2,z=this.z,d2=this.d2,d3=(d2&1?1:0);
	var a=(x-this.xli)*d+z,b=(y-this.yti)*(d+d2)+(d2>>1)+d3+z;
	var dxl=0,dyt=0,dxr=0,dyb=0;
	if (x==this.xl) dxl=z;
	if (y==this.yt) dyt=z;
	if (x==this.xr) dxr=z;
	if (y==this.yb) dyb=z;
	if (x==0) a=a-z;
	if (y==0) {b=b-z;dyb=dyb-d3;}
	if (x==(this.DX+1)) a=a+z;
	if (y==(this.DY+1)) {b=b+z+d3;dyb=dyb-d3;}
	if (this.hasToDrawWholeGoban&&!this.lastSelectLine&&(y>0)&&(y<this.DY)) {dyb=dyb-d3;}
	if (!this.hasToDrawWholeGoban) this.unselectPoint(x,y); // otherwise bad visual effect
	cx.fillStyle=this.lineColor;
	cx.globalAlpha=0.2;
	cx.fillRect(a-dxl,b-(d2>>1)-d3-dyt,d+dxl+dxr,d+d2+d3+dyt+dyb);
	cx.globalAlpha=1;
};

mxG.G.prototype.unselectPoint=function(x,y)
{
	if (this.inView(x,y))
	{
		k=this.xy(x,y);
		this.drawPoint(this.gcx,x,y,this.vNat[k],this.vStr[k]);
	}
	else if (this.indicesOn) this.drawPoint(this.gcx,x,y,"O",this.getIndices(x,y));
};

mxG.G.prototype.unselectTool=function(tool)
{
	this.getE(tool+"Tool").className="mxUnselectedEditTool";
};

mxG.G.prototype.selectTool=function(tool)
{
	this.getE(tool+"Tool").className="mxSelectedEditTool";
};

mxG.G.prototype.superSelectTool=function(tool)
{
	this.getE(tool+"Tool").className="mxSuperSelectedEditTool";
};

mxG.G.prototype.disableTool=function(tool)
{
	if (tool=="Comment") this.getE("CommentToolText").disabled=true;
	else this.getE(tool+"Tool").disabled=true;
};

mxG.G.prototype.enableTool=function(tool)
{
	if (tool=="Comment") this.getE("CommentToolText").disabled=false;
	else this.getE(tool+"Tool").disabled=false;
};

mxG.G.prototype.disableTools=function()
{
	var k,km=this.tools.length;
	for (k=0;k<km;k++) this.disableTool(this.tools[k][0]);
	this.disableTool("Comment");
};

mxG.G.prototype.enableTools=function()
{
	var k,km=this.tools.length;
	for (k=0;k<km;k++) this.enableTool(this.tools[k][0]);
	this.enableTool("Comment");
};

mxG.G.prototype.changeSelectedTool=function(newTool)
{
	if (this.editTool&&(this.editTool!="ShowInfo")&&(this.editTool!="Numbering")) this.unselectTool(this.editTool);
	this.editTool=newTool;
	if ((newTool!="ShowInfo")&&(newTool!="Numbering")) this.selectTool(newTool);
};

mxG.G.prototype.doCut=function()
{
	var aN,SZ,ST;
	if (this.hasC("Menu")) this.toggleMenu("Edit",0);
	this.selectTool("Cut");
	this.zN=this.cN;
	aN=this.zN.Dad;
	this.zN.Dad=null;
	if ((aN==this.rN)&&(aN.Kid.length==1))
	{
		SZ=this.getInfo("SZ");
		ST=this.getInfo("ST");
	}
	aN.Kid.splice(aN.Focus-1,1);
	aN.Focus=aN.Kid.length?1:0;
	if (aN==this.rN)
	{
		if (aN.Focus) aN=aN.Kid[0];
		else
		{
			aN=aN.N("FF",4);
			aN.P.GM=["1"];
			aN.P.CA=["UTF-8"];
			aN.P.SZ=[SZ];
			aN.P.ST=[ST];
		}
	}
	this.backNode(aN);
	if (this.hasC("Tree")) this.initTree();
	this.updateAll();
	setTimeout(this.g+".unselectTool(\"Cut\")",200);
};

mxG.G.prototype.doCopy=function()
{
	if (this.hasC("Menu")) this.toggleMenu("Edit",0);
	this.selectTool("Copy");
	this.zN=this.cN.Clone(null);
	this.zN.Dad=null;
	setTimeout(this.g+".unselectTool(\"Copy\")",200);
};

mxG.G.prototype.doPaste=function()
{
	if (this.hasC("Menu")) this.toggleMenu("Edit",0);
	this.selectTool("Paste");
	if (this.zN)
	{
		if (this.zN.P.SZ) this.cN=this.rN;
		this.zN.Dad=this.cN;
		this.cN.Kid[this.cN.Kid.length]=this.zN;
		this.zN=this.zN.Clone(null);
		this.cN.Focus=this.cN.Kid.length;
		this.backNode((this.cN==this.rN)?this.cN.KidOnFocus():this.cN);
		if (this.hasC("Tree")) this.initTree();
		this.updateAll();
	}
	setTimeout(this.g+".unselectTool(\"Paste\")",200);
};

mxG.G.prototype.doAsInBook=function()
{
	var aN=this.cN,sN=this.rN.KidOnFocus(),exFig=0,newFig,newAsInBookOn=(this.asInBookOn?0:1);
	while (aN!=this.rN)
	{
		if (aN.P.FG) {exFig=parseInt(aN.P.FG[0]);break;}
		aN=aN.Dad;
	}
	if (aN==this.rN) aN=sN;
	newFig=(newAsInBookOn?(exFig|256):(exFig&~256));
	if ((aN==sN)&&!newFig) aN.TakeOff("FG",0);
	else aN.Set("FG",newFig);
	this.updateAll();
};

mxG.G.prototype.doIndices=function()
{
	var aN=this.cN,sN=this.rN.KidOnFocus(),exFig=0,newFig,newIndicesOn=(this.indicesOn?0:1);
	while (aN!=this.rN)
	{
		if (aN.P.FG) {exFig=parseInt(aN.P.FG[0]);break;}
		aN=aN.Dad;
	}
	if (aN==this.rN) aN=sN;
	newFig=newIndicesOn?(exFig&~1):(exFig|1);
	if ((aN==sN)&&!newFig) aN.TakeOff("FG",0);
	else aN.Set("FG",newFig);
	this.updateAll();
};

mxG.G.prototype.doNumberingOK=function()
{
	var aN;
	if (this.getE("NewFigureBox")&&this.getE("NewFigureBox").checked) aN=this.cN;
	else
	{
		aN=this.cN;
		while ((aN.Dad!=this.rN)&&!(aN.P.FG)) aN=aN.Dad;
	}
	if (this.getE("FigureOrNot2Input")&&this.getE("FigureOrNot2Input").checked)
	{
		aN.TakeOff("FG",0);
		aN.TakeOff("PM",0);
		aN.TakeOff("MN",0);
	}
	else
	{
		var newNumberingOn=(this.getE("NumberingOrNot1Input").checked?1:0);
		var newNumWith=parseInt(this.getE("NumWithTextInput").value);
		var newAsInBookOn=(this.getE("AsInBookInput").checked?1:0);
		var newIndicesOn=(this.getE("IndicesInput").checked?1:0);
		var newFigure=((newAsInBookOn?256:0)|(newIndicesOn?0:1));
		if (aN==this.rN.KidOnFocus())
		{
			if (newFigure) aN.Set("FG",newFigure);
			else aN.TakeOff("FG",0);
			if ((newNumWith>1)&&newNumberingOn) aN.Set("MN",newNumWith);
			else aN.TakeOff("MN",0);
			if (newNumberingOn!=1) aN.Set("PM",newNumberingOn);
			else aN.TakeOff("PM",0);
		}
		else
		{
			aN.Set("FG",newFigure);
			aN.Set("PM",newNumberingOn);
			if (newNumberingOn) aN.Set("MN",newNumWith);
			else aN.TakeOff("MN",0);
		}
	}
	if (this.hasC("Tree")) this.hasToDrawTree=this.hasToDrawTree|1;
	this.hideGBox("Numbering");
};

mxG.G.prototype.switchFigureOrNot=function()
{
	var e;
	if (this.getE("NewFigureBox").checked)
	{
		if (e=this.getE("FigureOrNot1P")) e.style.display="none";
		else if (e=this.getE("FigureOrNot2P")) e.style.display="none";
	}
	else
	{
		if (e=this.getE("FigureOrNot1P")) e.style.display="block";
		else if (e=this.getE("FigureOrNot2P")) e.style.display="block";
	}
};

mxG.G.prototype.doNumbering=function()
{
	if (this.gBox=="Numbering") {this.hideGBox("Numbering");return;}
	if (!this.getE("NumberingDiv")) this.createGBox("Numbering");
	var aN=this.cN,s="";
	while ((aN.Dad!=this.rN)&&!aN.P.FG) aN=aN.Dad;
	s+="<div class=\"mxShowContentDiv\">";
	s+="<h1>"+this.local("Numbering")+"</h1>";
	if (aN!=this.cN)
	{
		s+="<div class=\"mxP\"><label for=\""+this.n+"NewFigureBox\">"+this.local("New (from this point):")+" </label>";
		s+="<input type=\"checkbox\" "+"id=\""+this.n+"NewFigureBox\" onclick=\""+this.g+".switchFigureOrNot()\"></div>";
	}
	if ((aN.Dad!=this.rN)&&aN.P.FG) 
	{
		s+="<div class=\"mxP\" id=\""+this.n+"FigureOrNot1P\"><input type=\"radio\" id=\""+this.n+"FigureOrNot1Input\" name=\"figureOrNot\" checked=\"checked\" value=\"1\">";
		s+="<label for=\""+this.n+"FigureOrNot1Input\">"+this.local("Modify")+"</label></div>";
	}
	s+="<div class=\"mxP mxTabNumberingP\">";
	s+="<input type=\"radio\" id=\""+this.n+"NumberingOrNot1Input\" name=\"numberingOrNot\" ";
	s+=(this.numberingOn?"checked=\"checked\" ":"");
	s+="value=\"1\">";
	s+="<label for=\""+this.n+"NumberingOrNot1Input\">"+this.local("Start numbering with:")+" </label>";
	s+="<input type=\"text\" id=\""+this.n+"NumWithTextInput\" size=\"3\" maxlength=\"3\" value=\""+1+"\"><br>";
	s+="<input type=\"radio\" id=\""+this.n+"NumberingOrNot2Input\" name=\"numberingOrNot\" ";
	s+=(!this.numberingOn?"checked=\"checked\" ":"");
	s+="value=\"2\">";
	s+="<label for=\""+this.n+"NumberingOrNot2Input\">"+this.local("No numbering")+"</label><br><br>";
	s+="<input type=\"checkbox\" "+(this.asInBookOn?"checked=\"checked\" ":"")+"id=\""+this.n+"AsInBookInput\"> "+this.local("As in book")+"<br>";
	s+="<input type=\"checkbox\" "+(this.indicesOn?"checked=\"checked\" ":"")+"id=\""+this.n+"IndicesInput\"> "+this.local("Indices")+"<br>";
	s+="</div>";
	if ((aN.Dad!=this.rN)&&aN.P.FG)
	{
		s+="<div class=\"mxP\" id=\""+this.n+"FigureOrNot2P\"><input type=\"radio\" id=\""+this.n+"FigureOrNot2Input\" name=\"figureOrNot\" value=\"2\">";
		s+="<label for=\""+this.n+"FigureOrNot2Input\">"+this.local("Remove")+"</label></div>";
	}
	s+="</div>";
	s+="<div class=\"mxOKDiv\">";
	s+="<button type=\"button\" onclick=\""+this.g+".doNumberingOK()\"><span>"+this.local("OK")+"</span></button>";
	s+="<button type=\"button\" onclick=\""+this.g+".hideGBox('Numbering')\"><span>"+this.local("Cancel")+"</span></button>";
	s+="</div>";
	this.getE("NumberingDiv").innerHTML=s;
	this.showGBox("Numbering");
};

mxG.G.prototype.doVariations=function()
{
	if (this.styleMode&2) this.styleMode-=2;else this.styleMode+=2;
	this.rN.KidOnFocus().Set("ST",this.styleMode&~4);
	this.updateAll();
};

mxG.G.prototype.doStyle=function()
{
	if (this.styleMode&1) this.styleMode-=1;else this.styleMode+=1;
	this.rN.KidOnFocus().Set("ST",this.styleMode&~4);
	this.updateAll();
};

mxG.G.prototype.doPropertySwitch=function(tool)
{
	var z;
	if ((tool!="DO")&&(tool!="IT")) z=2;else z=1;
	if (this.cN.P&&this.cN.P[tool])
	{
		if (((this.cN.P[tool][0]+"")=="1")&&(z>1)) this.cN.P[tool][0]="2";
		else this.cN.TakeOff(tool,0);
	}
	else
	{
		if ((tool=="GB")||(tool=="GW")||(tool=="DM")||(tool=="UC"))
		{
			if ((tool!="GB")&&this.cN.P&&this.cN.P.GB) this.cN.TakeOff("GB",0);
			if ((tool!="GW")&&this.cN.P&&this.cN.P.GW) this.cN.TakeOff("GW",0);
			if ((tool!="DM")&&this.cN.P&&this.cN.P.DM) this.cN.TakeOff("DM",0);
			if ((tool!="UC")&&this.cN.P&&this.cN.P.UC) this.cN.TakeOff("UC",0);
		}
		if ((tool=="TE")||(tool=="BM")||(tool=="DO")||(tool=="IT"))
		{
			if ((tool!="TE")&&this.cN.P&&this.cN.P.TE) this.cN.TakeOff("TE",0);
			if ((tool!="BM")&&this.cN.P&&this.cN.P.BM) this.cN.TakeOff("BM",0);
			if ((tool!="DO")&&this.cN.P&&this.cN.P.DO) this.cN.TakeOff("DO",0);
			if ((tool!="IT")&&this.cN.P&&this.cN.P.IT) this.cN.TakeOff("IT",0);
		}
		this.cN.Set(tool,(z>1)?"1":"");
	}
	this.updateAll();
};

mxG.G.prototype.doPL=function()
{
	if (this.cN.P&&this.cN.P.PL) this.cN.TakeOff("PL",0);
	else this.cN.Set("PL",this.editNextNat);
	this.updateAll();
};

mxG.G.prototype.doEditTool=function(newTool)
{
	if (this.gBox) {if (newTool==this.gBox) this.hideGBox(newTool);return;}
	if (newTool=="ShowInfo") {this.doInfo();return;}
	if (newTool=="Numbering") {this.doNumbering();return;}
	if (newTool=="Cut") {this.doCut();return;}
	if (newTool=="Copy") {this.doCopy();return;}
	if (newTool=="Paste") {this.doPaste();return;}
	if (newTool=="AsInBook") {this.doAsInBook();return;}
	if (newTool=="Indices") {this.doIndices();return;}
	if (newTool=="Variations") {this.doVariations();return;}
	if (newTool=="Style") {this.doStyle();return;}
	if ((newTool=="GB")
	  ||(newTool=="GW")
	  ||(newTool=="DM")
	  ||(newTool=="UC")
	  ||(newTool=="TE")
	  ||(newTool=="BM")
	  ||(newTool=="DO")
	  ||(newTool=="IT")) {this.doPropertySwitch(newTool);return;}
	if (newTool=="PL") {this.doPL();return;}
	if (newTool=="View")
	{
		this.selectTool(newTool);
		this.setViewFromSelection();
		setTimeout(this.g+".unselectTool(\""+newTool+"\")",200);
		if (this.editTool=="Select") this.changeSelectedTool("Play");
		return;
	}
	if (this.selection) {this.inSelect=0;this.unselectView();}
	if ((newTool=="Play")&&(this.editTool=="Play"))
	{
		if (this.editNextNat=="B") {this.editNextNat="W";this.setStoneTool("W");}
		else if (this.editNextNat=="W") {this.editNextNat="B";this.setStoneTool("B");}
		return;
	}
	if ((newTool=="Setup")&&(this.editTool=="Setup"))
	{
		if (this.editAX=="AB") {this.editAX="AW";this.setStoneTool("AW");}
		else if (this.editAX=="AW") {this.editAX="AB";this.setStoneTool("AB");}
		return;
	}
	this.changeSelectedTool(newTool);
};

mxG.G.prototype.doEditCommentTool=function()
{
	var s=this.getE("CommentToolText").value;
	if (s) this.cN.Set("C",s);else this.cN.TakeOff("C",0);
};

mxG.G.prototype.getNextEditNat=function()
{
	var aN,k,km;
	
	// get color from PL
	aN=this.cN;
	if (aN.P.PL) return aN.P.PL[0];

	// get color of cN.KidOnFocus()
	aN=this.cN.KidOnFocus();
	if (aN)
	{
		if (aN.P.B) return "B";
		if (aN.P.W) return "W";
	}
	
	// get opposite color of cN
	aN=this.cN;
	if (aN.P.B) return "W";
	if (aN.P.W) return "B";

	// get opposite color if cN has AB and no AW (handicap game?) or AW and no AB, 
	if (aN.P.AB&&!aN.P.AW) return "W";
	else if (aN.P.AW&&!aN.P.AB) return "B";

	// get color of cN children
	km=this.cN.Kid.length;
	for (k=0;k<km;k++)
	{
		aN=this.cN.Kid[k];
		if (aN.P.B) return "B";
		if (aN.P.W) return "W";
	}

	// get opposite color of cN brothers
	km=this.cN.Dad.Kid.length;
	for (k=0;k<km;k++)
	{
		aN=this.cN.Dad.Kid[k];
		if (aN.P.B) return "W";
		if (aN.P.W) return "B";
	}

	// unable to decide who will play
	return "B";
};

mxG.G.prototype.addPlay=function(p,x,y)
{
	var aN,v=this.xy2s(x,y);
	aN=this.cN.N(p,v);
	aN.Add=1;
	this.cN.Focus=this.cN.Kid.length;
	if (this.playOn)
	{
		if (p=="B") {this.blackID=this.scribeID;this.blackName=this.scribeName;this.rN.KidOnFocus().Set("PB",this.scribeName);}
		if (p=="W") {this.whiteID=this.scribeID;this.whiteName=this.scribeName;this.rN.KidOnFocus().Set("PW",this.scribeName);}
	}
};

mxG.G.prototype.checkEdit=function(a,b)
{
	var nextNat=this.editNextNat;
	if (!nextNat) {this.plonk();return;}
	if (a||b)
	{
		if ((this.checkRulesOn==2)&&!this.gor.isValid(nextNat,a,b)) {this.plonk();return;}
		if ((this.checkRulesOn==1)&&this.gor.isOccupied(a,b)) {this.plonk();return;}
	}
	var s,aN,x,y,nat,k=0,km=this.cN.Kid.length;
	while (k<km)
	{
		aN=this.cN.Kid[k];
		x=-1;
		y=-1;
		nat="O";
		s="";
		if (aN.P.B) {s=aN.P.B[0];nat="B";}
		else if (aN.P.W) {s=aN.P.W[0];nat="W";}
		if (s.length==2) {x=s.c2n(0);y=s.c2n(1);}
		else if (s.length==0) {x=0;y=0;}
		
		if ((x==a)&&(y==b)&&(nat==nextNat)) // there is already a nextNat move on (a,b) thus place it
		{
			this.cN.Focus=k+1;
			this.backNode(this.cN); // why?
			this.placeNode();
			this.updateAll();
			return;
		}
		else k++;
	}
	// (a,b) was not found in the sgf thus add it
	this.addPlay(nextNat,a,b);
	this.placeNode();
	if (this.hasC("Tree")) this.addNodeInTree(this.cN);
	this.updateAll();
};

mxG.G.prototype.doClickEditPlay=function(x,y)
{
	if (!this.inView(x,y)) {this.plonk();return;}
	this.checkEdit(x,y);
};

mxG.G.prototype.doClickEditSetup=function(x,y)
{
	// if a B or W is in cN, add AX values on a new cN kids
	// else add/remove AX values on cN
	var aN,p,v,k,km,kp;
	var AX=["AB","AW","AE"];
	if (!this.inView(x,y)) return;
	if (this.gor.getBanNat(x,y)!="E") p="AE";else p=this.editAX;
	v=this.xy2s(x,y);
	if (this.cN.P.B||this.cN.P.W)
	{
		aN=this.cN.N(p,v);
		this.cN.Focus=this.cN.Kid.length;
		this.placeNode();
		if (this.hasC("Tree")) this.initTree();
		this.updateAll();
		this.changeSelectedTool("Setup");
	}
	else
	{
		aN=this.cN;
		// remove AX[x y] if any
		for (kp=0;kp<3;kp++)
		{
			if (aN.P[AX[kp]])
			{
				km=aN.P[AX[kp]].length;
				for (k=0;k<km;k++) if (aN.P[AX[kp]][k]==v) break;
				if (k<km) aN.TakeOff(AX[kp],k);
			}
		}
		// add p[x y] only if it changes something
		this.backNode(aN.Dad);
		aExNat=this.gor.getBanNat(x,y);
		if (aExNat!=p.substr(1,1))
		{
			if (aN.P[p]) aN.P[p].push(v);
			else aN.P[p]=[v];
		}
		this.placeNode(aN);
		this.updateAll();
	}
};

mxG.G.prototype.selectGobanArea=function(x,y)
{
	if ((this.editTool=="Select")&&this.inSelect&&((x!=this.editXrs)||(y!=this.editYbs)))
	{
		// do the same if indicesOn or not
		var id,i,j,xl,yt,xr,yb,xl1,yt1,xr1,yb1,xl2,yt2,xr2,yb2;
		xl1=Math.min(this.editXls,this.editXrs);
		yt1=Math.min(this.editYts,this.editYbs);
		xr1=Math.max(this.editXls,this.editXrs);
		yb1=Math.max(this.editYts,this.editYbs);
		if (this.editXls==0) this.editXrs=((x==0)?1:((x==this.DX)?this.DX+1:x));
		else if (this.editXls==(this.DX+1))  this.editXrs=((x==1)?0:((x==(this.DX+1))?this.DX:x));
		else  this.editXrs=((x==1)?0:((x==this.DX)?this.DX+1:x));
		if (this.editYts==0) this.editYbs=((y==0)?1:((y==this.DY)?this.DY+1:y));
		else if (this.editYts==(this.DY+1))  this.editYbs=((y==1)?0:((y==(this.DY+1))?this.DY:y));
		else  this.editYbs=((y==1)?0:((y==this.DY)?this.DY+1:y));
		xl2=Math.min(this.editXls,this.editXrs);
		yt2=Math.min(this.editYts,this.editYbs);
		xr2=Math.max(this.editXls,this.editXrs);
		yb2=Math.max(this.editYts,this.editYbs);
		xl=Math.min(xl1,xl2);
		yt=Math.min(yt1,yt2);
		xr=Math.max(xr1,xr2);
		yb=Math.max(yb1,yb2);
		for (i=xl;i<=xr;i++)
			for (j=yt;j<=yb;j++)
				if ((i>=xl2)&&(i<=xr2)&&(j>=yt2)&&(j<=yb2))
				{
					if ((i<xl1)||(i>xr1)||(j<yt1)||(j>yb1)) this.selectPoint(i,j);
				}
				else if ((i>=xl1)&&(i<=xr1)&&(j>=yt1)&&(j<=yb1)) this.unselectPoint(i,j);
	}
};

mxG.G.prototype.unselectView=function()
{
	var i,j,xl,yt,xr,yb;
	this.selection=0;
	xl=Math.max(this.xli,Math.min(this.editXls,this.editXrs));
	yt=Math.max(this.yti,Math.min(this.editYts,this.editYbs));
	xr=Math.min(this.xri,Math.max(this.editXls,this.editXrs));
	yb=Math.min(this.ybi,Math.max(this.editYts,this.editYbs));
	for (i=xl;i<=xr;i++)
		for (j=yt;j<=yb;j++)
			this.unselectPoint(i,j);
};

mxG.G.prototype.selectView=function()
{
	var i,j,xl,yt,xr,yb;
	this.selection=1;
	xl=Math.max(this.xli,Math.min(this.editXls,this.editXrs));
	yt=Math.max(this.yti,Math.min(this.editYts,this.editYbs));
	xr=Math.min(this.xri,Math.max(this.editXls,this.editXrs));
	yb=Math.min(this.ybi,Math.max(this.editYts,this.editYbs));
	for (i=xl;i<=xr;i++)
		for (j=yt;j<=yb;j++)
		{
			if (j==yb) this.lastSelectLine=1;
			this.selectPoint(i,j);
			if (j==yb) this.lastSelectLine=0;
		}
};

mxG.G.prototype.doClickEditMarkOrLabel=function(x,y,m)
{
	var v=0,k,km,kp,aLB,bLB="",MX=["MA","TR","SQ","CR","LB"];
	if (!this.inView(x,y)) return;
	v=this.xy2s(x,y);
	if (m=="LB")
	{
		aLB=this.getE("LabelTool").value;
		v+=(":"+aLB);
	}
	for (kp=0;kp<5;kp++)
	{
		if (this.cN.P[MX[kp]])
		{
			km=this.cN.P[MX[kp]].length;
			for (k=0;k<km;k++) if (this.cN.P[MX[kp]][k].substr(0,2)==v.substr(0,2)) break;
			if ((k==km)&&(MX[kp]==m))
			{
				if ((m=="LB")&&(aLB.length==1)&&aLB.match(/[A-Za-z1-9]/))
				{
					if (aLB=="Z") bLB="A";
					else if (aLB=="z") bLB="a";
					else if (aLB=="9") bLB="1";
					else bLB=String.fromCharCode(aLB.charCodeAt(0)+1);
				}
				this.cN.P[m][km]=v;
			}
			else if (k<km)
			{
				if (MX[kp]=="LB") bLB=this.cN.P[MX[kp]][k].substr(3);
				this.cN.TakeOff(MX[kp],k);
			}
		}
		else if (MX[kp]==m)
		{
			if ((m=="LB")&&(aLB.length==1)&&aLB.match(/[A-Za-z1-9]/))
			{
				if (aLB=="Z") bLB="A";
				else if (aLB=="z") bLB="a";
				else if (aLB=="9") bLB="1";
				else bLB=String.fromCharCode(aLB.charCodeAt(0)+1);
			}
			this.cN.P[m]=[v];
		}
	}
	if ((m=="LB")&&bLB) this.getE("LabelTool").value=bLB;
	this.backNode(this.cN);
	this.updateAll();
};

mxG.G.prototype.doMouseMoveEdit=function(ev)
{
	if ((this.editTool=="Select")&&(this.inSelect==1)&&!mxG.IsAndroid)
	{
		if (ev.preventDefault) ev.preventDefault();
		var c=this.getC(ev);
		this.selectGobanArea(c.x,c.y);
	}
};

mxG.G.prototype.doMouseDownEditSelect=function(x,y)
{
	if (this.inSelect==1)
	{
		if (mxG.IsAndroid()) this.selectGobanArea(x,y);
		this.inSelect=0;
	}
	else
	{
		this.inSelect=1;
		if (this.selection) this.unselectView();
		this.editXls=((x==1)?0:((x==this.DX)?this.DX+1:x));
		this.editYts=((y==1)?0:((y==this.DY)?this.DY+1:y));
		this.editXrs=((x==(this.DX+1))?this.DX:((x==0)?1:x));
		this.editYbs=((y==(this.DY+1))?this.DY:((y==0)?1:y));
		this.selectView();
		this.selectGobanArea(x,y);
	}
};

mxG.G.prototype.doMouseDownEdit=function(ev)
{
	if ((this.editTool=="Select")&&!mxG.IsAndroid)
	{
		var c=this.getC(ev);
		this.doMouseDownEditSelect(c.x,c.y);
	}
};

mxG.G.prototype.doMouseUpEditSelect=function(x,y)
{
	var xo,yo,x1,y1;
	if (this.editXls==0) xo=1;else if (this.editXls==(this.DX+1)) xo=this.DX;else xo=this.editXls;
	if (this.editYts==0) yo=1;else if (this.editYts==(this.DY+1)) yo=this.DY;else yo=this.editYts;
	if (x==0) x1=1;else if (x==(this.DX+1)) x1=this.DX;else x1=x;
	if (y==0) y1=1;else if (x==(this.DY+1)) y1=this.DY;else y1=y;
	if ((xo!=x1)&&(yo!=y1)) this.inSelect=0;
};

mxG.G.prototype.doMouseUpEdit=function(ev)
{
	if ((this.editTool=="Select")&&!mxG.IsAndroid)
	{
		var c=this.getC(ev);
		this.doMouseUpEditSelect(c.x,c.y);
	}
};

mxG.G.prototype.doMouseOutEdit=function(ev)
{
	if ((this.editTool=="Select")&&!mxG.IsAndroid) this.inSelect=0;
};

mxG.G.prototype.doKeydownSelect=function(x,y)
{
	var xo,yo,x1,y1;
	if (this.inSelect==2) this.inSelect=0;
	else
	{
		this.inSelect=2;
		if (this.selection) this.unselectView();
		this.editXls=((x==1)?0:((x==this.DX)?this.DX+1:x));
		this.editYts=((y==1)?0:((y==this.DY)?this.DY+1:y));
		this.editXrs=((x==(this.DX+1))?this.DX:((x==0)?1:x));
		this.editYbs=((y==(this.DY+1))?this.DY:((y==0)?1:y));
		this.selectView();
		this.selectGobanArea(x,y);
	}
};

mxG.G.prototype.doXYEdit=function(x,y)
{
	switch(this.editTool)
	{
		case "Play": this.doClickEditPlay(x,y);break;
		case "Setup": this.doClickEditSetup(x,y);break;
		case "Mark": this.doClickEditMarkOrLabel(x,y,"MA");break;
		case "Triangle": this.doClickEditMarkOrLabel(x,y,"TR");break;
		case "Circle": this.doClickEditMarkOrLabel(x,y,"CR");break;
		case "Square": this.doClickEditMarkOrLabel(x,y,"SQ");break;
		case "Label": this.doClickEditMarkOrLabel(x,y,"LB");break;
		case "Select": if (mxG.IsAndroid) this.doMouseDownEditSelect(x,y);break;
	}
};

mxG.G.prototype.doClickEdit=function(ev)
{
	if (this.canPlaceEdit)
	{
		var c=this.getC(ev),x=c.x,y=c.y;
		this.doXYEdit(x,y);
	}
};

mxG.G.prototype.doKeydownGobanForEdit=function(ev)
{
	if (this.gBox&&(this[gBox+"Parent"]=="Goban")) return;
	if (this.canPlaceEdit)
	{
		if (mxG.GetKCode(ev)==13)
		{
			if (this.editTool=="Select") this.doKeydownSelect(this.xFocus,this.yFocus);
			else this.doXYEdit(this.xFocus,this.yFocus);
		}
	}
};

mxG.G.prototype.toolSpacing=function()
{
	var el=this.getE("PlayTool");
	return mxG.GetPxStyle(el,"marginLeft")+mxG.GetPxStyle(el,"marginRight");
};

mxG.G.prototype.toolBorders=function()
{
	var el=this.getE("PlayTool");
	return mxG.GetPxStyle(el,"borderLeftWidth")+mxG.GetPxStyle(el,"borderRightWidth");
};

mxG.G.prototype.toolSize=function()
{
	return (((this.d*7)>>3)<<1)+1;
};

mxG.G.prototype.toolBarWidth=function()
{
	var n=(this.toolBarLines?this.toolBarLines:this.extraEditToolsOn?3:2);
	return (Math.ceil(this.tools.length/n))*(this.Ets+this.toolBorders()+this.toolSpacing());
};

mxG.G.prototype.drawToolStone=function(cx,nat,d)
{
	var a=this.et,b=2*a;
	if ((nat=="B")||(nat=="W")) cx.drawImage(this.imgBig[nat],a,a,d-b,d-b);
	else
	{
		var img1=((nat=="AB")?this.imgBig.B:this.imgBig.W),
			img2=((nat=="AB")?this.imgBig.W:this.imgBig.B);
		var w1=img1.width,h1=img1.height,w2=img2.width,h2=img2.height;
		cx.drawImage(img1,0,0,w1/2,h1,a,a,d/2-a,d-b);
		cx.drawImage(img2,w2/2,0,w2/2,h2,d/2,a,d/2-a,d-b);
	}
};

mxG.G.prototype.drawToolSelect=function(cx,x,y,d)
{
	cx.dashedLine(x+(d>>2)-0.5,y+(d>>2)-0.5,x+(d>>2)-0.5,y+d-(d>>2)+0.5,2);
	cx.dashedLine(x+(d>>2)-0.5,y+d-(d>>2)+0.5,x+d-(d>>2)+0.5,y+d-(d>>2)+0.5,2);
	cx.dashedLine(x+d-(d>>2)+0.5,y+d-(d>>2)+0.5,x+d-(d>>2)+0.5,y+(d>>2)-0.5,2);
	cx.dashedLine(x+d-(d>>2)+0.5,y+(d>>2)-0.5,x+(d>>2)-0.5,y+(d>>2)-0.5,2);
};

mxG.G.prototype.drawToolView=function(cx,x,y,d)
{
	cx.strokeRect(x+(d>>2)-0.5,y+(d>>2)-0.5,d-((d>>2)<<1)+1,d-((d>>2)<<1)+1);
	cx.strokeRect(x+(d>>1)-0.5,y+(d>>2)-0.5,d-(d>>1)-(d>>2)+1,d-(d>>1)-(d>>2)+1);
};

mxG.G.prototype.setStoneTool=function(nat)
{
	if (!this.imgBig.B.canDraw||!this.imgBig.W.canDraw) {setTimeout(this.g+".setStoneTool(\""+nat+"\")",100);return;}
	var tool,d=this.Ets,cn,cx;
	if ((nat=="B")||(nat=="W")) tool="Play";else tool="Setup";
	cn=this.getE(tool+"ToolCn");
	cn.width=d;
	cn.height=d;
	cx=cn.getContext("2d");
	cx.strokeStyle="black";
	this.drawToolStone(cx,nat,d);
};

mxG.G.prototype.drawCanvasTool=function(tool,pos)
{
	var d=this.Ets,el=this.getE(tool+"Tool"),cn=this.getE(tool+"ToolCn"),cx=cn.getContext("2d"),c=mxG.GetStyle(cn,"color");
	el.style.height=(d+this.toolBorders())+"px";
	el.style.width=(d+this.toolBorders())+"px";
	cn.width=d;
	cn.height=d;
	cx.fillStyle=c;
	cx.strokeStyle=c;
	cx.clearRect(0,0,d,d);
	switch(tool)
	{
		case "Select": this.drawToolSelect(cx,0,0,d);break;
		case "View": this.drawToolView(cx,0,0,d);break;
		case "Play": this.drawToolStone(cx,this.editNextNat,d);break;
		case "Setup": this.drawToolStone(cx,this.editAX,d);break;
		case "Mark": this.drawMark(cx,0,0,d);break;
		case "Triangle": this.drawTriangle(cx,0,0,d);break;
		case "Circle": this.drawCircle(cx,0,0,d,d/4);break;
		case "Square": this.drawSquare(cx,0,0,d);break;
		case "Numbering": this.drawToolStone(cx,"W",d);this.drawText(cx,2,2,d-4,"5",{});break;
		case "AsInBook": this.drawText(cx,2,2,d-4,this.local("B"),{});break;
		case "Indices": this.drawText(cx,2,2,d-4,this.local("I"),{});break;
		case "Variations": this.drawText(cx,2,2,d-4,this.local("V"),{});break;
		case "Style": this.drawText(cx,2,2,d-4,this.local("S"),{});break;
		case "ShowInfo": this.drawText(cx,2,2,d-4,this.local("H"),{});break;
		case "GB": this.drawText(cx,2,2,d-4,this.local("●+"),{});break;
		case "GW": this.drawText(cx,2,2,d-4,this.local("○+"),{});break;
		case "DM": this.drawText(cx,2,2,d-4,this.local("="),{});break;
		case "UC": this.drawText(cx,2,2,d-4,this.local("~"),{});break;
		case "TE": this.drawText(cx,2,2,d-4,this.local("!"),{});break;
		case "BM": this.drawText(cx,2,2,d-4,this.local("?"),{});break;
		case "DO": this.drawText(cx,2,2,d-4,this.local("?!"),{});break;
		case "IT": this.drawText(cx,2,2,d-4,this.local("!?"),{});break;
		case "PL": this.drawText(cx,2,2,d-4,this.local("T"),{});break;
	}
};

mxG.G.prototype.drawImageTool=function(tool,pos)
{
	var el=this.getE(tool+"Tool"),im=this.getE(tool+"ToolImg"),d=this.Ets;
	el.style.height=(d+this.toolBorders())+"px";
	el.style.width=(d+this.toolBorders())+"px";
	im.height=d;
	im.width=d;
};

mxG.G.prototype.drawInputTool=function(tool,pos)
{
	var el=this.getE(tool+"Tool"),d=this.Ets,fs=1;
	el.style.height=d+"px";
	el.style.width=d+"px";
	el.style.fontSize=fs+"px";
	while ((fs<99)&&(d/mxG.GetPxStyle(el,"fontSize")>1.8)) {fs++;el.style.fontSize=fs+"px";}
	while ((fs>2)&&(d/mxG.GetPxStyle(el,"fontSize")<1.6)) {fs--;el.style.fontSize=fs+"px";}
};

mxG.G.prototype.drawEditTools=function()
{
	if (!this.imgBig.B.canDraw||!this.imgBig.W.canDraw) {setTimeout(this.g+".drawEditTools()",100);return;}
	var k,km=this.tools.length,t;
	this.Ets=this.toolSize();
	this.exEts=this.Ets;
	this.getE("EditToolBarDiv").style.maxWidth=this.toolBarWidth()+"px";
	for (k=0;k<km;k++)
	{
		t=this.tools[k][0];
		switch(this.tools[k][1])
		{
			case "canvas": this.drawCanvasTool(t,k);break;
			case "img": this.drawImageTool(t,k);break;
			case "input": this.drawInputTool(t,k);break;
		}
	}
};

mxG.G.prototype.initEdit=function()
{
	if (this.editXls===undefined) this.editXls=((this.xl==1)?0:this.xl);
	if (this.editYts===undefined) this.editYts=((this.yt==1)?0:this.yt);
	if (this.editXrs===undefined) this.editXrs=((this.xr==this.DX)?this.DX+1:this.xr);
	if (this.editYbs===undefined) this.editYbs=((this.yb==this.DY)?this.DY+1:this.yb);
	this.editAX="AB";
	this.editNextNat="B";
	this.drawEditTools();
	this.getE("CommentToolText").value="";
	if (!this.editTool) this.changeSelectedTool("Play");
	this.pN=this.cN; // pN: previous node

	var el=this.getE("GobanCanvas"),k=this.k;
	el.getMClick=mxG.GetMClick;
	el.addEventListener("click",function(ev){mxG.D[k].doClickEdit(ev);},false);
	el.addEventListener("mousemove",function(ev){mxG.D[k].doMouseMoveEdit(ev);},false);
	el.addEventListener("mouseup",function(ev){mxG.D[k].doMouseUpEdit(ev);},false);
	el.addEventListener("mousedown",function(ev){mxG.D[k].doMouseDownEdit(ev);},false);
	el.addEventListener("mouseout",function(ev){mxG.D[k].doMouseOutEdit(ev);},false);
	if (this.gobanFocus) this.getE("GobanDiv").addEventListener("keydown",function(ev){mxG.D[k].doKeydownGobanForEdit(ev);},false);
};

mxG.G.prototype.selectDouble=function(tool)
{
	if (this.cN.P&&this.cN.P[tool])
	{
		if ((this.cN.P[tool][0]+"")=="2") this.superSelectTool(tool);
		else this.selectTool(tool);
	}
	else this.unselectTool(tool);
};

mxG.G.prototype.selectSingle=function(tool)
{
	if (this.cN.P&&this.cN.P[tool]) this.selectTool(tool);else this.unselectTool(tool);
};

mxG.G.prototype.updateEdit=function()
{
	if (this.gBox)
	{
		this.disableTools();
		if ((this.gBox=="Numbering")||(this.gBox=="ShowInfo")) this.enableTool(this.gBox);
	}
	else this.enableTools();
	this.editNextNat=this.getNextEditNat();
	this.setStoneTool(this.editNextNat);
	if (this.pN!=this.cN)
	{
		this.getE("LabelTool").value=this.getE("LabelTool").value.match(/^([a-z])$/)?"a":"A";
		this.changeSelectedTool("Play");
		this.pN=this.cN;
	}
	if (this.indicesOn) this.selectTool("Indices");else this.unselectTool("Indices");
	if (this.styleMode&2) this.unselectTool("Variations");else this.selectTool("Variations");
	if (this.styleMode&1) this.unselectTool("Style");else this.selectTool("Style");
	if (this.asInBookOn) this.selectTool("AsInBook");else this.unselectTool("AsInBook");
	if (this.extraEditToolsOn)
	{
		this.selectDouble("GB");
		this.selectDouble("GW");
		this.selectDouble("DM");
		this.selectDouble("UC");
		this.selectDouble("TE");
		this.selectDouble("BM");
		this.selectSingle("DO");
		this.selectSingle("IT");
		this.selectSingle("PL");
	}
	this.getE("CommentToolText").value=this.cN.P.C?this.cN.P.C[0]:"";
};

mxG.G.prototype.refreshEdit=function()
{
	if (this.toolSize()!=this.exEts) this.drawEditTools();
};

mxG.G.prototype.doKeydownLabel=function(ev)
{
	if (mxG.GetKCode(ev)==13) this.changeSelectedTool("Label");
};

mxG.G.prototype.createTool=function(a)
{
	// better for accessibility to have button or input as tool
	var s=" title=\""+this.local(a[2])+"\"",id=this.n+a[0]+"Tool";
	s+=" class=\"mxUnselectedEditTool\"";
	s+=" onclick=\""+this.g+".doEditTool('"+a[0]+"')\"";
	s+=" id=\""+id+"\"";
	switch (a[1])
	{
		case "canvas":s="<button "+s+"><canvas width=\"0\" height=\"0\" id=\""+id+"Cn\"></canvas></button>";break;
		case "img":s="<button "+s+"><img id=\""+id+"Img\" width=\"0\" height=\"0\" "+" src=\""+this[a[0].toLowerCase()+"Img"]+"\"></button>";break;
		case "input":s="<input "+s+" onkeydown=\""+this.g+".doKeydownLabel(event)\""+" type=\"text\" value=\"A\">";break;
	}
	this.write(s);
};

mxG.G.prototype.createEdit=function()
{
	var k=0,km;
	this.canPlaceEdit=1;
	this.et=1; // padding arround canvas tool
	this.zN=null; // cut/copy/paste buffer
	this.cutImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gYSEisqI9n+6gAAA3NJREFUaN7t2U+I1VUUB/DPnTfWIkJKMBFDm4IKoTYuUkgKAs1cOFEbK1sZ/VkELaIWQUQFgdRALYoWQUSLoiASLIJWNaGDlkqGVELkoqKhGKzE+XPbnDf8uv3em+f80Tfw+8Hl3Xt/93fv+d7zPfecc1/KOVvOz4Bl/jQAGgANgAZAA2BBz2BdZ0ppACmaOec8068A0nL3xIM1u78Sj2EHWvga+3LOp+J9yv2EOuc8W7AVE5jG0RD+LDIeqY7tl1IVfl0IegLXFf2H4t2uvgOAgai8EkJuifYgVkR9NX7B2EUQsIVWNwCtqBzGN1FfUTPw2QDYWmQBB9uHSbSHMIx38GOsOYMx7O0G4Bh+iHp1wvZJ9UxMNrBEOz2M1/FHrNOpHO5EoZEYsLkUPuqf4MAiC70BL+BIIeQ5TBV9M/gSuzsZ8VAMPImbi4Xui3ebaoRIwdPUicNFez3ux8Ga3Z3GZCH0CezDUNdTKCZ/oPLx23gaH1X6Pse94SPuwjXnsds7Q8vjc1Akx5gR7Oz5GK0sdAveLyacDLW2d+mfqE/gO7xcp52K8R+qmW+6RvCDoZ313bTYFUANNQZqyo14CqOFAKPYhtvwHv6uoci5ou8YnseGBTmyBRjioz1Qos3navvd0iAvKICq4eLBgh5tipRCnwo7W1X6gvnKMa98IKWUimBwvMc840pcizVd5px/MDdPTeyIMON8KfRZRL0bl4xCsZOzhhx9K3EHngzH0hboTJxet2NL1P+qATFZOKlx7Mc9uHTBAELNz4UDqS5+tjj6psLtf4yHu2zC43E6nSm+narR0gRexEZcXmxkbQjzn4wspXQrDuCyCB2+CA+9HWtj2BP4Cb/j25zzeI92sxl3h0O7oYdPRvEh9uecT/aa0EzEOb296F+LryI/7hpNdqBhKjS8u8a5VSlW1fRv+BR3zpUPvBQfDHcI5m6KyVZfpGAu41e8VdBrNpw+ip87eeX4PY5X2zu7yJHpLrzRIcSoljFc1SmhORL1SzoschrfL9T5zJHQXI89wf/xQvCHulHotTgp1pQpZRGpjiyFBuaIx1q9JPVXV5BuKibaU+Hkur68lQhBt1VUdjzK6Wj/ia39divxv5u5lNIV2BuecVVY/gd4M+c80VwtXuDL3dSmVL9e8Kbmb9YGQAOgAdAAaAAs5+dfpTbEtaHP/JcAAAAASUVORK5CYII=";
	this.copyImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAfklEQVRoge2T2w3AIBDDsv/S7QgF7rhXbYk/RGIpSAAAcJHH+YSDgBCwMUog843U8DIC7SeEQHB3aTM8peAXowR2JlJmeghUEli5i8BNgdMJeWS7PPJbgfYTQsAicEqZP5AZXkag/YQQCO4uOYUjYGHUhBAI7i4ZyyIAAADLvGyYfZ+H/TacAAAAAElFTkSuQmCC";
	this.pasteImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAkElEQVRoge3UQQqAMAxE0d7/0nUvQYoZO435H1y4afogOgbREc3gKVN0+VIIAO5KAZ4uu/pYA+C68P1dAdgC+g1gBu8ZwLaV+mqQBZAdavmoFStj/Su1AxxXW8AxawYAAIA8QDFbckhbQPkVAuAGKGZLDmkLKL9CANwAxWzJISUBiuHWFXobgAEgV3kAEdFaF8ttHg2WkXOyAAAAAElFTkSuQmCC";
	this.inSelect=0;
	this.selection=0;
	this.editTool=0;
	this.write("<div class=\"mxEditDiv\" id=\""+this.n+"EditDiv\">");
	this.write("<div tabindex=\"-1\" style=\"outline:none;\" class=\"mxEditToolBarDiv\" id=\""+this.n+"EditToolBarDiv\">");
	this.tools=[];
	this.tools[k]=["Select","canvas","Selection"];k++;
	this.tools[k]=["View","canvas","Full/partial view"];k++;
	this.tools[k]=["Play","canvas","Place a move"];k++;
	this.tools[k]=["Setup","canvas","Add/remove a stone"];k++;
	this.tools[k]=["Cut","img","Cut branch"];k++;
	this.tools[k]=["Copy","img","Copy branch"];k++;
	this.tools[k]=["Paste","img","Paste branch"];k++;
	this.tools[k]=["Numbering","canvas","Numbering"];k++;
	this.tools[k]=["ShowInfo","canvas","Header"];k++;
	this.tools[k]=["Label","input","Label"];k++;
	this.tools[k]=["Mark","canvas","Mark"];k++;
	this.tools[k]=["Circle","canvas","Circle"];k++;
	this.tools[k]=["Square","canvas","Square"];k++;
	this.tools[k]=["Triangle","canvas","Triangle"];k++;
	this.tools[k]=["AsInBook","canvas","As in book"];k++;
	this.tools[k]=["Indices","canvas","Indices"];k++;
	this.tools[k]=["Variations","canvas","Variation marks"];k++;
	this.tools[k]=["Style","canvas","Variation style"];k++;
	if (this.extraEditToolsOn=1)
	{
		this.tools[k]=["GB","canvas","Good for Black"];k++;
		this.tools[k]=["GW","canvas","Good for White"];k++;
		this.tools[k]=["DM","canvas","Even"];k++;
		this.tools[k]=["UC","canvas","Unclear"];k++;
		this.tools[k]=["TE","canvas","Good move"];k++;
		this.tools[k]=["BM","canvas","Bad move"];k++;
		this.tools[k]=["DO","canvas","Doubtful move"];k++;
		this.tools[k]=["IT","canvas","Interesting move"];k++;
		this.tools[k]=["PL","canvas","Add turn in Sgf"];k++;
	}
	km=k;
	for (k=0;k<km;k++) this.createTool(this.tools[k]);
	// div arround textarea makes styling easier (no shadow arround textarea on ios for instance)
	this.write("</div><div class=\"mxEditCommentToolDiv\" id=\""+this.n+"CommentTool\" onclick=\""+this.g+".doEditCommentTool()\">");
	this.write("<textarea id=\""+this.n+"CommentToolText\" value=\"\" onchange=\""+this.g+".doEditCommentTool()\"></textarea>");
	this.write("</div></div>");
};

}
