<?php
header("content-type: application/x-javascript;charset=UTF-8");

include_once("../../_php/gosLib.php");

$file=isset($_GET["sgf"])?$_GET["sgf"]:""; // no need to do an urldecode here
	
if (isset($_GET["mode"]))
{
	if (($_GET["mode"]=="probleme")||($_GET["mode"]=="problem")) $gosMode="probleme";
	else if ($_GET["mode"]=="figure") $gosMode="figure";
	else $gosMode="commentaire";
}
else $gosMode="commentaire";

$gosConfig=$gosMode.".cfg";
$mxL=isset($_GET["mxL"])?$_GET["mxL"]:"";
print gosStart($file,$gosConfig,$mxL);