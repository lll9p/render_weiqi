// maxiGos v6.57 > mgosLoader.js
// special thanks to Lao Lilin who first adapted maxiGos code to use a loader

// use (function(x){...})(...); to execute anonymous function
// by default, configuration files are supposed to be in "_sample/neo-classic/_cfg" folder
// change c parameter value at the very end of this script to modify this behavior
// for instance, if your config files are in "_sample/minimal/_cfg" folder
// replace "_sample/neo-classic/_cfg/" by "_sample/minimal/_cfg/"

(function(d)
{
	var xhr=new XMLHttpRequest(),k,km=d.km,s,p,q,c;
	xhr.onreadystatechange=function()
	{
		if ((xhr.readyState==4)&&(xhr.status==200))
		{
			//window.document.write(xhr.responseText);
			window.eval(xhr.responseText);
		}
	};
	s=document.getElementsByTagName('script');
	p=s[s.length-1].src.split('?')[0]; // remove query
	p=p.split("/").slice(0,-1).join("/")+"/"; // remove file name
	xhr.open("POST",p+"sgfmultiplayer.php",true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	q="km="+km;
	for (k=0;k<km;k++) q+="&cfg"+k+"="+d.cfg[k]+"&plc"+k+"="+d.plc[k];
	xhr.send(q);
})(function(c)
{
	var d={},cfg,id,divs=document.getElementsByTagName("div"),km=0,l,lm=divs.length,mxL;
	for (l=0;l<lm;l++)
	{
		cfg=divs[l].getAttribute("data-maxigos");
		if (cfg!==null)
		{
			if (!km)
			{
				d.cfg=[];
				d.plc=[];
			}
			cfg="../"+c+cfg+".cfg";
			d.cfg.push(encodeURIComponent(cfg));
			if (id=divs[l].id) d.plc.push(id);
			else
			{
				id=(new Date()).getTime()+""+km;
				divs[l].id=id;
				d.plc.push(id);
			}
			km++;
		}
	}
	if (typeof mxG=='undefined') mxG={};
	d.km=km;
	return d;
}("_sample/neo-classic/_cfg/"));
