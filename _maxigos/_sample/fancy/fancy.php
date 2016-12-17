<!DOCTYPE html>
<html style="overflow-x:scroll">
<?php $mxL=isset($_GET["mxL"])?$_GET["mxL"]:(isset($_POST["mxL"])?$_POST["mxL"]:"fr");?>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
div.sampleContainer {position:relative;z-index:1;background:transparent;}
div.sampleContainer ul.sampleList li a {color:transparent;}
div.sampleContainer:hover ul.sampleList {color:#fff;}
div.sampleContainer:hover ul.sampleList li a {color:#fff;}
div.sampleContainer:hover ul.sampleList li.currentSample a {color:#99f;}
div.sampleContainer:hover ul.sampleList li a:hover,
div.sampleContainer:hover ul.sampleList li.currentSample a:hover {color:#f00;}
</style>
<title>Fancy go</title>
</head>
<body style="background-color:#000;">
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<script type="text/javascript" src="../../_mgos/sgfplayer.php?sgf=<?php print urlencode("../_sample/_sgf/joseki/fancy.sgf");?>&amp;cfg=<?php print urlencode("../_sample/fancy/fancy.cfg");?>"></script>
</body>
</html>
