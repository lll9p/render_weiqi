// maxiGos v6.57 > goproblemsPatch.js

if (typeof mxG.G.prototype.createSize=='undefined'){

// Major changes
// numeric tree[j][i] become object
// all nodes get a goodness
// all tree[j][i] get a goodness

// Todo: place off path play when "Solve" gets mouse click
// Todo: add off path move when "Solve" to the game tree instead of just doing a virtual move
//       then if tenuki, need to clone branch and paste it after the off path move
//       keep tenuki branch as is in case of another attempt at the same node
// Todo: compute final goodness for the last move which is not an off path move (?)
// Todo: variationMarkOn without variationEmphasisOn (?) => can display variation without Diagram (?)
// Todo: add "Name" component to display GN

// New parameters:
// automaticGoodness: if 1 and branch last move color is as first move color, success, else fail (patch only)
// circularTreeEmphasis: if 1 on tree draw circle emphasis mark, else draw square mark (patch only)
// variationEmphasisOn: if 1 on goban draw emphasis (i.e. colorize) on variation mark, number or label (core version)
// variationAsMarkOn: if 1 on goban draw variation mark else draw variation number or label (core version)
//                    need variationEmphasisOn set to 1 at the moment
// hideTreeNumbering: if 1 hide tree numbering (core version)
// goodColor, badColor, evenColor, warningColor, unclearColor, offPathColor, neutralColor

mxG.Z.fr["Solution"]="Solution";
mxG.Z.fr["Reset"]="Réinitialiser";
mxG.Z.fr["Solved"]="Résolu";
mxG.Z.fr["Wrong"]="Incorrect";
mxG.Z.fr["Warning"]="Attention";
mxG.Z.fr["Off path"]="Chemin non prévu";

if (mxG.Z.ja)
{
	mxG.Z.ja["Solution"]="正解を見る";
	mxG.Z.ja["Reset"]="リセット";
	mxG.Z.ja["Solved"]="正解";
	mxG.Z.ja["Wrong"]="失敗";
	mxG.Z.ja["Warning"]="注意";
	mxG.Z.ja["Off path"]="オフパス";
	mxG.Z.ja["Joseki"]="定石";
}

if (mxG.Z.zh)
{
	mxG.Z.zh["Solution"]="研究";
	mxG.Z.zh["Reset"]="对战";
	mxG.Z.zh["Solved"]="正确";
	mxG.Z.zh["Wrong"]="失败";
	mxG.Z.zh["Warning"]="注意";
	mxG.Z.zh["Off path"]="找不到变化的";
	mxG.Z.zh["Joseki"]="定式";
}

if (mxG.Z["zh-tw"])
{
	mxG.Z["zh-tw"]["Solution"]="研究";
	mxG.Z["zh-tw"]["Reset"]="對戰";
	mxG.Z["zh-tw"]["Solved"]="正确";
	mxG.Z["zh-tw"]["Wrong"]="失敗";
	mxG.Z["zh-tw"]["Warning"]="注意";
	mxG.Z["zh-tw"]["Off path"]="找不到變化的";
	mxG.Z["zh-tw"]["Joseki"]="定式";
}

// Patch component

mxG.G.prototype.createPatch=function()
{
	this.computeGoodness=this.computeGoodness2; // Tree patch ?
	this.hasEmphasis=this.hasEmphasis2; // Tree patch
	this.afterDrawTree=this.afterDrawTree2; // Tree patch
	this.drawTreePoint=this.drawTreePoint2; // Tree patch
	this.drawMTreeLine=this.drawMTreeLine2; // Tree patch
	this.drawTreeLine=this.drawTreeLine2; // Tree patch
	this.buildTree=this.buildTree2; // Tree patch
	this.getOneComment=this.getOneComment2; // Comment patch
	this.drawMarkOnLast=this.drawMarkOnLast2; // Goban patch
};

// Tree patch

mxG.G.prototype.finalGoodness=function(aN)
{
	var aNat;
	// assume aN is a final node (at least in the initial tree)
	if (aN.P)
	{
		if (aN.P.DM) return this.goodnessCode.Good;
		if (aN.P.UC) return this.goodnessCode.Unclear;
		if (aN.P.GB) aNat="B";
		else if (aN.P.GW) aNat="W";
		else if (this.automaticGoodness)
		{
			if (aN.P.B) aNat="B";
			else if (aN.P.W) aNat="W";
		}
		else return this.goodnessCode.Warning;
	}
	if (aNat)
	{
		if (aNat==this.uC) return this.goodnessCode.Good;
		if (aNat==this.oC) return this.goodnessCode.Bad;
	}
	return 0;
};

mxG.G.prototype.computeGoodness2=function(aN,Good)
{
	if (aN.Add&&!this.goodnessWhenEdit) Good=this.goodnessCode.OffPath;
	else
	{
		Good=Good&~this.goodnessCode.OffPath;
		if (!aN.KidOnFocus()) Good=this.finalGoodness(aN);
		else if (this.uC&&aN.P[this.uC]&&(Good&1)&&(Good&2)) Good=this.goodnessCode.Bad;
		else if (this.oC&&aN.P[this.oC]&&(Good&1)&&(Good&2)) Good=this.goodnessCode.Good;
	}
	return Good;
};

mxG.G.prototype.drawTreeLine2=function(s,x,y,c,lw)
{
	var d=this.dT+2,r=(d>>1),r2=(d>>2),cn,cx,z,xx,yy,dd,xo,yo,n=this.treeN,m=this.treeM,e=this.emphasisTreeLineWidth+1;
	xx=Math.floor(x/m)*m;
	yy=Math.floor(y/n)*n;
	dd=this.getTreeD();
	xo=(x-xx)*dd;
	yo=(y-yy)*dd;
	cn=this.getE("TreePointCanvas"+this.idt(xx,yy));
	if (!cn) cn=this.addPointToTree(this.getE("TreeDiv"),xx,yy);
	cx=cn.getContext("2d");
	cx.save();
	if (!mxG.IsArray(c)) cx.strokeStyle=(c?c:this.treeLineColor);
	if (!mxG.IsArray(lw)) cx.lineWidth=(lw?lw:this.treeLineWidth);
	if ((this.tree[y][x]==this.cN)||(this.tree[y][x]==this.treeCurrentLast))
	{
		if (this.circularTreeEmphasis) z=-1;
		else z=0;
	}
	else z=1;
	if (s=="H2L")
	{
		cx.clearRect(xo-1,yo+r2+r-e,2,2*e); // otherwise part of previous thick line remains visible
		cx.beginPath();
		cx.moveTo(xo-1,yo+r2+r+0.5);
		cx.lineTo(xo+r2+z,yo+r2+r+0.5);
		cx.stroke();
	}
	if (s=="D2TL")
	{
		cx.clearRect(xo-e,yo-e,2*e,2*e); // otherwise part of previous thick line remains visible
		cx.beginPath();
		cx.moveTo(xo+0.5-e,yo+0.5-e);
		//cx.lineTo(xo+r2+z*0.15*d+0.5,yo+r2+z*0.15*d+0.5);
		cx.lineTo(xo+r2+(z?0.15:0)*d+(z-1)+0.5,yo+r2+(z?0.15:0)*d+(z-1)+0.5);
		cx.stroke();
	}
	else if (s=="H2R")
	{
		cx.beginPath();
		cx.moveTo(xo-z+d+r2,yo+r2+r+0.5);
		cx.lineTo(xo+d+(r2<<1),yo+r2+r+0.5);
		cx.stroke();
	}
	else if (s=="D2BR")
	{
		cx.beginPath();
		//cx.moveTo(xo+r2+(1-z*0.15)*d-0.5,yo+r2+(1-z*0.15)*d-0.5);
		cx.moveTo(xo+r2+(z?0.85:1)*d-(z-1)-0.5,yo+r2+(z?0.85:1)*d-(z-1)-0.5);
		cx.lineTo(xo+(r2<<1)+d-0.5,yo+(r2<<1)+d-0.5);
		cx.stroke();
	}
	else if (s=="V2B")
	{
		cx.beginPath();
		cx.moveTo(xo+r2+r+0.5,yo+r2+d-z);
		cx.lineTo(xo+r2+r+0.5,yo+(r2<<1)+d);
		cx.stroke();

	}
	else if (s=="V1")
	{
		cx.clearRect(xo+r2+r-2,yo,5,(r2<<1)+d);
		cx.beginPath();
		cx.moveTo(xo+r2+r+0.5,yo);
		cx.lineTo(xo+r2+r+0.5,yo+(r2<<1)+d);
		cx.stroke();
	}
	else if (s=="A1")
	{	
		cx.clearRect(xo+r2+r-2,yo,5,r2+r+1);
		cx.clearRect(xo+r2+r-2,yo+r2+r,r2+r+1+4,r2+r+1+5);
		cx.beginPath();
		cx.moveTo(xo+r2+r+0.5,yo);
		cx.lineTo(xo+r2+r+0.5,yo+r2+r+0.5);
		cx.lineTo(xo+(r2<<1)+d-0.5+3,yo+(r2<<1)+d-0.5+3);
		/*
		cx.beginPath();
		cx.moveTo(xo+r2+r+0.5,yo);
		cx.lineTo(xo+r2+r+0.5,yo+r2+r+0.5);
		cx.lineTo(xo+(r2<<1)+d-0.5,yo+(r2<<1)+d-0.5);
		*/
		cx.stroke();
	}
	else if (s=="T1")
	{
		if (mxG.IsArray(lw)) cx.lineWidth=lw[0];
		if (mxG.IsArray(c)) cx.strokeStyle=(c[0]?c[0]:this.treeLineColor);
		cx.clearRect(xo+r2+r-2,yo,5,r2+r+1);
		cx.clearRect(xo+r2+r-2,yo+r2+r,r2+r+1+4,r2+r+1+5);
		cx.beginPath();
		cx.moveTo(xo+r2+r+0.5,yo);
		cx.lineTo(xo+r2+r+0.5,yo+r2+r+0.5);
		cx.stroke();
		if (mxG.IsArray(lw)) cx.lineWidth=lw[1];
		if (mxG.IsArray(c)) cx.strokeStyle=(c[1]?c[1]:this.treeLineColor);
		cx.beginPath();
		cx.moveTo(xo+r2+r+0.5,yo+r2+r+0.5);
		cx.lineTo(xo+r2+r+0.5,yo+(r2<<1)+d+5);
		cx.stroke();
		if (mxG.IsArray(lw)) cx.lineWidth=lw[2];
		if (mxG.IsArray(c)) cx.strokeStyle=(c[2]?c[2]:this.treeLineColor);
		cx.beginPath();
		cx.moveTo(xo+r2+r-0.5,yo+r2+r-0.5);
		cx.lineTo(xo+(r2<<1)+d-0.5+3,yo+(r2<<1)+d-0.5+3);
		/*
		cx.beginPath();
		cx.moveTo(xo+r2+r+0.5,yo);
		cx.lineTo(xo+r2+r+0.5,yo+(r2<<1)+d);
		cx.moveTo(xo+r2+r+0.5,yo+r2+r+0.5);
		cx.lineTo(xo+(r2<<1)+d-0.5,yo+(r2<<1)+d-0.5);
		*/
		cx.stroke();
	}
	cx.restore();
};

mxG.G.prototype.hasEmphasis2=function(aN)
{
	if (aN==this.cN) return this.treeFocusColor;
	if (!this.treeCurrentLast||(aN!=this.treeCurrentLast)) return 0;
	return this.getEmphasisColor(this.treeCurrentLast.Good);
};

mxG.G.prototype.buildTree2=function(aN,io,jo)
{
	var i=io,j=jo,k,km=aN.Kid.length,l,Good=0,path,p,pm,r,OnPath=0;
	if (!this.uC) this.setPl();
	if (j==this.treeRowMax) {this.tree[j]=[];this.treeRowMax++;}
	this.tree[j][i]=aN;
	aN.iTree=i;
	aN.jTree=j;
	for (k=0;k<km;k++)
	{
		path=[];
		while ((this.tree[j]!==undefined)&&(this.tree[j][i+1]!==undefined))
		{
			if (this.tree[j][i]===undefined)
			{
				if ((this.tree[j+1]===undefined)||(this.tree[j+1][i+1]===undefined))
				{
					if (k==(km-1))
					{
						this.tree[j][i]={Shape:-1,Good:0}; // A1
						path.push({i:i,j:j});
					}
					else
					{
						this.tree[j][i]={Shape:-2,Good:0}; // T1
						path.push({i:i,j:j});
					}
				}
				else
				{
					this.tree[j][i]={Shape:-3,Good:0}; // V1
					path.push({i:i,j:j});
				}
			}
			j++;
		}
		r=this.buildTree(aN.Kid[k],i+1,j);
		Good=Good|r.Good;
		OnPath=OnPath|r.OnPath;
		pm=path.length;
		for (p=0;p<pm;p++)
		{
			this.tree[path[p].j][path[p].i].Good=aN.Kid[k].Good;
		}
	}
	this.treeColumnMax=Math.max(this.treeColumnMax,i+1);
	OnPath=OnPath|((aN==this.treeCurrentLast)?1:0);
	//if (aN==this.treeCurrentLast) alert(1);
	return {Good:aN.Good=this.computeGoodness(aN,Good),OnPath:aN.OnPath=OnPath};
};

mxG.G.prototype.isOnFocusPath=function(aN)
{
	//var bN=this.rN;
	//while (bN) {if (bN==aN) return 1;bN=bN.KidOnFocus();}
	//return 0;
	return aN.OnPath;
};

mxG.G.prototype.drawMTreeLine2=function(k,h2dt,nv)
{
	var i,j,jm,c,lw=this.emphasisTreeLineWidth,lw2,aN,c4a,lw4a;
	jm=Math.min(k+nv,this.treeRowMax);
	for (j=k;j<jm;j++)
	{
		if (!this.treeCheck[j])
		{
			this.treeCheck[j]=1;
			for (i=0;i<this.treeColumnMax;i++)
				if ((this.tree[j]!=undefined)&&(this.tree[j][i]!=undefined))
				{
					if (this.tree[j][i]&&this.tree[j][i].Dad) this.drawTreePoint(this.tree[j][i]);
					//else if (h2dt&2)
					else
					{
						// not an object thus add V1, T1, A1
						if (this.tree[j][i]) c=this.getEmphasisColor(this.tree[j][i].Good);
						if (this.tree[j][i]&&(this.tree[j][i].Shape==-1))
						{
							if (this.isOnFocusPath(this.tree[j+1][i+1])) this.tree[j][i].Focus=1;
							else this.tree[j][i].Focus=0;
							if (this.tree[j][i].Focus) lw2=lw; else lw2=this.treeLineWidth;
							this.drawTreeLine("A1",i,j,c,lw2);
						}
						else if (this.tree[j][i]&&(this.tree[j][i].Shape==-2))
						{
							lw4a=[this.treeLineWidth,this.treeLineWidth,this.treeLineWidth];
							aN=this.tree[j+1][i+1];
							if (this.tree[j-1][i].Shape)
							{
								if (this.tree[j-1][i].Shape==-3) this.tree[j][i].Focus=this.tree[j-1][i].Focus;
								else // this.tree[j-1][i] is "T1"
								{
									if (this.isOnFocusPath(this.tree[j][i+1])) this.tree[j][i].Focus=0;
									else this.tree[j][i].Focus=this.tree[j-1][i].Focus;
								}
								if (this.tree[j][i].Focus)
								{
									lw4a[0]=lw;
									if (this.isOnFocusPath(aN)) lw4a[2]=lw; else lw4a[1]=lw;
								}
							}
							else // this.tree[j-1][i] is a node
							{
								if (!this.isOnFocusPath(this.tree[j-1][i])) this.tree[j][i].Focus=0;
								else
								{
									if (this.isOnFocusPath(aN))
									{
										this.tree[j][i].Focus=1;
										lw4a[0]=lw;
										lw4a[2]=lw;
									}
									else if ((aN!=this.tree[j-1][i].Kid[0])&&this.isOnFocusPath(this.tree[j-1][i].Kid[0])) this.tree[j][i].Focus=0;
									else if ((aN!=this.tree[j-1][i].Kid[1])&&this.isOnFocusPath(this.tree[j-1][i].Kid[1])) this.tree[j][i].Focus=0;
									else
									{
										this.tree[j][i].Focus=1;
										lw4a[0]=lw;
										lw4a[1]=lw;
									}
								}
							}
							c4a=[c,this.getEmphasisColor(this.tree[j+1][i].Good),this.getEmphasisColor(this.tree[j+1][i+1].Good)];
							this.drawTreeLine("T1",i,j,c4a,lw4a);
						}
						else if (this.tree[j][i]&&(this.tree[j][i].Shape==-3))
						{
							if (this.tree[j-1][i].Shape)
							{
								if (this.tree[j-1][i].Shape==-3) this.tree[j][i].Focus=this.tree[j-1][i].Focus;
								else // this.tree[j-1][i] is "T1"
								{
									if (this.isOnFocusPath(this.tree[j][i+1])) this.tree[j][i].Focus=0;
									else this.tree[j][i].Focus=this.tree[j-1][i].Focus;
								}
							}
							else // this.tree[j-1][i] is a node
							{
								if (!this.isOnFocusPath(this.tree[j-1][i])) this.tree[j][i].Focus=0;
								else if (this.tree[j-1][i+1].Dad&&(this.tree[j-1][i]==this.tree[j-1][i+1].Dad)&&this.isOnFocusPath(this.tree[j-1][i+1])) this.tree[j][i].Focus=0;
								else if (this.tree[j][i+1].Dad&&(this.tree[j-1][i]==this.tree[j][i+1].Dad)&&this.isOnFocusPath(this.tree[j][i+1])) this.tree[j][i].Focus=0;
								else this.tree[j][i].Focus=1;
							}
							if (this.tree[j][i].Focus) lw2=lw; else lw2=this.treeLineWidth;
							this.drawTreeLine("V1",i,j,c,lw2);
						}
					}
				}
		}
	}
};

mxG.G.prototype.drawMTreeLine3=function(k,h2dt,nv)
{
	var i,j,jm,c,lw=this.emphasisTreeLineWidth,lw2,aN,c4a,lw4a;
	jm=Math.min(k+nv,this.treeRowMax);
	for (j=k;j<jm;j++)
	{
		if (!this.treeCheck[j])
		{
			this.treeCheck[j]=1;
			for (i=0;i<this.treeColumnMax;i++)
				if ((this.tree[j]!=undefined)&&(this.tree[j][i]!=undefined))
				{
					if (this.tree[j][i]&&this.tree[j][i].Dad) this.drawTreePoint(this.tree[j][i]);
					//else if (h2dt&2)
					else
					{
						// not an object thus add V1, T1, A1
						if (this.tree[j][i]) c=this.getEmphasisColor(this.tree[j][i].Good);
						if (this.tree[j][i]&&(this.tree[j][i].Shape==-1))
						{
							if (this.isOnFocusPath(this.tree[j+1][i+1])) this.tree[j][i].Focus=1;
							else this.tree[j][i].Focus=0;
							if (this.tree[j][i].Focus) lw2=lw; else lw2=this.treeLineWidth;
							this.drawTreeLine("A1",i,j,c,lw2);
						}
						else if (this.tree[j][i]&&(this.tree[j][i].Shape==-2))
						{
							lw4a=[this.treeLineWidth,this.treeLineWidth,this.treeLineWidth];
							aN=this.tree[j+1][i+1];
							if (this.tree[j-1][i].Shape)
							{
								if (this.tree[j-1][i].Shape==-3) this.tree[j][i].Focus=this.tree[j-1][i].Focus;
								else // this.tree[j-1][i] is "T1"
								{
									if (this.isOnFocusPath(this.tree[j][i+1])) this.tree[j][i].Focus=0;
									else this.tree[j][i].Focus=this.tree[j-1][i].Focus;
								}
								if (this.tree[j][i].Focus)
								{
									lw4a[0]=lw;
									if (this.isOnFocusPath(aN)) lw4a[2]=lw; else lw4a[1]=lw;
								}
							}
							else // this.tree[j-1][i] is a node
							{
								if (!this.isOnFocusPath(this.tree[j-1][i])) this.tree[j][i].Focus=0;
								else
								{
									if (this.isOnFocusPath(aN))
									{
										this.tree[j][i].Focus=1;
										lw4a[0]=lw;
										lw4a[2]=lw;
									}
									else if ((aN!=this.tree[j-1][i].Kid[0])&&this.isOnFocusPath(this.tree[j-1][i].Kid[0])) this.tree[j][i].Focus=0;
									else if ((aN!=this.tree[j-1][i].Kid[1])&&this.isOnFocusPath(this.tree[j-1][i].Kid[1])) this.tree[j][i].Focus=0;
									else
									{
										this.tree[j][i].Focus=1;
										lw4a[0]=lw;
										lw4a[1]=lw;
									}
								}
							}
							c4a=[c,this.getEmphasisColor(this.tree[j+1][i].Good),this.getEmphasisColor(this.tree[j+1][i+1].Good)];
							this.drawTreeLine("T1",i,j,c4a,lw4a);
						}
						else if (this.tree[j][i]&&(this.tree[j][i].Shape==-3))
						{
							if (this.tree[j-1][i].Shape)
							{
								if (this.tree[j-1][i].Shape==-3) this.tree[j][i].Focus=this.tree[j-1][i].Focus;
								else // this.tree[j-1][i] is "T1"
								{
									if (this.isOnFocusPath(this.tree[j][i+1])) this.tree[j][i].Focus=0;
									else this.tree[j][i].Focus=this.tree[j-1][i].Focus;
								}
							}
							else // this.tree[j-1][i] is a node
							{
								if (!this.isOnFocusPath(this.tree[j-1][i])) this.tree[j][i].Focus=0;
								else if (this.tree[j-1][i+1].Dad&&(this.tree[j-1][i]==this.tree[j-1][i+1].Dad)&&this.isOnFocusPath(this.tree[j-1][i+1])) this.tree[j][i].Focus=0;
								else if (this.tree[j][i+1].Dad&&(this.tree[j-1][i]==this.tree[j][i+1].Dad)&&this.isOnFocusPath(this.tree[j][i+1])) this.tree[j][i].Focus=0;
								else this.tree[j][i].Focus=1;
							}
							if (this.tree[j][i].Focus) lw2=lw; else lw2=this.treeLineWidth;
							this.drawTreeLine("V1",i,j,c,lw2);
						}
					}
				}
		}
	}
};

mxG.G.prototype.drawTreePoint2=function(aN)
{
	var d=this.dT+2,r=(d>>1),r2=(d>>2),nat,s="",x,y,cn,cx,xo,yo,xx,yy,dd;
	var n=this.treeN,m=this.treeM,c,bN,lw,lw2,ofp,od=0;
	ofp=this.isOnFocusPath(aN);
	if (ofp) lw=this.emphasisTreeLineWidth; else lw=this.treeLineWidth;
	if (aN.P["B"]) nat="B";else if (aN.P["W"]) nat="W";else nat="KA";
	if (!this.hideTreeNumbering&&((nat=="B")||(nat=="W")))
	{
		if (aN.P.C&&this.markCommentOnTree) s="?";
		else if (this.hasC("Diagram")) s=this.getAsInTreeNum(aN);
	}
	x=aN.iTree;
	y=aN.jTree;
	xx=Math.floor(x/m)*m;
	yy=Math.floor(y/n)*n;
	dd=this.getTreeD();
	xo=(x-xx)*dd;
	yo=(y-yy)*dd;
	cn=this.getE("TreePointCanvas"+this.idt(xx,yy));
	if (!cn) cn=this.addPointToTree(this.getE("TreeDiv"),xx,yy);
	cx=cn.getContext("2d");
	// always erase (bad to draw more than once on the same place when alpha)
	// erase as below to avoid side effect on possible diagonal lines on top rigth or bottom left
	cx.clearRect(xo+0.5,yo+0.5,d+(r2<<1)-2,d+(r2<<1)-2);
	cx.clearRect(xo+0.5+d+(r2<<1)-2,yo+0.5+d+(r2<<1)-2,1.5,1.5);
	if (c=this.hasEmphasis(aN)) this.drawTreeEmphasis(cx,xo+r2,yo+r2,d,c);
	if ((nat=="B")||(nat=="W"))
	{
		cx.drawImage(this.imgTree[nat],xo+r2+1,yo+r2+1,d-2,d-2);
		if (s) this.drawText(cx,xo+r2+1,yo+r2+1,d-2,s,{c:(nat=="B")?"#fff":"#000"});
	}
	else {cx.strokeStyle=this.onTreeEmptyColor;this.drawTriangle(cx,xo+1+r2,yo+1+r2,d-2);}
	
	if (x)
	{
		// from dad line
		c=this.getEmphasisColor(aN.Good);
		if (this.tree[y][x-1]==aN.Dad) this.drawTreeLine("H2L",x,y,c,lw);
		else this.drawTreeLine("D2TL",x,y,c,lw);
	}
	if (aN.Kid&&aN.Kid.length)
	{
		// to kids lines
		if ((this.tree[y][x+1]!=undefined)&&(this.tree[y][x+1]!=undefined)&&(this.tree[y][x+1].Dad==aN))
		{
			if (ofp&&this.isOnFocusPath(this.tree[y][x+1])) {lw2=lw;od=1;} else lw2=this.treeLineWidth;
			c=this.getEmphasisColor(this.tree[y][x+1].Good);
			this.drawTreeLine("H2R",x,y,c,lw2);
		}
		if ((this.tree[y+1]!=undefined)&&(this.tree[y+1][x+1]!=undefined)&&(this.tree[y+1][x+1].Dad==aN))
		{
			if (ofp&&this.isOnFocusPath(this.tree[y+1][x+1])) {lw2=lw;od=1;} else lw2=this.treeLineWidth;
			c=this.getEmphasisColor(this.tree[y+1][x+1].Good);
			this.drawTreeLine("D2BR",x,y,c,lw2);
		}
		if ((this.tree[y+1]!=undefined)&&(this.tree[y+1][x]!=undefined)
		  &&((this.tree[y+1][x].Shape==-1)||(this.tree[y+1][x].Shape==-2)||(this.tree[y+1][x].Shape==-3)))
		{
			if (ofp&&!od) lw2=lw;else lw2=this.treeLineWidth;
			c=this.getEmphasisColor(this.tree[y+1][x].Good);
			this.drawTreeLine("V2B",x,y,c,lw2);
		}
	}
};

mxG.G.prototype.drawTreePointAndLines=function(aN)
{
	var i,j,lw=this.emphasisTreeLineWidth,lw2,c,jo,jm,f,c4a,lw4a;
	this.drawTreePoint(aN);
	if (aN.Dad==this.rN) return;
	i=aN.iTree-1;
	jo=aN.Dad.jTree;
	jm=aN.jTree-1;
	for (j=jm;j>jo;j--)
	{
		if ((this.tree[j]!=undefined)&&(this.tree[j][i]!=undefined)&&(this.tree[j][i].Shape))
		{
			if (this.tree[j][i]) c=this.getEmphasisColor(this.tree[j][i].Good);
			if (this.isOnFocusPath(aN)) {f=1;lw2=lw;} else {f=0;lw2=this.treeLineWidth;}
			if (this.tree[j][i].Shape==-1) {this.tree[j][i].Focus=f;this.drawTreeLine("A1",i,j,c,lw2);}
			else if (this.tree[j][i].Shape==-2)
			{
				lw4a=[lw2,lw2,lw2];
				if (f)
				{
					if (this.isOnFocusPath(this.tree[j+1][i+1])) lw4a[1]=this.treeLineWidth;
					else lw4a[2]=this.treeLineWidth;
				}
				c4a=[c,this.getEmphasisColor(this.tree[j+1][i].Good),this.getEmphasisColor(this.tree[j+1][i+1].Good)];
				this.tree[j][i].Focus=f;
				this.drawTreeLine("T1",i,j,c4a,lw4a);
			}
			else if (this.tree[j][i].Shape==-3) {this.tree[j][i].Focus=f;this.drawTreeLine("V1",i,j,c,lw2);}
		}
	}
};

mxG.G.prototype.afterDrawTree2=function()
{
	if (this.treeFormerLast&&(this.treeFormerLast!=this.treeCurrentLast))
	{
		aN=this.treeFormerLast;
		while (aN!=this.rN) {this.drawTreePointAndLines(aN);aN=aN.Dad;}
		this.treeFormerLast=0;
	}
	if (this.treeCurrentLast)
	{
		aN=this.treeCurrentLast;
		while (aN!=this.rN) {this.drawTreePointAndLines(aN);aN=aN.Dad;}
	}
	this.treeNodeOnFocus=this.cN;
	this.scrollTreeToShowFocus();
};

// Goban patch

mxG.G.prototype.drawMarkOnLast2=function(cx,x,y,d,c)
{
	var dm=Math.floor(4*d/13);
	cx.strokeStyle=this.markOnLastColor?this.markOnLastColor:c;
	cx.lineWidth=3;
	cx.beginPath();
	cx.arc(x+dm+(d-2*dm)/2,y+dm+(d-2*dm)/2,(d-2*dm)/2,0,Math.PI*2,false);
	cx.stroke();
};

// Comment patch

mxG.G.prototype.getOneComment2=function(aN)
{
	var c=this.htmlProtect(aN.P.C?aN.P.C[0]:"").replace(/\n/g,"<br>"),Good;
	if (aN.Add) c="<div class=\"mxOffPathCommentDiv\">"+this.local("Off path")+"</div>"+c;
	else if (!aN.KidOnFocus())
	{
		Good=aN.Good;
		if (aN.Good&this.goodnessCode.Good)
		{
			bN=aN;
			while(bN.Dad&&bN.Dad.Good)
			{
				bN=bN.Dad;
				if (bN.Good==this.goodnessCode.Bad) {Good=this.goodnessCode.Warning;break;}
			}
		}
		if (this.josekiMode)
		{
			switch(Good)
			{
				case this.goodnessCode.Good:c="<div class=\"mxGoodCommentDiv\">"+this.local("Joseki")+"</div>"+c;break;
				case this.goodnessCode.Bad:c="<div class=\"mxBadCommentDiv\">"+this.local("Wrong")+"</div>"+c;break;
				//case this.goodnessCode.Even:c="<div class=\"mxEvenCommentDiv\">"+this.local("Even")+"</div>"+c;break;
				//case this.goodnessCode.Warning:c="<div class=\"mxWarningCommentDiv\">"+this.local("Warning")+"</div>"+c;break;
				//case this.goodnessCode.Unclear:c="<div class=\"mxUnclearCommentDiv\">"+this.local("Unclear")+"</div>"+c;break;
				case this.goodnessCode.OffPath:c="<div class=\"mxOffPathCommentDiv\">"+this.local("Off path")+"</div>"+c;break;
			}
		}
		else
		{
			switch(Good)
			{
				case this.goodnessCode.Good:c="<div class=\"mxGoodCommentDiv\">"+this.local("Solved")+"</div>"+c;break;
				case this.goodnessCode.Bad:c="<div class=\"mxBadCommentDiv\">"+this.local("Wrong")+"</div>"+c;break;
				//case this.goodnessCode.Even:c="<div class=\"mxEvenCommentDiv\">"+this.local("Even")+"</div>"+c;break;
				//case this.goodnessCode.Warning:c="<div class=\"mxWarningCommentDiv\">"+this.local("Warning")+"</div>"+c;break;
				//case this.goodnessCode.Unclear:c="<div class=\"mxUnclearCommentDiv\">"+this.local("Unclear")+"</div>"+c;break;
				case this.goodnessCode.OffPath:c="<div class=\"mxOffPathCommentDiv\">"+this.local("Off path")+"</div>"+c;break;
			}
		}
	}
	return c;
};

// Size component

mxG.G.prototype.refreshSize=function()
{
	var p,g,c,s,t,n,r,v,so,b1,b2,b3,wp,wg,wb1,wb2,wb3,m,hg,hs,hso;
	g=this.getE("GobanDiv");
	c=this.getE("CommentDiv");
	t=this.getE("TreeDiv");
	v=this.getE("VersionDiv");
	b1=g.parentNode;
	b2=c.parentNode;
	b3=t.parentNode;
	b4=v.parentNode;
	p=b1.parentNode;
	wp=mxG.GetPxStyle(p,"width");
	wg=mxG.GetPxStyle(g,"width")+this.getDW(g);
	if (wp>(wg+12*this.d+6))
	{
		m=6;
		wb1=wg;
		wb2=12*this.d;
		wb3=wb1+m+wb2;
		b1.style.display="inline-block";
		b2.style.display="inline-block";
		b2.style.paddingLeft=m+"px";
	}
	else
	{
		m=0;
		wb3=wb2=wb1=wg;
		b1.style.display="block";
		b2.style.display="block";
		b2.style.paddingLeft="0";
	}
	b1.style.width=wb1+"px";
	b2.style.width=wb2+"px";
	b3.style.width=wb3+"px";
	if (m)
	{
		dc=mxG.GetPxStyle(c,"borderTopWidth")+mxG.GetPxStyle(c,"borderBottomWidth")
			+mxG.GetPxStyle(c,"marginTop")+mxG.GetPxStyle(c,"marginBottom")
			+mxG.GetPxStyle(c,"paddingTop")+mxG.GetPxStyle(c,"paddingBottom");
		hg=mxG.GetPxStyle(g,"height")
			+mxG.GetPxStyle(g,"borderTopWidth")+mxG.GetPxStyle(g,"borderBottomWidth")
			+mxG.GetPxStyle(g,"marginTop")+mxG.GetPxStyle(g,"marginBottom")
			+mxG.GetPxStyle(g,"paddingTop")+mxG.GetPxStyle(g,"paddingBottom");
		if (this.solutionOn)
		{
			n=this.getE("NavigationDiv");
			r=this.getE("ResetDiv");
			hn=mxG.GetPxStyle(n,"height")
				+mxG.GetPxStyle(n,"borderTopWidth")+mxG.GetPxStyle(n,"borderBottomWidth")
				+mxG.GetPxStyle(n,"marginTop")+mxG.GetPxStyle(n,"marginBottom")
				+mxG.GetPxStyle(n,"paddingTop")+mxG.GetPxStyle(n,"paddingBottom");
			hr=mxG.GetPxStyle(r,"height")
				+mxG.GetPxStyle(r,"borderTopWidth")+mxG.GetPxStyle(r,"borderBottomWidth")
				+mxG.GetPxStyle(r,"marginTop")+mxG.GetPxStyle(r,"marginBottom")
				+mxG.GetPxStyle(r,"paddingTop")+mxG.GetPxStyle(r,"paddingBottom");
			c.style.height=(hg-hn-hr-dc)+"px";
		 }
		 else
		 {
		 	s=this.getE("SolveDiv");
		 	so=this.getE("SolutionDiv");
			hs=mxG.GetPxStyle(s,"height")
				+mxG.GetPxStyle(s,"borderTopWidth")+mxG.GetPxStyle(s,"borderBottomWidth")
				+mxG.GetPxStyle(s,"marginTop")+mxG.GetPxStyle(s,"marginBottom")
				+mxG.GetPxStyle(s,"paddingTop")+mxG.GetPxStyle(s,"paddingBottom");
			hso=mxG.GetPxStyle(so,"height")
				+mxG.GetPxStyle(so,"borderTopWidth")+mxG.GetPxStyle(so,"borderBottomWidth")
				+mxG.GetPxStyle(so,"marginTop")+mxG.GetPxStyle(so,"marginBottom")
				+mxG.GetPxStyle(so,"paddingTop")+mxG.GetPxStyle(so,"paddingBottom");
		 	c.style.height=(hg-hs-hso-dc)+"px";
		 }
		
	}
	else c.style.height="8em";
	b4.style.width=wb3+"px";
};

mxG.G.prototype.createSize=function()
{
};

// Reset component

mxG.G.prototype.doReset=function()
{
	this.getE("NavigationDiv").style.display="none";
	this.getE("ResetDiv").style.display="none";
	this.getE("SolveDiv").style.display="block";
	this.getE("SolutionDiv").style.display="block";
	this.getE("TreeDiv").style.display="none";
	this.getE("TreeDiv").parentNode.style.paddingTop="0";
	this.getE("LegendDiv").style.display="none";
	this.solutionOn=0;
	this.canPlaceSolve=1;
	this.canPlaceVariation=0;
	this.markOnLastOn=0;
	this.variationMarksOn=0;
	this.variationEmphasisOn=0;
	this.variationAsMarkOn=0;
	this.backNode(this.rN.KidOnFocus());
	this.updateAll();
};

mxG.G.prototype.updateReset=function()
{
	// must be called before updateTree
	var aN,bN;
	if (this.treeCurrentLast)
	{
		aN=this.treeCurrentLast;
		this.treeFormerLast=aN;
		while (aN!=this.rN) {aN.OnPath=0;aN=aN.Dad;}
	}
	aN=this.cN;
	while (aN.KidOnFocus()) aN=aN.KidOnFocus();
	this.treeCurrentLast=aN;
	while (aN!=this.rN) {aN.OnPath=1;aN=aN.Dad;}
};

mxG.G.prototype.createReset=function()
{
	this.write("<div class=\"mxResetDiv\" id=\""+this.n+"ResetDiv\">");
	this.addBtn({n:"Reset",v:this.local("Reset")});
	this.write("</div>");
};

// Solution component

mxG.G.prototype.doSolution=function()
{
	this.getE("NavigationDiv").style.display="block";
	this.getE("ResetDiv").style.display="block";
	this.getE("SolveDiv").style.display="none";
	this.getE("SolutionDiv").style.display="none";
	this.getE("TreeDiv").style.display="block";
	this.getE("TreeDiv").parentNode.style.paddingTop="6px";
	this.getE("LegendDiv").style.display="block";
	this.solutionOn=1;
	this.canPlaceSolve=0;
	this.canPlaceVariation=1;
	this.markOnLastOn=1;
	this.variationMarksOn=1;
	this.variationEmphasisOn=1;
	if (!this.josekiMode) this.variationAsMarkOn=1;
	this.updateAll();
};

mxG.G.prototype.createSolution=function()
{
	this.write("<div class=\"mxSolutionDiv\" id=\""+this.n+"SolutionDiv\">");
	this.addBtn({n:"Solution",v:this.local("Solution")});
	this.write("</div>");
};

// UsersComments component

mxG.G.prototype.createUsersComments=function()
{
	this.write("<div class=\"mxUsersCommentsDiv\" id=\""+this.n+"UsersCommentsDiv\">");
	this.write("</div>");
};

// Legend component

mxG.G.prototype.createLegend=function()
{
	var s="";
	s+="<p>Path legend:</p>";
	s+="<ul>";
	if (this.josekiMode)
	{
		s+="<li class=\"mxGood\">Green: good variation!</li>";
		s+="<li class=\"mxBad\">Red: bad variation!</li>";
		s+="<li class=\"mxUnclear\">Yellow: may be good, may be bad!</li>";
	}
	else
	{
		s+="<li class=\"mxGood\">Green: you well played. Solved!</li>";
		s+="<li class=\"mxBad\">Red: you made a mistake somewhere. Wrong!</li>";
		s+="<li class=\"mxUnclear\">Yellow: you played something but that all what one can say at the moment. Unclear!</li>";
	}
	s+="<li class=\"mxOffPath\">Blue: you added these moves. Off path!</li>";
	s+="</ul>";
	this.write("<div class=\"mxLegendDiv\" id=\""+this.n+"LegendDiv\">");
	this.write(s);
	this.write("</div>");
};

}
