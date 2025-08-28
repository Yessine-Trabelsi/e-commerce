const products = [
  {
    id: 1,
    name: "Premium Wireless Headset",
    price: 89.99,
    category: "electronics",
    inStock: true,
    picture: "wireless_headset.jpg",
    picture_width: 150,
    description: "Description of Premuim Wireless Headset.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 49.99,
    category: "electronics",
    inStock: true,
    picture: "smart_watch.jpg",
    description: "Description of Smart Watch.",
  },
  {
    id: 3,
    name: "mini_mp3_details.html",
    price: 49.99,
    category: "electronics",
    inStock: true,
    picture: "mini_mp3_player.jpg",
    description: "Description of mini mp3 details.",
  },
];
const m = document.querySelector("#products");

products.forEach((p) => {
  const s = document.createElement("span");
  s.classList.add("product-card");
  s.innerHTML = `
            <div class="product-body">
              <img src="images/${p.picture}" width=150/>
              <h2>${p.name}</h2>
              <p>${p.description}</p>
              <p>price=$${p.price}</p>
            </div>
            <div>
              <span><button class="cart-btn">Add to Cart</button></span>
              <!--<button onclick="location.href = 'details.html'">Details</button>-->
              <span
                ><button onclick="window.open('headset_details.html')">
                  Details
                </button></span
              >
              
            </div>
    `;

  m.appendChild(s);
});
//
let cart = 0;
const cartv = document.querySelector("#cartcounter");
document.querySelectorAll(".cart-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    alert("Added to cart!");
    cart++;
    cartv.textContent = cart;
  });
});




