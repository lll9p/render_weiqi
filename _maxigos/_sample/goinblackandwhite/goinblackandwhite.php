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
$CastleGame=$mxL=="fr"?"Partie de chateau":"Castle game";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {width:auto;font-family:Arial,sans-serif;font-size:14px;margin:0;padding:0;background:#f3f3f3;}
.page {width:auto;}
.top {margin-bottom:0.5em;font-size:1em;background:#fff;}
.banner {background:white;max-width:650px;margin:0 auto;}
#goinblackandwhiteLogo {border:0;max-width:100%;height:auto;width:auto;padding-bottom:1em;}
.topMenu {font-family:'Helvetica Neue',Arial,Tahoma,sans-serif;text-transform:uppercase;color:#444;padding:0 0.5em;}
.topMenu
{
	background:#d9d9d9;
	background:linear-gradient(#e4e4e4,#d6d6d6);
}
.topMenu ul {margin:0;padding:0;text-align:left;max-width:650px;margin:0 auto;}
.topMenu li {display:inline-block;margin:0;padding:1em;}
.topMenu li {border-right:1px solid #b3b3b3;border-left:1px solid #f3f3f3;}
.topMenu li:first-child {border-left:0;}
.topMenu li:last-child {border-right:0;}
.topMenu li {font-family:Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-weight:normal;}
.topMenu li:hover
{
	background:#39c;
	background:linear-gradient(#2a8ec8,#1e72ab);
}
.topMenu a {color:#444;text-decoration:none;}
.topMenu li:hover a {color:#eee;text-decoration:none;}
.subTopMenu {color:black;padding:0.5em 2em;text-align:right;background:#f3f3f3;}
.subTopMenu2 {max-width:650px;margin:0 auto;}
.subTopMenu span {padding-left:0.125em;padding-right:0.125em;}
.subTopMenu span:hover {cursor:pointer;}
.AMinus {font-size:100%;}
.ANormal {font-size:125%;}
.APlus {font-size:150%;}
.content {background:#fff;border:1px solid #d5d5d5;max-width:650px;margin:0 auto;}
.content a {color:#000;}
.sample {border-top:1px solid #ccc;}
.sample > h1 {font-family:'Helvetica Neue',Arial,Tahoma,sans-serif;font-size:2.5em;font-weight:bold;line-height:2em;text-transform:uppercase;text-align:left;border-left:8px solid #222;padding:0.5em 0 0.5em 1em;margin:0.25em 0;}
.sample:first-child {border-top:0;padding-top:0;}
.sample {font-size:1em;}
.topMenu {border-top:#39c solid 5px;}
.topMenu {border-bottom:1px solid #b3b3b3;outline-bottom:1px solid #f3f3f3;}
.mainLink a,div.menu a,.subTopMenu a,.back a {text-transform:uppercase;}
.mainLink a,div.menu a,.subTopMenu a,.back a {color:#39c;text-decoration:underline;}
.mainLink a:hover,div.menu a:hover,.subTopMenu a:hover,.back a:hover {color:#f00;text-decoration:none;}
.back {text-align:center;padding:0.5em;}
.banner {position:relative;}
.mainLink {position:absolute;bottom:0.5em;right:0;}
div.sampleContainer {border-bottom:1px solid #d5d5d5;}
ul.sampleList li.currentSample a {color:#39c;}
</style>
<title><?php print $goinblackandwhite;?></title>
</head>
<body id="main">
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<div class="page">
<div class="top">
<div class="banner">
<div class="logo"><a href="#"><img id="goinblackandwhiteLogo" src="goinblackandwhite.png"></a></div>
<!-- <div class="mainLink"><a href="#"><?php print $mainLink;?></a></div> -->
</div> <!-- banner -->
<div class="topMenu">
<ul>
<?php
$BasicSwitch=1;
$CommentSwitch=1;
$DiagramSwitch=1;
$ProblemSwitch=1;
$CastleSwitch=1;
?>
<?php if (isset($BasicSwitch)&&$BasicSwitch) {?><li><a href="#basic">Basic</a></li><?php }?>
<?php if (isset($CommentSwitch)&&$CommentSwitch) {?><li><a href="#comment"><?php print $Comment;?></a></li><?php }?>
<?php if (isset($DiagramSwitch)&&$DiagramSwitch) {?><li><a href="#diagram"><?php print $Diagram;?></a></li><?php }?>
<?php if (isset($ProblemSwitch)&&$ProblemSwitch) {?><li><a href="#problem"><?php print $Problem;?></a></li><?php }?>
<?php if (isset($CastleSwitch)&&$CastleSwitch) {?><li><a href="#castle"><?php print $CastleGame;?></a></li><?php }?>
</ul>
</div> <!-- topMenu -->
<div class="subTopMenu">
<div class="subTopMenu2">
<span class="subTopMenuLink"><?php if (file_exists("../../../index.php")) print "<a href=\"../../../index.php?lang=".$mxL."\">".$HomeLabel."</a>";?></span>
<span class="subTopMenuLink"><a href="../../_doc/_<?php print $mxL=="fr"?$mxL:"en";?>/documentation.php"><?php print $Documentation;?></a></span>
<span class="AMinus" onclick="document.getElementById('main').style.fontSize='12px';">A</span>
<span class="ANormal" onclick="document.getElementById('main').style.fontSize='14px';">A</span>
<span class="APlus" onclick="document.getElementById('main').style.fontSize='16px';">A</span>
</div>
</div>
</div> <!-- top -->
<div class="content">
<?php if (isset($BasicSwitch)&&$BasicSwitch) {?>
<div class="sample" id="basic">
<h1>Basic</h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/game/Hon-1941-1.sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite/_cfg/basic.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($CommentSwitch)&&$CommentSwitch) {?>
<div class="sample" id="comment">
<h1><?php print $Comment;?></h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite/_cfg/comment.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($DiagramSwitch)&&$DiagramSwitch) {?>
<div class="sample" id="diagram">
<h1><?php print $Diagram;?></h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/miscellaneous/d_".$mxL.".sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite/_cfg/diagram.cfg");?>"></script>
<br><br>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/game/blood-vomit-".$mxL.".sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite/_cfg/diagram2.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($ProblemSwitch)&&$ProblemSwitch) {?>
<div class="sample" id="problem">
<h1><?php print $Problem;?></h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/problem/p5-".$mxL.".sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite/_cfg/problem.cfg");?>"></script>
<br><br>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/problem/p6-".$mxL.".sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite/_cfg/problem.cfg");?>"></script>
<br><br>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/problem/tactigo-".$mxL.".sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite/_cfg/problem2.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($CastleSwitch)&&$CastleSwitch) {?>
<div class="sample" id="castle">
<h1><?php print $CastleGame;?></h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/game/blood-vomit-".$mxL.".sgf");?>&amp;cfg=<?php print urlencode("../_sample/goinblackandwhite/_cfg/castle.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
</div><!-- end of content -->
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</div> <!-- page -->
</body>
</html>
