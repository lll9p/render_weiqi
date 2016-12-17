<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="initial-scale=1.0,user-scalable=yes">
<?php include "../../_php/version.php";?>
<title>Download page for MaxiGos v<?php print $v;?></title>
<style>
.important {color:red;}
.flag {border:1px solid #ccc;vertical-align:middle;}
.menu a {padding-right:1em;vertical-align:middle;}
</style>
</head>
<body>
<div class="menu"><?php if (file_exists("../../../index.php")) print "<a href=\"../../../index.php?lang=en\">Home</a>";?><!--
--><?php print "<a href=\"documentation.php\">Documentation</a>";?><!--
--><a href="<?php print str_replace("/_fr/","/_en/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../../_img/flag/en.gif"> English</a><!--
--><a href="<?php print str_replace("/_en/","/_fr/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../../_img/flag/fr.gif"> Fran&ccedil;ais</a></div>
<h1>MaxiGos v<?php print $v;?> download page</h1>
<p><em>Copyright 1998-<?php print date("Y");?> - François Mizessyn - francois.mizessyn@orange.fr</em></p>
<p>
MaxiGos is a sgf player to show go games or problems in a web page. 
It is written in php and javascript (the end user has just to let javascript enable in his browser).</p>

<p>You can use maxiGos free of charge on your website (BSD type <a href="../license.txt">license</a>).</p>

<?php
$vb=str_replace(".","",$v);
$vbn="_maxigos".$vb;
$vbne=$vbn.".zip";
$dir="../../../";
$mxL="en";
?>
<h2>Download full version of maxiGos</h2>

<?php if (file_exists($dir.$vbne)) { ?>
<p><a href="<?php print $dir.$vbne;?>">Click here to download maxiGos V<?php print $v;?></a>.</p>
<?php } else print "<p><span class=\"important\">Archive not found on this site!</span>
Try <a href=\"http://jeudego.org/maxiGos/?lang=en\">http://jeudego.org/maxiGos/?lang=en</a>!</p>";?>

<h2>Warning for those who customized previous versions of maxiGos</h2>
<p class="important">In maxiGos v6.57, several important changes were made.</p>
<p class="important">Take care to paths and files names in your pages
(especially path and name of configuration files, internationalization files, and stand-alone script files)
if you used a previous version of maxiGos!<p>
<p class="important">Take care to class names if you customized maxiGos css.
The classes of the global box changed
(the "mx"+value of "GlobalBox" attribute+"GobalBoxDiv" class is replaced by "mx"+value of "theme" attribute+"GobalBoxDiv" and "mx"+value of "config" attribute+"GobalBoxDiv").</p>
<p class="important">Take care to the way you insert sgf in your pages
(the "data-sgf-file" attribute is replaced by "data-maxigos-sgf").</p>

<h2>Download stand-alone players only</h2>
<p>These players are designed to work alone (all the code is embedded in only one javascript script file).</p>
<p>The defaut language is french but it is quite easy to use english instead of french. 
Just add <span style="color:red;">data-maxigos-l="en"</span> as attribute of the &lt;script&gt; tag
of the stand-alone players.</p>
<p>For instance: <span style="color:red;">&lt;script data-maxigos-l="en" src="ppp/maxigos-neo-classic-basic.js"&gt;</span></p>
<p>To use maxiGos in another language, see the "Internationalization" chapter of <a href="documentation.php">the documentation</a>.</p>

<?php $path2maxigos="../../";include "../../_php/aloneLink.php";?>

<h2>What is new in the 6.62 version?</h2>
<ul>
<li>Repair dowload links.</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.61 version?</h2>
<ul>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.60 version?</h2>
<ul>
<li>Clear a bug in "View" component which prevented to change the goban background under Chrome browser.</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.59 version?</h2>
<ul>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.58 version?</h2>
<ul>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.57 version?</h2>
<ul>
<li><span style="color:red;">Several changes on folders and files names.
Take care if you used a previous version!</span>
"_local" becomes "_i18n", and internationalization script names become "maxigos-i18n-xx.js" instead of "maxigos-loc-xx.js".
Move "_img", "_js", "_php" from "_mgos" to "_maxigos".
Move "_cfg" et "_css" from "_mgos" to "_sample/classic".
Move ".js" scripts from "_alone/" to "_sample/classic/_alone".
Move ".php" scripts from "_alone/" to "_php".
Move images to the "_img" folder of "_maxigos".
Rename "GGosLib.php" to "gosLib.php".
Remove "_alone" folder from "_maxigos" folder.</li>
<li><span style="color:red;">Change in the way to include sgf!</span>
The name of the "data-sgf-file" attribute becomes "data-maxigos-sgf".
The value of this attribute,
the value of the sgf parameter in the url of the launcher "sgfplayer.php",
and the text that one can insert between the &lt;script&gt; and &lt;/script&gt; tags of a player
can be all a sgf file name or a text that is a sgf record or an url that generates a sgf record.
Sgf file content and sgf generated by an url are downloaded using AJAX only (sgf parsing is no longer done on the server).
That's means they have to respect the "same origin" policy (same protocol, same domain, same port as the calling page).</li>
<li><span style="color:red;">The "GlobalBox" parameter is replaced by "theme" and "config" parameters.
The global box of maxiGos can have up to four classes.</span>
The first is "mxGobalBoxDiv",
the second is "mx"+value of the new "theme" parameter+"GlobalBoxDiv",
the third is "mx"+value of the new "config" parameter+"GlobalBoxDiv"
and the fourth is "mxIn3dOn" or "mxIn2d".</li>
<li><span style="color:red;">Numerous changes in sample codes.</span>
The default configuration becomes "neo-classic basic" (instead of "classic basic").</li>
<li>The "View" component can set goban background to an image url or a color
(previously it was possible to set a color only).</li>
<li>Rewritting of the "Lesson" component.</li>
<li>Rewritting of the "Navigation" component:
now, arrows on buttons are displayed using css instead of canvas.</li>
<li>Remove the "Kifu" component.</li>
<li>Remove the "selectColor" parameter.</li>
<li>Remove the "versionBoxOn" parameter.</li>
<li>Remove the "classicShadow" parameter.</li>
<li>Change managing of css classes of the "Pass" button.</li>
<li>Add a "Cancel" button when one shows the sgf if editing this sgf is possible.</li>
<li>Improve keyboard navigation.</li>
<li>Help files are included to javascript stand-alone scripts
(previously, they were external ressources of these scripts).</li>
<li>Remove "addLocalization.php" script.</li>
<li>Remove "htmlInSgfOn" parameter.</li>
<li>Add "htmlBr", "htmlSpan", "htmlDiv" and "htmlP" parameters.</li>
<li>Change for "AdjustXxxWidth" and "AdjustXxxHeight" parameters.
Now, they can all have a box name as value.
Also, adjustTreeHeight can have the value 2 which means its parent has the same height as the goban parent
(previously, that was what happened when the value was 1,
and adjustTreeHeight had not any value to give to the "Tree" component the same height as the goban).</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.56 version?</h2>
<ul>
<li>"Text" buttons of "Edit" component toolbar ("AsInBook" button, "Indices" button, ...)
become all "Canvas" buttons.</li>
<li>Clear a bug in "AnimatedStone" component
(the "Next" button of players with a tree didn't work
when both a player of type "problem" and a player of type "tree" were in the same page).</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.55 version?</h2>
<ul>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.54 version?</h2>
<ul>
<li><span style="color:red;">Major change in localization process</span>
(mxG.L is no longer used). Now, it is possible to have different maxiGos in different languages
in the same page.
See "Localization" chapter in the documentation to learn more about that.</li>  
<li>Change of the défault value of "hideNumOfMoves" to 1.</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.53 version?</h2>
<ul>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.52 version?</h2>
<ul>
<li>Add support of the "wheel" event to navigate in the move tree.</li>
<li>Add "Neo-classic style" sample (including a stand-alone version of the players).</li>
<li>Rebuild of "Minimalist Neo Classic style" and "Rfg.jeudego.org style" samples.</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.51 version?</h2>
<ul>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.50 version?</h2>
<ul>
<li>Rename of HTMLParenthesis in htmlParenthesis.</li>
<li>Html tags from sgf are displayed as text (not as html) by default.
Add "htmlInSgfOn" parameter that allows to display these tags as html.</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.49 version?</h2>
<ul>
<li>Add possibility to edit sgf directly using "Sgf" component (and add "allowEditSgf" parameter).</li>
<li>Correct enabling/disabling numFrom and numWith field in "Option" component.</li>
<li>Add "alternativePath" parameter to "Alternative" sample (relative path from current script to "Alternative" folder).</li>
<li>Replace document.head by document.getElementsByTagName('head')[0] (better support of some old browsers).</li>
<li>Modify the way css are loaded (to better support some old browsers).</li>
<li>Add "AnimatedStone" component and the "Anime" sample.</li>
<li>Popup boxes can be displayed over any other boxes (not only over goban).</li>
<li>Remove "gobanFocus" parameter.</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.48 version?</h2>
<ul>
<li>Clear a bug present since v6.47 in stand-alone players (these players crashed using some browsers).</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.47 version?</h2>
<ul>
<li>Clear a (big) bug present since v6.45 in "Navigation" component: when "fitParent" was 2 or 3, at least webkit browsers crashed.</li>
<li>Clear a bug in "Image" component (at least using webkit browsers, the image produced by the component was replaced by a black rectangle).</li>
<li>Better support of GB18030 charset (on some not so old servers, 
mb_convert_encoding() php function cannot use GB18030 charset. In such a case, 
maxiGos uses CP936 which is a subset of GB18030.</li>
<li>Change the method to download the sgf and suppress the "sgfDownload.php" script.</li>
<li>Add of "toCharset" parameter for the "Sgf" component". Values of this parameter are charset codes ("UTF-8", "Big5", "GB13080", "Shift_JIS", ...).
This parameter is used only to generate sgf (its value replaces the initial value of the CA property in the sgf).</li>
<li>Add some workarounds for stand-alone players when an external ressource (an image or a script) cannot be found 
(see parts of documentation about stand-alone scripts).</li>
<li>Change in help file path names in configuration files (see parts of documentation about help files).</li>
<li>Improvement of <a href="../_sample/charset/charset.php?mxL=en">charset test samples</a>. 
Add explanations in <a href="../_sample/charset/sample-in-Big5.php?mxL=en">Big5</a>, 
<a href="../_sample/charset/sample-in-GB18030.php?mxL=en">GB18030</a> 
and <a href="../_sample/charset/sample-in-Shift_JIS.php?mxL=en">Shift_JIS</a> samples.</li>
<li>Add "Version" component to all classic configuration, and add "versionBoxOn" parameter that
allows to show/hide it on the fly if needed.</li>
<li>Improvement of "alone"
and "alone2" samples.</li>
<li>Correction of a bug in "addLocalization.php" 
(previously, localization of scripts larger than about 100kB failed using "addLocalization.php", notably "maxigos-edit.js").</li>
<li>Remove $plc parameter of "aloneMaker()" in "GGosLib.php" and modification of all scripts using
this function.</li>
<li>Remove $output parameter of "gosStart()" in "GGosLib.php" and modification of all scripts using
this function.</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.46 version?</h2>
<ul>
<li>Add "initialMessage_&lt;xy&gt;", "failMessage_&lt;xy&gt;", "successMessage_&lt;xy&gt;" 
and  "specialMoveMatch" parameters to "Solve" component.</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.45 version?</h2>
<ul>
<li>Better support of language codes that contain "-" such as "zh-tw" (traditional chinese).</li>
<li>Add some values to fitParent parameter to adapt the navigation buttons size to goban width.</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.44 version?</h2>
<ul>
<li>Clear some small bugs that happened when antislashes in sgf.</li>
<li>Modifications of stand-alone script function maker.</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.43 version?</h2>
<ul>
<li>Add "charset/sample-in-Big5.php", "charset/sample-in-GB18030.php" and "charset/sample-in-Shift-JIS.php" 
samples that show a way to include maxiGos in pages encoded in Big5, GB18030 and Shift-JIS.</li>
<li>Improve display of the move tree when loading a very large sgf file.</li>
<li>Move numbering functions from "Tree" component to "Diagram" component
since these functions are now also used by the "Goto" component.</li>
<li>The "gotoInput" element in "Goto" component now displays for the current move the same number as the one in the tree window 
(previously, that was not always the case in any circumstances).</li>
<li>The "gotoInput" element in "Goto" component is now only displayed if the "Diagram" component is present
(the component now needs functions defined in the "Diagram" component).</li>
<li>The "gotoInput" element in "Goto" component is now set to "" instead of "0" when the current node has no numbering
(otherwise, it is disturbing when the numbering of the current branch does not begin to 1).</li>
<li>Add a localization script for traditional chinese (mgos-loc-zh-tw.js).</li>
<li>Remove the javascript parameter jsSgfParse (replaced by !this.rN.Focus test).
In theory, this parameter was added only by the php function gosStart ().</li>
<li>Modification of the method to display a message when loading a long file.</li>
<li>Remove the id parameter of createAll () function. It is now
replaced when necessary before calling this function
by a line such as "mxG.D .s [mxG.K] = document.getElementById (id);" before calling createAll ().</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.42 version?</h2>
<ul>
<li>Add the protocol and domain name at the begining of the path calculated by gosRootAbsolutePath
(otherwise maxiGos bug when it is not stored on the same server as the page that uses it).</li>
<li><span style="color:red;">Put all global variables in a single global object mxG.</span></li>
<li>Various optimizations and minor corrections.</li>
</ul>

<h2>What is new in the 6.41 version?</h2>
<ul>
<li>Change of the way the image representing the goban is generated in the component "Image".
Previously, the image was created with a transparent background (but possibly displayed with a colored background).
Now we take into account the possible presence of a background-image or background-color and this is included in the generated image.</li>
<li>Add a message when loading big sgf files (works only on recent browsers).</li>
<li>Add "hideEmptyTitle" parameter.</li>
<li>Add "adjustNavigationWidth" and "adjustSolveWidth" parameters.</li>
<li>Add of stand-alone players for "minimalist" sample.</li>
<li>Add of stand-alone players for "tatami" sample.</li>
<li>Add of "realistic style" sample.</li>
<li>Simplification of the function computing the coordinates of a click on the board.</li>
<li>Bypass of a bug when retrieving click coordinates on android when selecting a region of goban using "Edit" component.</li>
<li>Various optimizations and minor corrections.</li>
</ul>

<div class="menu"><?php if (file_exists("../../index.php")) print "<a href=\"../../index.php?lang=en\">Home</a>";?><!--
--><a href="documentation.php">Documentation</a><!--
--><a href="<?php print str_replace("/fr/","/en/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../en.gif"> English</a><!--
--><a href="<?php print str_replace("/en/","/fr/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../fr.gif"> Fran&ccedil;ais</a></div>

</body>
</html>