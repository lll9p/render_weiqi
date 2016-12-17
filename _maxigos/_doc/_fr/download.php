<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="initial-scale=1.0,user-scalable=yes">
<?php include "../../_php/version.php";?>
<title>Page de téléchargement de maxiGos v<?php print $v;?></title>
<style>
.important {color:red;}
.flag {border:1px solid #ccc;vertical-align:middle;}
.menu a {padding-right:1em;vertical-align:middle;}
</style>
</head>
<body>
<div class="menu"><?php if (file_exists("../../../index.php")) print "<a href=\"../../../index.php?lang=fr\">Accueil</a>";?><!--
--><a href="documentation.php">Documentation</a><!--
--><a href="<?php print str_replace("/_fr/","/_en/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../../_img/flag/en.gif"> English</a><!--
--><a href="<?php print str_replace("/_en/","/_fr/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../../_img/flag/fr.gif"> Fran&ccedil;ais</a></div>
<h1>MaxiGos v<?php print $v;?> - Page de téléchargement</h1>
<p><em>Copyright 1998-<?php print date("Y");?> - François Mizessyn - francois.mizessyn@orange.fr</em></p>
<p>
MaxiGos est un lecteur sgf permettant d'afficher des parties ou problèmes de go dans une page web. 
Il est écrit en php (pour la partie s'exécutant sur le serveur)
et javascript (pour la partie s'exécutant via le navigateur de l'utilisateur final,
qui n'a rien d'autre à faire que d'avoir laissé javascript activé dans son navigateur).</p>
<p>Vous pouvez utiliser maxiGos gratuitement pour votre site (<a href="../license.txt">licence</a> de type BSD).</p>
<h2>Téléchargement de la version complète de maxiGos</h2>
<?php
$vb=str_replace(".","",$v);
$vbn="_maxigos".$vb;
$vbne=$vbn.".zip";
$dir="../../../";
$mxL="fr";
?>

<?php if (file_exists($dir.$vbne)) { ?>
<p><a href="<?php print $dir.$vbne;?>">Cliquez ici pour télécharger maxiGos V<?php print $v;?></a>.</p>
<?php } else print "<p><span class=\"important\">Archive introuvable sur ce site !</span> Essayez <a href=\"http://jeudego.org/maxiGos/?lang=fr\">http://jeudego.org/maxiGos/?lang=fr</a> !</p>";?>

<h2>Note pour les utilisateurs des versions précédentes</h2>
<p class="important">Dans la version 6.57 de maxiGos, plusieurs changements importants ont été effectués.</p>
<p class="important">Si vous utilisiez une version précédente de maxiGos,
attention aux chemins et noms de fichiers dans vos pages
(en particulier les chemins et noms des fichiers de configuration,
des scripts d'internationalisation et des scripts des lecteurs autonomes) !</p>
<p class="important">Attention aux noms de classes maxiGos si vous avez personnalisé le css de maxiGos. Les classes de la boite globale de maxiGos ont changé
(la classe "mx"+valeur de l'attribut "GlobalBox"+"GobalBoxDiv" est remplacée par "mx"+valeur de l'attribut "theme"+"GobalBoxDiv" et "mx"+valeur de l'attribut "config"+"GobalBoxDiv").</p>
<p class="important">Attention à la manière d'inclure du sgf dans vos pages (l'attribut "data-sgf-file" a été remplacé par "data-maxigos-sgf").</p>

<h2>Téléchargement des lecteurs autonomes uniquement</h2>
<p>Ces lecteurs sont conçus pour fonctionner seuls (tout le code dont ils ont besoin est encapsulé dans un seul fichier).</p>
<p>La langue par défaut de maxiGos est le français. 
Pour utiliser maxiGos dans une autre langue, consultez le chapitre "Internationalisation" de <a href="documentation.php">la documentation</a>.</p>

<?php $path2maxigos="../../";include "../../_php/aloneLink.php";?>

<h2>Corrections apportées dans la 6.62</h2>
<ul>
<li>Réparation des liens de téléchargements.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.61</h2>
<ul>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.60</h2>
<ul>
<li>Correction d'un bug dans le composant "View" qui emp^chait de changer le fond du goban avec le navigateur Chrome.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.59</h2>
<ul>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.58</h2>
<ul>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.57</h2>
<ul>
<li><span style="color:red;">Changement dans certains noms de fichiers et dossiers.
Attention à vos chemins et vos noms de fichiers dans vos codes !</span>
"_local" devient "_i18n", et les noms des scripts de langue deviennent "maxigos-i18n-xx.js" au lieu de "maxigos-loc-xx.js".
Déplacements des dossiers "_img", "_js", "_php" de "_mgos" vers le dossier "_maxigos".
Déplacement des dossiers "_cfg" et "_css" de "_mgos" vers "_sample/classic".
Déplacement des scripts ".js" du dossier "_alone/" vers "_sample/classic/_alone".
Déplacement des scripts ".php" du dossier "_alone" vers "_php".
Regroupement des images dans le dossier "_img" du dossier "_maxigos".
Changement du nom de "GGosLib.php" en "gosLib.php".
Suppression du dossier "_alone" du dossier "_maxigos".</li>
<li><span style="color:red;">Modification dans la manière d'inclure les sources sgf.</span>
Le nom de l'attribut "data-sgf-file" devient "data-maxigos-sgf".
La valeur de l'attribut "data-maxigos-sgf", la valeur du paramètre sgf des lanceurs en php, 
le texte que l'on place dans la balise &lt;script&gt;
ou le texte que l'on place dans une balise dont l'id est indiqué dans le paramètre plc d'un lanceur
peuvent désormais tous être soit un texte représentant du sgf,
soit le nom d'un fichier sgf,
soit l'url d'un script générant un texte réprésentant du php. On utilise désormais uniquement AJAX
pour récupérer les sgf (on ne fait plus aucun parsing des sgf côté serveur).
Il en découle que seuls peuvent être utilisés les fichiers et url respectant la règle "même origine"
(même protocole, même domaine, même port que la page appelante).</li> 
<li><span style="color:red;">Remplacement du paramètre "GlobalBox" par les paramètres "theme" et "config".
La boite globale de maxiGos peut avoir désormais 4 classes.</span>
La première est "mxGobalBoxDiv",
la deuxième est "mx"+valeur du paramètre "theme"+"GlobalBoxDiv",
la troisième est "mx"+valeur du paramètre "config"+"GlobalBoxDiv",
la quatrième est "mxIn3d" ou "mxIn2d" selon la valeur du paramètre "in3dOn".</li>
<li><span style="color:red;">Grand ménage dans les exemples d'utilisation de maxiGos.</span>
L'exemple "neo-classic basic" devient la configuration par défaut.</li>
<li>Le composant "View" permet désormais de modifier le fond du goban en lui donnant
aussi la valeur de l'url d'une image en plus d'une couleur (au lieu de seulement une couleur auparavant).</li>
<li>Réécriture du composant "Lesson". On ne fait plus défiler le texte des grands commentaires
(on simplifie en se contentant d'afficher à la place une bulle aussi grande que nécessaire).</li>
<li>Réécriture du composant "Navigation". Les flèches sur les boutons sont désormais dessinées via css au lieu de canvas.</li>
<li>Suppression du composant "Kifu".</li>
<li>Suppression du paramètre "selectColor".</li>
<li>Suppression du paramètre "versionBoxOn".</li>
<li>Suppression du paramètre "classicShadow".</li>
<li>Modification dans la gestion des classes css du bouton "Passe".</li>
<li>Ajout d'un bouton "Annuler" quand on affiche le sgf si éditer ce sgf est possible.</li>
<li>Amélioration de la navigation au clavier.
Certains éléments qui n'étaient pas accessibles le sont mieux désormais
(par exemple les composants "Comment" et "Tree" quand ils avaient des scrollbars n'étaient pas accessibles sous Chrome).
Lorsque l'on essaie de placer un coup sur le goban,
la barre d'espace permet de valider le choix en plus de la touche "Entrer"
(auparavant seule la touche "Entrer" permettait de le faire).</li>
<li>Inversion des paramètres $plc et $included dans la fonction gosStart() dans "gosLib.php".</li>
<li>Les fichiers d'aide sont désormais inclus dans le code des lecteurs autonomes
(auparavant, ils étaient des ressources externes à ces lecteurs).</li>
<li>Suppression du script "addLocalization.php".</li>
<li>Suppression du paramètre "htmlInSgfOn".</li>
<li>Ajout des paramètres "htmlBr", "htmlSpan", "htmlDiv" et "htmlP".</li>
<li>Modification des paramètres "AdjustXxxWidth" et "AdjustXxxHeight".
Ils peuvent prendre désormais tous la valeur d'une autre boite (au lieu de la valeur 0 ou 1).
De plus, adjustTreeHeight peut prendre la valeur 2 qui signfie qu'on adapte la hauteur du composant
pour que son parent soit de la même hauteur que le parent du goban
(antérieurement, cela correspondait à la valeur 1,
et adjustTreeHeight n'avait pas de valeur permettant d'avoir une hauteur d'arbre identique à celle du goban).</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.56</h2>
<ul>
<li>Les boutons de type "Text" de la barre d'outils du composant "Edit"
(bouton "AsInBook", bouton "Indices", ...)
deviennent tous des boutons de type "Canvas".</li>
<li>Correction d'un bug dans le composant "AnimatedStone"
(le bouton "Suivant" des lecteurs ne marchait pas en cas de présence 
dans la même page
d'un lecteur de type "problem" et d'un lecteur de type "tree").</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.55</h2>
<ul>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.54</h2>
<ul>
<li><span style="color:red;">Changement majeur du processus de traduction de maxiGos</span>
(mxG.L n'est plus utilisée). Il est désormais possible d'avoir différents maxiGos en
différentes langues dans une même page.
Voir le chapitre "Internationalisation" de la documentation pour plus d'information.</li>
<li>Changement de la valeur par défaut de "hideNumOfMoves" à 1.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.53</h2>
<ul>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.52</h2>
<ul>
<li>Ajout du support de l'évènement "wheel" pour naviguer dans l'arbre des coups.</li>
<li>Ajout de l'exemple "Ambiance neo-classique" (dont une version autonome des lecteurs).</li>
<li>Refonte des exemples "Minimalist Neo Classic style" et "Ambiance rfg.jeudego.org".</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.51</h2>
<ul>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.50</h2>
<ul>
<li>Renommage de HTMLParenthesis en htmlParenthesis.</li>
<li>Les balises html provenant du sgf sont désormais affichées comme du texte (pas comme du html) par défaut.
Ajout du paramètre htmlInSgfOn pour permettre l'affichage de ces balises comme en html.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.49</h2>
<ul>
<li>Ajout de la possibilité d'éditer le sgf directement via le composant "Sgf" (et ajout du parametre "allowEditSgf").</li>
<li>Corrige dans le composant "Option" l'activation/désactivation des champs NumFrom et NumWith.</li>
<li>Ajout du paramètre "alternativePath" à l'exemple "Alternative"
(chemin relatif entre le dossier du script courant et le dossier "Alternative").</li>
<li>Remplacement de document.head par document.getElementsByTagName('head')[0]
(mieux supporté par les vieux navigateurs).</li>
<li>Modification de la manière de charger les css afin de mieux supporter certains vieux navigateurs.</li>
<li>Ajout du composant "AnimatedStone" et de l'exemple "Anime".</li>
<li>Les boites popup peuvent désormais être affichées par dessus n'importe quelle autre boite.</li>
<li>Suppression du paramètre "gobanFocus".</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.48</h2>
<ul>
<li>Correction d'un bug introduit dans la version 6.47 qui faisait planter les lecteurs autonomes avec certains navigateurs.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.47</h2>
<ul>
<li>Correction d'un (gros) bug introduit avec la v 6.45 dans le composant "Navigation" : 
au moins sur les navigateurs webkits, quand "fitparent" valait 2 ou 3, les naviagteurs plantaient.</li>
<li>Correction d'un bug dans l'affichage de l'image produite par le composant "Image" : 
au moins sur les navigateurs webkits, l'image était remplacée par un rectangle noir.</li>
<li>Meilleur support de l'encodage GB18030 (sur certains serveurs pas si vieux, 
la fonction php mb_convert_encoding() ne peut pas utiliser GB18030. Si c'est le cas, 
maxiGos utilise à la place CP936 qui en est un sous-ensemble.</li>
<li>Modification de la méthode de téléchargement des sgf et suppression du script sgfDownload.php.</li>
<li>Ajout du paramètre "toCharset" au composant "Sgf". Ce paramètre a comme valeur le code 
d'un encodage ("UTF-8", "Big5", "GB18030", "Shift_JIS" ...).
Il sert uniquement à indiquer dans quel encodage les fichiers sgf seront générés par maxiGos 
(sa valeur remplaçant la valeur de la propriété CA initiale du sgf).</li>
<li>Ajout de paliatifs dans les lecteurs autonomes lorsqu'une ressource externe (une image ou un script) n'est pas trouvée 
(voir dans la documentation les parties concernant les lecteurs autonomes).</li>
<li>Changement dans les chemins préfixant les noms des fichiers d'aide dans les fichiers de configuration 
(voir dans la documentation les parties concernant les fichiers d'aide).</li>
<li>Amélioration des <a href="../_sample/charset/charset.php">exemples de test de charset</a>. 
Ajout d'explications dans les exemples <a href="../_sample/charset/sample-in-Big5.php">Big5</a>, 
<a href="../_sample/charset/sample-in-GB18030.php">GB18030</a> 
et <a href="../_sample/charset/sample-in-Shift_JIS.php">Shift_JIS</a>.</li>
<li>Ajout du composant "Version" à toutes les configurations classiques et ajout du paramètre 
"versionBoxOn" qui permet de l'afficher/le cacher à la volée en cas de besoin.</li>
<li>Amélioration des exemples "alone" et "alone2".</li>
<li>Correction d'un bug dans "addLocalization.php" (ce bug avait pour effet de faire échouer l'insertion ou
la suppression des scripts de traduction dans les scripts plus gros que 100kB environ, 
en particulier "maxigos-edit.js").</li>
<li>Suppression du paramètre $plc de la fonction "aloneMaker()" dans "GGosLib.php" et adaptation des 
script l'utilisant en conséquence.</li>
<li>Suppression du paramètre $outBuf de la fonction "gosStart()" dans "GGosLib.php" et adaptation des 
script l'utilisant en conséquence.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.46</h2>
<ul>
<li>Ajout des paramètres "initialMessage_&lt;xy&gt;", "failMessage_&lt;xy&gt;", "successMessage_&lt;xy&gt;" 
et  "specialMoveMatch" au composant "Solve".</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.45</h2>
<ul>
<li>Meilleure prise en compte des codes langue contenant un "-" comme "zh-tw" (chinois traditionnel).</li>
<li>Ajout de valeurs à fitParent pour adapter la taille des boutons de navigation à la largeur du goban.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.44</h2>
<ul>
<li>Corrections de plusieurs petits bugs d'affichage en cas de présence d'antislashs dans le sgf.</li>
<li>Modifications des fonctions de fabrication des lecteurs autonomes.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.43</h2>
<ul>
<li>Ajout des exemples "charset/sample-in-Big5.php", "charset/sample-in-GB18030.php" et "charset/sample-in-Shift-JIS.php" qui montrent une manière d'utiliser maxiGos dans des pages encodées en Big5, GB18030 et Shift-JIS.</li>
<li>Amélioration de l'affichage de l'arbre des coups en cas de lecture d'un très gros fichier sgf.</li>
<li>Déplacement des fonctions de numérotation des coups dans l'arbre des coups du composant "Tree" vers le composant "Diagram", 
ces fonctions étant utilisées désormais aussi par le composant "Goto".</li>
<li>L'élément "gotoInput" du composant "Goto" affiche désormais pour le coup courant le même numéro que celui figurant dans l'arbre des coups 
(antérieurement, ce numéro pouvait être différent quand la numérotation de la branche courante n'était pas triviale, 
comme par exemple si elle ne commençait pas par 1 ou avait d'autres particularités). 
L'avantage est de ne pas perturber l'utilisateur quand l'arbre des coups ou la numérotation sur le goban sont visibles. 
L'inconvénient est que si ni l'arbre des coups ni la numérotation sur le goban ne sont visibles, et si la numérotation n'est pas triviale, 
l'affichage dans l'élément "gotoInput" pourra surprendre (mais les cas correspondants sont rares d'où notre choix).</li>
<li>L'élément "gotoInput" du composant "Goto" ne s'affiche désormais que si le composant "Diagram" est présent 
(le composant a désormais besoin de fonctions définis dans le composant "Diagram").</li>
<li>L'élément "gotoInput" du composant "Goto" vaut désormais "" au lieu de "0" quand le noeud courant n'a pas de coup 
(sinon,c'est perturbant quand la numérotation de la branche courante ne commence pas à 1).</li>
<li>Ajout d'un script de traduction en chinois traditionnel (mgos-loc-zh-tw.js).</li>
<li>Suppression du paramètre javascript jsSgfParse (remplacé par le test !this.rN.Focus). 
Ce paramètre était a priori ajouté uniquement par la fonction php gosStart().</li>
<li>Modification de la méthode affichant un message en cas de chargement long.</li>
<li>Suppression du paramètre id de la fonction createAll() 
qu'on remplace quand c'est nécessaire avant d'appeler cette fonction 
par une ligne du genre "mxG.D[mxG.K].s=document.getElementById(id);" avant l'appel à createAll().</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.42</h2>
<ul>
<li>Ajout du protocole et du nom de domaine au début du chemin calculé par gosRootAbsolutePath 
(sinon bug quand maxiGos n'est pas sur le même serveur que la page qui l'utilise).</li>
<li>Déplacement de la définition de la classe mxG.N vers mgos_prs.js.</li>
<li><span style="color:red;">Regroupement des variables globales dans un objet unique mxG.</span></li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.41</h2>
<ul>
<li>Modification de la manière dont est générée l'image représentant le goban dans le composant "Image".
Antérieurement, l'image était générée avec un fond transparent (mais éventuellement affichée avec un fond coloré).
Désormais, on prend en compte l'éventuelle présence d'un background-image ou d'un background-color et on l'inclut dans l'image.</li>
<li>Ajout d'un message d'attente lors du chargement d'un gros fichier sgf (uniquement sur les navigateurs récents).</li>
<li>Ajout du paramètre "hideEmptyTitle".</li>
<li>Ajout des paramètres "adjustNavigationWidth" et "adjustSolveWidth".</li>
<li>Ajout de lecteurs autonomes pour le style "minimaliste".</li>
<li>Ajout de lecteurs autonomes pour le style "tatami".</li>
<li>Ajout de l'exemple "Ambiance réaliste".</li>
<li>Simplification de la fonction calculant les coordonnées d'un click sur le goban.</li>
<li>Contournement d'un bug dans la détection de click sous android lors de la sélection d'une région du goban avec le composant "Edit".</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.40</h2>
<ul>
<li>Modification de la fonction d'envoi d'un sgf par email afin de se passer complètement du serveur.</li>
<li>Correction d'un bug qui lorsque "fitParent" était à 1, empêchait un zoom correct du goban 
via un changement de la valeur de l'em (que ce soit à l'aide du zoom du navigateur ou via javascript).</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.39</h2>
<ul>
<li>Lorsque "fitParent" est à 1, on effectue le calcul de la taille maximale du goban
en supposant qu'on a toujours une barre de défilement verticale, afin d'éviter dans certains cas 
un redimmensionnement sans fin du fait de l'apparition/disparition de cette éventuelle barre de défilement.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.38</h2>
<ul>
<li>Ajout des paramètres "HTMLParenthesis" et "sourceFilter".</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.37</h2>
<ul>
<li>Ajout des paramètres "fitParent" et "maxFit" qui permettent d'adapter la taille du goban de manière à 
ce qu'il soit toujours moins large que l'élément HTML contenant le lecteur.</li>
<li>Ajout de l'exemple "Ambiance minimaliste".</li>
<li>Amélioration du rendu du composant "NotSeen".</li>
<li>Composant "Speed" : inversion des boutons "+" et "-" (le "+" est désormais à droite),
et amélioration de la gestion de la position du curseur.</li>
<li>Amélioration de la gestion de la navigation à l'aide du clavier. Possibilité de simuler un click sur le goban à l'aide du clavier.</li>
<li>Modification de la structure interne de la barre d'outils du composant "Edit".
Tous les outils sont désormais soit des "buttons" soit des "inputs", et affichage de cette barre sur deux lignes au lieu d'une.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.36</h2>
<ul>
<li>Correction d'un bug dans le parser sgf en php qui traitait incorrectement les fichiers contenant des collections de sgf.</li>
<li>Modification de la méthode de détection des coordonnées d'un click.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.35</h2>
<ul>
<li>Simplification de la gestion du focus dans le composant "Navigation" 
et ajout de la navigation avec les flèches du clavier dans le composant "Solve".</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.34</h2>
<ul>
<li>Changement des codes langue "jp" en "ja" et "cn" en "zh" pour être conforme à la norme ISO 639.</li>
<li>Remplacement de MIN et MAX par Math.min et Math.max (plus lent mais moins de risque de conflits)</li>
<li>Transformation des fonctions globales de mgos_lib.js en méthodes de l'objet mxF.</li>
<li>Changement du nom de la variable globale mxN en mxK, de mxF en mxF.S, de mxGN en mxN.</li>
<li>Ajoût des paramètre sgfLabel_&lt;xy&gt;.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.33</h2>
<ul>
<li>Correction d'un bug dans l'affichage des caractères non latins dans les kifus affichés via le bouton "Kifu" avec safari et chrome sur mac OS 
(et peut-être d'autres navigateurs).</li>
</ul>

<h2>Corrections apportées dans la 6.32</h2>
<ul>
<li>Correction d'un bug dans l'affichage des prisonniers dans l'exemple "Tatami".</li>
</ul>

<h2>Corrections apportées dans la 6.31</h2>
<ul>
<li>Mise à jour des versions des lecteurs autonomes (dans la version 6.30, ces lecteurs étaient ceux de la version 6.29).</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.30</h2>
<ul>
<li>Correction d'un bug dans la détection du code des touches "page précédente" et "page suivante" (ils étaient inversés).</li>
<li>Amélioration de la gestion du focus sur la barre de navigation.</li>
<li>Possibilité de règler la vitesse de défilement dans le composant "Speed" à l'aide des touches du clavier.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.29</h2>
<ul>
<li>Ajout de la possibilité de naviguer avec les flèches du clavier et les touches de changement de page 
en plus des lettres "F", "G", "H", "J", "K", "L". 
Ajout de la possibilité de changer de variantes via les touches "U" et "Y" du clavier.
Augmentation du nombre d'actions dans un lecteur qui une fois terminées, rendent le focus à la barre de navigation de ce lecteur. 
</li>
<li>Modification des boites internes des composants "Header", "Help", "Info", "Option", "Sgf" 
(essentiellement ajout d'une sous-boite div de classe "mxShowContentDiv" autour du contenu de la boite principale, 
mais sans les boutons "OK", "Annuler", "Fermer") : permet de "détacher" les boutons plus facilement en css 
pour les positionner où on veut.</li>
<li>Modification de la fonction traduisant les titres.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.28</h2>
<ul>
<li>Modification des paramètres de gosStart() et de la logique d'inclusion des fichiers css et js.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.27</h2>
<ul>
<li>Correction d'un bug qui empêchait le paramètre "sgfLoadCoreOnly" d'avoir de l'effet en cas d'utilisation du parser php.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.26</h2>
<ul>
<li>Ajout de la possibilité de naviguer en utilisant les lettres FGHJKL du clavier.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.25</h2>
<ul>
<li>Ajout d'un exemple montrant un lecteur alternatif basique fonctionnant avec les navigateurs ne connaissant pas HTML5 (ie7 et 8 en particulier).</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.24</h2>
<ul>
<li>Ajout d'une boite "InnerGobanDiv" autour du canvas du goban afin d'y rattacher l'ombre autour du goban.
Sinon bug avec les safaris à partir de la 6.1 qui ont tendance quand on redimensionne la fenêtre
à faire disparaitre l'ombre autour du goban si celle-ci est rattachée à un canvas.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.23</h2>
<ul>
<li>Modification de l'appel à gosStart dans sgfplayer qui générait un message d'erreur sur certains serveurs. 
Ces serveurs incluant le message d'erreur en début de script, celui-ci ne s'exécutait pas car le texte ajouté générait une erreur de syntaxe.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.22</h2>
<ul>
<li>Ajout d'une boite "CommentContentDiv" à l'intérieur de la boite "CommentDiv" 
pour faciliter la mise en page des commentaires, 
et avoir une structure se rappochant de celle des "BalloonDiv" du composant "Lesson".</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.21</h2>
<ul>
<li>Le nom des lecteurs autonomes sont désormais préfixés par "maxigos-".</li>
<li>Amélioration de la robustesse du décodeur sgf.</li>
<li>Correction d'un bug dans "mgos-prs.js" qui avait pour effet lorsqu'on utilisait gosStart avec un sgf nul,
et sans passer par un lanceur,
d'essayer d'utiliser le code du script lui-même comme source du sgf.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.20</h2>
<ul>
<li class="important">Attention ! Le chemin devant le nom des fichiers sgf situés 
entre deux balises destinées à inclure un lecteur sgf 
peut être désormais soit un chemin absolu depuis la racine du site, soit un chemin relatif entre la 
page où sont les balises et le fichier sgf à lire.</li>
<li>Correction de petits bugs dans la gestion des encodages, ce qui permet désormais à maxiGos de
fonctionner correctement dans une page qui n'est pas en "UTF-8".</li>
<li>Prise en compte des tailles de goban supérieures à 25x25 
(jusqu'à 52x52 qui est le maximum théorique pour les fichiers sgf).</li>
<li class="important">Attention ! Le répertoire "_maxiGos" devient "_maxigos" (tout en minuscules). 
Le répertoire de référence de maxiGos (c'est à dire le répertoire à partir duquel parte 
les chemins relatifs dont a besoin maxiGos) devient "_maxigos" au lieu de 
son sous-répertoire "_mgos" précédemment. 
Le répertoire de référence pour les fichiers d'aide devient "_maxigos" au lieu de 
"_maxiGos/_mgos/_php/_hlp" précédemment. Les fichiers d'aide sont déplacés de "_mgos/_php/_hlp" 
vers "_help". Les noms de ces fichiers d'aide doivent désormais obligatoirement commencer par "help". 
Les fichiers de traduction sont déplacés du dossier "_mgos/_js/_loc" vers le dossier "_local".
En pratique, tous ces changements nécessitent essentiellement de :
<ul>
<li>Modifier dans le code des pages html/php utilisant maxiGos 
les chemins devant les lanceurs ("sgfplayer.php", ...) et les fichiers de traduction ("mgos-loc-ja.js", ...), 
c'est à dire remplacer "_maxiGos" (avec une majuscule au "G") par "_maxigos" (tout en minuscule).</li>
<li>Eventuellement modifier dans les fichiers de configuration la valeur du paramètre "customStone" dans les rares cas où on l'utilise (a priori, il suffit de retirer un "../" en début de chemin).</li>
<li>Eventuellement modifier dans les fichiers de configuration les valeurs des paramètres "helpSource_&lt;xy&gt;" indiquant les noms des fichiers d'aide à utiliser
dans les rares cas où on en a spécifiés.</li></ul></li>
<li>Modification dans la gestion des fenêtres "pop-up" générées par les composants "Kifu" et "Image".</li>
<li>Le kifu du composant "Kifu" est désormais généré en 
javascript à l'aide du script autonome "maxigos-kifu.js" au lieu de "sgfKifu.php" afin d'éviter de recourir à php (et donc au serveur) 
pour cette fonctionnalité.</li>
<li>Ajout de la possibilité pour un utilisateur d'essayer ses variations dans la configuration "basic".</li>
<li>Ajout des exemples "alone" et "alone2" qui montre les scripts autonomes en action.</li>
<li class="important">Ajout d'une série de scripts (regroupés dans le dossier "_alone") 
lançant maxiGos de manière autonome (en particulier n'ayant plus du tout besoin des scripts en php côté serveur).</li>
<li>Ajout de la fonction "makeAlone()" dans "GGosLib.php" et du script "aloneMaker.php" permettant de générer des scripts autonomes.</li>
<li>Ajout de "mgos_prs.js" dans toutes les configurations.</li>
<li>Ajout des paramètres "gobanFs" et "navigationBtnFs" 
(afin de pouvoir modifier la taille des pierres et des boutons de navigation 
via les attributs html "data-maxigos-goban-fs" et "data-maxigos-navigation-btn-fs" 
de la balise dans laquelle est affichée le lecteur).</li>
<li>L'exemple "standAlone" devient "variousSgfSources".</li>
<li>Suppression de la configuration classique "replay".</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.11</h2>
<ul>
<li>La configuration classique "reader" devient la configuration "basic".</li>
<li>Modification du composant "Menu" (pour une utilisation conjointe avec les composants "File", "Edit", et "View").</li>
<li>Ajout des composants "File" et "View".</li>
<li>Diverses modifications dans la gestion de la langue.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.10</h2>
<ul>
<li class="important">Ajout de "mgosLoader.js", script utilisant le lanceur multiple "sgfmultipleplayer.php", 
qui remplace toute balise contenant un attribut "data-maxigos" par un lecteur maxigos. 
Ajout de l'exemple "multiplayer" qui en montre son utilisation.</li>
<li>Modification du composant "Menu" pour gérer l'édition de plusieurs fichiers simultanément.</li>
<li>Modification du nom de doCut en doSimpleCut dans le composant "Cut" qui pouvait provoquer un conflit avec le doCut du composant Edit.</li> 
<li>Possibilité d'insérer du code sgf directement dans le innerHTML de balises &lt;div&gt; ou de la balise &lt;script&gt; du script courant.</li>
<li>Modification des fonctions de gestion de la langue 
afin de faciliter les traductions de maxiGos en une autre langue.</li>
<li>Modification de la fonction d'ouverture des fichiers via le composant "Menu". 
Désormais, le décodage du fichier sgf se fait dans certains cas en javascript avec mgos_prs.js au lieu de se faire en php avec GSgfLib.php.
Ceci permet en particulier d'éviter un aller-retour avec le serveur dans certains cas.</li>
<li>Suppression du paramètre "hideCommentInSgf.</li>
<li>Ajout des paramètres sgfLoadMainOnly et sgfSaveMainOnly (qui contrôlent le décodage et encodage de la variante principale uniquement), 
et suppression de ce contrôle à l'aide de sgfLoadCoreOnly et sgfSaveCoreOnly (qui contrôle le décodage et encodage des informations essentielles uniquement).</li>
<li>Correction d'un bug qui cherchait à réinitialiser le composant "Tree" lors d'un "Ouvrir" via le composant "Menu", 
si l'arbre était présent dans un autre lecteur de la même page, mais pas présent dans le lecteur qui cherchait à réinitialiser l'arbre.</li>
<li>Correction d'un bug qui oubliait la propriété VW quand sgfLoadCoreOnly=1 ou sgfSaveCoreOnly=1.</li>
<li>Ajout de l'exemple "standAlone" qui affiche un lecteur du type "game" sans utiliser les scripts php du serveur.</li>
<li class="important">Ajout de mgos_prs.js qui permet de décoder du sgf sans avoir besoin des scripts php du serveur.</li>
<li>Ajout de l'affichage du nombre de coups dans le composant "Header", et ajout des paramètres "hideNumOfMoves", "hideNumOfMovesLabel" et "concatNumOfMovesToResult".</li>
<li>Ajout de l'affichage du type de la règle dans le composant "Header", et ajout du paramètre "hideRules".</li>
<li>Correction d'un bug qui affichait le niveau de Noir à la place du niveau de Blanc dans l'exemple "Tatami".</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.09</h2>
<ul>
<li>Support du glissé de souris avec un bouton enfoncé pour la sélection d'une partie du goban dans le composant Edit, 
et pour les curseurs des composants Goto et Speed.</li>
<li>Correction d'un bug dans le composant Edit qui avait pour effet de mal sélectionner le goban quand la sélection partait du bord droit ou du bas.</li>
<li>Correction d'un bug (safari sur mac OS uniquement) qui avait pour effet de faire mal rafraichir le goban lors d'un affichage en boucle.</li>
<li>Ajout d'un bouton de téléchargement du sgf dans le composant Sgf, et ajout des paramètres noSgfDialog, sgfLoadCoreOnly et sgfSaveCoreOnly.</li>
<li>Ajout du composant "BackToMain".</li>
<li>Suppression des éventuels &lt;script&gt; et &lt;/script&gt; dans les textes des propriétés sgf.</li>
<li>Correction d'un bug dans path.php qui avait pour effet (sur certains serveurs seulement) de mal déterminer 
les chemins permettant à maxiGos de retrouver ses fichiers.</li>
<li>Lors de l'affichage de code sgf via le bouton sgf (et uniquement dans ce cas), 
le code des éventuels tags html est désormais affiché tel quel. 
Par exemple "C[&lt;span style="color:red"&gt;aaa&lt;/span&gt;]" sera affiché "C[&lt;span style="color:red"&gt;aaa&lt;/span&gt;]"
alors qu'auparavant, il était interprêté par le navigateur comme étant du code html avant d'être affiché, 
et provoquait l'affichage d'un "C[aaa]" avec "aaa" en rouge au lieu du code lui-même. 
Par contre, lorsque maxiGos affiche ce même code dans une autre boite (par exemple dans une boite à commentaire), 
il continuera d'être interprêté comme auparavant. 
Par exemple, "C[&lt;span style="color:red"&gt;aaa&lt;/span&gt;]" provoquera bien l'affichage d'un "aaa" en rouge dans une boite à commentaire.</li> 
<li>Correction d'un bug du parser sgf dans GSgfLib.php qui traitait mal les lignes finissant par un nombre pair d'antishlashs, 
et les guillemets (") précédés d'un nombre impair d'antishlashs.</li>
<li>Ajout du paramètre "openOnly".</li>
<li>Modification de la méthode utilisée pour ouvrir un fichier sgf. 
Désormais, on affiche systématiquement un bouton "Ouvrir" à la place du bouton "Sélectionner un fichier" des navigateurs, 
qui reste présent, mais caché.</li>
<li>Ajout du paramètre "translateTitleOn". 
Antérieurement maxiGos essayait de traduire systématiquement les titres. 
Désormais, il faut que ce paramètre "translateTitleOn" valle 1 dans un fichier de configuration pour que la traduction soit tentée.</li>
<li>Modification de la traduction des titres.</li>
<li>Modification du calcul de la taille de la police utilisée pour la numérotation et les indices.</li>
<li>Ajout de l'exemple "ambiance chinoise".</li>
<li>Réapparition du paramètre "adjustTreeWidth".</li>
<li>Ajout de la configuration classique "tree.cfg" et de l'exemple correspondant.</li>
<li>Correction d'un bug qui, en cas de marque sur les intersections qui étaient aussi des variations, 
affichait les numéros de variation au lieu de ces marques.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.08</h2>
<ul>
<li>Correction d'un bug dans "sgfKifu.php" qui empêchait maxiGos d'afficher les kifus en anglais (ils étaient toujours affichés en français).</li>
<li>Amélioration de la méthode de calcul des coordonnées d'un click (cas d'une page avec une balise &lt;html&gt; ayant un margin-left ou margin-top non nul).</li>
<li>Modification de la fonction "Ouvrir" du composant "Menu" (support d'un plus grand nombre de navigateur dont ie10).</li>
<li>Correction d'un bug d'affichage concernant les numéros des pierres (bug visible uniquement avec safari sur mac, pas toujours reproductible, et consistant à afficher les textes avec un fond bizarre).</li>
<li>Changement du nom du paramètre "hideOptionIn3dOnInput" en "hideIn3dOn".</li>
<li>Correction de bugs dans le système de numérotation des coups.</li>
<li>Ajout du paramètre "hideCommentInSgf.</li>
<li>Correction d'un bug dans la fonction "copie" du composant "edit" (bug qui n'existe que dans la 6.07) : le processus de copie était interrompu afin d'avoir fini.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.07</h2>
<ul>
<li>Modification dans le système de numérotation des coups concernant la proprité MN quand elle est dans un noeud sans coup. Dans un tel cas, antérieurement le coup suivant recevait le numéro de la propriété MN+1. Désormais, il reçoit le numéro de la propriété MN tel quel.</li>
<li class="important">Suppression de plusieurs "for (... in ...)" et ajout de tests appropriés lors de l'utilisation des "for (... in ...)" 
dont on peut se passer difficilement. On évite ainsi de gros ennuis (sous joomla en particulier qui semble ajouter des propriétés à tous les objects à l'arrache).</li>
<li>Modifications mineures dans la présentation du formulaire des options.</li>
<li>Changement de méthode pour la fabrication de kifu via la bouton "Kifu". La méthode précédente fonctionnait mal sur les serveurs limitant fortement la longueur des URL.</li>
<li>Ajout du fichier de configuration "game".</li>
<li>Correction de la correction du bug sioux se manifestant lorsque asInBookOn=1, numberingOn>0, et en cas de présence de marques de score (voir 6.02 plus bas pour plus d'explication).</li>
<li>Correction d'un bug qui avait pour effet de mal traiter les AB, AW, et AE avec des coordonnées rectangulaires (par exemple AB[cd:ef]).</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.06</h2>
<ul>
<li>Modification de la css pour les kifus (agrandissement de la largeur des labels du header pour avoir la place d'afficher "Handicap").</li>
<li>Correction d'un bug dans speed du fait que la fonction "getComputedStyle" de certains navigateurs (safari) gardent les "%" comme unité si c'est cette unité qui est utilisé dans les css (il vaut mieux désormais déclarer les tailles des barres du composant speed en pixel dans les css).</li>
<li>Correction d'un bug dans le composant "Solve" qui oubliait de vérifier la règle lorsque l'utilisateur cliquait sur une intersection non prévue dans le sgf et qu'il y avait un.</li>
<li>Correction d'un bug apparu avec la version 6.xx de maxiGos qui affichait de manière erronée les pierres disparues avant le premier coup numéroté avec asInBookOn=1.</li>
<li>Ajout de l'exemple "Carte à jouer".</li>
<li>Correction de petits bugs dans la gestion des paramètres de langue dans les pages lançant les exemples.</li>
<li>Changement du nom du paramètre "gotoBtnPosition" en "gotoInputPosition", et suppression des valeurs "top" et "bottom" pour ce paramètre.</li>
<li>Ajout du paramètre "loopBtnPosition".</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.05</h2>
<ul>
<li>Ajout de l'exemple "St Valentin".</li>
<li>Ajout des paramètres "initialLoopTime" et "finalLoopTime".</li>
<li>Correction d'un bug dans l'initialisation du composant "Option" lorsque "optionBoxOn" était à 1.</li>
<li>Ajout de la classe "mxIn3d" ou "mxIn2d" à la boite globale suivant la valeur de "in3dOn".</li>
<li>Ajout des paramètres "infoBoxOn", "infoBtnOn", "adjustInfoWidth", "adjustInfoHeight" et "infoLabel_&lt;xy&gt;".</li>
<li>Ajout du paramètre "variationMarkSeed".</li>
<li>Ajout de l'exemple "Kifu manuscrit".</li>
<li>Correction d'un bug dans le calcul du nombre de tenuki.</li>
<li>Ajout du paramètre "canRetry".</li>
<li>Ajout du paramètre "numAsMarkOnLastOn".</li>
<li>Ajout du paramètre "siblingsOn".</li>
<li>Ajout du paramètre "mainVariationOnlyLoop".</li>
<li>Ajout de l'exemple "Ambiance http://tactigo.free.fr".</li>
<li>Modification de la manière d'afficher les marques sur les variations quand la propriété sgf ST est impair.</li>
<li>Ajout de l'outil "Style" dans "Edit".</li>
<li>Correction de bugs dans "Option".</li>
<li>Ajout des paramètres "hideXxx" au composant "Header".</li>
<li>Ajout de l'affichage de la durée de la partie dans le composant "Header".</li>
<li>Affichage de "aucun" au lieu de "0 point" si le komi est nul.</li>
<li>Ajout des paramètres "hideXxx" au composant "Menu".</li>
<li>Ajout de la traduction de la date affichée dans "Header" en langue locale.</li>
<li>"canPlaceVariations" est renommé en "canPlaceVariation".</li>
<li>Ajout des paramètres "hideXxx" au composant "Option".</li>
<li>Ajout des champs concernant la numérotation "à partir de" et "avec" dans le panneau d'option.</li>
<li>Ajout des paramètres nowhereMessage_&lt;xy&gt;, endMessage_&lt;xy&gt;, forbiddenMessage_&lt;xy&gt;, et silentfail.</li>
<li>Ajout d'un test qui permet à maxiGos d'utiliser la configuration par défaut quand celle de l'url du lanceur est introuvable.</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.04</h2>
<ul>
<li>Ajout de l'exemple "Fancy go".</li>
<li>Les "autoAdjustXxx" ont tous été renommés en "adjustXxx".</li>
<li>Correction d'un possible bug (reproduction du bug non systématique, et uniquement sous firefox) dans la fonction d'ajout des css.</li>
<li>Ajout de l'exemple "Iroha".</li>
<li>Rajout du paramètre "titleBoxOn" au composant "Title" (qui avait été supprimé dans la 6.00).</li>
<li>Traduction automatique des EV et RO des grands titres.</li>
<li>Ajout de l'exemple "Ambiance fm".</li>
<li>Changement de la manière de vérifier ce qu'on a dans le sgf en cas de click sur le bouton "Passe".</li>
<li>Ajout du paramètre "canPassOnlyIfPassInSgf" au composant "Pass".</li>
<li>Ajout du paramètre langue lors de la génération d'un kifu par le composant "Kifu".</li>
<li>Correction d'un gros bug qui empêchait le composant "Option" de fonctionner quand optionBoxOn vallait 1.</li>
<li>Modification de la largeur des éléments internes de "NotSeen" pour les kifus (ils étaient légèrement trop petits).</li>
<li>Remplacement des tags p par div class="mxP" (plus sûr lors de l'intégration de maxiGos dans une page, car les p sont très souvent stylés globalement pour la page).</li>
<li>Correction d'un bug concernant le chemin du lanceur lors de la génération d'un kifu.</li>
<li>Correction d'un bug concernant le calcul de la taille de la fenêtre du kifu.</li>
<li>Ajout d'un "font-family:fantasy" pour la bulle du composant "Lesson".</li>
<li>Ajout d'un lanceur spécifique au forum nouvelle version.</li>
<li>Amélioration des feuilles de styles de l'exemple forum, et adapatation du composant "Guess".</li>
<li>Diverses optimisations et corrections mineures.</li>
</ul>

<h2>Corrections apportées dans la 6.03</h2>
<ul>
<li>Suppression de la possibilité de choisir la marque sur le dernier coup (qui avait été ajoutée dans la 6.00).</li>
<li>Remplacement du paramètre config par cfg dans les url de sgfplayer.php.</li>
<li>Ajout et suppression de toute une série de paramètre.</li>
<li class="important">Ajout du composant "Cut".</li>
<li class="important">Ajout du composant "Lesson".</li>
<li>Ajout d'un stop aux noeuds ayant des variations lorsque les boutons de navigation "avancer 10 fois" ou "reculer 10 fois" sont utilisés
(nécessite le composant "Variations").</li>
<li>Ajout d'un champ "Aller à" dans la barre de navigation (nécessite le composant "Goto").</li>
<li>Ajout quand on clique sur une pierre d'un retour à la position lorsque cette pierre a été jouée 
(nécessite le composant "Variations").</li>
<li>Ajout d'une barre de positionnement dans le composant "Goto".</li>
<li>Simplification dans la méthode d'ouverture des fichiers. 
Abandon complet de l'ancienne méthode qui avait de grosses faiblesses 
(nécessité de déposer temporairement les fichiers à ouvrir sur le serveur, et complexité de l'appel à sgfPlayer.php), 
et qui n'était conservée que pour les navigateurs ne disposant pas de "FileReader".
Du coup, il n'est plus possible d'ouvrir un fichier avec ie9 et antérieurs et safari 5 et antérieurs. Firefox, chrome, safari 6 et ie10 sont OK par contre.</li>
<li>Suppression de l'outil "S" (sgf) dans le composant "Edit" (il convient d'utiliser à la place le bouton "Sgf" du composant du même nom).</li>
<li class="important">Ajout du composant "Loop".</li>
<li class="important">Suppression du composant "Players".</li>
<li class="important">Suppression du composant "Makers" et répartition de son code dans celui des composants "Kifu", "Image" et "Sgf".</li>
<li class="important">Ajout des composants "Variations" et "Diagram" (dont le code était éparpillé précédemment dans les autres composants).</li>
<li>Remplacement de "gos" par "mx" dans les noms de classes, de foncions et de variables.</li>
<li>Remplacement des fonctions autoRedrawXxx par "refreshXxx".</li>
<li>Remplacement des fonctions displayXxx par createXxx.</li>
<li>Refonte de la documentation et des exemples.</li>
<li class="important">Abandon du support de ie8 et versions antérieures.</li>
<li class="important">Réécriture du code de la plupart des composants.</li>
<li class="important">remplacement du nom "Gos" par "maxiGos".</li>
</ul>

<h2>Corrections apportées dans la 6.02</h2>
<ul>
<li>Correction d'un bug sioux qui, lorsque asInBookOn=1 et numberingOn>0 et en cas de présence de marques de score, 
avait pour effet de laisser affichées les pierres capturées déjà retirées du goban et remplacées par des pierres de l'autre couleur
(mais encore visibles du fait de l'option asInBookOn), 
ce qui avait un effet perturbateur pour visualiser le score sur les intersections concernées du fait qu'aucune marque de score ne pouvait s'y trouvée,
et alors que le territoire n'était pas celui de la pierre visible.</li>
<li>Suppression du paramètre shadowOn (désormais l'ombre autour du goban s'ajoute via box-shadow dans les css).</li>
<li>Diverses optimisations et correction de petits bugs.</li>
</ul>

<h2>Corrections apportées dans la 6.01</h2>
<ul>
<li>Les composants sont désormais tous affichés dans l'ordre dans lequel ils sont déclarés dans les fichiers de configuration (y compris Goban qui était antérieurement affiché en premier).</li>
<li>Désormais, les fonctions du composant goban sont dans gosGoban.js et non plus dans gos (le but étant de bien séparer les fonction d'affichage du goban du reste du code).</li> 
<li>Refonte du mécanisme d'autoRedraw (qui consiste à détecter si l'utilisateur change la taille de la police du navigateur et à adapter l'affichage de gos en conséquence).</li>
<li>Suppression du paramètre balloonColor (désormais, gos utilise celui du css).</li>
<li>Diverses optimisations et correction de petits bugs.</li>
</ul>

<h2>Corrections apportées dans la 6.00</h2>
<ul>
<li>Le paramètre "canShowPlayersInfo" n'a plus que 0 ou 1 comme valeur possible (antérieurement, il avait 3 valeurs mais l'une d'entre elles ne servait jamais).</li>
<li>Suppression du paramètre "titleBoxOn". Par ailleurs, le composant "Header" a été modifié pour ne plus dépendre du composant "Title" 
(ce qui a rendu possible la suppression du paramètre "titleBoxOn").</li>
<li>Amélioration de la traduction des dates.</li>
<li>maximizeTreeHeight devient autoAdjustTreeHeight.</li>
<li>Le goban est désormais un rectangle dont la hauteur est environ 10% plus grande que le largeur. Ajout du paramètre "stretchOn" pour ajouter/supprimer cet effet.</li>
<li>Remplacement de l'exemple 7 par un nouveau en "ambiance japonaise".</li>
<li>Possibilité de choisir différents types de marque sur le dernier coup.</lI>
<li>Correction d'un bug qui avait pour effet de ne pas afficher la dernière ligne des marques en notation compressée.</li>
<li>L'image d'une position est désormais générée en local telle qu'elle apparait sur l'écran de l'utilisateur (antérieurement, elle était générée par le serveur).</li>
<li>Modification de la manière dont est dessinée la sélection d'une partie du goban.</li>
<li>Modification de la manière dont sont dessinées les pierres sur le goban et dans l'arbre des coups.</li>
<li>Modification de la manière dont sont dessinés les numéros et les labels sur le goban et dans l'arbre des coups.</li>
<li>Suppression dans la gestion de la règle du comptage du nombre de pierres présentes sur le goban (car inutilisé par ailleurs).</li>
<li>Diverses optimisations et correction de petits bugs.</li>
</ul>
<div class="menu"><?php if (file_exists("../../index.php")) print "<a href=\"../../index.php?lang=fr\">Accueil</a>";?><!--
--><a href="documentation.php">Documentation</a><!--
--><a href="<?php print str_replace("/fr/","/en/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../en.gif"> English</a><!--
--><a href="<?php print str_replace("/en/","/fr/",$_SERVER["SCRIPT_NAME"]);?>"><img class="flag" src="../fr.gif"> Fran&ccedil;ais</a></div>

</body>
</html>