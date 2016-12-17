<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="initial-scale=1.0,user-scalable=yes">
<?php include "../../_php/version.php";?>
<title>Documentation for maxiGos v<?php print $v;?></title>
<style>
body {font-size:1em;text-align:justify;}
p.em, p.note {font-style:italic;}
.code {color:red;font-family:monaco;font-size:0.8em;}
p.code, div.code {text-align:left;}
.important {color:black;font-weight:bold;}
table.params {border-collapse: collapse;}
table.params th, table.params td {border: 1px solid black;padding: 3px;}
h1 {font-size:2em;text-align: center;}
h2:before {content: counter(h2counter) ". ";}
h2 {font-size:1.8em;counter-increment: h2counter;counter-reset: h3counter;}
h3:before {content: counter(h2counter) "." counter(h3counter) ". " ;}
h3 {font-size:1.6em;counter-increment: h3counter;counter-reset: h4counter;}
h4:before {content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) ". ";}
h4 {font-size:1.4em;counter-increment: h4counter;counter-reset: h5counter;}
h5:before {content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) "." counter(h5counter) ". ";}
h5 {font-size:1.2em;counter-increment: h5counter;}
img.flag {border:1px solid #ccc;margin-left:1em;margin-right:0.5em;vertical-align:middle;}
.download {text-align:center;padding:1em 0 0 0;}
</style>
</head>
<body>
<p><?php if (file_exists("../../../index.php")) print "<a href=\"../../../index.php?lang=en\">Home</a>";?><!--
--><a href="<?php print str_replace("/_fr/","/_en/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../../_img/flag/en.gif">English</a><!--
--><a href="<?php print str_replace("/_en/","/_fr/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../../_img/flag/fr.gif">Fran&ccedil;ais</a></p>
<h1>Documentation for maxiGos v<?php print $v;?></h1>
<p class="em">Copyright 1998-<?php print date("Y");?> - François Mizessyn - francois.mizessyn@orange.fr</p>
<div class="download"><a href="download.php">Click here to go to download page</a></div>

<h2>What is maxiGos?</h2>
<p>MaxiGos is a tool to insert sgf go games, problems or diagrams in a web page.</p>
<p>You can use maxiGos free of charge on your website (BSD type <a href="../license.txt">license</a>).</p>

<h2>What are the pre-requisites?</h2>
<p>The end user browser must be HTML5 compliant, with javascript enabled.</p>
<p>If one uses only maxiGos stand-alone players (that are in javascript),
there are no pre-requisites for the server where maxiGos is installed.</p>
<p>If one uses the full version of maxiGos (which uses javascript, css and php),
it must be installed on a web server with php available.</p>

<h2>How to quick start?</h2>
<p>Download one of the maxiGos players below:</p>
<ul>
<li><a href="../../_sample/neo-classic/_alone/maxigos-neo-classic-basic.js" download="maxigos-neo-classic-basic.js">maxigos-neo-classic-basic.js</a> (see a <a href="../../_php/aloneViewer.php?mxL=en&amp;s=..%2F_sample%2Fneo-classic%2F_alone%2Fmaxigos-neo-classic-basic.js">sample of this sgf player</a>)</li>
<li><a href="../../_sample/neo-classic/_alone/maxigos-neo-classic-comment.js" download="maxigos-neo-classic-comment.js">maxigos-neo-classic-comment.js</a> (see a <a href="../../_php/aloneViewer.php?mxL=en&amp;s=..%2F_sample%2Fneo-classic%2F_alone%2Fmaxigos-neo-classic-comment.js">sample of this sgf player</a>)</li>
<li><a href="../../_sample/neo-classic/_alone/maxigos-neo-classic-diagram.js" download="maxigos-neo-classic-diagram.js">maxigos-neo-classic-diagram.js</a> (see a <a href="../../_php/aloneViewer.php?mxL=en&amp;s=..%2F_sample%2Fneo-classic%2F_alone%2Fmaxigos-neo-classic-diagram.js">sample of this sgf player</a>)</li>
<li><a href="../../_sample/neo-classic/_alone/maxigos-neo-classic-game.js" download="maxigos-neo-classic-game.js">maxigos-neo-classic-game.js</a> (see a <a href="../../_php/aloneViewer.php?mxL=en&amp;s=..%2F_sample%2Fneo-classic%2F_alone%2Fmaxigos-neo-classic-game.js">sample of this sgf player</a>)</li>
<li><a href="../../_sample/neo-classic/_alone/maxigos-neo-classic-problem.js" download="maxigos-neo-classic-problem.js">maxigos-neo-classic-problem.js</a> (see a <a href="../../_php/aloneViewer.php?mxL=en&amp;s=..%2F_sample%2Fneo-classic%2F_alone%2Fmaxigos-neo-classic-problem.js">sample of this sgf player</a>)</li>
<li><a href="../../_sample/neo-classic/_alone/maxigos-neo-classic-tree.js" download="maxigos-neo-classic-tree.js">maxigos-neo-classic-tree.js</a> (see a <a href="../../_php/aloneViewer.php?mxL=en&amp;s=..%2F_sample%2Fneo-classic%2F_alone%2Fmaxigos-neo-classic-tree.js">sample of this sgf player</a>)</li>
</ul>
<p>Move or copy it somewhere on your website.</p>
<p>Assuming you choose the "maxigos-neo-classic-game.js" player
and assuming the sgf file you want to display is called "myFirstSgf.sgf",
insert in the &lt;body&gt; part of a html page
(where you want the player displays) a code such as:</p>
<p class="code">
&lt;script<br>data-maxigos-l="en"<br>src="ppp/maxigos-neo-classic-game.js"&gt;<br>qqq/myFirstSgf.sgf<br>&lt;/script&gt;</p>
<p>"ppp/" is a relative path between the html page and the "maxigos-neo-classic-game.js" maxiGos script.</p>
<p>"qqq/" is a relative path between the html page and the "myFirstSgf.sgf" sgf file.</p>
<p>The attribute data-maxigos-l="en" indicates that maxiGos displays its labels, messages, … in english.</p>
<p>To see a sample with the six above players, <a href="../../_sample/neo-classic/neo-classic-alone.php?mxL=en">click here!</a>
<p>Most of the time, the above players will do what you need.
But MaxiGos can do many others things. See below to learn more about that.</p>
<h2>How to install the full version of maxiGos?</h2>
<p>To install the full version of maxiGos,
<a href="download.php">download maxiGos archive</a>, unzip and copy it
anywhere in your web site. No database required.</p>
<p>If you don't want to installed the full version of maxiGos, you can just download one stand-alone player.
See "Using a stand-alone player" chapter for more details.</p>
<p>Browse your web site to find "_maxigos/en/documentation.php" page (same as this page, but stored on your web site) 
then look at the samples below to verify that all is OK:</p>

<ol class="sample">
<li><a href="../../_sample/neo-classic/neo-classic.php?mxL=en">Neo-classic style</a></li>
<li><a href="../../_sample/classic/classic.php?mxL=en">Classic style</a></li>
<li><a href="../../_sample/tatami/tatami.php?mxL=en">Japanese style</a></li>
<li><a href="../../_sample/rosewood/rosewood.php?mxL=en">Chinese style</a></li>
<li><a href="../../_sample/minimalist/minimalist.php?mxL=en">Minimalist style</a></li>
<li><a href="../../_sample/edit/edit.php?mxL=en">Sgf editor</a></li>
<li><a href="../../_sample/kifu/kifu.php?mxL=en">Kifu</a></li>
<li><a href="../../_sample/texture/texture.php?mxL=en">Texture</a></li>
<li><a href="../../_sample/tactigo/tactigo.php?mxL=en">Tactigo style</a></li>
<li><a href="../../_sample/eidogo/eidogo.php?mxL=en">Eidogo like player</a></li>
<li><a href="../../_sample/rfg/rfg.php?mxL=en">Rfg.jeudego.org style</a></li>
<li><a href="../../_sample/forum/forum.php?mxL=en">Forum.jeudego.org style</a></li>
<li><a href="../../_sample/jdg/jdg.php?mxL=en">Jeudego.org style</a></li>
<li><a href="../../_sample/fm/fm.php?mxL=en">Fm style</a></li><!-- URL too long for mobile screens, use FM -->
<li><a href="../../_sample/tsumego/tsumego.php?mxL=en">Tsumego.org style</a></li>
<li><a href="../../_sample/goinblackandwhite/goinblackandwhite.php?mxL=en">In black and white style 1</a></li>
<li><a href="../../_sample/goinblackandwhite2/goinblackandwhite2.php?mxL=en">In black and white style 2</a></li>
<li><a href="../../_sample/goproblems/goproblems.php?mxL=en">Goproblems.com style</a></li>
<li><a href="../../_sample/anime/anime.php?mxL=en">Anime version</a></li>
<li><a href="../../_sample/tiger/tiger.php?mxL=en">Tiger version</a></li>
<li><a href="../../_sample/iroha/iroha.php?mxL=en">Iroha, old kifu style</a></li>
<li><a href="../../_sample/manuscript/manuscript.php?mxL=en">Kifu, manuscript style</a></li>
<li><a href="../../_sample/pink/pink.php?mxL=en">Valentine's day</a></li>
<li><a href="../../_sample/card/card.php?mxL=en">Playing card colors</a></li>
<li><a href="../../_sample/multiplayer/multiplayer.php?mxL=en">Samples with mgosLoader.js</a></li>
<li><a href="../../_sample/variousSgfSources/variousSgfSources.php?mxL=en">Various ways to include sgf</a></li>
<li><a href="../../_sample/multilanguages/multilanguages.php?mxL=en">Multiple language</a></li>
<li><a href="../../_sample/variousCustomizations/variousCustomizations.php?mxL=en">Various customizations</a></li>
<li><a href="../../_sample/BBCode/BBCode.php?mxL=en">BBCode</a></li>
<li><a href="../../_sample/charset/charset.php?mxL=en">Charset tests</a></li>
<li><a href="../../_sample/rules/rules.php">Rules of go</a></li>
<li><a href="../../_sample/fancy/fancy.php">Fancy go</a></li>
</ol>
<p>The end user has nothing to do on his device. He has just to let javascript enable in his browser.</p>

<h2>How to use maxiGos?</h2>
<p>There are five ways to insert maxiGos in a web page:<p>
<ul>
<li>using a stand-alone player in javascript</li>
<li>using a launcher in php that builds "on the fly" a player</li>
<li>using a loader in javascript that builds "on the fly" a player and downloads it with AJAX</li>
<li>using a plugin (actually there are two plugins available: for joomla and for wordpress)</li>
<li>using a BBCode</li>
</ul>
<h3>Using a stand-alone player</h3>
<p>Use a stand-alone player if you want to keep things simple.</p>
<p>A stand-alone player is a maxiGos player where all the code and ressources
are in a single javascript file.</p>
<p>These files are stored in "_alone" folders of the samples provided with maxiGos.
These samples can be found in the "_sample" folder.</p>
<h4>The code to insert in your web page</h4>
<p>Include in your web page, where you want the player displays something,
&lt;script&gt; and &lt;/script&gt; tags with the javascript file name of a stand-alone player
as value of the "src" attribute,
and put between the tags a sgf file name or a sgf record or an url that generates a sgf record.</p>
<p>If one uses a sgf file name, the code is for instance:</p>
<p class="code">
&lt;script src="xxx/maxigos-neo-classic-problem.js"&gt;<br>data-maxigos-l="en"<br>
yyy/myFirstSgf.sgf<br>
&lt;/script&gt;
</p>
<p>Another way is to use the "data-maxigos-sgf" attribute which value is the sgf file name. For instance:</p>
<p class="code">
&lt;script src="xxx/maxigos-neo-classic-problem.js"<br>data-maxigos-l="en"<br>
data-maxigos-sgf="yyy/myFirstSgf.sgf"&gt;<br>
&lt;/script&gt;
</p>
<p>Of course, you have to adapt the path (here "xxx") before "maxigos-problem.js" script 
which contains the code of a stand-alone player, 
taking into account where you stored it, and where your web page is.
It's a relative path between your web page and the folder that contains the script file.</p>
</p>
<p>You have to adapt the path (here "yyy") before the sgf file name, 
taking into account where you stored it, and where your web page is.
It's a relative path between your web page and the folder that contains the file.</p>
</p>
<p>If one uses a sgf record, the code is for instance:</p>
<p class="code">
&lt;script src="xxx/maxigos-neo-classic-problem.js"&gt;<br>data-maxigos-l="en"<br>
(;FF[4]GM[1]SZ[19]VW[aa:ii]FG[1]AW[ee]AB[de][fe][ed];B[ef]C[Correct!])<br>
&lt;/script&gt;
</p>
<p>Here the CA property is useless since the sgf record has already the same charset as the page.</p>
<p>If one uses the "data-maxigos-sgf" attribute, the code is for instance:</p>
<p class="code">
&lt;script src="xxx/maxigos-neo-classic-problem.js"<br>data-maxigos-l="en"<br>
data-maxigos-sgf="(;FF[4]GM[1]SZ[19]VW[aa:ii]FG[1]AW[ee]AB[de][fe][ed];B[ef]C[Correct!])"&gt;<br>
&lt;/script&gt;
</p>
<p>If one uses an url that generates a sgf record,
one must add the "data-maxigos-source-filter" attribute
which value is a regular expression that matches the url. The code is for instance:</p>
<p class="code">
&lt;script src="xxx/maxigos-neo-classic-problem.js"<br>data-maxigos-l="en"<br>
data-maxigos-source-filter="/download/file\.php\?id=[0-9]+$"&gt;<br>
/download/file.php?id=23<br>
&lt;/script&gt;
</p>
<p>If one uses the "data-maxigos-sgf" attribute, the code is for instance:</p>
<p class="code">
&lt;script src="xxx/maxigos-neo-classic-problem.js"<br>data-maxigos-l="en"<br>
data-maxigos-source-filter="/download/file\.php\?id=[0-9]+$"<br>
data-maxigos-sgf="/download/file.php?id=23"&gt;<br>
&lt;/script&gt;
</p>
<p>The url must respect the "same origin" policy
(i.e. same protocol, same domain, same port as the calling page).</p>
<p class="note">Note 1: an advanced user can make his own stand-alone player using 
the "makeAlone()" function defined in "_php/aloneLib.php" script. 
See also "_php/aloneMaker.php" script which uses this function.</p>
<p class="note">Note 2: one doesn't need to install all maxiGos files on the server to use 
a stand-alone player. 
One just has to copy (anywhere) on the web server the player script file.
If the language is not english or french, one also has to include the internationalization file
of this language (one of those stored in "_i18n" folder).</p>
<p class="note">Note 3: in theory, a stand-alone player should not use external resources (images, ...). 
If an external resource is required, maxiGos looks for it at the place
where this ressource is in the full version.</p>
<h4>Customization</h4>
<p>Customization can be done by using "data-maxigos-xxx" attributes, 
where "xxx" is a maxiGos parameter 
(see "Component parameters" chapter to learn more about maxiGos parameters). 
Because only lower case letters are allowed in attribute names, 
replace any upper case letter by its lower case form prefixed by "-". 
For instance the attribute name for "in3dOn" maxiGos parameter is "data-maxigos-in3d-on".</p>
<p>Many things can be changed using attributes. For instance, below is a way to display a diagram 
without 3D effects and with a transparent goban:</p>
<p class="code">
&lt;script src="../../_alone/maxigos-diagram.js"<br> data-maxigos-l="en"<br>
data-maxigos-in3d-on="0"<br>data-maxigos-goban-bk="transparent"&gt;<br>
(;FF[4]GM[1]SZ[19]VW[aa:ii]FG[1]AW[ee]AB[de][fe][ed])<br>
&lt;/script&gt;
</p>
<p>It is also possible to make some changes in the css file 
(as for goban background in the above sample).</p>
<h3>Using a "launcher" in php</h3>
<p>Use a launcher when you need to heavily customize the player.</p>
<p>The launcher is a php script that generates "on the fly" the javascript code of a maxiGos player,
using data found in a configuration file.</p>
<h4>The line to insert in your web page</h4>
<p>Include in your web page where you want the player displays something a line such as:</p>
<p class="code">&lt;script src="ppp/sgfplayer.php?sgf=&lt;?php print urlencode("qqq/xxx.sgf");?&gt;&amp;cfg=&lt;?php print urlencode("rrr/yyy.cfg");?&gt;&amp;mxL=en"&gt;&lt;/script&gt;</p>
<p>Of course, you have to adapt the path (here "ppp") before the php script (here "sgfplayer.php") 
which is called a launcher, taking into account where you installed maxiGos, and where your web page is.
It's a relative path between the folder where your web page is and the folder where the launcher script file is.</p>
<p>A default launcher is provided with maxiGos and can be found in "_mgos" folder.
In most cases, you don't need to use another launcher.</p>
<p>The url of this launcher can have four parameters: "sgf", "cfg", "mxL" and "plc" (see below).
All are optional.</p>
<p>It's a good idea to apply the "urlencode()" php function to the parameter values,
espcially when they contain a file name prefixed by a path or when they contain a sgf record.</p>
<p>You can add as maxiGos instances as you want in a web page. 
The only limits are those of the web server and of the user device.</p>
<h4>The "sgf" parameter</h4>
<p>The value of the "sgf" parameter in the url of the launcher can be
a sgf file name or a sgf record or an url that generates a sgf record.</p>
<p class="note">Note: instead of using the "sgf" parameter, 
one can insert a sgf file name or a sgf record or an url that generates a sgf record between &lt;script&gt; and &lt;/script&gt; tags, 
or one can specify a sgf file name or a sgf record or an url that generates a sgf record
as the value of the &lt;script&gt; tag attribute "data-maxigos-sgf".</p>
<p>If no sgf is specified, maxiGos displays an empty 19x19 goban.</p>
<p>If the sgf file is used as the "sgf" parameter value, the code is for instance:</p>
<p class="code">sgf=&lt;?php print urlencode("qqq/xxx.sgf");?&gt;</p>
<p>"qqq/" is the relative path between the launcher and the sgf file.
Sgf files can be stored anywhere on the web site.</p>
<p>If a sgf record is used as the "sgf" parameter value, the code is for instance:</p>
<p class="code">sgf=&lt;?php print urlencode("(;FF[4]GM[1]SZ[19];B[qd])");?&gt;</p>
<p>Any valid sgf record can be used.
Remember that the CA property is useless here since the sgf record has already the same charset as the page.
Note that this method works only for short sgf records because in practice 
an url cannot be infinitely long (the maximum length depends of web server settings and web browsers).</p>
<p>If an url is used as the "sgf" parameter value, the code is for instance:</p>
<p class="code">sgf=&lt;?php print urlencode("/download/file.php?id=23");?&gt;</p>
<p>In this case, one must set in the configuration file the maxiGos parameter "sourceFilter" to
a regular expression that matches the url (here, something like "/download/file\.php\?id=[0-9]+$")
or add to the &lt;script&gt; tag the "data-maxigos-source-filter" attribute
which value is this regular expression.</p>
<p>The url must respect the "same origin" policy
(i.e. same protocol, same domain, same port as the calling page).</p>
<h4>The "cfg" parameter</h4>
<p>The "cfg" parameter in the url of the launcher specifies a configuration file.</p>
<p>For instance:</p>
<p class="code">cfg=&lt;?php print urlencode("rrr/yyy.cfg");?&gt;</p>
<p>"rrr/" is a relative pass between the launcher and the configuration file.
Configuration files can be stored anywhere on the web site.</p>
<p>MaxiGos is provided with various configuration files.
They are stored in sub-folders of the "_sample" folder.
It is not very difficult to modify them or to make new ones.</p>
<p>The default value is "../_sample/neo-classic/_cfg/basic.cfg".</p>
<h4>The "mxL" parameter</h4>
<p>The "mxL" parameter in the url of the launcher specifies the language used by maxiGos 
("en" for english, "fr" for french...).</p>
<p>For instance:</p>
<p class="code">mxL=en</p>
<p>The default language is french.</p>
<h4>The "plc" parameter</h4>
<p>The "plc" parameter in the url of the launcher specifies the id of a tag 
whose content is a sgf record or a sgf file name. 
The content is replaced by a maxiGos player that displays this content.</p>
<p>For instance:</p>
<p class="code">
&lt;div id="dia1"&gt;&lt;/div&gt;<br>
&lt;script src="ppp/sgfplayer.php?sgf=&lt;?php print urlencode("qqq/xxx.sgf");?&gt;&amp;cfg=&lt;?php print urlencode("rrr/yyy.cfg");?&gt;&amp;mxL=en&amp;plc=dia1"&gt;&lt;/script&gt;
</p>
<p>This parameter is merely used.</p>
<h4>Customization</h4>
<p>As for stand-alone players, customization can be done by adding "data-maxigos-xxx" attributes 
to the tag where the player displays, 
and where "xxx" is a maxiGos parameter
(see "Customization" in "Using a stand-alone player" above chapter).</p>
<h3>Using a "loader" in javascript</h3>
<p>Use a loader when you need to insert sgf data between other html tag such as &lt;div&gt; and &lt;/div&gt;.
This method is notably slower than others.</p>
<h4>The code to insert in your web page</h4>
<p>Insert for instance in your web page several &lt;div&gt; and &lt;/div&gt; tags
with one attribute named "data-maxigos" which value is a maxiGos configuration name 
(the corresponding configuration file name is the concatenantion of the configuration name and ".cfg").
</p>
<p>Insert a sgf file name or a sgf record or an url that can generate a sgf record
between each of these tags.</p>
<p>Insert "mgosLoader.js" script in the web page after all these tags. 
This script will replace each &lt;div&gt; and &lt;/div&gt; tags contents by a maxiGos player 
that displays those contents.</p>
<p>For instance:</p>
<p class="code">
&lt;div<br>data-maxigos-l="en"<br>data-maxigos="problem"&gt;<br>
(;FF[4]GM[1]SZ[19]VW[aa:lh]FG[1]AW[ee]AB[de][fe][ed];B[ef]C[Correct!])<br>
&lt;/div&gt;<br>
&lt;div<br>data-maxigos-l="en"<br>data-maxigos="basic"&gt;<br>
(;FF[4]GM[1]SZ[19];B[qd])<br>
&lt;/div&gt;<br>
&lt;script src="ppp/_mgos/mgosLoader.js"&gt;&lt;/script&gt;
</p>
<p>Of course, you have to adapt the path (here "ppp/") before "_mgos/mgosLoader.js", 
taking into account where you installed maxiGos, and where your web page is.
It's a relative path between your web page and the launcher script file.</p>
<p>You can use a configuration file which is not in the default configuration folder "_cfg" 
(which means that configuration files are supposed to be in "_sample/neo-classic/_cfg" folder).
To do that, prefix the configuration name by a relative path between the default configuration folder
and the folder where your configuration file is.
For instance, if your configuration file is "comment.cfg" in "_sample/minimalist/_cfg" folder, use:</p>
<p class="code">&lt;div data-maxigos="../../minimalist/_cfg/comment"&gt</p>
<p>If you use a language which is not english or french, 
you have to insert before "mgosLoader.js" an internationalization script.
For instance, if you want to use japanese, insert the "mgos-i18n-ja.js" script which is in the "_i18n" folder
(replace "ppp" by a relative path between your page and the "_i18n" folder):</p>
<p class="code">&lt;script src="ppp/_i18n/mgos-i18n-ja.js"&gt;&lt;/script&gt;</p>
<h4>Customization</h4>
<p>As for stand-alone players, customization can be done by adding "data-maxigos-xxx" attributes 
to the tag where the player displays, and where "xxx" is a maxiGos parameter 
(see "Customization" in the "Using a stand-alone player" above chapter).</p>
<h3>Using a plugin</h3>
<p>See the plugin pages
(for <a href="http://jeudego.org/maxiGos/joomla.php?lang=en">joomla</a>
or for <a href="http://jeudego.org/maxiGos/wordpress.php?lang=en">wordpress</a>)
for more details.</p>
<h3>Using a BBCode</h3>
<p>See the <a href="http://jeudego.org/maxiGos/phpBB.php?lang=en">BBCode page</a>
for more details.</p>
<h3>Internationalization</h3>
<p>The default language for maxiGos is french.</p>
<p>You can change it very easily to english by adding
<span style="color:red;">data-maxigos-l="en"</span> to each tag where a maxiGos player will display
(or by using the mxL parameter when using a launcher such as sgfplayer.php).</p>
<p>For instance:</p>
<p class="code">&lt;script<br>data-maxigos-l="en"<br>src="ppp/maxigos-neo-classic-basic.js"&gt;<br>
qqq/myFirstSgf.sgf<br>
&lt;/script&gt;</p>
<p>Note that maxiGos doesn't translate sgf content. It can just change the language of its own messages, button labels, …</p>
<p>To set another language, insert before the first call to maxiGos scripts 
an internationalization script for this other language.
For instance, for japanese, you can insert the "mgos-i18n-ja.js" script found in "_i18n" folder
using something like 
(replace "ppp" by a relative path between your web page and "_i18n" folder):</p>
<p class="code">&lt;script src="ppp/_i18n/mgos-i18n-ja.js"&gt;&lt;/script&gt;</p>
<p>If you can't or don't want to insert this ligne each time in your web page,
you can simply add the code which is inside the internationalization script of the desired language
at the beginning of the "_js/mgos_lib.js" script file (if you use the full version of maxiGos) 
or at the beginning of javascript script files stored in "_alone" folders
(if you use them instead of the full version of maxiGos).</p>
<p>Then add <span style="color:red;">data-maxigos-l="ja"</span> to each tag where a maxiGos player will display such as:</p>
<p class="code">&lt;script data-maxigos-l="ja" src="ppp/maxigos-neo-classic-basic.js"&gt;qqq/myFirstSgf.sgf&lt;/script&gt;</p>
<p>All internationalization scripts delivered with maxiGos are in "_i18n" folder.
If the internationalization script for a language doesn't exist, 
you can try to create it (try to do it from the japanese one). 
See also "<a href="#faq">Questions and answers</a>" to learn more about that.</p>
<p class="note">Note 1: if you create an internationalization file,
it is a good pratice to choose a ISO 639 language code
(for instance "ja" for japanese, not "jp").</p>
<p class="note">Note 2: when using a launcher (see the corresponding chapter) the easiest way is
to use the "mxL" parameter of the launcher to change the language.
In this case, you don't need to insert explicitly in the page an internationalization file:
the launcher does it automatically for you.</p>
<h2>Advanced usage</h2>
<p class="important">This chapter is for advanced users only.</p>
<h3>Components</h3>
<p>MaxiGos javascript code is split in several file scripts. 
Four of them, mgos_lib.js, mgos_rls.js, mgos_prs.js and mgos.js, 
share common functions.
Other javascript scripts contain component codes (one component per file script). For instance, the goban, the navigation bar or the comment box are components.</p>
<p>The name of a component file starts with "mgos" followed by the component name and the ".js" extension.</p>
<h4>Component list</h4>
<p>The component list is:</p>
<ul>
<li>"AnimatedStone" (to place a stone on the goban using an animation),</li>
<li>"BackToMain" (button to go to the nearest move of the main variation that was not add by the user),</li>
<li>"Comment" (simple comment, displays C sgf property),</li>
<li>"Cut" (button to cut a branch in the game tree, used with "Edit" component),</li>
<li>"Diagram" (to display numbering, marks, labels, ... on the goban),</li>
<li>"Edit" (to modify a sgf file, used with "Info" and "Menu" components),</li>
<li>"File" (to create, open, save or send by email sgf files, used with "Sgf" component, evenly used with "Menu" component),</li>
<li>"Goban" (goban, displays sgf B, W, AB, AW, AE, LB, MA, CR, SQ, TR, TB, TW, ST, PL, and FG properties),</li>
<li>"Goto" (to go to another move in the game tree).</li>
<li>"Guess" (to try to guess the next move),</li>
<li>"Header" (to display sgf EV, RO, PB, PW, BR, WR, DT, PC, RU, TM, KM, HA, RE and GC properties),</li>
<li>"Help" (button to display help),</li>
<li>"Image" (button to generate a png image of the current state of the goban),</li>
<li>"Info" (to change EV, RO, DT, PC, PB, PW, BR, WR, KM, HA, RE, GC, AN, CP, SO, US, RU, TM, OT, ON, BT, WT, GN properties, used most often with "Edit" component),</li>
<li>"Lesson" (to display comments in a balloon, sgf C, BM, DO, IT and TE properties),</li>
<li>"Loop" (to display moves in loop),</li>
<li>"Menu" (menu manager, used with at least one component among "File", "Edit" and "View"),</li>
<li>"MoveInfo" (to display last move information),</li>
<li>"Navigation" (buttons to navigate in the game tree),</li>
<li>"NotSeen" (to display list of moves as in book, need "Diagram" component),</li>
<li>"Options" (to modify numbering, show/hide mark on the last move, ...),</li>
<li>"Pass" (pass button, to make a pass),</li>
<li>"Sgf" (sgf button, sgf record builder),</li>
<li>"Solve" ("retry" and "undo" buttons, provide an answer to the user move if found in the sgf),</li>
<li>"Speed" (loop speed, used with "Loop" component),</li>
<li>"Title" (display sgf EV and RO properties),</li>
<li>"Tree" (game tree),</li>
<li>"Variations" (variation management),</li>
<li>"Version" (displays maxiGos version).</li>
<li>"View" (functions that change view, evenly used with "Menu" component).</li>
</ul>
<h4>How to add a component</h4>
<p>To add a component, just put two lines of code in a configuration file.</p>
<P>The first one is:</p>
<span class="code">$gosParam["Script"][]="_js/mgosComponentName.js";</span> 
<p>The second one is:</p>
<span class="code">$gosParam["xxxBox"][]="ComponentName";</span>
<p>"xxxBox" can be any string terminated by "Box". It is used to group components inside a &lt;div&gt; html tag (see "Style" chapter below).</p>
<h3>Component parameters</h3>
<p>You can modify component parameters in configuration files (those files are written in php).</p>
<p>To set a parameter, the php line is such as:<br><br>
<span class="code">$gosParam["ParameterName"]="ParameterValue";</span></p>
<p>Take care of upper and lower case.</p>
<p>For instance, to remove the mark on the last move, use:<br><br>
<span class="code">$gosParam["markOnLastOn"]=0;</span></p>
<p>If the parameter value is a string, don't forget the double quotes. For instance:<br><br>
<span class="code">$gosParam["initMethod"]="last";</span></p>

<p>Global parameters</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>globalBox</td><td>Always</td><td>Name of the maxiGos global box. If this parameter value is not "GlobalBox",
maxiGos adds to the global box a class named "mx"+(globalBox value)+"Div", and its id will be (id of the maxiGos object)+(globalBox value)+"Div". 
It's useful when mixing maxiGos objects of different kinds in the same page.<br><br>
Note: the id of a maxiGos object is "d" followed by a number incremented by 1 between each maxiGos object when there are several maxigos objects in the same page. 
The first object number is 1. If for instance globalBox is "MyGlobalBox", the global box classes will be .mxGlobalBoxDiv and .mxMyGlobalBoxDiv, 
the id of the first maxiGos object of the page will be "d1MyGlobalBoxDiv".
</td><td>A string followed by "Box"</td><td>"GlobalBox"</td></tr>
<tr><td>initMethod</td><td>Often</td><td>Initial action: display the goban as it was before the "first" move, or after the "last" move, or "loop" (in this case, "Loop" component is required).</td><td>"first", "last" or "loop"</td><td>"first"</td></tr>
<tr><td>customStone</td><td>Merely</td><td>If defined, maxiGos uses png images png to draw stones. 
These images must be in the folder which is "customStone" value 
(relative path between "_maxigos" folder and the folder where these images are stored). 
If 0, maxiGos draws stones using javascript canvas functions (this is the default).<br><br>
These images files must be named "black" or "white" followed by "3d" or "2d" 
followed by their diameter in pixel and by ".png". For instance, a black stone in 3d of 23 pixels diameter must be stored in a file named "black3d23.png". 
Diameters must be between 9 and 31 pixels (for other diameters, maxiGos does a zoom).</td><td>A path to stone image folder</td><td>"undefined"</td></tr>
<tr><td>sgfLoadCoreOnly</td><td>Sometimes</td><td>If 1, one keeps core information only on the game (EV, RO, DT, PC, PB, PW, BR, BW, BT, BW, RU, TM, OT, HA, KM, RE) when decoding sgf.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>sgfSaveCoreOnly</td><td>Sometimes</td><td>If 1, one keeps core information only on the game (EV, RO, DT, PC, PB, PW, BR, BW, BT, BW, RU, TM, OT, HA, KM, RE) when encoding sgf.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>sgfLoadMainOnly</td><td>Sometimes</td><td>If 1, one keeps main variation only when decoding sgf.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>sgfSaveMainOnly</td><td>Sometimes</td><td>If 1, one keeps main variation only when encoding sgf.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>fitParent</td><td>Often</td><td>If 1, maxiGos reduces the goban size
to fit its width to the player html parent width 
(use it in conjonction with fitMax if the goban is not a 19x19 one and if maximizeGobanWidth is not 1).<br>
If 2, maxiGos adapts navigation buttons size to fit navigation width to the goban width 
(assume that the goban is a 19x19 one or that maximizeGobanWidth is 1).<br>
If 3, do both.<br><br>
MaxiGos doesn't know how to compute margins of "GobanDiv", "GobanDiv" parent and "GlobalBoxDiv"
(browsers don't give the same result), and assumes they have not or they have the value "auto".
If these boxes have margin, try to use the "fitDelta" parameter with "fitParent".
</td><td>0 , 1, 2 or 3</td><td>0</td></tr>
<tr><td>fitMax</td><td>Sometimes</td><td>If "fitParent" is 1, maxiGos supposes that the goban 
has never no more than "fitMax" lines in its width (coordinates arround the goban if any count for 1 line)
to check if its width has to be reduced.
</td><td>A number</td><td>21 if coordinates are drawn arround the goban, otherwise 19</td></tr>
<tr><td>fitDelta</td><td>Sometimes</td><td>If "fitParent" is 1, maxiGos substracts fitDelta pixels 
to the width of the html element that contains maxiGos to check if its width has to be reduced.
</td><td>A number</td><td>0</td></tr>
<tr><td>htmlParenthesis</td><td>Sometimes</td><td>If 1, maxiGos replace "&amp;#40;" and "&amp;#41;" by "(" and ")" in sgf source
when it is inserted between html tags where the player displays
(useful for instance when using maxiGos in a forum powered by phpBB3 which has an editor that replaces "(" and ")" by "&amp;#40;" and "&amp;#41;").
</td><td>0 or 1</td><td>0</td></tr>
<tr><td>sourceFilter</td><td>Sometimes</td><td>A regular expression that the sgf source has to match
when it is inserted between html tags where the sgf player displays
(useful for instance to discard unwanted sgf source inserted by a user in a forum).
</td><td>Regular expression</td><td>Empty string</td></tr>
<tr><td>htmlBr</td><td>Merely</td><td>If 1, any &lt;br&gt; found in the Sgf is displayed as a line break (instead of displaying a "&lt;br&gt;" string).<br><br>
Note: when a sgf record (but not a file name or an url) is inserted between html tags where the sgf player displays,
by default maxiGos replaces any &lt;br&gt; by a line break
(because framework editors may add some &lt;br&gt; when a user inserts a line break in his text).
To prevent this behavior, set "htmlBr" explicitly to 0.
</td><td>0 or 1</td><td>"undefined"</td></tr>
<tr><td>htmlSpan</td><td>Merely</td><td>If 1, any &lt;span&gt; or &lt;/span&gt; found in the Sgf are displayed as html tags
(instead of displaying "&lt;span&gt;" or "&lt;/span&gt;" strings).
The tags can have only a "class" attribute which name contains letters, numbers, "_" and "-". 
</td><td>0 or 1</td><td>"undefined"</td></tr>
<tr><td>htmlDiv</td><td>Merely</td><td>If 1, any &lt;div&gt; or &lt;/div&gt; found in the Sgf are displayed as html tags
(instead of displaying "&lt;div&gt;" or "&lt;/div&gt;" strings).
The tags can have only a "class" attribute which name contains letters, numbers, "_" and "-". 
</td><td>0 or 1</td><td>"undefined"</td></tr>
<tr><td>htmlP</td><td>Merely</td><td>If 1, any &lt;p&gt; or &lt;/p&gt; found in the Sgf are displayed as html tags
(instead of displaying "&lt;p&gt;" or "&lt;/p&gt;" strings).
The tags can have only a "class" attribute which name contains letters, numbers, "_" and "-".<br><br>
Note: when a sgf record (but not a file name or an url) is inserted between html tags where the sgf player displays,
by default maxiGos suppresses any &lt;p&gt; and replaces any &lt;/p&gt; by a double line break
(because framework editors may add some &lt;/p&gt;&lt;p&gt; when a user inserts line breaks in his text).
To prevent this behavior, set "htmlP" explicitly to 0 or 1.
</td><td>0 or 1</td><td>"undefined"</td></tr>
</table>

<p>"AnimatedStone" component</p>
<p>By default, there is only one animation available: a translation from the corner of the goban
to the point where the stone has to be placed.</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>animatedStoneTime</td><td>Sometimes</td><td>Reference time used to compute duration of 
stone translation when placing it on the goban. The actual translation time depends of the distance
between the starting point and the ending point of the translation.<br><br>
Its default value is the value of the "loopTime" parameter if "Loop" component is in use, 
otherwise 1000 ms.
</td><td>Number</td><td>1000</td></tr>
</table>

<p>"Comment" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>adjustCommentWidth</td><td>Often</td><td>
If 1, maxiGos adjusts the component box width to goban width.
If equal to another box name, maxiGos adjusts the component box width to this other box width.
</td><td>0, 1 or box name</td><td>0</td></tr>
<tr><td>adjustCommentHeight</td><td>Often</td><td>
If 1, maxiGos adjusts the component box height to goban height.
If equal to another box name, maxiGos adjusts the component box height to this other box height.
</td><td>0, 1 or box name</td><td>0</td></tr>
<tr><td>headerInComment</td><td>Often</td><td>If 1, maxiGos displays header information in comment box.<br><br>
The "Header" component has to be in use too, otherwise this parameter has no effect.
</td><td>0 or 1</td><td>0</td></tr>
<tr><td>allInComment</td><td>Merely</td><td>If 1, maxiGos concats all comment from game root to current move and displays it in comment box.</td><td>0 or 1</td><td>0</td></tr>
</table>

<p>"Diagram" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>numberingOn</td><td>Often</td><td>If 1, maxiGos displays numbering. If 2, maxiGos displays numbering modulo 100. 
If undefined, maxiGos gets its value from the sgf PM property</td><td>0, 1 or 2</td><td>"undefined"</td></tr>
<tr><td>indicesOn</td><td>Often</td><td>If 1, maxiGos displays indices arround the goban. 
If undefined, maxiGos gets its value from the sgf FG property</td><td>0, or 1</td><td>"undefined"</td></tr>
<tr><td>asInBookOn</td><td>Often</td><td>If 1, maxiGos displays stones as in book (i.e. it doesn't remove stones captured by numbered stones). 
If undefined, maxiGos gets its value from the sgf FG property</td><td>0 or 1</td><td>"undefined"</td></tr>
<tr><td>marksAndLabelsOn</td><td>Often</td><td>If 1, maxiGos displays marks and labels</td><td>0 or 1</td><td>0</td></tr>
<tr><td>numAsMarkOnLastOn</td><td>Merely</td><td>If 1, maxiGos the move number as mark on last move.</td><td>0 or 1</td><td>0</td></tr>
</table>

<p>"Edit" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>checkRulesOn</td><td>Often</td><td>
If 2, maxiGos verifies if the move is legal (not on an occupied point, not a suicide, and not japanese ko).<br><br>
If 1, maxiGos verifies if the move is placed on an empty point.<br><br>
If not 1 nor 2, maxiGos allows the user to play anywhere.<br><br>
The check is applied to user move only.
If the move is in the sgf, maxiGos always places it on the goban. 
</td><td>0, 1, 2 or undefined</td><td>"undefined"</td></tr>
</table>

<p>"File" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>openOnly</td><td>Sometimes</td><td>If 1, maxiGos displays only the "Open" button.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideNew</td><td>Merely</td><td>If 1, maxiGos hides "new" button.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideOpen</td><td>Merely</td><td>If 1, maxiGos hides "open" button.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideSave</td><td>Merely</td><td>If 1, maxiGos hides "Save" button.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideSend</td><td>Merely</td><td>If 1, maxiGos hides "Send" button.</td><td>0 or 1</td><td>0</td></tr>
</table>

<p>"Goban" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>maximizeGobanWidth</td><td>Often</td><td>If 1, maxiGos gives to goban box (div.mxGobanDiv) the width of a 19x19 goban 
even if the displayed one is smaller or partially visible.
</td><td>0 or 1</td><td>0</td></tr>
<tr><td>maximizeGobanHeight</td><td>Often</td><td>If 1, maxiGos gives to goban box (div.mxGobanDiv) the height of a 19x19 goban 
even if the displayed one is smaller or partially visible.
</td><td>0 or 1</td><td>0</td></tr>
<tr><td>markOnLastOn</td><td>Often</td><td>If 1, maxiGos displays a mark on the last move</td><td>0 or 1</td><td>0</td></tr>
<tr><td>markOnLastColor</td><td>Often</td><td>Color of the mark on the last move.</td><td>Css color</td><td>"#000" on white stone or "fff" on black stone</td></tr>
<tr><td>in3dOn</td><td>Always</td><td>If 1, maxiGos displays the stones with a 3d effect</td><td>0 or 1</td><td>0</td></tr>
<tr><td>stretchOn</td><td>Always</td><td>If 1, the goban height is 10% more than its width</td><td>0 or 1</td><td>0</td></tr>
<tr><td>gobanFs</td><td>Merely</td><td>Goban font size. This parameter is merely used. 
In practice, it's better to set the css "font-size" property of the goban canvas tag (for instance in a css file).</td>
<td>Css font size</td><td>None</td></tr>
<tr><td>gobanBk</td><td>Merely</td><td>Goban background color. This parameter is merely used. 
In practice, it's better to let this color set to transparent, 
and to set the css 'background' property of the goban canvas tag (for instance in a css file). 
</td><td>Css color</td><td>"transparent"</td></tr>
<tr><td>lineColor</td><td>Merely</td><td>Line color. This parameter is merely used. 
In practice, it is better to set the css 'color' property of the goban canvas tag (for instance in a css file).</td>
<td>Css color</td><td>Value of the css color property of the goban canvas tag</td></tr>
<tr><td>starColor</td><td>Merely</td><td>Color of hoshi.</td>
<td>Css color</td><td>Color of goban line</td></tr>
<tr><td>outsideColor</td><td>Merely</td><td>Color of indice character.</td>
<td>Css color</td><td>Color of goban line</td></tr>
<tr><td>outsideBk</td><td>Merely</td><td>Color of indice background.
</td><td>Css color</td><td>"transparent"</td></tr>
<tr><td>outsideFontWeight</td><td>Merely</td><td>Font weight of indice character.
</td><td>"normal" or "bold"</td><td>"normal"</td></tr>
<tr><td>focusColor</td><td>Sometimes</td><td>Color of token drawn on goban that shows point on focus when user navigates using a keyboard.</td>
<td>Css color</td><td>"#f00"</td></tr>
<tr><td>lineWidth</td><td>Merely</td><td>Goban line width.</td>
<td>A number</td><td>about 1 + 1/42 by stone diameter</td></tr>
<tr><td>starRadius</td><td>Sometimes</td><td>Goban star point diameter.</td>
<td>A number</td><td>about 1.5 or 1/10 by by stone diameter</td></tr>
<tr><td>focusLineWidth</td><td>Merely</td><td>Line width of token drawn on goban that shows point on focus when user navigates using a keyboard.</td>
<td>A number</td><td>2 by goban line width</td></tr>
<tr><td>silentFail</td><td>Sometimes</td><td>If 1, maxiGos doesn't display any visual effect when the user clicks on a point where there is nothing to display.</td><td>0 or 1</td><td>0</td></tr>
</table>
<p>Note: to change goban background color, goban line color, stone radius, 
color or size of icon navigation buttons, it's better to use css (see "Style" chapter).</p>

<p>"Goto" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>gotoBoxOn</td><td>Often</td><td>If 1, maxiGos displays a move bar in the component box.<br><br>
Otherwise, maxiGos doesn't display the component box.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>gotoInputOn</td><td>Often</td><td>If 1, maxiGos adds an input field for changing the last displayed move (require "Diagram" component).</td><td>0 or 1</td><td>0</td></tr>
<tr><td>gotoInputPosition</td><td>Sometimes</td><td>If gotoInputOn is 1, maxiGos inserts the input field 
for changing the last displayed move at the value of gotoInputPosition in the navigation bar.</td><td>"left","right","center"</td><td>"center"</td></tr>
<tr><td>adjustGotoWidth</td><td>Sometimes</td><td>
If 1, maxiGos adjusts component box width to goban width.
If equal to another box name, maxiGos adjusts the component box height to this other box height.
</td><td>0, 1 or box name</td><td>0</td></tr>
</table>

<p>"Guess" component</p>
<table class="params">
<tr><td>canPlaceGuess</td><td>Often</td><td>If 1, maxiGos places the user move if it is in the sgf tree. 
This parameter is ignored if "canPlaceVariation" is 1.
</td><td>0 or 1</td><td>0</td></tr>
<tr><td>guessBoxOn</td><td>Often</td><td>If 1, maxiGos displays a guess meter in the component box that indicates the distance between the user click and continuation moves found in the sgf.
</td><td>0 or 1</td><td>0</td></tr>
</table>

<p>"Header" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>headerBoxOn</td><td>Merely</td><td>If 1, display header in component box 
(header is the concatenation of sgf information properties: EV, RO, DT, PC, ...).<br><br>
If 0, header can be displayed over goban by a click on "Header" button (this button is visible in component box only if 
headerBtnOn is 1), 
or header can be displayed in comment box if headerInComment is 1.
</td><td>0 or 1</td><td>0</td></tr>
<tr><td>headerBtnOn</td><td>Often</td><td>If 1, maxiGos displays "Header" button in component box instead of header content itself. 
A click on this button displays header over goban. This parameter is ignored if headerBoxOn is 1.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>adjustHeaderWidth</td><td>Sometimes</td><td>
If 1, maxiGos adjusts the component box width to goban width.
If equal to another box name, maxiGos adjusts the component box width to this other box width.
This parameter is ignored if headerBoxOn is 0.
</td><td>0, 1 or box name</td><td>0</td></tr>
<tr><td>adjustHeaderHeight</td><td>Merely</td><td>
If 1, maxiGos adjusts the component box height to goban height.
If equal to another box name, maxiGos adjusts the component box height to this other box height.
This parameter is ignored if headerBoxOn is 0.
</td><td>0, 1 or box name</td><td>0</td></tr>
<tr><td>headerLabel_&lt;xy&gt;</td><td>Sometimes</td><td>"Header" button label. 
&lt;xy&gt; is a language code similar to those used in "mxL" (for instance "en", "fr"...). If the language code contains a "-" (such as "zh-tw"), replace it by "_".
</td><td>String</td><td>"Header" (or its translation)</td></tr>
<tr><td>hideTitle</td><td>Merely</td><td>If 1, maxiGos doesn't display title.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideBlack</td><td>Merely</td><td>If 1, maxiGos doesn't display black name and level.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideWhite</td><td>Merely</td><td>If 1, maxiGos doesn't display white name and level.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideDate</td><td>Merely</td><td>If 1, maxiGos doesn't display date.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hidePlace</td><td>Sometimes</td><td>If 1, maxiGos doesn't display place.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideRules</td><td>Sometimes</td><td>If 1, maxiGos doesn't display rules type.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideTimeLimits</td><td>Sometimes</td><td>If 1, maxiGos doesn't display time limits.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideKomi</td><td>Merely</td><td>If 1, maxiGos doesn't display komi.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideHandicap</td><td>Merely</td><td>If 1, maxiGos doesn't display handicap.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideResult</td><td>Merely</td><td>If 1, maxiGos doesn't display result.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideGeneralComment</td><td>Sometimes</td><td>If 1, maxiGos doesn't display general comment.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideNumOfMoveLabel</td><td>Sometimes</td><td>If 1, maxiGos doesn't display "Number of move:" before the number of move.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideResultLabel</td><td>Sometimes</td><td>If 1, maxiGos doesn't display "Result:" before the result.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideNumOfMoves</td><td>Sometimes</td><td>If 1, maxiGos doesn't display number of move.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>concatKomiToResult</td><td>Sometimes</td><td>If 1, maxiGos concats komi to result.</td><td>0 or 1</td><td>1</td></tr>
<tr><td>concatHandicapToResult</td><td>Sometimes</td><td>If 1, maxiGos concats handicap to result.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>concatNumOfMovesToResult</td><td>Sometimes</td><td>If 1, maxiGos concats number of move to result.</td><td>0 or 1</td><td>0</td></tr>
</table>
<p>Note 1: if headerBoxOn and headerBtnOn are both 0, maxiGos doesn't display "Header" component box.
But it can still display header in "Comment" component box if "headerInComment" is set to 1.</p>
<p>Note 2: difference between "Header" component and "Info" component is that
one can change header content using "Info" component
while "Header" component just displays its content.</p>

<p>"Help" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>helpSource_&lt;xy&gt;</td><td>Allways</td><td>Name of help file.
&lt;xy&gt; is a language code similar to those used in "mxL" (for instance "en", "fr"...). 
If the language code contains a "-" (such as "zh-tw"), replace it by "_".
Help files are supposed to be in "_maxigos/_help" folder. The help file name must start by "help".
</td><td>File name</td><td>"undefined"</td></tr>
</table>

<p>"Info" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>infoBoxOn</td><td>Merely</td><td>If 1, maxiGos displays "Informations" form in component box 
("Informations" form allows to modify sgf information properties: EV, RO, DT, PC, ...).<br><br>
If 0, "Informations" form can be displayed over goban by a click on "Info"button (this button is visible in component box only if infoBtnOn is 1), 
or using "Header" tool of "Edit" component.
</td><td>0 or 1</td><td>0</td></tr>
<tr><td>infoBtnOn</td><td>Merely</td><td>If 1, maxiGos displays "Info" button in component box instead of "Informations" form itself. 
A click on this button displays "Informations" form over goban. This parameter is ignored if infoBoxOn is 1.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>adjustInfoWidth</td><td>Merely</td><td>
If 1, maxiGos adjusts the component box width to goban width.
If equal to another box name, maxiGos adjusts the component box width to this other box width.
This parameter is ignored if infoBoxOn is 0.
</td><td>0, 1 or box name</td><td>0</td></tr>
<tr><td>adjustInfoHeight</td><td>Merely</td><td>
If 1, maxiGos adjusts the component box height to goban height.
If equal to another box name, maxiGos adjusts the component box height to this other box height.
This parameter is ignored if infoBoxOn is 0.
</td><td>0, 1 or box name</td><td>0</td></tr>
<tr><td>infoLabel_&lt;xy&gt;</td><td>Merely</td><td>Label of "Info" button. 
&lt;xy&gt; is a language code similar to those used in "mxL" (for instance "en", "fr"...). If the language code contains a "-" (such as "zh-tw"), replace it by "_".
</td><td>String</td><td>"Info" (or its translation)</td></tr>
</table>
<p>Note 1: if infoBoxOn and infoBtnOn are both 0, maxiGos doesn't display "Info" component box. 
But it can still display "Informations" form over goban using the "Header" tool of "Edit" component.
<p>Note 2: difference between "Header" component and "Info" component is 
that one can change header content using "Info" component while "Header" component just displays its content.</p>

<p>"Lesson" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>adjustLessonWidth</td><td>Merely</td><td>
If 1, maxiGos adjusts the component box width to goban width.
If equal to another box name, maxiGos adjusts the component box width to this other box width.
</td><td>0, 1 or box name</td><td>0</td></tr>
<tr><td>adjustLessonHeight</td><td>Often</td><td>
If 1, maxiGos adjusts the component box height to goban height.
If equal to another box name, maxiGos adjusts the component box height to this other box height.
</td><td>0, 1 or box name</td><td>0</td></tr>
</table>

<p>"Loop" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>loopBtnOn</td><td>Often</td><td>If 1, maxiGos displays a "Loop" button in component box.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>loopTime</td><td>Merely</td><td>Reference time used to compute iddle time between the display of two sgf nodes.
Iddle time T is longer when a comment of L bytes length is found in the node in order to let the user enough time to read the comment. T is computed by the following formula: 
T=L*loopTime/20+loopTime
</td><td>Number</td><td>1000</td></tr>
<tr><td>initialLoopTime</td><td>Merely</td><td>Reference time to compute iddle time of the initial node.
This iddle time is computed by the following formula: 
T=initialLoopTime*loopTime/1000.<br><br>
If this parameter is undefined, one used the same iddle time as for other nodes.
</td><td>Number</td><td>"undefined"</td></tr>
<tr><td>finalLoopTime</td><td>Merely</td><td>Reference time to compute iddle time of the final node.
This iddle time is computed by the following formula: 
T=finalLoopTime*loopTime/1000.<br><br>
If this parameter is undefined, one used the same iddle time as for other nodes.
</td><td>Number</td><td>"undefined"</td></tr>
<tr><td>mainVariationOnlyLoop</td><td>Sometimes</td><td>If 1, maxiGos displays only the main variation.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>loopBtnPosition</td><td>Sometimes</td><td>If loopBtnOn is 1, maxiGos inserts "Loop" button
in navigation bar at the position specified by loopBtnPosition.</td><td>"left","right","center"</td><td>"right"</td></tr>
</table>

<p>"Menu" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>menus</td><td>Always</td><td>Menu list (values among "File","Edit","View" ... "Window").<br><br>
If "File" is in the list, "File" component must be in use.<br><br>
If "Edit" is in the list, "Edit" component must be in use.<br><br>
If "View" is in the list, "View" component must be in use.
</td><td>Comma-separated string (classic one is "File,Edit,View,Window")</td><td>Empty string</td></tr>
</table>

<p>"Navigation" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>navigationBtnFs</td><td>Merely</td><td>Navigation button font size. This parameter is merely used. 
In practice, it's better to set the css "font-size" property of the navigation button canvas tag (for instance in a css file).</td>
<td>Css font size</td><td>"undefined"</td></tr>
<tr><td>navigationBtnColor</td><td>Merely</td><td>Navigation button color. This parameter is merely used. 
In practice, since this color is by default the css color property of the navigation button canvas tag, 
it is more elegant to set this css property (for instance in a css file).</td>
<td>Css color value</td><td>"undefined"</td></tr>
<tr><td>adjustNavigationWidth</td><td>Sometimes</td><td>
If 1, maxiGos adjusts the component box width to goban width.
If equal to another box name, maxiGos adjusts the component box width to this other box width.
</td><td>0, 1 or box name</td><td>0</td></tr>
</table>

<p>"NotSeen" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>adjustNotSeenWidth</td><td>Often</td><td>
If 1, maxiGos adjusts the component box width to goban width.
If equal to another box name, maxiGos adjusts the component box width to this other box width.
</td><td>0, 1 or box name</td><td>0</td></tr>
</table>

<p>"Options" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>optionBtnOn</td><td>Often</td><td>If 1, maxiGos displays "Options" button in component box instead of "Options" form itself. 
A click on this button displays "Options" form over goban. This parameter is ignored if optionBoxOn is 1.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>optionLabel_&lt;xy&gt;</td><td>Sometimes</td><td>"Options" button label. 
&lt;xy&gt; is a language code similar to those used in "mxL" (for instance "en", "fr"...). If the language code contains a "-" (such as "zh-tw"), replace it by "_".
</td><td>String</td><td>"Options" (or its translation)</td></tr>
<tr><td>optionBoxOn</td><td>Sometimes</td><td>If 1, maxiGos displays "Options" form in component box.<br><br> 
If optionBoxOn is 0 and optionBtnOn is 1, this form can still be displayed over goban by a click on "Options" button.
</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideMarkOnLastOn</td><td>Merely</td><td>If 1, maxiGos hides "markOnLastOn" checkbox.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideNumberingOn</td><td>Merely</td><td>If 1, maxiGos hides "numberingOn" checkbox.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideMarksAndLabelsOn</td><td>Merely</td><td>If 1, maxiGos hides "marksAndLabelsOn" checkbox.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideAsInBookOn</td><td>Merely</td><td>If 1, maxiGos hides "asInBookOn" checkbox.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideVariationMarksOn</td><td>Merely</td><td>If 1, maxiGos hides "variationMarksOn" checkbox.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideSiblingsOn</td><td>Merely</td><td>If 1, maxiGos hides "siblingsOn" checkbox.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideIndicesOn</td><td>Merely</td><td>If 1, maxiGos hides "indicesOn" checkbox.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideIn3dOn</td><td>Merely</td><td>If 1, maxiGos hides "in3dOn" checkbox.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideVariationOrGuess</td><td>Merely</td><td>If 1, maxiGos hides "canPlaceVariation" and "canPlaceGuess" radio buttons.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideLoopTime</td><td>Merely</td><td>If 1, maxiGos hides "loopTime" text input.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideAnimatedStoneOn</td><td>Merely</td><td>If 1, maxiGos hides "animatedStoneOn" checkbox.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideAnimatedStoneTime</td><td>Merely</td><td>If 1, maxiGos hides "animatedStoneTime" text input.</td><td>0 or 1</td><td>0</td></tr>
</table>

<p>"Pass" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>passLabel_&lt;xy&gt;</td><td>Sometimes</td><td>"Pass" button label. 
&lt;xy&gt; is a language code similar to those used in "mxL" (for instance "en", "fr"...). If the language code contains a "-" (such as "zh-tw"), replace it by "_".
</td><td>String</td><td>"Pass" (or its translation)</td></tr>
<tr><td>canPassOnlyIfPassInSgf</td><td>Merely</td><td>If 1, maxiGos enables "Pass" button only if there is a possible pass in sgf record as next move.</td><td>0 or 1</td><td>0</td></tr>
</table>

<p>"Sgf" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>sgfBtnOn</td><td>Often</td><td>If 1, display a "SGF" button in the component box.
One uses 0 when one needs to use functions of the component but not the component itself.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>noSgfDialog</td><td>Sometimes</td><td>If 1, maxiGos dowloads sgf without displaying any dialog when the user clicks on sgf button.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>sgfLabel_&lt;xy&gt;</td><td>Sometimes</td><td>"Pass" button label. 
&lt;xy&gt; is a language code similar to those used in "mxL" (for instance "en", "fr"...). If the language code contains a "-" (such as "zh-tw"), replace it by "_".
</td><td>String</td><td>"SGF" (or its translation).</td></tr>
<tr><td>toCharset</td><td>Merely</td><td>Values of this parameter are charset codes ("UTF-8", "Big5", "GB13080", "Shift_JIS", ...).
This parameter is used only to generate sgf (its value replaces the initial value of the CA property in the sgf). 
It does nothing when reading or displaying a sgf. 
Its value can be different from the charset of the page. In practice, it is better that
its value be "UTF-8" (the best choice) or evenly the charset of the page.
</td><td>A charset code</td><td>"UTF-8"</td></tr>
<tr><td>noSgfDialog</td><td>Sometimes</td><td>If 1, maxiGos allows to modify sgf in the sgf component dialog box.</td><td>0 or 1</td><td>0</td></tr>
</table>

<p>"Solve" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>canRetry</td><td>Often</td><td>If 1, maxiGos displays a retry button.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>canUndo</td><td>Often</td><td>If 1, maxiGos displays an undo button.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>initialMessage_&lt;xy&gt;</td><td>Sometimes</td><td>
Text displayed in comment box if the current node has no C property
and if the initial position is shown. 
&lt;xy&gt; is a language code similar to those used in "mxL" (for instance "en", "fr"...). 
If the language code contains a "-" (such as "zh-tw"), replace it by "_".
</td><td>String</td><td>"undefined"</td></tr>
<tr><td>nowhereMessage_&lt;xy&gt;</td><td>Sometimes</td><td>
Text displayed in comment box 
if the user clicks on a point which is not a continuation in the sgf. 
&lt;xy&gt; is a language code similar to those used in "mxL" (for instance "en", "fr"...). If the language code contains a "-" (such as "zh-tw"), replace it by "_".
</td><td>String</td><td>"undefined"</td></tr>
<tr><td>endMessage_&lt;xy&gt;</td><td>Sometimes</td><td>
Text displayed in comment box 
if the user clicks on the goban and there is no follow up in the sgf. 
&lt;xy&gt; is a language code similar to those used in "mxL" (for instance "en", "fr"...). If the language code contains a "-" (such as "zh-tw"), replace it by "_".
</td><td>String</td><td>"undefined"</td></tr>
<tr><td>forbiddenMessage_&lt;xy&gt;</td><td>Sometimes</td><td>
Text displayed in comment box 
if the user tries to play a forbidden move (occupied point, suicide and simple ko only). 
&lt;xy&gt; is a language code similar to those used in "mxL" (for instance "en", "fr"...). If the language code contains a "-" (such as "zh-tw"), replace it by "_".
</td><td>String</td><td>"undefined"</td></tr>
<tr><td>failMessage_&lt;xy&gt;</td><td>Sometimes</td><td>
Text displayed in comment box if the current node has no C property 
and is the last one, and if the last move was play by maxiGos. 
If for some reason, you don't want that this message displays for one specific node only,
just add a C property to this node in the sgf.
&lt;xy&gt; is a language code similar to those used in "mxL" (for instance "en", "fr"...). 
If the language code contains a "-" (such as "zh-tw"), replace it by "_".
</td><td>String</td><td>"undefined"</td></tr>
<tr><td>successMessage_&lt;xy&gt;</td><td>Sometimes</td><td>
Text displayed in comment box if the current node has no C property 
and is the last one, and if the last move was play by the user. 
If for some reason, you don't want that this message displays for one specific node only,
just add a C property to this node in the sgf.
&lt;xy&gt; is a language code similar to those used in "mxL" (for instance "en", "fr"...). 
If the language code contains a "-" (such as "zh-tw"), replace it by "_".
</td><td>String</td><td>"undefined"</td></tr>
<tr><td>specialMoveMatch</td><td>Sometimes</td><td>
In theory, the standard way to represent a move played elsewhere (i.e. a tenuki) is 
to put in the sgf two consecutive moves of the opposite color. However, for historical reasons,
some sgf files use other methods to do that such as inserting pass moves, 
or moves played in the invisible part of the goban, or moves played outside the goban.
This parameter is designed to address these cases.<br><br>
If 0, maxiGos places the user move if it matches one of the continuation moves in the sgf 
or if two consecutive moves of the opposite color are found in the sgf.<br><br>
If 1, maxiGos places the user move if it matches one of the continuation moves in the sgf 
or if two consecutive moves of the opposite color are found in the sgf
or if one move in the sgf coordinates are outside the goban (such B[zz] or W[zz] on a 19x19 for instance).<br><br>
If 2, maxiGos places the user move if it matches one of the continuation moves in the sgf 
or if two consecutive moves of the opposite color are found in the sgf
or if one move in the sgf coordinates are outside the goban (such B[zz] or W[zz] on a 19x19 for instance) 
or in the invisble part of the goban (when a VW property is used).<br><br>
If 3, maxiGos places the user move if it matches one of the continuation moves in the sgf 
or if two consecutive moves of the opposite color are found in the sgf
or if one move in the sgf coordinates are outside the goban (such B[zz] or W[zz] on a 19x19 for instance) 
or in the invisble part of the goban  (when a VW property is used) or is a pass.<br><br>
</td><td>0, 1, 2 or 3</td><td>0</td></tr>
<tr><td>adjustSolveWidth</td><td>Sometimes</td><td>
If 1, maxiGos adjusts the component box width to goban width.
If equal to another box name, maxiGos adjusts the component box width to this other box width.
</td><td>0, 1 or box name</td><td>0</td></tr>
</table>

<p>"Speed" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>adjustSpeedBarWidth</td><td>Often</td><td>
If 1, maxiGos adjusts the component box width to goban width.
If equal to another box name, maxiGos adjusts the component box width to this other box width.
</td><td>0, 1 or box name</td><td>0</td></tr>
</table>

<p>"Title" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>titleBoxOn</td><td>Often</td><td>If 1, display title in component box.
One uses 0 when one needs to use functions of the component but not the component itself.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>translateTitleOn</td><td>Sometimes</td><td>If 1, maxiGos try to translate the title.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideEmptyTitle</td><td>Merely</td><td>If 1, maxiGos hides title box if it contains an empty string.</td><td>0 or 1</td><td>0</td></tr>
</table>

<p>"Tree" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>treeFocusColor</td><td>Often</td><td>Background color in the tree of the node under focus.</td>
<td>Css color</td><td>"#f00"</td></tr>
<tr><td>markCommentOnTree</td><td>Merely</td><td>If 1, maxiGos replaces in the tree commented move numbers by a ?.
</td><td>0 or 1</td><td>0</td></tr>
<tr><td>adjustTreeWidth</td><td>Sometimes</td><td>
If 1, maxiGos adjusts the component box width to goban width.
If equal to another box name, maxiGos adjusts the component box width to this other box width.
</td><td>0, 1 or box name</td><td>0</td></tr>
<tr><td>adjustTreeHeight</td><td>Sometimes</td><td>
If 1, maxiGos adjusts the component box height to goban height.
If 2, maxiGos adjusts the parent component box height to the parent goban box height.
If equal to another box name, maxiGos adjusts the component box height to this other box height.
</td><td>0, 1, 2 or box name</td><td>0</td></tr>
</table>

<p>"Variations" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>variationMarksOn</td><td>Often</td><td>If 1, maxiGos displays mark on variation. 
If 0, it hides them. If "undefined", maxiGos displays mark on variation as specifyied by the SGF ST property.</td><td>0, 1 or "undefined"</td><td>"undefined"</td></tr>
<tr><td>siblingsOn</td><td>Merely</td><td>If 1, maxiGos displays variations of current node, otherwise of the next node. 
If "undefined", maxiGos displays variations as specified by the SGF ST property. </td><td>0, 1 or "undefined"</td><td>"undefined"</td></tr>
<tr><td>variationsBoxOn</td><td>Often</td><td>Display variation bar.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>hideSingleVariationMarkOn</td><td>Often</td><td>If 1, maxiGos doesn't display mark on variation when there is only one variation. 
If 0, maxiGos displays mark on variation even if there is only one variation.</td><td>0 or 1</td><td>0</td></tr>
<tr><td>variationColor</td><td>Often</td><td>Text color of variation mark.</td><td>Css color</td><td>Color of goban line</td></tr>
<tr><td>variationOnFocusColor</td><td>Often</td><td>Text color of the variation on focus mark.</td><td>Css color</td><td>variationColor</td></tr>
<tr><td>variationBk</td><td>Often</td><td>Background color of variation mark.</td><td>Css color</td><td>"transparent"</td></tr>
<tr><td>variationOnFocusBk</td><td>Often</td><td>Background color of the variation on focus mark.</td><td>Css color</td><td>variationBk</td></tr>
<tr><td>variationStrokeBk</td><td>Merely</td><td>Background stroke color of variation mark.</td><td>Css color</td><td>"transparent"</td></tr>
<tr><td>variationOnFocusStrokeBk</td><td>Merely</td><td>Background stroke color of the variation on focus mark.</td><td>Css color</td><td>variationStrokeBk</td></tr>
<tr><td>variationStrokeColor</td><td>Merely</td><td>Stroke color of variation mark.</td><td>Css color</td><td>"transparent"</td></tr>
<tr><td>variationOnFocusStrokeColor</td><td>Merely</td><td>Stroke color of variation on focus mark.</td><td>Css color</td><td>variationStrokeColor</td></tr>
<tr><td>variationFontWeight</td><td>Often</td><td>Font weight of variation mark.</td><td>"normal" or "bold"</td><td>"normal"</td></tr>
<tr><td>variationOnFocusFontWeight</td><td>Merely</td><td>Font weight of variation on focus mark.</td><td>"normal" or "bold"</td><td>variationFontWeight</td></tr>
<tr><td>canPlaceVariation</td><td>Often</td><td>If 1, when the user clicks on an intersection, maxiGos places a move on this intersection 
if there is such a move in the sgf tree. If the move is not in the sgf tree ( 
and if ST value is even), maxiGos adds the move in the sgf tree. If 0, a user click on an intersection doesn't place a move on it.
</td><td>0 or 1</td><td>0</td></tr>
<tr><td>variationMarkSeed</td><td>Sometimes</td><td>First variation mark. 
By default, maxiGos uses number as variation mark starting with 1. To use letter as variation mark, 
just set this parameter value to "a" or "A".
</td><td>Character</td><td>"1"</td></tr>
<tr><td>adjustVariationsWidth</td><td>Sometimes</td><td>
If 1, maxiGos adjusts the component box width to goban width.
If equal to another box name, maxiGos adjusts the component box width to this other box width.
</td><td>0, 1 or box name</td><td>0</td></tr>
</table>

<p>"Version" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>adjustVersionWidth</td><td>Sometimes</td><td>
If 1, maxiGos adjusts the component box width to goban width.
If equal to another box name, maxiGos adjusts the component box width to this other box width.
</td><td>0, 1 or box name</td><td>0</td></tr>
<tr><td>adjustVersionHeight</td><td>Sometimes</td><td>
If 1, maxiGos adjusts the component box height to goban height.
If equal to another box name, maxiGos adjusts the component box height to this other box height.
</td><td>0, 1 or box name</td><td>0</td></tr>
</table>

<p>"View" component</p>
<table class="params">
<tr><th>Parameter</th><th>Use</th><th>Description</th><th>Values</th><th>Default value</th></tr>
<tr><td>viewBoxOn</td><td>Merely</td><td>If 1, display a box with buttons of the "View" menu. 
Most of the time, these box is not used and "View" buttons are displayed in the box of "Menu" component.
</td><td>0 or 1</td><td>0</td></tr>
</table>

<h3>Style</h3>
<h4>Overview</h4>

<p>MaxiGos is provided with some style sheets, but it's common to replace them by custom ones.</p> 
<p>
To include a custom style sheet, use something like   
<span class="code">$gosParam["Style"][]="xyz.css";</span> in configuration file (simple), 
or add in the head part of the page something like 
<span class="code">&lt;link rel="stylesheet" type="text/css" href="chemin/xyz.css"&gt;</span> 
(not always possible, but more efficient).</p>
<p>By default, when css file name is set in configuration file, maxiGos looks for it in maxiGos "_css" folder. 
But it can be anywhere else (in this case, add a relative path from "_css" folder to css file location as a prefix of css file name).</p>
<p>It's useful to give a value to "globalBox" parameter in configuration file different from its default one ("GlobalBox")
to avoid confusion when displaying several maxiGos with different styles in the same page.</p>
<p>Each maxiGos component displays its content in a &lt;div&gt; html tag, excepting "Title" that displays in a &lt;h1&gt;.</p>
<p>Components can be grouped in boxes, each grouping box displays in a &lt;div&gt; html tag.</p>
<p>Finally, all boxes are grouped in a global &lt;div&gt; html tag.</p>
<p>All these &lt;div&gt; have css classes (the class name for the &lt;div&gt; of a component named "Xxx" is "mxXxxDiv"). 
And some internal tags of the components have also css classes. As a result, one can use css to modify almost everything in maxiGos (see samples to learn more about that).</p>
<p>The goban is drawn in a &lt;canvas&gt;&lt;/canvas&gt; tag. To change its style, use "div.mxGobanDiv canvas" in css files. 
For instance, to change goban background color, goban line color and stone radius, use something like (assuming "globalBox" parameter value is "BasicGlobalBox" thus .mxBasicGlobalBoxDiv is the class name of the global box):</p>
<p><span class="code">.mxBasicGlobalBoxDiv div.mxGobanDiv canvas {background-color:#f00;color:#fff;font-size:12px;}<span></p>
<p>The navigation button tags are &lt;button&gt;&lt;div&gt;&lt;span&gt;...&lt;/span&gt;&lt;/div&gt;&lt;/button&gt;. 
 To change its style, use "div.mxNavigationDiv button" in css files. 
<p>The "NotSeen" move list is a succession of &lt;div&gt;&lt;img ...&gt;&lt;span&gt;...&lt;/span&gt;&lt;/div&gt;, 
where img tag encloses each numbered stone image and span tag encloses coordinates that follows each stone image.</p>
<p>As in "Navigation" component, buttons are displayed using &lt;button&gt;&lt;div&gt;&lt;span&gt;...&lt;/span&gt;&lt;/div&gt;&lt;/button&gt; or &lt;input&gt; tags.</p>
<h4>Class list</h4>
<p>The css classes used by maxiGos are:</p>
<p>1) Global box</p>
The global box &lt;div&gt; may have one, two or all of the following classes:
<div style="margin-left:0px">- div.mxGlobalBoxDiv (always).</div>
<div style="margin-left:0px">- mx + "globalBox" parameter value + Div if "globalBox" parameter value is not "globalBox".</div>
<div style="margin-left:0px">- mxIn3d if "in3dOn" is 1 or mxIn2d if "in3dOn" is 0.</div>
<p>2) Grouping box</p>
<div style="margin-left:20px">div.mxAaaBoxDiv</div>
<div style="margin-left:20px">...</div>
<div style="margin-left:20px">div.mxZzzBoxDiv</div>
<p>3) Component tags and internal tags (some classes may be not listed)</p>

<div style="margin-left:40px">div.mxBackToMainDiv</div>
	<div style="margin-left:60px">button span</div>

<div style="margin-left:40px">div.mxCommentDiv</div>
	<div style="margin-left:60px">div.mxCommentContentDiv</div>
		<div style="margin-left:80px">span.mxMoveNumberSpan (only if allInComment is 1)</div>
		<div style="margin-left:80px">"Header" tags (only if headerInComment is 1)</div>

<div style="margin-left:40px">div.mxCutDiv</div>
	<div style="margin-left:60px">button span</div>

<div style="margin-left:40px">div.mxEditDiv</div>
	<div style="margin-left:60px">div.mxEditToolBarDiv</div>
		<div style="margin-left:80px">button canvas, button img, input + (.mxUnselectedEditTool or .mxSelectedEditTool) (tool bar tools)</div>
	<div style="margin-left:60px">div.mxEditCommentToolDiv textarea</div>

<div style="margin-left:40px">div.mxFileDiv</div>
	<div style="margin-left:60px">button span</div>

<div style="margin-left:40px">div.mxGobanDiv</div>
	<div style="margin-left:60px">div.mxInnerGobanDiv</div>
		<div style="margin-left:80px">canvas ("Goban" canvas)</div>

<div style="margin-left:40px">div.mxGotoDiv</div>
	<div style="margin-left:60px">canvas (cursor)</div>

<div style="margin-left:40px">div.mxGuessDiv</div>
	<div style="margin-left:60px">canvas (part of the bar which changes of size)</div>
				
<div style="margin-left:40px">div.mxHeaderDiv</div>
	<div style="margin-left:60px">button span (if headerBtnOn is 1)</div>
	<div style="margin-left:60px">div.mxShowContentDiv h1 (if headerBoxOn is 1)</div>
	<div style="margin-left:60px">div.mxShowContentDiv div.mxP span.mxHeaderSpan (if headerBoxOn is 1)</div>

<div style="margin-left:40px">div.mxHelpDiv</div>
	<div style="margin-left:60px">button span</div>

<div style="margin-left:40px">div.mxInfoDiv</div>
	<div style="margin-left:60px">button span (if infoBtnOn is 1)</div>
	<div style="margin-left:60px">div.mxInfoContentDiv div.mxInfoPageMenuDiv button.mxInfoPageBtn (if infoBoxOn is 1)</div>
	<div style="margin-left:60px">div.mxInfoContentDiv div.mxInfoPageMenuDiv button.mxInfoSelectedPageBtn (if infoBoxOn is 1)</div>
	<div style="margin-left:60px">div.mxInfoContentDiv div.mxInfoPageDiv label or input or textarea (if infoBoxOn is 1)</div>

<div style="margin-left:40px">div.mxImageDiv</div>
	<div style="margin-left:60px">button span</div>
	
<div style="margin-left:40px">div.mxLessonDiv+(.mxBM, .mxDO, .mxIT, .mxTE or rien)</div>
	<div style="margin-left:60px">div.mxBalloonDiv div.mxBalloonContentDiv</div>
	<div style="margin-left:60px">img.mxAssistantImg</div>

<div style="margin-left:40px">div.mxMenuDiv</div>
	<div style="margin-left:60px">div.mxOneMenuDiv</div>
		<div style="margin-left:80px">button span</div>
	<div style="margin-left:60px">div.mxSubMenuDiv</div>
		<div style="margin-left:80px">button span</div>

<div style="margin-left:40px">div.mxMoveInfoDiv</div>
	<div style="margin-left:60px">img</div>

<div style="margin-left:40px">div.mxNavigationDiv</div></div>
	<div style="margin-left:60px">button div span</div>
	<div style="margin-left:60px">input (type=text), the one inserted by "Goto" in "Navigation" to show or change move numbers</div>

<div style="margin-left:40px">div.mxNotSeenDiv</div>
	<div style="margin-left:60px">div img followed by a span</div>

<div style="margin-left:40px">div.mxOptionsDiv</div>
	<div style="margin-left:60px">button span (if optionBtnOn is 1)</div>
	<div style="margin-left:60px">h1 (if optionBoxOn is 1)</div>
	<div style="margin-left:60px">div.mxP input (if optionBoxOn is 1)</div>
	<div style="margin-left:60px">div.mxP label (if optionBoxOn is 1)</div>

<div style="margin-left:40px">div.mxPassDiv</div>
	<div style="margin-left:60px">button.mxPassBtn span</div>
	<div style="margin-left:60px">button.mxJustPlayedPassBtn span</div>
	<div style="margin-left:60px">button.mxOnFocusPassBtn span</div>
	<div style="margin-left:60px">button.mxOnVariationPassBtn span</div>

<div style="margin-left:40px">div.mxSgfDiv</div>
	<div style="margin-left:60px">button span</div>

<div style="margin-left:40px">div.mxSolveDiv</div>
	<div style="margin-left:60px">button span</div>

<div style="margin-left:40px">div.mxSpeedDiv</div>
	<div style="margin-left:60px">button.mxSpeedPlusBtn (the "+")</div>
	<div style="margin-left:60px">div.mxSpeedBarDiv canvas (the cursor)</div>
	<div style="margin-left:60px">button.mxSpeedMinusBtn (the "-")</div>

<div style="margin-left:40px">h1.mxTitleH1</div>

<div style="margin-left:40px">div.mxTreeDiv</div>
			
<div style="margin-left:40px">div.mxVersionDiv</div>
	<div style="margin-left:60px">span</div>

<div style="margin-left:40px">div.mxViewDiv (if "viewBoxOn" is 1)</div>
	<div style="margin-left:60px">button span</div>

<p>Warning: some components such as "animatedStone", "diagram" and "loop" have no box, 
and some other component boxes are displayed over other boxes (see below).</p>

<p>4) Popup boxes displayed over another box (.mxGobanDiv by default)</p>

