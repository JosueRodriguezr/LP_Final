<?php
// Obtener la ruta de la solicitud
$requestUri = $_SERVER['REQUEST_URI'];
$scriptName = $_SERVER['SCRIPT_NAME'];

// Eliminar el nombre del script de la ruta
if (dirname($scriptName) != "/") {
    $requestUri = str_replace(dirname($scriptName), '', $requestUri);
}

// Eliminar parámetros de consulta de la ruta
$requestUri = explode('?', $requestUri, 2)[0];

// Enrutador simple
switch ($requestUri) {
    case '/':
        // Página de inicio o información sobre la API
        include 'controllers/read.php';
        break;
    case '/create':
        // Ruta para crear un nuevo usuario (ejecuta create.php)
        include 'controllers.create.php';
        break;
    case '/index.php':
        // Ruta para leer usuarios (ejecuta read.php)
        include 'controllers/read.php';
        break;
    case '/update':
        // Ruta para actualizar un usuario (ejecuta update.php)
        include 'controllers/update.php';
        break;
    case '/delete':
        // Ruta para eliminar un usuario (ejecuta delete.php)
        include 'controllers/delete.php';
        break;
    default:
        // Ruta no encontrada
        http_response_code(404);
        echo 'Ruta no encontrada';
        break;
}
?>




