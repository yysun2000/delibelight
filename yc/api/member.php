<?php
    include('common.php');
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == "POST"){
        $modeldata = $_POST['modeldata'];
    }
    $URL = $_GET['q'];
    $cmd = explode("/",$URL);
	if(sizeof($cmd) > 1){
        if(sizeof($cmd) == 2){
	        $query= "SELECT * FROM g5_member WHERE mb_id='$cmd[1]'";
        }
    }

	$sql_result=mysqli_query($conn,$query);          //질의(위 내용)를 수행하라.

	$rows = array();
	while($r = mysqli_fetch_array($sql_result)) {
		$rows[] = $r;
	}
	mysqli_close($conn);
	//header('Content-type:application/json;charset=utf-8');
	echo $_GET['callback']."(".json_encode($rows).")";

?>