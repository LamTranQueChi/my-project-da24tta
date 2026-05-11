const productList = [
    {
        id: 1,
        name: "Hạt giống hoa hồng",
        price: "25000 VND / 50 hạt",
        image: "../assets/images/hoahong.jpg",
        productLink: "product-detal.html",
        desc: ""
    },

    {
        id: 2,
        name: "Hoa Tulip Hà Lan",
        price: "75000 VND / 5 củ ",
        image: "../assets/images/tulip.jpg",
        productLink: "https://monhasfarm.com/san-pham/hat-giong/cu-giong-hoa/set-5-cu-hoa-tulip-ha-lan-mix-mau/"
    },

    {
        id: 3,
        name: "Hoa hướng dương đỏ",
        price: "25000 VND / 20 hạt",
        image: "../assets/images/huongduong.jpg",
        productLink: "https://hatgiongphuongnam.com/san-pham/hat-giong-huong-duong-do-cao-162.html"
    },

    {
        id: 4,
        name: "Hoa hướng dương đỏ",
        price: "25000 VND / 20 hạt",
        image: "../assets/images/dambut.jpg",
        productLink: "https://hatgiongtot.net/hat-giong-hoa-dam-but-lun.html"
    },

    {
        id: 5,
        name: "Hoa hướng dương đỏ",
        price: "25000 VND / 20 hạt",
        image: "../assets/images/huongduong.jpg",
        productLink: ""
    },
];

function addProduct(id, name, price, image, link)
{
    //Khai báo item
    const productItem = document.createElement("div");
    productItem.setAttribute("class", "product-item col-md-2");

    //Div hình
    const productDiv1 = document.createElement("div");
    productDiv1.setAttribute("class", "product-image");

    //Tạo hình
    const productImage = document.createElement("img");
    productImage.setAttribute("src", image);
    productImage.setAttribute("alt", name);
    productImage.setAttribute("class", "img-thumbnail img-fluid");

    //Gán hình
    productDiv1.appendChild(productImage);

    const productDiv2 = document.createElement("div");
    productDiv2.setAttribute("class", "product-info");

    const productName = document.createElement("p");
    productName.className = "title";
    productName.innerText = name;

    const productPrice = document.createElement("p");
    productPrice.className = "price";
    productPrice.innerText = price + " VND";

    const productLink = document.createElement("a");
    productLink.innerText = "Xem chi tiết";

    productLink.setAttribute("href", link);
    productLink.setAttribute("target", "_blank");


    //Gán vào div2
    productDiv2.appendChild(productName);
    productDiv2.appendChild(productPrice);
    productDiv2.appendChild(productLink);


    productItem.appendChild(productDiv1);
    productItem.appendChild(productDiv2);

    //Gán vào danh sách
    const productContainer = document.getElementById("product-list");

    productContainer.appendChild(productItem);
}


//Render sản phẩm
productList.forEach(function(product) {

    addProduct(
        product.id,
        product.name,
        product.price,
        product.image,
        product.productLink
    );

});