<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php include "../_php/date.php";?>
<?php
if ($mxL=="fr")
{
	$subtitle="personnalisations variées de lecteurs autonomes";
	$title="Exemple d'utilisation de maxiGos : ".$subtitle;
}
else
{
	$subtitle="various customizations of stand-alone players";
	$title="Sample for maxiGos: ".$subtitle;
}
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {background:#ccc;}
.content {text-align:justify;max-width:49em;margin:0.5em auto;background:#fff;border-radius:0.5em;}
h1 {font-size:1.2em;text-align:center;padding:0.25em;}
h2:before {content: counter(h2counter) ". ";}
h2 {font-size:1em;counter-increment: h2counter;counter-reset: h3counter;padding:0.25em;}
@media (max-width:50em) {.content {border-radius:0;}}
</style>
<style>
/* style for sample #1 */
<?php $nt=1;?>
div.mxGlobalBoxDiv.mxProblemGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxInnerGobanDiv
{
	box-shadow:-4px 4px 12px rgba(0,0,0,0.1),4px 4px 12px rgba(0,0,0,0.1);
}
div.mxGlobalBoxDiv.mxProblemGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxGobanDiv canvas
{
	font-size:1.25em;
}
</style>
<style>
/* style for sample #2 */
<?php $nt=2;?>
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxNavigationDiv button div:before,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxNavigationDiv button div:after
{
	border-color:transparent #a52a2a;
}
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) input[type=text],
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowOptionDiv,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowSgfDiv,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxOKDiv button,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxCommentDiv,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxButtonsBoxDiv button
{
	color:#a52a2a;
	border:1px solid #a52a2a;
	background:#fff;
}
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowOptionDiv {text-align:left;}
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowOptionDiv input[type=checkbox]:checked,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowOptionDiv input[type=checkbox]:not(:checked)
{
	visibility:hidden;
}
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowOptionDiv input[type=checkbox]:checked+label,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowOptionDiv input[type=checkbox]:not(:checked)+label
{
	color:#a52a2a;
	position:relative;
	margin-left:-1.5em;
	vertical-align:middle;
}
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowOptionDiv input[type=checkbox]:checked+label::before,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowOptionDiv input[type=checkbox]:not(:checked)+label::before
{
	font-family:Arial,sans-serif;
	font-size:1em;
	display:inline-block;
	margin-right:0.5em;
	width:1em;
	height:1em;
	line-height:1em;
	color:#a52a2a;
	border:1px solid #a52a2a;
	border-radius:0.25em;
	background-color:#fff;
	text-align:center;
	vertical-align:middle;
}
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowOptionDiv input[type=checkbox]:checked+label::before
{
	content:"✔";
}
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowOptionDiv input[type=checkbox]:not(:checked)+label::before
{
	content:"";
}
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxOKDiv
{
	font-family:Arial,sans-serif;
	background-color:#f7ecec;
	border-top:1px solid #a52a2a;
}
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxNavigationDiv button[disabled]
{
	opacity:0.5;
}
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxNavigationDiv button:focus,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxOKDiv button:focus,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) input[type=text]:focus,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowOptionDiv input[type=checkbox]:checked:focus+label::before,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowOptionDiv input[type=checkbox]:not(:checked):focus+label::before,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxShowOptionDiv input[type=text]:focus,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxButtonsBoxDiv button:focus,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxCommentDiv:focus
{
	background-color:#f7ecec;
}
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxCommentDiv
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) button,
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) input {outline:none;}
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) button::-moz-focus-inner {padding:0;border:0;}
div.mxGlobalBoxDiv.mxCommentGlobalBoxDiv:nth-of-type(<?php echo $nt;?>) div.mxVersionDiv {color:#a52a2a;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div id="content" class="content">
<?php print "<h1>".ucFirst($subtitle)."</h1>";?>
<h2>maxigos-minimalist-problem.js</h2>
<script src="../minimalist/_alone/maxigos-minimalist-problem.js"
		data-maxigos-l="<?php echo $mxL;?>"
		data-maxigos-in3d-on="1"
		data-maxigos-goban-bk="#fcba54">
<?php echo "../_sgf/problem/p3-".(($mxL=="fr")?"fr":"en").".sgf";?>
</script>
<h2>maxigos-neo-classic-comment.js</h2>
<script src="../neo-classic/_alone/maxigos-neo-classic-comment.js"
		data-maxigos-l="<?php echo $mxL;?>"
		data-maxigos-in3d-on="0"
		data-maxigos-goban-bk="#a52a2a"
		data-maxigos-line-color="#fff"
		data-maxigos-variation-color="#fff"
		data-maxigos-variation-on-focus-color="#fff"
		data-maxigos-variation-on-focus-stroke-bk="#fff"
		data-maxigos-focus-color="#fff"
		data-maxigos-hide-in3d-on="0">
<?php echo "../_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf";?>
</script>
</div><!-- content end -->
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
