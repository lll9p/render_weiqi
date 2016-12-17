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
if ($mxL=="fr") $title="Exemple d'utilisation de maxiGos : Kifu manuscrit";
else $title="Sample for maxiGos: Kifu - Manuscript style";
$econumOn=isset($_GET["econumOn"])?"data-maxigos-econum-on=\"".$_GET["econumOn"]."\"":"";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
@font-face
{
	font-family:maxiGos;
	src:url(../../../../_font/ChN1_Regular.ttf);
}
body
{
	background: url(../../_img/bk/cherry.jpg);
	background-size:cover;
	background-repeat:no-repeat;
}
.content {margin:0 auto;}
div.menu {text-align:center;padding:1em;font-family:maxiGos, cursive;}
div.menu span {color:#fff;margin-left:0.5em;margin-right:0.5em;}
div.menu a {color:#fff;text-decoration:none;}
div.menu a:hover {color:#fff;text-decoration:underline;}
img.flag {border:1px solid #ccc;margin-left:0.5em;margin-right:0.5em;vertical-align:-2px;}
form.fileSelector {text-align:center;color:#fff;font-family:maxiGos, cursive;}
/*
div.sampleContainer {text-align:center;}
div.sampleListLabel {display:inline-block;color:#fff;}
ul.sampleList:nth-of-type(2) {display:inline-block;}
ul.sampleList {text-align:center;position:relative;margin:0.5em;padding:0;color:#fff;font-size:16px;font-family:Arial,sans-serif;}
ul.sampleList li {display:inline-block;margin:0;padding:0 0;}
*/
ul.sampleList li a {color:#fff;text-decoration:none;}
ul.sampleList li a:hover,
ul.sampleList li.currentSample a,
ul.sampleList li.currentSample a:hover {color:#fff;text-decoration:underline;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="content">
<!-- econumOn: for fun and because there is a link from sensei library to this page that needs it -->
<script <?php print $econumOn;?>src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/game/".$sgfTarget);?>&amp;cfg=<?php print urlencode("../_sample/manuscript/manuscript.cfg");?>"></script>
</div><!-- content -->
<?php
$langList=array("en","fr","ja","zh","zh-tw");
include "../_php/select.php";
include "../_php/menu.php";
?>
</body>
</html>
