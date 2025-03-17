<?php
require_once('db.php');
$role = "user";

function login($email, $password)
{
    $con = dbConnection();

    // Use prepared statements
    $sql = "SELECT password, role FROM login WHERE email = ?";
    $stmt = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    mysqli_stmt_close($stmt);
    mysqli_close($con);

    if ($row = mysqli_fetch_assoc($result)) {
        // Verify the hashed password
        if (password_verify($password, $row['password'])) {
            // Return role-based integer
            switch ($row['role']) {
                case 'admin':
                    return 2;
                case 'host':
                    return 3;
                default:
                    return 1; // Regular user
            }
        }
    }

    return 0; // Invalid login
}

function getByEmail($email)
{
    $con = dbConnection();
    $sql = "select * from user where email='{$email}'";
    $result = mysqli_query($con, $sql);
    $count = mysqli_num_rows($result);

    if ($count == 1) {
        return true;
    } else {
        return false;
    }
}
function getByUser($username)
{
    $con = dbConnection();
    $sql = "select * from user where username ='{$username}'";
    $result = mysqli_query($con, $sql);
    $users = mysqli_fetch_assoc($result);
    return $users;
}

function updateUserPass($newpassword, $email)
{
    $con = dbConnection();
    $sql = "UPDATE login SET password = '{$newpassword}' WHERE username = (SELECT username FROM user WHERE email = '{$email}')";
    $result = mysqli_query($con, $sql);
    //$count = mysqli_num_rows($result);

    if ($result) {
        return true;
    } else {
        return false;
    }
}



function createUser($user)
{
    $con = dbConnection();
    $sql = "INSERT INTO user (name, email, dob) VALUES (?, ?, ?)";
    $stmt = mysqli_prepare($con, $sql);
    mysqli_stmt_bind_param($stmt, "sss", $user['name'], $user['email'], $user['dob']);
    $userInsertStatus = mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    $sql1 = "INSERT INTO login (email, password, role) VALUES (?, ?, ?)";
    $stmt1 = mysqli_prepare($con, $sql1);
    mysqli_stmt_bind_param($stmt1, "sss", $user['email'], $user['password'], $user['role']);
    $loginInsertStatus = mysqli_stmt_execute($stmt1);
    mysqli_stmt_close($stmt1);

    mysqli_close($con);

    return $userInsertStatus && $loginInsertStatus;
}


function checkEmail($email)
{
    $con = dbConnection();
    $sql = "select * from user where email ='{$email}'";
    $result = mysqli_query($con, $sql);
    $count = mysqli_num_rows($result);

    if ($count == 1) {
        return 1;
    } else {
        return 0;
    }
}
function getRole($username)
{
    $con = dbConnection();
    $sql = "select * from login where username ='{$username}'";
    $result = mysqli_query($con, $sql);
    $users = mysqli_fetch_assoc($result);
    if (isset($users['role'])) {
        return $users['role'];
    } else {
        return 0;
    }
}
function deleteUser($username)
{
    $con = dbConnection();
    $sql = "DELETE FROM user WHERE username='{$username}'";
    $sql1 = "DELETE FROM login WHERE username='{$username}'";
    if (mysqli_query($con, $sql) && mysqli_query($con, $sql1)) {
        return true;
    } else {
        return false;
    }
}
function getUser($role)
{
    $con = dbConnection();
    $sql = "SELECT user.*
            FROM user
            JOIN login ON user.username = login.username
            WHERE login.role = '{$role}'";
    $result = mysqli_query($con, $sql);
    //$users = mysqli_fetch_assoc($result);
    $users = [];

    while ($row = mysqli_fetch_assoc($result)) {
        array_push($users, $row);
    }

    return $users;
}
function checkUsername($username)
{
    $con = dbConnection();
    $sql = "select * from user where username ='{$username}'";
    $result = mysqli_query($con, $sql);
    $count = mysqli_num_rows($result);

    if ($count == 1) {
        return 1;
    } else {
        return 0;
    }
}
function updateUser($user)
{
    $con = dbConnection();
    $sql = "UPDATE user SET name='{$user['name']}', email='{$user['email']}', gender='{$user['gender']}' WHERE username='{$user['username']}'";
    $result = mysqli_query($con, $sql);
    if ($result) {
        return true;
    } else {
        return false;
    }
}

