<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
if ($mxL=="fr") $title="Exemple d'utilisation de maxiGos : ambiance japonaise";
else if ($mxL=="ja") $title="MaxiGos例・和風";
else if ($mxL=="zh") $title="MaxiGos例子-日式";
else if ($mxL=="zh-tw") $title="MaxiGos例子-日式";
else $title="Sample for maxiGos: japanese style";
if ($mxL=="fr") $title2="Ambiance japonaise";
else if ($mxL=="ja") $title2="和風";
else if ($mxL=="zh") $title2="日式";
else if ($mxL=="zh-tw") $title2="日式";
else $title2="Japanese style";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {background-color:#fff;}
h1.contentH1 {text-align:center;}
h1.contentH1, h2.contentH2, h3.contentH3 {padding:0 8px;}
h2.contentH2 {padding-top:20px;}
h2.contentH2:first-of-type {padding-top:0;}
.toto {text-align:center;padding-top:1em;}
.toto a {color:#000;}
.toto a:hover {color:#f00;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<h1 class="contentH1"><?php print $title2;?></h1>
<h2 class="contentH2">Basic</h2>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/tatami/_cfg/basic.cfg");?>">
../_sgf/game/blood-vomit.sgf
</script>
<h2 class="contentH2">Comment</h2>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/tatami/_cfg/comment.cfg");?>">
../_sgf/game/mn-bdg-<?php print ((in_array($mxL,array("en","fr")))?$mxL:"en");?>.sgf
</script>
<h2 class="contentH2">Diagram</h2>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/tatami/_cfg/diagram.cfg");?>">
../_sgf/game/blood-vomit.sgf
</script>
<h2 class="contentH2">Game</h2>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/tatami/_cfg/game.cfg");?>">
../_sgf/game/Mingren-001-1F-1-<?php print ((in_array($mxL,array("en","fr","ja","zh","zh-tw")))?$mxL:"en");?>.sgf
</script>
<h2 class="contentH2">Problem</h2>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/tatami/_cfg/problem.cfg");?>">
../_sgf/problem/p3-<?php print ((in_array($mxL,array("en","fr","ja","zh","zh-tw")))?$mxL:"en");?>.sgf
</script>
<br>
<script data-maxigos-can-undo="0" data-maxigos-special-move-match="1" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/tatami/_cfg/problem.cfg");?>">
(;FF[4]GM[1]SZ[5]AB[bc][cb][dc]AW[cc]C[●?](;B[cd]C[\\o/])(;B[zz]C[/o\\]))
</script>
<h2 class="contentH2">Tree</h2>
<h3 class="contentH3">Normal mode</h2>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/tatami/_cfg/tree.cfg");?>">
../_sgf/game/mn-bdg-<?php print ((in_array($mxL,array("en","fr")))?$mxL:"en");?>.sgf
</script>
<h3 class="contentH3">Sibling mode</h2>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/tatami/_cfg/tree.cfg");?>">
../_sgf/game/mn-bdg-sibling-fr.sgf
</script>
<div class="toto"><a href="tatami-alone.php">...</a></div>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
