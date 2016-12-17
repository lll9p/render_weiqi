<!DOCTYPE html>
<html>
<?php $mxL=isset($_GET["mxL"])?$_GET["mxL"]:(isset($_POST["mxL"])?$_POST["mxL"]:"fr");?>
<head>
<meta http-equiv="content-type" content="text/html;charset=ISO-8859-1">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Règle du jeu de go</title>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
ul.sampleList li a {color:#000;}
ul.sampleList li.currentSample a {color:#009;}
ul.sampleList li a:hover,
ul.sampleList li.currentSample a:hover {color:#900;}
</style>
</head>
<body>
<?php $maxiGosDirPath="../../";include "../_php/sample.php";?>
<h1>R&egrave;gle du jeu de go</h1>

<div class="content">
<h2>D&eacute;roulement du jeu</h2>
<p>
Le go se joue &agrave; deux sur une <span class="definition">grille</span> de 19x19 lignes, 
&agrave; l'aide de <span class="definition">pierres</span> noires pour l'un des joueurs, blanches pour l'autre, en nombre illimit&eacute;. 
Parfois, des grilles plus petites sont utilis&eacute;es, en particulier pour l'initiation.
</p>
<p class="important">
Celui qui commence joue avec les pierres noires. A tour de r&ocirc;le, les joueurs
posent une pierre de leur couleur sur une intersection inoccup&eacute;e de la grille 
ou bien ils passent (essentiellement pour indiquer qu'ils pensent la partie termin&eacute;e).
</p>

<h2>Libert&eacute;s</h2>
<p>
Des intersections sont <span class="definition">voisines</span> si elles sont reli&eacute;es par une ligne de la grille et sans autre intersection entre elles. 
Les <span class="definition">libert&eacute;s</span> d'une pierre sont les intersections inoccup&eacute;es voisines de l'intersection sur laquelle est cette pierre. 
Des pierres de m&ecirc;me couleur sont <span class="definition">connect&eacute;es</span> si elles sont sur des intersections voisines. Elles mettent alors leurs libert&eacute;s en commun.
</p>

<table class="diagramCard"><tr>
<td class="diagram"><script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rules/rules.cfg");?>">../_sgf/regleGo/voisines.sgf</script></td>
<td><p class="diagramText"><p>'A' et 'B' sont voisines, mais 'B' et 'C' ne le sont pas.</p></td>
</tr></table>

<table class="diagramCard"><tr>
<td class="diagram"><script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rules/rules.cfg");?>">../_sgf/regleGo/libertes.sgf</script></td>
<td><p class="diagramText">La pierre marqu&eacute;e d'un triangle a quatre libert&eacute;s ('A', 'B', 'C' et 'D'), 
celle marqu&eacute;e d'un carr&eacute; trois ('E', 'F' et 'G') 
et celle marqu&eacute;e d'une croix deux ('H' et 'I').</p></td>
</tr></table>

<table class="diagramCard"><tr>
<td class="diagram"><script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rules/rules.cfg");?>">../_sgf/regleGo/connexion.sgf</script></td>
<td><p class="diagramText">Les quatre pierres blanches marqu&eacute;es d'une croix sont connect&eacute;es 
et ont cinq libert&eacute;s ('A', 'B', 'C', 'D', et 'E').</p></td>
</tr></table>

<h2>Capture</h2>
<p class="important">
Si un joueur supprime la derni&egrave;re libert&eacute; de
pierres adverses, il les capture en les retirant de la grille. 
De plus, il ne doit pas supprimer la derni&egrave;re libert&eacute; de ses propres pierres, 
sauf s'il capture au moins une pierre adverse.
</p>

<table class="diagramCard"><tr>
<td class="diagram"><script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rules/rules.cfg");?>">../_sgf/regleGo/priseSimpleD.sgf</script></td>
<td><p class="diagramText">Si Noir joue en 'A', il supprime la derni&egrave;re libert&eacute; des pierres blanches marqu&eacute;es d'une croix...</p></td>
</tr></table>

<!-- 1/3 -->

<table class="diagramCard"><tr>
<td class="diagram"><script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rules/rules.cfg");?>">../_sgf/regleGo/priseSimpleF.sgf</script></td>
<td><p class="diagramText">...alors Noir, apr&egrave;s avoir pos&eacute; la pierre 1, capture ces pierres blanches en les retirant de la grille.</p></td>
</tr></table>

<table class="diagramCard"><tr>
<td class="diagram"><script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rules/rules.cfg");?>">../_sgf/regleGo/priseSansLibD.sgf</script></td>
<td><p class="diagramText">Si Noir joue en 'A', il n'a pas de libert&eacute;, mais il supprime la derni&egrave;re libert&eacute; des pierres blanches marqu&eacute;es d'une croix...</p></td>
</tr></table>

<table class="diagramCard"><tr>
<td class="diagram"><script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rules/rules.cfg");?>">../_sgf/regleGo/priseSansLibF.sgf</script></td>
<td><p class="diagramText">...alors Noir capture ces pierres en les retirant de la grille, ce qui donne deux libert&eacute;s &agrave; la pierre 1 qu'il vient de jouer.</p></td>
</tr></table>

<table class="diagramCard"><tr>
<td class="diagram"><script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rules/rules.cfg");?>">../_sgf/regleGo/suicide.sgf</script></td>
<td><p class="diagramText">Si Noir joue en 'A', il supprime la derni&egrave;re libert&eacute; de ses pierres et ne capture rien. C'est interdit.</p></td>
</tr></table>

<h2>R&eacute;p&eacute;tition</h2>
<p class="important">
Un joueurs ne doit pas, en posant une pierre, ramener la grille dans un &eacute;tat identique &agrave; l'un de ceux qu'il lui
a lui-m&ecirc;me d&eacute;j&agrave; donn&eacute;.
</p>

<table class="diagramCard"><tr>
<td class="diagram"><script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rules/rules.cfg");?>">../_sgf/regleGo/repetitionD.sgf</script></td>
<td><p class="diagramText">Si Noir joue en 'A', il capture la pierre marqu&eacute;e d'une croix (il lui enl&egrave;ve sa derni&egrave;re libert&eacute;).</p></td>
</tr></table>

<table class="diagramCard"><tr>
<td class="diagram"><script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rules/rules.cfg");?>">../_sgf/regleGo/repetitionF.sgf</script></td>
<td><p class="diagramText">Une fois que Noir a jou&eacute; 1, Blanc ne peut pas rejouer en 'B' imm&eacute;diatement et capturer la pierre noire car dans ce cas, 
il reproduirait la situation du diagramme pr&eacute;c&eacute;dent.</p></td>
</tr></table>

<p> Blanc doit donc jouer ailleurs. 
Si Noir r&eacute;pond en jouant lui aussi ailleurs, Blanc pourra &agrave; nouveau jouer en 'B', puisque l'&eacute;tat de la grille aura chang&eacute;. 
Alors ce sera au tour de Noir de devoir jouer ailleurs, et ainsi de suite, tant qu'aucun des deux joueurs ne connecte ses pierres, 
emp&ecirc;chant ainsi une nouvelle capture.</p>

<!-- 2/3 -->

<h2>Fin de la partie</h2>
<p>Des intersections inoccup&eacute;ees sont <span class="definition">entour&eacute;es</span> par un joueur si toutes leurs voisines sont occup&eacute;es par ses pierres.</p>

<p class="important">
La partie s'arr&ecirc;te lorsque les deux joueurs passent cons&eacute;cutivement. 
Ils peuvent alors retirer de la grille toutes les pierres adverses 
qu'ils sont certains de pouvoir capturer. 
Puis ils comptent leurs points qui sont le nombre d'intersections qu'ils sont certains de pouvoir occuper 
ou entourer avec leurs pierres.<br><br>
En cas de d&eacute;saccord des joueurs sur le statut de certaines intersections, 
la partie reprend dans l'&eacute;tat o&ugrave; elle s'&eacute;tait arr&ecirc;t&eacute;e 
jusqu'&agrave; deux nouveaux passes cons&eacute;cutifs, sachant qu'ensuite, 
aucune des pierres encore sur la grille ne pourra &ecirc;tre retir&eacute;e, et que les points des joueurs seront 
le nombre d'intersections qu'ils occupent ou entourent avec leurs pierres.<br><br>
Enfin, Blanc re&ccedil;oit 7,5 points de compensation, Noir ayant eu l'avantage de commencer. 
Le demi-point sert &agrave; &eacute;viter les parties nulles.<br><br>
Le gagnant est celui qui a le plus de points.
</p>

<p>Si des intersections ne sont entour&eacute;es par aucun des joueurs, elles sont <span class="definition">neutres</span>, 
et ne donnent de points &agrave; personne.</p>

<table class="figureCard"><tr>
<td class="figure"><script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rules/rules.cfg");?>">../_sgf/regleGo/comptageP.sgf</script></td>
<td><p class="figureText">Les joueurs viennent de passer. Blanc retire la pierre marqu&eacute;e d'une croix qu'il est certain de pouvoir capturer.</p></td>
</tr></table>

<table class="figureCard"><tr>
<td class="figure"><script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rules/rules.cfg");?>">../_sgf/regleGo/comptageN.sgf</script></td>
<td><p class="figureText">Noir entoure 7 intersections en haut &agrave; gauche, 6 en bas &agrave; droite, et a 26 pierres sur la grille, soit 39 points.</p></td>
</tr></table>

<table class="figureCard"><tr>
<td class="figure"><script src="../../_mgos/sgfplayer.php?cfg=<?php print urlencode("../_sample/rules/rules.cfg");?>">../_sgf/regleGo/comptageB.sgf</script></td>
<td><p class="figureText">Blanc entoure 8 intersections en bas &agrave; gauche, 7 en haut &agrave; droite, et a 27 pierres sur la grille, soit 42 points.</p></td>
</tr></table>

<p>Blanc a donc 3 points de plus que Noir. Avec les points de compensation, il gagne de 10,5 points.</p>

</div>
</body>
</html>
