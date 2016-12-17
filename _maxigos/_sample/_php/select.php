<script>function doSubmitServerFileSelection() {document.forms['serverFileSelector'].submit();}</script>
<form autocomplete="off" class="fileSelector" id="serverFileSelector" enctype="multipart/form-data" action="<?php print $_SERVER["SCRIPT_NAME"];?>" method="post">
<?php print $SelectSgfFileLabel;?>
<input type="hidden" name="MAX_FILE_SIZE" value="1512000">
<input type="hidden" name="mxL" value="<?php print $mxL;?>">
<select class="fileSelectorInput" name="sgfServerFile" onchange="doSubmitServerFileSelection()">
<?php
// if $firstOption is a non-empty string, display it as first option
// otherwise if $firstOption is an empty string , display a blank as first option
// otherwise don't display any first option
if (isset($firstOption))
{
	if ($firstOption)
	{
		print "<option>";
		print (isset($firstOption)?$firstOption:"");
		print "</option>\n";
	}
}
function makeSgfSelect($dirFullName,$sgfTarget)
{
	$list=array();
	if (is_dir($dirFullName))
	{
		$dir=new DirectoryIterator($dirFullName);
		foreach($dir as $file)
			if ($file->isFile())
			{
				// $file->getExtension() doesn't work on jeudego.org (2014/11/15)
				$ext=pathinfo($file->getFilename(),PATHINFO_EXTENSION);
				if ($ext=="sgf") array_push($list,$file->getFilename());
			}
	}
	sort($list);
	foreach($list as $item)
		echo "<option ".(($sgfTarget==$item)?"selected":"").">".$item."</option>\n";
}
if (isset($sgfDir)&&isset($sgfTarget)) makeSgfSelect($sgfDir,$sgfTarget);
?>
</select>
</form>
