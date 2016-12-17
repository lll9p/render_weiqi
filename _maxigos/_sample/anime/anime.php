<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
if ($mxL=="fr") $title="Exemple d'utilisation de maxiGos - Version animée";
else if ($mxL=="ja") $title="MaxiGos例-石のアニメーション";
else if ($mxL=="zh") $title="MaxiGos例子-动画";
else if ($mxL=="zh-tw") $title="MaxiGos例子-動畫";
else $title="Sample for maxiGos - Anime version";
if ($mxL=="fr") $title2="Version animée (lecteur façon KiFLA)";
else if ($mxL=="ja") $title2="石のアニメーション (KiFLAスタイル)";
else if ($mxL=="zh") $title2="动画 (KiFLA样式)";
else if ($mxL=="zh-tw") $title2="動畫 (KiFLA樣式)";
else $title2="Anime version (KiFLA like player)";
if (isset($_GET["s"])) $style=$_GET["s"];else $style="All";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {background:#ccc;}
h1, h2, h3 {text-align:center;}
h1 a {color:#000;}
hr {display:none;}
@media (max-width:359px)
{
	body {margin-left:0;margin-right:0;padding-left:0;padding-right:0;}
}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<script src="../../_i18n/mgos-i18n-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.js"></script>
<h1><?php print $title2;?></h1>
<div class="anime">
<script data-maxigos-l="<?php print $mxL;?>" data-maxigos-sgf="../_sgf/game/longuest.sgf" src="../../_mgos/sgfplayer.php?cfg=../_sample/anime/animeGame.cfg"></script>
</div>
<br>
<div class="anime">
<script data-maxigos-l="<?php print $mxL;?>" data-maxigos-sgf="../_sgf/game/TV9x9-en.sgf" src="../../_mgos/sgfplayer.php?cfg=../_sample/anime/animeGame.cfg"></script>
</div>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
