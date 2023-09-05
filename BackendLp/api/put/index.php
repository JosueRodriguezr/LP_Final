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
        include 'controllers/create.php';
        break;
}
?>