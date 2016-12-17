// maxiGos v6.57 > mgosInfo.js

if (typeof mxG.G.prototype.createInfo=='undefined'){

mxG.Z.fr["Info"]="Info";
mxG.Z.fr["OK"]="OK";
mxG.Z.fr["Cancel"]="Annuler";
mxG.Z.fr["Event:"]="Évènement :";
mxG.Z.fr["Round:"]="Ronde :";
mxG.Z.fr["Black:"]="Noir :";
mxG.Z.fr["White:"]="Blanc :";
mxG.Z.fr["Rank:"]="Niveau :";
mxG.Z.fr["Komi:"]="Komi :";
mxG.Z.fr["Handicap:"]="Handicap :";
mxG.Z.fr["Result:"]="Résultat :";
mxG.Z.fr["Date:"]="Date :";
mxG.Z.fr["Place:"]="Lieu :";
mxG.Z.fr["Rules:"]="Règle :";
mxG.Z.fr["Time limits:"]="Temps :";
mxG.Z.fr["Overtime:"]="Byoyomi :";
mxG.Z.fr["Annotations:"]="Annotations :";
mxG.Z.fr["Copyright:"]="Copyright :";
mxG.Z.fr["Source:"]="Source :";
mxG.Z.fr["User:"]="Utilisateur :";
mxG.Z.fr["Black team:"]="Équipe de Noir :";
mxG.Z.fr["White team:"]="Équipe de Blanc :";
mxG.Z.fr["Game name:"]="Nom de la partie :";
mxG.Z.fr["Opening:"]="Ouverture :";
mxG.Z.fr["General comment:"]="Commentaire général :";
mxG.Z.fr["by resign"]="par abandon";
mxG.Z.fr["by time"]="au temps";
mxG.Z.fr["by forfeit"]="par forfait";
mxG.Z.fr["by"]="de";
mxG.Z.fr["on points"]="aux points";
mxG.Z.fr["suspended"]="suspendu";
mxG.Z.fr["Main"]="Informations principales";
mxG.Z.fr["Other"]="Autres informations";
mxG.Z.fr["Black"]="Noir";
mxG.Z.fr["White"]="Blanc";
mxG.Z.fr[" wins"]=" gagne";
mxG.Z.fr["no result"]="sans résultat";
mxG.Z.fr["draw"]="partie nulle";
mxG.Z.fr["unknown"]="inconnu";

mxG.G.prototype.popInfo=function(aPropName)
{
	// pop info from this.rN.KidOnFocus()
	// todo: pop it on the convenient node
	var aN;
	aN=this.rN.KidOnFocus();
	// assume that this kind of property has only one value
	aN.TakeOff(aPropName,0);
};

mxG.G.prototype.decodeResult=function(a)
{
	this.WN="";
	this.HW="";
	this.SC="";
	
	if (a)
	{
		this.WN=a.substr(0,1);
		if (this.WN=="0") this.WN="D";
		if (a.substr(1,1)=="+")
		{
			this.WN+="+";
			if (a.substr(2,1)=="R") this.HW="R";
			else if (a.substr(2,1)=="T") this.HW="T";
			else if (a.substr(2,1)=="F") this.HW="F";
			else if (a.length>2) this.SC=a.substr(2);
		}
	}
};

mxG.G.prototype.changeInfoStatus=function(el,b)
{
	var c=el.className.replace(" mxBadInput","");
	if (b) el.className=c;else el.className=c+" mxBadInput";
};

mxG.G.prototype.checkRank=function(el,ev)
{
	this.changeInfoStatus(el,(el.value+"").search(/^([0-9]+[kdp]?)?$/)==0);
	this.doChangeInfo();
};

mxG.G.prototype.checkHandicap=function(el,ev)
{
	this.changeInfoStatus(el,!el.value||(((el.value+"").search(/^[0-9]+$/)==0)&&(parseInt(el.value)>1)));
	this.doChangeInfo();
};

mxG.G.prototype.checkReal=function(el,ev)
{
	this.changeInfoStatus(el,(el.value+"").search(/^([0-9]+([.]([0-9]+)?)?)?$/)==0);
	this.doChangeInfo();
};

mxG.G.prototype.encodeResult=function()
{
	var e=this.getE("RE"),WN=this.getE("WN").value,HW;
	if (WN=="D") e.value="Draw";else if (WN=="V") e.value="Void";else e.value=WN;
	if ((WN=="B+")||(WN=="W+"))
	{
		if (HW=this.getE("HW").value) e.value+=HW;
		else e.value+=this.getE("SC").value;
	}
};

mxG.G.prototype.showMainInfoPage=function()
{
	this.getE("MainInfoPage").style.display="block";
	this.getE("OtherInfoPage").style.display="none";
	this.getE("MainInfoBtn").className="mxInfoSelectedPageBtn";
	this.getE("OtherInfoBtn").className="mxInfoPageBtn";
};

mxG.G.prototype.showOtherInfoPage=function()
{
	this.getE("MainInfoPage").style.display="none";
	this.getE("OtherInfoPage").style.display="block";
	this.getE("MainInfoBtn").className="mxInfoPageBtn";
	this.getE("OtherInfoBtn").className="mxInfoSelectedPageBtn";
};

mxG.G.prototype.buildInfo=function()
{
	var s="";
	this.decodeResult(this.getInfo("RE"));
	s+="<div class=\"mxInfoPageMenuDiv\">";
	s+="<button class=\"mxInfoSelectedPageBtn\" id=\""+this.n+"MainInfoBtn\" type=\"button\" onclick=\""+this.g+".showMainInfoPage();\">"+this.local("Main")+"</button>";
	s+="<button class=\"mxInfoPageBtn\" id=\""+this.n+"OtherInfoBtn\" type=\"button\" onclick=\""+this.g+".showOtherInfoPage();\">"+this.local("Other")+"</button>";
	s+="</div>\n";

	s+="<div class=\"mxInfoPageDiv\" id=\""+this.n+"MainInfoPage\">";
	s+=("<label class=\"mxEV\" for=\""+this.n+"EV\">"+this.local("Event:")+" </label><input class=\"mxEV\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"EV\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxRO\" for=\""+this.n+"RO\">"+this.local("Round:")+" </label><input class=\"mxRO\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"RO\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxDT\" for=\""+this.n+"DT\">"+this.local("Date:")+" </label><input class=\"mxDT\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"DT\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxPC\" for=\""+this.n+"PC\">"+this.local("Place:")+" </label><input class=\"mxPC\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"PC\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxPB\" for=\""+this.n+"PB\">"+this.local("Black:")+" </label><input class=\"mxPB\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"PB\" type=\"text\" value=\""+"\">");
	s+=("<label class=\"mxBR\" for=\""+this.n+"BR\">"+this.local("Rank:")+" </label><input class=\"mxBR\" onkeyup=\""+this.g+".checkRank(this,event);\" id=\""+this.n+"BR\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxPW\" for=\""+this.n+"PW\">"+this.local("White:")+" </label><input class=\"mxPW\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"PW\" type=\"text\" value=\""+"\">");
	s+=("<label class=\"mxWR\" for=\""+this.n+"WR\">"+this.local("Rank:")+" </label><input class=\"mxWR\" onkeyup=\""+this.g+".checkRank(this,event);\" id=\""+this.n+"WR\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxKM\" for=\""+this.n+"KM\">"+this.local("Komi:")+" </label><input class=\"mxKM\" onkeyup=\""+this.g+".checkReal(this,event);\" id=\""+this.n+"KM\" type=\"text\" value=\""+"\">");
	s+=("<label class=\"mxHA\" for=\""+this.n+"HA\">"+this.local("Handicap:")+" </label><input class=\"mxHA\" onkeyup=\""+this.g+".checkHandicap(this,event);\" id=\""+this.n+"HA\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxWN\" for=\""+this.n+"WN\">"+this.local("Result:")+" </label>");
	s+=("<select class=\"mxWN\" onclick=\""+this.g+".doChangeInfo();\" id=\""+this.n+"WN\">");
	s+=("<option value=\"\"></option>");
	s+=("<option value=\"B+\""+">"+this.local("Black")+this.local(" wins")+"</option>");
	s+=("<option value=\"W+\""+">"+this.local("White")+this.local(" wins")+"</option>");
	s+=("<option value=\"D\""+">"+this.local("draw")+"</option>");
	s+=("<option value=\"V\""+">"+this.local("no result")+"</option>");
	s+=("<option value=\"?\""+">"+this.local("unknown")+"</option>");
	s+=("</select>");
	s+=("<select class=\"mxHW\" onclick=\""+this.g+".doChangeInfo();\" id=\""+this.n+"HW\">");
	s+=("<option value=\"\"></option>");
	s+=("<option value=\"R\""+">"+this.local("by resign")+"</option>");
	s+=("<option value=\"T\""+">"+this.local("by time")+"</option>");
	s+=("<option value=\"F\""+">"+this.local("by forfeit")+"</option>");
	s+=("</select>");
	s+=("<label class=\"mxSC\" for=\""+this.n+"SC\">"+this.local("by")+"</label><input class=\"mxSC\" id=\""+this.n+"SC\" onkeyup=\""+this.g+".checkReal(this,event);\" type=\"text\" value=\""+"\"><br>");
	s+=("<input class=\"mxRE\" id=\""+this.n+"RE\" type=\"hidden\" value=\""+"\">");
	s+=("<label class=\"mxGC\" for=\""+this.n+"GC\">"+this.local("General comment:")+" </label><br><textarea class=\"mxGC\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"GC\">"+"</textarea><br>");
	s+="</div>";
	s+="<div class=\"mxInfoPageDiv\" style=\"display:none;\" id=\""+this.n+"OtherInfoPage\">";
	s+=("<label class=\"mxGN\" for=\""+this.n+"GN\">"+this.local("Game name:")+" </label><input class=\"mxGN\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"GN\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxBT\" for=\""+this.n+"BT\">"+this.local("Black team:")+" </label><input class=\"mxBT\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"BT\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxWT\" for=\""+this.n+"WT\">"+this.local("White team:")+" </label><input class=\"mxWT\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"WT\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxRU\" for=\""+this.n+"RU\">"+this.local("Rules:")+" </label><input class=\"mxRU\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"RU\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxTM\" for=\""+this.n+"TM\">"+this.local("Time limits:")+" </label><input class=\"mxTM\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"TM\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxOT\" for=\""+this.n+"OT\">"+this.local("Overtime:")+" </label><input class=\"mxOT\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"OT\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxON\" for=\""+this.n+"ON\">"+this.local("Opening:")+" </label><input class=\"mxON\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"ON\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxAN\" for=\""+this.n+"AN\">"+this.local("Annotations:")+" </label><input class=\"mxAN\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"AN\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxCP\" for=\""+this.n+"CP\">"+this.local("Copyright:")+" </label><input class=\"mxCP\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"CP\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxSO\" for=\""+this.n+"SO\">"+this.local("Source:")+" </label><input class=\"mxSO\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"SO\" type=\"text\" value=\""+"\"><br>");
	s+=("<label class=\"mxUS\" for=\""+this.n+"US\">"+this.local("User:")+" </label><input class=\"mxUS\" onkeyup=\""+this.g+".doChangeInfo();\" id=\""+this.n+"US\" type=\"text\" value=\""+"\"><br>");
	s+="</div>";
	
	return s;
};

mxG.G.prototype.doChangeInfo=function()
{
	if (this.infoBoxOn) this.getInfoFromBox();
}

mxG.G.prototype.putInfoInBox=function()
{
	var p,pm,IX=["EV","RO","DT","PC","PB","BR","PW","WR","HA","KM","RE","GC","RU","TM","OT","AN","CP","SO","US","GN","BT","WT","ON"];
	pm=IX.length;
	for (p=0;p<pm;p++)
		if (this.getE(IX[p]))
		{
			if (IX[p]=="RE")
			{
				this.decodeResult(this.getInfo("RE"));
				this.getE("RE").value=this.getInfo("RE");
				if (this.getE("WN")) this.getE("WN").value=this.WN;
				if (this.getE("HW")) this.getE("HW").value=this.HW;
				if (this.getE("SC")) this.getE("SC").value=this.SC;
			}
			else this.getE(IX[p]).value=this.getInfo(IX[p]);
		}
};

mxG.G.prototype.getInfoFromBox=function()
{
	var p,pm,v,IX=["EV","RO","DT","PC","PB","BR","PW","WR","HA","KM","RE","GC","RU","TM","OT","AN","CP","SO","US","GN","BT","WT","ON"];
	pm=IX.length;
	for (p=0;p<pm;p++)
	{
		if (IX[p]=="RE") this.encodeResult();
		if (this.getE(IX[p])&&(v=this.getE(IX[p]).value)) this.rN.KidOnFocus().Set(IX[p],v);
		else this.popInfo(IX[p]);
	}
};

mxG.G.prototype.doInfoOK=function()
{
	this.getInfoFromBox();
	this.hideGBox("ShowInfo");
};

mxG.G.prototype.doInfo=function()
{
	if (this.gBox=="ShowInfo") {this.hideGBox("ShowInfo");return;}
	var f;
	if (!this.getE("ShowInfoDiv"))
	{
		var s="<div class=\"mxShowContentDiv\" id=\""+this.n+"ShowInfoContentDiv\"></div>";
		s+="<div class=\"mxOKDiv\">";
		s+="<button type=\"button\" onclick=\""+this.g+".doInfoOK()\"><span>"+this.local("OK")+"</span></button>";
		s+="<button type=\"button\" onclick=\""+this.g+".hideGBox('ShowInfo')\"><span>"+this.local("Cancel")+"</span></button>";
		s+="</div>";
		this.createGBox("ShowInfo").innerHTML=s;
		this.getE("ShowInfoContentDiv").innerHTML=this.buildInfo();
		f=1;
	}
	this.showGBox("ShowInfo");
	this.putInfoInBox(); // safer after showGBox because of <select> tags
};

mxG.G.prototype.initInfo=function()
{
	if (this.infoBoxOn) this.getE("InfoContentDiv").innerHTML=this.buildInfo();
};

mxG.G.prototype.updateInfo=function()
{
	if (this.infoBoxOn) this.putInfoInBox();
	this.refreshInfo();
};

mxG.G.prototype.refreshInfo=function()
{
	if (this.infoBoxOn)
	{
		if (this.adjustInfoWidth) this.adjust("Info","Width");
		if (this.adjustInfoHeight) this.adjust("Info","Height");
	}
};

mxG.G.prototype.createInfo=function()
{
	if (this.infoBoxOn||this.infoBtnOn)
	{
		this.write("<div class=\"mxInfoDiv\" id=\""+this.n+"InfoDiv\">");
		if (this.infoBoxOn) this.write("<div class=\"mxInfoContentDiv\" id=\""+this.n+"InfoContentDiv\"></div>");
		if (this.infoBtnOn) this.addBtn({n:"Info",v:this.label("Info","infoLabel")});
		this.write("</div>");
	}
};

}