<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$csvFile = '..\config\datos.csv';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena'];
    $rol = $_POST['rol'];

    // Validación de datos (puedes añadir más validaciones aquí)

    // Crear una nueva línea de usuario
    $nuevaLinea = "$usuario,$contrasena,$rol\n";

    // Agregar el nuevo usuario al archivo CSV
    if (file_put_contents($csvFile, $nuevaLinea, FILE_APPEND | LOCK_EX)) {
        echo json_encode(['message' => 'Usuario agregado con éxito']);
    } else {
        echo json_encode(['message' => 'Error al agregar el usuario']);
    }
}

?>




