<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="initial-scale=1.0,user-scalable=yes">
<?php include "../../_php/version.php";?>
<title>Documentation pour maxiGos v<?php print $v;?></title>
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
<p><?php if (file_exists("../../../index.php")) print "<a href=\"../../../index.php?lang=fr\">Accueil</a>";?><!--
--><a href="<?php print str_replace("/_fr/","/_en/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../../_img/flag/en.gif">English</a><!--
--><a href="<?php print str_replace("/_en/","/_fr/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../../_img/flag/fr.gif">Fran&ccedil;ais</a></p>
<h1>Documentation pour maxiGos v<?php print $v;?></h1>
<p class="em">Copyright 1998-<?php print date("Y");?> - François Mizessyn - francois.mizessyn@orange.fr</p>
<div class="download"><a href="download.php">Cliquez ici pour aller à la page de téléchargement</a></div>

<h2>Qu'est-ce que maxiGos ?</h2>
<p>MaxiGos est un ensemble d'outils permettant d'insérer des parties, problèmes et diagrammes de go enregistrés
au format sgf dans une page web.</p>
<p>Vous pouvez utiliser maxiGos gratuitement pour votre site (<a href="../license.txt">licence</a> de type BSD).</p>

<h2>Quels sont les prérequis ?</h2>
<p>Le navigateur de l'utilisateur final doit pouvoir interpréter du HTML5,
et doit avoir javascript activé.</p>
<p>Si on utilise uniquement les lecteurs autonomes de maxiGos (qui sont en javascript),
il n'y a aucun prérequis en ce qui concerne le serveur sur lequel ils sont installés.</p>
<p>Si on utilise la version complète de maxiGos (qui utilise javascript, css et php),
le serveur sur lequel il est installé doit disposer de php.</p>

