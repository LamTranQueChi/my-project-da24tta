const productList = [

    {
        id: 1,
        name: "Hoa hồng đỏ",
        price: "25000 / 30 hạt",
        image: "../assets/images/hoahong.jpg",
        desc: "Hoa hồng đỏ mang vẻ đẹp quyến rũ và hương thơm dịu nhẹ, thích hợp trồng trong sân vườn hoặc ban công. Từng cánh hoa mềm mại tượng trưng cho tình yêu và sự lãng mạn. Chỉ cần chăm sóc đúng cách, cây sẽ nở rực rỡ quanh năm và làm không gian sống trở nên đầy sức sống."
    },

    {
        id: 2,
        name: "Hoa Tulip Hà Lan",
        price: "75000 / 5 củ",
        image: "../assets/images/tulip.jpg",
        desc: "Tulip Hà Lan nổi bật với màu sắc thanh lịch và sang trọng. Loài hoa này thường nở vào mùa xuân, tạo nên khung cảnh nhẹ nhàng và tinh tế. Từ những khu vườn châu Âu nổi tiếng, Tulip đã trở thành biểu tượng của sự hạnh phúc và những khởi đầu tươi mới."
    },

    {
        id: 3,
        name: "Hướng dương đỏ",
        price: "25000 / 20 hạt",
        image: "../assets/images/huongduong.jpg",
        desc: "Hoa hướng dương đỏ luôn hướng về phía mặt trời như biểu tượng của niềm tin và hy vọng. Những cánh hoa vàng rực rỡ mang lại cảm giác tích cực và đầy năng lượng. Đây là lựa chọn phù hợp để trang trí sân vườn hoặc làm quà tặng với ý nghĩa động viên, khích lệ."
    },

    {
        id: 4,
        name: "Hoa ly trắng",
        price: "30000 / củ",
        image: "../assets/images/hoaly.jpg",
        desc: "Hoa ly trắng sở hữu vẻ đẹp sang trọng cùng hương thơm dịu dàng đặc trưng. Loài hoa này thường xuất hiện trong những dịp quan trọng như lễ cưới hoặc trang trí không gian sống. Khi nở rộ, cẩm ly tạo cảm giác ấm áp, thanh lịch và mang đến nét đẹp đầy tinh tế."
    },

    {
        id: 5,
        name: "Hoa oải lavender",
        price: "45000 / 20 hạt",
        image: "../assets/images/Lavender.jpg",
        desc: "Hoa oải hương true lavender nổi tiếng với sắc tím nhẹ nhàng và hương thơm thư giãn đặc trưng. Những cánh đồng Lavender trải dài luôn mang lại cảm giác bình yên và thơ mộng. Loài hoa này không chỉ dùng để trang trí mà còn giúp tạo không gian dễ chịu, thích hợp cho những phút giây nghỉ ngơi."
    },

    {
    id: 6,
    name: "Hoa hồng trắng",
    price: "40000 VND / 30 hạt",
    image: "../assets/images/hongtrang.jpg",
    desc: "Hoa hồng trắng mang vẻ đẹp tinh khôi và thanh lịch. Những cánh hoa mềm mại tượng trưng cho sự thuần khiết và chân thành. Loài hoa này thích hợp để trang trí sân vườn hoặc làm quà tặng trong những dịp đặc biệt."
},

{
    id: 7,
    name: "Hoa ly vàng",
    price: "40000 VND / củ",
    image: "../assets/images/lyvang.jpg",
    desc: "Hoa ly vàng nổi bật với màu sắc rực rỡ và hương thơm dịu nhẹ. Loài hoa này tượng trưng cho niềm vui và sự hạnh phúc. Khi nở, hoa tạo nên không gian sang trọng và đầy sức sống."
},

{
    id: 8,
    name: "Tulip vàng",
    price: "85000 VND / 5 củ",
    image: "../assets/images/tulipvang.jpg",
    desc: "Tulip vàng mang vẻ đẹp tươi sáng và hiện đại. Những cánh hoa mềm mại cùng màu vàng nổi bật giúp khu vườn trở nên sinh động hơn. Đây là loài hoa tượng trưng cho niềm vui và tình bạn."
},

{
    id: 9,
    name: "Hướng dương vàng",
    price: "20000 VND / 20 hạt",
    image: "../assets/images/huongduongvang.jpg",
    desc: "Hướng dương vàng luôn hướng về phía ánh sáng như biểu tượng của hy vọng và năng lượng tích cực. Những bông hoa lớn cùng sắc vàng rực rỡ giúp không gian trở nên nổi bật và đầy sức sống."
},

{
    id: 10,
    name: "Hoa spike lavender",
    price: "50000 VND / 25 hạt",
    image: "../assets/images/oaihuongspikelvd.jpg",
    desc: "Hoa oải hương spike lavender nổi bật với sắc tím nhẹ nhàng cùng hương thơm thư giãn đặc trưng. Loài hoa này thường được dùng để trang trí sân vườn, làm tinh dầu hoặc tạo không gian dễ chịu. Khi nở rộ, những cành lavender mang lại cảm giác bình yên và thơ mộng."
}
];

//Lấy id từ URL
const params = new URLSearchParams(window.location.search);

const id = parseInt(params.get("id"));

//Tìm sản phẩm
const product = productList.find(function(item) {
    return item.id === id;
});

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
    backBtn.className = "btn btn-secondary back-btn";
    backBtn.innerText = "Quay lại";
    backBtn.onclick = function() 
    {
        history.back();
    };


    //Gán vào card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(desc);
    card.appendChild(backBtn);

    //Gán card vào container
    detailContainer.appendChild(card);
}
else
{
    detailContainer.innerHTML = "<h3>Không tìm thấy sản phẩm</h3>";
}