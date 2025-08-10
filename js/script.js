document.addEventListener("DOMContentLoaded", () => {
    const menuData = [
        { id: 1, name: "Phở Bò", price: 40000, img: "https://i.imgur.com/4ZQZ4Z0.jpg" },
        { id: 2, name: "Bún Chả", price: 35000, img: "https://i.imgur.com/ALnQltL.jpg" },
        { id: 3, name: "Cơm Gà", price: 45000, img: "https://i.imgur.com/GbL0SFi.jpg" },
    ];

    let cart = [];

    // Hiển thị menu
    const menuList = document.getElementById("menu-list");
    menuData.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${item.price.toLocaleString()} VNĐ</p>
            <button class="add-to-cart">Thêm vào giỏ</button>
        `;
        div.querySelector(".add-to-cart").addEventListener("click", () => {
            addToCart(item.id);
        });
        menuList.appendChild(div);
    });

    function addToCart(id) {
        const food = menuData.find(m => m.id === id);
        cart.push(food);
        document.getElementById("cart-count").textContent = cart.length;
    }

    // Giỏ hàng
    const cartBtn = document.getElementById("cart-btn");
    const cartModal = document.getElementById("cart-modal");
    const closeCart = document.getElementById("close-cart");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartBtn.addEventListener("click", () => {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            total += item.price;
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price.toLocaleString()} VNĐ`;
            cartItems.appendChild(li);
        });
        cartTotal.textContent = total.toLocaleString();
        cartModal.style.display = "block";
    });

    closeCart.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    // Đặt hàng
    document.getElementById("order-btn").addEventListener("click", () => {
        if (cart.length === 0) {
            alert("Giỏ hàng đang trống!");
            return;
        }
        console.log("Đơn hàng:", cart);
        alert("Cảm ơn bạn đã đặt hàng!");
        cart = [];
        document.getElementById("cart-count").textContent = 0;
        cartModal.style.display = "none";
    });
});