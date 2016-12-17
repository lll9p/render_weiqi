// maxiGos v6.57 > mgosTree.js

if (typeof mxG.G.prototype.createTree=='undefined'){

mxG.G.prototype.idt=function(x,y)
{
	return x+"_"+y;
};

mxG.G.prototype.stopDrawTreeIfAny=function()
{
	if (this.treeIntervalId) {clearInterval(this.treeIntervalId);this.treeIntervalId=0;}
	this.treeIntervalK=0;
};

mxG.G.prototype.getCT=function(ev,xo,yo)
{
	var x,y,c=this.getE("TreePointCanvas"+this.idt(xo,yo)).getMClick(ev),d=this.getTreeD();
	x=xo+Math.floor((c.x-1)/d);
	y=yo+Math.floor((c.y-1)/d);
	return {x:x,y:y}
};

mxG.G.prototype.doClickTree=function(ev,xo,yo)
{
	var aN,c,x,y;
	if (this.isTreeDisabled()) return;
	c=this.getCT(ev,xo,yo);
	x=c.x;
	y=c.y;
	if ((this.tree[y]!=undefined)&&(this.tree[y][x]!=undefined))
	{
		aN=this.tree[y][x];
		this.backNode(aN);
		this.updateAll();
	}
};

mxG.G.prototype.getTreeD=function()
{
	var d=this.dT+2;
	return d+((d>>2)<<1)-1;
};

mxG.G.prototype.addPointToTree=function(treeDiv,x,y)
{
	if (this.getE("TreePointCanvas"+this.idt(x,y))) return;
	var left,top,cn,d=this.getTreeD(),k,n=this.treeN,m=this.treeM;
	left=d*x-1;
	top=d*y-1;
	cn=document.createElement("canvas");
	cn.id=this.n+"TreePointCanvas"+this.idt(x,y);
	cn.height=n*d+2;
	cn.width=m*d+2;
	cn.style.display="block";
	cn.style.position="absolute";
	cn.style.left=left+"px";
	cn.style.top=top+"px";
	k=this.k;
	cn.getMClick=mxG.GetMClick;
	if (cn.addEventListener)
		cn.addEventListener("click",function(ev){mxG.D[k].doClickTree(ev,x,y);},false);
	treeDiv.appendChild(cn);
	return cn;
};

mxG.G.prototype.computeTreeD=function()
{
	var d,dmin,s;
	if (!this.treeDScale&&!this.treeDMin) return this.d;
	dmin=(this.treeDMin?this.treeDMin:19);
	dscale=(this.treeDScale?this.treeDScale:1);
	d=Math.max(this.d*dscale,dmin);
	d=((d>>1)<<1)+1;
	return d;
};

mxG.G.prototype.addPointsToTree=function()
{
	// use canvas of nxn tree nodes
	// using many canvas with one node each is slow
	// using one canvas with all nodes is impossible (device limit)
	var treeDiv=this.getE("TreeDiv"),i,j,n=this.treeN,m=this.treeM;
	this.stopDrawTreeIfAny();	
	this.dT=this.computeTreeD();
	this.imgTree={B:this.setImg("B",this.dT),W:this.setImg("W",this.dT)};
	while (treeDiv.firstChild) treeDiv.removeChild(treeDiv.firstChild);
	for (j=0;j<this.treeRowMax;j=j+n)
		for (i=0;i<this.treeColumnMax;i=i+m)
			this.addPointToTree(treeDiv,i,j);
	this.hasToDrawTree=2;
};

mxG.G.prototype.drawTreeLine=function(s,x,y,c,lw)
{
	var d=this.dT+2,r=(d>>1),r2=(d>>2),cn,cx,z,xx,yy,dd,xo,yo,n=this.treeN,m=this.treeM;
	xx=Math.floor(x/m)*m;
	yy=Math.floor(y/n)*n;
	dd=this.getTreeD();
	xo=(x-xx)*dd;
	yo=(y-yy)*dd;
	cn=this.getE("TreePointCanvas"+this.idt(xx,yy));
	if (!cn) cn=this.addPointToTree(this.getE("TreeDiv"),xx,yy);
	cx=cn.getContext("2d");
	cx.strokeStyle=(c?c:this.treeLineColor);
	cx.lineWidth=(lw?lw:this.treeLineWidth);
	z=(this.tree[y][x]==this.cN)?0:1;
	if (s=="H2L")
	{
		cx.beginPath();
		cx.moveTo(xo,yo+r2+r+0.5);
		cx.lineTo(xo+r2+z,yo+r2+r+0.5);
		cx.stroke();
	}
	if (s=="D2TL")
	{
		cx.beginPath();
		cx.moveTo(xo+0.5,yo+0.5);
		cx.lineTo(xo+r2+(z?0.15:0)*d+0.5,yo+r2+(z?0.15:0)*d+0.5);
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
		cx.moveTo(xo+r2+(z?0.85:1)*d-0.5,yo+r2+(z?0.85:1)*d-0.5);
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
		cx.beginPath();
		cx.moveTo(xo+r2+r+0.5,yo);
		cx.lineTo(xo+r2+r+0.5,yo+(r2<<1)+d);
		cx.stroke();
	}
	else if (s=="A1")
	{
		cx.beginPath();
		cx.moveTo(xo+r2+r+0.5,yo);
		cx.lineTo(xo+r2+r+0.5,yo+r2+r+0.5);
		cx.lineTo(xo+(r2<<1)+d-0.5,yo+(r2<<1)+d-0.5);
		cx.stroke();
	}
	else if (s=="T1")
	{
		cx.beginPath();
		cx.moveTo(xo+r2+r+0.5,yo);
		cx.lineTo(xo+r2+r+0.5,yo+(r2<<1)+d);
		cx.moveTo(xo+r2+r+0.5,yo+r2+r+0.5);
		cx.lineTo(xo+(r2<<1)+d-0.5,yo+(r2<<1)+d-0.5);
		cx.stroke();
	}
};

mxG.G.prototype.drawTreeEmphasis=function(cx,xo,yo,d,c)
{
	var r=d/2;
	cx.fillStyle=c;
	if (this.circularTreeEmphasis)
	{
		cx.beginPath();
		cx.arc(xo+r,yo+r,r+1,0,Math.PI*2,false);
		cx.fill();
	}
	else cx.fillRect(xo,yo,d,d);
};

mxG.G.prototype.hasEmphasis=function(aN)
{
	// for customization
	if (aN==this.cN) return this.treeFocusColor;
	else return 0;
};

mxG.G.prototype.drawTreePoint=function(aN)
{
	var d=this.dT+2,r=(d>>1),r2=(d>>2),nat,s="",x,y,cn,cx,xo,yo,xx,yy,dd;
	var n=this.treeN,m=this.treeM,c,bN,lw=this.treeLineWidth;
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
			c=this.getEmphasisColor(this.tree[y][x+1].Good);
			this.drawTreeLine("H2R",x,y,c,lw);
		}
		if ((this.tree[y+1]!=undefined)&&(this.tree[y+1][x+1]!=undefined)&&(this.tree[y+1][x+1].Dad==aN))
		{
			c=this.getEmphasisColor(this.tree[y+1][x+1].Good);
			this.drawTreeLine("D2BR",x,y,c,lw);
		}
		if ((this.tree[y+1]!=undefined)&&(this.tree[y+1][x]!=undefined)
		  &&((this.tree[y+1][x].Shape==-1)||(this.tree[y+1][x].Shape==-2)||(this.tree[y+1][x].Shape==-3)))
		{
			c=this.getEmphasisColor(this.tree[y+1][x].Good);
			this.drawTreeLine("V2B",x,y,c,lw);
		}
	}
};

