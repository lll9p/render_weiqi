<?php
// maxiGos v6.57 > gosLib.php
// must be in the same folder as path.php and aloneLib.php
include_once('path.php');

function hasExt($f,$ext)
{
	return basename(current(explode("?",$f)))==basename(current(explode("?",$f)),$ext).$ext;
}

function gosVersion()
{
	include 'version.php';
	$outBuf="// maxiGos v".$v;
	$outBuf.=" Copyright 1998-".date("Y")." Francois Mizessyn, BSD license (see license.txt)\n";
	return $outBuf;
}

function gosNew($mxL="")
{
	$outBuf="\nmxG.K++;\n";
	$outBuf.="mxG.D[mxG.K]=new mxG.G(mxG.K);\n";
	if ($mxL) $outBuf.="mxG.D[mxG.K].l=\"".$mxL."\";\n";
	return $outBuf;
}

function simplifyPath($path)
{
   $r=array();
   foreach (explode('/',$path) as $p)
   {
      if ($p=='..') array_pop($r);
      else if (($p!='.')&&strlen($p)) $r[]=$p;
   }
   $r=implode('/',$r);
   if ($path[0]=='/') $r="/$r";
   return $r;
}

function gosStart($sgf="",$configFile="",$mxL="",$plc="",$included=0)
{
	// $sgf: sgf filename
	// $configFile: config filename
	// $mxL: language code
	// $plc: id of DOM element that contains sgf source and place where to display the player
	//       if "", use the current js script itself as sgf source and place to display the player
	// $included: if 1, do not include any css or js files
	//            if 0, include css or js files if not already included by the current php script
	//            if -1, include css or js files in any case
	global $gosRootRelativePath,$gosRootAbsolutePath;
	// $includedList keeps trace of files already loaded (useful when several calls of gosStart
	// are done in the same php script (plugin, sgfmultipleplayer.php...), static keyword required
	static $includedList=array();
	if ($configFile&&is_file($configFile)&&hasExt($configFile,"cfg")) include($configFile);
	else include($gosRootRelativePath."_sample/neo-classic/_cfg/basic.cfg");
	$outBuf=gosVersion();
	if ($mxL&&($mxL!="en")&&($mxL!="fr"))
	{
		$i18nFile=$gosRootRelativePath."_i18n/mgos-i18n-".$mxL.".js";
		if (is_file($i18nFile)&&($included<=0)&&!in_array($i18nFile,$includedList))
		{
			$outBuf.="\n".file_get_contents($i18nFile)."\n";
			if (!$included) $includedList[count($includedList)]=$i18nFile;
		}
	}
	// add javascript scripts according to data found in the config file
	foreach ($gosParam as $key=>$a)
	{
		if (is_array($a))
		{
			if (substr($key,-6)=="Script")
			{
				// include javascript scripts if any
				foreach ($a as $b)
				{
					if (($included<=0)&&!in_array($b,$includedList))
					{
						$outBuf.=file_get_contents($gosRootRelativePath.$b)."\n";
						if (!$included) $includedList[count($includedList)]=$b;
					}
				}
			}
			else if (substr($key,-5)=="Style")
			{
				// include stylesheets if any
				foreach ($a as $b)
				{
					if (($included<=0)&&!in_array($b,$includedList))
					{
						$outBuf.="mxG.AddCss(\"".$gosRootAbsolutePath.$b."\");\n";
						if (!$included) $includedList[count($includedList)]=$b;
					}
				}
			}
		}
	}
	// add new empty diagram object
	$outBuf.=gosNew($mxL);
	$outBuf.="mxG.D[mxG.K].path=\"".$gosRootAbsolutePath."\";\n";
	
	// set box list and parameters from data found in the config file
	$k=0;
	foreach ($gosParam as $key => $a)
	{
		if (is_array($a))
		{
			if (substr($key,-3)=="Box")
			{
				// add components to the boxes
				$first=true;
				$s="mxG.D[mxG.K].b[".$k."]={n:\"".$key."\",c:[";
				foreach ($a as $b)
				{
					if ($first) $first=false;
					else $s.=",";
					$s.="\"".$b."\"";
				}
				$s.="]};\n";
				$outBuf.=$s;
				$k++;
			}
		}
		else if (is_numeric($a)) $outBuf.="mxG.D[mxG.K].".$key."=".$a.";\n";
		else $outBuf.="mxG.D[mxG.K].".$key."=\"".$a."\";\n";
	}
	// display player
	if ($plc) $outBuf.="mxG.D[mxG.K].t=document.getElementById(\"".$plc."\");\n";
	if ($sgf)
	{
		if ((filter_var($sgf,FILTER_VALIDATE_URL)===FALSE)&&(strpos("(",$sgf)===FALSE))
			$sgf=simplifyPath(dirname($_SERVER['PHP_SELF'])."/".$sgf);
		$outBuf.="mxG.D[mxG.K].sgf=\"".addslashes($sgf)."\";\n";
	}
	$outBuf.="mxG.D[mxG.K].createAll();\n";
	return $outBuf;
}