<div style="margin-left:40px">div.mxNumberingDiv</div>
	<div style="margin-left:60px">div.mxShowContentDiv</div>
		<div style="margin-left:80px">h1</div>
		<div style="margin-left:80px">div.mxP label</div>
		<div style="margin-left:80px">div.mxP input</div>
	<div style="margin-left:60px">div.mxOKDiv button span</div>
<div style="margin-left:40px">div.mxNewDiv</div>
	<div style="margin-left:60px">div.mxShowContentDiv</div>
		<div style="margin-left:80px">h1</div>
		<div style="margin-left:80px">div.mxP label</div>
		<div style="margin-left:80px">div.mxP input</div>
	<div style="margin-left:60px">div.mxOKDiv button span</div>
<div style="margin-left:40px">div.mxOpenDiv form</div>
	<div style="margin-left:60px">div.mxShowContentDiv</div>
		<div style="margin-left:80px">h1</div>
		<div style="margin-left:80px">div.mxP label</div>
		<div style="margin-left:80px">div.mxP input</div>
	<div style="margin-left:60px">div.mxOKDiv button span</div>
<div style="margin-left:40px">div.mxSaveDiv form</div>
	<div style="margin-left:60px">div.mxShowContentDiv</div>
		<div style="margin-left:80px">h1</div>
		<div style="margin-left:80px">div.mxP label</div>
		<div style="margin-left:80px">div.mxP input</div>
	<div style="margin-left:60px">div.mxOKDiv button span</div>
