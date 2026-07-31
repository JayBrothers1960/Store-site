/*let index = 0;
function runCarousel() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    index++;
    if (index > slides.length) index = 1;
    if (slides[index-1]) slides[index-1].style.display = "block";
    setTimeout(runCarousel, 4000);
}

const products = [
    { name: "Usha Janome Allure", cat: "Sewing" },
    { name: "Usha Striker Fan", cat: "Fans" },
    { name: "Usha 3602 Mixer", cat: "Appliances" }
];

function loadProducts() {
    const grid = document.getElementById('best-sellers');
    products.forEach(p => {
        grid.innerHTML += `<div style="border:1px solid #eee; padding:20px; border-radius:8px;">
            <h3>${p.name}</h3><p>${p.cat}</p>
        </div>`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    runCarousel();
    loadProducts();
});*/

let index = 0;

// 1. CAROUSEL LOGIC
function runCarousel() {
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return; 
    
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    index++;
    if (index > slides.length) index = 1;
    if (slides[index-1]) slides[index-1].style.display = "block";
    setTimeout(runCarousel, 4000);
}

// 2. PRODUCT LOADER (Best Sellers)
const products = [
    { name: "Usha Janome Allure", cat: "Sewing", price: "₹14,500", img: "../Images/allure.avif" },
    { name: "Usha Striker Fan", cat: "Fans", price: "₹3,200", img: "../Images/striker-fan.png" },
    { name: "Usha 3602 Mixer", cat: "Appliances", price: "₹4,800", img: "../Images/mixer-3602.png" }
];

function loadProducts() {
    const grid = document.getElementById('best-sellers');
    if (!grid) return;
    grid.innerHTML = ""; 
    products.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="category">${p.cat}</p>
                <p class="price">${p.price}</p>
                <a href="https://wa.me/918700475154" class="order-btn"><span>&#128722;</span> Order Now</a>
            </div>`;
    });
}

// 3. THE MISSING LINK: AUTO-TAB LOGIC
function activateTabFromHash() {
    const hash = window.location.hash; // This gets the #tab2 part
    if (hash) {
        const targetId = hash.substring(1); // Removes the '#' to get 'tab2'
        const radioButton = document.getElementById(targetId);
        
        if (radioButton) {
            radioButton.checked = true; // This "clicks" the radio button for you
            
            // Optional: Scrolls the page down to the tabs so the user doesn't have to
            radioButton.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// RUN EVERYTHING
document.addEventListener('DOMContentLoaded', () => {
    runCarousel();
    loadProducts();
    activateTabFromHash(); // This checks the URL as soon as the page loads
});