<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Grade Management System - Dashboard</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="dashboard-wrapper">

    <aside class="sidebar">

        <h2>🎓 SGMS</h2>

        <nav>
            <a href="dashboard.php" class="active">Dashboard</a>
            <a href="grades.php">Grades</a>
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="logout.php">Logout</a>
        </nav>

    </aside>

    <main class="main-content">

        <div class="topbar">
            <h1>Student Grade Management System</h1>
            <p>Welcome back! Manage your students and grades efficiently.</p>
        </div>

        <div class="cards">

            <div class="card">
                <h3>Total Students</h3>
                <p>120</p>
            </div>

            <div class="card">
                <h3>Total Subjects</h3>
                <p>8</p>
            </div>

            <div class="card">
                <h3>Average Grade</h3>
                <p>89%</p>
            </div>

        </div>

        <a href="grades.php" class="btn">
            View Grade Management
        </a>

    </main>

</div>

</body>
</html>