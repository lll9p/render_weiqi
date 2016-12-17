<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
$in3dOn=1;
if ($mxL=="fr")
{
	$subtitle="langages multiples";
	$title="Exemple d'utilisation de maxiGos : ".$subtitle;
	$title2="Langages multiples";
}
else if ($mxL=="ja")
{
	$subtitle="いろいろな言語";
	$title="MaxiGos例・".$subtitle;
	$title2="いろいろな言語";
}
else
{
	$subtitle="multiple languages";
	$title="Sample for maxiGos: ".$subtitle;
	$title2="Multiple languages";
}
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {background:#ccc;}
.content {text-align:justify;max-width:55em;margin:0.5em auto;background:#fff;border-radius:0.5em;}
.content>h1 {font-size:1.2em;text-align:center;padding:0.25em;}
h2:before {content: counter(h2counter) ". ";}
h2 {font-size:1em;counter-increment: h2counter;counter-reset: h3counter;padding:0.25em;}
@media (max-width:48em) {.content {border-radius:0;}}
.content > div {padding:0.5em 0;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>

<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div id="content" class="content">
<h1><?php print $title2;?></h1>
<section lang="en">
<h2>English</h2>
<script data-maxigos-sgf="<?php print "../_sgf/game/Mingren-001-1F-1-en.sgf";?>" src="../../_mgos/sgfplayer.php?mxL=en&amp;cfg=<?php print urlencode("../_sample/neo-classic/_cfg/game.cfg");?>"></script>
</section>
<section lang="fr">
<h2>Français</h2>
<script data-maxigos-sgf="<?php print "../_sgf/game/Mingren-001-1F-1-fr.sgf";?>" src="../../_mgos/sgfplayer.php?mxL=fr&amp;cfg=<?php print urlencode("../_sample/neo-classic/_cfg/game.cfg");?>"></script>
</section>
<section lang="ja">
<h2>日本語</h2>
<script data-maxigos-sgf="<?php print "../_sgf/game/Mingren-001-1F-1-ja.sgf";?>" src="../../_mgos/sgfplayer.php?mxL=ja&amp;cfg=<?php print urlencode("../_sample/neo-classic/_cfg/game.cfg");?>"></script>
</section>
<section lang="zh">
<h2>中文～简化字</h2>
<script data-maxigos-sgf="<?php print "../_sgf/game/Mingren-001-1F-1-zh.sgf";?>" src="../../_mgos/sgfplayer.php?mxL=zh&amp;cfg=<?php print urlencode("../_sample/neo-classic/_cfg/comment.cfg");?>"></script>
</section>
<section lang="zh-tw">
<h2>中文～正體字</h2>
<script data-maxigos-sgf="<?php print "../_sgf/game/Mingren-001-1F-1-zh-tw.sgf";?>" src="../../_mgos/sgfplayer.php?mxL=zh-tw&amp;cfg=<?php print urlencode("../_sample/neo-classic/_cfg/comment.cfg");?>"></script>
</section>
</div><!-- content end -->

<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
