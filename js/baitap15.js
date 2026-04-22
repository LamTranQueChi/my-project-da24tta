function isEmail(email) 
{
    if (email === "") return false;
    if (email.indexOf("@") === -1) return false;
    if (email.indexOf(".") === -1) return false;
    if (email.indexOf(" ") !== -1) return false;
    return true;
}

function Kt_MatKhau(pass, repass) 
{
    return pass === repass;
}

function ktform() 
{
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let newPass = document.getElementById("newPass").value.trim();
    let rePass = document.getElementById("rePass").value.trim();
    let error = document.getElementById("error");

    error.innerHTML = "";
    error.style.display = "none"; 

    if (!isEmail(email)) {
        error.innerHTML = "Email không hợp lệ!";
        error.style.display = "block";
        return;
    }

    if (username.length < 10) {
        error.innerHTML = "Tên đăng nhập phải >= 10 ký tự!";
        error.style.display = "block";
        return;
    }

    if (newPass.length < 15) {
        error.innerHTML = "Mật khẩu phải >= 15 ký tự!";
        error.style.display = "block";
        return;
    }

    if (!Kt_MatKhau(newPass, rePass)) {
        error.innerHTML = "Mật khẩu không khớp!";
        error.style.display = "block";
        return;
    }

    // nếu nhập đúng thì sẽ chuyển sang cái đường link (không có làm bài 14 nên lấy link bài 11 nha hihi)
    window.location.href = "https://lamtranquechi.github.io/my-project-da24tta/html/pagebaitap11.html";
}