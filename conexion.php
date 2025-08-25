<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "formulario";


//comenzar la conexion 
$conn = new mysqli('localhost', 'root', '', 'formulario');

//verificar conexion a php con un condicional

if($conn -> connect_error){
die("Conexion fallida: " . $conn -> connect_error);
}
?>

