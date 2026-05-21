
const storageKey = "productList";

const defaultProductList = [
    {
        id: 1,
        name: "Hoa hồng đỏ",
        price: "25000 VND / 30 hạt",
        image: "../assets/images/hoahong.jpg",
        productLink: "product-detail.html?id=1",
        category: "hong",
        hidden: false
    },

    {
        id: 2,
        name: "Hoa Tulip hồng",
        price: "75000 VND / 5 củ ",
        image: "../assets/images/tuliphong.jpg",
        productLink: "product-detail.html?id=2",
        category: "tulip",
        hidden: false
    },

    {
        id: 3,
        name: "Hướng dương đỏ",
        price: "25000 VND / 20 hạt",
        image: "../assets/images/huongduong.jpg",
        productLink: "product-detail.html?id=3",
        category: "huongduong",
        hidden: false
    },

    {
        id: 4,
        name: "Hoa ly trắng",
        price: "30000 VND / củ",
        image: "../assets/images/hoaly.jpg",
        productLink: "product-detail.html?id=4",
        category: "ly",
        hidden: false
    },

    {
        id: 5,
        name: "Hoa true lavender",
        price: "45000 VND / 20 hạt",
        image: "../assets/images/Lavender.jpg",
        productLink: "product-detail.html?id=5",
        category: "lavender",
        hidden: false
    },

    {
        id: 6,
        name: "Hoa hồng trắng",
        price: "40000 VND / 30 hạt",
        image: "../assets/images/hongtrang.jpg",
        productLink: "product-detail.html?id=6",
        category: "hong",
        hidden: false
    },

    {
        id: 7,
        name: "Hoa ly vàng",
        price: "40000 VND / củ",
        image: "../assets/images/lyvang.jpg",
        productLink: "product-detail.html?id=7",
        category: "ly",
        hidden: false
    },

    {
        id: 8,
        name: "Tulip vàng",
        price: "85000 VND / 5 củ",
        image: "../assets/images/tulipvang.jpg",
        productLink: "product-detail.html?id=8",
        category: "tulip",
        hidden: false
    },

    {
        id: 9,
        name: "Hướng dương vàng",
        price: "20000 VND / 20 hạt",
        image: "../assets/images/huongduongvang.jpg",
        productLink: "product-detail.html?id=9",
        category: "huongduong",
        hidden: false
    },

    {
        id: 10,
        name: "Hoa spike lavender",
        price: "50000 VND / 25 hạt",
        image: "../assets/images/oaihuongspikelvd.jpg",
        productLink: "product-detail.html?id=10",
        category: "lavender",
        hidden: false
    }
];


let productList = JSON.parse(localStorage.getItem(storageKey));

if (!Array.isArray(productList)) {

    productList = defaultProductList;

    localStorage.setItem(
        storageKey,
        JSON.stringify(defaultProductList)
    );
}

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

function renderProducts(list)
{
    const container = document.getElementById("product-list");

    container.innerHTML = "";

    list.forEach(product => {

        addProduct(
            product.id,
            product.name,
            product.price,
            product.image,
            product.productLink
        );

    });
}

function refreshUI(list = productList) {
    refreshUI();
}

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
    const filtered = productList.filter(
        p => p.category === category && !p.hidden
    );

    renderProducts(filtered);
}

//Hiện sp bình thường
function showAllProduct()
{
    const activeProducts = productList.filter(
        p => !p.hidden
    );
    renderProducts(activeProducts);
}

function changeBanner(imageName){
    document.getElementById("banner-image").src =
        "../assets/images/" + imageName;
}

//them sản phẩm đã xóa
function updateDeletedList() {
    const list = document.getElementById("deletedList");
    const panel = document.getElementById("deletedPanel");

    if (!list || !panel) return;

    list.innerHTML = "";

    const deleted = productList.filter(p => p.hidden);

    if (deleted.length === 0) {
        panel.style.display = "none";
        return;
    }

    panel.style.display = "block";

    deleted.forEach(p => {
        const li = document.createElement("li");
        li.innerText = p.name;

        li.onclick = function () {
            window.location.href = `product-detail.html?id=${p.id}`;
        };

        list.appendChild(li);
    });
}

function saveData() {
    localStorage.setItem("productList", JSON.stringify(productList));
}

function showDeletedProducts()
{
    const deletedProducts = productList.filter(
        p => p.hidden
    );

    renderProducts(deletedProducts);
}

renderProducts(productList.filter(p => !p.hidden));
updateDeletedList();