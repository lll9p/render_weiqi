<?php
if (!isset($path2maxigos)) $path2maxigos="../";
function printLink4Alone($p,$s)
{
	global $mxL,$path2maxigos;
	$f=$s.".js";
	$q="../".$p."/".$f;
	print "<div>\n";
	if ($mxL=="fr") print "<a href=\"$path2maxigos$p/$f\" download=\"$f\">Télécharger</a> le lecteur autonome \"$f\"";
	else print "<a href=\"$path2maxigos$p/$f\" download=\"".$f."\">Download</a> \"$f\"";
	if ($mxL=="fr") print " (<a href=\"".$path2maxigos."_php/aloneViewer.php?mxL=".$mxL."&amp;s=".urlencode($q)."\">Voir un exemple</a> avec \"".$f."\")\n";
	else print " (<a href=\"".$path2maxigos."_php/aloneViewer.php?mxL=".$mxL."&amp;s=".urlencode($q)."\">See a sample</a> using \"".$f."\")\n";
	print "</div>\n";
}
print "<h3>".(($mxL=="fr")?"Style néo-classique":"Neo-classic style")."</h3>\n";
$alone=array("basic","comment","diagram","game","problem","tree");
foreach ($alone as $a)
{
	$p="_sample/neo-classic/_alone";
	$s="maxigos-neo-classic-".$a;
	printLink4Alone($p,$s);
}
print "<h3>".(($mxL=="fr")?"Style classique":"Classic style")."</h3>\n";
$alone=array("basic","comment","diagram","game","lesson","loop","problem","tree");
foreach ($alone as $a)
{
	$p="_sample/classic/_alone";
	$s="maxigos-classic-".$a;
	printLink4Alone($p,$s);
}
print "<h3>".(($mxL=="fr")?"Style tatami":"Tatami style")."</h3>\n";
$alone=array("basic","comment","diagram","game","problem","tree");
foreach ($alone as $a)
{
	$p="_sample/tatami/_alone";
	$s="maxigos-tatami-".$a;
	printLink4Alone($p,$s);
}
print "<h3>".(($mxL=="fr")?"Style rosewood":"Rosewood style")."</h3>\n";
$alone=array("basic","comment","diagram","game","problem","tree");
foreach ($alone as $a)
{
	$p="_sample/rosewood/_alone";
	$s="maxigos-rosewood-".$a;
	printLink4Alone($p,$s);
}
print "<h3>".(($mxL=="fr")?"Style minimaliste ":"Minimalist style ")."</h3>\n";
$alone=array("basic","comment","diagram","game","problem","tree");
foreach ($alone as $a)
{
	$p="_sample/minimalist/_alone";
	$s="maxigos-minimalist-$a";
	printLink4Alone($p,$s);
}
print "<h3>".(($mxL=="fr")?"Autres styles":"Other styles")."</h3>\n";
$alone=array("fm","kifu","tiger");
foreach ($alone as $a)
{
	$p="_sample/$a/_alone";
	printLink4Alone($p,$a);
}
?>
