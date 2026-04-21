document.addEventListener("DOMContentLoaded", function () {

    let login = document.getElementById("login");
    let forgot = document.getElementById("forgot");

    let showForgot = document.getElementById("showForgot");
    let backLogin = document.getElementById("backLogin");

    showForgot.addEventListener("click", function () {
        login.style.display = "none";
        forgot.style.display = "block";
    });

    backLogin.addEventListener("click", function () {
        login.style.display = "block";
        forgot.style.display = "none";
    });

});