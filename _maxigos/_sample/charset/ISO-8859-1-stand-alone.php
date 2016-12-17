<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=4.0,user-scalable=yes" />
<?php
include "../_php/date.php";
switch($mxL)
{
	case "fr":$title="Tests de charset, page en ISO-8859-1, maxigos stand-alone script";break;
	case "ja":$title="&#25991;&#23383;&#12486;&#12473;&#12488;&#12289;ISO-8859-1&#12506;&#12540;&#12472;&#12289;maxigos stand-alone script";break;
	case "zh":$title="&#23383;&#31526;&#38598;&#27979;&#35797;, ISO-8859-1&#39029;, maxigos stand-alone script";break;
	case "zh-tw":$title="&#23383;&#31526;&#38598;&#28204;&#35430;, ISO-8859-1&#38913;, maxigos mgosLoader.js";break;
	default:$title="Charset tests, page in ISO-8859-1, maxigos stand-alone script";
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
<p style="color:red;">Remember: characters such as &#30707; or &#30000; 
that are not in the "ISO-8859-1" character set must be encoded, using for instance Decimal NCRs.</p>
<p>Sgf file name between tags</p>
<hr>
<script data-maxigos-l="<?php print $mxL;?>" charset="UTF-8" src="../neo-classic/_alone/maxigos-neo-classic-comment.js">
UTF-8.sgf
</script>
<hr>
<script data-maxigos-html-in-sgf-on="1" data-maxigos-l="<?php print $mxL;?>" charset="UTF-8" src="../neo-classic/_alone/maxigos-neo-classic-comment.js">
Shift_JIS.sgf
</script>
<hr>
<script data-maxigos-html-in-sgf-on="1" data-maxigos-l="<?php print $mxL;?>" charset="UTF-8" src="../neo-classic/_alone/maxigos-neo-classic-comment.js">
ISO-8859-1.sgf
</script>
<hr>
<script data-maxigos-html-in-sgf-on="1" data-maxigos-l="<?php print $mxL;?>" charset="UTF-8" src="../neo-classic/_alone/maxigos-neo-classic-comment.js">
NO-CHARSET.sgf
</script>
<hr>
<p>Sgf record between tags</p>
<hr>
<script data-maxigos-html-in-sgf-on="1" data-maxigos-l="<?php print $mxL;?>" charset="UTF-8" src="../neo-classic/_alone/maxigos-neo-classic-comment.js">
(;
FF[4]
CA[ISO-8859-1]
GM[1]
SZ[19]
C[héhé &#30707;&#30000;
CA property value in sgf record is ignored by maxiGos in this case anyway.])
</script>

<div class="menu"><a href="charset.php?mxL=<?php print $mxL;?>">Index</a></div>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>