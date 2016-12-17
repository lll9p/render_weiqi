<!DOCTYPE html>
<?php include "../_php/lang.php";?>
<html lang="<?php echo $mxL;?>">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=4.0,user-scalable=yes">
<?php
include "../../_sample/_php/date.php";
if ($mxL=="fr") $title="Exemple d'utilisation de maxiGos : texture";
else if ($mxL=="ja") $title="MaxiGos例・碁盤の背景";
else if ($mxL=="zh") $title="MaxiGos例子-棋盘背景";
else if ($mxL=="zh-tw") $title="MaxiGos例子-棋盤背景";
else $title="Sample for maxiGos: texture";
if ($mxL=="fr") $title2="Texture du goban";
else if ($mxL=="ja") $title2="碁盤の背景";
else if ($mxL=="zh") $title2="棋盘背景";
else if ($mxL=="zh-tw") $title2="棋盤背景";
else $title2="Goban texture";
?>
<link rel="stylesheet" href="../../_sample/_css/mini.css" type="text/css">
<style>
body {text-align:center;margin-top:0;padding-top:0;}
/* below are css instructions for a responsive design */
/* set a size to player parent div in order to make the data-maxigos-fit-parent option efficient */
div.content {max-width:100%;}
/* set goban size large enough to see texture details more accurately */
div.mxGobanDiv canvas {font-size:1em !important;}
/* set goban shadow */
div.mxGobanDiv {padding:0 !important;}
div.mxInnerGobanDiv {box-shadow:0 0.125em 0.25em rgba(0,0,0,0.25) !important;}
/* set various goban textures */
div.mxGobanDiv canvas {background-size:cover !important;}
.bamboo div.mxGobanDiv canvas {background-image:url(../../_img/bk/bamboo.jpg);}
.beech div.mxGobanDiv canvas {background-image:url(../../_img/bk/beech.jpg);}
.beech2 div.mxGobanDiv canvas {background-image:url(../../_img/bk/beech2.jpg);}
.cherry div.mxGobanDiv canvas {background-image:url(../../_img/bk/cherry.jpg);}
.kaya div.mxGobanDiv canvas {background-image:url(../../_img/bk/kaya.jpg);}
.oak div.mxGobanDiv canvas {background-image:url(../../_img/bk/oak.jpg);}
.pine div.mxGobanDiv canvas {background-image:url(../../_img/bk/pine.jpg);}
.pine2 div.mxGobanDiv canvas {background-image:url(../../_img/bk/pine2.jpg);}
.rosewood div.mxGobanDiv canvas {background-image:url(../../_img/bk/rosewood.jpg);}
</style>
<title><?php print $title;?></title>
</head>
<body>
<?php $maxiGosDirPath="../../";include $maxiGosDirPath."_sample/_php/sample.php";?>
<?php $langList=array("en","fr","ja","zh","zh-tw");include "../_php/menu.php";?>
<h1><?php print $title2;?></h1>
<h2>Bamboo</h2>
<div class="content bamboo">
<script data-maxigos-variation-bk="transparent"
    	data-maxigos-variation-on-focus-bk="transparent"
        data-maxigos-variation-color="#000"
        data-maxigos-variation-on-focus-color="#c33"
        data-maxigos-variation-font-weight="normal"
        data-maxigos-fit-parent="3"
        data-maxigos-in3d-on="1"
        src="../../_mgos/sgfplayer.php?cfg=../_sample/minimalist/_cfg/basic.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/game/blood-vomit.sgf</script>
</div>
<hr>
<h2>Beech</h2>
<div class="content beech">
<script data-maxigos-variation-bk="transparent"
    	data-maxigos-variation-on-focus-bk="transparent"
        data-maxigos-variation-color="#000"
        data-maxigos-variation-on-focus-color="#c33"
        data-maxigos-variation-font-weight="normal"
        data-maxigos-fit-parent="3"
        data-maxigos-in3d-on="1"
        src="../../_mgos/sgfplayer.php?cfg=../_sample/minimalist/_cfg/basic.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/game/blood-vomit.sgf</script>
</div>
<hr>
<h2>Beech2</h2>
<div class="content beech2">
<script data-maxigos-variation-bk="transparent"
    	data-maxigos-variation-on-focus-bk="transparent"
        data-maxigos-variation-color="#000"
        data-maxigos-variation-on-focus-color="#c33"
        data-maxigos-variation-font-weight="normal"
        data-maxigos-fit-parent="3"
        data-maxigos-in3d-on="1"
        src="../../_mgos/sgfplayer.php?cfg=../_sample/minimalist/_cfg/basic.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/game/blood-vomit.sgf</script>
