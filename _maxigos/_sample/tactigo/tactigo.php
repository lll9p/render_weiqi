<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
if ($mxL=="fr") $title="Exemple d'utilisation de maxiGos : ambiance Tactigo";
else if ($mxL=="ja") $title="MaxiGos例・Tactigoのスタイル";
else if ($mxL=="zh") $title="MaxiGos例子-Tactigo";
else if ($mxL=="zh-tw") $title="MaxiGos例子-Tactigo";
else $title="Sample for maxiGos: Tactigo style";
$title2="http://tactigo.free.fr";
if ($mxL=="fr") $potd="Problème du jour";
else if ($mxL=="ja") $potd="今日の問題";
else if ($mxL=="zh") $potd="当日问题";
else if ($mxL=="zh-tw") $potd="當日問題";
else $potd="Problem of the day";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {font-family:"Segoe UI",Arial,sans-serif;}
.header {text-align:left;background-color:#333;padding:0 0.5em 0 2em;color:#fff;}
.header span.shodan {font-size:1.8em;padding-right:2em;font-family:"Arial Narrow",Arial,sans-serif;vertical-align:baseline;}
.one {color:#fe0000;text-decoration:none;font-size:3em;font-family:"Hiragino Maru Gothic ProN",Arial,sans-serif;vertical-align:baseline;}
.one:hover {color:#f66;}
.two {color:#fff;text-decoration:none;font-size:1.5em;vertical-align:baseline;}
.two:hover {color:#ccc;}
.content {max-width:31.5625em;margin:0 auto;}
.title {font-size:1.5em;border-bottom:1px solid #c0c0c0;margin:0.5em;text-align:left;}
.logo, .link, .shodan {white-space:nowrap;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include "../_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="header">
<span class="logo"><a class="one" href="http://tactigo.free.fr">初段</a> <span class="shodan">S h o d a n</span></span>
<span class="link"><a class="two" href="http://tactigo.free.fr"><?php print $title2;?></a></span>
</div>
<div class="content">
<h1 class="title">
<?php print $potd;?>
</h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/tactigo/tactigo.cfg");?>"><?php print "../_sgf/problem/tactigo-".((in_array($mxL,array("fr","ja","zh","zh-tw")))?$mxL:"en").".sgf";?></script>
</div>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
