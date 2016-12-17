<?php
header("content-type:application/x-javascript;charset=UTF-8");
// maxiGos v6.57 > sgfmultiplayer.php
include_once("../_php/gosLib.php");
$km=(isset($_POST['km'])?$_POST['km']:0);
$mxL=(isset($_POST['mxL'])?$_POST['mxL']:"");
for ($k=0;$k<$km;$k++)
{
	$cfg=(isset($_POST['cfg'.$k])?$_POST['cfg'.$k]:"");
	$plc=(isset($_POST['plc'.$k])?$_POST['plc'.$k]:"");
	print gosStart("",$cfg,$mxL,$plc,0);
}

