<?php
require_once('../models/db.php');
require_once('../models/usermodel.php');

$email = $_REQUEST['email'];
$password = $_REQUEST['password'];

$count = login($email, $password);

$time = isset($_REQUEST['rememberme']) ? 1000 : 1;

if ($count == 1) {
    setcookie('flag', 'true', time() + 3000 + $time, '/');
    setcookie('username', $email, time() + 3000 + $time, '/');
    session_start();
    $_SESSION['user_role'] = 'user';
    header("Location: ../index.php");
    exit();
} else if ($count == 2) {
    setcookie('flag', 'true', time() + 3000 + $time, '/');
    setcookie('username', $email, time() + 3000 + $time, '/');
    session_start();
    $_SESSION['user_role'] = 'admin';
    echo "admin";
} else if ($count == 3) {
    setcookie('flag', 'true', time() + 3000 + $time, '/');
    setcookie('username', $email, time() + 3000 + $time, '/');
    session_start();
    $_SESSION['user_role'] = 'host';
    echo "host";
} else {
    echo "Invalid User!";
}
