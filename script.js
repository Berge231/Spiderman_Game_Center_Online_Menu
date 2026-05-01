const menuData = {
  foodMenu: [
    {
      category: "Special food (Oven)",
      items: [
        { id: 101, name: "Special Chicken (Local)", price: 20000, category: "food", img: "Images/chicken.jpg", badge: "Oven" },
        { id: 102, name: "Special Chicken (Modern)", price: 25000, category: "food", img: "Images/chicken.jpg", badge: "Oven" },
        { id: 103, name: "Spiderman Special Chicken", price: 30000, category: "food", img: "Images/chicken.jpg", badge: "Signature" },
        { id: 104, name: "Half Special Chicken (Local)", price: 11000, category: "food", img: "Images/chicken.jpg" },
        { id: 105, name: "Half Special Chicken (Modern)", price: 13000, category: "food", img: "Images/chicken.jpg" },
        { id: 106, name: "Whole Chicken Ifulu", price: 15000, category: "food", img: "Images/chicken.jpg" },
        { id: 107, name: "Goat Leg Ifulu", price: 15000, category: "food", img: "Images/meatlovers.jpg" },
        { id: 108, name: "Goat Ribs Ifulu", price: 12000, category: "food", img: "Images/meatlovers.jpg" }
      ]
    },
    {
      category: "Grilled (NyamaChoma)",
      items: [
        { id: 201, name: "Spiderman Meat Lovers (Combo)", price: 36000, category: "food", desc: "25-Bonesteak, 2 chicken leg, 3 sausages, potatoes & gacumbari", img: "Images/meatlovers.jpg", badge: "Combo" },
        { id: 202, name: "Grilled Chicken (Modern)", price: 18000, category: "food", img: "Images/chicken.jpg" },
        { id: 203, name: "Grilled Chicken (Local)", price: 14000, category: "food", img: "Images/chicken.jpg" },
        { id: 204, name: "Half Grilled Chicken", price: 9000, category: "food", img: "Images/chicken.jpg" },
        { id: 205, name: "Goat Leg", price: 16000, category: "food", desc: "Served with 1 potato", img: "Images/meatlovers.jpg" },
        { id: 206, name: "Goat Ribs", price: 12000, category: "food", desc: "Served with 1 potato", img: "Images/meatlovers.jpg" },
        { id: 207, name: "Whole Tilapia Fish", price: 18000, category: "food", img: "Images/p7.jpg" }
      ]
    },
    {
      category: "Brochettes",
      items: [
        { id: 301, name: "Fish Brochette", price: 4000, category: "food", img: "Images/brochette.jpg" },
        { id: 302, name: "Beef Brochette", price: 3500, category: "food", img: "Images/brochette.jpg" },
        { id: 303, name: "Chicken Brochette", price: 3500, category: "food", img: "Images/brochette.jpg" },
        { id: 304, name: "Zingaro Brochette", price: 3000, category: "food", img: "Images/brochette.jpg" },
        { id: 305, name: "Liver Brochette", price: 3000, category: "food", img: "Images/brochette.jpg" },
        { id: 306, name: "Goat Brochette", price: 3000, category: "food", img: "Images/brochette.jpg" }
      ]
    },
    {
        category: "Soup",
        items: [
            { id: 401, name: "Veg Soup", price: 4000, category: "kids", subcat: "Kids Menu", img: "Images/download (4).jpg" },
            { id: 402, name: "Chicken Soup", price: 5000, category: "kids", subcat: "Kids Menu", img: "Images/download (4).jpg" },
            { id: 403, name: "Chicken Noodle Soup", price: 5000, category: "kids", subcat: "Kids Menu", img: "Images/download (4).jpg" },
            { id: 404, name: "Mushroom Cream Soup", price: 6000, category: "kids", subcat: "Kids Menu", img: "Images/download (4).jpg" }
        ]
    },
    {
        category: "Pizza",
        items: [
            { id: 405, name: "4 Season Pizza", price: "7,000 / 11,000", category: "kids", subcat: "Kids Menu", desc: "Sausage, Ham, Vegetables", img: "Images/pizza.jpg" },
            { id: 406, name: "Chicken Pizza", price: "7,000 / 10,000", category: "kids", subcat: "Kids Menu", desc: "Chicken, Vegetables", img: "Images/pizza.jpg" },
            { id: 407, name: "Meat Lovers Pizza", price: "8,000 / 12,000", category: "kids", subcat: "Kids Menu", desc: "Meat, chicken, sausage, ham, Vegetables", img: "Images/pizza.jpg" },
            { id: 408, name: "Margarita Pizza", price: "5,000 / 8,000", category: "kids", subcat: "Kids Menu", desc: "Cheese, Vegetables", img: "Images/pizza.jpg" },
            { id: 409, name: "Hawaiian Pizza", price: "7,000 / 11,000", category: "kids", subcat: "Kids Menu", desc: "Pineapple, ham, Vegetables", img: "Images/pizza.jpg" }
        ]
    },
    {
        category: "Burger with Chips",
        items: [
            { id: 410, name: "Spiderman Double Burger", price: 11000, category: "kids", subcat: "Kids Menu", img: "Images/double_burger.jpg" },
            { id: 411, name: "Beef Burger", price: 5000, category: "kids", subcat: "Kids Menu", img: "Images/beef_burger.jpg" },
            { id: 412, name: "Chicken Burger", price: 6000, category: "kids", subcat: "Kids Menu", img: "Images/chicken_burger.jpg" },
            { id: 413, name: "Triple Beef Burger", price: 13000, category: "kids", subcat: "Kids Menu", img: "Images/tripple_burger.jpg" }
        ]
    },
    {
        category: "Pasta",
        items: [
            { id: 414, name: "Pasta Bolognese", price: 5000, category: "kids", subcat: "Kids Menu", img: "Images/pasta.jpg" },
            { id: 415, name: "Pasta Vegetarian", price: 4000, category: "kids", subcat: "Kids Menu", img: "Images/pasta.jpg" },
            { id: 416, name: "Carbonara Pasta", price: 6000, category: "kids", subcat: "Kids Menu", img: "Images/pasta.jpg" }
        ]
    },
    {
        category: "Meat with Chips",
        items: [
            { id: 417, name: "Chicken Wings", price: 5500, category: "kids", subcat: "Kids Menu", img: "Images/p5.jpg" },
            { id: 418, name: "Chicken Lollipops", price: 7000, category: "kids", subcat: "Kids Menu", img: "Images/p5.jpg" },
            { id: 419, name: "Chips Liver", price: 4000, category: "kids", subcat: "Kids Menu", img: "Images/p5.jpg" },
            { id: 420, name: "Meatball with Chips", price: 3500, category: "kids", subcat: "Kids Menu", img: "Images/p5.jpg" },
            { id: 421, name: "Chicken Leg", price: 8500, category: "kids", subcat: "Kids Menu", img: "Images/p5.jpg" }
        ]
    },
    {
        category: "Side Dishes",
        items: [
            { id: 501, name: "Chips Banana", price: 2000, category: "sides-dessert", subcat: "Sides & Dessert", img: "Images/chips.jpg" },
            { id: 502, name: "Chips Potato", price: 2000, category: "sides-dessert", subcat: "Sides & Dessert", img: "Images/chips.jpg" },
            { id: 503, name: "Grilled Potato", price: 1000, category: "sides-dessert", subcat: "Sides & Dessert", img: "Images/chips.jpg" },
            { id: 504, name: "Grilled Banana", price: 500, category: "sides-dessert", subcat: "Sides & Dessert", img: "Images/chips.jpg" }
        ]
    },
    {
        category: "Dessert",
        items: [
            { id: 601, name: "Ice Cream", price: 1500, category: "sides-dessert", subcat: "Sides & Dessert", img: "Images/p7.jpg" },
            { id: 602, name: "Pop Corn", price: 1000, category: "sides-dessert", subcat: "Sides & Dessert", img: "Images/p6.jpg" },
            { id: 603, name: "Cotton Candy", price: 1500, category: "sides-dessert", subcat: "Sides & Dessert", img: "Images/cotton_candy_mojito.jpg" }
            ]
            }
            ],
            drinkMenu: [
            {
            category: "Soft Drinks",
            items: [
            { id: 701, name: "Water (Small)", price: 1000, category: "drinks", subcat: "Soft Drinks", img: "Images/water.jpg" },
            { id: 702, name: "Fanta (Small)", price: 1000, category: "drinks", subcat: "Soft Drinks", img: "Images/fanta.jpg" },
            { id: 703, name: "Panache", price: 1000, category: "drinks", subcat: "Soft Drinks", img: "Images/panache.jpg" },
            { id: 704, name: "Redbull", price: 3000, category: "drinks", subcat: "Soft Drinks", img: "Images/redbull.jpg" },
            { id: 705, name: "Bavaria Non Alc", price: 2500, category: "drinks", subcat: "Soft Drinks", img: "Images/Bavaria.jpg" }
            ]
            },
            {
            category: "Hot Tea",
            items: [
            { id: 801, name: "Lemon Tea", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/black_tea.jpg" },
            { id: 802, name: "Black Tea", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/black_tea.jpg" },
            { id: 803, name: "Ginger Tea", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/ginger_tea.jpg" },
            { id: 804, name: "Green Tea", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/green_tea.jpg" },
            { id: 805, name: "Spice Tea", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/spice_tea.jpg" },
            { id: 806, name: "Mint Tea", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/black_tea.jpg" },
            { id: 807, name: "Sugarcane Tea", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/black_tea.jpg" },
            { id: 808, name: "Russian Tea", price: 3500, category: "drinks", subcat: "Hot Tea", img: "Images/black_tea.jpg" },
            { id: 809, name: "African Tea", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/african_tea.jpg" },
            { id: 810, name: "Hot Chocolate", price: 3500, category: "drinks", subcat: "Hot Tea", img: "Images/hot_chocolate.jpg" }
            ]
            },
            {
            category: "Iced Tea",
            items: [
            { id: 820, name: "Iced Black Tea", price: 3000, category: "drinks", subcat: "Iced Tea", img: "Images/Iced_Teae.jpg" },
            { id: 821, name: "Iced Mint Tea", price: 3000, category: "drinks", subcat: "Iced Tea", img: "Images/Iced_Teae.jpg" },
            { id: 822, name: "Iced Tea", price: 3000, category: "drinks", subcat: "Iced Tea", img: "Images/Iced_Teae.jpg" }
            ]
            },
            {
            category: "Coffee",
            items: [
            { id: 901, name: "Espresso Double", price: 2500, category: "drinks", subcat: "Coffee", img: "Images/iced cafe.jpg" },
            { id: 902, name: "Cappuccino", price: 3000, category: "drinks", subcat: "Coffee", img: "Images/iced cafe.jpg" },
            { id: 903, name: "Cafe Latte", price: 3000, category: "drinks", subcat: "Coffee", img: "Images/iced cafe.jpg" },
            { id: 904, name: "Cafe Mocha", price: 3500, category: "drinks", subcat: "Coffee", img: "Images/iced cafe.jpg" },
            { id: 905, name: "Espresso Macchiato", price: 2500, category: "drinks", subcat: "Coffee", img: "Images/iced cafe.jpg" },
            { id: 906, name: "Latte Macchiato", price: 2500, category: "drinks", subcat: "Coffee", img: "Images/iced cafe.jpg" },
            { id: 907, name: "Long Black", price: 2500, category: "drinks", subcat: "Coffee", img: "Images/iced cafe.jpg" },
            { id: 908, name: "Black Coffee", price: 2500, category: "drinks", subcat: "Coffee", img: "Images/iced cafe.jpg" },
            { id: 909, name: "Americano", price: 2500, category: "drinks", subcat: "Coffee", img: "Images/iced cafe.jpg" },
            { id: 910, name: "African Coffee", price: 3000, category: "drinks", subcat: "Coffee", img: "Images/iced cafe.jpg" },
            { id: 911, name: "Espresso Tonic", price: 3500, category: "drinks", subcat: "Coffee", img: "Images/iced cafe.jpg" }
            ]
            },
            {
            category: "Cold Coffee",
            items: [
            { id: 920, name: "Frappuccino", price: 3500, category: "drinks", subcat: "Cold Coffee", desc: "Ice, espresso, ice cream/mocha/vanilla + syrup", img: "Images/frappucino.jpg" },
            { id: 921, name: "Iced Coffee Mocha", price: 3500, category: "drinks", subcat: "Cold Coffee", img: "Images/iced_latte.jpg" },
            { id: 922, name: "Iced Cappuccino", price: 3000, category: "drinks", subcat: "Cold Coffee", img: "Images/iced_cappucino.jpg" },
            { id: 923, name: "Iced Americano", price: 2500, category: "drinks", subcat: "Cold Coffee", img: "Images/iced_americano.jpg" },
            { id: 924, name: "Iced Latte", price: 3000, category: "drinks", subcat: "Cold Coffee", img: "Images/iced_latte.jpg" }
            ]
            },    {
      category: "Fresh Drinks",
      items: [
        { id: 950, name: "Milkshake", price: 5000, category: "drinks", subcat: "Fresh Drinks", desc: "Vanilla / Strawberry / Chocolate", img: "Images/milkshakes.jpg" },
        { id: 951, name: "Smoothies", price: 5000, category: "drinks", subcat: "Fresh Drinks", desc: "Mango Smoothie / Banana Berry / Coffee Paste", img: "Images/smoothie.jpg" },
        { id: 952, name: "Fresh Juice", price: 3000, category: "drinks", subcat: "Fresh Drinks", desc: "Pineapple, Passion, Tomato, Carrot, etc.", img: "Images/fresh_juice.jpg" },
        { id: 953, name: "Cocktail Juice", price: 4000, category: "drinks", subcat: "Fresh Drinks", img: "Images/cocktail_juice.jpg" },
        { id: 954, name: "Mango Juice", price: 4500, category: "drinks", subcat: "Fresh Drinks", img: "Images/mango_juice.jpg" },
        { id: 955, name: "Frozen", price: 4000, category: "drinks", subcat: "Fresh Drinks", desc: "Mint, Lemongrass, Ginger, Melon/Pineapple", img: "Images/frozen.jpg" }
      ]
    },
    {
      category: "Virgin Mojito",
      items: [
        { id: 1001, name: "Pineapple Mojito", price: 4000, category: "drinks", subcat: "Virgin Mojito", desc: "Lemon Juice, Mint, Pineapple, Sprite", img: "Images/pineapple_mojito.jpg" },
        { id: 1002, name: "Passion Mojito", price: 4000, category: "drinks", subcat: "Virgin Mojito", desc: "Lemon Juice, Mint, Passion, Sprite", img: "Images/passion_mojito.jpg" },
        { id: 1003, name: "Watermelon Mojito", price: 4000, category: "drinks", subcat: "Virgin Mojito", desc: "Lemon Juice, Mint, Melon, Sprite", img: "Images/watermelon_mojito.jpg" },
        { id: 1004, name: "Mango Mojito", price: 4000, category: "drinks", subcat: "Virgin Mojito", desc: "Lemon Juice, Mint, Mango, Sprite", img: "Images/mango_mojito.jpg" },
        { id: 1005, name: "Spiderman Mojito", price: 4500, category: "drinks", subcat: "Virgin Mojito", desc: "Signature Spidey Blend", img: "Images/spiderman_mojito.jpg", badge: "Signature" },
        { id: 1006, name: "Cotton Candy Mojito", price: 4000, category: "drinks", subcat: "Virgin Mojito", desc: "Sweet Cotton Candy & Lemon", img: "Images/cotton_candy_mojito.jpg" }
      ]
    }
  ]
};

// Flatten menu for easier searching and filtering
const allItems = [
    ...menuData.foodMenu.flatMap(cat => cat.items.map(i => ({...i, mainCat: i.category, subCatName: cat.category}))),
    ...menuData.drinkMenu.flatMap(cat => cat.items.map(i => ({...i, mainCat: i.category, subCatName: cat.category})))
];

let cart = [];
const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartTray = document.getElementById('cartTray');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');
const trayItems = document.getElementById('trayItems');
const totalPriceEl = document.getElementById('totalPrice');
const cartCountEl = document.getElementById('cartCount');

// Initial Render
renderMenu(allItems);

function renderMenu(items) {
    if (items.length === 0) {
        menuGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">No items found. Try searching for something else!</p>';
        return;
    }

    let currentSub = '';
    let html = '';

    items.forEach(item => {
        // Only show sub-headers if there is a subCatName and it changes
        if (item.subCatName && item.subCatName !== currentSub) {
            currentSub = item.subCatName;
            html += `
                <div class="subcat-header reveal">
                    <h2>${currentSub}</h2>
                </div>
            `;
        }

        html += `
            <div class="menu-card reveal">
                <div class="card-img" style="background-image: url('${item.img}')">
                    ${item.badge ? `<span class="badge">${item.badge}</span>` : ''}
                </div>
                <div class="card-content">
                    <span style="font-size:0.7rem; color:var(--spidey-red); text-transform:uppercase;">${item.subcat || item.subCatName}</span>
                    <h3>${item.name}</h3>
                    <p>${item.desc || 'Freshly prepared at Spiderman Game Center.'}</p>
                    <div class="card-footer">
                        <span class="price">${typeof item.price === 'number' ? item.price.toLocaleString() : item.price} FRW</span>
                        <button class="add-btn" onclick="addToCart(${item.id}, event)">
                            <i class="fas fa-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    menuGrid.innerHTML = html;
    
    // Initialize reveal observer and tilt after rendering
    setupScrollReveal();
    setupTiltEffect();
}

// --- Animation Engines ---

function setupScrollReveal() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function setupTiltEffect() {
    const cards = document.querySelectorAll('.menu-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });
}


// --- Sound Effects ---
const thwipSound = new Audio('https://www.myinstants.com/media/sounds/spider-man-ps4-web-shoot.mp3');
thwipSound.volume = 0.4;

function addToCart(id, event) {
    const item = allItems.find(i => i.id === id);
    const cartItem = cart.find(i => i.id === id);
    
    // Play Thwip Sound
    thwipSound.currentTime = 0;
    thwipSound.play().catch(e => console.log("Audio play blocked until user interaction."));

    // Visual Flying Feedback
    if (event) {
        createFlyingIcon(event.currentTarget, item.img);
    }

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    updateCartUI();
    
    cartToggle.style.transform = "scale(1.3) rotate(15deg)";
    setTimeout(() => cartToggle.style.transform = "scale(1) rotate(0deg)", 300);
}

function createFlyingIcon(button, imgUrl) {
    const icon = document.createElement('div');
    const btnRect = button.getBoundingClientRect();
    const cartRect = cartToggle.getBoundingClientRect();

    icon.style.position = 'fixed';
    icon.style.top = `${btnRect.top}px`;
    icon.style.left = `${btnRect.left}px`;
    icon.style.width = '40px';
    icon.style.height = '40px';
    icon.style.borderRadius = '50%';
    icon.style.backgroundImage = `url('${imgUrl}')`;
    icon.style.backgroundSize = 'cover';
    icon.style.zIndex = '2000';
    icon.style.pointerEvents = 'none';
    icon.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    icon.style.boxShadow = '0 0 15px var(--spidey-red)';

    document.body.appendChild(icon);

    // Trigger animation in next frame
    setTimeout(() => {
        icon.style.top = `${cartRect.top}px`;
        icon.style.left = `${cartRect.left}px`;
        icon.style.transform = 'scale(0.2) rotate(360deg)';
        icon.style.opacity = '0';
    }, 10);

    setTimeout(() => icon.remove(), 800);
}


function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalCount;
    
    if (cart.length === 0) {
        trayItems.innerHTML = '<p class="empty-msg">Your tray is empty.</p>';
        totalPriceEl.textContent = "0 FRW";
        return;
    }

    trayItems.innerHTML = cart.map((item, index) => `
        <div class="tray-item">
            <div class="tray-item-info">
                <strong>${item.name}</strong>
                <p style="font-size: 0.8rem; color: #888;">${typeof item.price === 'number' ? item.price.toLocaleString() : item.price} FRW</p>
            </div>
            <div class="tray-item-controls">
                <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
                <button onclick="removeFromCart(${index})" class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => {
        const priceVal = typeof item.price === 'number' ? item.price : parseInt(item.price.split('/')[0].replace(/[^\d]/g, ''));
        return sum + (priceVal * item.quantity);
    }, 0);
    totalPriceEl.textContent = `${total.toLocaleString()} FRW`;
}

function changeQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = allItems.filter(item => 
        item.name.toLowerCase().includes(term) || 
        (item.desc && item.desc.toLowerCase().includes(term)) ||
        (item.subCatName && item.subCatName.toLowerCase().includes(term))
    );
    renderMenu(filtered);
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.category;
        const filtered = cat === 'all' ? allItems : allItems.filter(i => i.mainCat === cat);
        renderMenu(filtered);
    });
});

cartToggle.addEventListener('click', () => cartTray.classList.add('open'));
closeCart.addEventListener('click', () => cartTray.classList.remove('open'));

// Hero Carousel Logic
const carouselImages = [
    "Images/p1.jpg",
    "Images/p2.jpg",
    "Images/p3.jpg",
    "Images/p5.jpg",
    "Images/p7.jpg"
];

const heroCarousel = document.getElementById('heroCarousel');
let currentSlide = 0;

function initCarousel() {
    heroCarousel.innerHTML = carouselImages.map((img, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}" 
             style="background-image: url('${img}')">
        </div>
    `).join('');

    setInterval(nextSlide, 5000);
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Initialize everything
initCarousel();
renderMenu(allItems);
