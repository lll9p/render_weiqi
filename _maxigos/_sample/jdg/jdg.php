<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
if ($mxL=="fr") $title="MaxiGos : jeudego.org";
else $title="MaxiGos: jeudego.org";
if ($mxL=="fr") $title2="Jeudego.org";
else $title2="Jeudego.org";
if ($mxL=="fr") $backLabel="Revenir en haut de la page";
else if ($mxL=="ja") $backLabel="トップに戻る";
else if ($mxL=="zh") $backLabel="返回顶部";
else if ($mxL=="zh-tw") $backLabel="返回頂部";
else $backLabel="Back to top";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body,button,input,select {font-family:'hiragino sans',sans-serif;}
body {font-weight:300;}
div.main
{
	background:url(bk.jpg);
	background-position:top right;
	background-repeat:no-repeat;
	padding:0;
}

div.main>h1
{
	text-align:center;
	margin:0;
	padding:0.5em 0 0 0;
	font-weight:normal;
	font-size:1.8em;
	color:#fb2;
}
div.main section>h2
{
	margin:0;
	padding:0 0 0.5em 0;
}
section
{
	padding:0.5em;
	border-bottom:1px solid #9cd;
}
header a {display:block;overflow:hidden;position:relative;}
header a img
{
	display:block;
	position:relative;
	width:100%;
	min-width:900px;
}
@media (max-width:900px)
{
	header a img
	{
		left:50%;
		margin-left:-450px;
	}
}
@media (max-width:23em)
{
	section {padding:0.125em;}
}
.dia1 {max-width:35em;margin:0 auto;text-align:justify;}
.dia1>div {float:left;padding:0 2em 0 0;}
.ini1 {text-align:center;}
.ini1>div {display:inline-block;padding:1em;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include "../_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<header>
<a href="http://jeudego.org"><img src="jdgHeader.jpg" alt="bannière"></a>
</header>
<div class="main">
<h1 lang="fr"><?php echo $title2;?></h1>
<section>
<h2 lang="en">Diagram</h2>
<div class="dia1">
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/jdg/jdg-diagram.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/joseki/j2.sgf</script>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
</section>
<section>
<h2 lang="en">Exercices</h2>
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/jdg/jdg-exos.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/problem/p1-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.sgf</script>
<br>
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/jdg/jdg-exos2.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/problem/p3-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.sgf</script>
</section>
<section>
<h2 lang="en">Game</h2>
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/jdg/jdg-game.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/game/blood-vomit-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.sgf</script>
</section>
<section>
<h2 lang="en">Initial</h2>
<div class="ini1">
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/jdg/jdg-initial.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/problem/p1-en.sgf</script>
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/jdg/jdg-initial.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/problem/p2-en.sgf</script>
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/jdg/jdg-initial.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/problem/p3-en.sgf</script>
</div>
</section>
<section>
<h2 lang="en">Joseki</h2>
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/jdg/jdg-joseki.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/joseki/j1.sgf</script>
</section>
<section>
<h2 lang="en">Lesson</h2>
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/jdg/jdg-lesson.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/game/TV9x9-<?php print ($mxL=="fr"?"fr":"en");?>.sgf</script>
</section>
<section>
<h2 lang="en">Problem of the day</h2>
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/jdg/jdg-potd.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/problem/p3-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.sgf</script>
</section>
<!-- has to translate sgf -->
<section>
<h2 lang="en">Problem 13x13</h2>
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/jdg/jdg-p13x13.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/miscellaneous/mori-p13x13-<?php print (in_array($mxL,array("fr"))?$mxL:"fr");?>.sgf</script>
</section>
<!-- has to translate sgf -->
<section>
<h2 lang="en">Comment 13x13</h2>
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/jdg/jdg-pc13x13.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/miscellaneous/mori-pc13x13-<?php print (in_array($mxL,array("fr"))?$mxL:"fr");?>.sgf</script>
</section>
</div>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
