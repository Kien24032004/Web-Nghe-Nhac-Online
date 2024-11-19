<?php
// Kết nối đến cơ sở dữ liệu
include('connect.php'); // Chèn file kết nối

// Kiểm tra nếu form được gửi
if (isset($_POST['register'])) {
    // Lấy thông tin người dùng nhập vào từ form
    $username = mysqli_real_escape_string($link, $_POST['username']);
    $email = mysqli_real_escape_string($link, $_POST['email']);
    $password = mysqli_real_escape_string($link, $_POST['password']);
    
    // Kiểm tra xem username đã tồn tại trong cơ sở dữ liệu chưa
    $check_username_query = "SELECT * FROM users WHERE username = '$username'";
    $check_email_query = "SELECT * FROM users WHERE email = '$email'";
    $username_result = mysqli_query($link, $check_username_query);
    $email_result = mysqli_query($link, $check_email_query);

    // Kiểm tra nếu tên người dùng hoặc email đã tồn tại
    if (mysqli_num_rows($username_result) > 0) {
        $error_message = "Tên người dùng đã tồn tại.";
    } elseif (mysqli_num_rows($email_result) > 0) {
        $error_message = "Email đã tồn tại.";
    } else {
        // Chèn thông tin người dùng vào cơ sở dữ liệu (không mã hóa mật khẩu)
        $insert_query = "INSERT INTO users (username, email, password, role) 
                         VALUES ('$username', '$email', '$password', 'user')";
        
        if (mysqli_query($link, $insert_query)) {
            // Chuyển hướng đến trang login sau khi đăng ký thành công
            header("Location: login.php");
            exit();
        } else {
            $error_message = "Đã có lỗi xảy ra. Vui lòng thử lại.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
        }

        .register-form {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 350px;
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        input[type="text"], input[type="email"], input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        button[type="submit"] {
            width: 100%;
            padding: 12px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button[type="submit"]:hover {
            background-color: #0056b3;
        }

        .login-link {
            text-align: center;
            margin-top: 10px;
        }

        .login-link a {
            color: #007BFF;
            text-decoration: none;
        }

        .login-link a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="register-form">
        <h2>Register</h2>
        <?php if (isset($error_message)): ?>
            <p style="color: red;"><?php echo $error_message; ?></p>
        <?php endif; ?>
        <form action="register.php" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br>

            <button type="submit" name="register">Register</button>
        </form>

        <div class="login-link">
            <p>Already have an account? <a href="login.php">Login here</a></p>
        </div>
    </div>
</body>
</html>
