<?php
if ($is_member){
  echo "<div id='loginsuccess' style='display:none'></div>";
  $member = get_member($_SESSION['ss_mb_id']);
}


?>
