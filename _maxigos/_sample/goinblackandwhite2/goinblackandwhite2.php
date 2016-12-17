<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
$mainLink=$mxL=="fr"?"Ambiance en noir et blanc":"In black and white style";
$goinblackandwhite=$mxL=="fr"?"Go en noir et blanc":"Go in black and white";
$Comment=$mxL=="fr"?"Partie commentée":"Commented game";
$Diagram=$mxL=="fr"?"Diagramme":"Diagram";
$Game=$mxL=="fr"?"Partie":"Game";
$Problem=$mxL=="fr"?"Problèmes":"Problems";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body
{
	font-family:Arial,sans-serif;
	font-size:14px;
	margin:0;
	padding:0;
	background:#f00;
}
.global
{
	background:#ccc;
	background:linear-gradient(to right,#fff,#666);
}

.banner,
.topMenu {display:inline-block;vertical-align:middle;}
.topMenu ul {display:inline-block;margin:0.5em;padding:0;}
.topMenu ul li {display:inline-block;margin:0;padding:0.25em;}
.subTopMenu {text-align:right;padding-right:0.5em;}
.top a,
.back a,
.top a:hover,
.back a:hover {color:#444;text-decoration:underline;}
.AAA {white-space:nowrap;}
.AAA span {display:inline-block;padding:0 0.1em;}
.AAA span:hover {cursor:pointer;}
.AMinus {font-size:100%;}
.ANormal {font-size:125%;}
.APlus {font-size:150%;}

.sample {border-top:1px solid #ccc;margin-top:1em;}
.sampleTitle {padding-left:20px;}

.back {text-align:center;padding:0.5em;}
</style>
<title><?php print $goinblackandwhite;?></title>
</head>
<body id="main">
<div class="global">
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<div class="page">
<div class="top">
<div class="topMenuAndBanner">
<div class="banner">
<div class="logo"><a href="#"><img id="goinblackandwhiteLogo" src="goinblackandwhite2.png"></a></div>
</div> <!-- banner -->
<div class="topMenu">
<ul>
<?php
$CommentSwitch=1;
$DiagramSwitch=1;
$GameSwitch=1;
$ProblemSwitch=1;
?>
<?php if (isset($CommentSwitch)&&$CommentSwitch) {?><li><a href="#comment"><?php print $Comment;?></a></li><?php }?>
<?php if (isset($DiagramSwitch)&&$DiagramSwitch) {?><li><a href="#diagram"><?php print $Diagram;?></a></li><?php }?>
<?php if (isset($GameSwitch)&&$GameSwitch) {?><li><a href="#game"><?php print $Game;?></a></li><?php }?>
<?php if (isset($ProblemSwitch)&&$ProblemSwitch) {?><li><a href="#problem"><?php print $Problem;?></a></li><?php }?>
</ul>
</div> <!-- topMenu -->
</div> <!-- topMenuAndBanner -->
<div class="subTopMenu">
<div class="subTopMenu2">
<!-- <span class="mainLink"><a href="#"><?php print $mainLink;?></a></span> -->
<span class="subTopMenuLink"><?php if (file_exists("../../../index.php")) print "<a href=\"../../../index.php?lang=".$mxL."\">".$HomeLabel."</a>";?></span>
<span class="subTopMenuLink"><a href="../../<?php print $mxL;?>/documentation.php"><?php print $Documentation;?></a></span>
<span class="AAA">
<span class="AMinus" onclick="document.getElementById('main').style.fontSize='12px';">A</span>
<span class="ANormal" onclick="document.getElementById('main').style.fontSize='14px';">A</span>
<span class="APlus" onclick="document.getElementById('main').style.fontSize='16px';">A</span>
</span>
</div> <!-- subTopMenu2 -->
</div> <!-- subTopMenu -->
</div> <!-- top -->
<?php if (isset($CommentSwitch)&&$CommentSwitch) {?>
<div class="sample" id="comment">
<h1 class="sampleTitle"><?php print $Comment;?></h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite2/_cfg/comment.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($DiagramSwitch)&&$DiagramSwitch) {?>
<div class="sample" id="diagram">
<h1 class="sampleTitle"><?php print $Diagram;?></h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/miscellaneous/d_".$mxL.".sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite2/_cfg/diagram.cfg");?>"></script>
<br><br>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/game/blood-vomit-".$mxL.".sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite2/_cfg/diagram.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($GameSwitch)&&$GameSwitch) {?>
<div class="sample" id="game">
<h1 class="sampleTitle"><?php print $Game;?></h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/game/longuest.sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite2/_cfg/game.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($ProblemSwitch)&&$ProblemSwitch) {?>
<div class="sample" id="problem">
<h1 class="sampleTitle"><?php print $Problem;?></h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/problem/p5-".$mxL.".sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite2/_cfg/problem.cfg");?>"></script>
<br><br>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/problem/p6-".$mxL.".sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite2/_cfg/problem.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</div> <!-- page -->
</div> <!-- global -->
</body>
</html>
