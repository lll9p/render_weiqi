<?php
// maxiGos v6.57 > aloneLib.php
// must be in the same folder as path.php and gosLib.php
include_once("gosLib.php");

function getFName($f)
{
	return basename(current(explode("?",$f)));
}

function base64EncodeImage($f,$t)
{
    if ($f)
    {
        $img=fread(fopen($f,"r"),filesize($f));
        return 'data:image/'.$t.';base64,'.base64_encode($img);
    }
    return '';
}

function buildCss($css)
{
	$s="(function(){var a=\"\",e=document.createElement(\"style\");\n";
	$f=file_get_contents($css);
	$f=addslashes(str_replace(array(Chr(9),Chr(10),Chr(13)),"",$f));
	if (preg_match_all("#url\((\.\./)+_img/([A-Za-z0-9_/-]+)\.(jpg|gif|png)\)#",$f,$m))
	{
		// replace "(../)+_img/([A-Za-z0-9_/-]+).(jpg|gif|png)" image by its equivalent in data:base64
		$km=count($m[1]);
		for($k=0;$k<$km;$k++)
		{
			$base64=base64EncodeImage("../_img/".$m[2][$k].".".$m[3][$k],$m[3][$k]);
			$f=preg_replace("#url\((\.\./)+_img/".$m[2][$k]."\.".$m[3][$k]."\)#","url(".$base64.")",$f);
		}
	}
	$f=preg_replace("/}\s*(.)/","}\"\na+=\"$1",$f);
	$s.="a+=\"".$f."\";\n";
	// cross browser solution (e.innerHTML fails on old browsers)
	$s.="e.type='text/css';\n";
	$s.="if (e.styleSheet) e.styleSheet.cssText=a;\n";
	$s.="else e.appendChild(document.createTextNode(a));\n";
	$s.="document.getElementsByTagName('head')[0].appendChild(e);\n";
	$s.="})();\n";
	return $s;
}

function buildHelp($help)
{
	$f=file_get_contents($help);
	$f=addslashes(str_replace(array(Chr(9),Chr(10),Chr(13))," ",$f));
	return $f;
}

function makeAlone($ccc,$cfg,$dir,$loc="")
{
	// make a stand-alone js player from $cfg configuration file
	// $ccc: name used to make js target file name and css target file name
	//       can be prefixed by a relative path from script maker dir to target script dir
	// $cfg: config file (prefixed by relative path), use to build js target file
	// $dir: relative path from js target file dir to "_maxigos" folder
	//       useful when the script need some external ressources
	//       with path prefixed by this.path in js scripts (such as custom stones)
	//       when such external ressources, the js target file must not be moved in another folder
	//       note: css files, help files and css images from "_img" folder referenced in css files
	//             are not concerned by this since they are included in js target file
	// $loc: localization language code
	//       "" means no localization (use default localization language which is french)
	//       "fr" means localization in french
	//       "en" means localization in english
	//       ...
	// Note: the stand-alone script has the javascript "alone" parameter set to 1 by default
	//       means no use of php as for instance in "Edit" component for "Save" and "Send"
	//       otherwise the player would not be stand-alone
	//       as a result, a stand-alone player is sligthy less powerful
	//       than the same player started by a launcher
	global $gosRootRelativePath,$gosRootAbsolutePath;
	if (!hasExt($cfg,"cfg")) $cfg="";
	$a=gosStart("",$cfg,"","",-1);
	$a=str_replace(array(Chr(13).Chr(10),Chr(10).Chr(13),Chr(13)),"\n",$a);
	$a=preg_replace("#([^:])//.*$#m","$1",$a); // remove comments (but not http:// or https://)
	$a=preg_replace("#^//.*$#m","",$a); // remove comment on first position if any
	$b="mxG.D[mxG.K].path=mxG.GetDir()+\"".$dir."\";\n";
	$a=preg_replace("#mxG\\.D\\[mxG\\.K\\]\\.path=[^\\;]*;#",$b,$a);
	$a=preg_replace("#\\t#","",$a); // remove tabs
	$a=preg_replace("#^\s+#m","",$a); // remove blank lines
	// replace mxG.AddCss() by a function that creates a stand-alone style tag
	// after removing commented lines (data url in css may contain // that are not comment)
	$s="";
	if (preg_match_all("/mxG.AddCss\\(\"([^\\)]*)\"\\);\\n/",$a,$m))
	{
		foreach($m[1] as $z)
		{
			$s=buildCss($z);
			$a=preg_replace("/mxG.AddCss\\(\"[^\\)]*\"\\);\\n/",$s,$a,1);
		}
	}
	// replace mxG.D[mxG.K].helpSource_xy="..." by mxG.D[mxG.K].helpData_xy="..."
	if (preg_match_all("#mxG\\.D\\[mxG\\.K\\]\\.helpSource_([a-z_]+)=\"([./a-zA-Z0-9_-]+)\";\\n#",$a,$m))
	{
		foreach($m[2] as $z)
		{
			$h=buildHelp($gosRootAbsolutePath.$z);
			$a=preg_replace("#mxG\\.D\\[mxG\\.K\\]\\.helpSource_([a-z_]+)=\"([./a-zA-Z0-9_-]+)\";\\n#","mxG.D[mxG.K][\"helpData_$1\"]=\"".$h."\";\n",$a,1);
		}
	}
	
	$b=gosVersion();
	$a=$b.$a;
	// add mxG.D[mxG.K].alone=1;
	$b="mxG.D[mxG.K].alone=1;"."\n";
	if ($loc&&($loc!="fr")) $b.="mxG.D[mxG.K].l=\"".$loc."\";\n";
	$b.="mxG.D[mxG.K].createAll()";
	$a=preg_replace("/mxG\\.D\\[mxG\\.K\\]\\.createAll\\(\\)/",$b,$a);
	file_put_contents($ccc,$a);
}


