<?php
// Obtener el ID del usuario a eliminar desde la solicitud POST
$id = $_POST['id'];

// Ruta al archivo CSV
$csvFile = '../data/usuarios.csv';

// Leer el contenido del archivo CSV
$csvData = file_get_contents($csvFile);

// Convertir el contenido CSV en un arreglo
$csvArray = array_map('str_getcsv', explode("\n", $csvData));

// Obtener las columnas como encabezados
$headers = array_shift($csvArray);

// Buscar y eliminar el usuario del arreglo de datos
foreach ($csvArray as $key => $row) {
    $usuario = array_combine($headers, $row);
    if ($usuario['id'] == $id) {
        unset($csvArray[$key]);
        break;
    }
}

// Reescribir el archivo CSV sin el usuario eliminado
file_put_contents($csvFile, implode("\n", array_map(function($row) {
    return implode(',', $row);
}, array_merge([$headers], $csvArray))));

echo json_encode(array('message' => 'Usuario eliminado con éxito'));
?>