<h2>Comment commencer simplement avec maxiGos ?</h2>
<p>Téléchargez l'un des lecteurs maxiGos suivants :</p>
<ul>
<li><a href="../../_sample/neo-classic/_alone/maxigos-neo-classic-basic.js" download="maxigos-neo-classic-basic.js">maxigos-neo-classic-basic.js</a> (voir un <a href="../../_php/aloneViewer.php?mxL=fr&amp;s=..%2F_sample%2Fneo-classic%2F_alone%2Fmaxigos-neo-classic-basic.js">exemple avec ce lecteur sgf</a>)</li>
<li><a href="../../_sample/neo-classic/_alone/maxigos-neo-classic-comment.js" download="maxigos-neo-classic-comment.js">maxigos-neo-classic-comment.js</a> (voir un <a href="../../_php/aloneViewer.php?mxL=fr&amp;s=..%2F_sample%2Fneo-classic%2F_alone%2Fmaxigos-neo-classic-comment.js">exemple avec ce lecteur sgf</a>)</li>
<li><a href="../../_sample/neo-classic/_alone/maxigos-neo-classic-diagram.js" download="maxigos-neo-classic-diagram.js">maxigos-neo-classic-diagram.js</a> (voir un <a href="../../_php/aloneViewer.php?mxL=fr&amp;s=..%2F_sample%2Fneo-classic%2F_alone%2Fmaxigos-neo-classic-diagram.js">exemple avec ce lecteur sgf</a>)</li>
<li><a href="../../_sample/neo-classic/_alone/maxigos-neo-classic-game.js" download="maxigos-neo-classic-game.js">maxigos-neo-classic-game.js</a> (voir un <a href="../../_php/aloneViewer.php?mxL=fr&amp;s=..%2F_sample%2Fneo-classic%2F_alone%2Fmaxigos-neo-classic-game.js">exemple avec ce lecteur sgf</a>)</li>
<li><a href="../../_sample/neo-classic/_alone/maxigos-neo-classic-problem.js" download="maxigos-neo-classic-problem.js">maxigos-neo-classic-problem.js</a> (voir un <a href="../../_php/aloneViewer.php?mxL=fr&amp;s=..%2F_sample%2Fneo-classic%2F_alone%2Fmaxigos-neo-classic-problem.js">exemple avec ce lecteur sgf</a>)</li>
<li><a href="../../_sample/neo-classic/_alone/maxigos-neo-classic-tree.js" download="maxigos-neo-classic-tree.js">maxigos-neo-classic-tree.js</a> (voir un <a href="../../_php/aloneViewer.php?mxL=fr&amp;s=..%2F_sample%2Fneo-classic%2F_alone%2Fmaxigos-neo-classic-tree.js">exemple avec ce lecteur sgf</a>)</li>
</ul>
<p>Copiez-le n'importe où sur votre site.</p>
<p>En supposant que vous avez choisi le lecteur "maxigos-neo-classic-game.js"
et en supposant que vous voulez afficher le contenu d'un fichier sgf nommé "monPremierSgf.sgf",
insérez dans la partie &lt;body&gt; d'une page html
(à l'endroit où vous voulez que le lecteur s'affiche)
un code du genre :</p>
<p class="code">
&lt;script src="ppp/maxigos-neo-classic-game.js"&gt;<br>
qqq/monPremierSgf.sgf<br>
&lt;/script&gt;
</p>
<p>"ppp/" est un chemin relatif entre la page html concernée et le script maxiGos "maxigos-neo-classic-game.js".</p>
<p>"qqq/" est un chemin relatif entre la page html concernée et le fichier sgf "monPremierSgf.sgf".</p>
<p>Pour voir un exemple avec les six lecteurs ci-dessus, <a href="../../_sample/neo-classic/neo-classic-alone.php">cliquez ici !</a>
<p>Dans de nombreux cas, ces lecteurs suffiront, mais MaxiGos peut faire beaucoup d'autres choses.
Lisez la suite pour en savoir plus.</p>
<h2>Comment installer la version complète de maxiGos ?</h2>
<p>Rendez-vous à la <a href="download.php">page de téléchargement</a>,
téléchargez l'archive contenant maxiGos,
décompressez-la et copiez l'ensemble des dossiers et fichiers n'importe où 
sur votre site. Aucune base de données n'est nécessaire.</p>
<p>Si vous ne voulez pas installer la version complète de maxiGos,
vous pouvez vous contenter de télécharger un lecteur autonome.
Regardez le chapitre "Méthode utilisant un lecteur autonome en javascript" pour plus de détails.</p>
<p>Recherchez sur votre site la page "_maxigos/_doc/_fr/documentation.php" 
(il s'agit de la même page que celle-ci, mais stockée sur votre site)
et regardez les exemples suivants pour vérifier que cela fonctionne :</p>
<ol class="sample">
<li><a href="../../_sample/neo-classic/neo-classic.php?mxL=fr">Ambiance néo-classique</a></li>
<li><a href="../../_sample/classic/classic.php?mxL=fr">Ambiance classique</a></li>
<li><a href="../../_sample/tatami/tatami.php?mxL=fr">Ambiance japonaise</a></li>
<li><a href="../../_sample/rosewood/rosewood.php?mxL=fr">Ambiance chinoise</a></li>
<li><a href="../../_sample/classic/classic.php?mxL=fr">Ambiance minimaliste</a></li>
<li><a href="../../_sample/edit/edit.php?mxL=fr">Editeur sgf</a></li>
<li><a href="../../_sample/kifu/kifu.php?mxL=fr">Kifu</a></li>
<li><a href="../../_sample/texture/texture.php?mxL=fr">Texture</a></li>
<li><a href="../../_sample/tactigo/tactigo.php?mxL=fr">Ambiance tactigo</a></li>
<li><a href="../../_sample/eidogo/eidogo.php?mxL=fr">Lecteur façon eidogo</a></li>
<li><a href="../../_sample/rfg/rfg.php?mxL=fr">Ambiance rfg.jeudego.org</a></li>
<li><a href="../../_sample/forum/forum.php?mxL=fr">Ambiance forum.jeudego.org</a></li>
<li><a href="../../_sample/jdg/jdg.php?mxL=fr">Ambiance jeudego.org</a></li>
<li><a href="../../_sample/fm/fm.php?mxL=fr">Ambiance fm</a></li>
<li><a href="../../_sample/tsumego/tsumego.php?mxL=fr">Ambiance tsumego.org</a></li>
<li><a href="../../_sample/goinblackandwhite/goinblackandwhite.php?mxL=fr">Ambiance en noir et blanc 1</a></li>
<li><a href="../../_sample/goinblackandwhite2/goinblackandwhite2.php?mxL=fr">Ambiance en noir et blanc 2</a></li>
<li><a href="../../_sample/goproblems/goproblems.php?mxL=fr">Ambiance goproblems.com</a></li>
<li><a href="../../_sample/anime/anime.php?mxL=fr">Version animée</a></li>
<li><a href="../../_sample/tiger/tiger.php?mxL=fr">Version Tiger</a></li>
<li><a href="../../_sample/iroha/iroha.php?mxL=fr">Iroha, kifu à l'ancienne</a></li>
<li><a href="../../_sample/manuscript/manuscript.php?mxL=fr">Kifu manuscrit</a></li>
<li><a href="../../_sample/pink/pink.php?mxL=fr">St Valentin</a></li>
<li><a href="../../_sample/card/card.php?mxL=fr">Couleurs des cartes à jouer</a></li>
<li><a href="../../_sample/multiplayer/multiplayer.php?mxL=fr">Exemples avec mgosLoader.js</a></li>
<li><a href="../../_sample/multilanguages/multilanguages.php?mxL=fr">Langages multiples</a></li>
<li><a href="../../_sample/variousSgfSources/variousSgfSources.php?mxL=fr">Méthodes variées pour inclure du sgf</a></li>
<li><a href="../../_sample/variousCustomizations/variousCustomizations.php?mxL=fr">Personnalisations variées</a></li>
<li><a href="../../_sample/BBCode/BBCode.php?mxL=fr">BBCode</a></li>
<li><a href="../../_sample/charset/charset.php?mxL=fr">Tests de charset</a></li>
<li><a href="../../_sample/rules/rules.php?mxL=fr">Règle du go</a></li>
<li><a href="../../_sample/fancy/fancy.php?mxL=fr">Fancy go</a></li>
</ol>
<p>L'utilisateur final n'a rien à installer sur sa machine. Il lui suffit de laisser javascript activé.</p>
<h2>Comment utiliser maxiGos ?</h2>
<p>On dispose de cinq méthodes pour insérer un lecteur maxiGos dans une page web :<p>
<ul>
<li>en utilisant un lecteur autonome en javascript</li>
<li>en utilisant un lanceur en php qui contruit "à la volée" un lecteur en javascript</li>
<li>en utilisant un chargeur en javascript qui construit "à la volée" un lecteur en javascript et le télécharge via AJAX</li>
<li>en utilisant un plugin (deux plugins sont pour l'instant disponibles : pour joomla et pour wordpress)</li>
<li>en utilisant un BBCode</li>
</ul>
<h3>Méthode utilisant un lecteur autonome en javascript</h3>
<p>On utilisera un lecteur autonome dans les cas où on souhaite faire simple.</p>
<p>Un lecteur autonome est un lecteur maxiGos
dont tout le code est dans un fichier javascript unique.</p> 
<p>Ces lecteurs sont stockés dans les dossiers "_alone" des exemples fournis avec maxiGos.
Ces exemples sont dans le dossier "_sample".</p>
<h4>Le code à insérer dans vos pages</h4>
<p>On insère un couple de balises &lt;script&gt; et &lt;/script&gt; dans la page à l'endroit 
où doit s'afficher le lecteur sgf, avec comme valeur de l'attribut "src" 
le script de l'un des lecteurs autonomes fournis avec maxiGos.</p>
<p>Pour le sgf, on peut insérer un nom de fichier sgf ou un texte représentant du sgf ou une url générant du sgf
soit entre les balises &lt;script&gt; et &lt;/script&gt; ou
soit comme valeur de l'attribut "data-maxigos-sgf".</p>
<p>Si on insère un nom de fichier sgf entre les balises &lt;script&gt; et &lt;/script&gt;,
cela donne par exemple :</p>
<p class="code">
&lt;script src="xxx/maxigos-problem.js"&gt;<br>
yyy/myFirstSgf.sgf<br>
&lt;/script&gt;
</p>
<p>Si on insère un nom de fichier sgf comme valeur de l'attribut "data-maxigos-sgf",
cela donne par exemple :</p>
<p class="code">
&lt;script src="xxx/maxigos-problem.js"<br>
data-maxigos-sgf="yyy/myFirstSgf.sgf"&gt;<br>
&lt;/script&gt;
</p>
<p>Il faut évidemment adapter le chemin (ici "xxx") préfixant le script "maxigos-problem.js", 
en fonction de l'endroit où vous l'avez copié sur votre site, et de l'endroit où se trouve 
votre page.
Il s'agit du chemin relatif entre votre page et le script javascript du lecteur autonome.</p>
<p>Il faut aussi adapter le chemin (ici "yyy") préfixant le fichier sgf, 
en fonction de l'endroit où vous l'avez copié sur votre site, et de l'endroit où se trouve 
votre page.
Il s'agit du chemin relatif entre votre page et le fichier sgf.</p>
<p>Si on insère un texte représentant du sgf entre les balises &lt;script&gt; et &lt;/script&gt;,
cela donne par exemple :</p>
<p class="code">
&lt;script src="xxx/maxigos-problem.js"&gt;<br>
(;FF[4]GM[1]SZ[19]VW[aa:ii]FG[1]AW[ee]AB[de][fe][ed];B[ef]C[Correct !])<br>
&lt;/script&gt;
</p>
<p>Si on insère un texte représentant du sgf comme valeur de l'attribut "data-maxigos-sgf",
cela donne par exemple :</p>
<p class="code">
&lt;script src="xxx/maxigos-problem.js"<br>
data-maxigos-sgf="(;FF[4]GM[1]SZ[19]VW[aa:ii]FG[1]AW[ee]AB[de][fe][ed];B[ef]C[Correct !])"&gt;<br>
&lt;/script&gt;
</p>
<p>La propriété CA est ici inutile car le charset du texte est forcément le même que celui de la page.</p>
<p>Si on insère une url générant du sgf,
il est nécessaire d'ajouter l'attribut "data-maxigos-source-filter"
avec comme valeur une expression régulière qui "match" avec l'url. Par exemple :</p>
<p class="code">
&lt;script src="xxx/maxigos-problem.js"<br>
data-maxigos-source-filter="/download/file\.php\?id=[0-9]+$"&gt;<br>
/download/file.php?id=23<br>
&lt;/script&gt;
</p>
<p>Si on insère une url générant du sgf comme valeur de l'attribut "data-maxigos-sgf",
cela donne par exemple :</p>
<p class="code">
&lt;script src="xxx/maxigos-problem.js"<br>
data-maxigos-sgf="/download/file.php?id=23"<br>
data-maxigos-source-filter="/download/file\.php\?id=[0-9]+$"&gt;<br>
&lt;/script&gt;
</p>
<p>L'url doit respecter le principe de "même origine" que la page dans laquelle on l'insère
(même protocole, même domaine, même port). Elle ne peut donc pas être une url d'un autre site.</p>
<p class="note">Note 1 : il est possible pour un utilisateur avancé de fabriquer un lecteur autonome 
à l'aide de la fonction "makeAlone" du script php "_php/aloneLib.php"
(voir aussi le script "_php/aloneMaker.php" qui utilise cette fonction).</p>
<p class="note">Note 2 : pour faire fonctionner les lecteurs autonomes, 
on n'a pas besoin d'installer l'ensemble de maxiGos sur le serveur. 
Il suffit d'y copier le script du lecteur choisi. Si on utilise une langue autre que le français ou l'anglais, 
on aura aussi besoin d'inclure dans la page le script d'internationalisation
de cette langue (l'un de ceux qui sont dans le dossier "_i18n").</p>
<p class="note">Note 3 : en théorie, un lecteur autonome ne devrait pas utiliser de ressources externes (images, fichiers, ...).
Lorsqu'une ressource externe est nécessaire, maxiGos la recherche à l'endroit où elle se trouve dans la version complète.</p>
<h4>Personnalisation des lecteurs autonomes</h4>
<p>La personnalisation de ces lecteurs peut être faite en utilisant des attributs dans la balise 
&lt;script&gt;.
</p>
<p>Le nom de ces attributs est de la forme "data-maxigos-xxx" avec "xxx" le nom d'un paramètre de maxiGos 
(voir le chapitre "Paramétrage des composants" pour en savoir plus sur ces paramètres). 
Du fait que seuls les lettres en minuscule sont permises dans le nom des attributs, 
on remplace les majuscules des noms des paramètres maxiGos par leurs équivalents en minuscule 
précédés d'un "-". Par exemple, l'attribut correspondant au paramètre maxiGos "in3dOn" 
sera "data-maxigos-in3d-on".</p>
</p>
<p>Beaucoup de choses peuvent être modifiées en utilisant les attributs. 
Par exemple, pour afficher un diagramme sans effet 3D et un fond de goban transparent,
on peut utiliser :</p>
</p>
<p class="code">
&lt;script src="../../_alone/maxigos-diagram.js"<br>
data-maxigos-in3d-on="0"<br>
data-maxigos-goban-bk="transparent"&gt;<br>
(;FF[4]GM[1]SZ[19]VW[aa:ii]FG[1]AW[ee]AB[de][fe][ed])<br>
&lt;/script&gt;
</p>
<p>Il est aussi possible de modifier l'aspect du lecteur via des feuilles de style
comme la couleur du fond du goban de l'exemple ci-dessus,
mais aussi beaucoup d'autres caractéristiques des lecteurs
(voir le chapitre "Liste des tags et classes utilisés par maxiGos" pour plus de détails).</p>
<h3>Méthode utilisant un "lanceur" en php</h3>
<p>Il s'agit d'une méthode plus sophistiquée que celle utilisant les lecteurs autonomes,
permettant une personnalisation plus lourde.</p>
<p>Un lanceur est un script php qui va générer "à la volée" le code javascript du lecteur 
en fonction d'informations contenues dans un fichier de configuration.</p>
<h4>La ligne à insérer dans vos pages web</h4>
<p>On inclut à l'endroit où doit s'afficher maxiGos dans la page web une ligne du genre :</p>
<p class="code">&lt;script src="ppp/sgfplayer.php?sgf=&lt;?php print urlencode("qqq/xxx.sgf");?&gt;&amp;cfg=&lt;?php print urlencode("rrr/yyy.cfg");?&gt;&amp;mxL=en"&gt;&lt;/script&gt;</p>
<p>Il faut évidemment adapter le chemin (ici "ppp/") préfixant le script "sgfplayer.php", 
qui est le lanceur, en fonction de l'endroit où vous avez installé maxiGos sur votre site,
et de l'endroit où se trouve votre page.
Il s'agit du chemin relatif entre votre page et le script php du lanceur. 
MaxiGos est fourni avec un lanceur, sgfPlayer.php, qui suffit dans la plupart du temps. 
Ce lanceur est dans le sous-dossier "_mgos" du dossier "_maxigos". 
L'url de ce lanceur peut avoir quatre paramètres : "sgf", "cfg", "mxL" et "plc",
qui sont tous optionnels (voir ci-dessous pour plus d'informations sur ces paramètres).</p>
<p>Il est prudent d'appliquer la fonction php "urlencode()" sur les valeurs des paramètres
du lanceur, surtout quand ce sont des noms de fichier précédés d'un chemin,
ou quand ce sont des textes représentant du sgf.</p>
<p>On peut ajouter autant de maxiGos que l'on veut dans une page. 
On n'est limité que par les possibilités du serveur web et celles de la machine de l'utilisateur.</p>
<h4>Le paramètre "sgf"</h4>
<p>Le paramètre "sgf" de l'url du lanceur permet de spécifier le sgf à lire.</p>
<p class="note">Note : au lieu d'utiliser ce paramètre "sgf",
on peut aussi simplement insérer comme pour les lecteurs autonomes
le nom d'un fichier sgf ou un texte représentant du sgf ou une url générant du sgf
entre les balises &lt;script&gt; et &lt;/script&gt;. On peut aussi spécifier
le nom d'un fichier sgf ou un texte représentant du sgf ou une url générant du sgf
comme valeur de l'attribut "data-maxigos-sgf" de la balise &lt;script&gt;.</p>
<p>Si aucun sgf n'est spécifié via l'une des méthodes ci-dessus, 
maxiGos affichera un goban 19x19 vide.</p>
<p>On peut indiquer le nom d'un fichier sgf comme valeur du paramètre "sgf".
Le fichier sgf peut être n'importe où dans l'arborescence du site. 
Par exemple, si le fichier sgf est dans un sous-dossier "_sgf" du dossier parent du dossier
où se trouve le lanceur, on utilisera :</p>
<p class="code">sgf=&lt;?php print urlencode("qqq/xxx.sgf");?&gt;</p>
<p>"qqq/" est le chemin relatif entre le lanceur et le fichier sgf.</p>
<p>On peut aussi simplement indiquer un texte réprésentant du sgf comme valeur du paramètre "sgf".</p>
<p>Par exemple :</p>
<p class="code">sgf=&lt;?php print urlencode("(;FF[4]GM[1]SZ[19];B[qd])");?&gt;</p>
<p>Tout code sgf valide peut être utilisé. 
Notez que cette méthode ne fonctionne qu'avec des petits enregistrements sgf, 
car en pratique les url ne peuvent pas être infiniment longues 
(la longueur maximale dépend du paramétrage des serveurs webs et des navigateurs utilisés).</p>
<p>On peut enfin indiquer une url générant du sgf comme valeur du paramètre "sgf"
(vérifiez si votre serveur web accepte cela : ce n'est pas toujours le cas).</p>
<p>Par exemple :</p>
<p class="code">sgf=&lt;?php print urlencode("/download/file.php?id=23");?&gt;</p>
<p>Dans ce cas il faut aussi donner au paramètre "sourceFilter" dans le fichier de configuration
la valeur d'une expression régulière qui "match" avec l'url (par exemple ici "/download/file\.php\?id=[0-9]+$"),
ou utiliser l'attribut "data-maxigos-source-filter" avec comme valeur cette expression régulière.</p>
<p>L'url doit également respecter le principe de "même origine" que la page dans laquelle on l'insère
(même protocole, même domaine, même port). Elle ne peut donc pas être une url d'un autre site.</p>
<h4>Le paramètre "cfg"</h4>
<p>Le paramètre "cfg" de l'url du lanceur permet de spécifier le fichier de configuration à utiliser.</p>
<p>Par exemple :</p>
<p class="code">cfg=&lt;?php print urlencode("rrr/yyy.cfg");?&gt;</p>
<p>"rrr/" est le chemin relatif entre le lanceur et le fichier de configuration.
Les fichiers de configuration peuvent être stockés n'importe où sur le site.</p>
<p>MaxiGos est livré avec un certain nombre de fichiers de configuration.
Ces fichiers sont stockés dans les sous-dossiers du dossier "_sample".
Il n'est pas très difficile de les modifier ou d'en créer de nouveaux en cas de besoin.</p>
<p>Si le paramètre "cfg" n'est pas présent dans l'url,
maxiGos utilise par défaut la configuration "basic" de l'exemple "neo-classic"
qui est "../_sample/neo-classic/_cfg/basic.cfg".</p>
<h4>Le paramètre "mxL"</h4>
<p>Le paramètre "mxL" de l'url du lanceur permet de spécifier la langue utilisée par maxiGos.</p>
<p>Les valeurs de "mxL" sont les codes langue tel que : "en" pour anglais, "fr" pour français...</p>
<p>Par exemple :</p>
<p class="code">mxL=en</p>
<p>Si le paramètre "mxL" n'est pas présent dans l'url,
et si aucune autre langue n'est spécifiée via l'attribut "data-maxigos-l",
maxiGos fonctionnera en français.</p>
<h4>Le paramètre "plc"</h4>
<p>Le paramètre "plc" de l'url du lanceur permet de spécifier l'identifiant d'une balise 
dont le contenu est éventuellement le nom d'un fichier sgf ou un texte représentant du sgf ou une url générant du sgf.
Si c'est bien le cas, ce contenu est remplacé par un lecteur maxiGos qui affiche ce contenu.</p>
<p>Par exemple :</p>
<p class="code">
&lt;div id="dia1"&gt;&lt;/div&gt;<br>
&lt;script src="ppp/sgfplayer.php?sgf=&lt;?php print urlencode("qqq/xxx.sgf");?&gt;&amp;cfg=&lt;?php print urlencode("rrr/yyy.cfg");?&gt;&amp;mxL=en&amp;plc=dia1"&gt;&lt;/script&gt;
</p>
<p>Ce paramètre est rarement utilisé.</p>
<h4>Personnalisation des lecteurs insérés par un lanceur</h4>
<p>Comme pour les lecteurs autonomes, on peut personnaliser un lecteur inséré par un lanceur
en utilisant des attributs de la forme "data-maxigos-xxx" dans la balise où s'affiche ce lecteur
(voir le chapitre "Personnalisation des lecteurs autonomes" pour plus de détails).
Il est aussi possible de modifier l'aspect du lecteur via des feuilles de style
(voir le chapitre "Liste des tags et classes utilisés par maxiGos" pour plus de détails).</p>
<h3>Méthode utilisant un "chargeur" en javascript</h3>
<p>Cette méthode permet de ne pas avoir à insérer le code de maxiGos à chaque endroit de la page où doit s'afficher un lecteur.
Elle est par contre sensiblement plus lente que les précédentes. 
Il est conseillé de ne l'utiliser que si aucune des deux méthodes précédentes n'est possible.</p>
<p>Un chargeur est un script javascript qui recherche dans la page toutes les balises
où un lecteur doit être affiché et qui génère "à la volée" pour chacune de ces balises
le script javascript d'un lecteur maxiGos.</p>
<p>En pratique, on insère dans la page web aux endroits où l'on souhaite afficher un lecteur 
des balises comme &lt;div&gt; et &lt;/div&gt; dont l'un des attributs est "data-maxigos".
La valeur de cet attribut est le nom d'une configuration de maxiGos.
Le nom du fichier de configuration correspondant étant la concaténation 
de la valeur de "_sample/neo-classic/_cfg/",
qui est la valeur par défault du dossier contenant les fichiers de configuration,
suivi du nom de la configuration suivi de ".cfg".</p>
<p>On insère ensuite le nom d'un fichier sgf ou un texte représentant du sgf
ou une url pouvant générer du sgf entre ces balises.
<p>On insère enfin le script "mgosLoader.js"
(qui est le chargeur, et qui lui-même appelle un lanceur spécial "sgfmultipleplayer.php")
après toutes les balises de la page dont l'un des attributs est "data-maxigos".</p>
<p>Par exemple :</p>
<p class="code">
&lt;div data-maxigos="problem"&gt;<br>
(;FF[4]CA[UTF-8]GM[1]SZ[19]VW[aa:lh]<br>
EV[N° 1 .|. Niveau 1]<br>
FG[1]ST[2]<br>
AW[ab][bb][cb][db][da]<br>
AB[bc][cc][dc][ec][eb][gb][be]<br>
C[À Noir de jouer]<br>
;B[ba]C[Correct !])<br>
&lt;/div&gt;<br>
&lt;div data-maxigos="problem"&gt;<br>
(;GM[1]FF[4]ST[2]SZ[19]VW[aa:lh]<br>
EV[N° 2 .|. Niveau : 1]<br>
AW[da][ea][fb][dc][ec][fc][ad][bd][cd]<br>
AB[ba][cb][db][eb][ac][bc][cc]<br>
C[À Noir de jouer]<br>
;B[ab]C[Correct !])<br>
&lt;/div&gt;<br>
&lt;script src="ppp/_mgos/mgosLoader.js"&gt;&lt;/script&gt;
</p>
<p>Il faut évidemment adapter le chemin (ici "ppp") préfixant le script "_mgos/mgosLoader.js", 
en fonction de l'endroit où vous avez installé maxiGos sur votre site, 
et de l'endroit où se trouve votre page.</p>
<p>Eventuellement, pour utiliser un fichier de configuration qui n'est pas dans le dossier par défaut, 
on préfixe la valeur de l'attribut "data-maxigos" par un chemin relatif
entre le dossier "_sample/neo-classic/_cfg/" 
et le dossier où se trouve le fichier de configuration.
Par exemple, si l'on souhaite utiliser le fichier de configuration "comment.cfg" qui se trouve dans "_maxigos/_sample/minimalist/_cfg" :</p>
<p class="code">&lt;div data-maxigos="../../_sample/minimalist/_cfg/comment"&gt</p>
<p>Si vous utilisez une autre langue que le français ou l'anglais, 
insérez avant le script "mgosLoader.js" un script d'internationalisation correspondant à la langue choisie.
Par exemple, pour le japonais, on peut insérer le script "mgos-i18n-ja.js" se trouvant dans "_i18n/" 
(remplacez "ppp" par le chemin relatif entre votre page et le dossier "_i18n") avec le code suivant :</p>
<p class="code">&lt;script src="ppp/_i18n/mgos-i18n-ja.js"&gt;&lt;/script&gt;</p>
<p>Ensuite, utilisez l'attribut "data-maxigos-l" pour préciser la langue dans chaque balise devant contenir un lecteur.
Par exemple : </p>
<p class="code">&lt;div data-maxigos="problem"<br>
data-maxigos-l="ja"&gt;<br>
qqq/monPremierSgf.sgf<br>
&lt;/div&gt;</p>
<p>"qqq/" est le chemin relatif entre la page web et le fichier sgf.</p>
<h4>Personnalisation des lecteurs insérés par un chargeur</h4>
<p>Comme pour les lecteurs autonomes, on peut personnaliser un lecteur inséré par un chargeur
en utilisant des attributs de la forme "data-maxigos-xxx" dans la balise où s'affiche ce lecteur
(voir le chapitre "Personnalisation des lecteurs autonomes" pour plus de détails).
Il est aussi possible de modifier l'aspect du lecteur via des feuilles de style
(voir le chapitre "Liste des tags et classes utilisés par maxiGos" pour plus de détails).</p>
<h3>Méthode utilisant un plugin</h3>
<p>Voir les pages des plugins
(pour <a href="http://jeudego.org/maxiGos/joomla.php?lang=fr">joomla</a>
et pour <a href="http://jeudego.org/maxiGos/wordpress.php?lang=fr">wordpress</a>)
pour plus de détails.</p>
<h3>Méthode utilisant un BBCode</h3>
<p>Voir la <a href="http://jeudego.org/maxiGos/phpBB.php?lang=fr">page des BBCodes</a>
pour plus de détails.</p>
<h3>Internationalisation</h3>
<p>La langue par défaut utilisée par maxiGos est le français.
Si vous utilisez maxiGos uniquement dans cette langue, vous n'avez pas besoin de lire le reste de ce chapitre.</p>
<p>Vous pouvez changer cette langue par défaut pour l'anglais en incluant <span style="color:red;">data-maxigos-l="en"</span>
comme attribut de toute balise &lt;script&gt; appelant maxiGos. Par exemple :</p>
<p><span style="color:red;">&lt;script data-maxigos-l="en" src="ppp/maxigos-neo-classic-game.js"&gt;qqq/monPremierSgf.sgf&lt;/script&gt;</span></p>
<p>Notez que maxiGos ne traduit pas le contenu des sgf. Il peut juste changer la langue de ses propres messages, des textes sur ses boutons, …</p>
<p>Pour une autre langue que le français et l'anglais,
incluez en plus avant tout appel à maxiGos un script d'internationalisation pour cette autre langue.
Par exemple, pour le japonais, incluez le script "mgos-i18n-ja.js" qui se trouve dans le dossier "_i18n/" 
(remplacez "rrr" par un chemin relatif entre la page web et le dossier "_i18n") via  :</p>
<p class="code">&lt;script src="rrr/_i18n/mgos-i18n-ja.js"&gt;&lt;/script&gt;</p>
<p>Si vous ne pouvez pas ou ne souhaitez pas à avoir à insérer cette ligne dans chacune de vos pages, vous pouvez simplement
ajouter le code contenu dans le script d'internationalisation correspondant à la langue choisie au début 
de "_mgos/_js/mgos_lib.js" (si vous utilisez la version complète de maxiGos)
et au début des scripts javascript se trouvant dans les dossiers "_alone" des exemples du dossier "_sample"
(seulement si vous les utilisez explicitement dans vos pages).</p>
<p>Ensuite, ajoutez <span style="color:red;">data-maxigos-l="ja"</span> comme attribut de toute balise où un lecteur maxiGos va s'afficher. Par exemple :</p>
<p class="code">&lt;script src="ppp/maxigos-neo-classic-game.js"<br>
data-maxigos-l="ja"&gt;<br>
qqq/monPremierSgf.sgf<br>
&lt;/script&gt;</p>
<p>Tous les scripts d'internationalisation fournis avec maxiGos sont dans le dossier "_i18n".
Si le script d'internationalisation dont vous avez besoin n'existe pas encore, vous pouvez essayer de le créer
(inspirez-vous de celui du japonais). Vous pouvez aussi jeter un coup d'oeil aux 
<a href="#faq">"Questions et réponses"</a> pour en savoir plus à ce propos.</p>
<p class="note">Note 1 : si vous créez un script d'internationalisation, 
c'est une bonne pratique de choisir un code langue qui soit ISO 639 (par exemple "ja" pour japonais et non pas "jp").</p>
<p class="note">Note 2 : quand on utilise un lanceur (voir le chapitre sur les lanceurs plus haut dans ce document) 
il est plus simple est d'utiliser le paramètre "mxL" dans l'URL du lanceur pour changer la langue.</p>
<hr>
<h2>Utilisation avancée</h2>
<p class="important">Ce qui suit ne concerne que les utilisateurs avancés qui voudraient modifier certaines parties de maxiGos.</p>
<h3>Les composants</h3>
<p>Le code de maxiGos a été découpé en composants, chaque composant correspondant à une partie du lecteur. 
Par exemple le goban, la boite à commentaire, ou la barre de navigation sont des composants.</p>
<p>La liste des composants d'un lecteur se définit dans son fichier de configuration.</p>
<h4>Liste des composants prédéfinies</h4>
Les composants prédéfinis sont : </p>
<ul>
<li>"AnimatedStone" (pour poser les pierres sur le goban via une animation),</li>
<li>"BackToMain" (bouton qui permet de revenir au coup le plus proche dans la variation principale et qui n'a pas été ajouté par l'utilisateur),</li>
<li>"Comment" (boite à commentaire simple, où s'affiche le contenu de la propriété sgf C et éventuellement un contenu généré par le composant "Header"),</li>
<li>"Cut" (bouton pour supprimer une branche, ne doit pas être utiliser avec le composant "Edit"),</li>
<li>"Diagram" (fonctions d'affichage des indices, de la numérotation, des marques et des étiquettes sur le goban),</li>
<li>"Edit" (fonctions d'édition pour créer ou modifier un fichier sgf, à utiliser avec "Info" et "Menu"),</li>
<li>"File" (fonctions pour créer, ouvrir, fermer, enregistrer ou envoyer par email un fichier sgf, à utiliser avec "Sgf" et éventuellement "Menu"),</li>
<li>"Goban" (goban où s'affiche le contenu des propriétés sgf B, W, AB, AW, AE, LB, MA, CR, SQ, TR, TB, TW, ST, PL, et FG),</li>
<li>"Goto" (fonctions de déplacement pour changer le coup courant, via une barre de déplacement, ou un champ de saisie du numéro du coup, ou en cliquant sur une pierre du goban).</li>
<li>"Guess" (fonction de devinette de l'un des coups suivants, et barre d'affichage du résultat),</li>
<li>"Header" (bouton et boite d'entête, où s'affiche le contenu des propriétés sgf EV, RO, PB, PW, BR, WR, DT, PC, RU, TM, KM, HA, RE et GC),</li>
<li>"Help" (bouton et boite d'affichage de l'aide),</li>
<li>"Image" (bouton pour générer une image png),</li>
<li>"Info" (formulaire de modification des propriétés sgf EV, RO, DT, PC, PB, PW, BR, WR, KM, HA, RE, GC, AN, CP, SO, US, RU, TM, OT, ON, BT, WT, GN),</li>
<li>"Lesson" (boite à commentaire sous forme de bulle avec un assistant, où s'affiche le contenu des propriétés sgf C, BM, DO, IT et TE),</li>
<li>"Loop" (boutons d'affichage en boucle),</li>
<li>"Menu" (gestionnaire de menu, à utiliser avec au moins l'un des composants suivants : "File", "Edit" et "View"),</li>
<li>"MoveInfo" (indicateur de la couleur, du numéro, et des coordonnés du dernier coup),</li>
<li>"Navigation" (boutons permettant de naviguer d'un coup à un autre),</li>
<li>"NotSeen" (boite listant les coups numérotés déjà joués qui ne sont plus visibles sur le goban, avec leurs coordonnées), a besoin du composant "Diagram"</li>
<li>"Options" (panneau d'options, pour modifier la numérotation, l'affichage d'une marque sur le dernier coup,...),</li>
<li>"Pass" (bouton de passe),</li>
<li>"Sgf" (bouton et boite d'affichage du sgf),</li>
<li>"Solve" (boutons "recommencer tout" et "reprendre un coup", et affichage d'une réponse au coup de l'utilisateur, à utiliser pour les rejoueurs de problème),</li>
<li>"Speed" (barre de réglage de la vitesse d'affichage des coups, à utiliser en conjonction avec "Loop"),</li>
<li>"Title" (titre, où l'on affiche le contenu des propriétés sgf EV et RO),</li>
<li>"Tree" (arbre des coups),</li>
<li>"Variations" (affichage et éventuellement ajout des variations sur le goban ou dans la boite du composant),</li>
<li>"Version" (affichage de la version de maxiGos).</li>
<li>"View" (fonction pour modifier l'affichage, éventuellement à utliser avec "Menu").</li>
</ul>
<p>On n'est pas obligé d'utiliser tous les composants, et seul "Goban" est obligatoire.</p>
<p>En utilisant uniquement les composants dont on a vraiment besoin pour une utilisation donnée, 
on diminue parfois considérablement la taille du code qui sera téléchargé sur la machine de l'utilisateur, 
et donc le temps que mettra maxiGos à démarrer.</p>

<h4>Utiliser un composant prédéfini</h4>
<p>Les codes des composants sont écrits en javascript.</p>
<p>Ils sont dans des fichiers ayant un nom de la forme "mgosNomDuComposant.js".</p>
<p>Pour pouvoir utiliser des composants, 
il suffit d'ajouter dans un fichier de configuration des lignes du type 
<span class="code">$gosParam["Script"][]="_js/mgosNomDuComposant.js";</span>.</p>
<p>Si l'on veut utiliser les composants "Comment" et "Navigation" par exemple (en plus du composant "Goban" évidemment), 
on ajoutera leurs codes, ainsi que les fichiers "mgos_lib.js", "mgos_rls.js", "mgos_prs.js", et "mgos.js" 
qui sont des fichiers communs 
qui doivent être dans toutes les configurations, en ajoutant les lignes suivantes dans un fichier de configuration :</p>
<p class="code">
$gosParam["Script"][]="_js/mgos_lib.js"; // fonctions communes à tous les composants<br>
$gosParam["Script"][]="_js/mgos_rls.js"; // gestion de la règle<br>
$gosParam["Script"][]="_js/mgos_prs.js"; // parser sgf<br>
$gosParam["Script"][]="_js/mgos.js"; // code de base de maxiGos<br>
$gosParam["Script"][]="_js/mgosGoban.js"; // composant "Goban"<br>
$gosParam["Script"][]="_js/mgosComment.js"; // composant "Comment"<br>
$gosParam["Script"][]="_js/mgosNavigation.js"; // composant "Navigation"</p>
<p class="note">On peut aussi créer ses propres composants qu'il faut alors définir dans un fichier javascript du même genre que pour les composants prédéfinis.</p>
<p class="note">Dans ce fichier il suffira de définir les fonctions "createNomDuComposant()", appelée par maxiGos lors du chargement de la page, 
"initNomDuComposant()" appelée par maxiGos juste après le chargement de la page, "updateNomDuComposant()" appelée par maxiGos après chaque action de l'utilisateur, 
et "refreshNomDuComposant()" appelée en boucle (par défaut une fois par seconde). 
Il faut déclarer ces fonctions en tant que prototype pour la classe "mxG.G" (qui est définie par ailleurs dans "mgos.js"). 
Par exemple, si l'on souhaite créer un composant appelé "Cute" 
dont l'unique action est d'afficher lors du chargement de la page la phrase "Je suis là !", le code correspondant sera :</p>
<p class="code note">
mxG.G.prototype.createCute=function()<br>
{<br>
	<span style="padding-left:20px;">document.write("&lt;p&gt;Je suis là !&lt;/p&gt;");</span><br>
};<br>
</p>
<p class="note">La définition de "createNomDuComposant()" est obligatoire, mais la définition des autres fonctions est facultative.</p>
<p class="note">Il faut enfin déclarer ces fichiers javascript dans le fichier de configuration comme pour les composants prédéfinis 
par une ligne du type :</p>
<p class="code note">$gosParam["Script"][]="xxx/NomDuFichierContenantLeComposant.js";</p>
<p class="note">"NomDuFichierContenantLeComposant" peut être n'importe quel nom. Il n'a pas besoin d'être préfixé par "mgos" ni même de contenir le nom du composant.</p>
<p class="note">Les fichiers javascript des composants prédéfinis sont dans le dossier "_js". 
Mais un fichier javascript définissant un composant peut être n'importe où dans l'arborescence du site. Il convient donc de le préfixer par un chemin relatif entre le dossier "_maxigos" et le dossier où il se trouve.</p>
<p class="note">Un fichier javascript peut éventuellement contenir la définition de plusieurs composants.</p>
<p class="important">Important : ne pas oublier d'ajouter dans tous les cas les fichiers "mgos_lib.js", "mgos_rls.js", "mgos_prs.js" et "mgos.js".</p>
<h4>Les boites contenant les composants</h4>
<p>Pour que le code du composant soit exécuté (qu'il soit prédéfini ou non), 
il faut aussi ajouter une ligne de code php dans un fichier de configuration de la forme :</p>
<p class="code">$gosParam["NomDeBoite"][]="NomDeComposant";</p>
<p>"NomDeBoite" est l'identifiant d'une boite qui finit obligatoirement par "Box" (par exemple "XxxBox", "Xxx" pouvant être toute 
chaine de caractères alplanumériques). Une boite sert à regrouper les composants de maxiGos 
(essentiellement pour faciliter la mise en page).</p>
<p>"NomDeComposant" est le nom d'un des composants pouvant être utilisé par maxiGos.</p>
<p>À chaque fois qu'un nouveau nom de boite est rencontrée dans le fichier de configuration, maxiGos insère dans votre page un 
<span class="code">&lt;div class="gosNomDeBoiteDiv" id="identifiantObjetNomDeBoiteDiv"&gt;</span>. 
Ensuite, chaque instruction du fichier de configuration déclarant un composant a pour effet d'inclure le composant ayant pour nom "NomDeComposant" dans le code html de la page, 
entre les balise &lt;div&gt; et &lt;/div&gt; de la boite ayant pour nom "NomDeBoite", 
et dans l'ordre dans lequel ces instructions sont placées dans le fichier de configuration.
On peut évidemment avoir plusieurs composants par boite, puisque les boites ont pour fonction première de regrouper les composants.
</p>
<p>Les identifiants des objets (appelés "identifiantObjet") sont de la forme "d" + un numéro 
qui est incrémenté automatiquement de 1 à chaque nouvel objet maxiGos inséré dans une page, 
le premier objet maxiGos de la page ayant le numéro 1.</p>
<p>Par exemple, le goban du deuxième objet maxiGos d'une page est dans la boite :<br><br> 
<span class="code">&lt;div class="mxGobanDiv" id="d2GobanDiv"&gt;...&lt;/div&gt;</span>
</p>

<p>Voici un exemple de ce que ça peut donner en pratique (ici, on utilise trois composants : 
"Goban", "Navigation" et "Comment") :</p>
<p class="code">
&lt;?php<br>
$gosParam["Script"][]="_js/mgos_lib.js";<br>
$gosParam["Script"][]="_js/mgos_rls.js";<br>
$gosParam["Script"][]="_js/mgos_prs.js";<br>
$gosParam["Script"][]="_js/mgos.js";<br>
$gosParam["Script"][]="_js/mgosGoban.js";<br>
$gosParam["Script"][]="_js/mgosNavigation.js";<br>
$gosParam["Script"][]="_js/mgosComment.js";<br>
<br>
$gosParam["LeftBox"][]="Goban";<br>
$gosParam["LeftBox"][]="Navigation";<br>
$gosParam["RightBox"][]="Comment";<br>
?&gt;
</p>
<p>Un composant peut ne pas avoir de boite d'affichage dédiée (cas par exemple d'un composant qui se contenterait de modifier l'affichage du goban), 
voire même n'effectuer aucun affichage. 
Si on veut en utiliser un, il faudra néanmoins le déclarer dans un fichier de configuration via une ligne du type 
<span class="code">"$gosParam["NomDeBoite"][]="NomDeComposant";"</span> afin que maxiGos puisse savoir 
à quel moment il conviendra d'exécuter les actions qui y sont définies.</p>

<h3>Paramétrage des composants</h3>
<p>Un composant peut être paramétré via les fichiers de configuration.</p>
<p>Pour indiquer à maxiGos la valeur d'un paramètre, la ligne de code php à placer dans un fichier de configuration est de la forme :<br><br>
<span class="code">$gosParam["NomDeParametre"]="ValeurDuParametre";</span></p>
<p>Il faut bien faire attention aux majuscules et minuscules.</p>
<p>Par exemple, pour indiquer qu'on souhaite afficher une marque sur le dernier coup, on insérera la ligne :<br><br>
<span class="code">$gosParam["markOnLastOn"]=1;</span></p>
<p>S'il s'agit d'une chaine de caractères, il ne faut pas oublier les guillemets. Par exemple :<br><br>
<span class="code">$gosParam["initMethod"]="last";</span></p>
<p class="important">Note : pour changer le rayon des pierres, la couleur du fond et des lignes du goban, la taille et la couleur des icones dans les boutons, 
utilisez de préférence les css (voir le chapitre "Style").</p>
<p>Les paramètres que l'on peut modifier sont :</p>
<p>Paramètres généraux</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>theme</td><td>Souvent</td><td>Si la valeur de ce paramètre est définie,
maxiGos ajoute à la boite globale la classe "mx"+(la valeur de theme)+"GlobalBoxDiv". 
Ce paramètre est très utile lorsque l'on souhaite utiliser des feuilles de style communes à plusieurs types de lecteurs.
</td><td>Une chaine de caractères alphanumérique</td><td>""</td></tr>
<tr><td>config</td><td>Souvent</td><td>Si la valeur de ce paramètre est définie,
maxiGos ajoute à la boite globale la classe "mx"+(la valeur de config)+"GlobalBoxDiv". 
Ce paramètre est très utile lorsque l'on souhaite utiliser des feuilles de style pour un seul type de lecteurs dans une page contenant différents types de lecteurs.
</td><td>Une chaine de caractères alphanumérique</td><td>""</td></tr>
<tr><td>initMethod</td><td>Souvent</td><td>Action initiale de maxiGos : aller au début du Sgf ("first"), 
aller à la fin de la variante principale du Sgf ("last"), parcourrir en boucle le Sgf ("loop"). 
On ne peut utiliser "loop" que si le composant "Loop" est aussi présent.</td><td>"first", "last" ou "loop"</td><td>"first"</td></tr>
<tr><td>customStone</td><td>Rarement</td><td>S'il est défini, 
maxiGos utilise des images png pour dessiner les pierres 
qu'il recherche dans le dossier indiqué par "customStone"
(chemin relatif entre le dossier "_maxigos" et le dossier où sont les images). 
S'il est indéfini, maxiGos dessine les pierres à l'aide de fonctions graphiques javascript 
(ce qui est son comportement par défaut).<br><br>
Ces images doivent avoir pour nom "black" ou "white" suivi de "3d" ou "2d" 
suivi de leur diamètre en pixel et suffixé par ".png". 
Par exemple, pour une pierre noire en 3d de 23 pixels de diamètre, 
le nom du fichier sera "black3d23.png". 
Les diamètres doivent toujours être impairs, et compris entre 9 et 31 pixels.
Quand maxiGos a besoin de pierres plus grandes ou plus petites, il les fabrique à partir des pierres de diamètre les plus proches.<br><br>
Il convient de fabriquer toutes les images de diamètre impair en 3d (et éventuellement en 2d) entre 9 et 31 pixels 
car maxiGos peut en avoir besoin 
(maxiGos calcule la taille des pierres d'après la taille de la police de caractère du canvas dans lequel est dessiné le goban, 
et un internaute peut à tout moment faire varier cette taille en faisant par exemple un zoom du texte seulement via son navigateur).
MaxiGos ne fait aucune vérification concernant l'existence de ces images et ne cherche pas à les fabriquer quand elles sont manquantes. 
Il convient donc de s'assurer qu'elle sont bien présentes.
</td><td>un chemin vers le dossier contenant les images des pierres</td><td>"undefined"</td></tr>
<tr><td>sgfLoadCoreOnly</td><td>Parfois</td><td>S'il vaut 1, on ne garde que les informations essentielles sur la partie (EV, RO, DT, PC, PB, PW, BR, BW, BT, BW, RU, TM, OT, HA, KM, RE) lors du décodage du sgf.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>sgfSaveCoreOnly</td><td>Parfois</td><td>S'il vaut 1, on ne garde que les informations essentielles sur la partie (EV, RO, DT, PC, PB, PW, BR, BW, BT, BW, RU, TM, OT, HA, KM, RE) lors de l'encodage du sgf.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>sgfLoadMainOnly</td><td>Parfois</td><td>S'il vaut 1, on ne garde que la variante principale et les informations sur la partie (EV, RO, DT, PC, PB, PW, BR, BW, BT, BW, RU, TM, OT, HA, KM, RE) lors du décodage du sgf.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>sgfSaveMainOnly</td><td>Parfois</td><td>S'il vaut 1, on ne garde que la variante principale et les informations sur la partie (EV, RO, DT, PC, PB, PW, BR, BW, BT, BW, RU, TM, OT, HA, KM, RE) lors de l'encodage du sgf.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>fitParent</td><td>Souvent</td><td>S'il vaut 1, maxiGos réduit la largeur de la boite contenant le goban 
de manière à ce qu'elle soit moins large que l'élément HTML contenant le lecteur 
(à utiliser avec "fitMax" si le goban n'est pas un 19x19 et si maximizeGobanWidth ne vaut pas 1).<br>
S'il vaut 2, maxiGos adapte la taille des boutons de navigation
de manière à ce que la barre de navigation soit moins large que la largeur de la boite contenant le goban 
(suppose que le goban est un 19x19 ou que maximizeGobanWidth vaut 1).<br>
S'il vaut 3, on réduit à la fois la largeur de la boite contenant le goban et la taille des boutons de navigation.<br><br>
MaxiGos ne sait pas calculer les "margins" de "GobanDiv", du parent de "GobanDiv" et de "GlobalBoxDiv"
(les navigateurs ne donnent pas tous le même résultat), et suppose que ces "margins" sont nulles ou qu'elles ont la valeur "auto".
Si toutefois ces boites doivent avoir des "margins", essayez d'utiliser le paramètre "fitDelta" avec "fitParent".
</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>fitMax</td><td>Parfois</td><td>Si "fitParent" vaut 1, maxiGos considère que le goban 
a au plus "fitMax" lignes en largeur (les coordonnées autour du goban comptent pour 1 ligne de chaque côté)
pour déterminer s'il doit ou pas réduire sa taille.
</td><td>Un nombre</td><td>21 si les coordonnées sont affichées autour du goban, 19 sinon</td></tr>
<tr><td>fitDelta</td><td>Parfois</td><td>Si "fitParent" vaut 1, maxiGos retire fitDelta pixels 
à la largeur de l'élément HTML contenant maxiGos pour déterminer s'il doit ou pas réduire sa taille.
</td><td>Un nombre</td><td>0</td></tr>
<tr><td>htmlParenthesis</td><td>Parfois</td><td>S'il vaut 1, maxiGos remplace les éventuelles "&amp;#40;" et "&amp;#41;" par "(" et ")" dans le source sgf 
lorsque celui-ci est un enregistrement sgf inséré entre les balises de l'élément html où doit s'afficher le lecteur sgf
(utile par exemple en cas d'utilisation de maxiGos dans les forums fonctionnant avec phpBB3 dont l'éditeur remplace les "(" et ")" par "&amp;#40;" et "&amp;#41;").
</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>sourceFilter</td><td>Parfois</td><td>Une expression régulière que doit respecter le source sgf lorsque celui-ci 
est du code sgf inséré entre les balises de l'élément html où doit s'afficher le lecteur
(utile par exemple pour rejeter un source sgf indésirable inséré par un utilisateur dans un forum).
</td><td>Une expression régulière</td><td>Chaine vide</td></tr>
<tr><td>htmlBr</td><td>Rarement</td><td>S'il vaut 1, maxiGos remplace les &lt;br&gt;
par des retours à la ligne (au lieu d'afficher des chaines de caractères "&lt;br&gt;").<br><br>
Note : quand un enregistrement sgf (mais pas un nom de fichier ou une url) est inséré entre les balises de l'élément html où doit s'afficher le lecteur sgf,
par défaut maxiGos remplace les &lt;br&gt; par des retours à la ligne
(parce que les éditeurs des frameworks peuvent ajouter des &lt;br&gt;
quand ils détectent des retours à la ligne dans la saisie d'un utilisateur).
Quand on veut empêcher cela, il convient de fixer explicitement la valeur de "htmlBr" à 0.
</td><td>0 ou 1</td><td>"undefined"</td></tr>
<tr><td>htmlSpan</td><td>Rarement</td><td>S'il vaut 1, maxiGos affiche les &lt;span&gt; et &lt;/span&gt; comme des balises html
(au lieu d'afficher des chaines de caractères "&lt;span&gt;" et "&lt;/span&gt;").
Les balises peuvent avoir seulement un attribut "class" dont le nom est composé uniquement de lettres, chiffres, "_" et "-". 
</td><td>0 ou 1</td><td>"undefined"</td></tr>
<tr><td>htmlDiv</td><td>Rarement</td><td>S'il vaut 1, maxiGos affiche les &lt;div&gt; et &lt;/div&gt; comme des balises html
(au lieu d'afficher des chaines de caractères "&lt;div&gt;" et "&lt;/div&gt;").
Les balises peuvent avoir seulement un attribut "class" dont le nom est composé uniquement de lettres, chiffres, "_" et "-". 
</td><td>0 ou 1</td><td>"undefined"</td></tr>
<tr><td>htmlP</td><td>Rarement</td><td>S'il vaut 1, maxiGos affiche les &lt;p&gt; et &lt;/p&gt; comme des balises html
(au lieu d'afficher des chaines de caractères "&lt;p&gt;" et "&lt;/p&gt;").
Les balises peuvent avoir seulement un attribut "class" dont le nom est composé uniquement de lettres, chiffres, "_" et "-".<br><br>
Note : quand un enregistrement sgf (mais pas un nom de fichier ou une url) est inséré entre les balises de l'élément html où doit s'afficher le lecteur sgf,
par défaut maxiGos supprime les &lt;p&gt; et remplace les &lt;/p&gt; par des double retours à la ligne
(parce que les éditeurs des frameworks peuvent ajouter automatiquement des &lt;/p&gt;&lt;p&gt;
quand l'utilisateur saisie des retours à la ligne dans son texte).
Quand on veut empêcher cela, il convient de fixer explicitement la valeur de "htmlP" à 0 ou 1.
</td><td>0 ou 1</td><td>"undefined"</td></tr>
</table>
<p>Composant "AnimatedStone"</p>
<p>Par défaut, il n'y a qu'une animation disponible : une translation entre un coin du goban et 
l'intersection où doit être placée la pierre.</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>animatedStoneTime</td><td>Parfois</td><td>Temps de réference utilisé pour calculer le temps
que mettra une pierre pour aller du bol de pierres à son emplacement sur le goban. 
Le temps réel dépend de la distance entre le point de début et le point de fin de la translation.<br><br>
Sa valeur par défaut est celle du paramètre "loopTime" si le composant "Loop" est utilisé, 
1000 ms sinon.
</td><td>Nombre</td><td>1000</td></tr>
</table>
<p>Composant "Comment"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>adjustCommentWidth</td><td>Souvent</td><td>
S'il vaut 1, maxiGos ajuste la largeur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la largeur de la boite du composant à celle de cette autre boite.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
<tr><td>adjustCommentHeight</td><td>Souvent</td><td>
S'il vaut 1, maxiGos ajuste la hauteur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la hauteur de la boite du composant à celle de cette autre boite.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
<tr><td>headerInComment</td><td>Souvent</td><td>S'il vaut 1, maxiGos ajoute dans la boite à commentaire 
le contenu du composant Header lors de l'affichage de la position initiale.<br><br>
Pour que ce paramètre ait un effet, il faut que le composant "Header" soit lui aussi présent.
</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>allInComment</td><td>Rarement</td><td>S'il vaut 1, maxiGos ajoute dans la boite à commentaire le contenu 
de tous les commentaires depuis la racine jusqu'au noeud de l'arbre affiché, 
en préfixant chaque commentaire par le numéro du dernier coup joué quand (ou juste avant que) ce commentaire a été (ou ne soit) fait.</td><td>0 ou 1</td><td>0</td></tr>
</table>
<p>Composant "Diagram"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>indicesOn</td><td>Souvent</td><td>S'il vaut 1, maxiGos affiche les indices sur le pourtour du goban.<br><br>
S'il vaut 0, maxiGos n'affiche pas ces indices.<br><br>
S'il est "undefined", maxiGos obtient sa valeur via la propriété FG des fichiers sgf.
</td><td>0, 1 ou "undefined"</td><td>"undefined"</td></tr>
<tr><td>asInBookOn</td><td>Souvent</td><td>S'il vaut 1, maxiGos affiche les pierres comme dans les livres 
(c'est à dire qu'il ne retire pas les prisonniers capturés par des pierres numérotées).<br><br>
S'il vaut 0, maxiGos retire les prisonniers comme en partie réelle.<br><br>
S'il est "undefined", maxiGos obtient sa valeur via la propriété FG des fichiers sgf.
</td><td>0, 1 ou "undefined"</td><td>"undefined"</td></tr>
<tr><td>numberingOn</td><td>Souvent</td><td>
S'il vaut 0, maxiGos ne numérote pas les pierres.<br><br>
S'il vaut 1, maxiGos numérote les pierres 
(la numérotation démarre normalement à partir de la première propriété sgf B ou W rencontrée, 
et redémarre après une propriété sgf AB, AW, ou AE).<br><br>
S'il vaut 2, maxiGos numérote les pierres modulo 100 pour le premier coup numéroté.<br><br>
S'il est "undefined", maxiGos obtient sa valeur via la propriété PM des fichiers sgf.
</td><td>0, 1, 2 ou "undefined"</td><td>"undefined"</td></tr>
<tr><td>marksAndLabelsOn</td><td>Souvent</td><td>S'il vaut 1, maxiGos affiche les marques et étiquettes (contenu des propriétés sgf MA, CR, SQ, TR, LB, TB et TW).</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>numAsMarkOnLastOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos affiche le numéro du coup au lieu d'une marque sur le dernier coup.</td><td>0 ou 1</td><td>0</td></tr>
</table>
<p>Composant "Edit"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>checkRulesOn</td><td>Souvent</td><td>
S'il vaut 2, maxiGos vérifie si le coup placé par l'utilisateur est légal.
Les coups illégaux pour maxiGos sont actuellement les coups joués sur des intersections occupées, 
les suicides, et les répétitions de la dernière position.<br><br>
S'il vaut 1, maxiGos vérifie si le coup placé par l'utilisateur l'est sur une intersection inoccupée.<br><br>
S'il ne vaut ni 1 ni 2, maxiGos autorise de placer une pierre n'importe où.<br><br>
La vérification ne s'applique pas aux coups présents dans l'enregistrement sgf initial, mais seulement à ceux placés par l'utilisateur, 
car les coups illégaux sont autorisés par le standard sgf. Dans tous les cas, maxiGos ne place le coup que si la vérification est positive. 
</td><td>0, 1, 2 ou "undefined"</td><td>"undefined"</td></tr>
</table>
<p>Composant "File"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>openOnly</td><td>Parfois</td><td>S'il vaut 1, maxiGos n'affiche qu'un seul bouton "Cliquer ici pour ouvrir un fichier sgf".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideNew</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache le bouton "Nouveau" dans le menu.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideOpen</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache le bouton "Ouvrir" dans le menu.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideClose</td><td>Parfois</td><td>S'il vaut 1, maxiGos cache le bouton "Fermer" dans le menu.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideSave</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache le bouton "Enregistrer" dans le menu.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideSend</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache le bouton "Envoyer" dans le menu.</td><td>0 ou 1</td><td>0</td></tr>
</table>
<p>Composant "Goban"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>maximizeGobanWidth</td><td>Souvent</td><td>S'il vaut 1, maxiGos donne à la boite du goban (div.mxGobanDiv) la largeur d'un goban 19x19 
même si celui affiché est plus petit, ou visible partiellement.
</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>maximizeGobanHeight</td><td>Souvent</td><td>S'il vaut 1, maxiGos donne à la boite du goban (div.mxGobanDiv) la hauteur d'un goban 19x19 
même si celui affiché est plus petit, ou visible partiellement.
</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>markOnLastOn</td><td>Souvent</td><td>S'il vaut 1, maxiGos affiche une marque sur le dernier coup.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>markOnLastColor</td><td>Souvent</td><td>Couleur de la marque sur le dernier coup.</td><td>Une couleur css</td><td>"#000" sur une pierre blanche ou "fff" sur une pierre noire</td></tr>
<tr><td>in3dOn</td><td>Toujours</td><td>S'il vaut 1, maxiGos affiche les pierres et le goban avec un effet 3d.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>stretchOn</td><td>Toujours</td><td>S'il vaut 1, maxiGos affiche le goban avec une hauteur d'environ 10% supérieure à sa largeur.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>gobanFs</td><td>Rarement</td><td>Taille de la police pour le goban. Ce paramètre est rarement utilisé. 
En pratique, il est plus élégant de modifier la valeur de la propriété css "font-size" de la balise dans lequel est dessiné le goban (dans un fichier css par exemple). 
</td><td>Une taille de police css</td><td>Aucune</td></tr>
<tr><td>gobanBk</td><td>Rarement</td><td>Couleur du fond du goban. Ce paramètre est rarement utilisé. 
En pratique, il est plus élégant de le laisser à sa valeur par défaut qui est "transparent", 
et d'utiliser les propriétés css "background" du tag html dans lequel le goban est dessiné
pour modifier le fond (pas forcément uni du coup puisqu'on peut alors utiliser une image)
que verra effectivement l'utilisateur. 
</td><td>Une couleur css</td><td>"transparent"</td></tr>
<tr><td>lineColor</td><td>Rarement</td><td>Couleur des lignes du goban. 
Ce paramètre est rarement utilisé. En pratique, comme la couleur par défaut des lignes du goban est déduite de la propriété css du tag html dans lequel est dessiné le goban,
il est toujours possible et beaucoup plus élégant de changer cette couleur via les css.</td>
<td>Une couleur css</td><td>Valeur de la propriété css "color" du tag html dans lequel est dessiné le goban</td></tr>
<tr><td>starColor</td><td>Rarement</td><td>Couleur des points "étoile" du goban.</td>
<td>Une couleur css</td><td>Couleur des lignes du goban</td></tr>
<tr><td>outsideColor</td><td>Rarement</td><td>Couleur des caractères représentant les indices.</td>
<td>Une couleur css</td><td>Couleur des lignes du goban</td></tr>
<tr><td>outsideBk</td><td>Rarement</td><td>Couleur du fond des intersections où sont affichés les indices.
</td><td>Une couleur css</td><td>"transparent"</td></tr>
<tr><td>outsideFontWeight</td><td>Rarement</td><td>Graisse des caractères représentant les indices.
</td><td>"normal" ou "bold"</td><td>"normal"</td></tr>
<tr><td>focusColor</td><td>Parfois</td><td>Couleur une marque dessinée sur le goban indiquant l'intersection ayant le focus lorsque l'utilisateur navigue à l'aide du clavier.</td>
<td>Une couleur css</td><td>"#f00"</td></tr>
<tr><td>lineWidth</td><td>Rarement</td><td>Epaisseur des lignes du goban.</td>
<td>Un nombre</td><td>1 + 1/42 fois le diamètre des pierres environ</td></tr>
<tr><td>starRadius</td><td>Parfois</td><td>Rayon des points "étoile" du goban.</td>
<td>Un nombre</td><td>1.5 ou 1/10 fois le diamètre des pierres environ</td></tr>
<tr><td>focusLineWidth</td><td>rarement</td><td>Epaisseur des lignes de la marque dessinée sur le goban indiquant l'intersection ayant le focus lorsque l'utilisateur navigue à l'aide du clavier.</td>
<td>Un nombre</td><td>2 fois l'épaisseur des lignes du goban</td></tr>
<tr><td>silentFail</td><td>Parfois</td><td>S'il vaut 1, maxiGos ne fait pas d'effet visuel sur le goban si l'utilisateur clique où il ne devrait pas.</td><td>0 ou 1</td><td>0</td></tr>
</table>
<p class="important">Note : pour changer le rayon des pierres, la meilleure manière est d'utiliser les css : 
ce rayon est égal au 3/4 environ de la valeur de la propriété "font-size" du tag html dans lequel est dessiné le goban (voir le chapitre "Style"). 
Ceci permet d'harmoniser plus facilement ce rayon avec la taille des caractères affichés sur le goban dans tous les cas (comme par exemple celui où un utilisateur fait un "zoom texte seulement" dans son navigateur.</p>
<p>Composant "Goto"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>gotoBoxOn</td><td>Souvent</td><td>S'il vaut 1, maxiGos affiche une barre de déplacement dans la boite du composant.<br><br>
Sinon, maxiGos n'affiche aucune boite pour le composant.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>gotoInputOn</td><td>Souvent</td><td>S'il vaut 1, maxiGos ajoute un champ de saisie du numéro du coup courant 
dans la barre de navigation (nécessite la présence du composant "Diagram").</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>gotoInputPosition</td><td>parfois</td><td>Si gotoInputOn vaut 1, maxiGos insère le champ de saisie du numéro du coup courant 
dans la barre de navigation à la position indiquée par gotoInputPosition.</td><td>"left", "right", "center"</td><td>"center"</td></tr>
<tr><td>adjustGotoWidth</td><td>Parfois</td><td>
S'il vaut 1, maxiGos ajuste la largeur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la largeur de la boite du composant à celle de cette autre boite.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
</table>
<p>Composant "Guess"</p>
<table class="params">
<tr><td>canPlaceGuess</td><td>Souvent</td><td>S'il vaut 1, maxiGos place le coup de l'utilisateur s'il est dans l'arbre des coups. 
Il est ignoré si "canPlaceVariation" est à 1.
</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>guessBoxOn</td><td>Souvent</td><td>S'il vaut 1, maxiGos affiche une barre indiquant la distance entre le dernier click de l'utilisateur et l'emplacement d'un des coups suivants.
</td><td>0 ou 1</td><td>0</td></tr>
</table>
<p>Composant "Header"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>headerBoxOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos affiche l'entête dans la boite du composant 
(contenu des propiétés sgf EV, RO, DT, PC, ...).<br><br>
S'il vaut 0, l'entête peut être affichée soit à la place du goban via un click sur le bouton "Informations" 
qui s'affiche dans la boite du composant si headerBtnOn vaut 1, 
soit dans la boite à commentaire si headerInComment vaut 1.
</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>headerBtnOn</td><td>Souvent</td><td>S'il vaut 1, maxiGos affiche un bouton "Informations" dans la boite du composant au lieu de l'entête elle-même. 
Un click sur ce bouton affiche l'entête à la place du goban. Ce paramètre est sans effet si headerBoxOn vaut 1.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>adjustHeaderWidth</td><td>Parfois</td><td>
S'il vaut 1, maxiGos ajuste la largeur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la largeur de la boite du composant à celle de cette autre boite.
Ce paramètre est sans effet si headerBoxOn vaut 0.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
<tr><td>adjustHeaderHeight</td><td>Rarement</td><td>
S'il vaut 1, maxiGos ajuste la hauteur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la hauteur de la boite du composant à celle de cette autre boite.
Ce paramètre est sans effet si headerBoxOn vaut 0.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
<tr><td>headerLabel_&lt;xy&gt;</td><td>Parfois</td><td>Texte affiché sur le bouton. 
&lt;xy&gt; est à remplacer par un code de langue qui doit correspondre à la valeur du paramètre "mxL". Si le code langue contient un "-", remplacez-le par un "_".
</td><td>Une chaine de caractères</td><td>"Informations" (ou sa traduction)</td></tr>
<tr><td>hideTitle</td><td>Rarement</td><td>S'il vaut 1, maxiGos n'affiche pas le titre.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideBlack</td><td>Rarement</td><td>S'il vaut 1, maxiGos n'affiche pas le nom et le niveau de Noir.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideWhite</td><td>Rarement</td><td>S'il vaut 1, maxiGos n'affiche pas le nom et le niveau de Blanc.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideDate</td><td>Rarement</td><td>S'il vaut 1, maxiGos n'affiche pas la date.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hidePlace</td><td>Parfois</td><td>S'il vaut 1, maxiGos n'affiche pas le lieu.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideRules</td><td>Parfois</td><td>S'il vaut 1, maxiGos n'affiche pas le type de règle.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideTimeLimits</td><td>Parfois</td><td>S'il vaut 1, maxiGos n'affiche pas la durée de la partie.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideKomi</td><td>Rarement</td><td>S'il vaut 1, maxiGos n'affiche pas le komi.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideHandicap</td><td>Rarement</td><td>S'il vaut 1, maxiGos n'affiche pas le handicap.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideResult</td><td>Rarement</td><td>S'il vaut 1, maxiGos n'affiche pas le résultat.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideGeneralComment</td><td>Parfois</td><td>S'il vaut 1, maxiGos n'affiche pas le commentaire général.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideNumOfMovesLabel</td><td>Parfois</td><td>S'il vaut 1, maxiGos n'affiche pas "Nombre de coups :" devant le nombre de coups.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideResultLabel</td><td>Parfois</td><td>S'il vaut 1, maxiGos n'affiche pas "Résultat :" devant le résultat.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideNumOfMoves</td><td>Parfois</td><td>S'il vaut 1, maxiGos n'affiche pas le nombre de coups.</td><td>0 ou 1</td><td>1</td></tr>
<tr><td>concatKomiToResult</td><td>Parfois</td><td>S'il vaut 1, maxiGos affiche le komi après le résultat.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>concatHandicapToResult</td><td>Parfois</td><td>S'il vaut 1, maxiGos affiche le handicap après le résultat.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>concatNumOfMovesToResult</td><td>Parfois</td><td>S'il vaut 1, maxiGos affiche le nombre de coups après le résultat.</td><td>0 ou 1</td><td>0</td></tr>
</table>
<p>Note 1 : si headerBoxOn et headerBtnOn vallent tous les deux 0, maxiGos n'affiche pas du tout la boite du composant "Header".
Mais il pourra toujours afficher le contenu du composant ailleurs comme par exemple dans la boite du composant "Comment" si "headerInComment" vaut 1.</p>
<p>Note 2 : la différence entre le composant "Header" et le composant "Info" est que
le composant "Header" ne fait qu'afficher les informations
tandis que le composant "Info" permet de les modifier.</p>
<p>Composant "Help"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>helpSource_&lt;xy&gt;</td><td>Toujours</td><td>Nom du fichier d'aide à afficher.
&lt;xy&gt; est à remplacer par un code de langue qui doit correspondre à la valeur du paramètre "mxL". 
Si le code langue contient un "-", remplacez-le par un "_".
Il faut préfixer le fichier d'aide par un chemin relatif entre le dossier "_maxigos" et le dossier où se trouve le fichier d'aide. 
Il faut également que le nom du fichier d'aide commence par "help".<br><br>
Par exemple, si maxiGos fonctionne en version française, que le fichier d'aide est "helpMe.htm",
et que ce fichier est bien dans le dossier "_maxigos/_help/", "mxL" vaudra "fr", 
le nom du paramètre sera "helpSource_fr", 
et la valeur du paramètre sera "_help/helpMe.php"</td><td>Un nom de fichier</td><td>"undefined"</td></tr>
</table>
<p>Composant "Info"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>infoBoxOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos affiche l'entête dans la boite du composant 
(contenu des propiétés sgf EV, RO, DT, PC, ..., avec possibilité de les modifier).<br><br>
S'il vaut 0, l'entête peut être affichée soit à la place du goban via un click sur le bouton "Info" 
qui s'affiche dans la boite du composant si infoBtnOn vaut 1, 
soit via l'outil "Entête" du composant "Edit".
</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>infoBtnOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos affiche un bouton "Info" dans la boite du composant au lieu de l'entête elle-même. 
Un click sur ce bouton affiche un formulaire à la place du goban permettant de modifier les propriétés sgf concernées. Ce paramètre est sans effet si infoBoxOn vaut 1.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>adjustInfoWidth</td><td>Rarement</td><td>
S'il vaut 1, maxiGos ajuste la largeur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la largeur de la boite du composant à celle de cette autre boite.
Ce paramètre est sans effet si infoBoxOn vaut 0.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
<tr><td>adjustInfoHeight</td><td>Rarement</td><td>
S'il vaut 1, maxiGos ajuste la hauteur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la hauteur de la boite du composant à celle de cette autre boite.
Ce paramètre est sans effet si infoBoxOn vaut 0.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
<tr><td>infoLabel_&lt;xy&gt;</td><td>Rarement</td><td>Texte affiché sur le bouton. 
&lt;xy&gt; est à remplacer par un code langue qui doit correspondre à la valeur du paramètre "mxL". Si le code langue contient un "-", remplacez-le par un "_".
</td><td>Une chaine de caractères</td><td>"Info" (ou sa traduction)</td></tr>
</table>
<p>Note 1 : si infoBoxOn et infoBtnOn vallent tous les deux 0, maxiGos n'affiche pas du tout la boite du composant "mxInfoDiv".
Mais il pourra toujours afficher le formulaire de modification des informations ailleurs
comme par exemple via l'outil "Entête" du composant "Edit".</p>
<p>Note 2 : la différence entre le composant "Header" et le composant "Info" est que
le composant "Header" ne fait qu'afficher les informations
tandis que le composant "Info" permet de les modifier.</p>
<p>Composant "Lesson"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>adjustLessonWidth</td><td>Rarement</td><td>
S'il vaut 1, maxiGos ajuste la largeur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la largeur de la boite du composant à celle de cette autre boite.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
<tr><td>adjustLessonHeight</td><td>Souvent</td><td>
S'il vaut 1, maxiGos ajuste la hauteur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la hauteur de la boite du composant à celle de cette autre boite.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
</table>
<p>Composant "Loop"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>loopBtnOn</td><td>Souvent</td><td>S'il vaut 1, maxiGos affiche un bouton "Loop" dans la boite du composant.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>loopTime</td><td>Rarement</td><td>Temps de référence servant à calculer le temps d'attente entre deux coups lors d'un affichage en boucle.
Le temps d'attente T est allongé en cas d'affichage d'un éventuel commentaire de longueur L et se calcule selon la formule suivante : 
T=L*loopTime/20+loopTime
</td><td>Un nombre</td><td>1000</td></tr>
<tr><td>initialLoopTime</td><td>Rarement</td><td>Temps servant à calculer la durée d'affichage de la position initiale.
La durée d'affichage de cette position se calcule par la formule suivante : 
T=initialLoopTime*loopTime/1000.<br><br>
Si ce paramètre est indéfini, on calcule la durée d'affichage de la position initiale comme pour n'importe quelle autre position.
</td><td>Un nombre</td><td>"undefined"</td></tr>
<tr><td>finalLoopTime</td><td>Rarement</td><td>Temps servant à calculer la durée d'affichage de la position finale.
La durée d'affichage de cette position se calcule par la formule suivante : 
T=finalLoopTime*loopTime/1000.<br><br>
Si ce paramètre est indéfini, on calcule la durée d'affichage de la position finale comme pour n'importe quelle autre position.
</td><td>Un nombre</td><td>"undefined"</td></tr>
<tr><td>mainVariationOnlyLoop</td><td>Parfois</td><td>S'il vaut 1, maxiGos ne considère que la variation principale de l'arbre des coups.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>loopBtnPosition</td><td>parfois</td><td>Si loopBtnOn vaut 1, maxiGos insère le bouton "Loop" 
dans la barre de navigation à la position indiquée par loopBtnPosition.</td><td>"left", "right", "center"</td><td>"right"</td></tr>
</table>
<p>Composant "Menu"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>menus</td><td>Toujours</td><td>Liste des menus (valeurs de la liste parmi "File","Edit","View" ... "Window").<br><br>
Si "File" fait partie de la liste, le composant "File" doit être aussi utilisé.<br><br>
Si "Edit" fait partie de la liste, le composant "Edit" doit être aussi utilisé.<br><br>
Si "View" fait partie de la liste, le composant "View" doit être aussi utilisé.
</td><td>Une chaine de caractères listant les menus séparés par une virgule (la liste classique étant "File,Edit,View,Window")</td><td>Chaine vide</td></tr>
</table>
<p>Composant "Navigation"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>navigationBtnFs</td><td>Rarement</td><td>Taille de la police pour les boutons de navigation. Ce paramètre est rarement utilisé. 
En pratique, il est plus élégant de fixer sa valeur dans un fichier css. 
</td><td>Une taille de police css</td><td>"undefined"</td></tr>
<tr><td>navigationBtnColor</td><td>Rarement</td><td>Couleur des boutons de navigations. Ce paramètre est rarement utilisé. 
En pratique, comme cette couleur est par défaut 
la valeur de la propriété css "color" des tags html dans lequel sont dessinés les boutons,
il est plus élégant de changer cette couleur via cette propriété css.</td>
<td>Une couleur css</td><td>"undefined"</td></tr>
<tr><td>adjustNavigationWidth</td><td>Parfois</td><td>
S'il vaut 1, maxiGos ajuste la largeur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la largeur de la boite du composant à celle de cette autre boite.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
</table>
<p>Composant "NotSeen"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>adjustNotSeenWidth</td><td>Souvent</td><td>
S'il vaut 1, maxiGos ajuste la largeur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la largeur de la boite du composant à celle de cette autre boite.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
</table>
<p>Composant "Options"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>optionBtnOn</td><td>Souvent</td><td>S'il vaut 1, maxiGos affiche un bouton "Options" dans la boite du composant 
au lieu de la liste des options elle-même. 
Un click sur ce bouton affiche la liste des options à la place du goban. Ce paramètre est sans effet si optionBoxOn vaut 1.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>optionLabel_&lt;xy&gt;</td><td>Parfois</td><td>Texte affiché sur le bouton. 
&lt;xy&gt; est à remplacer par un code langue qui doit correspondre à la valeur du paramètre "mxL". Si le code langue contient un "-", remplacez-le par un "_".
</td><td>Une chaine de caractères</td><td>"Options" (ou sa traduction)</td></tr>
<tr><td>optionBoxOn</td><td>Parfois</td><td>S'il vaut 1, maxiGos affiche la liste des options dans la boite du composant.<br><br> 
S'il vaut 0, cette liste peut être affichée à la place du goban via un click sur le bouton "options" 
qui s'affiche dans la boite du composant si optionBtnOn vaut 1.
</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideMarkOnLastOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache la case permettant de changer "markOnLastOn".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideNumberingOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache la case permettant de changer "numberingOn".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideMarksAndLabelsOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache la case permettant de changer "marksAndLabelsOn".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideAsInBookOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache la case permettant de changer "asInBookOn".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideVariationMarksOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache la case permettant de changer "variationMarksOn".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideSiblingsOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache la case permettant de changer "siblingsOn".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideIndicesOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache la case permettant de changer "indicesOn".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideIn3dOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache la case permettant de changer "in3dOn".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideVariationOrGuess</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache les boutons permettant de changer "canPlaceVariation" et "canPlaceGuess".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideLoopTime</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache le champ permettant de changer la valeur de "loopTime".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideAnimatedStoneOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache la case permettant de changer "animatedStoneOn".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideAnimatedStoneTime</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache le champ permettant de changer la valeur de "animatedStoneTime".</td><td>0 ou 1</td><td>0</td></tr>
</table>
<p>Composant "Pass"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>passLabel_&lt;xy&gt;</td><td>Parfois</td><td>Texte affiché sur le bouton. 
&lt;xy&gt; est à remplacer par un code langue qui doit correspondre à la valeur du paramètre "mxL". Si le code langue contient un "-", remplacez-le par un "_".
</td><td>Une chaine de caractères</td><td>"Passe" (ou sa traduction)</td></tr>
<tr><td>canPassOnlyIfPassInSgf</td><td>Rarement</td><td>S'il vaut 1, maxiGos n'active le bouton "Passe" que si l'un des coups suivants dans le sgf est un passe.</td><td>0 ou 1</td><td>0</td></tr>
</table>
<p>Composant "Sgf"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>sgfBtnOn</td><td>Souvent</td><td>S'il vaut 1, on affiche un bouton dans la boite du composant.
Ce paramètre vaudra 0 quand on l'utilisera uniquement pour ses fonctions internes.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>noSgfDialog</td><td>Parfois</td><td>S'il vaut 1, maxiGos télécharge directement le sgf sans afficher de dialogue lors d'un click sur le bouton sgf.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>sgfLabel_&lt;xy&gt;</td><td>Parfois</td><td>Texte affiché sur le bouton. 
&lt;xy&gt; est à remplacer par un code langue qui doit correspondre à la valeur du paramètre "mxL". Si le code langue contient un "-", remplacez-le par un "_".
</td><td>Une chaine de caractères</td><td>"SGF" (ou sa traduction).</td></tr>
<tr><td>toCharset</td><td>Rarement</td><td>Ce paramètre a comme valeur le code 
d'un encodage ("UTF-8", "Big5", "GB18030", "Shift_JIS" ...).
Il sert uniquement à indiquer dans quel encodage les fichiers sgf seront générés par maxiGos 
(sa valeur remplaçant la valeur de la propriété CA initiale du sgf).
Il ne sert pas lors de la lecture ou l'affichage d'un sgf et peut être différent de l'encodage de la page.
En pratique, il est conseillé que sa valeur soit "UTF-8" (le meilleur choix) ou éventuellement identique à l'encodage de la page.
</td><td>Un code de charset</td><td>"UTF-8"</td></tr>
<tr><td>allowEditSgf</td><td>Parfois</td><td>S'il vaut 1, maxiGos permet la modification du sgf dans la boite de dialogue affichant le sgf.</td><td>0 ou 1</td><td>0</td></tr>
</table>
<p>Composant "Solve"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>canRetry</td><td>Souvent</td><td>S'il vaut 1, on affiche un bouton "Recommencer tout".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>canUndo</td><td>Souvent</td><td>S'il vaut 1, on affiche un bouton "Reprendre un coup".</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>initialMessage_&lt;xy&gt;</td><td>Parfois</td><td>
Texte affiché dans la fenêtre de commentaire 
s'il n'y a pas de propriété C dans le sgf pour le noeud courant
et si c'est la position initiale qui est affichée.
&lt;xy&gt; est à remplacer par un code langue qui doit correspondre à la valeur du paramètre "mxL". Si le code langue contient un "-", remplacez-le par un "_".
</td><td>Une chaine de caractères</td><td>"undefined"</td></tr>
<tr><td>nowhereMessage_&lt;xy&gt;</td><td>Parfois</td><td>
Texte affiché dans la fenêtre de commentaire 
si l'utilisateur clique sur une intersection et qu'aucun coup n'y est prévu dans le sgf. 
&lt;xy&gt; est à remplacer par un code langue qui doit correspondre à la valeur du paramètre "mxL". Si le code langue contient un "-", remplacez-le par un "_".
</td><td>Une chaine de caractères</td><td>"undefined"</td></tr>
<tr><td>endMessage_&lt;xy&gt;</td><td>Parfois</td><td>
Texte affiché dans la fenêtre de commentaire 
si l'utilisateur clique sur le goban alors qu'il n'y a pas de suite prévue dans le sgf. 
&lt;xy&gt; est à remplacer par un code langue qui doit correspondre à la valeur du paramètre "mxL". Si le code langue contient un "-", remplacez-le par un "_".
</td><td>Une chaine de caractères</td><td>"undefined"</td></tr>
<tr><td>forbiddenMessage_&lt;xy&gt;</td><td>Parfois</td><td>
Texte affiché dans la fenêtre de commentaire 
si l'utilisateur essaie de jouer un coup interdit par la règle (intersection déjà occupée, suicide et simple ko uniquement). 
&lt;xy&gt; est à remplacer par un code langue qui doit correspondre à la valeur du paramètre "mxL". Si le code langue contient un "-", remplacez-le par un "_".
</td><td>Une chaine de caractères</td><td>"undefined"</td></tr>
<tr><td>failMessage_&lt;xy&gt;</td><td>Parfois</td><td>
Texte affiché dans la fenêtre de commentaire 
s'il n'y a pas de propriété C dans le sgf pour le noeud courant
et si le coup joué est le dernier de sa branche et de la couleur jouée par maxiGos. 
Si pour une raison ou une autre, on ne souhaite pas voir ce message pour un coup donné, il suffit d'ajouter dans le sgf un commentaire pour ce coup.
&lt;xy&gt; est à remplacer par un code langue qui doit correspondre à la valeur du paramètre "mxL". Si le code langue contient un "-", remplacez-le par un "_".
</td><td>Une chaine de caractères</td><td>"undefined"</td></tr>
<tr><td>successMessage_&lt;xy&gt;</td><td>Parfois</td><td>
Texte affiché dans la fenêtre de commentaire 
s'il n'y a pas de propriété C dans le sgf pour le noeud courant
et si le coup joué est le dernier de sa branche et de la couleur jouée par l'utilisateur. 
Si pour une raison ou une autre, on ne souhaite pas voir ce message pour un coup donné, il suffit d'ajouter dans le sgf un commentaire pour ce coup.
&lt;xy&gt; est à remplacer par un code langue qui doit correspondre à la valeur du paramètre "mxL". Si le code langue contient un "-", remplacez-le par un "_".
</td><td>Une chaine de caractères</td><td>"undefined"</td></tr>
<tr><td>specialMoveMatch</td><td>Sometimes</td><td>
En théorie, pour représenter un coup joué "ailleurs" (c.a.d. un "tenuki"), on insère deux coups
consécutifs de la couleur opposée dans le sgf. Cependant, pour des raisons historiques,
certains fichiers sgf utilisent d'autres méthodes pour faire cela, comme insérer un passe,
un coup joué dans la partie invisble du goban, ou un coup joué en dehors du goban. 
Ce paramètre a pour but de gérer cela.<br><br>
S'il vaut 0, maxiGos place un coup de l'utilisateur s'il correspond à une continuation du sgf 
ou si deux coups consécutifs de la couleur opposée sont trouvés dans le sgf.<br><br>
S'il vaut 1, maxiGos place un coup de l'utilisateur s'il correspond à une continuation du sgf 
ou si deux coups consécutifs de la couleur opposée sont trouvés dans le sgf
ou si les coordonnées d'une continuation correspond à un coup à l'extérieur du goban (comme B[zz] ou W[zz] pour un 19x19 par exemple).<br><br>
S'il vaut 2, maxiGos place un coup de l'utilisateur s'il correspond à une continuation du sgf 
ou si deux coups consécutifs de la couleur opposée sont trouvés dans le sgf
ou si les coordonnées d'une continuation correspond à un coup à l'extérieur du goban (comme B[zz] ou W[zz] pour un 19x19 par exemple)
ou à un coup dans la partie invisible du goban (quand une propriété VW est présente).<br><br>
S'il vaut 3, maxiGos place un coup de l'utilisateur s'il correspond à une continuation du sgf 
ou si deux coups consécutifs de la couleur opposée sont trouvés dans le sgf
ou si les coordonnées d'une continuation correspond à un coup à l'extérieur du goban (comme B[zz] ou W[zz] pour un 19x19 par exemple)
ou à un coup dans la partie invisible du goban (quand une propriété VW est présente) ou à un passe.<br><br>
</td><td>0, 1, 2 ou 3</td><td>0</td></tr>
<tr><td>adjustSolveWidth</td><td>Parfois</td><td>
S'il vaut 1, maxiGos ajuste la largeur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la largeur de la boite du composant à celle de cette autre boite.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
</table>
<p>Composant "Speed"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>adjustSpeedBarWidth</td><td>Parfois</td><td>
S'il vaut 1, maxiGos ajuste la largeur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la largeur de la boite du composant à celle de cette autre boite.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
</table>
<p>Composant "Title"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>titleBoxOn</td><td>Souvent</td><td>S'il vaut 1, on affiche le titre dans la boite du composant.
Ce paramètre vaudra 0 quand on l'utilisera uniquement pour ses fonctions internes.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>translateTitleOn</td><td>Parfois</td><td>S'il vaut 1, maxiGos essaie de traduire le titre. 
Le titre est déduit des propriétés EV et RO. 
Pour que la traduction soit efficace, EV doit être de la forme "x t" avec x de la forme "1st" ou "2nd" ou "3rd" ou "nth", n étant nombre, 
et t le nom d'un titre comme "Honinbo", "Meijin", "Ing Cup", ...
RO doit être de la forme "n" ou "n (s)" n un nombre, 
et s une chaine parmi "final", "semi-final", "quarter-final", "playoff", round ou game.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideEmptyTitle</td><td>Rarement</td><td>S'il vaut 1, maxiGos cache la boite contenant le titre si celui-ci est une chaine vide.</td><td>0 ou 1</td><td>0</td></tr>
</table>
<p>Composant "Tree"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>treeFocusColor</td><td>Souvent</td><td>Couleur de fond dans l'arbre de l'image représentant le dernier noeud placé.</td>
<td>Une couleur css</td><td>"#f00"</td></tr>
<tr><td>markCommentOnTree</td><td>Rarement</td><td>S'il vaut 1, maxiGos remplace le numéro des coups commentés par un "?" dans l'arbre des coups.
</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>adjustTreeWidth</td><td>Parfois</td><td>
S'il vaut 1, maxiGos ajuste la largeur de la boite du composant à celle du goban.
S'il vaut la valeur d'une autre boite, maxiGos ajuste la largeur de la boite du composant à celle de cette autre boite.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
<tr><td>adjustTreeHeight</td><td>Parfois</td><td>
S'il vaut 1, maxiGos ajuste la hauteur de la boite du composant à celle du goban.
S'il vaut 2, maxiGos donne à l'arbre une hauteur de sorte que la boite parente de sa boite (i.e. la boite qui contient la boite div.mxTreeDiv) 
ait la même hauteur que la boite parente du goban (i.e. la boite qui contient la boite div.mxGobanDiv).
S'il vaut la valeur d'une autre boite, maxiGos ajuste la hauteur de la boite du composant à celle de cette autre boite.
</td><td>0, 1 ou nom de boite</td><td>0</td></tr>
</table>
<p>Composant "Variations"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>variationMarksOn</td><td>Souvent</td><td>S'il vaut 1, maxiGos affiche sur le goban des marques sur les intersections qui sont des débuts de variations. 
S'il vaut 0, il les cache. S'il est "undefined", maxiGos utilise la valeur de la propriété ST des fichiers sgf 
pour savoir s'il convient ou pas d'afficher ces marques.</td><td>0, 1 ou "undefined"</td><td>"undefined"</td></tr>
<tr><td>siblingsOn</td><td>Rarement</td><td>S'il vaut 1, maxiGos affiche les variations du coup courant, sinon du suivant. S'il est "undefined", maxiGos utilise la valeur de la propriété ST des fichiers sgf 
pour savoir s'il doit afficher les variations du coup courant ou du suivant.</td><td>0, 1 ou "undefined"</td><td>"undefined"</td></tr>
<tr><td>variationsBoxOn</td><td>Souvent</td><td>Affichage de la barre des variations.</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>hideSingleVariationMarkOn</td><td>Souvent</td><td>S'il vaut 1, maxiGos n'affiche pas de marque de variation quand il n'y en a qu'une. 
S'il vaut 0, maxiGos affiche les éventuelles marques même s'il n'y en a qu'une à afficher.
Ces marques permettent à l'utilisateur de pouvoir choisir la variation qu'il veut suivre en cliquant sur l'intersection où elle se trouve. 
S'il n'y a qu'une seule variation, la marque est moins nécessaire, car on est sûr de pouvoir aller au coup suivant à l'aide des boutons de navigation.
Ce paramètre est à utiliser en conjonction avec une valeur de 0 de la propriété sgf ST (si ST a une autre valeur, hideSingleVariationMarkOn sera sans effet).</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>variationColor</td><td>Souvent</td><td>Couleur des marques de variations.</td><td>Une couleur css</td><td>Couleur des lignes du goban</td></tr>
<tr><td>variationOnFocusColor</td><td>Souvent</td><td>Couleur de la marque de la variation qui a le focus.</td><td>Une couleur css</td><td>variationColor</td></tr>
<tr><td>variationBk</td><td>Souvent</td><td>Couleur du fond des marques de variations.</td><td>Une couleur css</td><td>"transparent"</td></tr>
<tr><td>variationOnFocusBk</td><td>Souvent</td><td>Couleur du fond de la marque de la variation qui a le focus.</td><td>Une couleur css</td><td>variationBk</td></tr>
<tr><td>variationStrokeBk</td><td>Rarement</td><td>Couleur du pourtour du fond des marques de variations.</td><td>Une couleur css</td><td>"transparent"</td></tr>
<tr><td>variationOnFocusStrokeBk</td><td>Rarement</td><td>Couleur du pourtour du fond de la marque de la variation qui a le focus.</td><td>Une couleur css</td><td>variationStrokeBk</td></tr>
<tr><td>variationStrokeColor</td><td>Rarement</td><td>Couleur du contour des marques de variations.</td><td>Une couleur css</td><td>"transparent"</td></tr>
<tr><td>variationOnFocusStrokeColor</td><td>Rarement</td><td>Couleur du contour de la marque de la variation qui a le focus.</td><td>Une couleur css</td><td>variationStrokeColor</td></tr>
<tr><td>variationFontWeight</td><td>Souvent</td><td>Graisse des marques de variations.</td><td>"normal" ou "bold"</td><td>"normal"</td></tr>
<tr><td>variationOnFocusFontWeight</td><td>Rarement</td><td>Graisse de la marque de la variation qui a le focus.</td><td>"normal" ou "bold"</td><td>variationFontWeight</td></tr>
<tr><td>canPlaceVariation</td><td>Souvent</td><td>S'il vaut 1, maxiGos place un coup sur l'intersection 
où vient de clicker l'utilisateur s'il est dans l'arbre des coups. 
Si celui-ci n'est pas dans l'arbre des coups (et si la valeur de la propriété sgf ST est paire), 
maxiGos ajoute le coup dans l'arbre des coups. 
L'utilisateur peut ainsi tester ses propres variantes. 
S'il vaut 0, aucun coup n'est affiché suite à un click de l'utilisateur sur une intersection.
</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>variationMarkSeed</td><td>parfois</td><td>Par défaut, maxiGos génère automatiquement une marque sur les variations en commençant par "1".
L'utilisation de nombres permet d'éviter de confondre ces marques avec les marques explicitement placés par les commentateurs qui sont en général des lettres. 
Pour remplacer la marque initiale par un autre caractère, il suffit de changer la valeur de ce paramètre, par exemple par "a" ou "A".<br><br>
Il est à noter que quelque soit la valeur de ce paramètre, si le commentateur a explicitement placé une marque sur l'intersection concernée, 
c'est cette marque qui sera affichée et non pas la marque générée automatiquement par maxiGos.<br><br>
Enfin, pour que ces marques soient effectivement affichées, il faut bien évidemment que la valeur de la propriété ST dans les fichiers sgf 
ou la valeur des paramètres "variationMarksOn" et "hideSingleVariationMarkOn" le permettent.
</td><td>un caractère quelconque</td><td>"1"</td></tr>
<tr><td>adjustVariationsWidth</td><td>Parfois</td><td>
S'il vaut 1, maxiGos ajuste la largeur de la boite du composant à celle du goban.
S'il vaut la valeur d'un autre composant, maxiGos ajuste la largeur de la boite du composant à celle de cet autre composant.
</td><td>0 ou 1</td><td>0</td></tr>
</table>

<p>Composant "Version"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>adjustVersionWidth</td><td>Rarement</td><td>
S'il vaut 1, maxiGos ajuste la largeur de la boite du composant à celle du goban.
S'il vaut la valeur d'un autre composant, maxiGos ajuste la largeur de la boite du composant à celle de cet autre composant.
</td><td>0 ou 1</td><td>0</td></tr>
<tr><td>adjustVersionHeight</td><td>Rarement</td><td>
S'il vaut 1, maxiGos ajuste la hauteur de la boite du composant à celle du goban.
S'il vaut la valeur d'un autre composant, maxiGos ajuste la hauteur de la boite du composant à celle de cet autre composant.
</td><td>0 ou 1</td><td>0</td></tr>
</table>

<p>Composant "View"</p>
<table class="params">
<tr><th>Paramètre</th><th>Utilisation</th><th>Nature</th><th>Valeurs possibles</th><th>Valeur par défaut</th></tr>
<tr><td>viewBoxOn</td><td>Rarement</td><td>S'il vaut 1, affiche une boite avec les boutons 
du menu "Affichage". 
La plupart du temps, cette boite n'est pas utilisée et les boutons du menu "Affichage" 
sont affichés dans la boite du composant "Menu".
</td><td>0 ou 1</td><td>0</td></tr>
</table>

<h3>Les feuilles de style</h3>
<h4>Généralités</h4>
<p>MaxiGos est livré avec quelques feuilles de style, mais souvent, on préfèrera utiliser 
des feuilles de style personnalisées.</p> 
<p>
On pourra les inclure soit en ajoutant dans les fichiers de configuration une ligne du genre  
<span class="code">$gosParam["Style"][]="xxx/NomDuFichierCss.css";</span> (simple et suffisant dans la plupart des cas), 
soit les inclure dans la partie "head" de la page via une ligne comme 
<span class="code">&lt;link rel="stylesheet" type="text/css" href="yyy/NomDuFichierCss.css"&gt;</span> (probablement plus efficace).</p>
<p>"xxx" est un chemin relatif entre le dossier "_maxigos" et le dossier où se trouve le fichier css.
"yyy" est un chemin relatif entre la page où l'on souhaite afficher un lecteur maxiGos et le dossier où se trouve le fichier css.</p>
<p>Les objets html principaux de maxiGos ont été définis avec une classe et un id. 
On peut soit utiliser les classes si l'on a qu'un seul type d'objet dans une page donnée, 
où plus rarement les ids si l'on souhaite afficher différemment certains objets dans une même page quand il y en a plusieurs.</p>
<p>Par précaution, il conviendra de veiller à ce que la valeur des paramètres "theme" et "config"
soient bien définis afin de pouvoir faire cohabiter plus facilement dans une même page
des objets maxiGos ayant des thèmes et des configurations différentes.</p>
<p>On a comme tags :</p>
<ul>
<li>Le div global,</li>
<li>Les div des boites regroupant les composants,</li>
<li>les tags encapsulants les composants (des &lt;div&gt; ou des &lt;h1&gt;),</li>
<li>les tags des éléments internes des composants.</li>
</ul>
<p>
Le div global est de la forme :<br><br>
<span class="code">&lt;div class="mxGlobalBoxDiv" id="identifiantGlobalBoxDiv"&gt;...&lt;/div&gt;</span>
</p>
<p>Si le paramètre "theme" est défini, on ajoute la classe "mx"+valeur de "theme"+"GlobalBoxDiv" au div global.</p>
<p>Si le paramètre "config" est défini, on ajoute la classe "mx"+valeur de "config"+"GlobalBoxDiv" au div global.</p>
<p>Si le paramètre "in3dOn" vaut 1, on ajoute la classe "mxIn3d" au div global, sinon on ajoute la classe "mxIn2d" au div global.</p>
<p>Les div des boites regroupants les composants sont de la forme :<br><br>
<span class="code">&lt;div class="mxNomDeBoiteDiv" id="identifiantObjetNomDeBoiteDiv"&gt;...&lt;/div&gt;</span></p>
<p>Les noms des classes des tags des composants commencent par "mx", suivi du nom du composant, suivi du nom du tag html. 
Les noms d'ids commencent par l'identifiant de l'objet maxiGos, 
suivi du nom du composant, suivi du nom du tag html :<br><br>
<span class="code">&lt;div class="mxNomDeComposantDiv" id="identifiantObjetNomDeComposantDiv"&gt;...&lt;/div&gt;</span></p>
<p>Pour certains composants (comme "Title"), on remplace "div" par "h1".</p>
<p>A l'intérieur de certains composants, on rencontre d'autres tags 
dont certains ont aussi des classes ou des ids, mais c'est moins systématique</p>
<p>Rappel : les identifiants des objets (appelés "identifiantObjet") sont de la forme "d" + un numéro qui est incrémenté automatiquement de 1 entre chaque objet maxiGos quand il y en a plusieurs dans une page, 
le premier objet ayant le numéro 1.</p>
<p>Par exemple, le goban du deuxième objet d'une page est dans la boite :<br><br> 
<span class="code">&lt;div class="mxGobanDiv" id="d2GobanDiv"&gt;...&lt;/div&gt;</span>
</p>
<h4>Liste des tags et classes utilisés par maxiGos</h4>
<p>Voici une liste des tags que l'on peut styler et le nom des classes associées :</p>
<p>1) Boite globale</p>
<p>La boite globale est particulière. Elle a plusieurs classes :</p>
<div style="margin-left:0px">div.mxGlobalBoxDiv,</div> 
<div style="margin-left:0px">et "mx" + valeur du paramètre "theme" + "GlobalBoxDiv" quand la valeur du paramètre "theme" est définie,</div>
<div style="margin-left:0px">et "mx" + valeur du paramètre "config" + "GlobalBoxDiv" quand la valeur du paramètre "config" est définie,</div>
<div style="margin-left:0px">et "mxIn3d" ou "mxIn2d" suivant la valeur du paramètre "in3dOn".</div>
<p>2) Boites de regroupement</p>
<div style="margin-left:20px">div.mxAaaBoxDiv</div>
<div style="margin-left:20px">...</div>
<div style="margin-left:20px">div.mxZzzBoxDiv</div>
<p>3) Boites des composants et tags internes (liste non exhaustive)</p>

<div style="margin-left:40px">div.mxBackToMainDiv</div>
	<div style="margin-left:60px">button span</div>

<div style="margin-left:40px">div.mxCommentDiv</div>
	<div style="margin-left:60px">div.mxCommentContentDiv</div>
		<div style="margin-left:80px">span.mxMoveNumberSpan (uniquement si allInComment vaut 1)</div>
		<div style="margin-left:80px">les tags du composants "Header" (uniquement si headerInComment vaut 1)</div>

<div style="margin-left:40px">div.mxCutDiv</div>
	<div style="margin-left:60px">button span</div>

<div style="margin-left:40px">div.mxEditDiv</div>
	<div style="margin-left:60px">div.mxEditToolBarDiv</div>
		<div style="margin-left:80px">button canvas, button img, et input + (.mxUnselectedEditTool ou .mxSelectedEditTool) (il s'agit des outils de la barre d'outils)</div>
	<div style="margin-left:60px">div.mxEditCommentToolDiv textarea</div>

<div style="margin-left:40px">div.mxFileDiv</div>
	<div style="margin-left:60px">button span</div>

<div style="margin-left:40px">div.mxGobanDiv</div>
	<div style="margin-left:60px">div.mxInnerGobanDiv</div>
		<div style="margin-left:80px">canvas (le canvas dans lequel est dessiné le goban)</div>

<div style="margin-left:40px">div.mxGotoDiv</div>
	<div style="margin-left:60px">canvas (le curseur dans la barre de déplacement)</div>

<div style="margin-left:40px">div.mxGuessDiv</div>
	<div style="margin-left:60px">canvas (la partie dans la barre de résultat qui est d'autant plus longue que l'on se rapproche du coup à deviner)</div>
				
<div style="margin-left:40px">div.mxHeaderDiv</div>
	<div style="margin-left:60px">button span (si headerBtnOn vaut 1)</div>
	<div style="margin-left:60px">div.mxShowContentDiv h1 (si headerBoxOn vaut 1)</div>
	<div style="margin-left:60px">div.mxShowContentDiv div.mxP span.mxHeaderSpan (si headerBoxOn vaut 1)</div>

<div style="margin-left:40px">div.mxHelpDiv</div>
	<div style="margin-left:60px">button span</div>

<div style="margin-left:40px">div.mxInfoDiv</div>
	<div style="margin-left:60px">button span (si infoBtnOn vaut 1)</div>
	<div style="margin-left:60px">div.mxInfoContentDiv div.mxInfoPageMenuDiv button.mxInfoPageBtn (si infoBoxOn vaut 1)</div>
	<div style="margin-left:60px">div.mxInfoContentDiv div.mxInfoPageMenuDiv button.mxInfoSelectedPageBtn (si infoBoxOn vaut 1)</div>
	<div style="margin-left:60px">div.mxInfoContentDiv div.mxInfoPageDiv label ou input ou textarea (si infoBoxOn vaut 1)</div>

<div style="margin-left:40px">div.mxImageDiv</div>
	<div style="margin-left:60px">button span</div>
	
<div style="margin-left:40px">div.mxLessonDiv+(.mxBM, .mxDO, .mxIT, .mxTE ou rien)</div>
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
	<div style="margin-left:60px">input (type=text), celui inséré par le composant "Goto" pour saisir un numéro de coup</div>

<div style="margin-left:40px">div.mxNotSeenDiv</div>
	<div style="margin-left:60px">div img suivi d'un span</div>

<div style="margin-left:40px">div.mxOptionsDiv</div>
	<div style="margin-left:60px">button span (si optionBtnOn vaut 1)</div>
	<div style="margin-left:60px">h1 (si optionBoxOn vaut 1)</div>
	<div style="margin-left:60px">div.mxP input (si optionBoxOn vaut 1)</div>
	<div style="margin-left:60px">div.mxP label (si optionBoxOn vaut 1)</div>

<div style="margin-left:40px">div.mxPassDiv</div>
	<div style="margin-left:60px">button.mxPassBtn span</div>
	<div style="margin-left:60px">button.mxJustPlayedPassBtn span</div>
	<div style="margin-left:60px">button.mxOnVariationPassBtn span</div>
	<div style="margin-left:60px">button.mxOnFocusPassBtn span</div>

<div style="margin-left:40px">div.mxSgfDiv</div>
	<div style="margin-left:60px">button span</div>

<div style="margin-left:40px">div.mxSolveDiv</div>
	<div style="margin-left:60px">button span</div>

<div style="margin-left:40px">div.mxSpeedDiv</div>
	<div style="margin-left:60px">button.mxSpeedPlusBtn (le "+")</div>
	<div style="margin-left:60px">div.mxSpeedBarDiv canvas (le curseur dans la barre de règlage)</div>
	<div style="margin-left:60px">button.mxSpeedMinusBtn (le "-")</div>

<div style="margin-left:40px">h1.mxTitleH1</div>

<div style="margin-left:40px">div.mxTreeDiv</div>
			
<div style="margin-left:40px">div.mxVersionDiv</div>
	<div style="margin-left:60px">span</div>

<div style="margin-left:40px">div.mxViewDiv (quand "viewBoxOn" vaut 1)</div>
	<div style="margin-left:60px">button span</div>

<p>Attention : certains composants ("animatedStone", "diagram" et "loop" par exemple), 
n'ont pas de boite, et certains composants ne sont affichés qu'à la place du goban (voir ci-dessous).</p>

<p>4) Boites popup éventuellement affichées par dessus une autre boite (.mxGobanDiv par défaut)</p>

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
		<div style="margin-left:80px">div.mxP (si "allowEditSgf" vaut 0)</div>
		<div style="margin-left:80px">textarea (si "allowEditSgf" vaut 1)</div>
	<div style="margin-left:60px">div.mxOKDiv button span</div>
<p>5) Divers</p>
<div style="margin-left:40px">div.mxDebugDiv</div>
<div style="margin-left:40px">div.mxWaitDiv</div>
<h4>Quelques précisions</h4>

<p>Certains composants ont des fonctionnements particuliers qui nécessitent de prendre quelques précautions d'emploi.</p>

<h5>Le composant "Comment"</h5>
<p>Sa boite principale est div.mxCommentDiv. Souvent, on lui donnera la propriété css "overflow:auto".</p>
<p>Elle contient la boite "div.mxCommentContentDiv" qui contient elle-même les commentaires.</p>
<p>Si le paramètre adjustCommentWidth vaut 1 (respectivement adjustCommentHeight vaut 1) dans les fichiers de configuration, 
maxiGos ajuste la largeur (respectivement la hauteur) de sa boite principale sur celle du goban.
Dans ce cas là, il ne sert donc à rien de lui donner une largeur (respectivement une hauteur) 
dans un fichier css via les propriétés "width" ou "height".</p>
<p>Lorsque la boite à commentaire est à côté du goban, la manière la plus simple de lui donner une
hauteur est de donner à adjustCommentHeight la valeur 1.</p>
<p>Lorsque la boite à commentaire est au dessus ou au dessous du goban, la manière la plus simple de lui donner une
largeur est de donner à adjustCommentWidth la valeur 1.</p>
<h5>Le composant "Edit"</h5>
<p>Sa boite principale div.mxEditDiv contient une boite div.mxEditToolBarDiv (boite de la barre d'outils), 
et une boite div.mxCommentToolDiv (boite de saisie des commentaires).</p>
<p>La boite div.mxEditToolBarDiv contient des tags internes de différents types (button canvas, button img, button span et input).
Suivant qu'ils sont ou pas sélectionnés par l'utilisateur, 
maxiGos donne à ces tags la classe .mxSelectedEditTool ou .mxUnselectedEditTool.</p>
<p>MaxiGos calcule la largeur et la hauteur des outils de div.mxEditToolBarDiv. 
Il ne sert donc à rien de vouloir leur donner une largeur et une hauteur dans un fichier css via les propriétés "width" et "height".</p>
<p>La boite div.mxEditCommentToolDiv contient un textarea. On peut les styler tous les deux comme on voudra.</p>
<p>Lors de l'affichage d'une fenêtre d'aide ou autre à la place du goban, maxiGos modifie l'opacité (propriétés css "opacity") 
de tous les outils sauf celui qui a éventuellement permis l'affichage de cette fenêtre.</p>

<h5>Le composant "Goban"</h5>
<p>Sa boite principale div.mxGobanDiv contient une boite interne div.mxInnerGobanDiv qui contient un canvas (&lt;canvas&gt;&lt;/canvas&gt;) dans lequel est dessiné le goban.</p>
<p>Pour donner un style à ce canvas, utilisez "div.mxGobanDiv canvas" dans une des feuilles de style.</p>
<ul>
<li>Le fond du goban sera celui du canvas (propriété css "background", "background-color", "background-image" ... du tag "canvas").</li>
<li>La couleur des lignes du goban sera la couleur du texte du canvas (propriété css "color" du tag "canvas").</li>
<li>Le rayon des pierres sera égal aux trois quarts environ (il est arrondi) de la taille de la police du texte du canvas (propriété css "font-size" du tag "canvas").</li>
</ul>
<p>Par exemple, pour que la couleur du goban soit #f00, celle de ses lignes #fff et le rayon des pierres 9 pixels, 
et en supposant que la classe du &lt;div&gt global soit .mxBasicGlobalBoxDiv,
utilisez :</p>
<p><span class="code">.mxBasicGlobalBoxDiv div.mxGobanDiv canvas {background-color:#f00;color:#fff;font-size:12px;}<span></p>
<p>MaxiGos calcule la hauteur et la largeur de div.mxGobanDiv, 
en tenant compte de la présence éventuelle des paramètres maximizeGobanWidth et maximizeGobanHeight dans les fichiers de configuration.
Si maximizeGobanWidth vaut 1 (respectivement maximizeGobanHeight vaut 1), 
maxiGos donne à div.mxGobanDiv la largeur (respectivement la hauteur) maximale que peut avoir le goban (goban de 19x19 + indices éventuels), 
même si un goban plus petit est affiché, ou qu'une partie du goban seulement est effectivement affichée, ou encore si les indices sont cachés.
Sinon, maxiGos donne à div.mxGobanDiv la largeur et la hauteur de la partie du goban effectivement affichée à l'écran. 
Il ne sert donc à rien de vouloir lui donner une largeur et une hauteur dans un fichier css via les propriétés "width" et "height".</p>
<p>La boite interne div.mxInnerGobanDiv a exactement la taille du canvas qu'elle entoure. 
Elle sert par exemple à donner une ombre au goban avec la propriété css box-shadow. 
Si on utilise box-shadow directement sur le canvas du goban, l'ombre peut disparaitre selon les circonstances (en particulier avec de nombreuses versions de safari).</p> 
<p>Le canvas de div.mxGobanDiv est en "position:relative" et a un "display:block". 
Quand div.mxGobanDiv est plus grand que le canvas représentant le goban, maxiGos centre le canvas 
à l'intérieur en modifiant ses propriétés "left" et "top".</p>
<p>Si l'on veut qu'une boite popup comme .mxNumberingDiv, .mxNewDiv, .mxOpenDiv, ... vienne 
s'afficher à la place du goban, .mxGobanDiv doit avoir la propriété css "position:relative".</p>
<p>Il faut éviter de donner des valeurs autre que 0 ou auto aux "margins" horizontales de
div.mxGobanDiv, du parent de div.mxGobanDiv et de div.mxGlobalBoxDiv
quand le paramètre "fitParent" n'est pas 0. Sinon, maxiGos n'arrivera pas à réduire le goban correctement.</p>

<h5>Le composant "Guess"</h5>
<p>Sa boite principale div.mxGuessDiv ne contient qu'un tag interne canvas.</p>
<p>MaxiGos modifie la largeur de ce canvas pour afficher le résultat des devinettes 
(plus l'utilisateur clique proche du coup à deviner sur le goban, plus la largeur du canvas se 
rapproche de celle de div.mxGuessDiv).</p>

<h5>Le composant "Info"</h5>
<p>Sa boite principale div.mxInfoDiv contient soit un bouton, soit une boite div.mxShowInfoDiv, 
qui à son tour contient une boite div.mxInfoContentDiv qui contient elle-même trois boites : 
une boite div.mxInfoPageMenuDiv et deux boites div.mxInfoPageDiv. La boite div.mxInfoPageMenuDiv 
contient deux boutons (tag button).</p>
<p>Quand l'utilisateur clique dans le menu div.mxInfoPageMenuDiv sur l'un des deux boutons pour 
sélectionner une page, maxiGos change la propriété "display" 
(en "table" ou "none" selon les cas) des div.mxInfoPageDiv afin d'afficher la page en question. 
Il modifie aussi la classe des boutons du menu en .mxInfoSelectedPageBtn ou .mxInfoPageBtn
selon que la page correspondante est affichée ou pas.</p>
<p>Chaque page div.mxInfoPageDiv contient une série de label+champ. 
Chaque label a une classe ayant pour nom ".m" suivi du nom de la propriété sgf à laquelle 
ils correspondent (par exemple, .mxEV pour la propriété sgf EV).
Chaque champ dans le cas général est un input text qui a une classe ayant pour nom ".m" suivi du nom 
de la propriété sgf à laquelle ils correspondent (par exemple, .mxEV pour la propriété sgf EV). 
Pour la propriété RE (le résultat de la partie), on a trois champs au lieu d'un seul qui ont pour 
classe .mxWN (champ de type select pour choisir le gagnant), 
.mxHW (champ de type select pour choisir le type de victoire) et .mxSC (input text pour le score). 
Pour la propriété GC, le champ est un textarea.</p>
<p>Si maxiGos juge que la saisie dans l'un des champs d'une page div.mxInfoPageDiv est incorrecte, 
il ajoute à ce champ la classe .mxBadInput (attention : les vérifications faites par maxiGos sont 
très approximatives).</p>
<h5>Le composant "Pass"</h5>
<p>Il ne contient qu'un tag interne : button.</p>
<p>Ce bouton a pour classes .mxBtn et .mxPassBtn, mais on lui ajoute d'autres classes en fonction des 
circonstances :</p>
<ul>
<li>MaxiGos ajoute .mxJustPlayedPassBtn si le coup qui vient d'être placé est un passe,</li>
<li>MaxiGos ajoute .mxOnVariationPassBtn si l'un des coups possibles (suivants ou alternatifs selon le valeur de style) est un passe,</li>
<li>MaxiGos ajoute .mxOnFocusPassBtn si le coup qui va être joué est un passe.</li>
</ul>
<p>Gràce à ce mécanisme, on peut définir dans un fichier css quel aspect devra avoir le bouton en fonction de la situation.</p>

<h5>Le composant "Lesson"</h5>
<p>Sa boite principale est div.mxLessonDiv et contient une boite div.mxBalloonDiv (bulle à commentaire),
et une image img.mxAssistantImg qui représente l'assistant.</p>
<p>Si le paramètre adjustLessonWidth vaut 1 (respectivement adjustLessonHeight vaut 1) dans les fichiers de configuration, 
maxiGos ajuste la largeur (respectivement la hauteur) de sa boite principale sur celle du goban.
Dans ce cas là, il ne sert donc à rien de vouloir lui donner une largeur et une hauteur dans un fichier css via les propriétés "width" et "height".</p>
<p>Pour les commentaires longs, le composant utilise la propriété css "animation" dont la valeur est calculée via javascript en fonction des circonstances.</p>

<h5>Le composant "Menu"</h5>
<p>Sa boite principale contient une série de couples de boites (div.mxOneMenuDiv, div.mxSubMenuDiv)
correpondant chacun à un menu. La boite div.mxOneMenuDiv, toujours visible, contient un seul bouton 
qui est le titre du menu. La boite div.mxSubMenuDiv, initialement cachée (via un "display:none"), 
contient une série de boutons, chaque bouton correspondant à un choix possible du menu.</p>
<p>Quand l'utilisateur clique sur le bouton d'un div.mxOneMenuDiv, 
le div.mxSubMenuDiv correspondant devient visible (via un "display:block").</p>
<p>La boite div.mxSubMenuDiv sera à nouveau cachée par maxiGos (via un "display:none") si l'utilisateur a fait un choix 
en cliquant sur l'un des boutons que cette boite contient, ou si l'utilisateur clique
sur le bouton de la boite div.mxOneMenuDiv associée, ou si l'utilisateur clique ailleurs, 
ou si aucun choix n'est effectué au bout de quelques secondes.</p>

<h5>Le composant "Navigation"</h5>
<p>Les boutons de navigation sont de type button (&lt;button&gt;&lt;div&gt;&lt;span&gt;...&lt;/span&gt;&lt;/div&gt;&lt;/button&gt;. 
Pour changer le style des boutons, utilisez "div.mxNavigationDiv button" dans une des feuilles de style.<p>
<h5>Le composant "Tree"</h5>
<p>Sa boite principale div.mxTreeDiv a les styles suivants imposés : "position:relative;" et "height" (pour ce dernier, uniquement si adjustTreeHeight vaut 1).</p>
<p>Sa boite principale contient des canvas qu'il ne faut pas chercher à styler.</p>
<p>Il est recommandé de donner à div.mxTreeDiv une hauteur si adjustTreeHeight vaut 0 car tous ses tags internes sont en position:absolute,
ce qui lui donne une hauteur nulle par défaut (maxiGos ne calcule pas la largeur et la hauteur du composant car dans le cas général, 
on n'en affiche de toute façon qu'une partie en ajoutant une propriété css "overflow" à div.mxTreeDiv).</p>
<P>Lors de l'affichage d'une fenêtre d'aide ou autre à la place du goban, maxiGos modifie l'opacité (propriété css "opacity") de div.mxTreeDiv.</p>
<h4>Styles et classes modifiés par maxiGos</h4>
<p>Voici en résumé la liste des styles et classes que maxiGos modifie ou impose via des instructions javascript.</p>
<h5>Styles modifés dans le code javascript (liste non limitative)</h5>
<ul>
<li>Composant Comment</li>
<ul>
<li>"width" de .mxCommentDiv (uniquement si adjustCommentWidth=1)</li>
<li>"height" de .mxCommentDiv (uniquement si adjustCommentHeight=1)</li>
</ul>
<li>Composant Edit</li>
<ul>
<li>"max-width" de .mxEditToolBarDiv</li>
<li>"outline:none" de .mxEditToolBarDiv</li>
<li>"width" et "height" des buttons et input de .mxEditToolBarDiv (concerne tous les outils)</li>
<li>"font-size" du input de .mxEditToolBarDiv</li>
<li>"display" de #dnFigureOrNot1P et #dnFigureOrNot2P.</li>
</ul>
<li>Composant Goban</li>
<ul>
<li>"width" et "height" de .mxGobanDiv</li>
<li>"visibility" de .mxGobanDiv</li>
<li>"top", "left", "width" et "height" de .mxInnerGobanDiv</li>
<li>"position:relative" et "outline:none" de .mxInnerGobanDiv</li>
<li>"display:block" et "position:relative" du canvas de .mxInnerGobanDiv</li>
<li>"font-size" du canvas de .mxInnerGobanDiv (uniquement si gobanFs vaut quelque chose)</li>
</ul>
<li>Composant Goto</li>
<ul>
<li>"position:relative" de .mxGotoDiv</li>
<li>"width" de .mxGotoDiv (uniquement si adjustGotoWidth=1)</li>
<li>"display:block" et "position:relative" du canvas de .mxGotoDiv</li>
<li>"left" du canvas de .mxGotoDiv</li>
</ul>
<li>Composant Guess</li>
<ul>
<li>"visibility" de .mxGuessOMeterDiv</li>
<li>"width", "height" et "margin-top" du canvas de .mxGuessDiv</li>
</ul>
<li>Composant Header</li>
<ul>
<li>"width" de .mxHeaderDiv (uniquement si adjustHeaderWidth=1)</li>
<li>"height" de .mxHeaderDiv (uniquement si adjustHeaderHeight=1)</li>
</ul>
<li>Composant Info</li>
<ul>
<li>"width" de .mxInfoDiv (uniquement si adjustInfoWidth=1)</li>
<li>"height" de .mxInfoDiv (uniquement si adjustInfoHeight=1)</li>
<li>"display" des .mxInfoPageDiv</li>
</ul>
<li>Composant Lesson</li>
<ul>
<li>"width" de .mxLessonDiv (uniquement si adjustLessonWidth=1)</li>
<li>"height" de .mxLessonDiv (uniquement si adjustlessonHeight=1)</li>
<li>"display" de .mxBalloonDiv (de "block" à "none")</li>
</ul>
<li>Composant Navigation</li>
<ul>
<li>"width" de .mxNavigationDiv (uniquement si adjustNavigationWidth=1)</li>
<li>"outline:none" de .mxNavigationDiv</li>
<li>"font-size" des buttons et input de .mxNavigationDiv (uniquement si fitParent&2)</li>
</ul>
<li>Composant NotSeen</li>
<ul>
<li>"width" de .mxNotSeenDiv (uniquement si adjustNotSeenWidth=1)</li>
<li>"width", "padding-left" et "padding-right" des tags internes de .mxNotSeenDiv</li>
</ul>
<li>Composant Solve</li>
<ul>
<li>"width" de .mxSolveDiv (uniquement si adjustSolveWidth=1)</li>
<li>"outline:none" de .mxSolveDiv</li>
</ul>
<li>Composant Speed</li>
<ul>
<li>"width" de .mxSpeedDiv (uniquement si adjustSpeedWidth=1)</li>
<li>"position:relative" et "outline:none" de .mxSpeedDiv</li>
<li>"position:relative" de .mxSpeedBarDiv</li>
<li>"position:absolute" du canvas de .mxSpeedDiv</li>
<li>"width" et "margin-left" du canvas de .mxSpeedDiv</li>
</ul>
<li>Composant Tree</li>
<ul>
<li>"width" de .mxTreeDiv (uniquement si adjustTreeWidth=1)</li>
<li>"height" de .mxTreeDiv (uniquement si adjustTreeHeight vaut 1)</li>
<li>"position:relative" et "text-align:left" de .mxTreeDiv</li>
<li>certains styles (non listés) des tags internes à .mxTreeDiv</li>
<li>Note : les tags internes de .mxTreeDiv étant tous en "position:absolute", sa largeur est par défaut celle de son conteneur (mais on peut le modifier via les feuilles de style)</li>
</ul>
<li>Boites popup venant s'afficher à la place du goban (.mxNumberingDiv, .mxNewDiv, .mxOpenDiv, .mxSaveDiv, .mxSendDiv, 
.mxShowHeaderDiv, .mxShowHelpDiv, .mxInfoDiv, .mxShowOptionDiv, .mxShowSgfDiv)</li>
<ul>
<li>"display:none" ou "display:block"</li>
<li>"width" et "height"</li>
<li>"position:absolute", "top:0", "left:0" et "outline:0"</li>
</ul>
</ul>
<h5>Classes modifées dans le code javascript</h5>
<ul>
<li>ajoute .mxIn3d à .mxGlobalBoxDiv si "in3dOn" vaut 1</li>
<li>ajoute .mxIn2d à .mxGlobalBoxDiv si "in3dOn" vaut 0</li>
<li>ajoute .mxUnder à la boite parente (.mxGobanDiv par défault) d'une boite popup 
(.mxNumberingDiv, .mxNewDiv, .mxOpenDiv, ...) lorsque celle-ci est affichée</li>
<li>ajoute .mxBM à .mxLessonDiv si le noeud sgf courant a une propriété BM</li>
<li>ajoute .mxDO à .mxLessonDiv si le noeud sgf courant a une propriété DO</li>
<li>ajoute .mxIT à .mxLessonDiv si le noeud sgf courant a une propriété IT</li>
<li>ajoute .mxTE à .mxLessonDiv si le noeud sgf courant a une propriété TE</li>
<li>ajoute .mxJustPlayedPassBtn à .mxPassBtn si le coup qui vient d'être placé est un passe</li>
<li>ajoute .mxOnVariationPassBtn à .mxPassBtn si l'un des coups possibles (suivants ou alternatifs selon le valeur de style) est un passe</li>
<li>ajoute .mxOnFocusPassBtn à .mxPassBtn si le coup qui va être joué est un passe</li>
<li>remplace .mxUnselectedEditTool par .mxSelectedEditTool en cas de sélection d'un outil dans la barre d'outils du composant "Edit"</li>
<li>remplace .mxSelectedEditTool par .mxUnselectedEditTool en cas de désélection d'un outil dans la barre d'outils du composant "Edit"</li>
<li>remplace .mxInfoSelectedPageBtn par .mxInfoPageBtn en cas de sélection d'une page dans le composant "Info"</li>
<li>remplace .mxInfoPageBtn par .mxInfoSelectedPageBtn en cas de désélection d'une page dans le composant "Info"</li>
<li>ajoute .mxBadInput à un input si l'utilisateur a entré dans un champ une valeur non conforme selon maxiGos dans une des pages du composant "Info"</li>
</ul>
<h3>Lanceur sur mesure</h3>
<p>Dans la plupart des cas, "sgfplayer.php" suffit comme lanceur. Mais on peut avoir parfois besoin de se créer son propre lanceur. 
Un tel lanceur doit contenir l'instruction <span class="code">header("content-type: application/x-javascript;charset=UTF-8");</span>, 
inclure le script "gosLib.php" qui est dans le dossier "_php" de maxiGos via une instruction du type <span class="code">include("ppp/gosLib.php");</span> où 
ppp est le chemin relatif entre le lanceur et "gosLib.php", 
et appeler la fonction php "gosStart()". Celle-ci est définie dans "gosLib.php".</p> 
<p>La fonction "gosStart()" a pour but de générer un script javascript qui sera exécuté par le navigateur de l'utilisateur.</p>
<p>Cette fonction prend plusieurs paramètres. 
Le premier paramètre est le sgf à utiliser, 
le deuxième un fichier de configuration, 
le troisième un code langue,
le quatrième l'identifiant d'un couple de balises de la page,
le cinquième un switch qui s'il vaut 1 indique qu'il ne faut pas inclure les fichiers css et js de la configuration dans la page.</p>
<p>La fonction renvoie une chaine de caractère contenant le script javascript généré.</p>
<p>Un appel à gosStart() sera par exemple <span class="code">print gosStart($sgf,$cfg,$lang);"</span>.</p>
<p>$sgf contient le nom d'un fichier sgf ou un texte représentant du sgf ou l'url d'un fichier sgf 
(correspond au paramètre "sgf" de l'url du lanceur "sgfplayer.php"),
$cfg le nom d'un fichier de configuration (correspond au paramètre "cfg" de l'url du lanceur "sgfplayer.php"), 
et $lang un code langue, comme "fr" (français) ou "en" (anglais) (correspond au paramètre "mxL" de l'url du lanceur "sgfplayer.php").</p>
<p>L'éventuel quatrième paramètre contient l'identifiant d'un élément html contenant éventuellement du sgf, 
et destiné à contenir un lecteur maxiGos (correspond au paramètre "plc" de l'url du lanceur "sgfplayer.php").
En pratique, il est rarement utilisé et on lui donne la valeur "", qui signifie que le lecteur s'affichera dans la balise du script
ayant déclenché l'exécution de "gosStart()". Il est par contre essentiel si on utilise un chargeur tel que "mgosLoader.js".</p>
<p>L'éventuel cinquième paramètre permet de réduire la taille du code 
en cas de présence de plusieurs lecteurs maxiGos de même configuration dans une même page.
Il ne peut bien évidemment être utilisé avec la valeur 1 qu'à partir du deuxième lecteur de la page, 
et de préférence si le premier lecteur est de même configuration.</p>
<p>On peut donner n'importe quel nom à ce lanceur.</p>
<p>Certains exemples fournis avec maxiGos ont leur propre lanceur. Inspirez-vous en !</p>
<h2>Encodage</h2>
<h3>Encodage de la page dans laquelle on souhaite insérer un lecteur maxiGos</h3>
<p>
MaxiGos fait tout en UTF-8, mais la page dans laquelle est inséré un lecteur maxiGos peut être dans n'importe quel encodage.</p>
<p>Lorsqu'on utilise un lanceur tel que "sgfplayer.php" ou le chargeur "mgosLoader.js" 
qui lui-même appelle le lanceur "sgfmultipleplayer.php", 
on n'a rien de spécial à faire pour que maxiGos fonctionne.
En effet, ce sont les lanceur de maxiGos qui indiquent au navigateur que maxiGos produit du contenu en UTF-8 
(via la fonction php header()),  
et c'est le navigateur qui peut alors transformer automatiquement ce que lui fourni maxiGos 
(qui est donc encodé en UTF-8) dans l'encodage de la page.
</p>
<p>Par contre, si la page dans laquelle est inséré un lecteur maxiGos n'est pas en UTF-8 et qu'on 
utilise un lecteur autonome maxiGos comme "maxigos-basic.js", "maxigos-comment.js, ... ou qu'on insère l'un 
des scripts d'internationalisation "mgos-i18n-&lt;xy&gt;.js" qui sont tous des fichiers javascript fournissant du contenu en UTF-8, 
on doit ajouter dans leur balise &lt;script&gt; l'attribut charset avec la valeur "UTF-8". 
En effet, ces scripts n'ont pas de moyens par eux-même, 
contrairement aux scripts php via la fonction php header(), d'indiquer à la page qu'ils fournissent du contenu en UTF-8. 
Ainsi, le navigateur pourra tout de même transformer de manière appropriée ce contenu dans l'encodage de la page.</p>
<p>Il est à noter que lorsqu'on insère directement du sgf dans la page (sans utiliser de fichier sgf donc), 
maxigos ignore la propriété CA de ce sgf puisque de facto, ce sgf a le même encodage que la page et 
non l'encodage indiqué dans sa propriété CA. A priori, on n'a rien de spécial faire dans ce cas, 
car quand on copie du sgf à l'aide d'un logiciel de traitement de texte dans le code d'une page html/php, 
c'est le logiciel de traitement de texte qui fait la conversion appropriée (il faut tout de même 
que l'encodage réel de la page corresponde au charset spécifié d'une manière ou d'une autre comme
par exemple via un <span class="code">&lt;meta charset="..."&gt;</span>, mais c'est en général le cas
sans quoi tout texte dans la page risque d'être mal affiché, et pas seulement ce que produit maxiGos).</p>
<h3>Encodage des fichiers sgf</h3>
<p>
L'encodage d'un fichier sgf doit être indiqué dans sa propriété CA. 
Et par défaut, quand un fichier sgf n'a pas de propriété "CA", cela signifie qu'il doit être encodé en ISO-8859-1. 
Si la propriété CA est présente dans le fichier sgf, l'encodage réel du fichier doit correspondre 
à la valeur de la propriété CA.
</p>
<p>
MaxiGos utilise cette propriété CA pour déterminer l'encodage du fichier sgf, 
et transforme tout en UTF-8 (il sera donc toujours un peu plus rapide d'utiliser des fichiers sgf en UTF-8). 
Il est de ce fait possible d'utiliser des fichiers sgf d'encodages variés au sein d'une même page.
</p>
<p>Quand l'affichage n'est pas celui attendu, 
c'est le plus souvent dû au fait que le fichier a un encodage réel différent de celui 
qui a été spécifié dans sa propriété CA (faute malheureusement extrêmement courante dans les fichiers sgf d'origine asiatique). 
Pour corriger ce problème, il faut soit modifier la propriété CA du fichier sgf pour que sa valeur corresponde 
à son encodage réel, soit ré-enregistrer le fichier dans l'encodage spécifié 
dans sa propriété CA (on peut faire tout ça avec la plupart des éditeurs de texte, 
le plus difficile étant de déterminer quel est l'encodage réel du fichier).</p>
<p>Ceci étant, bien qu'en théorie maxiGos peut fonctionner dans une page qui n'est pas en "UTF-8", 
et lire des fichiers qui ne sont pas en "UTF-8", 
il vaut mieux quand on le peut tout faire en UTF-8.</p>
<h3>Encodage et internationalisation</h3>
<p>Encodage et internationalisation sont deux choses différentes. "UTF-8" est adapté pour toute(?) langue, 
aussi c'est le meilleur choix quand on peut l'utiliser. Quand cela n'est pas possible, 
attention, car certains encodages peuvent ne pas afficher certains caractères de certaines langues. 
Par exemple, les mots en japonais d'un fichier sgf
en Shift-JIS ne pourront pas être transformés automatiquement et s'afficher correctement dans une page en "ISO-8859-1". 
Par contre, ils pourront être transformés automatiquement et s'afficher correctement dans une page en 'UTF-8".
N'utilisez pas des noms d'encodage tels que "UTF-8", "ISO-8859-1", "Shift-JIS", "Big5", "GB18030" 
comme valeur de $mxL.
Utilisez un code langue comme "en", "fr", "ja", zh", "zh-tw", ...</p>
<h3>Diagnostic à effectuer en cas de mauvais affichage (caractères illisibles ou douteux)</h3>
<h4>Vérifier l'encodage du fichier sgf</h4>
<h5>Le fichier sgf n'a pas de propriété CA</h5>
<p>Si le fichier sgf n'a pas de propriété CA,
et si en ouvrant le fichier avec un éditeur de texte, celui-ci détecte un autre encodage 
que "ISO-8859-1", 
 et si l'affichage du contenu dans l'éditeur semble bon (pas de caractère illisble ou douteux),
il devrait suffire d'ajouter dans le fichier sgf après le premier ";" la propriété CA 
avec comme valeur le nom de l'encodage détecté par l'éditeur (par exemple CA[UTF-8]).</p>

<p>Si le fichier sgf n'a pas de propriété CA,
et si l'encodage détecté par l'éditeur est "ISO-8859-1",
et si l'affichage dans l'éditeur semble mauvais (caractères illisibles ou douteux), alors le problème vient bien du fichier sgf 
(le fichier a probablement mal été enregistré par son auteur et retrouver le bon encodage sera plus ou moins facile :
si l'on arrive à retrouver le bon encodage il faudra transformer (la méthode dépend de ce que l'auteur a fait) le fichier et l'enregistrer dans cet encodage,
en n'oubliant pas de donner aussi à la propriété CA du fichier sgf le nom de cet encodage).</p>

<p>Si le fichier sgf n'a pas de propriété CA,
et si l'encodage détecté par l'éditeur est "ISO-8859-1",
et si l'affichage dans l'éditeur semble bon, alors le problème ne vient probablement pas du fichier sgf.</p>

<h5>Le fichier sgf a une propriété CA</h5>

<p>Si le fichier sgf a une propriété CA, et si en ouvrant le fichier avec un éditeur de texte, 
celui-ci détecte un autre encodage que celui indiqué par la propriété CA, 
et si l'affichage du contenu dans l'éditeur semble bon (pas de caractère illisble ou douteux)
il devrait suffire de remplacer la valeur de la propriété CA par le nom de l'encodage détecté par l'éditeur.</p>

<p>Si le fichier sgf a une propriété CA, 
et si l'encodage détecté par l'éditeur correspond à celui indiqué dans la propriété CA du fichier sgf, 
et si l'affichage dans l'éditeur semble mauvais (caractères illisibles ou douteux), alors le problème vient bien du fichier sgf
(le fichier a probablement mal été enregistré par son auteur et retrouver le bon encodage sera plus ou moins facile :
si l'on arrive à retrouver le bon encodage il faudra transformer (la méthode dépend de ce que l'auteur a fait) le fichier et l'enregsitrer dans cet encodage,
en n'oubliant pas de donner aussi à la propriété CA du fichier sgf le nom de cet encodage).</p>

<p>Si le fichier sgf a une propriété CA, 
et si l'encodage détecté par l'éditeur correspond à celui indiqué dans la propriété CA du fichier sgf, 
et si l'affichage dans l'éditeur semble bon, alors le problème ne vient probablement pas du fichier sgf.</p>

<h4>Vérifier l'encodage de la page</h4>

<p>Si la page n'est pas encodée en "UTF-8", vérifiez que l'encodage employé dans le fichier sgf
peut effectivement être transformé et affichée avec l'encodage de la page.</p>

<p>Si la page n'est pas encodée en "UTF-8", et si vous utilisez un lecteur maxiGos autonome, 
vérifiez que vous avez bien un charset="UTF-8" dans la balise &lt;script&gt; du lecteur, et
éventuellement dans la balise &lt;script&gt; d'un fichier de langue maxiGos.</p>

<p>Si vous avez créé un composant, ou modifié un composant de maxiGos, 
vérifiez que vous l'avez bien enregistré en "UTF-8" 
(attention au copier-coller d'un code source affiché par un navigateur : 
les caractères non latin peuvent y être mal codés).</p>

<p>Sinon, dans les autres cas, le problème vient d'ailleurs.</p>

<h2>Annexe 1 : tous les dossiers et fichiers</h2>
<h3>Dossiers principaux</h3>
<ul>
<li>le dossier "_doc" : contient les documentations, les pages de téléchargement, le fichier de licence…,</li>
<li>le dossier "_help" : contient les fichiers d'aide de l'éditeur sgf,</li>
<li>le dossier "_i18n" : contient les scripts d'internationalisation,</li>
<li>le dossier "_img" : contient des images,</li>
<li>le dossier "_js" : contient les scripts javascript des composants,</li>
<li>le dossier "_mgos" : contient les scripts des lanceurs et chargeur,</li>
<li>le dossier "_php" : contient divers scripts php,</li>
<li>le dossier "_sample" : contient des exemples d'utilisation de maxiGos.</li>
</ul>
<h3>Contenu du dossier "_mgos"</h3>
<ul>
<li>le chargeur "mgosLoader.js" : insére des lecteurs maxiGos entre des balises quelconques,</li>
<li>le lanceur "sgfplayer.php" : fabrique "à la volée" les lecteurs maxiGos,</li>
<li>le lanceur "sgfmultipleplayer.php" : utilisé par "mgosLoader.js"</li>
</ul>
<h3>Contenu du dossier "_php"</h3>
<ul>
<li>"aloneLib.php" : bibliothèque de fonctions pour fabriquer les lecteurs autonomes,</li>
<li>"aloneLink.php" : affiche les liens vers les lecteurs autonomes,</li>
<li>"aloneMaker.php" : fabrique les lecteurs autonomes,</li>
<li>"aloneViewer.php" : affiche les lecteurs autonomes,</li>
<li>"gosLib.php" : bibliothèque de fonctions pour générer le code javascript des lecteurs,</li>
<li>"path.php" : calcule les chemins nécessaires pour maxiGos,</li>
<li>"version.php" : indique la version de maxiGos,</li>
</ul>
<h2><a name="faq">Annexe 2 : questions et réponses</h2>
<p class="important">Question : en partant de rien, que dois-je faire au minimum pour insérer 
un lecteur autonome maxiGos dans l'une de mes pages ?</p>
<ol>
<li>Affichez dans un navigateur la <a href="http://jeudego.org/maxiGos/_maxigos/_doc/_fr/download.php">page de téléchargement</a>.</li>
<li>Téléchargez le lecteur autonome "maxigos-neo-classic-basic.js".</li>
<li>Créez à la racine de votre site un dossier "maxiGos" et copiez "maxigos-neo-classic-basic.js dedans.</li>
<li>Insérez dans la page où vous voulez que maxiGos affiche quelquechose les balises
&lt;script&gt; et &lt;/script&gt; avec "/maxiGos/maxigos-neo-classic-basic.js" comme valeur de l'attribut "src",
et insérez entre ces balises un enregistrement sgf. Par exemple :<br>
<span class="code">&lt;script src="/maxiGos/maxigos-basic.js"&gt;(;FF[4]CA[UTF-8]GM[1]SZ[19];B[pd];W[dc];B[pp];W[fp];B[de];W[ee];B[ef];W[ed];B[dg];W[co])&lt;/script&gt;</span></li>
<li>Et voilà!</li>
</ol>
<p class="important">Question : en partant de rien, que dois-je faire au minimum 
pour insérer un lecteur maxiGos dans une de mes pages à l'aide du lanceur "sgfplayer.php" ?</p>
<ol>
<li>Téléchargez l'archive contenant maxiGos (un fichier nommé "_maxigosnnn.zip" où nnn est 
une version de maxiGos).</li>
<li>Décompressez l'archive contenant maxiGos : le contenu se retrouve dans un dossier nommé "_maxigos".</li>
<li>Copiez le dossier "_maxigos/" n'importe où sur le serveur hébergeant votre site 
(par la suite, on va supposer qu'il a été placé à la racine du site, 
mais si ce n'est pas le cas, il suffit d'adapter les chemins indiqués dans la ligne insérant un lecteur maxiGos 
dans la page).</li>
<li>Supposons que la page devant contenir maxiGos s'appelle "page1.php" et qu'elle est dans un sous-dossier du dossier racine du site nommé "_pages".</li>
<li>Supposons que le fichier sgf à afficher est une partie qui s'appelle "partie1.sgf" et qu'il est dans un sous-dossier du dossier racine du site nommé "_sgf".</li>
<li>Le chemin devant le lanceur doit être le chemin relatif entre la page devant contenir maxiGos (ici "page1.php") et le lanceur (ici "sgfplayer.php").</li>
<li>Le chemin devant le fichier sgf (ici "partie1.sgf") doit être le chemin relatif entre le lanceur (ici "sgfplayer.php") et le fichier sgf (ici "partie1.sgf").</li>
<li>Insérez dans la page "page1.php" à l'endroit où vous voulez que maxiGos apparaisse la ligne :<br>
<span class="code">&lt;script src="../_maxigos/_mgos/sgfplayer.php?sgf=&lt;?php print urlencode("../_sgf/partie1.sgf");?&gt;"&gt;&lt;/script&gt;</span></li>
<li>Et voilà !</li>
</ol>
<p class="important">Question : avec quels navigateurs maxiGos fonctionne-t-il ?</p>
<p>
MaxiGos fonctionne avec la quasi-totalité des navigateurs dont Chrome, Firefox, Safari (v5 et postérieure), Internet Explorer (v9 et postérieure)... 
Il ne fonctionne pas du tout avec Internet Explorer v8 ou antérieures. 
Parfois, seules certaines fonctionnalités peuvent ne pas être disponibles avec les vieux navigateurs 
(en particulier l'ouverture de fichiers sgf par maxiGos, quand on l'utilise en tant qu'éditeur, 
s'ils sont stockés localement sur la machine de l'internaute n'est pas possible avec Internet Explorer v9).
</p>
<p class="important">Question : maxiGos n'affiche pas le goban. 
Comment faire le diagnostic ?</p>
<p>Vérifiez que vous avez bien copié le dossier "_maxigos" à l'endroit approprié sur le serveur.</li>
<p>Suspectez les chemins préfixant les scripts d'appel à maxiGos dans les lignes 
qui appellent maxiGos dans votre page.</p>
<p>Affichez le code source de la page, et si votre navigateur sait faire ça 
(firefox sait bien le faire, les autres moins bien en général), 
cliquez sur une ligne qui appelle maxiGos dans votre page 
(on va supposer pour la suite que vous avez utilisé "sgfplayer.php").
Si vous avez un message du genre "The requested URL xxx/yyy/sgfplayer.php was not found on this server" 
le chemin devant sgfplayer.php n'est pas bon.
Si par contre il n'y a pas de message d'erreur, cliquez dans le code source sur la ligne 
qui appelle maxiGos. Cela affiche en général le code javascript correspondant à cette ligne.
Si une page blanche apparait, c'est probablement que l'un des scripts de maxiGos a été modifié 
et contient une erreur de syntaxe.
Sinon, si du code javascript apparait, il s'agit probablement d'un bug 
dans le fichier de configuration correspondant 
ou plus généralement dans le code de maxiGos.</p>

<p class="important">Question : maxiGos affiche le goban mais pas le contenu du fichier sgf. Comment faire le diagnostic ?</p>
<p>Vérifiez si le fichier sgf est bien à l'endroit approprié sur le serveur.</p>
<p>Si c'est bien le cas, suspectez alors le chemin préfixant le nom du fichier sgf ou le nom du fichier
dans la ligne qui insère maxiGos dans votre page.</p>
<p>Il est aussi possible que maxiGos n'ait pas eu le droit d'ouvrir le fichier sgf. 
Il faut dans ce cas placer vos fichiers sgf dans un autre endroit, 
ou changer les droits d'accès à ces fichiers 
(le droit en écriture dans ces fichiers sgf n'est cependant jamais nécessaire).</p>

<p class="important">Question : maxiGos affiche seulement le goban et la barre de navigation 
alors que d'autres composants devraient aussi s'afficher. Comment faire le diagnostic ?</p>
<p>Lorsque maxiGos ne trouve pas le fichier de configuration spécifié, 
il s'affiche avec la configuration par défaut qui ne comprend que le goban et la barre de navigation.</p>
<p>Suspectez le chemin préfixant le nom du fichier de configuration 
ou le nom de ce fichier lui-même dans la ligne qui appelle maxiGos dans votre page.</p>

<p class="important">Question: comment changer la taille du goban ?</p>
<p>Il y a plusieurs méthodes pour faire cela. 
La plus facile est de changer la valeur du paramètre css "font-size" de l'élement html dans lequel est dessiné le goban. 
Par exemple, si vous utilisez un lecteur de type "Basic", pour donner la valeur "12px" à ce paramètre, 
ajoutez quelque part dans un fichier css :</p>
<p class="code">.mxBasicGlobalBoxDiv div.mxGobanDiv canvas {font-size:12px !important;}</p>
<p>Pour un lecteur de type "Xxx", remplacez "Basic" dans "mxBasicGlobalBoxDiv" par "Xxx".</p>

<p class="important">Question : comment afficher maxiGos dans une page s'adaptant aux mobiles 
("responsive design") ?</p>
<p>On dispose principalement de deux méthodes pour faire cela.</p>
<p>La première méthode est de donner au paramètre "fitParent" la valeur 1, 2 ou 3 
(par exemple dans le fichier de configuration du lecteur maxiGos).
Dans ce cas, maxiGos va automatiquement redimensionner la largeur du goban et/ou la taille des boutons de navigation 
en fonction de la largeur de l'élement html contenant le lecteur.
</p>
<p>Quand le goban fait la largeur du lecteur (design vertical), 
et si l'on fait en sorte que la largeur des autres composants soit ajustée automatiquement par maxiGos 
(via l'utilisation des paramètres adjustXxxWidth), 
cette méthode est appropriée pour rendre maxiGos adaptatif.</p>
<p>La deuxième méthode consiste à modifier la largeur du goban et des boutons de navigation 
(et éventuellement la taille des autres composants de maxiGos)
en fonction de la taille de l'écran en utilisant les css. 
Pour faire varier ces tailles en fonction de la largeur disponible,
et en supposant que votre boite globale a pour classe "mxMyGlobalBoxDiv" 
(c'est à dire que le fichier de configuration contient 
<span class="code">$gosParam["theme"]="My";</span>),
vous pouvez insérer dans vos fichiers css les lignes suivantes, 
en les adaptant selon vos besoins :</p>
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
<p>Avec cette méthode, vous pouvez faire tout ce qui est nécessaire pour rendre maxiGos adaptatif 
quelque soit la configuration du lecteur, 
mais c'est sensiblement plus compliqué qu'avec la première méthode. 
Voir les exemples du dossier "_sample" pour avoir un aperçu de ce que cela donne.</p>
<p>
Dans les deux cas, afin de forcer la page à s'ajuster à la taille de l'écran d'un mobile,
n'oubliez pas d'ajouter dans la partie &lt;head&gt; de la page une ligne du genre :</p>
<p class="code">
&lt;meta name="viewport" content="width=device-width,initial-scale=1.0"&gt;
</p>

<p class="important">Question : j'utilise un lecteur autonome maxiGos mais il s'affiche en français, 
et je souhaite qu'il s'affiche en une autre langue. Que puis-je faire ?</p>
<p>Relisez le chapitre "Internationalisation".</p>
<p>Si la langue que vous souhaitez utiliser n'a pas encore de script d'internationalisation dans "_maxigos/_i18n/", voir la question suivante.</p>
<p class="important">Question : je voudrais traduire maxiGos en une autre langue. Comment procéder ?</p>
<p>Dupliquez "_maxigos/_i18n/mgos-i18n-ja.js" et renommez le fichier en remplaçant les deux dernières 
lettres par le code de cette nouvelle langue (de préférence un code ISO 639). 
Remplacez les "ja" au début du fichier par le code de la nouvelle langue.
Remplacez tous les textes qui sont en japonais par leur traduction dans la nouvelle langue 
(ils sont précédés par leurs équivalents en anglais) 
et supprimez ou éventuellement ré-écrivez ou créez si nécessaire les fonctions 
dont le nom commence par "build" ou "transalte"
(ces fonctions sont "buildDate", "buildRank", "buildMove", "buildNumOfMoves", "buildRules", "buildTimeLimits", "buildKomi", "buildResult" et "transalteTitle"). 
Si l'une de ces fonctions est absente, maxiGos utilise des fonctions par défaut pour produire un résultat acceptable. Aussi, vous pouvez laisser de côté 
la réécriture de ces fonctions si cela vous semble trop compliqué. 
Enfin, enregistrez le fichier en UTF-8.</p>
<p class="important">Question : j'utilise maxiGos dans une page qui n'est pas en UTF-8. Comment faire cela ?</p>
<p>Si vous utilisez un lecteur autonome, ajoutez charset="UTF-8" à vos balises contenant le code de maxiGos 
(si vous utilisez un lanceur comme sgfplayer.php, vous n'avez rien à faire de spécial car le lanceur fait tout ce qu'il faut). 
Par exemple :</p>
<p><span class="code">&lt;script charset="UTF-8" 
src="_alone/maxigos-minimal-basic.js"&gt;../_sgf/game/blood-vomit.sgf&lt;/script&gt;</span>.</p>
<em>Remerciements à Alfredo Pernin, Chantal Gajdos, Julien Payrat, Lao Lilin, Mickaël Simon, Motoki Noguchi, 
Olivier Besson, Olivier Dulac, Patrice Fontaine, Tony Yamanaka
et beaucoup d'autres pour leurs conseils ou contributions à ce projet !</em>
<p><?php if (file_exists("../../index.php")) print "<a href=\"../../index.php?lang=fr\">Accueil</a>";?><!--
--><a href="<?php print str_replace("/_fr/","/_en/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../../_img/flag/en.gif">English</a><!--
--><a href="<?php print str_replace("/_en/","/_fr/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../../_img/flag/fr.gif">Fran&ccedil;ais</a></p>
</body>
</html>