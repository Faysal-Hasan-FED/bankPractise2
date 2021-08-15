document.getElementById("login-button").addEventListener('click', function () {
    const email = document.getElementById("user-email");
    const userEmail = email.value;
    const password = document.getElementById("user-password");
    const userPassword = password.value;


    if (userEmail == "sontan@bap.com" && userPassword == "secret") {
        window.location.href = "banking.html";
        // console.log("yes");
    }
})