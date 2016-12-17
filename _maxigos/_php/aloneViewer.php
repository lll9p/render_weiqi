<!DOCTYPE html>
<?php $mxL=(isset($_GET["mxL"])?$_GET["mxL"]:"en");?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
$s=(isset($_GET["s"])?$_GET["s"]:"../_sample/neo-classic/_alone/maxigos-neo-classic-basic.js");
$j=$s;
$b=basename($j);
$t="../_i18n/mgos-i18n-".$mxL.".js";
switch($mxL)
{
	case "fr":$back="Retour";$home="Accueil";break;
	case "ja":$back="戻る";$home="ホーム";break;
	case "zh":$back="上一頁";$home="首页";break;
	case "zh-tw":$back="上一頁";$home="首頁";break;
	default:$back="Back";$home="Home";
}
if (strpos(strtolower($s),"comment")!==false) $sgf="../_sample/_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf";
else if (strpos(strtolower($s),"edit")!==false) $sgf="";
else if (strpos(strtolower($s),"game")!==false) $sgf="../_sample/_sgf/game/Mingren-001-1F-1-".$mxL.".sgf";
else if (strpos(strtolower($s),"lesson")!==false) $sgf="../_sample/_sgf/game/TV9x9-".(($mxL=="fr")?"fr":"en").".sgf";
else if (strpos(strtolower($s),"loop")!==false) $sgf="../_sample/_sgf/joseki/j1.sgf";
else if (strpos(strtolower($s),"problem")!==false) $sgf="../_sample/_sgf/problem/p3-".$mxL.".sgf";
else if (strpos(strtolower($s),"tree")!==false) $sgf="../_sample/_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf";
else if (strpos(strtolower($s),"tiger")!==false) $sgf="../_sample/_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf";
else if (strpos(strtolower($s),"jdg-exos")!==false) $sgf="../_sample/_sgf/problem/p3-".(($mxL=="fr")?"fr":"en").".sgf";
else if (strpos(strtolower($s),"jdg-exos2")!==false) $sgf="../_sample/_sgf/problem/p3-".(($mxL=="fr")?"fr":"en").".sgf";
else if (strpos(strtolower($s),"jdg-initial")!==false) $sgf="../_sample/_sgf/joseki/j1.sgf";
else if (strpos(strtolower($s),"jdg-joseki")!==false) $sgf="../_sample/_sgf/joseki/j1.sgf";
else if (strpos(strtolower($s),"jdg-p13x13")!==false) $sgf="../_sample/_sgf/miscellaneous/mori-p13x13-fr.sgf";
else if (strpos(strtolower($s),"jdg-pc13x13")!==false) $sgf="../_sample/_sgf/miscellaneous/mori-pc13x13-fr.sgf";
else if (strpos(strtolower($s),"jdg-potd")!==false) $sgf="../_sample/_sgf/problem/p3-".(($mxL=="fr")?"fr":"en").".sgf";
else $sgf="../_sample/_sgf/game/blood-vomit.sgf";
?>
<style>
body {padding:0;margin:0;}
.scriptNameH1 {text-align:center;}
.backLinks {text-align:center;}
.backLinks a {display:inline-block;padding:0 0.5em;color:#000;}
.flags {text-align:center;}
.flags img {border:1px solid #ccc;display:inline-block;margin:0.5em;}
nav {display:block;background:#eee;text-align:center;}
nav div a {color:#000;}
nav div a:first-of-type:before {content:"(";}
nav div a:last-of-type:after {content:")";}
nav div {display:inline-block;padding:0.125em 0.5em;}
<?php if (strpos($s,"rosewood")!==false) {?>
section {background:#ec7;}
section>h1 {margin:0;padding:1em;}
<?php }?>
<?php if ($s=="../_sample/fm/_alone/fm.js") {?>
section {background:#eeb;}
section>h1 {color:#090;margin:0;padding:1em;}
<?php }?>
<?php if ($s=="../_sample/jdg/_alone/jdg-lesson.js") {?>
section>h1 {padding-bottom:2em;}
<?php }?>
</style>
</head>
<body>
<nav>
<div>
<span>neo-classic</span>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/neo-classic/_alone/maxigos-neo-classic-basic.js"><?php $mk=1;echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/neo-classic/_alone/maxigos-neo-classic-comment.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/neo-classic/_alone/maxigos-neo-classic-diagram.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/neo-classic/_alone/maxigos-neo-classic-game.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/neo-classic/_alone/maxigos-neo-classic-problem.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/neo-classic/_alone/maxigos-neo-classic-tree.js"><?php echo $mk++;?></a>
</div>
<div>
<span>classic</span>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/classic/_alone/maxigos-classic-basic.js"><?php $mk=1;echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/classic/_alone/maxigos-classic-comment.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/classic/_alone/maxigos-classic-diagram.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/classic/_alone/maxigos-classic-game.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/classic/_alone/maxigos-classic-lesson.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/classic/_alone/maxigos-classic-loop.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/classic/_alone/maxigos-classic-problem.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/classic/_alone/maxigos-classic-tree.js"><?php echo $mk++;?></a>
</div>
<div>
<span>tatami</span>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/tatami/_alone/maxigos-tatami-basic.js"><?php $mk=1;echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/tatami/_alone/maxigos-tatami-comment.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/tatami/_alone/maxigos-tatami-diagram.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/tatami/_alone/maxigos-tatami-game.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/tatami/_alone/maxigos-tatami-problem.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/tatami/_alone/maxigos-tatami-tree.js"><?php echo $mk++;?></a>
</div>
<div>
<span>rosewood</span>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/rosewood/_alone/maxigos-rosewood-basic.js"><?php $mk=1;echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/rosewood/_alone/maxigos-rosewood-comment.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/rosewood/_alone/maxigos-rosewood-diagram.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/rosewood/_alone/maxigos-rosewood-game.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/rosewood/_alone/maxigos-rosewood-problem.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/rosewood/_alone/maxigos-rosewood-tree.js"><?php echo $mk++;?></a>
</div>
<div>
<span>minimalist</span>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/minimalist/_alone/maxigos-minimalist-basic.js"><?php $mk=1;echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/minimalist/_alone/maxigos-minimalist-comment.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/minimalist/_alone/maxigos-minimalist-diagram.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/minimalist/_alone/maxigos-minimalist-game.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/minimalist/_alone/maxigos-minimalist-problem.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/minimalist/_alone/maxigos-minimalist-tree.js"><?php echo $mk++;?></a>
</div>
<div>
<span>edit</span>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/edit/_alone/maxigos-edit.js"><?php $mk=1;echo $mk++;?></a>
</div>
<div>
<span>kifu</span>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/kifu/_alone/kifu.js"><?php echo $mk=1;$mk++;?></a>
</div>
<div>
<span>fm</span>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/fm/_alone/fm.js"><?php echo $mk=1;$mk++;?></a>
</div>
<div>
<span>tiger</span>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/tiger/_alone/tiger.js"><?php echo $mk=1;$mk++;?></a>
</div>
<div>
<span>jdg</span>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/jdg/_alone/jdg-diagram.js"><?php echo $mk=1;$mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/jdg/_alone/jdg-exos.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/jdg/_alone/jdg-exos2.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/jdg/_alone/jdg-game.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/jdg/_alone/jdg-initial.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/jdg/_alone/jdg-joseki.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/jdg/_alone/jdg-lesson.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/jdg/_alone/jdg-p13x13.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/jdg/_alone/jdg-pc13x13.js"><?php echo $mk++;?></a>
<a href="aloneViewer.php?mxL=<?php echo $mxL;?>&amp;s=../_sample/jdg/_alone/jdg-potd.js"><?php echo $mk++;?></a>
</div>
</nav>
<section>
<h1 class="scriptNameH1"><?php print basename($j);?></h1>
<?php
print "\n";
if (($mxL=="ja")||($mxL=="zh")||($mxL=="zh-tw")) print "<script charset=\"UTF-8\" src=\"".$t."\"></script>\n";
?>
<script charset="UTF-8" src="<?php print $j;?>" data-maxigos-l="<?php print $mxL;?>"><?php print $sgf;?></script>
</section>
<div class="flags">
<a href="aloneViewer.php?mxL=en&amp;s=<?php print $s;?>"><img src="../_img/flag/en.gif"></a>
<a href="aloneViewer.php?mxL=fr&amp;s=<?php print $s;?>"><img src="../_img/flag/fr.gif"></a>
<a href="aloneViewer.php?mxL=ja&amp;s=<?php print $s;?>"><img src="../_img/flag/ja.gif"></a>
<a href="aloneViewer.php?mxL=zh&amp;s=<?php print $s;?>"><img src="../_img/flag/zh.gif"></a>
<a href="aloneViewer.php?mxL=zh-tw&amp;s=<?php print $s;?>"><img src="../_img/flag/zh-tw.gif"></a>
</div>
<div class="backLinks">
<a href="../../?lang=<?php print $mxL;?>"><?php print $home;?></a>
<a href="javascript:history.back()"><?php print $back;?></a>
</div>
</body>
</html>
