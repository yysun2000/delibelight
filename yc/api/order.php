<?php
	/*
		제작자 : 유영선 (20170722)
		사용법
		/test2 : test2의 주문내역
		/test2/from/20170722 : test2가 오늘부터 7월 22일까지 주문한 내역
		/test2/from/20170712/to/20170722 : test2가 7월 12일부터 7월 22일까지 주문한 내역
	*/
    include('common.php');
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == "POST"){
        $modeldata = $_POST['modeldata'];
    }
    $URL = $_GET['q'];
    $cmd = explode("/",$URL);
	$default_query = "SELECT * FROM g5_shop_order,g5_shop_cart,g5_shop_item WHERE g5_shop_order.od_id = g5_shop_cart.od_id and g5_shop_item.it_id = g5_shop_cart.it_id and g5_shop_order.od_status != '쇼핑'";
    if(sizeof($cmd) > 1){
        if(sizeof($cmd) == 2){
	        $query= $default_query."and g5_shop_order.mb_id = '$cmd[1]'";
        }else if(sizeof($cmd) == 4 && $cmd[2] == "from"){
		    $query= $default_query."and g5_shop_order.mb_id = '$cmd[1]' and g5_shop_order.od_time > '$cmd[3]'";	
		}else if(sizeof($cmd) == 6 && $cmd[2] == "from" && $cmd[4] == "to"){
			$query= $default_query."and g5_shop_order.mb_id = '$cmd[1]' and (g5_shop_order.od_time > '$cmd[3]' and g5_shop_order.od_time <= '$cmd[5]')";			
		}else{
            $query="";
        }
        
    }else{
            $query="";
    }
	//echo $query;

	$sql_result=mysqli_query($conn,$query);          //질의(위 내용)를 수행하라.

	$rows = array();
	while($r = mysqli_fetch_array($sql_result)) {
		$rows[] = $r;
	}
	mysqli_close($conn);
	//header('Content-type:application/json;charset=utf-8');
	echo $_GET['callback']."(".json_encode($rows).")";

?>