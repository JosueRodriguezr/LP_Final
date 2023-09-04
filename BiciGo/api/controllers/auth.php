<?php

include("functions.php");

$nombre = $_POST["username"];
$contrasenia = $_POST["password"];


validate($username)
acceso($username,$_POST["contrasenia"]);


?>
// require 'vendor/autoload.php';

// use MongoDB\Client;

// class AuthController {
//     private $mongo;
//     private $collection;

//     public function __construct() {
//         $this->mongo = new Client("mongodb://localhost:27017");
//         $this->collection = $this->mongo->selectCollection("bicigo", "usuarios"); 
//     }

//     public function login($data) {
//         $username = $data['username'];
//         $password = $data['password'];

//         $user = $this->collection->findOne(['username' => $username]);

//         if (!$user) {
//             return ['error' => 'Usuario no encontrado'];
//         }

//         if (password_verify($password, $user['password'])) {
//             return ['message' => 'Inicio de sesión exitoso'];
//         } else {
//             return ['error' => 'Contraseña incorrecta'];
//         }
//     }

//     public function register($data) {
        

//     }
// }
