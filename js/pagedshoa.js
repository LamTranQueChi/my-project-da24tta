
const storageKey = "productList";

const defaultProductList = [
    {
        id: 1,
        name: "Hoa hồng đỏ",
        price: "25000 VND / 30 hạt",
        image: "../assets/images/hoahong.jpg", 
        desc: "Hoa hồng đỏ sở hữu vẻ đẹp quyến rũ cùng hương thơm dịu nhẹ, mang đến cảm giác sang trọng và lãng mạn cho mọi không gian sống. Những cánh hoa mềm mại tượng trưng cho tình yêu, sự may mắn và hạnh phúc, rất thích hợp để trang trí sân vườn, ban công hoặc làm quà tặng ý nghĩa cho người thân yêu. Cây dễ chăm sóc, sinh trưởng tốt và có khả năng ra hoa quanh năm nếu được tưới nước và đón nắng hợp lý. Một chậu hoa hồng đỏ không chỉ giúp ngôi nhà thêm rực rỡ, tươi mới mà còn tạo nên góc thư giãn đầy sức sống mỗi ngày, là lựa chọn hoàn hảo cho những ai yêu thiên nhiên và muốn mang vẻ đẹp lãng mạn vào không gian sống.",
        productLink: "product-detail.html?id=1",
        category: "hong",
        hidden: false
    },

    {
        id: 2,
        name: "Hoa Tulip hồng",
        price: "75000 VND / 5 củ ",
        image: "../assets/images/tuliphong.jpg",
        desc: "Hoa Tulip hồng là loài hoa mang đến vẻ đẹp dịu dàng và thanh lịch, thường được sử dụng để trang trí sân vườn, ban công hoặc làm quà tặng ý nghĩa. Với màu sắc nhẹ nhàng và hương thơm dễ chịu, Tulip hồng là lựa chọn lý tưởng cho những ai yêu thích sự tinh tế và sang trọng.",
        productLink: "product-detail.html?id=2",
        category: "tulip",
        hidden: false
    },

    {
        id: 3,
        name: "Hướng dương đỏ",
        price: "25000 VND / 20 hạt",
        image: "../assets/images/huongduong.jpg",
        desc: "Hướng dương đỏ là loài hoa mang đến vẻ đẹp rực rỡ và năng động, thường được sử dụng để trang trí sân vườn, ban công hoặc làm quà tặng ý nghĩa. Với màu sắc tươi sáng và hương thơm dễ chịu, Hướng dương đỏ là lựa chọn lý tưởng cho những ai yêu thích sự sôi động và đầy sức sống.",
        productLink: "product-detail.html?id=3",
        category: "huongduong",
        hidden: false
    },

    {
        id: 4,
        name: "Hoa ly trắng",
        price: "30000 VND / củ",
        image: "../assets/images/hoaly.jpg",
        desc: "Hoa ly trắng là loài hoa mang đến vẻ đẹp tinh tế và thanh lịch, thường được sử dụng để trang trí sân vườn, ban công hoặc làm quà tặng ý nghĩa. Với màu sắc trắng tinh khôi và hương thơm dịu nhẹ, Hoa ly trắng là lựa chọn lý tưởng cho những ai yêu thích sự thuần khiết và thanh cao.",
        productLink: "product-detail.html?id=4",
        category: "ly",
        hidden: false
    },

    {
        id: 5,
        name: "Hoa true lavender",
        price: "45000 VND / 20 hạt",
        image: "../assets/images/Lavender.jpg",
        desc: "Hoa true lavender là loài hoa mang đến vẻ đẹp dịu dàng và thanh lịch, thường được sử dụng để trang trí sân vườn, ban công hoặc làm quà tặng ý nghĩa. Với màu sắc nhẹ nhàng và hương thơm dễ chịu, True Lavender là lựa chọn lý tưởng cho những ai yêu thích sự tinh tế và sang trọng.",
        productLink: "product-detail.html?id=5",
        category: "lavender",
        hidden: false
    },

    {
        id: 6,
        name: "Hoa hồng trắng",
        price: "40000 VND / 30 hạt",
        image: "../assets/images/hongtrang.jpg",
        desc: "Hoa hồng trắng là loài hoa mang đến vẻ đẹp tinh tế và thanh lịch, thường được sử dụng để trang trí sân vườn, ban công hoặc làm quà tặng ý nghĩa. Với màu sắc trắng tinh khôi và hương thơm dịu nhẹ, Hoa hồng trắng là lựa chọn lý tưởng cho những ai yêu thích sự thuần khiết và thanh cao.",
        productLink: "product-detail.html?id=6",
        category: "hong",
        hidden: false
    },

    {
        id: 7,
        name: "Hoa ly vàng",
        price: "40000 VND / củ",
        image: "../assets/images/lyvang.jpg",
        desc: "Hoa ly vàng là loài hoa mang đến vẻ đẹp rực rỡ và năng động, thường được sử dụng để trang trí sân vườn, ban công hoặc làm quà tặng ý nghĩa. Với màu sắc tươi sáng và hương thơm dễ chịu, Hoa ly vàng là lựa chọn lý tưởng cho những ai yêu thích sự sôi động và đầy sức sống.",
        productLink: "product-detail.html?id=7",
        category: "ly",
        hidden: false
    },

    {
        id: 8,
        name: "Tulip vàng",
        price: "85000 VND / 5 củ",
        image: "../assets/images/tulipvang.jpg",
        desc: "Tulip vàng là loài hoa mang đến vẻ đẹp rực rỡ và năng động, thường được sử dụng để trang trí sân vườn, ban công hoặc làm quà tặng ý nghĩa. Với màu sắc tươi sáng và hương thơm dễ chịu, Tulip vàng là lựa chọn lý tưởng cho những ai yêu thích sự sôi động và đầy sức sống.",
        productLink: "product-detail.html?id=8",
        category: "tulip",
        hidden: false
    },

    {
        id: 9,
        name: "Hướng dương vàng",
        price: "20000 VND / 20 hạt",
        image: "../assets/images/huongduongvang.jpg",
        desc: "Hướng dương vàng là loài hoa mang đến vẻ đẹp rực rỡ và năng động, thường được sử dụng để trang trí sân vườn, ban công hoặc làm quà tặng ý nghĩa. Với màu sắc tươi sáng và hương thơm dễ chịu, Hướng dương vàng là lựa chọn lý tưởng cho những ai yêu thích sự sôi động và đầy sức sống.",
        productLink: "product-detail.html?id=9",
        category: "huongduong",
        hidden: false
    },

    {
        id: 10,
        name: "Hoa spike lavender",
        price: "50000 VND / 25 hạt",
        image: "../assets/images/oaihuongspikelvd.jpg",
        desc: "Hoa spike lavender là loài hoa mang đến vẻ đẹp dịu dàng và thanh lịch, thường được sử dụng để trang trí sân vườn, ban công hoặc làm quà tặng ý nghĩa. Với màu sắc nhẹ nhàng và hương thơm dễ chịu, Spike Lavender là lựa chọn lý tưởng cho những ai yêu thích sự tinh tế và sang trọng.",
        productLink: "product-detail.html?id=10",
        category: "lavender",
        hidden: false
    }
];

