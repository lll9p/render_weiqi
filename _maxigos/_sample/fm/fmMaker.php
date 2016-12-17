<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body {background:url(tatami.gif);font-family:Arial,sans-serif;}
h1.top {text-align:center;background:#777;color:#fff;width:80%;margin:0 auto;}
iframe {border:1px solid #777;background:#eeb;margin:0 auto;display:block;}
</style>
</head>
<body>

<?php
// uncomment lines below in order to make the stand-alone player fm.js
// include_once('../../_php/aloneLib.php');
// makeAlone("_alone/fm.js","fm.cfg","../../../","fr");
?>
<h1 class="top">Make "fm.js" stand-alone player</h1>
<?php print "<iframe width=\"80%\" height=\"800\" src=\"../../_alone/aloneViewer.php?mxL="."fr"."&amp;s="."../_sample/fm/_alone/fm.js"."\"></iframe>\n";?>
</body>
</html>
