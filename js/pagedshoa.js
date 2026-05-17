const productList = [
    {
        id: 1,
        name: "Hoa hồng đỏ",
        price: "25000 VND / 30 hạt",
        image: "../assets/images/hoahong.jpg",
        productLink: "product-detail.html?id=1",
        category: "hong"
    },

    {
        id: 2,
        name: "Hoa Tulip hồng",
        price: "75000 VND / 5 củ ",
        image: "../assets/images/tuliphong.jpg",
        productLink: "product-detail.html?id=2",
        category: "tulip"
    },

    {
        id: 3,
        name: "Hướng dương đỏ",
        price: "25000 VND / 20 hạt",
        image: "../assets/images/huongduong.jpg",
        productLink: "product-detail.html?id=3",
        category: "huongduong"
    },

    {
        id: 4,
        name: "Hoa ly trắng",
        price: "30000 VND / củ",
        image: "../assets/images/hoaly.jpg",
        productLink: "product-detail.html?id=4",
        category: "ly"
    },

    {
        id: 5,
        name: "Hoa true lavender",
        price: "45000 VND / 20 hạt",
        image: "../assets/images/Lavender.jpg",
        productLink: "product-detail.html?id=5",
        category: "lavender"
    },

    {
    id: 6,
    name: "Hoa hồng trắng",
    price: "40000 VND / 30 hạt",
    image: "../assets/images/hongtrang.jpg",
    productLink: "product-detail.html?id=6",
    category: "hong"
},

{
    id: 7,
    name: "Hoa ly vàng",
    price: "40000 VND / củ",
    image: "../assets/images/lyvang.jpg",
    productLink: "product-detail.html?id=7",
    category: "ly"
},

{
    id: 8,
    name: "Tulip vàng",
    price: "85000 VND / 5 củ",
    image: "../assets/images/tulipvang.jpg",
    productLink: "product-detail.html?id=8",
    category: "tulip"
},

{
    id: 9,
    name: "Hướng dương vàng",
    price: "20000 VND / 20 hạt",
    image: "../assets/images/huongduongvang.jpg",
    productLink: "product-detail.html?id=9",
    category: "huongduong"
},

{
    id: 10,
    name: "Hoa spike lavender",
    price: "50000 VND / 25 hạt",
    image: "../assets/images/oaihuongspikelvd.jpg",
    productLink: "product-detail.html?id=10",
    category: "lavender"
}
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
    productPrice.innerText = price;

    const productLink = document.createElement("a");
    productLink.innerText = "Xem chi tiết";

    productLink.setAttribute("href", link);
    productLink.setAttribute("target", "_self");

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

productList.forEach(function(product) {

    addProduct(
        product.id,
        product.name,
        product.price,
        product.image,
        product.productLink,
        product.desc
    );

});

function toggleContact() {
    const contact = document.getElementById("contactInfo");

    if(contact.style.display === "block"){
        contact.style.display = "none";
    }
    else{
        contact.style.display = "block";
    }
}

function filterProduct(category)
{
    document.getElementById("product-list").innerHTML = "";

    productList.forEach(function(product){

        if(product.category === category)
        {
            addProduct(
                product.id,
                product.name,
                product.price,
                product.image,
                product.productLink
            );
        }

    });
}

function showAllProduct()
{
    //Xóa danh sách cũ
    document.getElementById("product-list").innerHTML = "";

    //Hiện lại toàn bộ sản phẩm
    productList.forEach(function(product){

        addProduct(
            product.id,
            product.name,
            product.price,
            product.image,
            product.productLink
        );

    });
}