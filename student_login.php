<?php
session_start();

$student_id = $_POST['student_id'];
$password = $_POST['password'];

// Demo credentials
if ($student_id === "student123" && $password === "12345") {
    $_SESSION['student'] = $student_id;
    header("Location: index.html"); // Student page
    exit();
} else {
    echo "<script>alert('Invalid Student ID or Password'); window.history.back();</script>";
}
?>
