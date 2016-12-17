<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php include "../_php/date.php";?>
<?php
if ($mxL=="fr")
{
	$subtitle="BBCode";
	$title="Exemple d'utilisation de maxiGos : ".$subtitle;
}
else
{
	$subtitle="BBCode";
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
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>

<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div id="content" class="content">
<?php print "<h1>".ucFirst($subtitle)."</h1>";?>
<?php
switch($mxL)
{
	case "fr":$x=2;break;
	case "ja":$x=3;break;
	case "zh":$x=4;break;
	case "zh-tw":$x=5;break;
	default:$x=1;
}
switch($mxL)
{
	case "fr":$y=2;break;
	default:$y=1;
}
?>
<h2>Basic (default)</h2>
[sgf]
../forum/download/file.php?id=121
[/sgf]
<h2>Comment</h2>
[sgf=comment]
../forum/download/file.php?id=16<?php echo $y;?>
[/sgf]
<h2>Diagram</h2>
[sgf=diagram]
../forum/download/file.php?id=131
[/sgf]
<h2>Game</h2>
[sgf=game]
../forum/download/file.php?id=11<?php echo $x;?>
[/sgf]
<h2>Problem</h2>
[sgf=problem]
../forum/download/file.php?id=43<?php echo $x;?>
[/sgf]
<h2>Tree</h2>
[sgf=tree]
../forum/download/file.php?id=16<?php echo $y;?>
[/sgf]
</div><!-- content end -->
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<script>
(function(mxL)
{
	// replace [sgf={identifier}]{url}[/sgf]
	// by <div data-maxigos-l="xy" data-maxigos-source-filter="r" data-maxigos={identifier}>{url}</div>
	// where {identifier} is the name of a maxiGos configuration such as "basic", "comment", ...
	// where {url} is an url which gets sgf files such as "../forum/download/file.php?id=123"
	// where "xy" is a language code such as "en", "fr", "ja", ...
	// where "r" is a regex which matches {url}
	var e,f,p,q,r;
	// adapt the line below to get the html element which encloses your content
	e=document.getElementsByClassName("content")[0];
	r=new RegExp("\\[sgf(=(basic|comment|diagram|game|problem|tree))?\\]([\\s\\S]+?)\\[\\/sgf\\]","g");
	// adapt the lines below to match your url which gets sgf files
	f="\\.\\./forum/download/file\\.php";
	q="((mode|sid)=[a-zA-Z0-9_-]+&(amp;)?)*";
	q+="id=[0-9]+";
	q+="(&(amp;)?(mode|sid)=[a-zA-Z0-9_-]+)*";
	p="<div data-maxigos-l=\""+mxL+"\" data-maxigos-source-filter=\"^"+f+"\\?"+q+"$\" data-maxigos=\"$2\">$3</div>";
	e.innerHTML=e.innerHTML.replace(r,p);
})("<?php echo $mxL;?>"); // replace the parameter by a language code such as "en", "fr", "ja", ...
</script>
<?php if (($mxL!="fr")&&($mxL!="en")) {?>
<!-- need to insert the script below only if the language is not english and not french -->
<script src="../../_i18n/mgos-i18n-<?php print $mxL;?>.js"></script>
<?php }?>
<script src="../../_mgos/mgosLoader.js"></script>
</body>
</html>
