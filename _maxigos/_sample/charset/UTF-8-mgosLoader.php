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
	case "fr":$title="Tests de charset, page en UTF-8, maxigos mgosLoader.js";break;
	case "ja":$title="文字テスト、UTF-8ページ、maxigos mgosLoader.js";break;
	case "zh":$title="字符集测试, UTF-8页, maxigos mgosLoader.js";break;
	case "zh-tw":$title="字符集測試, UTF-8頁, maxigos mgosLoader.js";break;
	default:$title="Charset tests, page in UTF-8, maxigos mgosLoader.js.php";
}
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
h1 {text-align:center;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<script charset="UTF-8" src="../../_i18n/mgos-i18n-<?php print $mxL;?>.js"></script>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="menu"><a href="charset.php?mxL=<?php print $mxL;?>">Index</a></div>
<h1><?php print $title;?></h1>
<p>Sgf file name between tags</p>
<hr>
<div data-maxigos-l="<?php print $mxL;?>" data-maxigos="comment">
UTF-8.sgf
</div>
<hr>
<div data-maxigos-html-in-sgf-on="1" data-maxigos-l="<?php print $mxL;?>" data-maxigos="comment">
Shift_JIS.sgf
</div>
<hr>
<div data-maxigos-html-in-sgf-on="1" data-maxigos-l="<?php print $mxL;?>" data-maxigos="comment">
ISO-8859-1.sgf
</div>
<hr>
<div data-maxigos-html-in-sgf-on="1" data-maxigos-l="<?php print $mxL;?>" data-maxigos="comment">
NO-CHARSET.sgf
</div>
<hr>
<p>Sgf record between tags</p>
<hr>
<div data-maxigos-l="<?php print $mxL;?>" data-maxigos="comment">
(;
FF[4]
CA[UTF-8]
GM[1]
SZ[19]
C[héhé 石田
CA property value in sgf record is ignored by maxiGos in this case anyway.])
</div>
<script src="../../_mgos/mgosLoader.js"></script>
<div class="menu"><a href="charset.php?mxL=<?php print $mxL;?>">Index</a></div>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>