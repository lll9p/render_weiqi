<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=4.0,user-scalable=yes">
<?php
switch($mxL)
{
	case "fr":$title="Tests de charset";$page="Page ";break;
	case "ja":$title="文字テスト";$page="ページ　";break;
	case "zh":$title="字符集测试";$page="页 ";break;
	case "zh-tw":$title="字符集測試";$page="頁 ";break;
	default:$title="Charset tests";$page="Page ";
}
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
.page {display:table;margin:0 auto;background:#ccc;padding:1em;border-radius:1em;}
.title {text-align:center;}
</style>
<title>MaxiGos - <?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="page">
<h1 class="title"><?php print $title;?></h1>
<ul>
<li><a href="sample-in-Big5.php?mxL=<?php print $mxL;?>">Big5</a></li>
<li><a href="sample-in-GB18030.php?mxL=<?php print $mxL;?>">GB18030</a></li>
<li><a href="sample-in-Shift_JIS.php?mxL=<?php print $mxL;?>">Shift-JIS</a></li>
</ul>
<ul><?php print $page;?>UTF-8
<li><a href="UTF-8-sgfplayer.php?mxL=<?php print $mxL;?>">Maxigos sgfplayer.php</a></li>
<li><a href="UTF-8-mgosLoader.php?mxL=<?php print $mxL;?>">Maxigos mgosLoader.js</a></li>
<li><a href="UTF-8-stand-alone.php?mxL=<?php print $mxL;?>">Maxigos stand-alone script</a></li>
</ul>
<ul><?php print $page;?>ISO-8859-1
<li><a href="ISO-8859-1-sgfplayer.php?mxL=<?php print $mxL;?>">Maxigos sgfplayer.php</a></li>
<li><a href="ISO-8859-1-mgosLoader.php?mxL=<?php print $mxL;?>">Maxigos mgosLoader.js</a></li>
<li><a href="ISO-8859-1-stand-alone.php?mxL=<?php print $mxL;?>">Maxigos stand-alone script</a></li>
</ul>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</div>
</body>
</html>