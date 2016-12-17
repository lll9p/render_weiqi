<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body {font-size:1em !important;}
iframe {margin:0 auto;padding-bottom:1em;border:0;}
</style>
</head>
<body>

<?php
include_once('aloneLib.php');
// don't let $myServer set to a server domain or ip that can be reach by internet
// after running this script otherwise anybody may run the script
$myServer="192.168.1.10"; // replace by your server domain or ip
$myLanguage="fr"; // replace by the proper language code
if (($_SERVER['SERVER_NAME']=="localhost")||($_SERVER['SERVER_NAME']==$myServer))
{
	$ok=true;
	$mxL=$myLanguage;
}
else $ok=false;

function makeOneAlone($dir,$targetScriptName,$configFileName)
{
	// $dir: sample folder name
	// $targetScriptName: name of the target script
	// $configFileName: name of the config file name that will be used to produce the target script
	global $ok,$mxL;
	if ($ok)
	{
		print "makeOneAlone(".$dir.",".$targetScriptName.",".$configFileName.")<br>\n";
		$s="../_sample/".$dir."/_alone/".$targetScriptName;
		$cfg="../_sample/".$dir."/".$configFileName;
		makeAlone($s,$cfg,"../../../",$mxL);
		print "makeAlone(\"$s\",\"$cfg\",\"../../../\",\"$mxL\");<br>\n";
	}
}
?>

<?php makeOneAlone("neo-classic","maxigos-neo-classic-basic.js","_cfg/basic.cfg");?>
<?php makeOneAlone("neo-classic","maxigos-neo-classic-comment.js","_cfg/comment.cfg");?>
<?php makeOneAlone("neo-classic","maxigos-neo-classic-diagram.js","_cfg/diagram.cfg");?>
<?php makeOneAlone("neo-classic","maxigos-neo-classic-game.js","_cfg/game.cfg");?>
<?php makeOneAlone("neo-classic","maxigos-neo-classic-problem.js","_cfg/problem.cfg");?>
<?php makeOneAlone("neo-classic","maxigos-neo-classic-tree.js","_cfg/tree.cfg");?>

<?php makeOneAlone("classic","maxigos-classic-basic.js","_cfg/basic.cfg");?>
<?php makeOneAlone("classic","maxigos-classic-comment.js","_cfg/comment.cfg");?>
<?php makeOneAlone("classic","maxigos-classic-diagram.js","_cfg/diagram.cfg");?>
<?php makeOneAlone("classic","maxigos-classic-game.js","_cfg/game.cfg");?>
<?php makeOneAlone("classic","maxigos-classic-lesson.js","_cfg/lesson.cfg");?>
<?php makeOneAlone("classic","maxigos-classic-loop.js","_cfg/loop.cfg");?>
<?php makeOneAlone("classic","maxigos-classic-problem.js","_cfg/problem.cfg");?>
<?php makeOneAlone("classic","maxigos-classic-tree.js","_cfg/tree.cfg");?>

<?php makeOneAlone("tatami","maxigos-tatami-basic.js","_cfg/basic.cfg");?>
<?php makeOneAlone("tatami","maxigos-tatami-comment.js","_cfg/comment.cfg");?>
<?php makeOneAlone("tatami","maxigos-tatami-diagram.js","_cfg/diagram.cfg");?>
<?php makeOneAlone("tatami","maxigos-tatami-game.js","_cfg/game.cfg");?>
<?php makeOneAlone("tatami","maxigos-tatami-problem.js","_cfg/problem.cfg");?>
<?php makeOneAlone("tatami","maxigos-tatami-tree.js","_cfg/tree.cfg");?>

<?php makeOneAlone("rosewood","maxigos-rosewood-basic.js","_cfg/basic.cfg");?>
<?php makeOneAlone("rosewood","maxigos-rosewood-diagram.js","_cfg/diagram.cfg");?>
<?php makeOneAlone("rosewood","maxigos-rosewood-comment.js","_cfg/comment.cfg");?>
<?php makeOneAlone("rosewood","maxigos-rosewood-game.js","_cfg/game.cfg");?>
<?php makeOneAlone("rosewood","maxigos-rosewood-problem.js","_cfg/problem.cfg");?>
<?php makeOneAlone("rosewood","maxigos-rosewood-tree.js","_cfg/tree.cfg");?>

<?php makeOneAlone("minimalist","maxigos-minimalist-basic.js","_cfg/basic.cfg");?>
<?php makeOneAlone("minimalist","maxigos-minimalist-comment.js","_cfg/comment.cfg");?>
<?php makeOneAlone("minimalist","maxigos-minimalist-diagram.js","_cfg/diagram.cfg");?>
<?php makeOneAlone("minimalist","maxigos-minimalist-game.js","_cfg/game.cfg");?>
<?php makeOneAlone("minimalist","maxigos-minimalist-problem.js","_cfg/problem.cfg");?>
<?php makeOneAlone("minimalist","maxigos-minimalist-tree.js","_cfg/tree.cfg");?>

<?php makeOneAlone("edit","maxigos-edit.js","edit.cfg");?>
<?php makeOneAlone("kifu","kifu.js","kifu.cfg");?>
<?php makeOneAlone("fm","fm.js","fm.cfg");?>
<?php makeOneAlone("tiger","tiger.js","tigerTree.cfg");?>

<?php makeOneAlone("jdg","jdg-exos.js","jdg-exos.cfg");?>
<?php makeOneAlone("jdg","jdg-exos2.js","jdg-exos2.cfg");?>
<?php makeOneAlone("jdg","jdg-initial.js","jdg-initial.cfg");?>
<?php makeOneAlone("jdg","jdg-joseki.js","jdg-joseki.cfg");?>
<?php makeOneAlone("jdg","jdg-lesson.js","jdg-lesson.cfg");?>
<?php makeOneAlone("jdg","jdg-p13x13.js","jdg-p13x13.cfg");?>
<?php makeOneAlone("jdg","jdg-pc13x13.js","jdg-pc13x13.cfg");?>
<?php makeOneAlone("jdg","jdg-game.js","jdg-game.cfg");?>
<?php makeOneAlone("jdg","jdg-potd.js","jdg-potd.cfg");?>
<?php makeOneAlone("jdg","jdg-diagram.js","jdg-diagram.cfg");?>

</body>
</html>
