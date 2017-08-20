<?php
    
    include('common.php');

    $URL = $_GET['q'];
    $method = $_GET['m'];
    $cmd = explode("/",$URL);

    if(sizeof($cmd) > 1){
        $data = ($cmd[1]);
		
        if(is_numeric($data)){
			if(sizeof($cmd) == 2){
				$query="SELECT * FROM g5_shop_item where it_id='$data'";
			}else{
				if($cmd[2] == "with"){
					$query="SELECT * from g5_shop_item,(SELECT * FROM g5_shop_item_relation WHERE it_id = '$cmd[1]') as relation where g5_shop_item.it_id = relation.it_id2";
				}
			}
        }else{
        
        switch($data){
            case "hot" : 
                $query="SELECT * FROM g5_shop_item where it_type1=1";
                break;

            case "recommand" : 
                $query="SELECT * FROM g5_shop_item where it_type2=1";
                break;

            case "new" :
                $query="SELECT * FROM g5_shop_item where it_type3=1";
                break;

            case "sale" :
                $query="SELECT * FROM g5_shop_item where it_type4=1";
                break;

            case "popular" :
                $query="SELECT * FROM g5_shop_item where it_type5=1";
                break;

            case "focus" :
                $query="SELECT * FROM g5_shop_item order by it_hit desc";
                break;
            case "model" :			
				$query = "SELECT * FROM g5_model,g5_shop_item where g5_model.name = g5_shop_item.it_model and g5_model.name='$cmd[2]'";
                break;
            case "qna" :
                $query = "SELECT * FROM g5_shop_item_qa where it_id='$cmd[2]'";
                break;
            case "use" :
                $query = "SELECT * FROM g5_shop_item_use where it_id='$cmd[2]'";
                break;
			case "keyword" :
				$query="SELECT * FROM g5_model,g5_shop_item where g5_model.name = g5_shop_item.it_model and g5_model.keyword like '%".$cmd[2]."%'";
				if(sizeof($cmd) > 3){
					for($i=3;$i<sizeof($cmd);$i++){
						$query .= " or g5_model.keyword like '%".$cmd[$i]."%'";
					}
				}
				break;
            
			case "tag" :
				$query="SELECT * FROM g5_shop_item where it_tag like '%".$cmd[2]."%'";
				if(sizeof($cmd) > 3){
					for($i=3;$i<sizeof($cmd);$i++){
						$query .= " or it_tag like '%".$cmd[$i]."%'";
					}
				}
				break;
			case "category" :
				$query="SELECT * FROM g5_shop_item where ca_id='$cmd[2]'";
                break;
			case "category2" :
				$query="SELECT * FROM g5_shop_item where ca_id2='$cmd[2]'";
                break;
			case "category3" :
				$query="SELECT * FROM g5_shop_item where ca_id3='$cmd[2]'";
                break;
            case "search":
                if($cmd[2] == ""){
                     $query= "SELECT * FROM g5_shop_item where 2=1";
                }else{
                    $query= "SELECT * FROM g5_shop_item where it_name like '%$cmd[2]%'";
                }
                break;
            case "wish":
                if($method == "get"){
                    $query= "SELECT * FROM g5_shop_wish where mb_id = '$cmd[2]' and it_id='$cmd[3]'";                    
                }else if($method == "post"){
                    $query= "INSEERT INTO g5_shop_wish(mb_id,it_id,wi_time) value('$cmd[2]','$cmd[3]',NOW())";    
                }else if($method == "delete"){
                    $query= "DELETE FROM g5_shop_wish where mb_id = '$cmd[2]' and it_id='$cmd[3]'";    
                }
                break;
            default :
                break;
        }
		}
        
    }else{
        $query="SELECT * FROM g5_shop_item";                         //test 테이블의 레코드를 모두 뽑아오기
    }

        $sql_result=mysqli_query($conn,$query);          //질의(위 내용)를 수행하라.

        $rows = array();
        while($r = mysqli_fetch_assoc($sql_result)) {
            $rows[] = $r;
        }
        if($rows)
            $rows[0]["it_info_value"] = (unserialize(stripslashes($rows[0]["it_info_value"])));
        mysqli_close($conn);
        //header('Content-type:application/json;charset=utf-8');
        echo $_GET['callback']."(".json_encode($rows).")";

?>