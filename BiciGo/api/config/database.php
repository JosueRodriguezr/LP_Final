<?php
require 'vendor/autoload.php';

use MongoDB\Client;

$mongo = new Client("mongodb://localhost:27017"); 
$database = $mongo->selectDatabase("bicigo"); 

// Definición de rutas
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if ($_SERVER['REQUEST_URI'] === '/api/login') {
        // Implementa la lógica para la autenticación (consulta en MongoDB, verifica credenciales, etc.)
    } elseif ($_SERVER['REQUEST_URI'] === '/api/register') {
        // Implementa la lógica para el registro de usuarios en MongoDB
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($_SERVER['REQUEST_URI'] === '/api/profile') {
        // Implementa la lógica para obtener el perfil del usuario desde MongoDB
    }
}
