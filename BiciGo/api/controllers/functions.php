<?php
function save($datos, $contrasenia){
  $lineas = implode(",", $datos).",".$contrasenia."\n";
  $archivo = fopen("../config/usuarios.csv", "a");
  fwrite($archivo, $lineas);
  fclose($archivo);
}

function validate($username){
  $archivo = fopen('../config/usuarios.csv', 'r');
  while(($lineaAc = fgetcsv($archivo)) !== false){
    if ($lineaAc[0] === $username){
      fclose($archivo);
      return true;
    }
  }
  fclose($archivo);
  return false;
  
}

function acceso($username, $password){
  $archivo = fopen('../config/usuarios.csv', 'r');
  while(($lineaAc = fgetcsv($archivo)) !== false){
    if ($lineaAc[0] === $username && md5($password) === end($lineaAc)){
      fclose($archivo);
      return true;
    }
  }
  fclose($archivo);
  return false;
}
