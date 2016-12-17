<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-tw">
<?php $mxL=isset($_GET["mxL"])?$_GET["mxL"]:(isset($_POST["mxL"])?$_POST["mxL"]:"fr");?>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=Big5" />
<meta name="viewport" content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=4.0,user-scalable=yes" />
<title>MaxiGos - Big5</title>
<style>
body {background:#fff;}
h1 {text-align:center;}
.bottomLink {text-align:center;margin-top:1em;}
</style>
</head>
<body>
<h1>Big5</h1>

<p>The page is encoded in Big5 but could be encoded in another charset such as UTF-8 as well.<br>
The sgf file is encoded in Big5 but could be encoded in another charset such as UTF-8 as well.<br>
The sgf file must be encoded in the charset specified in its CA property (the most important).<br>
The maxiGos js scripts themselves are encoded in UTF-8 (no good reason to change this).</p>

<p style="color:red;">Because the page is not in UTF-8, 
the key point is to use charset="UTF-8" in the script tags 
that load the js scripts (&lt;script charset="UTF-8" src="..."&gt;).</p>

<p>Start by loading the localization script "mgos-i18n-zh-tw.js" (for traditionnal chinese).</p>

<!-- load "mgos-i18n-zh-tw.js" (localization script in traditionnal chinese) -->
<!-- don't forget charset="UTF-8" -->
<script charset="UTF-8" src="../../_i18n/mgos-i18n-zh-tw.js">
</script>

<h2 style="text-align:center;">maxigos-neo-classic-comment.js</h2>

<p>Use the maxiGos script "maxigos-neo-classic-comment.js".<br>
Read the sgf file "Mingren-001-1F-1-zh-tw-Big5.sgf" (in this file, CA is Big5 and game information is in traditionnal chinese).</p>

<!-- load "maxigos-neo-classic-comment.js" as is -->
<!-- don't forget charset="UTF-8" -->
<script data-maxigos-l="zh-tw" charset="UTF-8" src="../neo-classic/_alone/maxigos-neo-classic-comment.js">
../_sgf/game/Mingren-001-1F-1-zh-tw-Big5.sgf
</script>

<p>Setp 1: maxiGos reads the sgf file, looks at its CA property and sees that it is Big5.<br>
Step 2: maxiGos transforms the sgf file content from Big5 to UTF-8.<br>
Step 3: the browser detects that the page is in Big5 and the script tags have charset="UTF-8".<br>
Step 4: the browser transforms maxiGos output (strings that are displayed on the screen) from UTF-8 to Big5.<br>
Step 5: maxiGos displays its labels in traditionnal chinese (using mgos-i18n-zh-tw.js script).</p>

<h2 style="text-align:center;">maxigos-edit.js</h2>

<p>Use the maxiGos script "maxigos-edit.js".<br>
Read the sgf file "Mingren-001-1F-1-zh-tw-Big5.sgf" (in this file, CA is Big5 and game information is in traditionnal chinese).</p>

<!-- load "maxigos-edit.js" as is -->
<!-- don't forget charset="UTF-8" -->
<script data-maxigos-l="zh-tw" charset="UTF-8" data-maxigos-to-charset="Big5" src="../edit/_alone/maxigos-edit.js">
../_sgf/game/Mingren-001-1F-1-zh-tw-Big5.sgf
</script>

<p>By default, maxiGos generates sgf in "UTF-8". But here, when the user clicks on the "Sgf" button 
or selects the "Save" menu, 
the charset in the CA property of the sgf is "Big5" because we set the value of the "toCharset"
parameter to "Big5" using data-maxigos-to-charset="Big5" as attribute of the script tag 
that loads the player. Another method could be to add in the code of the player 
mxG.D[mxG.K].toCharset="Big5"; just before mxG.D[mxG.K].createAll();.</p>

<p>Setp 1: maxiGos reads the sgf file, looks at its CA property and sees that it is Big5.<br>
Step 2: maxiGos transforms the sgf file content from Big5 to UTF-8.<br>
Step 3: the browser detects that the page is in Big5 and the script tags have charset="UTF-8".<br>
Step 4: the browser transforms maxiGos output (strings that are displayed on the screen) from UTF-8 to Big5.<br>
Step 5: maxiGos displays its labels in traditionnal chinese (using mgos-i18n-zh-tw.js script).<br>
Step 6: if the user clicks on the "Sgf" button, maxiGos looks at the value of the "toCharset" 
parameter and sees that it is "Big5" and not "UTF-8".<br>
Step 7: maxiGos replaces the CA property of the sgf by "Big5" then displays the sgf.</p>

<div class="bottomLink"><a href="charset.php?mxL=<?php echo $mxL;?>">Index</a></div>
</body>
</html>
