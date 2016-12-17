<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php include "../_php/date.php";?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {margin:0;padding:0;font-family:sans-serif;color:#000;background:#480;}
.content {padding:0.5em;text-align:center;}
.subcontent {display:inline-block;}
.note {text-align:center;}
</style>
<title><?php print $mxL=="en"?"Playing card colors":"Couleurs de carte à jouer";?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="content">
<div class="subcontent">
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/miscellaneous/spade.sgf");?>&amp;cfg=<?php print urlencode("../_sample/card/card.cfg");?>"></script>
<script>mxG.D[1].cardSign="♠";mxG.D[1].signColor="#000";</script>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/miscellaneous/heart-symetric.sgf");?>&amp;cfg=<?php print urlencode("../_sample/card/card.cfg");?>"></script>
<script>mxG.D[2].cardSign="♥";mxG.D[2].signColor="#f00";</script>
</div>
<div class="subcontent">
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/miscellaneous/diamond.sgf");?>&amp;cfg=<?php print urlencode("../_sample/card/card.cfg");?>"></script>
<script>mxG.D[3].cardSign="♦";mxG.D[3].signColor="#f00";</script>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print $mxL;?>&amp;sgf=<?php print urlencode("../_sample/_sgf/miscellaneous/club.sgf");?>&amp;cfg=<?php print urlencode("../_sample/card/card.cfg");?>"></script>
<script>mxG.D[4].cardSign="♣";mxG.D[4].signColor="#000";</script>
</div>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</div>
</body>
</html>
