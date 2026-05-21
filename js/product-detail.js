
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
        price: "75000 VND / 5 củ",
        image: "../assets/images/tuliphong.jpg",
        desc: "Tulip hồng nổi bật với sắc hoa thanh lịch và sang trọng, mang đến vẻ đẹp nhẹ nhàng nhưng đầy cuốn hút cho mọi không gian. Những cánh hoa mềm mại tượng trưng cho hạnh phúc, sự yêu thương và những khởi đầu tươi mới, rất thích hợp để trang trí phòng khách, ban công hoặc làm quà tặng ý nghĩa. Với vẻ đẹp tinh tế lấy cảm hứng từ những khu vườn châu Âu nổi tiếng, Tulip hồng không chỉ giúp không gian thêm nổi bật mà còn tạo cảm giác thư giãn, ấm áp và đầy sức sống.",
        productLink: "product-detail.html?id=2",
        category: "tulip",
        hidden: false
    },

    {
        id: 3,
        name: "Hướng dương đỏ",
        price: "25000 VND / 20 hạt",
        image: "../assets/images/huongduong.jpg",
        desc: "Hoa hướng dương đỏ nổi bật với vẻ đẹp rực rỡ và đầy sức sống, luôn hướng về phía mặt trời như biểu tượng của niềm tin, hy vọng và sự mạnh mẽ. Những cánh hoa tươi sáng mang lại cảm giác tích cực, ấm áp và tràn đầy năng lượng cho mọi không gian sống. Loài hoa này rất thích hợp để trang trí sân vườn, ban công hoặc làm món quà ý nghĩa để gửi gắm lời động viên, khích lệ đến những người thân yêu. Với vẻ đẹp nổi bật và ý nghĩa tốt đẹp, hoa hướng dương đỏ sẽ giúp không gian của bạn trở nên tươi mới, nổi bật và đầy cảm hứng mỗi ngày.",
        productLink: "product-detail.html?id=3",
        category: "huongduong",
        hidden: false
    },

    {
        id: 4,
        name: "Hoa ly trắng",
        price: "30000 VND / củ",
        image: "../assets/images/hoaly.jpg",
        desc: "Hoa ly trắng nổi bật với vẻ đẹp sang trọng cùng hương thơm dịu dàng đặc trưng, mang đến cảm giác thanh lịch và tinh tế cho mọi không gian sống. Những cánh hoa trắng mềm mại tượng trưng cho sự thuần khiết, may mắn và bình yên, rất thích hợp để trang trí phòng khách, bàn ăn hoặc sử dụng trong các dịp quan trọng như lễ cưới và sự kiện đặc biệt. Khi nở rộ, hoa ly trắng không chỉ làm không gian thêm ấm áp và nổi bật mà còn tạo cảm giác thư giãn, nhẹ nhàng và đầy cuốn hút, trở thành lựa chọn hoàn hảo cho những ai yêu thích vẻ đẹp tinh tế và sang trọng.",
        productLink: "product-detail.html?id=4",
        category: "ly",
        hidden: false
    },

    {
        id: 5,
        name: "Hoa oải lavender",
        price: "45000 VND / 20 hạt",
        image: "../assets/images/Lavender.jpg",
        desc: "Hoa oải hương True Lavender nổi bật với sắc tím nhẹ nhàng cùng hương thơm thư giãn đặc trưng, mang đến cảm giác bình yên và thơ mộng cho mọi không gian sống. Những bông hoa mềm mại tượng trưng cho sự dịu dàng, thư thái và lãng mạn, rất thích hợp để trang trí phòng ngủ, bàn làm việc hoặc ban công nhỏ xinh. Không chỉ sở hữu vẻ đẹp tinh tế lấy cảm hứng từ những cánh đồng Lavender nổi tiếng, loài hoa này còn giúp tạo nên không gian dễ chịu, thư giãn và thoải mái sau những giờ học tập, làm việc căng thẳng, là lựa chọn hoàn hảo cho những ai yêu thích sự nhẹ nhàng và yên bình.",
        productLink: "product-detail.html?id=5",
        category: "lavender",
        hidden: false
    },

    {
        id: 6,
        name: "Hoa hồng trắng",
        price: "40000 VND / 30 hạt",
        image: "../assets/images/hongtrang.jpg",
        desc: "Hoa hồng trắng nổi bật với vẻ đẹp tinh khôi và thanh lịch, mang đến cảm giác nhẹ nhàng và sang trọng cho mọi không gian sống. Những cánh hoa mềm mại tượng trưng cho sự thuần khiết, chân thành và những tình cảm tốt đẹp, rất thích hợp để trang trí sân vườn, ban công hoặc làm quà tặng ý nghĩa trong những dịp đặc biệt. Với hương thơm dịu nhẹ cùng vẻ đẹp tinh tế, hoa hồng trắng không chỉ giúp không gian thêm tươi mới và nổi bật mà còn tạo cảm giác thư giãn, bình yên và đầy cuốn hút mỗi ngày.",
        productLink: "product-detail.html?id=5",
        category: "lavender",
        hidden: false
    },

    {
        id: 7,
        name: "Hoa ly vàng",
        price: "40000 VND / củ",
        image: "../assets/images/lyvang.jpg",
        desc: "Hoa ly vàng nổi bật với sắc vàng rực rỡ cùng hương thơm dịu nhẹ, mang đến cảm giác ấm áp, sang trọng và đầy sức sống cho mọi không gian sống. Những cánh hoa mềm mại tượng trưng cho niềm vui, sự hạnh phúc và may mắn, rất thích hợp để trang trí phòng khách, sân vườn hoặc làm quà tặng ý nghĩa dành cho người thân yêu. Khi nở rộ, hoa ly vàng không chỉ giúp không gian thêm nổi bật và tươi mới mà còn tạo cảm giác thư giãn, tích cực và tràn đầy năng lượng mỗi ngày.",
        productLink: "product-detail.html?id=7",
        category: "ly",
        hidden: false
    },

    {
        id: 8,
        name: "Tulip vàng",
        price: "85000 VND / 5 củ",
        image: "../assets/images/tulipvang.jpg",
        desc: "Tulip vàng nổi bật với vẻ đẹp tươi sáng và hiện đại, mang đến cảm giác ấm áp và tràn đầy sức sống cho mọi không gian sống. Những cánh hoa mềm mại cùng sắc vàng rực rỡ tượng trưng cho niềm vui, hạnh phúc và tình bạn chân thành, rất thích hợp để trang trí sân vườn, ban công hoặc làm quà tặng ý nghĩa dành cho bạn bè và người thân. Với vẻ đẹp thanh lịch và nổi bật, Tulip vàng không chỉ giúp khu vườn thêm sinh động mà còn tạo nên không gian tươi mới, thư giãn và đầy năng lượng tích cực mỗi ngày.",
        productLink: "product-detail.html?id=8",
        category: "tulip",
        hidden: false
    },

    {
        id: 9,
        name: "Hướng dương vàng",
        price: "20000 VND / 20 hạt",
        image: "../assets/images/huongduongvang.jpg",
        desc: "Hoa hướng dương vàng nổi bật với sắc vàng rực rỡ và những bông hoa lớn đầy sức sống, luôn hướng về phía ánh sáng như biểu tượng của hy vọng, niềm tin và nguồn năng lượng tích cực. Loài hoa này mang đến cảm giác ấm áp, tươi vui và tràn đầy cảm hứng, rất thích hợp để trang trí sân vườn, ban công hoặc làm quà tặng ý nghĩa dành cho người thân và bạn bè. Với vẻ đẹp nổi bật cùng ý nghĩa tốt đẹp, hướng dương vàng không chỉ giúp không gian thêm sinh động và rực rỡ mà còn tạo nên bầu không khí vui vẻ, lạc quan và đầy sức sống mỗi ngày.",
        productLink: "product-detail.html?id=9",
        category: "huongduong",
        hidden: false
    },

    {
        id: 10,
        name: "Hoa spike lavender",
        price: "50000 VND / 25 hạt",
        image: "../assets/images/oaihuongspikelvd.jpg",
        desc: "Hoa oải hương Spike Lavender nổi bật với sắc tím nhẹ nhàng cùng hương thơm thư giãn đặc trưng, mang đến cảm giác bình yên và thơ mộng cho mọi không gian sống. Những cành hoa mềm mại tượng trưng cho sự dịu dàng, thư thái và lãng mạn, rất thích hợp để trang trí sân vườn, ban công hoặc làm điểm nhấn cho không gian sống thêm tinh tế. Không chỉ sở hữu vẻ đẹp cuốn hút, Spike Lavender còn thường được sử dụng để làm tinh dầu và tạo bầu không khí dễ chịu, giúp bạn thư giãn sau những giờ học tập và làm việc căng thẳng. Khi nở rộ, loài hoa này sẽ mang đến cho không gian cảm giác tươi mới, ấm áp và đầy sức sống mỗi ngày.",
        productLink: "product-detail.html?id=10",
        category: "lavender",
        hidden: false
    },
];

