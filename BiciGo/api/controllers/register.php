<?php

include("functions.php");

$nombre = $_POST["username"];
$contrasenia = md5($_POST["password"]);
$correo = $_POST["email"];


save($_POST, $contrasenia);