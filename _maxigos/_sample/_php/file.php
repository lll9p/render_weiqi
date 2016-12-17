<?php
if (isset($mxL)&&(($mxL=="fr")||($mxL=="ja")||($mxL=="zh")||($mxL=="zh-tw"))) $mxL4Sgf=$mxL;
else $mxL4Sgf="en";
$defaultSgfTarget=isset($sgfTarget)?$sgfTarget:("Mingren-001-1F-1-".$mxL4Sgf.".sgf");
$sgfTarget=isset($_POST["sgfServerFile"])?$_POST["sgfServerFile"]:(isset($_GET["sgfServerFile"])?$_GET["sgfServerFile"]:$defaultSgfTarget);
$sgfTarget=basename(current(explode("?",$sgfTarget)),"sgf")."sgf"; // sgf file basename only
?>