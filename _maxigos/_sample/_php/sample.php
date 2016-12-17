<?php
function printSampleMenu()
{
	global $maxiGosDirPath,$mxL;
	$first="|&lt;";
	$pred="&lt;";
	$next="&gt;";
	$last="&gt;|";
	$q="?mxL=".((($mxL=="fr")||($mxL=="ja")||($mxL=="zh")||($mxL=="zh-tw"))?$mxL:"en");
	$sampleList=array
	(
		"_sample/neo-classic/neo-classic.php".$q,
		"_sample/classic/classic.php".$q,
		"_sample/tatami/tatami.php".$q,
		"_sample/rosewood/rosewood.php".$q,
		"_sample/minimalist/minimalist.php".$q,
		"_sample/edit/edit.php".$q,
		"_sample/kifu/kifu.php".$q,
		"_sample/texture/texture.php".$q,
		"_sample/tactigo/tactigo.php".$q,
		"_sample/eidogo/eidogo.php".$q,
		"_sample/rfg/rfg.php".$q,
		"_sample/forum/forum.php".$q,
		"_sample/jdg/jdg.php".$q,
		"_sample/fm/fm.php".$q,
		"_sample/tsumego/tsumego.php".$q,
		"_sample/goinblackandwhite/goinblackandwhite.php".$q,
		"_sample/goinblackandwhite2/goinblackandwhite2.php".$q,
		"_sample/goproblems/goproblems.php".$q,
		"_sample/anime/anime.php".$q,
		"_sample/tiger/tiger.php".$q,
		"_sample/iroha/iroha.php".$q,
		"_sample/manuscript/manuscript.php".$q,
		"_sample/pink/pink.php".$q,
		"_sample/card/card.php".$q,
		"_sample/multiplayer/multiplayer.php".$q,
		"_sample/multilanguages/multilanguages.php".$q,
		"_sample/variousSgfSources/variousSgfSources.php".$q,
		"_sample/variousCustomizations/variousCustomizations.php".$q,
		"_sample/BBCode/BBCode.php".$q,
		"_sample/charset/charset.php".$q,
		"_sample/rules/rules.php".$q,
		"_sample/fancy/fancy.php".$q
	);
	$km=count($sampleList);
	$ko=0;
	$u=$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
	for ($k=0;$k<$km;$k++)
	{
		$m=explode("?",$sampleList[$k]);
		if (strstr($u,$m[0])!==false) {$ko=$k;break;}
	}
	for ($k=0;$k<$km;$k++)
	{
		$m=explode("?",$sampleList[$k]);
		$c=(strstr($u,$m[0])!==false)?" class=\"currentSample\"":"";
		print "<li".$c."><a href=\"".$maxiGosDirPath.$sampleList[$k]."\">".($k+1)."</a></li>\n";
	}
	print "<br>";
	print "<li><a href=\"".$maxiGosDirPath.$sampleList[($ko>0)?$ko-1:($km-1)]."\">".$pred."</a></li>\n";
	print "<li><a href=\"".$maxiGosDirPath.$sampleList[($ko<($km-1))?$ko+1:0]."\">".$next."</a></li>\n";
}
?>
<nav>
<div class="sampleContainer">
<ul class="sampleList">
<?php printSampleMenu();?>
</ul>
</div>
</nav>
