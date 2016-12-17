<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
if ($mxL=="fr") $title="Exemple d'utilisation de maxiGos : éditeur sgf";
else if ($mxL=="ja") $title="MaxiGos例・SGF editor";
else if ($mxL=="zh") $title="MaxiGos例子-SGF editor";
else if ($mxL=="zh-tw") $title="MaxiGos例子-SGF editor";
else $title="Sample for maxiGos: sgf editor";
if ($mxL=="fr") $title2="Éditeur sgf";
else if ($mxL=="ja") $title2="SGF editor";
else if ($mxL=="zh") $title2="SGF editor";
else if ($mxL=="zh-tw") $title2="SGF editor";
else $title2="Sgf editor";
if ($mxL=="fr") $backLabel="Revenir en haut de la page";
else if ($mxL=="ja") $backLabel="トップに戻る";
else if ($mxL=="zh") $backLabel="返回顶部";
else if ($mxL=="zh-tw") $backLabel="返回頂部";
else $backLabel="Back to top";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {font-family:Arial,sans-serif;}
div.main>h1 {font-size:1.5em;background:#000;color:#fff;margin:0 0 1em 0;padding:0.5em;}
div.menu a:hover,
ul.sampleList li a:hover,
ul.sampleList li.currentSample a:hover {color:#c33 !important;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include "../_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<div class="main">
<h1><?php print $title2;?></h1>
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/edit/edit.cfg&amp;mxL=<?php echo $mxL;?>"></script>
</div>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
