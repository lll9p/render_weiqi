<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
$in3dOn=1;
if ($mxL=="fr")
{
	$subtitle="mgosLoader.js";
	$title="Exemple d'utilisation de maxiGos : ".$subtitle;
	$title2="mgosLoader.js";
}
else if ($mxL=="ja")
{
	$subtitle="mgosLoader.js";
	$title="MaxiGos例・".$subtitle;
	$title2="mgosLoader.js";
}
else if ($mxL=="zh")
{
	$subtitle="mgosLoader.js";
	$title="MaxiGos例子-".$subtitle;
	$title2="mgosLoader.js";
}
else if ($mxL=="zh-tw")
{
	$subtitle="mgosLoader.js";
	$title="MaxiGos例子-".$subtitle;
	$title2="mgosLoader.js";
}
else
{
	$subtitle="mgosLoader.js";
	$title="Sample for maxiGos: ".$subtitle;
	$title2="mgosLoader.js";
}
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {background:#ccc;}
.content {text-align:justify;max-width:55em;margin:0.5em auto;background:#fff;border-radius:0.5em;}
h1 {font-size:1.2em;text-align:center;padding:0.25em;}
h2:before {content: counter(h2counter) ". ";}
h2 {font-size:1em;counter-increment: h2counter;counter-reset: h3counter;padding:0.25em;}
@media (max-width:48em) {.content {border-radius:0;}}
.content > div {padding:0.5em 0;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div id="content" class="content">
<h1><?php print $title2;?> (<?php print $mxL;?>)</h1>
<div data-maxigos-l="<?php print $mxL;?>" data-maxigos-in3d-on="<?php print $in3dOn;?>" data-maxigos="basic">
../_sgf/game/Hon-1941-1.sgf
</div>
<hr>
<div data-maxigos-l="<?php print $mxL;?>" data-maxigos-in3d-on="<?php print $in3dOn;?>" data-maxigos="comment">
../_sgf/game/mn-bdg-<?php print ($mxL=="fr")?"fr":"en";?>.sgf
</div>
<hr>
<div data-maxigos-l="<?php print $mxL;?>" data-maxigos-in3d-on="<?php print $in3dOn;?>" data-maxigos="diagram">
../_sgf/game/longuest.sgf
</div>
<hr>
<div data-maxigos-l="<?php print $mxL;?>" data-maxigos-in3d-on="<?php print $in3dOn;?>" data-maxigos="game">
../_sgf/game/Mingren-001-1F-1-<?php print $mxL;?>.sgf
</div>
<hr>
<div data-maxigos-l="<?php print $mxL;?>" data-maxigos-in3d-on="<?php print $in3dOn;?>" data-maxigos="problem">
<?php if ($mxL=="fr") {?>
(;
FF[4]CA[UTF-8]GM[1]VW[aa:lh]SZ[19]ST[2]EV[N° 1 .|. Niveau 2]
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
<?php } else if ($mxL=="zh") {?>
(;
FF[4]CA[UTF-8]GM[1]VW[aa:lh]SZ[19]ST[2]EV[第一题《中级》]
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
<?php } else if ($mxL=="ja") {?>
(;
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
<?php } else {?>
(;
FF[4]CA[UTF-8]GM[1]VW[aa:lh]SZ[19]ST[2]EV[N° 1 .|. Level #2]
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
</div>
<hr>
<div data-maxigos-l="<?php print $mxL;?>" data-maxigos-in3d-on="<?php print $in3dOn;?>" data-maxigos="tree">
../_sgf/game/mn-bdg-<?php print ($mxL=="fr")?"fr":"en";?>.sgf
</div>
</div><!-- content end -->
<?php if (($mxL!="fr")&&($mxL!="en")) {?>
<script src="../../_i18n/mgos-i18n-<?php print $mxL;?>.js"></script>
<?php }?>
<script src="../../_mgos/mgosLoader.js"></script>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
