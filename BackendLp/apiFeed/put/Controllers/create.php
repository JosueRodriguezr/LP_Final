<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Nombre del archivo CSV
$csvFile = '..\config\datos.csv';
; // Reemplaza 'posts.csv' con la ubicación de tu archivo CSV
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = 0;
    $title = $_POST['title'];
    $body = $_POST['body'];
    $photoUrl = $_POST['photoUrl'];
    $username = $_POST['username'];

    // Validación de datos (puedes añadir más validaciones aquí)

    // Crear una nueva línea de datos
    $nuevaLinea = "$id,$title,$body,$photoUrl,$username\n";

    // Agregar los nuevos datos al archivo CSV
    if (file_put_contents($csvFile, $nuevaLinea, FILE_APPEND | LOCK_EX)) {
        echo json_encode(['message' => 'Datos agregados con éxito']);
    } else {
        echo json_encode(['message' => 'Error al agregar los datos']);
    }
}
?>







