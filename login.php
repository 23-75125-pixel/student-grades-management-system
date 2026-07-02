<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Grade System | Login</title>

    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<main class="login-container">

    <header>
        <h1>🎓 Student Grade System</h1>
        <p>Please sign in to continue.</p>
    </header>

    <form action="dashboard.php" method="POST" onsubmit="return validateForm()">

        <div class="form-group">
            <label for="username">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                autocomplete="username"
                required
            >
        </div>

        <div class="form-group">
            <label for="password">Password</label>

            <div class="password-box">
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    autocomplete="current-password"
                    required
                >

                <button
                    type="button"
                    class="toggle-password"
                    onclick="togglePassword()"
                    aria-label="Show or hide password">
                    Show Password
                </button>
            </div>
        </div>

        <div class="options">
            <label>
                <input type="checkbox" name="remember">
                Remember Me
            </label>

            <a href="#">Forgot Password?</a>
        </div>

        <button type="submit" class="login-btn">
            Login
        </button>

    </form>

</main>

<script src="js/app.js"></script>

</body>
</html>