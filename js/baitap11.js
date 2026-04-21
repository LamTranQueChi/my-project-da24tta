function tinhTien() {
    let sl = document.getElementById("soluong").value;
    let dg = document.getElementById("dongia").value;

    // kiểm tra rỗng hoặc không phải ký tự số nè
    if (sl === "" || dg === "" || isNaN(sl) || isNaN(dg)) {
        document.getElementById("thanhtien").value = "";
        return;
    }

    let thanhTien = parseFloat(sl) * parseFloat(dg);

    document.getElementById("thanhtien").value = thanhTien;
}