// maxiGos v6.57 > mgosFile.js

if (typeof mxG.G.prototype.createFile=='undefined'){

mxG.Z.fr["New"]="Nouveau";
mxG.Z.fr["Open"]="Ouvrir";
mxG.Z.fr["Close"]="Fermer";
mxG.Z.fr["Save"]="Enregistrer";
mxG.Z.fr["Save on your device"]="Enregistrer sur votre machine";
mxG.Z.fr["Send"]="Envoyer";
mxG.Z.fr["Send by email"]="Envoyer par email";
mxG.Z.fr["Goban size"]="Taille du goban";
mxG.Z.fr["Email:"]="Email :";
mxG.Z.fr["Create"]="Créer";
mxG.Z.fr["Add"]="Ajouter";
mxG.Z.fr["OK"]="OK";
mxG.Z.fr["Cancel"]="Annuler";
mxG.Z.fr["Values between 5 and 19:"]="Valeurs entre 5 et 19 :";
mxG.Z.fr["Values between 1 and 52:"]="Valeurs entre 1 et 52 :";
mxG.Z.fr["Click here to open a sgf file"]="Cliquer ici pour ouvrir un fichier sgf";
mxG.Z.fr["File name:"]="Nom du fichier :";
mxG.Z.fr["Your browser cannot do this!"]="Votre navigateur ne peut pas faire ça !";
mxG.Z.fr["Error"]="Erreur";
mxG.Z.fr["Untitled"]="SansTitre";
mxG.Z.fr["This is not a sgf file!"]="Ce n'est pas un fichier sgf !";

mxG.G.prototype.cleanUpSZ=function(s)
{
	var a,r;
	s=s.replace(/\s/g,"");
	a=s.match(/^([0-9]+)([x:]([0-9]+))?$/);
	if (a)
	{
		r=Math.min(this.szMax,Math.max(this.szMin,a[1]-0));
		if (a[3]) r+=":"+Math.min(52,Math.max(1,a[3]-0));
	}
	else r="19";
	// return a string like n or m:n where m and n are numbers between 1 and 52
	return r;
};

mxG.G.prototype.doNewOK=function(a)
{
	var aST=this.getInfo("ST"),aSZ=this.getE("DimensionInput").value,aN;
	if (a=="create")
	{
		if (this.getE("WindowMenuDiv"))
		{
			this.rN.cN=this.cN;
			this.rNs.push(this.rN=new mxG.N(null,null,null));
		}
		else // no need to keep previous tree
		{
			this.rN.Kid=[];
			this.rN.Focus=0;
		}
		this.rN.sgf="";
	}
	aN=this.rN.N("FF","4");
	aN.P["CA"]=["UTF-8"];
	aN.P["GM"]=["1"];
	aN.P["SZ"]=[this.cleanUpSZ(aSZ)];
	aN.P["AP"]=["maxiGos:"+mxG.V];
	if (parseInt(aST)) aN.P["ST"]=[aST];
	this.backNode(aN);
	if (this.hasC("Tree")) this.initTree();
	this.hideGBox("New");
};

mxG.G.prototype.doNew=function()
{
	if (this.hasC("Menu")) this.toggleMenu("File",0);
	if (this.gBox=="New") {this.hideGBox("New");return;}
	if (!this.getE("NewDiv"))
	{
		var s="";
		s+="<div class=\"mxShowContentDiv\">";
		s+="<h1>"+this.local("Goban size")+"</h1>";
		s+="<div class=\"mxP\">";
		s+="<label for=\""+this.n+"DimensionInput\">"+this.local("Values between "+this.szMin+" and "+this.szMax+":")+"</label>";
		s+=" <input id=\""+this.n+"DimensionInput\" name=\""+this.n+"DimensionInput\" type=\"text\" value=\""+this.DX+"x"+this.DY+"\" size=\"5\">";
		s+="</div>";
		s+="</div>";
		s+="<div class=\"mxOKDiv\">";
		s+="<button type=\"button\" onclick=\""+this.g+".doNewOK('create')\"><span>"+this.local("Create")+"</span></button>";
		s+="<button type=\"button\" onclick=\""+this.g+".doNewOK('add')\"><span>"+this.local("Add")+"</span></button>";
		s+="<button type=\"button\" onclick=\""+this.g+".hideGBox('New')\"><span>"+this.local("Cancel")+"</span></button>";
		s+="</div>";
		this.createGBox("New").innerHTML=s;
	}
	else this.getE("DimensionInput").value=this.DX+"x"+this.DY;
	this.showGBox("New");
};

mxG.G.prototype.doOpenOK=function()
{
	var a,r,e=this.getE("SgfFileInputAlertDiv");
	r=new FileReader();
	r.gos=this;
	r.f=this.getE("SgfFile").files[0];
	if (e)
	{
		if ((r.f.name?r.f.name:r.f.fileName).match(/\.sgf$/)) e.innerHTML="";
		else {e.innerHTML=this.local("This is not a sgf file!");return;}
	}
	r.onload=function(evt)
	{
		var s,m,c;
		s=evt.target.result;
		if (!this.c)
		{
			if (m=s.match(/CA\[([^\]]*)\]/)) c=m[1].toUpperCase();else c="ISO-8859-1";
			if (c!="UTF-8")
			{
				// retry with charset found in sgf
				this.c=c;
				this.readAsText(this.f,c);
				return;
			}
		}
		if (this.gos.getE("WindowMenuDiv"))
		{
			this.gos.rN.cN=this.gos.cN;
			this.gos.rNs.push(this.gos.rN=new mxG.N(null,null,null));
		} // else no need to keep previous tree
		this.mayHaveExtraTags=0;
		new mxG.P(this.gos,s);
		this.gos.backNode(this.gos.rN.KidOnFocus());
		if (this.gos.hasC("Tree")) this.gos.initTree();
		this.gos.rN.sgf=(this.f.name?this.f.name:this.f.fileName);
		if (this.gos.openOnly) this.gos.updateAll();
		else this.gos.hideGBox("Open");
	};
	r.readAsText(r.f);
};

