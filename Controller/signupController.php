<?php
require_once('../models/userModel.php');
require_once('../models/validations.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    echo ("Controller");

    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $dob = $_POST['dob'];


    if (empty($name) || empty($email) || empty($password) || empty($dob)) {
        echo "Please fill in all fields!";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format!";
        exit;
    }

    if (strlen($password) < 8 || !hasDigit($password) || !hasSpecialChar($password)) {
        echo "Password must be at least 8 characters long and include a digit and a special character!";
        exit;
    }

    if (hasDigit($name)) {
        echo "Name can only contain letters!";
        exit;
    }

    if (checkEmail($email)) {
        echo "Email is already registered!";
        exit;
    }

    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Prepare User Data
    $user = [
        'name' => $name,
        'email' => $email,
        'dob' => $dob,
        'password' => $hashed_password,
        'role' => 'user'
    ];

    // Save User to Database
    $status = createUser($user);

    if ($status) {
        header("Location: ../views/login/login.html");
        exit();
    } else {
        echo "Database error! Please try again.";
    }
}
