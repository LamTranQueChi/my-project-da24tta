let soluong =document.getElementsByClassName("sl");
let dongia =document.getElementsByClassName("dg");
let thanhtien =document.getElementsByClassName("tt");
let tongThanhTien=0;

for(let i=0; i<soluong.length; i++)
{
    let sl= parseInt(soluong[i].innerHTML);
    let dg= parseInt(dongia[i].innerHTML);
    
    let tt=sl*dg;

    thanhtien[i].innerHTML = tt;
    
    tongThanhTien += tt;
}

document.getElementById("tongTien").innerHTML= "Tổng tiền: " + tongThanhTien;