mxG.G.prototype.doOpen=function()
{
	var s="";
	if (this.hasC("Menu")) this.toggleMenu("File",0);
	if (this.gBox=="Open") {this.hideGBox("Open");return;}
	if (!this.getE("OpenDiv")) this.createGBox("Open");
	s+="<div class=\"mxShowContentDiv\">";
	s+="<h1>"+this.local("Open")+"</h1>";
	if (mxG.CanOpen())
	{
		s+="<div class=\"mxP\">";
		s+="<div id=\""+this.n+"SgfFileInputAlertDiv\" class=\"mxErrorDiv\"></div>";
		s+="<button type=\"button\" id=\""+this.n+"SgfFileInput\" onclick=\""+"document.getElementById('"+this.n+"SgfFile"+"').click();\"><span>"+this.local("Click here to open a sgf file")+"</span></button>";
		s+="</div>";
		s+="</div>";
		s+="<div class=\"mxOKDiv\">";
		s+="<input type=\"file\" style=\"visibility:hidden;position:fixed;\" id=\""+this.n+"SgfFile\" onchange=\""+this.g+".doOpenOK()\">";
		s+="<button type=\"button\" onclick=\""+this.g+".hideGBox('Open')\"><span>"+this.local("Close")+"</span></button>";
		s+="</div>";
	}
	else
	{
		s+="<div class=\"mxP\">";
		s+=this.local("Your browser cannot do this!");
		s+="</div>";
		s+="</div>";
		s+="<div class=\"mxOKDiv\">";
		s+="<button type=\"button\" onclick=\""+this.g+".hideGBox('Open')\"><span>"+this.local("Close")+"</span></button>";
		s+="</div>";
	}
	this.getE("OpenDiv").innerHTML=s; // replace content anyway to fire again the input file onchange event
	this.showGBox("Open");
};

mxG.G.prototype.doClose=function()
{
	var k,km=(this.rNs?this.rNs.length:1),n=0;
	if (this.hasC("Menu")) this.toggleMenu("File",0);
	if (km==1)
	{
		this.mayHaveExtraTags=0;
		new mxG.P(this,this.so);
		this.rN.sgf="";
		this.backNode(this.rN.KidOnFocus());
	}
	else
	{
		k=this.rNs.indexOf(this.rN);
		if (k>-1) this.rNs.splice(k,1);
		this.rN=this.rNs[0];
		this.backNode(this.rN.cN);
	}
	if (this.hasC("Tree")) this.initTree();
	this.updateAll();
};

mxG.G.prototype.doSaveOK=function()
{
	var f=this.getE("SaveFileName").value;
	if (f)
	{
		if (!f.match(/\.sgf$/)) f+=".sgf";
		this.rN.sgf=f;
		this.getE("SaveFileName").value=f;
		this.downloadSgfLocally(f);
		this.getE("SaveForm").submit(); // just for autocompletion
	}
	this.hideGBox("Save");
};

