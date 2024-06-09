<?php
// Start the session
session_start();

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Connect to your database
    $servername = "jdbc:mysql://localhost:3306";
    $username = "root";
    $password = "12345";
    $dbname = "final";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare a SQL statement to retrieve user data based on email
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // User found, verify password
        $row = $result->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            // Password correct, set session variables
            $_SESSION["loggedin"] = true;
            $_SESSION["email"] = $email;
            $_SESSION["id"] = $row["id"];
            // Redirect to index.html
            header("location: index.html");
            exit;
        } else {
            // Password incorrect
            echo "Invalid password";
        }
    } else {
        // User not found
        echo "User not found";
    }

    $conn->close();
}
?>
