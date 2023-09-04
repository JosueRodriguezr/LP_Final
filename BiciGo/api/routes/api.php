<?php
// api.php

require 'auth.php';
require 'user.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $authController = new AuthController();

    if ($_SERVER['REQUEST_URI'] === '/login') {
        echo json_encode($authController->login($data));
    } elseif ($_SERVER['REQUEST_URI'] === '/register') {
        echo json_encode($authController->register($data));
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($_SERVER['REQUEST_URI'] === '/profile') {
        $userController = new UserController();
        echo json_encode($userController->getProfile());
    }
}
