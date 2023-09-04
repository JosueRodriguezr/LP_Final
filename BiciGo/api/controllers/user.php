<?php
// user.php

require 'vendor/autoload.php';

use MongoDB\Client;

class UserController {
    private $mongo;
    private $collection;

    public function __construct() {
        $this->mongo = new Client("mongodb://localhost:27017");
        $this->collection = $this->mongo->selectCollection("bicigo", "usuarios"); 
    }

    public function getProfile() {
        
        
    }
}