<div style="margin-left:40px">div.mxSendDiv form</div>
	<div style="margin-left:60px">div.mxShowContentDiv</div>
		<div style="margin-left:80px">h1</div>
		<div style="margin-left:80px">div.mxP label</div>
		<div style="margin-left:80px">div.mxP input</div>
	<div style="margin-left:60px">div.mxOKDiv button span</div>
<div style="margin-left:40px">div.mxShowHeaderDiv</div>
	<div style="margin-left:60px">div.mxShowContentDiv</div>
		<div style="margin-left:80px">h1</div>
		<div style="margin-left:80px">div.mxP span.mxHeaderSpan</div>
	<div style="margin-left:60px">div.mxOKDiv button span</div>
<div style="margin-left:40px">div.mxShowHelpDiv</div>
	<div style="margin-left:60px">div.mxShowContentDiv</div>
		<div style="margin-left:80px">h1,h2,h3</div>
		<div style="margin-left:80px">div.mxP</div>
	<div style="margin-left:60px">div.mxOKDiv button span</div>
<div style="margin-left:40px">div.mxShowInfoDiv</div>
	<div style="margin-left:60px">div.mxShowContentDiv</div>
		<div style="margin-left:80px">div.mxInfoPageMenuDiv button.mxInfoPageBtn</div>
		<div style="margin-left:80px">div.mxInfoPageMenuDiv button.mxInfoSelectedPageBtn</div>
		<div style="margin-left:80px">div.mxInfoPageDiv label, input, textarea</div>
	<div style="margin-left:60px">div.mxOKDiv button span</div>
