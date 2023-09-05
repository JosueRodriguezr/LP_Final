<?php
// Obtener datos del formulario o solicitud POST
$id = $_POST['id'];
$nuevoNombre = $_POST['nuevo_nombre'];

// Ruta al archivo CSV
$csvFile = '../data/usuarios.csv';

// Leer el contenido del archivo CSV
$csvData = file_get_contents($csvFile);

// Convertir el contenido CSV en un arreglo
$csvArray = array_map('str_getcsv', explode("\n", $csvData));

// Obtener las columnas como encabezados
$headers = array_shift($csvArray);

// Actualizar el nombre del usuario en el arreglo de datos
foreach ($csvArray as $key => $row) {
    $usuario = array_combine($headers, $row);
    if ($usuario['id'] == $id) {
        $csvArray[$key][0] = $nuevoNombre;
        break;
    }
}

// Reescribir el archivo CSV con los datos actualizados
file_put_contents($csvFile, implode("\n", array_map(function($row) {
    return implode(',', $row);
}, array_merge([$headers], $csvArray))));

echo json_encode(array('message' => 'Usuario actualizado con éxito'));
?>

