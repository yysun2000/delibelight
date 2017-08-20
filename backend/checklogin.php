<?php
if ($is_member){
  $member = get_member($_SESSION['ss_mb_id']);
  echo "<div id='loginsuccess' style='display:none'>".$member['mb_id']."</div>";
}


?>
