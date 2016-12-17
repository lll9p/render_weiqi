<nav>
<div class="menu">
<?php if (!isset($langList)) $langList=array("en","fr");?>
<?php if (isset($ExecutionTimeId)) $ExecutionTimeId="ExecutionTimeBisId";else $ExecutionTimeId="ExecutionTimeId";?>
<?php if (file_exists("../../../index.php")) print "<span><a href=\"../../../index.php?lang=".$mxL."\">".$HomeLabel."</a></span>";?><!--
--><span><a href="../../_doc/<?php print ($mxL=="fr")?"_fr":"_en";?>/documentation.php"><?php print $Documentation;?></a></span><!--
--><?php if (isset($executionTimeOn)&&$executionTimeOn) {?><span id="<?php print $ExecutionTimeId;?>">...</span><?php }?><!--
--><span><?php
$s4m=(isset($_GET["s"])?$_GET["s"]:"");
foreach ($langList as $lang)
{
	print "<a class=\"flagParent\" href=\"".$_SERVER["SCRIPT_NAME"]."?mxL=".$lang.($s4m?"&s=".$s4m:"");
	print (isset($sgfTarget)?"&amp;sgfServerFile=".urlencode($sgfTarget):"");
	print (isset($_GET["econumOn"])?"&amp;econumOn=".$_GET["econumOn"]:"");
	print "\">";
	print "<img alt=\"".$lang."\" class=\"flag\" src=\"../../_img/flag/".$lang.".gif\">";
	print "</a><!--\n-->";
}
?></span>
</div>
</nav>
<?php if (isset($executionTimeOn)&&$executionTimeOn) include_once "../../_sample/_php/exec.php";?>