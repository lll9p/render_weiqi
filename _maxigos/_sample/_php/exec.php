<script>
// to compute execution time of the page
if (typeof mxG=='undefined') mxG={};
if (!mxG.ExecutionTime) mxG.ExecutionTime=function()
{
	var e,s="<?php print $ExecutionTimeLabel;?>"+(new Date().getTime()-date1.getTime())+"ms";
	if (e=document.getElementById("ExecutionTimeId")) e.innerHTML=s;
	if (e=document.getElementById("ExecutionTimeBisId")) e.innerHTML=s;
};
</script>
