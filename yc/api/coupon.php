<?php
	/*
		������ : ������ (20170722)
		����
		/test2 : test2�� �ֹ�����
		/test2/from/20170722 : test2�� ���ú��� 7�� 22�ϱ��� �ֹ��� ����
		/test2/from/20170712/to/20170722 : test2�� 7�� 12�Ϻ��� 7�� 22�ϱ��� �ֹ��� ����
	*/
    include('common.php');
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == "POST"){
        $modeldata = $_POST['modeldata'];
    }
    $URL = $_GET['q'];
    $cmd = explode("/",$URL);
	if(sizeof($cmd) > 1){
        if(sizeof($cmd) == 2){
	        $query= "SELECT * FROM g5_shop_coupon WHERE mb_id='$cmd[1]'";
        }
    }

	$sql_result=mysqli_query($conn,$query);          //����(�� ����)�� �����϶�.

	$rows = array();
	while($r = mysqli_fetch_array($sql_result)) {
		$rows[] = $r;
	}
	mysqli_close($conn);
	//header('Content-type:application/json;charset=utf-8');
	echo $_GET['callback']."(".json_encode($rows).")";

?>