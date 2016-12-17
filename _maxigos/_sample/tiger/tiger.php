<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
if ($mxL=="fr")
{
	$subtitle="version <a href=\"http://tiger.bagofcats.net/\">Tiger</a>";
	$title="Exemple d'utilisation de maxiGos : version Tiger";
}
else if ($mxL=="ja")
{
	$subtitle="<a href=\"http://tiger.bagofcats.net/\">虎のバージョン</a>";
	$title="MaxiGos例・虎のバージョン";
}
else if ($mxL=="zh")
{
	$subtitle="<a href=\"http://tiger.bagofcats.net/\">老虎版</a>";
	$title="MaxiGos例子-老虎版";
}
else if ($mxL=="zh-tw")
{
	$subtitle="<a href=\"http://tiger.bagofcats.net/\">老虎版</a>";
	$title="MaxiGos例子-老虎版";
}
else
{
	$subtitle="<a href=\"http://tiger.bagofcats.net/\">Tiger</a> version";
	$title="Sample for maxiGos: Tiger version";
}
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {text-align:center;margin:0;padding:0;}
h1 a {color:#000;}
ul.sampleList li.currentSample a {color:#00e;}
h1 a:hover,div.menu a:hover,ul.sampleList li.currentSample a:hover {color:#e00;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<h1><?php print ucFirst($subtitle);?></h1>

<script src="../../_i18n/mgos-i18n-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.js"></script>
<script data-maxigos-l="<?php print $mxL;?>" src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/tiger/tigerTree.cfg");?>">../_sgf/game/mn-bdg-<?php print (($mxL=="fr")?"fr":"en");?>.sgf</script>

<?php
$langList=array("en","fr","ja","zh","zh-tw");
include "../_php/menu.php";
?>
</body>
</html>
