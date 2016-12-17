<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
print "<script>mxG={L:\"".$mxL."\"};</script>\n";
if ($mxL=="fr") $title="Exemple d'utilisation de maxiGos : ambiance forum.jeudego.org";
else if ($mxL=="ja") $title="MaxiGos例・forum.jeudego.orgスタイル";
else if ($mxL=="zh") $title="MaxiGos例子-forum.jeudego.org";
else if ($mxL=="zh-tw") $title="MaxiGos例子-forum.jeudego.org";
else $title="Sample for maxiGos: forum.jeudego.org style";
if ($mxL=="fr") $title2="Ambiance forum.jeudego.org";
else if ($mxL=="ja") $title2="forum.jeudego.org　スタイル";
else if ($mxL=="zh") $title2="forum.jeudego.org";
else if ($mxL=="zh-tw") $title2="forum.jeudego.org";
else $title2="forum.jeudego.org style";
if ($mxL=="fr") $title3=" (lecteur façon <a href=\"http://www.gludion.com/go/\">Goswf</a>)";
else if ($mxL=="ja") $title3=" 「<a href=\"http://www.gludion.com/go/\">Goswf</a>　スタイル」";
else if ($mxL=="zh") $title3=" (<a href=\"http://www.gludion.com/go/\">Goswf</a>样式)";
else if ($mxL=="zh-tw") $title3=" (<a href=\"http://www.gludion.com/go/\">Goswf</a>樣式)";
else $title3=" (<a href=\"http://www.gludion.com/go/\">Goswf</a> like player)";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {background-color:#fff;color:#333;margin:0;padding:0;}
.content {padding:0.5em;border-radius:0.25em;margin:0 0.5em 0.25em 0.5em;}
.content1 {background-color:#e1ebf2;}
.content2 {background-color:#ecf3f7;}
h1.header
{
	margin:0 0.5em 0.25em 0.5em;padding:1em;font-size:1.2em;
	background:linear-gradient(to top,#109fe5,#0076b1);
	color:#fff;
	font-weight:bold;
	border-radius:0.25em;
}
h1.header a
{
	color:#fff;
	font-weight:bold;
	text-decoration:none;
}
h1.header a:hover
{
	text-decoration:underline;
}
.mxForumCommentaireGlobalBoxDiv,
.mxForumProblemeGlobalBoxDiv,
.mxForumFigureGlobalBoxDiv {margin:0 auto;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<h1 class="header"><a href="http://forum.jeudego.org"><?php print $title2;?></a><?php print $title3;?></h1>
<div class="content content1">
<h2><?php print ($mxL=="fr")?"Commentaire":"Comment";?></h2>
<script data-maxigos-sgf="<?php print "../_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf";?>"
        src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/forum/commentaire.cfg");?>"></script>
</div>

<div class="content content2">
<h2><?php print ($mxL=="fr")?"Problème":"Problem";?></h2>
<script data-maxigos-sgf="<?php print "../_sgf/problem/p3-".(in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en").".sgf";?>"
        src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/forum/probleme.cfg");?>"></script>
</div>

<div class="content content1">
<h2><?php print ($mxL=="fr")?"Figure":"Figure";?></h2>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/forum/figure.cfg");?>&amp;sgf=<?php print urlencode("../_sample/_sgf/game/blood-vomit.sgf");?>"></script>
</div>

<div class="content content1">
<h2><?php print ($mxL=="fr")?"Diagramme":"Diagram";?></h2>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/forum/figure.cfg");?>">
(;FF[4]GM[1]CA[UTF-8]SZ[19]VW[ah:ls]FG[1]
AB[cp]
;W[ep]
;B[eq]
;W[fq]
;B[dq]
;W[fp]
;B[cn]
;W[jp]
)
</script>
</div>

<div class="content content1">
<h2><?php print ($mxL=="fr")?"Problème":"Problem";?></h2>
<?php
switch($mxL)
{
	case "fr":$id=432;break;
	case "ja":$id=433;break;
	case "zh":$id=434;break;
	case "zh-tw":$id=435;break;
	default:$id=431;
}
?>
<script data-maxigos-source-filter="/download/file\.php\?id=[0-9]+$"
		data-maxigos-sgf="<?php echo dirname($_SERVER['PHP_SELF']).'/download/file.php?id='.$id;?>"
		src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/forum/probleme.cfg");?>">
</script>
</div>

<div class="content content1">
<h2><?php print ($mxL=="fr")?"Figure":"Figure";?></h2>
<script data-maxigos-source-filter="/download/file\.php\?id=[0-9]+$"
		src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/forum/figure.cfg");?>&amp;sgf=<?php print urlencode("../_sample/forum/download/file.php?id=141");?>">
</script>
</div>

<div class="content content1">
<h2><?php print ($mxL=="fr")?"Diagramme":"Diagram";?></h2>
<script data-maxigos-source-filter="/download/file\.php\?id=[0-9]+$"
		src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/forum/figure.cfg");?>">
<?php echo dirname($_SERVER['PHP_SELF']);?>/download/file.php?id=221
</script>
</div>

<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