</div>
<hr>
<h2>Cherry</h2>
<div class="content cherry">
<script data-maxigos-variation-bk="transparent"
    	data-maxigos-variation-on-focus-bk="transparent"
        data-maxigos-variation-color="#000"
        data-maxigos-variation-stroke-bk="transparent"
        data-maxigos-variation-on-focus-color="#000"
        data-maxigos-variation-on-focus-stroke-bk="#000"
        data-maxigos-variation-font-weight="normal"
        data-maxigos-fit-parent="3"
        data-maxigos-in3d-on="1"
        src="../../_mgos/sgfplayer.php?cfg=../_sample/minimalist/_cfg/basic.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/game/blood-vomit.sgf</script>
</div>
<hr>
<h2>Kaya</h2>
<div class="content kaya">
<script data-maxigos-variation-bk="transparent"
    	data-maxigos-variation-on-focus-bk="transparent"
        data-maxigos-variation-color="#000"
        data-maxigos-variation-on-focus-color="#f00"
        data-maxigos-variation-font-weight="normal"
        data-maxigos-fit-parent="3"
        data-maxigos-in3d-on="1"
        src="../../_mgos/sgfplayer.php?cfg=../_sample/minimalist/_cfg/basic.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/game/blood-vomit.sgf</script>
</div>
<hr>
<h2>Oak</h2>
<div class="content oak">
<script data-maxigos-variation-bk="transparent"
    	data-maxigos-variation-on-focus-bk="transparent"
        data-maxigos-variation-color="#000"
        data-maxigos-variation-on-focus-color="#c33"
        data-maxigos-variation-font-weight="normal"
        data-maxigos-fit-parent="3"
        data-maxigos-in3d-on="1"
        src="../../_mgos/sgfplayer.php?cfg=../_sample/minimalist/_cfg/basic.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/game/blood-vomit.sgf</script>
</div>
<hr>
<h2>Pine</h2>
<div class="content pine">
<script data-maxigos-variation-bk="transparent"
    	data-maxigos-variation-on-focus-bk="transparent"
        data-maxigos-variation-color="#000"
        data-maxigos-variation-on-focus-color="#f00"
        data-maxigos-variation-font-weight="normal"
        data-maxigos-fit-parent="3"
        data-maxigos-in3d-on="1"
        src="../../_mgos/sgfplayer.php?cfg=../_sample/minimalist/_cfg/basic.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/game/blood-vomit.sgf</script>
</div>
<hr>
<h2>Pine2</h2>
<div class="content pine2">
<script data-maxigos-variation-bk="transparent"
    	data-maxigos-variation-on-focus-bk="transparent"
        data-maxigos-variation-color="#000"
        data-maxigos-variation-on-focus-color="#f00"
        data-maxigos-variation-font-weight="normal"
        data-maxigos-fit-parent="3"
        data-maxigos-in3d-on="1"
        src="../../_mgos/sgfplayer.php?cfg=../_sample/minimalist/_cfg/basic.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/game/blood-vomit.sgf</script>
</div>
<hr>
<h2>Rosewood</h2>
<div class="content rosewood">
<script data-maxigos-focus-color="#eca"
        data-maxigos-variation-bk="transparent"
    	data-maxigos-variation-on-focus-bk="transparent"
        data-maxigos-variation-color="#eca"
        data-maxigos-variation-stroke-bk="transparent"
        data-maxigos-variation-on-focus-color="#eca"
        data-maxigos-variation-on-focus-stroke-bk="#eca"
        data-maxigos-variation-font-weight="normal"
        data-maxigos-line-color="#eca"
        data-maxigos-star-ratio="0.3"
        data-maxigos-fit-parent="3"
        data-maxigos-in3d-on="1"
        src="../../_mgos/sgfplayer.php?cfg=../_sample/minimalist/_cfg/basic.cfg&amp;mxL=<?php echo $mxL;?>">../_sgf/game/blood-vomit.sgf</script>
</div>

<?php $langList=array("en","fr","ja","zh","zh-tw"); include "../../_sample/_php/menu.php";?>

</body>
</html>
