<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Nombre del archivo CSV
$csvFile = '../config/datos.csv';

// Verificar si el archivo existe
if (!file_exists($csvFile)) {
    die("El archivo CSV no existe.");
}

// Leer el archivo CSV
$rows = array_map('str_getcsv', file($csvFile));

// Obtener la primera fila como encabezados
$headers = array_shift($rows);

// Inicializar un arreglo para almacenar los datos
$data = array();

// Recorrer las filas y convertirlas en objetos asociativos
foreach ($rows as $row) {
    $item = array();
    for ($i = 0; $i < count($headers); $i++) {
        // Convertir los primeros cuatro elementos a números
        if ($i < 4) {
            $item[$headers[$i]] = floatval($row[$i]);
        } else {
            $item[$headers[$i]] = $row[$i];
        }
    }
    $data[] = $item;
}

// Devolver el resultado como JSON
header('Content-Type: application/json');
echo json_encode($data);
?>