let productList = JSON.parse(localStorage.getItem(storageKey));

if (!Array.isArray(productList)) {
    productList = defaultProductList;
    localStorage.setItem(storageKey, JSON.stringify(productList));
}

function addProduct(id, name, price, image, link)
{
    //khung sản phẩm
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

    //Gán hình vào div ảnh
    productDiv1.appendChild(productImage);

    //thong tin sp
    const productDiv2 = document.createElement("div");
    productDiv2.setAttribute("class", "product-info");

    //ten sp
    const productName = document.createElement("p");
    productName.className = "title";
    productName.innerText = name;

    //gia sp
    const productPrice = document.createElement("p");
    productPrice.className = "price";
    productPrice.innerText = price;

    //tạo link xem chi tiết
    const productLink = document.createElement("a");
    productLink.innerText = "Xem chi tiết";

    //gán đường dẫn cho link
    productLink.setAttribute("href", link);
    productLink.setAttribute("target", "_self");

    //Gắn div hình và div thông tin vào sản phẩm
    productDiv2.appendChild(productName);
    productDiv2.appendChild(productPrice);
    productDiv2.appendChild(productLink);
    productItem.appendChild(productDiv1);
    productItem.appendChild(productDiv2);

    //lấy vào danh sách sp
    const productContainer = document.getElementById("product-list");

    //Hiển thị sp
    productContainer.appendChild(productItem);
}


function renderProducts(list) //list là ds sp truyền vào
{
    const container = document.getElementById("product-list");  // Lấy danh sách sản phẩm

    container.innerHTML = ""; //xóa dữ liệu cũ

    //forEach lặp qua từng phtu, và product đại diện cho từng sp
    list.forEach(product => {

         // Hiển thị sản phẩm
        addProduct(
            product.id,
            product.name,
            product.price,
            product.image,
            product.productLink
        );

    });
}

//toggleContact() dùng để ẩn/ hiện 
function toggleContact() {
    const contact = document.getElementById("contactInfo");

    //ktra phần tử có đang hiện không, nếu block là đang hiện, đang hiện thì ẩn -> none để ẩn đi
    if(contact.style.display === "block"){
        contact.style.display = "none";
    }
    else{
        contact.style.display = "block"; // nếu đang ẩn thì block ở đây làm hiện lên
    }
}

//hàm lọc sản phẩm
function filterProduct(category)
{
    const filtered = productList.filter(  // lọc sp theo danh mục
        p => p.category === category && !p.hidden // ktra đúng loại và chưa bị ẩn
    );

    renderProducts(filtered); // Hiển thị sp đã lọc
}

//Hiện sp bình thường, chưa bị ẩn
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

function resetProducts() {
    localStorage.removeItem(storageKey);
    productList = structuredClone(defaultProductList);
    localStorage.setItem(storageKey, JSON.stringify(productList));
    renderProducts(productList.filter(p => !p.hidden));
}

renderProducts(productList.filter(p => !p.hidden));
updateDeletedList();
saveData();
