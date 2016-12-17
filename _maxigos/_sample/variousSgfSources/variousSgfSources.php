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
	$subtitle="méthodes variées pour inclure du sgf";
	$title="Exemple d'utilisation de maxiGos : ".$subtitle;
}
else
{
	$subtitle="various ways to include sgf";
	$title="Sample for maxiGos: ".$subtitle;
}
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {background:#ccc;}
.content {text-align:justify;max-width:48em;margin:0.5em auto;background:#fff;border-radius:0.5em;}
h1 {font-size:1.2em;text-align:center;padding:0.25em;}
h2:before {content:counter(h2counter) ". ";}
h2 {font-size:1em;counter-increment:h2counter;counter-reset:h3counter;padding:0.25em;}
@media (max-width:48em) {.content {border-radius:0;}}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>

<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div id="content" class="content">
<?php print "<h1>".ucFirst($subtitle)."</h1>";?>


<?php if ($mxL=="fr") {?><h2>Sgf provenant d'un fichier dont le nom est la valeur du paramètre "sgf" de l'url du lanceur</h2><?php }?>
<?php if ($mxL=="en") {?><h2>Sgf from file which name is the value of "sgf" parameter in the launcher url</h2><?php }?>

<script src="../../_mgos/sgfplayer.php?sgf=<?php print urlencode("../_sample/_sgf/problem/p3-".$mxL.".sgf");?>&amp;cfg=<?php print urlencode("../_sample/neo-classic/_cfg/problem.cfg");?>&amp;mxL=<?php print $mxL;?>">
</script>
<hr>


<?php if ($mxL=="fr") {?><h2>Sgf comme valeur du paramètre "sgf" de l'url du lanceur</h2><?php }?>
<?php if ($mxL=="en") {?><h2>Sgf as value of "sgf" parameter in the launcher url</h2><?php }?>

<?php if ($mxL=="fr") {?>
<script src="../../_mgos/sgfplayer.php?sgf=<?php print urlencode("(;FF[4]GM[1]SZ[19]VW[ah:ls]AB[cp]ST[2]FG[1];W[ep];B[eq];W[fq];B[dq];W[fp];B[cn];W[jp]LB[hp:A][hq:B])");?>&amp;cfg=<?php print urlencode("../_sample/neo-classic/_cfg/diagram.cfg");?>&amp;mxL=<?php print $mxL;?>"></script>
<?php } else if ($mxL=="ja") {?>
<script src="../../_mgos/sgfplayer.php?sgf=<?php print urlencode("(;FF[4]GM[1]SZ[19]VW[ah:ls]AB[cp]ST[2]FG[1];W[ep];B[eq];W[fq];B[dq];W[fp];B[cn];W[jp]LB[hp:あ][hq:い])");?>&amp;cfg=<?php print urlencode("../_sample/neo-classic/_cfg/diagram.cfg");?>&amp;mxL=<?php print $mxL;?>"></script>
<?php } else {?>
<script src="../../_mgos/sgfplayer.php?sgf=<?php print urlencode("(;FF[4]GM[1]SZ[19]VW[ah:ls]AB[cp]ST[2]FG[1];W[ep];B[eq];W[fq];B[dq];W[fp];B[cn];W[jp]LB[hp:A][hq:B])");?>&amp;cfg=<?php print urlencode("../_sample/neo-classic/_cfg/diagram.cfg");?>&amp;mxL=<?php print $mxL;?>"></script>
<?php }?>
<hr>

<?php if ($mxL=="fr") {?><h2>Sgf provenant d'un fichier dont le nom est inséré dans la balise "script"</h2><?php }?>
<?php if ($mxL=="en") {?><h2>Sgf from file which name is included in "script" tag</h2><?php }?>

<script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/neo-classic/_cfg/problem.cfg");?>&amp;mxL=<?php print $mxL;?>">
<?php print "../_sgf/problem/p3-".$mxL.".sgf";?>
</script>
<hr>

<?php if ($mxL=="fr") {?><h2>Sgf inséré dans la balise "script"</h2><?php }?>
<?php if ($mxL=="en") {?><h2>Sgf included in "script" tag </h2><?php }?>

<script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/neo-classic/_cfg/problem.cfg");?>&amp;mxL=<?php print $mxL;?>">
<?php if ($mxL=="fr") {?>
(;FF[4]GM[1]VW[aa:lh]SZ[19]ST[2]EV[N° 1 .|. Niveau 2]
AB[bb][cb][db][fb]AW[ea][eb][bc][cc][dc]C[À Noir de jouer]FG[1]
	(;B[ec];W[fc];B[ed];W[gb]
		(;B[fd];W[gc]
			(;B[ab];W[ba]
				(;B[bd];W[cd];B[ce];W[be]
					(;B[dd];W[ad];B[ac]C[Correct !])
					(;B[ac];W[ad];B[dd]C[Correct !])
				)
				(;B[ce];W[ac]C[Raté !])
			)
			(;B[da];W[fa];B[ab];W[ba]C[Raté !])
		)
		(;B[ab];W[ba];B[fd];W[gc]
			(;B[bd];W[cd];B[ce];W[be]
				(;B[dd];W[ad];B[ac]C[Correct !])
				(;B[ac];W[ad];B[dd]C[Correct !])
			)
			(;B[ce];W[ac]C[Raté !])
		)
		(;B[da];W[fa];B[ab];W[ba]C[Raté !])
	)
	(;B[da];W[fc];B[ab];W[ba]C[Raté !])
)
<?php } else if ($mxL=="ja") {?>
(;FF[4]CA[UTF-8]GM[1]VW[aa:lh]SZ[19]ST[2]EV[第一題《中級》]
AB[bb][cb][db][fb]AW[ea][eb][bc][cc][dc]C[黒先]FG[1]
	(;B[ec];W[fc];B[ed];W[gb]
		(;B[fd];W[gc]
			(;B[ab];W[ba]
				(;B[bd];W[cd];B[ce];W[be]
					(;B[dd];W[ad];B[ac]C[正解])
					(;B[ac];W[ad];B[dd]C[正解])
				)
				(;B[ce];W[ac]C[失敗])
			)
			(;B[da];W[fa];B[ab];W[ba]C[失敗])
		)
		(;B[ab];W[ba];B[fd];W[gc]
			(;B[bd];W[cd];B[ce];W[be]
				(;B[dd];W[ad];B[ac]C[正解])
				(;B[ac];W[ad];B[dd]C[正解])
			)
			(;B[ce];W[ac]C[失敗])
		)
		(;B[da];W[fa];B[ab];W[ba]C[失敗])
	)
	(;B[da];W[fc];B[ab];W[ba]C[失敗])
)
<?php } else if ($mxL=="zh") {?>
(;FF[4]CA[UTF-8]GM[1]VW[aa:lh]SZ[19]ST[2]EV[第一题《中级》]
AB[bb][cb][db][fb]AW[ea][eb][bc][cc][dc]C[黑先]FG[1]
	(;B[ec];W[fc];B[ed];W[gb]
		(;B[fd];W[gc]
			(;B[ab];W[ba]
				(;B[bd];W[cd];B[ce];W[be]
					(;B[dd];W[ad];B[ac]C[正解])
					(;B[ac];W[ad];B[dd]C[正解])
				)
				(;B[ce];W[ac]C[失败])
			)
			(;B[da];W[fa];B[ab];W[ba]C[失败])
		)
		(;B[ab];W[ba];B[fd];W[gc]
			(;B[bd];W[cd];B[ce];W[be]
				(;B[dd];W[ad];B[ac]C[正解])
				(;B[ac];W[ad];B[dd]C[正解])
			)
			(;B[ce];W[ac]C[失败])
		)
		(;B[da];W[fa];B[ab];W[ba]C[失败])
	)
	(;B[da];W[fc];B[ab];W[ba]C[失败])
)
<?php } else if ($mxL=="zh-tw") {?>
(;FF[4]CA[UTF-8]GM[1]VW[aa:lh]SZ[19]ST[2]EV[第一題《中級》]
AB[bb][cb][db][fb]AW[ea][eb][bc][cc][dc]C[黑先]FG[1]
	(;B[ec];W[fc];B[ed];W[gb]
		(;B[fd];W[gc]
			(;B[ab];W[ba]
				(;B[bd];W[cd];B[ce];W[be]
					(;B[dd];W[ad];B[ac]C[正解])
					(;B[ac];W[ad];B[dd]C[正解])
				)
				(;B[ce];W[ac]C[失敗])
			)
			(;B[da];W[fa];B[ab];W[ba]C[失敗])
		)
		(;B[ab];W[ba];B[fd];W[gc]
			(;B[bd];W[cd];B[ce];W[be]
				(;B[dd];W[ad];B[ac]C[正解])
				(;B[ac];W[ad];B[dd]C[正解])
			)
			(;B[ce];W[ac]C[失敗])
		)
		(;B[da];W[fa];B[ab];W[ba]C[失敗])
	)
	(;B[da];W[fc];B[ab];W[ba]C[失敗])
)
<?php } else {?>
(;
FF[4]GM[1]VW[aa:lh]SZ[19]ST[2]EV[N° 1 .|. Level #2]
AB[bb][cb][db][fb]AW[ea][eb][bc][cc][dc]C[Black to play]FG[1]
	(;B[ec];W[fc];B[ed];W[gb]
		(;B[fd];W[gc]
			(;B[ab];W[ba]
				(;B[bd];W[cd];B[ce];W[be]
					(;B[dd];W[ad];B[ac]C[Correct!])
					(;B[ac];W[ad];B[dd]C[Correct!])
				)
				(;B[ce];W[ac]C[Fail!])
			)
			(;B[da];W[fa];B[ab];W[ba]C[Fail!])
		)
		(;B[ab];W[ba];B[fd];W[gc]
			(;B[bd];W[cd];B[ce];W[be]
				(;B[dd];W[ad];B[ac]C[Correct!])
				(;B[ac];W[ad];B[dd]C[Correct!])
			)
			(;B[ce];W[ac]C[Fail!])
		)
		(;B[da];W[fa];B[ab];W[ba]C[Fail!])
	)
	(;B[da];W[fc];B[ab];W[ba]C[Fail!])
)
<?php }?>
</script>
<hr>

<?php if ($mxL=="fr") {?><h2>Sgf provenant d'un fichier dont le nom est la valeur de l'attribut "data-maxigos-sgf" de la balise "script"</h2><?php }?>
<?php if ($mxL=="en") {?><h2>Sgf from file which name is the value of "data-maxigos-sgf" attribute of "script" tag</h2><?php }?>

<script data-maxigos-sgf="<?php print "../_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf";?>" src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/neo-classic/_cfg/comment.cfg");?>&amp;mxL=<?php print $mxL;?>">
</script>
<hr>


<?php if ($mxL=="fr") {?><h2>Sgf comme valeur de l'attribut "data-maxigos-sgf" de la balise "script"</h2><?php }?>
<?php if ($mxL=="en") {?><h2>Sgf as value of "data-maxigos-sgf" attribute of "script" tag</h2><?php }?>

<script data-maxigos-sgf="(;FF[4]GM[1]SZ[19]VW[ah:ls]AB[cp]ST[2]FG[1];W[ep];B[eq];W[fq];B[dq];W[fp];B[cn];W[jp]LB[hp:あ][hq:い])" src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/neo-classic/_cfg/diagram.cfg");?>&amp;mxL=<?php print $mxL;?>">
</script>
<hr>


<?php if ($mxL=="fr") {?><h2>Sgf provenant d'un fichier dont le nom est inséré dans une balise HTML dont l'id est indiqué comme valeur du paramètre "plc" dans l'url du lanceur</h2><?php }?>
<?php if ($mxL=="en") {?><h2>Sgf from file which name is included in a HTML tag which id is specified as "plc" parameter value in the launcher url</h2><?php }?>
<div id="sgfDiv2">
<?php print "../_sgf/game/mn-bdg-".(($mxL=="fr")?"fr":"en").".sgf";?>
</div>
<script src="../../_mgos/sgfplayer.php?plc=sgfDiv2&amp;cfg=<?php print urlencode("../_sample/neo-classic/_cfg/tree.cfg");?>&amp;mxL=<?php print $mxL;?>">
</script>
<hr>


<?php if ($mxL=="fr") {?><h2>Sgf provenant du contenu d'une balise HTML dont l'id est indiqué comme valeur du paramètre "plc" dans l'url du lanceur</h2><?php }?>
<?php if ($mxL=="en") {?><h2>Sgf from content of a HTML tag which id is specified as "plc" parameter value in launcher url</h2><?php }?>
<div id="sgfDiv1">
<?php if ($mxL=="fr") {?>(;
FF[4]GM[1]VW[aa:lh]SZ[19]ST[2]EV[N° 1 .|. Niveau 2]
AB[bb][cb][db][fb]AW[ea][eb][bc][cc][dc]C[À Noir de jouer]FG[1]
	(;B[ec];W[fc];B[ed];W[gb]
		(;B[fd];W[gc]
			(;B[ab];W[ba]
				(;B[bd];W[cd];B[ce];W[be]
					(;B[dd];W[ad];B[ac]C[Correct !])
					(;B[ac];W[ad];B[dd]C[Correct !])
				)
				(;B[ce];W[ac]C[Raté !])
			)
			(;B[da];W[fa];B[ab];W[ba]C[Raté !])
		)
		(;B[ab];W[ba];B[fd];W[gc]
			(;B[bd];W[cd];B[ce];W[be]
				(;B[dd];W[ad];B[ac]C[Correct !])
				(;B[ac];W[ad];B[dd]C[Correct !])
			)
			(;B[ce];W[ac]C[Raté !])
		)
		(;B[da];W[fa];B[ab];W[ba]C[Raté !])
	)
	(;B[da];W[fc];B[ab];W[ba]C[Raté !])
)
<?php } else if ($mxL=="ja") {?>(;
FF[4]CA[UTF-8]GM[1]VW[aa:lh]SZ[19]ST[2]EV[第一題《中級》]
AB[bb][cb][db][fb]AW[ea][eb][bc][cc][dc]C[黒先]FG[1]
	(;B[ec];W[fc];B[ed];W[gb]
		(;B[fd];W[gc]
			(;B[ab];W[ba]
				(;B[bd];W[cd];B[ce];W[be]
					(;B[dd];W[ad];B[ac]C[正解])
					(;B[ac];W[ad];B[dd]C[正解])
				)
				(;B[ce];W[ac]C[失敗])
			)
			(;B[da];W[fa];B[ab];W[ba]C[失敗])
		)
		(;B[ab];W[ba];B[fd];W[gc]
			(;B[bd];W[cd];B[ce];W[be]
				(;B[dd];W[ad];B[ac]C[正解])
				(;B[ac];W[ad];B[dd]C[正解])
			)
			(;B[ce];W[ac]C[失敗])
		)
		(;B[da];W[fa];B[ab];W[ba]C[失敗])
	)
	(;B[da];W[fc];B[ab];W[ba]C[失敗])
)
<?php } else if ($mxL=="zh") {?>
(;FF[4]CA[UTF-8]GM[1]VW[aa:lh]SZ[19]ST[2]EV[第一题《中级》]
AB[bb][cb][db][fb]AW[ea][eb][bc][cc][dc]C[黑先]FG[1]
	(;B[ec];W[fc];B[ed];W[gb]
		(;B[fd];W[gc]
			(;B[ab];W[ba]
				(;B[bd];W[cd];B[ce];W[be]
					(;B[dd];W[ad];B[ac]C[正解])
					(;B[ac];W[ad];B[dd]C[正解])
				)
				(;B[ce];W[ac]C[失败])
			)
			(;B[da];W[fa];B[ab];W[ba]C[失败])
		)
		(;B[ab];W[ba];B[fd];W[gc]
			(;B[bd];W[cd];B[ce];W[be]
				(;B[dd];W[ad];B[ac]C[正解])
				(;B[ac];W[ad];B[dd]C[正解])
			)
			(;B[ce];W[ac]C[失败])
		)
		(;B[da];W[fa];B[ab];W[ba]C[失败])
	)
	(;B[da];W[fc];B[ab];W[ba]C[失败])
)
<?php } else if ($mxL=="zh-tw") {?>
(;FF[4]CA[UTF-8]GM[1]VW[aa:lh]SZ[19]ST[2]EV[第一题《中级》]
AB[bb][cb][db][fb]AW[ea][eb][bc][cc][dc]C[黑先]FG[1]
	(;B[ec];W[fc];B[ed];W[gb]
		(;B[fd];W[gc]
			(;B[ab];W[ba]
				(;B[bd];W[cd];B[ce];W[be]
					(;B[dd];W[ad];B[ac]C[正解])
					(;B[ac];W[ad];B[dd]C[正解])
				)
				(;B[ce];W[ac]C[失败])
			)
			(;B[da];W[fa];B[ab];W[ba]C[失败])
		)
		(;B[ab];W[ba];B[fd];W[gc]
			(;B[bd];W[cd];B[ce];W[be]
				(;B[dd];W[ad];B[ac]C[正解])
				(;B[ac];W[ad];B[dd]C[正解])
			)
			(;B[ce];W[ac]C[失败])
		)
		(;B[da];W[fa];B[ab];W[ba]C[失败])
	)
	(;B[da];W[fc];B[ab];W[ba]C[失败])
)
<?php } else {?>(;
FF[4]GM[1]VW[aa:lh]SZ[19]ST[2]EV[N° 1 .|. Level #2]
AB[bb][cb][db][fb]AW[ea][eb][bc][cc][dc]C[Black to play]FG[1]
	(;B[ec];W[fc];B[ed];W[gb]
		(;B[fd];W[gc]
			(;B[ab];W[ba]
				(;B[bd];W[cd];B[ce];W[be]
					(;B[dd];W[ad];B[ac]C[Correct!])
					(;B[ac];W[ad];B[dd]C[Correct!])
				)
				(;B[ce];W[ac]C[Fail!])
			)
			(;B[da];W[fa];B[ab];W[ba]C[Fail!])
		)
		(;B[ab];W[ba];B[fd];W[gc]
			(;B[bd];W[cd];B[ce];W[be]
				(;B[dd];W[ad];B[ac]C[Correct!])
				(;B[ac];W[ad];B[dd]C[Correct!])
			)
			(;B[ce];W[ac]C[Fail!])
		)
		(;B[da];W[fa];B[ab];W[ba]C[Fail!])
	)
	(;B[da];W[fc];B[ab];W[ba]C[Fail!])
)<?php }?>
</div>
<script src="../../_mgos/sgfplayer.php?plc=sgfDiv1&amp;cfg=<?php print urlencode("../_sample/neo-classic/_cfg/problem.cfg");?>&amp;mxL=<?php print $mxL;?>">
</script>
<hr>


<?php if ($mxL=="fr") {?><h2>Sgf provenant d'un fichier lu en php et inséré dans la balise "script"</h2><?php }?>
<?php if ($mxL=="en") {?><h2>Sgf from file read by php and included in "script" tag</h2><?php }?>

<script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/neo-classic/_cfg/problem.cfg");?>&amp;mxL=<?php print $mxL;?>">
<?php
function sgf_file_get_contents($f,$docCharset)
{
	$content=file_get_contents($f);
	if (preg_match("/CA\\[([^\\]]*)\\]/",$content,$m)) $charset=$m[1];else $charset="ISO-8859-1";
	if ($charset!=$docCharset) $content=mb_convert_encoding($content,$docCharset,$charset);
	return $content;
}
print sgf_file_get_contents("../_sgf/problem/p3-".$mxL.".sgf","UTF-8"); // replace "UTF-8" by current document charset if current document charset is not "UTF-8"
?>
</script>

</div><!-- content end -->
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