mxG.G.prototype.computeGoodness=function(aN,good) {return 0;}; // for customization

mxG.G.prototype.buildTree=function(aN,io,jo)
{
	var i=io,j=jo,k,km=aN.Kid.length,l,good=0,path,p,pm;
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
		good=good|this.buildTree(aN.Kid[k],i+1,j);
		pm=path.length;
		for (p=0;p<pm;p++) {this.tree[path[p].j][path[p].i].Good=aN.Kid[k].Good;}
	}
	this.treeColumnMax=Math.max(this.treeColumnMax,i+1);
	return aN.Good=this.computeGoodness(aN,good);
};

mxG.G.prototype.getTreeNumOfVisibleLines=function()
{
	var e=this.getE("TreeDiv");
	if (e.clientHeight===undefined) return 20;
	return Math.floor(e.clientHeight/this.getTreeD())+1;
};

mxG.G.prototype.drawMTreeLine=function(k,h2dt,nv)
{
	var i,j,jm,c,lw=this.treeLineWidth;
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
						if (this.tree[j][i]&&(this.tree[j][i].Shape==-1)) this.drawTreeLine("A1",i,j,c,lw);
						else if (this.tree[j][i]&&(this.tree[j][i].Shape==-2)) this.drawTreeLine("T1",i,j,c,lw);
						else if (this.tree[j][i]&&(this.tree[j][i].Shape==-3)) this.drawTreeLine("V1",i,j,c,lw);
					}
				}
		}
	}
};

