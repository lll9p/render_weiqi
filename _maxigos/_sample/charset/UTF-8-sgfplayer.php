<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=4.0,user-scalable=yes" />
<?php
include "../_php/date.php";
switch($mxL)
{
	case "fr":$title="Tests de charset, page en UTF-8, maxigos sgfplayer.php";break;
	case "ja":$title="文字テスト、UTF-8ページ、maxigos sgfplayer.php";break;
	case "zh":$title="字符集测试, UTF-8页, maxigos sgfplayer.php";break;
	case "zh-tw":$title="字符集測試, UTF-8頁, maxigos sgfplayer.php";break;
	default:$title="Charset tests, page in UTF-8, maxigos sgfplayer.php";
}
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
h1 {text-align:center;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="menu"><a href="charset.php?mxL=<?php print $mxL;?>">Index</a></div>
<h1><?php print $title;?></h1>
<p>Sgf file name in sgfplayer.php URL</p>
<hr>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=../_sample/neo-classic/_cfg/comment.cfg&amp;sgf=../_sample/charset/UTF-8.sgf"></script>
<hr>
<script data-maxigos-html-in-sgf-on="1" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=../_sample/neo-classic/_cfg/comment.cfg&amp;sgf=../_sample/charset/Big5.sgf"></script>
<hr>
<script data-maxigos-html-in-sgf-on="1" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=../_sample/neo-classic/_cfg/comment.cfg&amp;sgf=../_sample/charset/GB18030.sgf"></script>
<hr>
<script data-maxigos-html-in-sgf-on="1" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=../_sample/neo-classic/_cfg/comment.cfg&amp;sgf=../_sample/charset/Shift_JIS.sgf"></script>
<hr>
<script data-maxigos-html-in-sgf-on="1" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=../_sample/neo-classic/_cfg/comment.cfg&amp;sgf=../_sample/charset/ISO-8859-1.sgf"></script>
<hr>
<script data-maxigos-html-in-sgf-on="1" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=../_sample/neo-classic/_cfg/comment.cfg&amp;sgf=../_sample/charset/NO-CHARSET.sgf"></script>
<hr>
<p>Sgf file name between tags</p>
<hr>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=../_sample/neo-classic/_cfg/comment.cfg">
UTF-8.sgf
</script>
<hr>
<script data-maxigos-html-in-sgf-on="1" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=../_sample/neo-classic/_cfg/comment.cfg">
Big5.sgf
</script>
<hr>
<script data-maxigos-html-in-sgf-on="1" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=../_sample/neo-classic/_cfg/comment.cfg">
GB18030.sgf
</script>
<hr>
<script data-maxigos-html-in-sgf-on="1" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=../_sample/neo-classic/_cfg/comment.cfg">
Shift_JIS.sgf
</script>
<hr>
<script data-maxigos-html-in-sgf-on="1" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=../_sample/neo-classic/_cfg/comment.cfg">
ISO-8859-1.sgf
</script>
<hr>
<script data-maxigos-html-in-sgf-on="1" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=../_sample/neo-classic/_cfg/comment.cfg">
NO-CHARSET.sgf
</script>
<hr>
<p>Sgf record between tags</p>
<hr>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=../_sample/neo-classic/_cfg/comment.cfg">
(;
FF[4]
CA[UTF-8]
GM[1]
SZ[19]
C[héhé 石田
CA property value in sgf record is ignored by maxiGos in this case anyway.])
</script>
<div class="menu"><a href="charset.php?mxL=<?php print $mxL;?>">Index</a></div>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>