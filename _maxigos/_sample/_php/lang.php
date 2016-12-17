<?php
if (!isset($mxL)) $mxL=isset($_GET["mxL"])?$_GET["mxL"]:(isset($_POST["mxL"])?$_POST["mxL"]:"fr");
if ($mxL=="fr")
{
	$HomeLabel="Accueil";
	$Documentation="Documentation";
	$ExecutionTimeLabel="Temps d'ex&eacute;cution&nbsp;: ";
	$SelectSgfFileLabel="S&eacute;lectionnez un fichier sgf&nbsp;: ";
	$backLabel="Haut de page";
}
else if ($mxL=="ja")
{
	$HomeLabel="&#12507;&#12540;&#12512;"; // ホーム
	$Documentation="&#25991;&#26360;"; // 文書
	$ExecutionTimeLabel="&#23455;&#34892;&#26178;&#38291;: "; // 実行時間
	$SelectSgfFileLabel="SGF&#12501;&#12449;&#12452;&#12523;&#12434;&#36984;&#25246;: "; // SGFファイルを選択
	$backLabel="&#12488;&#12483;&#12503;&#12395;&#25147;&#12427;"; // トップに戻る
}
else if ($mxL=="zh")
{
	$HomeLabel="&#39318;&#39029;"; // 首页
	$Documentation="&#25163;&#26126;&#20070;"; // 手明书
	$ExecutionTimeLabel="&#25191;&#34892;&#26102;&#38388;: "; // 执行时间
	$SelectSgfFileLabel="&#36873;&#25321;&#19968;&#20010;SGF&#25991;&#20214;: "; // 选择一个SGF文件
	$backLabel="&#22238;&#21040;&#39030;&#37096;"; // 回到顶部
}
else if ($mxL=="zh-tw")
{
	$HomeLabel=mb_encode_numericentity("首頁",array (0x0,0xffff,0x0,0xffff),"UTF-8"); // 首頁
	$Documentation=mb_encode_numericentity("手明書",array (0x0,0xffff,0x0,0xffff),"UTF-8"); // 手明書
	$ExecutionTimeLabel=mb_encode_numericentity("執行時間: ",array (0x0,0xffff,0x0,0xffff),"UTF-8"); // 執行時間: 
	$SelectSgfFileLabel=mb_encode_numericentity("選擇一個SGF文件: ",array (0x0,0xffff,0x0,0xffff),"UTF-8"); // 選擇一個SGF文件: 
	$backLabel=mb_encode_numericentity("回到頂部",array (0x0,0xffff,0x0,0xffff),"UTF-8"); // 回到頂部
}
else
{
	$mxL="en";
	$HomeLabel="Home";
	$Documentation="Documentation";
	$ExecutionTimeLabel="Execution time: ";
	$SelectSgfFileLabel="Select a sgf file: ";
	$backLabel="Back to top";
}
?>