mxG.G.prototype.drawMTreeLineAsync=function(h2dt,nv)
{
	var i,j,jm,k;
	k=this.treeIntervalK;
	this.drawMTreeLine(k,h2dt,nv);
	k=k+this.treeN;
	if (k>=this.treeRowMax)
	{
		clearInterval(this.treeIntervalId);
		this.treeIntervalId=0;
		this.treeIntervalK=0;
	}
	else this.treeIntervalK=k;
};

mxG.G.prototype.afterDrawTree=function()
{
	// for customization
	this.treeNodeOnFocus=this.cN;
	this.scrollTreeToShowFocus();
};

mxG.G.prototype.drawTree=function(h2dt)
{
	// h2dt must be a parameter since drawTree() can be run by a setTimeout later
	var j,jo,dt,da,n=this.treeN,nv;
	if (!this.img.B.canDraw||!this.img.W.canDraw)
	{
		setTimeout(this.g+".drawTree("+h2dt+")",100);
		return;
	}
	this.stopDrawTreeIfAny();
	h2dt=h2dt|this.hasToDrawTree;
	this.treeCheck=[];
	nv=this.getTreeNumOfVisibleLines();
	jo=Math.max(0,this.cN.jTree-nv);
	// first draw lines around current node only
	dt=new Date();
	this.drawMTreeLine(jo,h2dt,nv*2);
	da=Math.round((new Date().getTime()-dt.getTime())/(nv*2));
	// then draw all lines asynchronously
	if (nv<this.treeRowMax)
		this.treeIntervalId=setInterval(this.g+".drawMTreeLineAsync("+h2dt+","+n+")",5*n*da);
	this.hasToDrawTree=0;
	this.afterDrawTree();
};

mxG.G.prototype.addNodeInTree=function(aN)
{
	var i,j,bN=aN.Dad;
	if (bN&&(bN!=this.rN))
	{
		i=bN.iTree;
		j=bN.jTree;
		if ((this.tree[j][i+1]===undefined)
		  ||(this.tree[j+1]===undefined)
		  ||(this.tree[j+1][i+1]===undefined))
		{
			if (this.tree[j][i+1]===undefined) i++;
			else
			{
				if (this.tree[j+1]===undefined) {this.tree[this.treeRowMax]=[];this.treeRowMax++;}
				i++;j++;
			}
			this.tree[j][i]=aN;
			aN.iTree=i;
			aN.jTree=j;
			if (this.goodnessCode) aN.Good=this.goodnessCode.OffPath;
			this.treeColumnMax=Math.max(this.treeColumnMax,i+1);
		}
		else this.initTree();
	}
	else this.initTree();
};

mxG.G.prototype.initTree=function()
{
	var treeDiv=this.getE("TreeDiv"),i,j,k,km=this.rN.Kid.length,aN;
	this.stopDrawTreeIfAny();
	this.tree=[];
	this.treeRowMax=0;
	this.treeColumnMax=0;
	for (k=0;k<km;k++)
	{
		aN=this.rN.Kid[k];
		while (aN.KidOnFocus()) aN=aN.KidOnFocus();
		this.treeCurrentLast=aN;
		this.buildTree(this.rN.Kid[k],0,this.treeRowMax);
	}
	// adding all canvas here seems faster than drawing them one by one later
	this.addPointsToTree();
};

mxG.G.prototype.scrollTreeToShowFocus=function()
{
	var i,j,left,top,right,bottom,width,height,scrollLeft,scrollTop,e,d;
	if (!this.treeNodeOnFocus) return;
	i=this.treeNodeOnFocus.iTree;
	j=this.treeNodeOnFocus.jTree;
	d=this.getTreeD();
	left=d*i;
	top=d*j;
	right=left+d+1;
	bottom=top+d+1;
	e=this.getE("TreeDiv");
	if (!e) return;
	if (e.clientWidth===undefined) return;
	width=e.clientWidth; // clientWidth=offsetWidth-scrollBarSize in theory?
	if (!width) return;
	if (e.clientHeight===undefined) return;
	height=e.clientHeight; // clientHeight=offsetHeight-scrollBarSize in theory?
	if (!height) return;
	if (e.scrollLeft===undefined) return;
	scrollLeft=e.scrollLeft;
	if (e.scrollTop===undefined) return;
	scrollTop=e.scrollTop;
	if (left<scrollLeft) e.scrollLeft=left;
	else if ((right-width)>scrollLeft) e.scrollLeft=right-width;
	if (top<scrollTop) e.scrollTop=top;
	else if ((bottom-height)>scrollTop) e.scrollTop=bottom-height;
};

