<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
$sgfDir="../_sgf/game/";
include "../_php/file.php";
if ($mxL=="fr")
{
	$subtitle="lecteur façon eidogo";
	$title="Exemple d'utilisation de maxiGos : ".$subtitle;
	$intro="Cet exemple montre maxiGos avec un style façon Eidogo (avec la permission de Justin Kramer).";
}
else
{
	$subtitle="eidogo like player";
	$title="Sample for maxiGos: ".$subtitle;
	$intro="This sample shows maxiGos in an Eidogo like style (with permission of Justin Kramer).";
}
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {text-align:center;}
h1 a {color:#000;}
h1 a:hover {color:#f00;}
p {margin-left:0.25em;margin-right:0.25em;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<h1><a href="http://eidogo.com"><?php print ucFirst($subtitle);?></a></h1>
<p><?php print $intro;?></p>

<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/eidogo/eidogoComment.cfg");?>&amp;sgf=<?php print urlencode("../_sample/_sgf/game/".$sgfTarget);?>"></script>

<?php include "../_php/select.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
