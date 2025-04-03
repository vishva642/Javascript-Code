let products=[];
let cart=[];
async function fetchProducts() {
    try{
        const response = await fetch("products.json");
        products= await response.json();
        displayProducts();
        console.log(products);
    }
    catch(error){
        console.log("Error fetching products : ", error);
    }
}
function displayProducts(filterText="",sort=""){
    const productList = document.getElementById("product-list");
    productList.innerHTML="";
    let filterProducts = products.filter((p)=>
    p.name.toLowerCase().includes(filterText.toLowerCase()));
    if(sort==="low"){
        filterProducts.sort((a,b)=>a.price-b.price);
    }
    else if(sort==="high"){
        filterProducts.sort((a,b)=>b.price-a.price);
    }
    filterProducts.forEach((product)=>{
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML=`
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    })
}
function addToCart(id){
    const product = products.find((p)=>p.id===id);
    const existingItem = cart.find((item)=>item.id===id);
    if(existingItem){
        existingItem.quantity +=1;
    }
    else{
        cart.push({...product,quantity:1});
    }
    updateCartCount();
}
function updateCartCount(){
    document.getElementById("cart-count").innerText=cart.reduce(
        (total,item)=>total+item.quantity,
        0
    );
}
function viewCart(){
    const cartPage = document.getElementById("cart-page");
    cartPage.classList.remove("hidden");
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML="";
    if(cart.length===0){
        cartItems.innerHTML=`<p>Your cart is empty</p>`;
        return;
    }
    cart.forEach((item)=>{
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML=`
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <button onclick="decrementCart(${item.id})">-</button>
        <span>${item.quantity}</span>
        <button onclick="incrementCart(${item.id})">+</button>
        `;
        cartItems.appendChild(cartItem);
    });
}
function incrementCart(id){
    cart = cart.map((item)=>
    item.id===id?{...item,quantity:item.quantity + 1}:item
);
viewCart();
updateCartCount();
}
function decrementCart(id){
    cart = cart.map((item)=>
    item.id===id?{...item,quantity:item.quantity - 1}:item
).filter((item)=>item.quantity>0);
viewCart();
updateCartCount();
}
function closeCart(){
    document.getElementById("cart-page").classList.add("hidden");
}
document.getElementById("searchBox").addEventListener("input",(e)=>{
    displayProducts(e.target.value);
})
document.getElementById("sortPrice").addEventListener("change",(e)=>{
    displayProducts(document.getElementById("searchBox").value,e.target.value);
})
fetchProducts();