function togglePassword(){

    let password = document.getElementById("password");

    if(password.type === "password"){
        password.type = "text";
    }
    else{
        password.type = "password";
    }

}

function validateForm(){

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if(username.length < 4){
        alert("Username must be at least 4 characters.");
        return false;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters.");
        return false;
    }

    return true;

}