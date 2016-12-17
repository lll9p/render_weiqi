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
if ($mxL=="fr") $title="Exemple d'utilisation de maxiGos : ambiance fm";
else if ($mxL=="ja") $title="MaxiGos例・Fmのスタイル";
else if ($mxL=="zh") $title="MaxiGos例子-Fm";
else if ($mxL=="zh-tw") $title="MaxiGos例子-Fm";
else $title="Sample for maxiGos: fm style";
if ($mxL=="fr") $title2="Ambiance fm";
else if ($mxL=="ja") $title2="Fmのスタイル";
else if ($mxL=="zh") $title2="Fm";
else if ($mxL=="zh-tw") $title2="Fm";
else $title2="Fm style"
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body
{
	background-image:url(tatami.gif);
	font-family:sans-serif;
	padding:0;
	margin:0;
}
div.global {background-color:#eeb;max-width:48.75em;background-image:url(top.gif);background-repeat:repeat-x;margin:0 auto;padding-top:77px;}
div.menu {background-color:#777;text-align:left;color:#eee;padding:2px;line-height:1.5em;}
div.menu span {display:inline-block;vertical-align:middle;}
div.menu span:before {content:"|";padding-left:0.25em;padding-right:0.25em;}
div.menu span:first-child:before {content:"";}
div.menu a {display:inline-block;color:#eee;text-decoration:none;}
div.menu a:hover {outline:1px solid #eee;background-color:#900;}
img.flag {border:1px solid #ccc;margin:0 0.25em;height:0.7em;}
form.fileSelector {text-align:center;padding:0 0 0.5em 0;margin:0;}
div.content {background-image:url(go.gif);background-position:top right;background-repeat:no-repeat;}
h1.legend {margin:0;padding:1em;text-align:center;font-size:1em;}
h1.legend a {color:#090;text-decoration:none;}
h1.legend a:hover {color:#090;text-decoration:underline;}
div.sampleContainer {text-align:center;background:#eeb;max-width:48.75em;margin:0 auto;}
ul.sampleList {text-align:center;position:relative;margin:0;padding:0.5em;font-size:16px;font-family:Arila,sans-serif;}
ul.sampleList li {display:inline-block;margin:0;padding:0 0;}
ul.sampleList li a {color:#000;}
ul.sampleList li.currentSample a {color:#090;}
ul.sampleList li a:hover,
ul.sampleList li.currentSample a:hover {color:#900;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<div class="global">
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="content">
<h1 class="legend"><a href="http://francois.mizessyn.pagesperso-orange.fr"><?php print $title2;?></a></h1>
<script src="../../_i18n/mgos-i18n-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.js"></script>
<!--<script src="_alone/fm.js">-->
<script data-maxigos-l="<?php print $mxL;?>" src="../../_mgos/sgfplayer.php?cfg=../_sample/fm/fm.cfg">
<?php print dirname($_SERVER['PHP_SELF']);?>/<?php print $sgfDir.$sgfTarget."\n";?>
</script>
</div>
<?php include "../_php/select.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</div><!-- global -->
</body>
</html>