<div style="margin-left:40px">div.mxShowOptionDiv</div>
	<div style="margin-left:60px">div.mxShowContentDiv</div>
		<div style="margin-left:80px">h1</div>
		<div style="margin-left:80px">div.mxP label</div>
		<div style="margin-left:80px">div.mxP input</div>
	<div style="margin-left:60px">div.mxOKDiv button span</div>
<div style="margin-left:40px">div.mxShowSgfDiv</div>
	<div style="margin-left:60px">div.mxShowContentDiv</div>
		<div style="margin-left:80px">div.mxP (if "allowEditSgf" is 0)</div>
		<div style="margin-left:80px">textarea (if "allowEditSgf" is 1)</div>
	<div style="margin-left:60px">div.mxOKDiv button span</div>
<p>5) Miscellaneous</p>
<div style="margin-left:40px">div.mxDebugDiv</div>
<div style="margin-left:40px">div.mxWaitDiv</div>
<h4>Component hints</h4>
<p>Some components may alter some styles and classes.</p>
<h5>Goban</h5>
<p>Its main box is div.mxGobanDiv and contains div.mxInnerGobanDiv which contains a canvas (&lt;canvas&gt;&lt;/canvas&gt;). 
The goban itself displays in the canvas using HTML5 canvas functions.</p>
<p>The background of the goban is given by "background", "background-image", ... properties of this canvas 
and can be changed by modifying them using css rules.</p>
<p>The color of the goban lines is the "color" of this canvas and can be changed by modifying 
this property value using css rules.</p>
<p>The size of the stones are computed using the "font-size" value of this canvas, and can be changed
by modifying this value using css rules.</p>
<p>The div.mxInnerGobanDiv box and the goban canvas sizes are set by maxiGos (and are exactly the same). 
Don't try to set them in css rules.</p>
<p>In some cases, div.mxInnerGobanDiv is smaller than div.mxGobanDiv (9x9 goban, partial view of the goban, ...). 
In these cases, maxiGos centers
div.mxInnerGobanDiv in div.mxGobanDiv using "position:relative", "top" and "left" css properties 
on div.mxInnerGobanDiv.</p>
<p>To set a shadow arround the goban, always use "box-shadow" on div.mxInnerGobanDiv 
and not on the canvas itself (otherwise some browsers bug).</p>
<h5>Comment</h5>
<p>Its main box is div.mxCommentDiv and contains div.mxCommentContentDiv.</p>
<p>When "adjustCommentWidth" (or "adjustCommentHeight") is set to 1,
maxiGos compute the width (or height) of div.mxCommentDiv to fit the goban width (or height). 
In such a case, using css to set div.mxCommentDiv width (or height) is useless. 
To be able to set div.mxCommentDiv width (or height) using css rules, "adjustCommentWidth" 
(or "adjustCommentHeight") must be set to 0.</p>
<p>When "Comment" displays besides "Goban", the simplest way to set "Comment" height is to use
"adjustCommentHeight=1;" in maxiGos configuration files.</p>
<p>When "Comment" displays above or below "Goban", the simplest way to set "Comment" width is to use
"adjustCommentWidth=1;" in maxiGos configuration files.</p>

