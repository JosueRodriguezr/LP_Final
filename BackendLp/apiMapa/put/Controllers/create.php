

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$csvFile = '..\config\datos.csv';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $puntoPartida = $_POST['PuntoPartida'];
    $puntoFinal = $_POST['PuntoFinal'];
    $nombrePuntoPartida = $_POST['NombrePuntoPartida'];
    $nombrePuntoFinal = $_POST['NombrePuntoFinal'];
    $lider = $_POST['lider'];

    // Validación de datos (puedes añadir más validaciones aquí)

    // Crear una nueva línea de datos
    $nuevaLinea = "$puntoPartida,$puntoFinal,$nombrePuntoPartida,$nombrePuntoFinal,$lider\n";

    // Agregar los nuevos datos al archivo CSV
    if (file_put_contents($csvFile, $nuevaLinea, FILE_APPEND | LOCK_EX)) {
        echo json_encode(['message' => 'Datos agregados con éxito']);
    } else {
        echo json_encode(['message' => 'Error al agregar los datos']);
    }
}
?>