mxG.G.prototype.doSave=function()
{
	var e,s,k,km,i,m;
	if (this.hasC("Menu")) this.toggleMenu("File",0);
	if (!this.canSgfDownloadLocally()) {this.popupSgf();return;}
	if (this.gBox=="Save") {this.hideGBox("Save");return;}
	if (!this.getE("SaveDiv"))
	{
		// use a form to store input values for autocompletion usage
		s="<form id=\""+this.n+"SaveForm\" action=\"javascript:void(0)\" method=\"post\">";
		s+="<div class=\"mxShowContentDiv\">";
		s+="<h1>"+this.local("Save on your device")+"</h1>";
		s+="<div class=\"mxP\"><label for=\""+this.n+"SaveFileName\">"+this.local("File name:")+" </label>";
		s+="<input id=\""+this.n+"SaveFileName\" name=\"FileName\" type=\"text\" value=\"\" size=\"32\">";
		s+="</div>";
		s+="</div>";
		s+="<div class=\"mxOKDiv\">";
		s+="<button type=\"button\" onclick=\""+this.g+".doSaveOK()\"><span>"+this.local("OK")+"</span></button>";
		s+="<button type=\"button\" onclick=\""+this.g+".hideGBox('Save')\"><span>"+this.local("Cancel")+"</span></button>";
		s+="</div>";
		s+="</form>";
		this.createGBox("Save").innerHTML=s;
	}
	this.getE("SaveFileName").value=this.rN.sgf?this.rN.sgf:(this.local("Untitled")+".sgf");
	this.showGBox("Save");
};

mxG.G.prototype.doSendOK=function()
{
	var m='mailto:'+this.getE("SendEmail").value+'?subject=maxiGos&body='+encodeURIComponent(this.buildSgf());
	window.location.href=m;	this.hideGBox("Send");
	this.getE("SendForm").submit(); // just for autocompletion
};

mxG.G.prototype.doSend=function()
{
	if (this.hasC("Menu")) this.toggleMenu("File",0);
	if (this.gBox=="Send") {this.hideGBox("Send");return;}
	if (!this.getE("SendDiv"))
	{
		// use a form to store input values for autocompletion usage
		var s="<form id=\""+this.n+"SendForm\" action=\"javascript:void(0)\" method=\"post\">";
		s+="<div class=\"mxShowContentDiv\">";
		s+="<h1>"+this.local("Send by email")+"</h1>";
		s+="<div class=\"mxP\"><label for=\""+this.n+"Email\">"+this.local("Email:")+" </label>";
		s+="<input id=\""+this.n+"SendEmail\" name=\""+this.n+"SendEmail\" type=\"text\" value=\"\" size=\"40\"></div>";
		s+="</div>";
		s+="<div class=\"mxOKDiv\">";
		s+="<button type=\"button\" onclick=\""+this.g+".doSendOK()\"><span>"+this.local("OK")+"</span></button>";
		s+="<button type=\"button\" onclick=\""+this.g+".hideGBox('Send')\"><span>"+this.local("Cancel")+"</span></button>";
		s+="</div>";
		s+="</form>";
		this.createGBox("Send").innerHTML=s;
	}
	this.showGBox("Send");
};

mxG.G.prototype.addFileBtns=function()
{
	if (!this.hideNew) this.addBtn({n:"New",v:this.local("New")});
	if (!this.hideOpen) this.addBtn({n:"Open",v:this.local("Open")});
	if (!this.hideClose) this.addBtn({n:"Close",v:this.local("Close")});
	if (!this.hideSave) this.addBtn({n:"Save",v:this.local("Save")});
	if (!this.hideSend) this.addBtn({n:"Send",v:this.local("Send")});
};

mxG.G.prototype.createFile=function()
{
	var k=this.k;
	if (!this.szMin) this.szMin=1;
	if (!this.szMax) this.szMax=52;
	if (this.fileBoxOn&&!(this.openOnly&&!mxG.CanOpen()))
	{
		this.write("<div class=\"mxFileDiv\" id=\""+this.n+"FileDiv\">");
		if (this.openOnly)
		{
			this.write("<button type=\"button\" id=\""+this.n+"SgfFileInput\" onclick=\""+"document.getElementById('"+this.n+"SgfFile"+"').click();\"><span>"+this.local("Click here to open a sgf file")+"</span></button>");
			this.write("<input type=\"file\" style=\"visibility:hidden;position:fixed;\" id=\""+this.n+"SgfFile\" onchange=\""+this.g+".doOpenOK()\">");
		}
		else this.addFileBtns();
		this.write("</div>");
	}
	if (this.alone) window.addEventListener("unload",function(ev){if (mxG.D[k].sgfPopup&&!mxG.D[k].sgfPopup.closed) mxG.D[k].sgfPopup.close();},false);
};

}