<h5>Goban</h5>
<p>Avoid to set horizontal margins to div.mxGobanDiv, parent of div.mxGobanDiv and div.mxGlobalBoxDiv
other than 0 or auto if the "fitParent" parameter is not 0.</p>

<h5>Pass</h5>
<p>It has only one tag: button.</p>
<p>This button has .mxBtn and .mxPassBtn as class, but some other classes can be added to it depending of the situation:</p>
<ul>
<li>MaxiGos adds .mxJustPlayedPassBtn if the move just played is a pass,</li>
<li>MaxiGos adds .mxOnVariationPassBtn if one of the possible moves (the list of these moves depends of the "style" value) is a pass,</li>
<li>MaxiGos adds .mxOnFocusPassBtn if the move which will be played is a pass.</li>
</ul>
<p>As a result, one can style the pass button according to the situation.</p>

<h4>Styles and classes modified by maxiGos</h4>
<p>Warning: maxiGos modifies some styles and classes.</p>
<h2>Encoding</h2>
<h3>Encoding of your page</h3>
<p>MaxiGos works in "UTF-8", but can be included in a page which is not in "UTF-8".</p>
<p>When using a maxiGos stand-alone player script or an internationalization script in a page which 
is not in "UTF-8", just add charset="UTF-8" to any &lt;script&gt; tag that includes 
maxiGos scripts in your page.</p>
<p>For instance:</p><p><span class="code">&lt;script data-maxigos-l="en" charset="UTF-8" src="/_maxigos/_alone/maxigos-basic.js"&gt;</span></p> 
<p>When using a launcher (sgfplayer.php or mgosLoader.js/sgfmultipleplayer.php), there is nothing to do,
because the launcher indicates to your page 
that maxiGos works in UTF-8 (using the php function header()), 
and the end user browser does all what is necessary to produce the correct output automatically.</p>
<h3>Custom launcher</h3>
<p>MaxiGos has a default launcher, sgfplayer.php, which is convenient in almost all cases.
This script can be found in "_mgos" folder.</p>
<p>But it is not very difficult for an advanced user to create its own launcher.</p>
<p>A custom launcher is a php file that calls "gosStart()" php function defined in "gosLib.php" script. 
This script can be found in "_php" folder.</p>
<p>Some maxiGos samples have their own launchers. See them to learn more about custom launcher.</p>
<h3>Encoding of sgf files</h3>
<p>MaxiGos can well display sgf files encoded in different charsets 
if the sgf CA property in these sgf files is properly set. 
In this case, maxiGos catches the value of the CA property then changes the encoding 
of the sgf file to "UTF-8". 
If a sgf file has no charset, maxiGos assumes that the charset is "ISO-8859-1" 
which is the defaut value of the CA property according to the sgf standard. 
Unfortunately, the CA property is often missing even when the actual charset of the file 
is not "ISO-8859-1", especially for sgf files encoded in asian charsets. 
And maxiGos doesn't (cannot?) try to guess what is the correct charset when there is 
no CA property in the sgf file. 
The only way for the moment to solve this problem is to use a text editor to add the correct CA property 
in the sgf file.</p>
<p>Note that when the actual charset of the sgf file is "UTF-8", 
the value of the CA property must be set "UTF-8" too (a missing CA property is not an option).</p>
<p>If one inserts some sgf record as is in the code of a page using a text editor, maxiGos assumes 
that the encoding of this record is the same as the encoding of the page (it is always the case in theory) 
and therefore ignores the CA property.</p>
<p>When maxiGos produces a sgf record, the result is always in UTF-8.</p>
<p>Even if in theory maxiGos can be included in a page which is not in "UTF-8" and read sgf files that are not in "UTF-8", 
the best is to use UTF-8 everywhere when possible.</p>
<h3>Encoding and language</h3>
<p>Encoding and language are different. "UTF-8" is convenient for any(?) language, 
so it is the best choice as encoding when you can use it. When it is not possible, 
take care since some encoding cannot display some caracters of some languages. 
For instance, japanese words of a sgf file in Shift-JIS cannot be transformed automatically and displayed in a page in "ISO-8859-1", 
but it can be transformed automatically and displayed in a page in "UTF-8".
Don"t use charset names such as "UTF-8", "ISO-8859-1", "Shift-JIS", "Big5", "GB18030" as value of $mxL.
Use language codes instead, such as "en", "fr", "ja", zh", "zh-tw"....</p>
<h2>Annexe 1: file list of "_maxigos" folder</h2>
<h3>Main folders</h3>
<ul>
<li>"_doc": contains documentations, download pages, licence file…</li>
<li>"_help": contains help files of the sgf editor,</li>
<li>"_img": contains images.</li>
<li>"_i18n": contains internationalization script files,</li>
<li>"_js": contains component javascript files.</li>
<li>"_mgos": contains launcher and loader script files,</li>
<li>"_php": contains various php scripts.</li>
<li>"_sample": contains maxiGos samples,</li>
</ul>
<h3>"_mgos" content</h3>
<ul>
<li>"mgosLoader.js": inserts players between &lt;div&gt; and &lt;div&gt; tags,</li>
<li>"sgfplayer.php": generates "on the fly" maxiGos players,</li>
<li>"sgfmultipleplayer.php": used by mgosLoader.js,</li>
</ul>
<h3>"_php" content</h3>
<ul>
<li>"aloneLib.php": library for making of stand-alone players,</li>
<li>"aloneLink.php": displays links to stand-alone players,</li>
<li>"aloneMaker.php": makes stand-alone players,</li>
<li>"aloneViewer.php": displays stand-alone players,</li>
<li>"gosLib.php": library for generating player javascript code,</li>
<li>"path.php": compute usefull paths for maxiGos,</li>
<li>"version.php": set current maxiGos version number,</li>
</ul>
<h2><a name="faq">Annexe 2: questions and answers</h2>
<p class="important">Question: what is the minimum I have to do to include a maxiGos player
in one of my web page using a stand-alone script?</p>
<ol>
<li>Display in a browser the <a href="http://jeudego.org/maxiGos/_maxigos/_doc/_en/download.php">dowload page</a>.</li>
<li>Download the "maxigos-neo-classic-basic.js" stand-alone player.</li>
<li>Create at the root of your website a "maxiGos" folder and copy "maxigos-neo-classic-basic.js to it.</li>
<li>Insert in the page to the place where you want the player displays &lt;script&gt; and &lt;/script&gt;
tags with src value set to "/maxiGos/maxigos-neo-classic-basic.js",
and insert between these tags a sgf record. For instance:<br>
<span class="code">&lt;script data-maxigos-l="en" src="/maxiGos/maxigos-basic.js"&gt;(;FF[4]CA[UTF-8]GM[1]SZ[19];B[pd];W[dc];B[pp];W[fp];B[de];W[ee];B[ef];W[ed];B[dg];W[co])&lt;/script&gt;</span></li>
<li>Et voilà!</li>
</ol>
<p class="important">Question: what is the minimum I have to do to include a maxiGos player
in one of my web page using the launcher "sgfplayer.php"?</p>
<ol>
<li>Download maxiGos archive (a file called "_maxigosnnn.zip" where nnn is the maxiGos version number).</li>
<li>Uncompress maxiGos archive. It creates a folder called "_maxigos".</li>
<li>Copy "_maxigos/" folder and its content to the root of your web site 
(you can put it anywhere, but in this case, you will have to adapt all the following paths accordingly).</li>
<li>Assume your page is "page1.php" and is in a subfolder of the site root called "_pages".</li>
<li>Assume the sgf file is "game1.sgf", represents a game and is in a subfolder of the site root 
called "_sgf".</li>
<li>Insert in "page1.php" to the place where you want the player displays something the following line:<br>
<span class="code">&lt;script data-maxigos-l="en" src="../_maxigos/_mgos/sgfplayer.php?sgf=&lt;?php print urlencode("../_sgf/game1.sgf");?&gt;"&gt;&lt;/script&gt;</span></li>
<li>Et voilà!</li>
</ol>
<p class="important">Question: is maxiGos working with any browsers?</p>
<p>
In theory, maxiGos works with almost all browsers including internet explorer (from v9), 
firefox (from v4), safari (from v5) and chrome (however some features may be not available with some old browsers).
It doesn't work at all with internet explorer v8 and older.
</p>

