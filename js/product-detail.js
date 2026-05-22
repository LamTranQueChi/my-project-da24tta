
// Tên dữ liệu lưu trong localStorage
const storageKey = "productList";

//Giữ dữ liệu sản phẩm không bị mất và tạo dữ liệu mặc định khi mở web lần đầu
let productList = JSON.parse(localStorage.getItem(storageKey));

// Nếu dữ liệu không hợp lệ hoặc rỗng
if (!Array.isArray(productList) || productList.length === 0) {
    productList = defaultProductList;
    localStorage.setItem(storageKey, JSON.stringify(defaultProductList));
}


// lấy id từ URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// tìm sản phẩm
const product = productList.find(item => item.id === id);
console.log("product:", product);

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
        const index = productList.findIndex(p => p.id === product.id);

        if (index !== -1) {
            productList[index].hidden = true;
            localStorage.setItem(storageKey, JSON.stringify(productList));
        }

        alert("Đã xóa sản phẩm");
        window.location.href = "pagedshoa.html";
    };

    //khoi phục
    restoreBtn.onclick = function () {
        const index = productList.findIndex(p => p.id === product.id);

        if (index !== -1) {
            productList[index].hidden = false;
            localStorage.setItem(storageKey, JSON.stringify(productList));
        }

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
