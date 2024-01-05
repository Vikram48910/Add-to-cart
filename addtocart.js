const products = [
    { id: 0, image: "image/iphone.webp", title: 'IPhone', price: 100000 },
    { id: 1, image: "image/Ultra.webp", title: 'Ultra Smart Watch', price: 80000 },
    { id: 2, image: "image/lap.webp", title: 'Hp Laptop', price: 55000 },
    { id: 3, image: "image/tws.webp", title: 'Vivo Tws', price: 1699 }
];

const productListDiv = document.getElementById('root');
const cart = [];

function renderProducts() {
    productListDiv.innerHTML = products.map(item => `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src=${item.image} alt="${item.title}">
            </div>
            <div class='bottom'>
                <p>${item.title}</p>
                <h2>INR ${item.price}.00</h2>
                <button onclick='addToCart(${item.id})'>Add to cart</button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const selectedProduct = products.find(item => item.id === productId);
    cart.push({ ...selectedProduct });
    updateCartDisplay();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function updateCartDisplay() {
    let total = 0;
    document.getElementById('count').innerHTML = cart.length;

    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((item, index) => {
            total += item.price;
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${item.image} alt="${item.title}">
                    </div>
                    <p style='font-size:12px;'>${item.title}</p>
                    <h2 style='font-size: 15px;'>INR ${item.price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='removeCartItem(${index})'></i>
                </div>
            `;
        }).join('');
    }

    document.getElementById('total').innerHTML = `INR ${total.toFixed(2)}`;
}
renderProducts();
const productsJson = JSON.stringify(products, null, 2);
fs.writeFileSync('package.json', package);
console.log('JSON file generated successfully.');