mxG.G.prototype.disableTree=function()
{
	var e=this.getE("TreeDiv");
	if (!e.hasAttribute("data-maxigos-disabled"))
	{
		e.setAttribute("data-maxigos-disabled","1");
		if (!mxG.IsFirefox) e.setAttribute("tabindex","-1");
	}
};

mxG.G.prototype.enableTree=function()
{
	var e=this.getE("TreeDiv");
	if (e.hasAttribute("data-maxigos-disabled"))
	{
		e.removeAttribute("data-maxigos-disabled");
		if (!mxG.IsFirefox) e.setAttribute("tabindex","0");
	}
};

mxG.G.prototype.isTreeDisabled=function()
{
	return this.getE("TreeDiv").hasAttribute("data-maxigos-disabled");
};

mxG.G.prototype.setTreeSize=function()
{
	var t,g,htp,hgp;
	if (this.adjustTreeWidth) this.adjust("Tree","Width");
	if (this.adjustTreeHeight)
	{
		if (this.adjustTreeHeight==2)
		{
			t=this.getE("TreeDiv");
			g=this.getE("GobanDiv");
			htp=mxG.GetPxStyle(t.parentNode,"height");
			hgp=mxG.GetPxStyle(g.parentNode,"height");
			if (htp!=hgp) {t.style.height=mxG.GetPxStyle(t,"height")+(hgp-htp)+"px"};
		}
		else this.adjust("Tree","Height");
	}
};

mxG.G.prototype.updateTree=function()
{
	var aN;
	this.setTreeSize();
	if (this.hasToDrawTree) {this.drawTree(this.hasToDrawTree);}
	else
	{
		// remember that drawTree can display trough a timeout, thus don't go here after drawTree
		if ((aN=this.treeNodeOnFocus)&&(aN!=this.rN)&&(aN!=this.cN)) this.drawTreePoint(aN);
		if ((aN=this.cN)&&(aN!=this.rN)&&(aN!=this.treeNodeOnFocus)) this.drawTreePoint(aN);
		this.afterDrawTree();
	}
	if (this.gBox) this.disableTree();else this.enableTree();
};

mxG.G.prototype.refreshTree=function()
{
	var e=this.getE("TreeDiv"),j,nv;
	this.hasToAfterDrawTree=0;
	this.setTreeSize();
	if (this.computeTreeD()!=this.dT) {this.addPointsToTree();this.drawTree(this.hasToDrawTree);}
	else if (this.hasToAfterDrawTree) this.afterDrawTree();
	if (e.scrollTop===undefined) return;
	j=Math.max(0,Math.floor(e.scrollTop/this.getTreeD()));
	nv=this.getTreeNumOfVisibleLines();
	if ((j!=this.treeJ)||(nv!=this.treeNV)) {this.treeJ=j;this.treeNV=nv;this.drawMTreeLine(j,2,nv);}
};

mxG.G.prototype.createTree=function()
{
	var a,s;
	// parameters that may be set in config files
	if (!this.treeN) this.treeN=10; // num of tree lines in the same canvas
	if (!this.treeM) this.treeM=10; // num of tree columns in the same canvas
	if (!this.treeLineWidth) this.treeLineWidth=1;
	if (!this.emphasisTreeLineWidth) this.emphasisTreeLineWidth=this.treeLineWidth*2;
	if (!this.treeFocusColor) this.treeFocusColor="#f00"; // current node color in the tree
	if (!this.treeLineColor) this.treeLineColor="black";
	if (!this.onTreeBlackColor) this.onTreeBlackColor="white";
	if (!this.onTreeWhiteColor) this.onTreeWhiteColor="black";
	if (!this.onTreeEmptyColor) this.onTreeEmptyColor=this.treeLineColor;
	s=" style=\"position:relative;text-align:left;\"";
	a=mxG.IsFirefox?"":" tabindex=\"0\"";
	this.write("<div class=\"mxTreeDiv\" id=\""+this.n+"TreeDiv\""+a+s+">");
	this.write("</div>");
};

}