let productList = JSON.parse(localStorage.getItem(storageKey));
if (!Array.isArray(productList)) {
    productList = defaultProductList;
    localStorage.setItem(storageKey, JSON.stringify(defaultProductList));
}

// lấy id từ URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// tìm sản phẩm
const product = productList.find(item => item.id === id);

//Container
const detailContainer = document.getElementById("product-detail");

//Nếu có sản phẩm
if(product)
{
    //Card
    const card = document.createElement("div");
    card.className = "detail-card";

    //Hình
    const img = document.createElement("img");
    img.setAttribute("src", product.image);
    img.className = "img-fluid";

    //Tên
    const name = document.createElement("h2");
    name.innerText = product.name;

    //Giá
    const price = document.createElement("h4");
    price.innerText = product.price;

    //Mô tả
    const desc = document.createElement("p");
    desc.innerText = product.desc;

    //Nút quay lại
    const backBtn = document.createElement("button");
    backBtn.innerText = "Quay lại";
    backBtn.className = "btn btn-secondary";
    backBtn.onclick = () => history.back();

    //button xóa
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Xóa";
    deleteBtn.className = "btn btn-danger";

    // BUTTON KHÔI PHỤC
    const restoreBtn = document.createElement("button");
    restoreBtn.innerText = "Thêm lại";
    restoreBtn.className = "btn btn-success";
    restoreBtn.style.display = "none";

    // trạng thái ban đầu
    if (product.hidden) 
    {
        deleteBtn.style.display = "none";
        restoreBtn.style.display = "inline-block";
    }

    //Xóa (ẩn sp)
    deleteBtn.onclick = function () {
        product.hidden = true;

        localStorage.setItem(storageKey, JSON.stringify(productList));

        alert("Đã xóa sản phẩm");

        window.location.href = "pagedshoa.html"; 
    };

    //khoi phục
    restoreBtn.onclick = function () {
        product.hidden = false;

        localStorage.setItem(storageKey, JSON.stringify(productList));

        alert("Đã khôi phục sản phẩm");

        window.location.href = "pagedshoa.html";
    };

    //Gán vào card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(desc);
    card.appendChild(backBtn);
    card.appendChild(deleteBtn);
    card.appendChild(restoreBtn);

    //Gán card vào container
    detailContainer.appendChild(card);
}
else
{
    detailContainer.innerHTML = "<h3>Không tìm thấy sản phẩm</h3>";
}