function getpaymentid()
{
    $con = dbConnection();
    $query = "SELECT MAX(payment_id) AS last_payment_id FROM Payment";
    $result = mysqli_query($con, $query);

    if ($result) {
        $row = mysqli_fetch_assoc($result);
        $last_payment_id = $row['last_payment_id'];
        return $last_payment_id;
    } else {
        return 99919;
    }
}
/*function login($email, $password)
{
    session_start();
    $role = "user";
    $con = dbConnection();
    $sql = "select * from user where email='{$email}' and password='{$password}' and position='{$role}'";
    $result = mysqli_query($con, $sql);
    $count = mysqli_num_rows($result);
    $sql9 = "select username from user where email='{$email}' and password='{$password}' and position='{$role}'";
    $result9 = mysqli_query($con, $sql9);
    $row = mysqli_fetch_assoc($result9);
    if (isset($row['username'])) {
        $_SESSION['username'] = $row['username'];
    }

    if ($count == 1) {
        return 1;
    }

    $role = "admin";
    $sql1 = "select * from user where email='{$email}' and password='{$password}' and position='{$role}'";
    $result1 = mysqli_query($con, $sql1);
    $count1 = mysqli_num_rows($result1);
    $sql = "select username from user where email='{$email}' and password='{$password}' and position='{$role}'";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_assoc($result);
    if (isset($row['username'])) {
        $_SESSION['username'] = $row['username'];
    }

    if ($count1 == 1) {
        return 1;
    }
    $role = "host";
    $sql1 = "select * from user where email='{$email}' and password='{$password}' and position='{$role}'";
    $result1 = mysqli_query($con, $sql1);
    $count1 = mysqli_num_rows($result1);
    $sql = "select username from user where email='{$email}' and password='{$password}' and position='{$role}'";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_assoc($result);
    if (isset($row['username'])) {
        $_SESSION['username'] = $row['username'];
    }

    if ($count1 == 1) {
        return 1;
    } else {
        return 0;
    }
}*/
function getPosition($username)
{
    $con = dbConnection();
    $sql = "select position from user where username='{$username}'";
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_assoc($result);
    if (isset($row['position'])) {
        return $row['position'];
    }
}
/*function createUser($username, $password, $email)
{
    $role = "user";
    $con = dbConnection();
    $sql = "insert into user values('{$username}', '{$password}', '{$email}', '{$role}')";
    if (mysqli_query($con, $sql)) {
        return true;
    } else {
        return false;
    }
}
*/

function alterUser($password, $email)
{
    $con = dbConnection();
    $sql = "update user set password='{$password}' where email='{$email}'";
    if (mysqli_query($con, $sql)) {
        return true;
    } else {
        return false;
    }
}

function email($email)
{
    $con = dbConnection();
    $sql = "select * from user where email='{$email}'";
    $result = mysqli_query($con, $sql);
    $count = mysqli_num_rows($result);

    if ($count == 1) {
        return true;
    } else {
        return false;
    }
}

function getAllUser()
{
    $con = dbConnection();
    $sql = "select username,email,position from user where position!='admin'";
    $result = mysqli_query($con, $sql);
    $users = [];

    while ($row = mysqli_fetch_assoc($result)) {
        array_push($users, $row);
    }

    return $users;
}


/*
function deleteUser($name)
{
    $con = dbConnection();
    $sql = "DELETE FROM user WHERE username='{$name}'";
    if (mysqli_query($con, $sql)) {
        return true;
    } else {
        return false;
    }
}*/

function addUser($name, $role, $email)
{
    $con = dbConnection();
    $sql = "insert into user values('{$name}', '12345678', '{$email}', '{$role}')";
    if (mysqli_query($con, $sql)) {
        return true;
    } else {
        return false;
    }
}
