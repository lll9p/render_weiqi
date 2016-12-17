<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php include "../_php/date.php";?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
.content
{
	margin:1em auto;
	max-width:42em;
	background-image:url(../../_img/bk/kaya.jpg);
	background-size:cover;
	box-shadow: 0 1em 1em #963;
}
</style>
<title>Iroha</title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="content">
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/game/blood-vomit.sgf");?>&amp;cfg=<?php print urlencode("../_sample/iroha/iroha.cfg");?>"></script>
</div>
<?php
$langList=array("en","fr","ja","zh","zh-tw");
include "../_php/menu.php";
?>
</body>
</html>
