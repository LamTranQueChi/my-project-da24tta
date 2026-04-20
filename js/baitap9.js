function inBangCC() {
    let num = document.getElementById("so").value;

    if (num.trim() === "" || isNaN(num)) {
        document.getElementById("kq").innerHTML = " Vui lòng nhập số!";
        return;
    }

    let n = parseInt(num);

    // kiểm tra 1-9
    if (n < 1 || n > 9) {
        document.getElementById("kq").innerHTML = " Chỉ nhập số từ 1 đến 9!";
        return;
    }

    let s = "<h3>Bảng cửu chương " + n + "</h3>";

    for (let i = 1; i <= 10; i++) {
        s += n + " x " + i + " = " + (n * i) + "<br>";
    }

    document.getElementById("kq").innerHTML = s;
}