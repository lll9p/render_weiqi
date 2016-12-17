<?php
$screen=($mxL=="fr")?"Écran : ":"Screen: ";
$window=($mxL=="fr")?"Fenêtre : ":"Window: ";
$column=($mxL=="fr")?"Colonne : ":"Column: ";
$parent=($mxL=="fr")?"Parent":"Parent";
$fontSize=($mxL=="fr")?"Taille police : ":"Font size: ";
?>
<style>
.measurement {padding:1em;text-align:justify;font-size:75%;}
.row {display:inline-block;width:10em;}
.column {display:inline-block;padding:0 0.125em;}
</style>
<script>
function updateMeasurement()
{
	var e1,e2,e3,s1="",s2="0x0",s3="0x0",s4,k,t0="div",t1="span",t2="span";
	e1=document.getElementById("measurement");
	s1+=("<"+t1+" class=\"row\"><"+t2+" class=\"column\">"+"<?php print $screen;?></"+t2+"><"+t2+" class=\"column\">"+window.screen.width+"x"+window.screen.height+"</"+t2+"></"+t1+">");
	s1+=("<"+t1+" class=\"row\"><"+t2+" class=\"column\">"+"<?php print $window;?></"+t2+"><"+t2+" class=\"column\">"+document.documentElement.clientWidth+"x"+document.documentElement.clientHeight+"</"+t2+"></"+t1+">");
	e2=document.getElementById("flexicontent");
	if (e2&&(typeof mxG.GetPxrStyle!="undefined"))
	{
		s2="<"+t1+" class=\"row\"><"+t2+" class=\"column\">"+"<?php print $column;?></"+t2+"><"+t2+" class=\"column\">"+mxG.GetPxrStyle(e2,"width")+"x"+mxG.GetPxrStyle(e2,"height")+"</"+t2+"></"+t1+">";
		s2+=("<"+t1+" class=\"row\"><"+t2+" class=\"column\">"+"<?php print $fontSize;?></"+t2+"><"+t2+" class=\"column\">"+mxG.GetPxStyle(e2,"fontSize")+"</"+t2+"></"+t1+">");
	}
	else s2="";
	if (typeof mxG.K!='undefined')
	{
		s3="";
		for (k=1;k<=mxG.K;k++)
		{
			e3=document.getElementById(mxG.D[k].n+"GlobalBoxDiv");
			if (e3) e3=e3.parentNode;
			if (e3&&(typeof mxG.GetPxrStyle!="undefined"))
			{
				s4="Parent";
				if (mxG.K>1) s4+=" "+k;
				s3+=("<"+t1+" class=\"row\"><"+t2+" class=\"column\">"+s4+((mxG.D[k].l=="fr")?" ":"")+": </"+t2+"><"+t2+" class=\"column\">"+mxG.GetPxrStyle(e3,"width")+"x"+mxG.GetPxrStyle(e3,"height")+"</"+t2+"></"+t1+">");
			}
		}
	}
	if (e1) e1.innerHTML="<"+t0+" class=\"measurement\">"+s1+s2+s3+"</"+t0+">";
}
function doMeasurement()
{
	setInterval("updateMeasurement()",1000);
}
window.addEventListener("load",function(ev){doMeasurement();},false);
</script>
<div id="measurement" style="text-align:center;"></div>