<p class="important">Question: maxiGos displays nothing. Why?</p>
<p>Verify if you well copied the "_maxigos" folder to the rigth place on the web server.</p>
<p>Verify paths in the lines where a call to maxiGos is done.</p>

<p class="important">Question: maxiGos displays an empty goban. Why?</p>
<p>Verify that the sgf file is on the rigth place on the web server.</p>
<p>Otherwise the path of the sgf file (for instance in the launcher URL) is probably wrong.</p>
<p>It's also possible that maxiGos has not the right to open the sgf file. 
In this case, put your sgf files in another place or change their access rights. 
(however the writting right is never required).
</p>

<p class="important">Question: even if several components should be visible, 
maxiGos displays only the goban and the navigation bar. Why?</p>
<p>When maxiGos doesn't find the configuration file, it uses a default configuration 
that displays only the goban and the navigation bar.</p>
<p>The path or the name of the configuration file (in the launcher URL for instance) is probably wrong.</p>

<p class="important">Question: how can I change the goban size?</p>
<p>There are several methods to do that. The easiest way is to change the value of 
the css "font-size" parameter of the html element of the goban. 
For instance, if you use a player of "Basic" type, to set the "font-size" to "12px", add somewhere in a css file:</p>
<p class="code">.mxBasicGlobalBoxDiv div.mxGobanDiv canvas {font-size:12px !important;}</p>
<p>For a player of "Xxx" type, replace "Basic" in "mxBasicGlobalBoxDiv" by "Xxx.</p>

