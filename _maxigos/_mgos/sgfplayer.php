<?php
// maxiGos v6.57 > sgfplayer.php
header("content-type:application/x-javascript;charset=UTF-8");
include_once("../_php/gosLib.php");
$sgf=(isset($_GET["sgf"])?$_GET["sgf"]:(isset($_POST['sgf'])?$_POST['sgf']:""));
$cfg=(isset($_GET["cfg"])?$_GET["cfg"]:(isset($_POST['cfg'])?$_POST['cfg']:""));
$mxL=(isset($_GET["mxL"])?$_GET["mxL"]:(isset($_POST['mxL'])?$_POST['mxL']:""));
$plc=(isset($_GET["plc"])?$_GET["plc"]:(isset($_POST['plc'])?$_POST['plc']:""));
$inc=(isset($_GET["inc"])?$_GET["inc"]:(isset($_POST['inc'])?$_POST['inc']:""));
print gosStart($sgf,$cfg,$mxL,$plc,$inc);
