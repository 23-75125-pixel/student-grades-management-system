window.onload = function () {
    const table = document.getElementById("gradeTable");

    if (table) {
        for (let i = 1; i < table.rows.length; i++) {
            const math = Number(table.rows[i].cells[1].textContent);
            const science = Number(table.rows[i].cells[2].textContent);
            const english = Number(table.rows[i].cells[3].textContent);

            const average = ((math + science + english) / 3).toFixed(2);

            table.rows[i].cells[4].textContent = average;

            if (average >= 75) {
                table.rows[i].cells[5].textContent = "PASS";
                table.rows[i].cells[5].style.color = "green";
            } else {
                table.rows[i].cells[5].textContent = "FAIL";
                table.rows[i].cells[5].style.color = "red";
            }
        }

        updateStudentCount();
    }
};

function togglePassword() {
    const password = document.getElementById("password");

    if (!password) return;

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

function searchStudent() {
    const input = document.getElementById("search");
    const table = document.getElementById("gradeTable");

    if (!input || !table) return;

    const filter = input.value.toUpperCase();
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        const firstCell = rows[i].getElementsByTagName("td")[0];

        if (firstCell) {
            const value = firstCell.textContent || firstCell.innerText;

            if (value.toUpperCase().indexOf(filter) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }

    updateStudentCount();
}

function resetSearch() {
    const input = document.getElementById("search");

    if (!input) return;

    input.value = "";
    searchStudent();
}

function sortTable() {
    const table = document.getElementById("gradeTable");

    if (!table) return;

    const rows = Array.from(table.rows).slice(1);

    rows.sort(function (a, b) {
        return a.cells[0].textContent.localeCompare(b.cells[0].textContent);
    });

    rows.forEach(function (row) {
        table.appendChild(row);
    });

    updateStudentCount();
}

function updateStudentCount() {
    const table = document.getElementById("gradeTable");
    const counter = document.getElementById("studentCount");

    if (!table || !counter) return;

    let count = 0;

    for (let i = 1; i < table.rows.length; i++) {
        if (table.rows[i].style.display !== "none") {
            count++;
        }
    }

    counter.textContent = count;
}

function validateForm() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (!username || !password) return false;

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length < 4) {
        alert("Username must be at least 4 characters.");
        username.focus();
        return false;
    }

    if (passwordValue.length < 6) {
        alert("Password must be at least 6 characters.");
        password.focus();
        return false;
    }

    return true;
};