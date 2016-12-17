<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
if ($mxL=="fr") $title="St Valentin";
else $title="Valentine's day";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {margin:0;padding:0;background-color:#f69;font-family:cursive;color:#fff;}
.content {margin:0 auto;padding:1em 0;}
.note {text-align:center;}
div.menu {text-align:center;margin-top:0.5em;}
div.menu a {color:#fff;text-decoration:none;}
div.menu a:hover {color:#fff;text-decoration:underline;}
form.fileSelector {text-align:center;}
ul.sampleList li a {color:#fff;text-decoration:none;}
ul.sampleList li a:hover,
ul.sampleList li.currentSample a,
ul.sampleList li.currentSample a:hover {color:#fff;text-decoration:underline;}
a:focus,
button:focus {outline:1px dotted #fff;}
a::-moz-focus-inner,
button::-moz-focus-inner {padding:0;border:0;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="content">
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/miscellaneous/heart-minimal.sgf");?>&amp;cfg=<?php print urlencode("../_sample/pink/pink.cfg");?>"></script>
</div>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
