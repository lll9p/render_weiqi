<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
if ($mxL=="fr") $title="Exemple d'utilisation de maxiGos : ambiance classique";
else if ($mxL=="ja") $title="MaxiGos例・古典的なスタイル";
else if ($mxL=="zh") $title="MaxiGos例子-经典";
else if ($mxL=="zh-tw") $title="MaxiGos例子-經典";
else $title="Sample for maxiGos: classic style";
if ($mxL=="fr") $title2="Ambiance classique";
else if ($mxL=="ja") $title2="古典的なスタイル";
else if ($mxL=="zh") $title2="经典";
else if ($mxL=="zh-tw") $title2="經典";
else $title2="Classic style";
if ($mxL=="fr") $backLabel="Revenir en haut de la page";
else if ($mxL=="ja") $backLabel="トップに戻る";
else if ($mxL=="zh") $backLabel="返回顶部";
else if ($mxL=="zh-tw") $backLabel="返回頂部";
else $backLabel="Back to top";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {font-family:Arial,sans-serif;}
div.main>h1 {font-size:1.5em;background:#000;color:#fff;margin:0;padding:0.5em;}
div.main>h2 {font-size:1.25em;padding:1em 0 0 0;text-align:center;}
.toto {text-align:center;padding-top:1em;}
.toto a {color:#000;}
.toto a:hover {color:#f00;}
</style>
<title><?php print $title;?></title>
<?php
if (($mxL=="ja")||($mxL=="zh")||($mxL=="zh-tw"))
	print "<script src=\"../../_i18n/mgos-i18n-".$mxL.".js\"></script>\n";
?>
</head>
<body>
<?php $maxiGosDirPath="../../";include "../_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="main">
<h1><?php print $title2;?></h1>
<h2>Basic</h2>
<script data-maxigos-l="<?php print $mxL;?>" src="_alone/maxigos-classic-basic.js">../_sgf/game/blood-vomit-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.sgf</script>
<h2>Comment</h2>
<script data-maxigos-l="<?php print $mxL;?>" src="_alone/maxigos-classic-comment.js">../_sgf/game/mn-bdg-<?php print ($mxL=="fr"?"fr":"en");?>.sgf</script>
<h2>Diagram</h2>
<script data-maxigos-l="<?php print $mxL;?>" src="_alone/maxigos-classic-diagram.js">../_sgf/game/blood-vomit-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.sgf</script>
<h2>Game</h2>
<script data-maxigos-l="<?php print $mxL;?>" src="_alone/maxigos-classic-game.js">../_sgf/game/blood-vomit-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.sgf</script>
<h2>Lesson</h2>
<script data-maxigos-l="<?php print $mxL;?>" src="_alone/maxigos-classic-lesson.js">../_sgf/game/TV9x9-<?php print ($mxL=="fr"?"fr":"en");?>.sgf</script>
<h2>Loop</h2>
<script data-maxigos-l="<?php print $mxL;?>" src="_alone/maxigos-classic-loop.js">../_sgf/joseki/j1.sgf</script>
<h2>Problem</h2>
<script data-maxigos-l="<?php print $mxL;?>" src="_alone/maxigos-classic-problem.js">../_sgf/problem/p3-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.sgf</script>
<h2>Tree</h2>
<script data-maxigos-l="<?php print $mxL;?>" src="_alone/maxigos-classic-tree.js">../_sgf/game/mn-bdg-<?php print ($mxL=="fr"?"fr":"en");?>.sgf</script>
<div class="toto"><a href="classic.php">...</a></div>
</div>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
