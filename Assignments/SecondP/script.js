let cart = [];
let products = [
  { id: 1, name: "Nike Air Max", price: 120, category: "men", image: "images/shoe1.jpg" },
  { id: 2, name: "Nike React", price: 100, category: "women", image: "images/shoe2.jpg" },
  { id: 3, name: "Nike Free Run", price: 90, category: "kids", image: "images/shoe3.jpg" },
];

// Render Products
function renderProducts(category = "all") {
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = "";
  const filteredProducts = category === "all" ? products : products.filter(product => product.category === category);
  filteredProducts.forEach(product => {
    productGrid.innerHTML += `
      <div class="product-card" onclick="showProductDetails(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

// Add to Cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
  alert(`${product.name} added to cart!`);
}

// Update Cart
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    cartItems.innerHTML += `<li>${item.name} - $${item.price}</li>`;
    total += item.price;
  });
  cartTotal.textContent = total;
}

// Toggle Cart Modal
function toggleCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.style.display = cartModal.style.display === "flex" ? "none" : "flex";
}

// Close Cart Modal
function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}

// Checkout
function checkout() {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
  closeCart();
}

// Filter Products
function filterProducts(category) {
  renderProducts(category);
}

// Show Product Details
function showProductDetails(productId) {
  const product = products.find(p => p.id === productId);
  alert(`Product Details:\nName: ${product.name}\nPrice: $${product.price}`);
}

// Initial Render
renderProducts();
