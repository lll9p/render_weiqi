<?php
// maxiGos v6.57 > path.php
// must be in the same folder as aloneLib.php and gosLib.php

// $gosRootRelativePath is a relative path from php script that includes this script
// to "_maxigos" folder (must end by "_maxigos/" or be "/")
// $gosRootRelativePath can also be set in the calling php script of the web page that uses maxiGos
// better to use a relative path (to the calling php scripts) to avoid access file problem
// sometimes, it may be necessary to set it by hand in the php calling scripts
// when gosGetRootPath() doesn't work (for instance when $_SERVER['DOCUMENT_ROOT'] is unkown)

// $gosRootAbsolutePath is an absolute web path to "_maxigos" folder (ends by "_maxigos/")
// it is used in maxiGos ".js" code to retrieve external resources such as css files, images, ...
// warning: some servers seem to add "/" to the end of $_SERVER['DOCUMENT_ROOT'], some others don't

function gosGetRootRelativePath()
{
	$a=$_SERVER['PHP_SELF'];
	$thisDir=substr(dirname(__FILE__),strlen($_SERVER['DOCUMENT_ROOT']));
	$len=strlen($thisDir);
	$gosDir=substr($thisDir,0,$len-5); // -5 to remove "/_php"
	$b=$gosDir."/";
	$k=0;
	$c="";
	$km=substr_count($a,"/")-1;
	while($k<$km)
	{
		$c=$c."../";
		$k++;
	}
	return $c.preg_replace("#^[/]+?#","",$b);
}

function gosGetRootAbsolutePath()
{
	$thisDir=substr(dirname(__FILE__),strlen($_SERVER['DOCUMENT_ROOT']));
	$len=strlen($thisDir);
	$gosDir=substr($thisDir,0,$len-5); // -5 to remove "/_php"
	$gosDir="/".preg_replace("#^[/]+?#","",$gosDir);
	$gosDir=preg_replace("#[/]+?$#","",$gosDir)."/";
	if (isset($_SERVER['HTTP_HOST']))
	{
		// add protocol and host name
		// useful when maxiGos is on a server different from the calling page one
		$protocol=stripos($_SERVER['SERVER_PROTOCOL'],'https')===true ?'https://':'http://';
		$gosDir=$protocol.$_SERVER['HTTP_HOST'].$gosDir;
	}
	return $gosDir;
}

// 1) relative path (in theory, used in .php files)

if (!isset($gosRootRelativePath)) $gosRootRelativePath=gosGetRootRelativePath();

// 2) absolute path (in theory, used in .js files)

if (!isset($gosRootAbsolutePath)) $gosRootAbsolutePath=gosGetRootAbsolutePath();
