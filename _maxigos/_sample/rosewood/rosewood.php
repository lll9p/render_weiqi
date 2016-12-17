<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
if ($mxL=="fr") $title="Exemple d'utilisation de maxiGos : ambiance chinoise";
else if ($mxL=="ja") $title="MaxiGos例・唐様";
else if ($mxL=="zh") $title="MaxiGos例子-中式";
else if ($mxL=="zh-tw") $title="MaxiGos例子-中式";
else $title="Sample for maxiGos: chinese style";
if ($mxL=="fr") $title2="Ambiance chinoise";
else if ($mxL=="ja") $title2="唐様";
else if ($mxL=="zh") $title2="中式";
else if ($mxL=="zh-tw") $title2="中式";
else $title2="Chinese style";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {background:#ec7;font-size:14px;}
.contentH1,.reference,.dragon {text-align:center;}
.dragon img {max-width:90%;}
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
<div class="content">
<script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rosewood/_cfg/basic.cfg");?>&amp;mxL=<?php print $mxL;?>">
../_sgf/game/blood-vomit-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.sgf
</script>
<div class="dragon"><img src="dragon.png"></div>
<script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rosewood/_cfg/comment.cfg");?>&amp;mxL=<?php print $mxL;?>">
../_sgf/game/mn-bdg-<?php print (in_array($mxL,array("fr"))?$mxL:"en");?>.sgf
</script>
<div class="dragon"><img src="dragon.png"></div>
<script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rosewood/_cfg/diagram.cfg");?>&amp;mxL=<?php print $mxL;?>">
../_sgf/game/blood-vomit-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.sgf
</script>
<div class="dragon"><img src="dragon.png"></div>
<script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rosewood/_cfg/game.cfg");?>&amp;mxL=<?php print $mxL;?>">
../_sgf/game/blood-vomit-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.sgf
</script>
<div class="dragon"><img src="dragon.png"></div>
<script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rosewood/_cfg/problem.cfg");?>&amp;mxL=<?php print $mxL;?>">
../_sgf/problem/p3-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.sgf
</script>
<div class="dragon"><img src="dragon.png"></div>
<script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rosewood/_cfg/tree.cfg");?>&amp;mxL=<?php print $mxL;?>">
../_sgf/game/mn-bdg-<?php print (in_array($mxL,array("fr"))?$mxL:"en");?>.sgf
</script>
<div class="toto"><a href="rosewood-alone.php">...</a></div>
</div>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="reference menu" lang="en">
<a href="http://lena-bitty.deviantart.com/art/Chinese-Dragon-334787136">Chinese Dragon</a>, Lena Bitty,
<a href="http://creativecommons.org/licenses/by-nd/3.0/">Creative Commons Attribution-No Derivative Works 3.0 License</a>
</div>
</body>
</html>
