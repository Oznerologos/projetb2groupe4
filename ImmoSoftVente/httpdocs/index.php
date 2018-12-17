<?php

session_start ();

$requirePage = "home";

if(isset($_REQUEST['page'])) $requirePage = $_SESSION['page'] = $_REQUEST['page'];

if($requirePage == 'index') $requirePage = "home";

require_once('mvc/controllers/controller.php');

$controller = new controller();

if(!empty($requirePage)){
    $controller->afficher($requirePage);
}else{
    $controller->afficher('error');
}
