<?php

    include('common.php');
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == "POST"){
        $modeldata = $_POST['modeldata'];
    }
    $URL = $_GET['q'];
    $method = $_GET['m'];
    $mode = $_GET['mode'];
    $cmd = explode("/",$URL);

    if(sizeof($method) > 0){

        //http://localhost:9988/yc/api/model.php?q=/chuu/chuu%20office/chuu/%23추억%23굳맨/instarurl/&m=post

        if($cmd[1] == "follow"){
            if($method=="get"){
                if(sizeof($cmd) == 3){
                    $query = "select * from g5_model_follow, g5_model where g5_model_follow.modelname=g5_model.name and g5_model_follow.memberid='$cmd[2]'";              
                }else{
                    $query = "select * from g5_model_follow where g5_model_follow.modelname='$cmd[2]' and g5_model_follow.memberid='$cmd[3]'"; 
                }
            }else if($method=="post"){
                $query = "insert into g5_model_follow(modelname,memberid) values('$cmd[2]','$cmd[3]')"; // 모델이름 멤버이름

            }else if($method=="delete"){
                $query = "delete from g5_model_follow where modelname = '$cmd[2]' and memberid = '$cmd[3]'";
            }
        }else{
            
         if($method = "post"){
            $query = "insert into g5_model(name,face,shopname,id,keyword,instagram) value('$cmd[1]','$cmd[1]/$cmd[1].jpg','$cmd[2]','$cmd[3]','$cmd[4]','$cmd[5]')";
            $uploadFolder = "../data/face/$cmd[1]/";
            if(!is_dir($uploadFolder)) { 
                mkdir($uploadFolder);
                chmod($uploadFolder,0777);
            }
          }           
        }
        
        
    }else{
        if(sizeof($cmd) > 1){
            if(sizeof($cmd) == 2){
                $query="SELECT * FROM g5_model where name='$cmd[1]'";
            }else{
                $query="SELECT ".$cmd[2]." FROM g5_model where name='$cmd[1]'";
            }

        }else{
            $query="SELECT * FROM g5_model";                         //test 테이블의 레코드를 모두 뽑아오기
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