<?php
session_start();

$admin_username = $_POST['admin_username'];
$password = $_POST['password'];

// Demo credentials
if ($admin_username === "admin" && $password === "admin123") {
    $_SESSION['admin'] = $admin_username;
    header("Location: admin.html"); // Admin page
    exit();
} else {
    echo "<script>alert('Invalid Admin Username or Password'); window.history.back();</script>";
}
?>
