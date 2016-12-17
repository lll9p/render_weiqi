// maxiGos v6.60 > mgosImage.js

if (typeof mxG.G.prototype.createImage=='undefined'){

mxG.Z.fr["Image"]="Image";

mxG.G.prototype.showImage=function()
{
	if (this.im4Show&&!this.im4Show.OK) {setTimeout(this.g+".showImage()",100);return;}
	var aW,aH,html,hs=0;
	html='<!DOCTYPE HTML>\n';
	html+='<html><head>';
	html+='<title>maxiGos-Image</title>';
	html+='</head><body style="margin:16px;padding:0;text-align:center;">';
	html+='<img id="gcni" style="display:block;margin:0 auto;" alt="maxiGos" src="'+this.gcni.toDataURL("image/png")+'">';
	html+='</body></html>';
	aW=this.gobanCnWidth()+48+(hs?16:0);
	aH=this.gobanCnHeight()+48+(hs?16:0)+hs;
	if (this.imagePopup&&!this.imagePopup.closed) this.imagePopup.close();
	this.imagePopup=window.open('','maxiGosImage','width='+aW+',height='+aH+',scrollbars=no');
	this.imagePopup.document.open();
	this.imagePopup.document.write(html);
	this.imagePopup.document.close();
};

mxG.G.prototype.setImageWithBkColor=function(c)
{
	this.im4Show="";
	this["gcxi"].save();
	this["gcxi"].fillStyle=c;
	this["gcxi"].fillRect(0,0,this["gcni"].width,this["gcni"].height);
	this["gcxi"].restore(); // otherwise, shadow becomes darker after each drawing
	this["gcxi"].drawImage(this.gcn,0,0);
};

mxG.G.prototype.setImageWithBkPattern=function(bk)
{
	var gw=this["gcni"].width,gh=this["gcni"].height,c,s;
	this.im4Show=new Image();
	this.im4Show.OK=0;
	this.im4Show.gos=this;
	this.im4Show.onload=function()
	{
    	this.OK=1;
    	this.gos["gcxi"].save();
    	this.gos["gcxi"].drawImage(this,0,0,this.gos.gcn.width,this.gos.gcn.height);
    	this.gos["gcxi"].restore(); // otherwise, shadow is added at each drawing
    	this.gos["gcxi"].drawImage(this.gos.gcn,0,0);
    	// don't showImage() here, otherwise more chance that browser blocks popup
	};
	this.im4Show.src=bk;
};

mxG.G.prototype.doImage=function()
{
	var aW,aH,html,st,bk,bs,w,cn,cx,bkp=0;
	// don't use "background" here: complex or empty even if others are not
	bk=mxG.GetStyle(this.getE("GobanCanvas"),"backgroundImage");
	if (!bk||(bk=="none")) bk=mxG.GetStyle(this.getE("GobanCanvas"),"backgroundColor");
	if (bk.match(/^url\((.*)\)$/))
	{
		bk=bk.replace(/^url\((.*)\)$/,"$1");
		bk=bk.replace(/\"/g,"");
		bkp=1;
	}
	this.gcni=document.createElement('canvas');
    this.gcxi=this.gcni.getContext('2d');
	this.gcni.width=this.gcn.width;
	this.gcni.height=this.gcn.height;
	if (bkp) this.setImageWithBkPattern(bk);
	else this.setImageWithBkColor(bk);
	this.showImage();
};

mxG.G.prototype.createImage=function()
{
	var k=this.k;
	this.write("<div class=\"mxImageDiv\" id=\""+this.n+"ImageDiv\">");
	this.addBtn({n:"Image",v:this.local("Image")});
	this.write("</div>");
	window.addEventListener("unload",function(ev){if (mxG.D[k].imagePopup&&!mxG.D[k].imagePopup.closed) mxG.D[k].imagePopup.close();},false);
};

}

