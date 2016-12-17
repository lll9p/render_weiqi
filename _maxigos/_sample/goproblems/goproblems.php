<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
if ($mxL=="fr") $title="Exemple d'utilisation de maxiGos : ambiance go problems";
else if ($mxL=="ja") $title="MaxiGos例・Goproblemsのスタイル";
else if ($mxL=="zh") $title="MaxiGos例子-Goproblems";
else if ($mxL=="zh-tw") $title="MaxiGos例子-Goproblems";
else $title="Sample for maxiGos: go problems style";
if ($mxL=="fr") $title2="Ambiance go problems";
else if ($mxL=="ja") $title2="Goproblemsのスタイル";
else if ($mxL=="zh") $title2="Goproblems";
else if ($mxL=="zh-tw") $title2="Goproblems";
else $title2="Go problems style"
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
h1.legend a {color:#000;margin:0.25em;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<div class="global">
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<h1 class="legend"><a href="http://goproblems.com"><?php print $title2;?></a></h1>
<script src="../../_i18n/mgos-i18n-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.js"></script>
<script data-maxigos-sgf="../_sgf/problem/p3-<?php echo $mxL;?>.sgf"
        src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/goproblems/problem.cfg");?>&amp;mxL=<?php print $mxL;?>">
</script>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</div><!-- global -->
</body>
</html>
