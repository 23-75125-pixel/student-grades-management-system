<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Grade System - Login</title>

    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="login-container">

    <h1>🎓 Student Grade System</h1>
    <p>Please login to continue</p>

    <form action="dashboard.php" method="post" onsubmit="return validateForm()">

        <label>Username</label>
        <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            required
        >

        <label>Password</label>

        <div class="password-box">
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                required
            >

            <button type="button" onclick="togglePassword()">Show</button>
        </div>

        <div class="options">

            <label>
                <input type="checkbox">
                Remember Me
            </label>

            <a href="#">Forgot Password?</a>

        </div>

        <button type="submit" class="login-btn">
            Login
        </button>

    </form>

</div>

<script src="js/app.js"></script>

</body>
</html>