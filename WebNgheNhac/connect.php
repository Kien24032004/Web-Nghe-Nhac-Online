<?php
$servername = "localhost"; 
$username = "root";         
$password = "";             
$dbname = "nghenhac";     

$link = mysqli_connect($servername, $username, $password, $dbname);

if (!$link) {
    die("Kết nối thất bại: " . mysqli_connect_error()); 
}
?>
