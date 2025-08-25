<?php

include 'conexion.php';


if($_SERVER["REQUEST METHOD"]== "POST")
{
//recibir datos del formulario
$nombre1 = $conn ->real_escape_string($POST['nombre1']);
$nombre2 = $conn ->real_escape_string($POST['nombre2']);
$apellido1 = $conn ->real_escape_string($POST['apellido1']);
$apellido2 = $conn ->real_escape_string($POST['apellido2']);
$correo = $conn ->real_escape_string($POST['correo']);
$cedula = $conn ->real_escape_string($POST['cedula']);


//comezar la consulata en SQL
$sql = "INSERT INTO datos_usuarios (primer_nombre, segundo_nombre, apellido_paterno, apellido_materno, correo, cedula) VALUES ('$nombre1','$nombre2','$apellido1','$apellido2','$correo','$cedula')";


//para ejecutar la consuylata y verificarla 

if($conn->query($sql) ==TRUE){

echo "Datos Guardados Exitosamente";

}else{

    echo "ERROR: " .$sql. "<br>" . $conn->error;
}

}
$conn ->close();


?>
