<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
if ($mxL=="fr") $title="Exemple d'utilisation de maxiGos : kifu";
else if ($mxL=="ja") $title="MaxiGos例・棋譜";
else if ($mxL=="zh") $title="MaxiGos例子-棋谱";
else if ($mxL=="zh-tw") $title="MaxiGos例子-棋譜";
else $title="Sample for maxiGos: kifu";
if ($mxL=="fr") $title2="Kifu";
else if ($mxL=="ja") $title2="棋譜";
else if ($mxL=="zh") $title2="棋谱";
else if ($mxL=="zh-tw") $title2="棋譜";
else $title2="Kifu";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {font-family:Arial,sans-serif;}
div.main>h1 {font-size:1.5em;background:#000;color:#fff;margin:0 0 1em 0;padding:0.5em;}
div.mxGobanDiv canvas {font-size:20px !important;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include "../_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="main">
<h1><?php print $title2;?></h1>
<script src="../../_mgos/sgfplayer.php?mxL=<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>&amp;cfg=<?php print urlencode("../_sample/kifu/kifu.cfg");?>">../_sgf/game/Mingren-001-1F-1-<?php print (in_array($mxL,array("fr","ja","zh","zh-tw"))?$mxL:"en");?>.sgf</script>
</div>

<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
