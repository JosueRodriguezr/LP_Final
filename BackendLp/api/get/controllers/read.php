<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// Nombre del archivo CSV
$csvFile = '..\config\datos.csv';

// Verificar si el archivo existe
if (!file_exists($csvFile)) {
    die("El archivo CSV no existe.");
}

// Leer el archivo CSV
$rows = array_map('str_getcsv', file($csvFile));

// Obtener la primera fila como encabezados
$headers = array_shift($rows);

// Inicializar un arreglo para almacenar los usuarios
$usuarios = array();

// Recorrer las filas y convertirlas en objetos JSON
foreach ($rows as $row) {
    $usuario = array();
    for ($i = 0; $i < count($headers); $i++) {
        $usuario[$headers[$i]] = $row[$i];
    }
    $usuarios[] = $usuario;
}


// Convertir el arreglo de usuarios en JSON
$jsonResult = json_encode($usuarios);

// Devolver el resultado JSON
header('Content-Type: application/json');
echo $jsonResult;

function acceso($cedula, $password){
    $archivo=fopen("usuarios.csv","r");
    while (($linea = fgetcsv($archivo)) !== false) {
      if (isset($linea[5])) {
          if($linea[5]==$password && $linea[1]==$cedula ){
        return true;
      }
  } 
}
}
?>

