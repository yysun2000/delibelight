<?php

        include('common.php');


        $query="SELECT * FROM g5_shop_category";


        $sql_result=mysqli_query($conn,$query);          //질의(위 내용)를 수행하라.

        $rows = array();
        while($r = mysqli_fetch_array($sql_result)) {
            $rows[] = $r;
        }
        mysqli_close($conn);
        //header('Content-type:application/json;charset=utf-8');
        echo $_GET['callback']."(".json_encode($rows).")";

?>