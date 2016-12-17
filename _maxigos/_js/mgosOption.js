// maxiGos v6.57 > mgosOption.js

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