<p class="important">Question: what about "responsive design"?</p>
<p>There are two way to make maxiGos responsive.<p>
<p>The first way is to set "fitParent" to 1, 2 or 3 (for instance in the configuration file of the maxiGos player).
In this case, maxiGos will resize the goban and/or the navigation buttons according to the width of the html element 
that contains the player.</p>
<p>If the goban width is the player width (vertical design), 
and if one makes maxiGos adjusting the width of other components automatically
(using adjustXxxWidth parameters),
this is a convenient way to make maxiGos responsive.</p>
<p>The second way is to modify the goban and navigation buttons size using css. 
To make them responsive, assuming your global box is "mxMyGlobalBoxDiv" 
(i.e there is <span class="code">$gosParam["globalBox"]="MyGlobalBox";</span> in the config file),
insert in your css file lines such as the following (adapt them if necessary):</p>
<p class="code">
.mxMyGlobalBoxDiv div.mxGobanDiv canvas {font-size:12px;}<br>
.mxMyGlobalBoxDiv div.mxNavigationDiv button {font-size:18px;}<br><br>
@media (max-width:449px)<br>
{<br>
	.mxMyGlobalBoxDiv div.mxGobanDiv canvas {font-size:10px;}<br>
	.mxMyGlobalBoxDiv div.mxNavigationDiv button {font-size:16px;}<br>
}<br><br>
@media (max-width:359px)<br>
{<br>
	.mxMyGlobalBoxDiv div.mxGobanDiv canvas {font-size:9px;}<br>
	.mxMyGlobalBoxDiv div.mxNavigationDiv button {font-size:14px;}<br>
}<br><br>
@media (max-width:319px)<br>
{<br>
	.mxMyGlobalBoxDiv div.mxGobanDiv canvas {font-size:8px;}<br>
	.mxMyGlobalBoxDiv div.mxNavigationDiv button {font-size:12px;}<br>
}
</p>
<p>Using this way, you can make maxiGos responsive in any situation, 
but this is far more complicated than the first way. See "classic" samples to see the result.</p>
<p>In both cases, in order to force the page to fit a mobile screen,
don't forget to add in the &lt;head&gt; part of the page a ligne such as:</p>
<p class="code">
&lt;meta name="viewport" content="width=device-width,initial-scale=1.0"&gt;
</p>
<p class="important">Question: I use a maxiGos stand-alone script which displays all its texts in french 
and it is the latest thing I want.
What can I do?</p>
<p>Read again the "Internationalization" chapter. Maybe you missed something.</p>
<p>If you need to use a language that has no internationalization file in "_i18n" folder, see next question.</p>
<p class="important">Question: I want to translate maxiGos in another language. How can I process?</p>
<p>Duplicate "_maxigos/_i18n/mgos-i18n-ja.js" and replace the two last letters of the file name
by the code of the new language (if possible a ISO 639 language code).
Replace all "ja" strings by the code of the new language at the beginning of the file. 
Translate all japanese texts of this file in the new language 
(their equivalents in english are in front of them), 
and rewrite or create or evenly remove functions 
whose name starts by "build" or "translate" 
(these functions are "buildDate", "buildRank", "buildMove", "buildNumOfMoves", "buildRules",
"buildTimeLimits", "buildKomi", "buildResult" and "transalteTitle"). 
If one of these functions is missing, maxiGos uses default functions to produce an acceptable output
so you can drop the rewritting of these functions if it appears too complicated. 
Finally, save the file in UTF-8.</p>
<p class="important">Question: I want to use maxiGos in a page which is not in UTF-8.
What is the correct way to insert it?</p>
<p>If you use a stand-alone player, add charset="UTF-8" to any maxiGos script tag
(if you use a launcher such as sgfplayer.php, there is nothing to do: the launcher does all what is necessary).</p>
<p>For instance:</p>
<p><span class="code">&lt;script charset="UTF-8" 
src="_alone/maxigos-minimal-basic.js"&gt;../_sgf/game/blood-vomit.sgf&lt;/script&gt;</span>.</p>
<em>Aknowledgements to Alfredo Pernin, Chantal Gajdos, Julien Payrat, Lao Lilin, Mickaël Simon, Motoki Noguchi, 
Olivier Besson, Olivier Dulac, Patrice Fontaine, Tony Yamanaka
and many others for their advices or contributions to this project!</em>
<p><?php if (file_exists("../../index.php")) print "<a href=\"../../index.php?lang=en\">Home</a>";?><!--
--><a href="<?php print str_replace("/_fr/","/_en/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../../_img/flag/en.gif">English</a><!--
--><a href="<?php print str_replace("/_en/","/_fr/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../../_img/flag/fr.gif">Fran&ccedil;ais</a></p>
</body>
</html>