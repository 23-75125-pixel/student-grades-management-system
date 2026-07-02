window.onload = function () {
    let table = document.getElementById("gradeTable");

    if (table) {
        for (let i = 1; i < table.rows.length; i++) {
            let math = Number(table.rows[i].cells[1].innerHTML);
            let science = Number(table.rows[i].cells[2].innerHTML);
            let english = Number(table.rows[i].cells[3].innerHTML);

            let average = ((math + science + english) / 3).toFixed(2);
            table.rows[i].cells[4].innerHTML = average;

            if (Number(average) >= 75) {
                table.rows[i].cells[5].innerHTML = "PASS";
                table.rows[i].cells[5].style.color = "green";
            } else {
                table.rows[i].cells[5].innerHTML = "FAIL";
                table.rows[i].cells[5].style.color = "red";
            }
        }
    }
};

function togglePassword() {
    let password = document.getElementById("password");
    if (!password) return;

    password.type = password.type === "password" ? "text" : "password";
}

function searchStudent() {
    let input = document.getElementById("search");
    let table = document.getElementById("gradeTable");
    if (!input || !table) return;

    let filter = input.value.toUpperCase();
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let txt = td.textContent || td.innerText;
            tr[i].style.display = txt.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        }
    }
}

function resetSearch() {
    let input = document.getElementById("search");
    if (!input) return;
    input.value = "";
    searchStudent();
}

function sortTable() {
    let table = document.getElementById("gradeTable");
    if (!table) return;

    let rows = Array.from(table.rows).slice(1);
    rows.sort(function (a, b) {
        return a.cells[0].innerHTML.localeCompare(b.cells[0].innerHTML);
    });
    rows.forEach(row => table.appendChild(row));
}

function validateForm() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    if (!username || !password) return false;

    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();

    if (usernameValue.length < 4) {
        alert("Username must be at least 4 characters.");
        return false;
    }

    if (passwordValue.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    return true;
}
