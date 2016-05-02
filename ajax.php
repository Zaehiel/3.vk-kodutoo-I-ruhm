<?php 
require_once('connect.php');
if($_POST){
if(isset($_POST['load'])){
	$load = json_decode(htmlentities(strip_tags($_POST['load']))) * 3 + 6;

$stmt = $conn->prepare("SELECT img_name, title FROM img_table ORDER BY id DESC LIMIT ".$load.",3");
$stmt->bind_result($img_name, $title);
$stmt->execute();

$array = array();
while($stmt->fetch()){
	
	array_push($array, '<li class="content">
						<a class="fancy" href="http://ehco.planet.ee/ajax/images/'.htmlspecialchars($img_name).'">
						<img src="http://ehco.planet.ee/ajax/images/'.$img_name.'" class="img-responsive" alt="'.$title.'">
						</a>
						</li>');
	
	
}$stmt->close();
echo json_encode($array);
}


}
?>