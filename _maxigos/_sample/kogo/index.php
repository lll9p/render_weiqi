<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<?php
include "../_php/date.php";
include "../_php/lang.php";
$title="Kogo";
?>
<link rel="stylesheet" href="../_css/mini.css" type="text/css">
<style>
body {font-family:Arial,sans-serif;background:#ccc;}
div.main {max-width:40em;margin:0 auto;background:#fff;}
div.main>h1 {font-size:1.5em;background:#000;color:#fff;margin:0 0 0.5em 0;padding:0.5em;}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include "../_php/sample.php";?>
<div class="main">
<h1><?php print $title;?></h1>
<script src="../../_mgos/sgfplayer.php?cfg=../_sample/neo-classic/_cfg/tree.cfg&amp;mxL=<?php echo $mxL;?>">../../../../kogo-latin-1.sgf</script>
</div>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
</body>
</html>
