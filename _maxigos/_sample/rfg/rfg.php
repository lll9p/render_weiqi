<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
if ($mxL=="fr") $title="Exemple d'utilisation de maxiGos : ambiance RFG";
else if ($mxL=="ja") $title="MaxiGos例・RFGのスタイル";
else if ($mxL=="zh") $title="MaxiGos例子-RFG";
else if ($mxL=="zh-tw") $title="MaxiGos例子-RFG";
else $title="Sample for maxiGos: RFG style";
if ($mxL=="fr") $backLabel="Revenir en haut de la page";
else if ($mxL=="ja") $backLabel="トップに戻る";
else if ($mxL=="zh") $backLabel="返回顶部";
else if ($mxL=="zh-tw") $backLabel="返回頂部";
else $backLabel="Back to top";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<!--
flexi-form.css and bootstrap-responsive.css are added to test rfg.jeudego.org style
they can be removed in other contexts
-->
<link rel="stylesheet" href="_css/flexi_form.css" type="text/css">
<link rel="stylesheet" href="_css/bootstrap-responsive.css" type="text/css">
<style>
body {width:auto;background:#ccc;font-family:Arial,sans-serif;font-size:14px;}
.page {max-width:684px;min-width:224px;width:auto;margin:0 auto;}
.top {margin-bottom:0.5em;font-size:1.5em;}
.banner {background:white;border-radius:0.5em 0.5em 0 0;overflow:hidden;}
#rfgLogo {border:0;max-width:100%;height:auto;width:auto;}
.topMenu {background:black;color:white;padding:0.5em;}
.topMenu ul {margin:0;padding:0;text-align:left;}
.topMenu li {display:inline-block;margin:0;padding:0.2em;}
.topMenu li {font-family:Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-weight:normal;}
.topMenu a {color:white;text-decoration:none;}
.subTopMenu {background:#d63641;color:black;padding:0.5em 2em;;border-radius:0 0 0.5em 0.5em;text-align:right;}
.subTopMenu span {padding-left:0.125em;padding-right:0.125em;}
.subTopMenu span:hover {cursor:pointer;}
.AMinus {font-size:100%;}
.ANormal {font-size:125%;}
.APlus {font-size:150%;}
.flexicontent {background:white;border-radius:1em;}
.sample {padding:0.5em;}
.sample > h1 {text-align:left;color:#d63641;font-size:1.2em;border-top:1px solid #ccc;padding-top:1em;}
.sample:first-child > h1 {border:0;padding-top:0;}
.back {text-align:center;padding:0.5em;}
.back a {color:black;}
span.row {float:none !important;margin:0 !important;}
/*.page {overflow:hidden;}*/ /* to test duplicate canvas bug */
</style>
<title><?php print $title;?></title>
</head>
<body id="main">
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="page">
<div class="top">
<div class="banner"><a href="http://rfg.jeudego.org"><img id="rfgLogo" src="s5_logo.png"></a></div>
<div class="topMenu">
<ul>
<?php
$Basic=1;
$Comment=1;
$Diagram=1;
$Game=1;
$Lesson=1;
$Loop=1;
$Problem=1;
$Replay=1;
$Tree=1;
?>
<?php if (isset($Basic)&&$Basic) {?><li><a href="#basic">Basic</a></li><?php }?>
<?php if (isset($Comment)&&$Comment) {?><li><a href="#comment">Comment</a></li><?php }?>
<?php if (isset($Diagram)&&$Diagram) {?><li><a href="#diagram">Diagram</a></li><?php }?>
<?php if (isset($Game)&&$Game) {?><li><a href="#game">Game</a></li><?php }?>
<?php if (isset($Lesson)&&$Lesson) {?><li><a href="#lesson">Lesson</a></li><?php }?>
<?php if (isset($Loop)&&$Loop) {?><li><a href="#loop">Loop</a></li><?php }?>
<?php if (isset($Problem)&&$Problem) {?><li><a href="#problem">Problem</a></li><?php }?>
<?php if (isset($Replay)&&$Replay) {?><li><a href="#replay">Replay</a></li><?php }?>
<?php if (isset($Tree)&&$Tree) {?><li><a href="#tree">Tree</a></li><?php }?>
</ul>
</div>
<div class="subTopMenu">
<span class="AMinus" onclick="document.getElementById('main').style.fontSize='12px';">A</span>
<span class="ANormal" onclick="document.getElementById('main').style.fontSize='14px';">A</span>
<span class="APlus" onclick="document.getElementById('main').style.fontSize='16px';">A</span>
</div>
</div> <!-- top -->
<div class="flexicontent" id="flexicontent">
<?php if (isset($Basic)&&$Basic) {?>
<div class="sample" id="basic">
<h1>Basic</h1>
<script data-maxigos-sgf="<?php print "../_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf";?>" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/rfg/_cfg/basic.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($Comment)&&$Comment) {?>
<div class="sample" id="comment">
<h1>Comment</h1>
<script data-maxigos-sgf="<?php print "../_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf";?>" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/rfg/_cfg/comment.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($Diagram)&&$Diagram) {?>
<div class="sample" id="diagram">
<h1>Diagram</h1>
<script data-maxigos-sgf="<?php print "../_sgf/game/Hon-1941-1.sgf";?>" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/rfg/_cfg/diagram.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($Game)&&$Game) {?>
<div class="sample" id="game">
<h1>Game</h1>
<script data-maxigos-sgf="<?php print "../_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf";?>" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/rfg/_cfg/game.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($Lesson)&&$Lesson) {?>
<div class="sample" id="lesson">
<h1>Lesson</h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf");?>&amp;cfg=<?php print urlencode("../_sample/rfg/_cfg/lesson.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($Loop)&&$Loop) {?>
<div class="sample" id="loop">
<h1>Loop</h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/game/longuest.sgf");?>&amp;cfg=<?php print urlencode("../_sample/rfg/_cfg/loop.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($Problem)&&$Problem) {?>
<div class="sample" id="problem">
<h1>Problem</h1>
<script data-maxigos-sgf="<?php print "../_sgf/problem/p3-".(in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en").".sgf";?>" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/rfg/_cfg/problem.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($Replay)&&$Replay) {?>
<div class="sample" id="replay">
<h1>Replay</h1>
<script data-maxigos-sgf="<?php print "../_sgf/game/blood-vomit-".(in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en").".sgf";?>" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/rfg/_cfg/replay.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php if (isset($Tree)&&$Tree) {?>
<div class="sample" id="tree">
<h1>Tree</h1>
<script data-maxigos-sgf="<?php print "../_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf";?>" src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;cfg=<?php print urlencode("../_sample/rfg/_cfg/tree.cfg");?>"></script>
</div>
<div class="back"><a href="#"><?php print $backLabel;?></a></div>
<?php }?>
<?php include "../_php/size.php";?>
</div> <!-- flexicontent -->
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</div> <!-- page -->
</body>
</html>
