<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
if (isset($_GET["s"])) $style=$_GET["s"];else $style="3";
if (!in_array($style,array("1","2","3"))) $style="3";
include "../_php/date.php";
if ($mxL=="fr")
{
	$title="Exemple d'utilisation de maxiGos : ambiance tsumego.org";
	$problemOfTheDay="Problème du jour";
	$listOfProblem="Liste de problèmes";
}
else
{
	$title="Sample for maxiGos: tsumego.org style";
	$problemOfTheDay="Problem of the day";
	$listOfProblem="Problem list";
}
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">

<style>
body {font-family:Arial,Helvetica,sans-serif;}

.superglobal1
{
	font-family:Verdana,Arial,Helvetica,sans-serif;
	font-size:12px;
	background:url(tatami.gif);
	margin:0 auto;
	<?php if ($style!="1") echo "display:none;"?>
}

.superglobal1 h1.header a {font-weight:bold;text-decoration:none;color:#fff;background:transparent;}
.superglobal1 h1.header a:hover {text-decoration:underline;}

.superglobal1 .global
{
	max-width:970px;
	margin:0 auto;
	background:#eeeebb;
	padding-bottom:0.5em;
}

.superglobal1 .header {color:white;margin:0 auto;background:#900;padding:0.5em 1em;font-size:1.25em;}

.superglobal1 .content
{
	margin:1em 1em 0.5em 1em;
	padding:0.5em;
	background-color:#b0c791;
	border:2px solid #c5dba4;
	border-radius:1em;
}
.superglobal1 .contentH1 {font-size:1em;color:#900;border-bottom:2px solid #6a7857;}

.superglobal1 .l {text-align:center;}
.superglobal1 .p {display:inline-block;outline:1px solid #900;vertical-align:top;}

.superglobal2
{
	font-family:"Times New Roman",serif;
	font-size:18px;
	color:#3d3d3d;
	background-color:#c3c3c3;
	margin:0 auto;
	<?php if ($style!="2") echo "display:none;"?>
}

.superglobal2 h1
{
	margin:0;
	padding:0;
	font-size:1em;
	font-weight:bold;
	text-decoration:none;
	color: #99c400;
}
.superglobal2 h2
{
	margin:0;
	padding:0;
	font-size:1em;
	font-weight:bold;
	text-decoration:none;
	color:#000;
}
.superglobal2 h3 {display:inline-block;margin:0;padding:0;}
.superglobal2 h3:after {content:" : ";}
.superglobal2 .stars {display:inline-block;}

.superglobal2 h1.header a {color:#fff;text-decoration:none;}
.superglobal2 h1.header a:hover {color:#fff;text-decoration:underline;}

.superglobal2 .global {max-width:968px;margin:0 auto;background:#d6d6d6;border:1px solid #000;}

.superglobal2 .header {color:white;margin:0 auto;background:#242424;padding:0.25em 0.5em;}

.superglobal2 .content
{
	margin:0.5em;
	padding:0.25em;
	background-color:#e8e8e8;
	border:1px solid #fff;
}
.superglobal2 .contentH1 {border-bottom:1px solid #c0c0c0;}

.superglobal2 .l {text-align:center;}
.superglobal2 .p {display:inline-block;margin:0.5em;padding:1em;text-align:center;box-shadow:-2px 2px 5px #c0c0c0;vertical-align:top;}

.superglobal2 .lpotd {font-size:1em;border-radius:1em;border:1px solid #272727;background-color:#272727;display:table;margin:1em auto;}
.superglobal2 .tpotd {text-align:center;color:#edd80d;padding:0.5em;}

.superglobal3
{
	font-family:"Helvetica Neue",Arial,sans-serif;
	font-weight:300;
	margin:0 auto;
	padding:0 1em 1em 1em;
	max-width:30em;
	<?php if ($style!="3") echo "display:none;"?>
}
.superglobal3 h1,
.superglobal3 h1 a,
.superglobal3 h2 {color:#666;font-weight:200;}
.superglobal3 h1,
.superglobal3 h2 {font-size:2em;text-align:center;}
.superglobal3 h1 a {text-decoration:none;}
.superglobal3 h1 a:hover {color:#a2cd48;}
.superglobal3 h3
{
	display:inline-block;
	margin:0;
	padding:0;
	font-weight:200;
	color:#fff;
}
.superglobal3 .lpotd {border-radius:1em;box-shadow:0.125em 0.125em 0.375em #ccc;margin:0 auto;}
.superglobal3 .tpotd {font-size:1.5em;background:#c2db8d;border-radius:0.67em 0.67em 0 0;padding:0.25em 0.5em;text-align:center;}
.superglobal3 .stars {display:inline-block;border-radius:0.5em;background:#fff;height:0.75em;line-height:0.75em;padding:0 0.25em;}
.superglobal3 .stars img {height:0.5em;vertical-align:0.125em;}
@media (max-width:30em)
{
	.superglobal3 {padding:0.5em;}
}
@media (max-width:25em)
{
	.superglobal3 .tpotd {padding:0.125em 0.25em;}
	.superglobal3 {padding:0.25em;}
}

div.style {text-align:center;margin:0.5em;}
div.style a {color:#000;padding:0 0.5em;display:inline-block;}
img.flag {border:1px solid #ccc;margin-left:0.125em;margin-right:0.125em;}
div.footer {font-size:1em;color:#000;margin:0 auto;padding:0.1em;text-align:center;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="style">
<a href="tsumego.php?mxL=<?php echo $mxL;?>&amp;s=1">Style 1</a>
<a href="tsumego.php?mxL=<?php echo $mxL;?>&amp;s=2">Style 2</a>
<a href="tsumego.php?mxL=<?php echo $mxL;?>&amp;s=3">Style 3</a>
</div>

<div class="superglobal3">
<div class="global">
<?php if ($mxL=="fr") {?>
<h1 class="header">Ambiance <a href="http://tsumego.org">tsumego.org</a></h1>
<?php } else {?>
<h1 class="header"><a href="http://tsumego.org">tsumego.org</a> style 3</h1>
<?php }?>
<div class="content">
<h2><?php print $problemOfTheDay;?></h2>
<div class="lpotd">
<div class="tpotd">
<h3>Tsumego</h3>
<div class="stars"><img src="etoile1.png" alt="etoile1"><img src="etoile1.png" alt="etoile1"><img src="etoile1.png" alt="etoile1"><img src="etoile2.png" alt="etoile2"><img src="etoile2.png" alt="etoile2"><img src="etoile2.png" alt="etoile2"></div>
</div><!-- tpotd -->
<script src="../../_mgos/sgfplayer.php?sgf=<?php print urlencode("../_sample/_sgf/problem/p3-".((in_array($mxL,array("en","fr","ja","zh","zh-tw")))?$mxL:"en").".sgf");?>&amp;mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/tsumego/tsumego3P.cfg");?>"></script>
</div><!-- lpotd -->
</div><!-- content -->
</div><!-- global -->
</div><!-- superglobal3 -->

<div class="superglobal2">
<div class="global">
<?php if ($mxL=="fr") {?>
<h1 class="header">Ambiance <a href="http://tsumego.org">tsumego.org</a> (le site a changé de style depuis que cet exemple a été conçu)</h1>
<?php } else {?>
<h1 class="header"><a href="http://tsumego.org">tsumego.org</a> style 2 (the site changed of style since this sample was built)</h1>
<?php }?>
<div class="content">
<h1 class="contentH1"><?php print $listOfProblem;?></h1>
<div class="l">
<div class="p">
<h1 style="display:inline;"><?php print ($mxL=="fr")?"Problème 1":(($mxL=="ja")?"第一題":(($mxL=="zh")?"第一题":(($mxL=="zh-tw")?"第一題":"Problem #1")));?></h1>
| <h2 style="display:inline;"><?php print ($mxL=="fr")?"Niveau : 1":(($mxL=="ja")?"初級":(($mxL=="zh")?"初级":(($mxL=="zh-tw")?"初級":"Level: 1")));?></h2>
<script src="../../_mgos/sgfplayer.php?sgf=<?php print urlencode("../_sample/_sgf/problem/p1-".((in_array($mxL,array("en","fr","ja","zh","zh-tw")))?$mxL:"en").".sgf");?>&amp;mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/tsumego/tsumego2C.cfg");?>"></script>
</div>
<div class="p">
<h1 style="display:inline;"><?php print ($mxL=="fr")?"Problème 1":(($mxL=="ja")?"第一題":(($mxL=="zh")?"第一题":(($mxL=="zh-tw")?"第一題":"Problem #1")));?></h1>
| <h2 style="display: inline;"><?php print ($mxL=="fr")?"Niveau : 2":(($mxL=="ja")?中級:(($mxL=="zh")?"中级":(($mxL=="zh-tw")?"中級":"Level: 2")));?></h2>
<script src="../../_mgos/sgfplayer.php?sgf=<?php print urlencode("../_sample/_sgf/problem/p3-".((in_array($mxL,array("en","fr","ja","zh","zh-tw")))?$mxL:"en").".sgf");?>&amp;mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/tsumego/tsumego2C.cfg");?>"></script>
</div>
</div>
<h1 class="contentH1"><?php print $problemOfTheDay;?></h1>
<div class="lpotd">
<div class="tpotd">
<h3>Tsumego</h3>
<div class="stars"><img src="etoile1.png" alt="etoile1"><img src="etoile2.png" alt="etoile2"><img src="etoile2.png" alt="etoile2"><img src="etoile2.png" alt="etoile2"><img src="etoile2.png" alt="etoile2"><img src="etoile2.png" alt="etoile2"></div>
</div><!-- tpotd -->
<script src="../../_mgos/sgfplayer.php?sgf=<?php print urlencode("../_sample/_sgf/problem/p2-".((in_array($mxL,array("en","fr","ja","zh","zh-tw")))?$mxL:"en").".sgf");?>&amp;mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/tsumego/tsumego2P.cfg");?>"></script>
</div><!-- lpotd -->
</div><!-- content -->
</div><!-- global -->
</div><!-- superglobal2 -->

<div class="superglobal1">
<div class="global">
<?php if ($mxL=="fr") {?>
<h1 class="header">Ambiance <a href="http://tsumego.org">tsumego.org</a> (le site a changé de style depuis que cet exemple a été conçu)</h1>
<?php } else {?>
<h1 class="header"><a href="http://tsumego.org">tsumego.org</a> style 1 (the site changed of style since this sample was built)</h1>
<?php }?>
<div class="content">
<h1 class="contentH1"><?php print $listOfProblem;?></h1>
<div class="l">
<div class="p">
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/problem/p1-".((in_array($mxL,array("en","fr","ja","zh","zh-tw")))?$mxL:"en").".sgf");?>&amp;cfg=<?php print urlencode("../_sample/tsumego/tsumegoC.cfg");?>"></script>
</div><div class="p">
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/problem/p3-".((in_array($mxL,array("en","fr","ja","zh","zh-tw")))?$mxL:"en").".sgf");?>&amp;cfg=<?php print urlencode("../_sample/tsumego/tsumegoC.cfg");?>"></script>
</div>
</div>
<h1 class="contentH1"><?php print $problemOfTheDay;?></h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/problem/p2-".((in_array($mxL,array("en","fr","ja","zh","zh-tw")))?$mxL:"en").".sgf");?>&amp;cfg=<?php print urlencode("../_sample/tsumego/tsumegoP.cfg");?>"></script>
</div><!-- content -->
</div><!-- global -->
</div><!-- superglobal1 -->
<div class="style">
<a href="tsumego.php?mxL=<?php echo $mxL;?>&amp;s=1">Style 1</a>
<a href="tsumego.php?mxL=<?php echo $mxL;?>&amp;s=2">Style 2</a>
<a href="tsumego.php?mxL=<?php echo $mxL;?>&amp;s=3">Style 3</a>
</div>
<div class="footer">
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php"; ?>
</div>
</body>
</html>
