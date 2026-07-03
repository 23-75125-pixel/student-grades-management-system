<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Grade Management System - Grade Management</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="container">

    <h1>Student Grade Management System</h1>

    <input
        type="text"
        id="search"
        placeholder="Search Student..."
        onkeyup="searchStudent()"
    >

    <button type="button" onclick="sortTable()">Sort A-Z</button>
    <button type="button" onclick="resetSearch()">Reset</button>

    <p>
        Total Students:
        <span id="studentCount">5</span>
    </p>

    <table id="gradeTable">

        <tr>
            <th>Student</th>
            <th>Math</th>
            <th>Science</th>
            <th>English</th>
            <th>Average</th>
            <th>Status</th>
        </tr>

        <tr>
            <td>Juan Dela Cruz</td>
            <td>90</td>
            <td>85</td>
            <td>88</td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td>Maria Santos</td>
            <td>95</td>
            <td>92</td>
            <td>94</td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td>Pedro Reyes</td>
            <td>70</td>
            <td>72</td>
            <td>68</td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td>Ana Cruz</td>
            <td>89</td>
            <td>91</td>
            <td>90</td>
            <td></td>
            <td></td>
        </tr>

        <tr>
            <td>Jose Ramos</td>
            <td>78</td>
            <td>80</td>
            <td>76</td>
            <td></td>
            <td></td>
        </tr>

    </table>

    <a href="dashboard.php" class="btn">Back to Dashboard</a>

</div>

<script src="js/app.js"></script>

</body>
</html>