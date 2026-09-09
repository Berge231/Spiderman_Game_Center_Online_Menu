const breakfastItems = [
    {
        id: 9001,
        name: "Scrambled Eggs",
        category: "eggs",
        price: 15000,
        rating: 4.9,
        reviews: 128,
        prepTime: "10-15 min",
        desc: "Fluffy farm-fresh eggs scrambled or folded into a classic omelette, stuffed with rich melted cheddar cheese & fresh garden herbs.",
        img: "Images/Scrambled eggs.jpg",
        badge: "15k Menu Item",
        options: {
            type: ["Scrambled Eggs with Cheese", "Omelette with Cheese"]
        }
    },
    {
        id: 9002,
        name: "Sausage",
        category: "savory",
        price: 15000,
        rating: 4.8,
        reviews: 95,
        prepTime: "8-12 min",
        desc: "Breakfast sausages grilled to golden perfection, served hot.",
        img: "Images/Sausage.jpg",
        badge: "15k Menu Item",
        options: {
            type: ["Beef Sausages", "Pork Sausages", "Chicken Sausages"]
        }
    },
    {
        id: 9003,
        name: "Cheese Potatoes",
        category: "savory",
        price: 15000,
        rating: 4.9,
        reviews: 110,
        prepTime: "12-15 min",
        desc: "Golden pan-roasted diced potato cubes smothered in melted mozzarella & warm savory cheese sauce.",
        img: "Images/Cheese potatoes.jpg",
        badge: "15k Menu Item",
        options: {
            type: ["Pan Roasted Cheese Potatoes", "Crispy Fried Cheese Cubes"]
        }
    },
    {
        id: 9004,
        name: "French Toast",
        category: "bakery",
        price: 15000,
        rating: 4.7,
        reviews: 84,
        prepTime: "10 min",
        desc: "Golden brown brioche slice soaked in sweet vanilla custard, dusted with powdered sugar, cinnamon & pure maple syrup.",
        img: "Images/French toast.jpg",
        badge: "15k Menu Item",
        options: {
            type: ["Classic Maple Syrup Toast", "Honey & Butter Toast"]
        }
    },
    {
        id: 9005,
        name: "Vegetarian Spaghetti",
        category: "savory",
        price: 15000,
        rating: 4.6,
        reviews: 72,
        prepTime: "12-15 min",
        desc: "Light morning al dente pasta tossed with fresh cherry tomatoes, bell peppers, olive oil & aromatic basil.",
        img: "Images/Vegetarian spaghetti.jpg",
        badge: "15k Menu Item",
        options: {
            type: ["Olive Oil & Garlic Veg Spaghetti", "Napolitano Tomato Veg Spaghetti"]
        }
    },
    {
        id: 9006,
        name: "Crepes",
        category: "bakery",
        price: 15000,
        rating: 4.8,
        reviews: 140,
        prepTime: "8 min",
        desc: "Choose between ultra-thin Parisian crepes with chocolate spread, or fresh soft chocolate/vanilla breakfast cupcakes.",
        img: "Images/Crepes.jpg",
        badge: "15k Menu Item",
        options: {
            type: ["Fresh Parisian Crepes", "Chocolate Cupcakes", "Vanilla Cupcakes"]
        }
    },
    {
        id: 9007,
        name: "Mixed Fruits",
        category: "fruits",
        price: 15000,
        rating: 4.9,
        reviews: 160,
        prepTime: "5 min",
        desc: "Vibrant bowl of freshly cut Rwandan tropical fruits: watermelon, sweet pineapple, ripe mango, and passion fruit.",
        img: "Images/Mixed fruits.jpg",
        badge: "15k Menu Item",
        options: {
            type: ["Fresh Sliced Tropical Fruits"]
        }
    },
    {
        id: 9008,
        name: "Coffee",
        category: "drinks",
        price: 15000,
        rating: 4.9,
        reviews: 210,
        prepTime: "5 min",
        desc: "Rich brewed premium Rwandan Bourbon coffee or authentic spiced African milk tea brewed with cardamom & ginger.",
        img: "Images/african_tea.jpg",
        badge: "15k Menu Item",
        options: {
            type: ["African Spiced Milk Tea", "Fresh Brewed Rwandan Coffee", "Cappuccino"]
        }
    },
    {
        id: 9009,
        name: "Fresh Juice",
        category: "drinks",
        price: 15000,
        rating: 4.8,
        reviews: 185,
        prepTime: "5 min",
        desc: "100% cold-pressed natural juice packed with vitamins. Made to order with no added water or preservatives.",
        img: "Images/fresh_juice.jpg",
        badge: "15k Menu Item",
        options: {
            type: ["Fresh Orange Juice", "Passion Fruit Juice", "Pineapple Juice", "Carrot Juice"]
        }
    },
    {
        id: 9010,
        name: "Omelette with Cheese",
        category: "eggs",
        price: 15000,
        rating: 4.8,
        reviews: 110,
        prepTime: "10-15 min",
        desc: "Fluffy omelette packed with melted cheddar cheese, perfect for breakfast lovers.",
        img: "Images/Omelette with Cheese.jpg",
        badge: "15k Menu Item"
    },
    {
        id: 9011,
        name: "Cupcakes",
        category: "bakery",
        price: 15000,
        rating: 4.7,
        reviews: 95,
        prepTime: "8 min",
        desc: "Soft vanilla or chocolate cupcakes topped with creamy frosting.",
        img: "Images/Cupcakes.jpg",
        badge: "15k Menu Item"
    },
    {
        id: 9012,
        name: "Tea",
        category: "drinks",
        price: 15000,
        rating: 4.9,
        reviews: 120,
        prepTime: "5 min",
        desc: "Authentic spiced African milk tea brewed with cardamom & ginger.",
        img: "Images/african_tea.jpg",
        badge: "15k Menu Item"
    }
];

// Shared Cart Helper (localStorage)
function getSharedCart() {
    try {
        const stored = localStorage.getItem('sgc_cart');
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function saveSharedCart(cartArray) {
    try {
        localStorage.setItem('sgc_cart', JSON.stringify(cartArray));
    } catch (e) {
        console.error("Cart save error:", e);
    }
}

let cart = getSharedCart();
let selectedItemForModal = null;
let currentModalOptions = {};
let currentModalQty = 1;

// Audio setup
const thwipSound = new Audio('https://www.myinstants.com/media/sounds/spider-man-ps4-web-shoot.mp3');
thwipSound.volume = 0.4;

const promoSlides = [
    { title: "Scrambled Eggs / Omelette", img: "Images/Scrambled eggs.jpg" },
    { title: "Grilled Sausages", img: "Images/Sausage.jpg" },
    { title: "Cheese Potatoes", img: "Images/Cheese potatoes.jpg" },
    { title: "Golden French Toast", img: "Images/French toast.jpg" },
    { title: "Vegetarian Spaghetti", img: "Images/Vegetarian spaghetti.jpg" },
    { title: "Crepes / Cupcakes", img: "Images/Crepes.jpg" },
    { title: "Fresh Mixed Fruits", img: "Images/Mixed fruits.jpg" },
    { title: "Rwandan Coffee / Tea", img: "Images/african_tea.jpg" },
    { title: "Fresh Cold Juice", img: "Images/fresh_juice.jpg" }
];

let currentSlideIdx = 0;

function initPromoSlideshow() {
    const container = document.getElementById('promoSlideshow');
    if (!container) return;

    container.innerHTML = promoSlides.map((slide, idx) => `
        <div class="slide-item ${idx === 0 ? 'active' : ''}" style="background-image: url('${slide.img}')">
            <div class="slide-caption">${slide.title}</div>
        </div>
    `).join('');

    setInterval(() => {
        const slides = container.querySelectorAll('.slide-item');
        if (slides.length === 0) return;
        slides[currentSlideIdx].classList.remove('active');
        currentSlideIdx = (currentSlideIdx + 1) % slides.length;
        slides[currentSlideIdx].classList.add('active');
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    initPromoSlideshow();
    renderBreakfastMenu(breakfastItems);
    updateCartBadge();
    setupCategoryFilters();
    setupSearch();
    setupModalListeners();
});

function renderBreakfastMenu(items) {
    const grid = document.getElementById('foodGrid');
    if (!grid) return;

    if (items.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
            <i class="fas fa-utensils" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.5;"></i>
            <p>No breakfast items match your search.</p>
        </div>`;
        return;
    }

    grid.innerHTML = items.map(item => `
        <div class="glass-card" onclick="openCustomizationModal(${item.id})">
            <div class="card-top">
                <img src="${item.img}" alt="${item.name}" class="card-img" onerror="this.src='Images/p1.jpg'">
                ${item.badge ? `<span class="card-tag">${item.badge}</span>` : ''}
                <button class="fav-btn" onclick="event.stopPropagation(); toggleFavorite(this)">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="card-info">
                <div class="rating-bar">
                    <i class="fas fa-star"></i>
                    <strong>${item.rating}</strong>
                    <span>• ${item.prepTime}</span>
                </div>
                <h3 class="card-title">${item.name}</h3>
                <p class="card-desc">${item.desc}</p>
                <div class="card-bottom">
                    <span style="font-size: 0.82rem; color: #a0a5ba; font-weight: 600;"><i class="fas fa-check-circle" style="color: #ff6b00;"></i> Served in 15k Menu</span>
                    <button class="card-action-btn" onclick="event.stopPropagation(); openCustomizationModal(${item.id})">
                        <i class="fas fa-sliders-h"></i> Select
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function setupCategoryFilters() {
    const pills = document.querySelectorAll('.cat-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const cat = pill.dataset.category;
            if (cat === 'all') {
                renderBreakfastMenu(breakfastItems);
            } else {
                const filtered = breakfastItems.filter(item => item.category === cat);
                renderBreakfastMenu(filtered);
            }
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('breakfastSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();
        const filtered = breakfastItems.filter(i =>
            i.name.toLowerCase().includes(val) ||
            i.desc.toLowerCase().includes(val)
        );
        renderBreakfastMenu(filtered);
    });
}

function toggleFavorite(btn) {
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('active')) {
        icon.className = 'fas fa-heart';
        icon.style.color = '#e62429';
    } else {
        icon.className = 'far fa-heart';
        icon.style.color = 'white';
    }
}

// Modal Logic
function openCustomizationModal(itemId) {
    const item = breakfastItems.find(i => i.id === itemId);
    if (!item) return;

    selectedItemForModal = item;
    currentModalQty = 1;
    currentModalOptions = {
        selectedType: item.options && item.options.type ? item.options.type[0] : ''
    };

    const modalOverlay = document.getElementById('itemModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalBadge = document.getElementById('modalBadge');
    const modalPrice = document.getElementById('modalPrice');
    const modalOptionsContainer = document.getElementById('modalOptionsContainer');
    const qtyVal = document.getElementById('modalQtyVal');

    modalImage.src = item.img;
    modalTitle.textContent = item.name;
    modalDesc.textContent = item.desc;
    modalBadge.textContent = "15,000 FRW / Person Menu";
    if (modalPrice) modalPrice.textContent = "15,000 FRW";
    qtyVal.textContent = '1 Person';

    let optionsHTML = `
        <div class="customization-section" style="background: rgba(255, 107, 0, 0.1); border: 1px solid rgba(255, 107, 0, 0.3); padding: 12px; border-radius: 16px; margin-bottom: 18px;">
            <div class="custom-title" style="color: #ff9d00; margin-bottom: 6px; font-size: 0.85rem;">
                <i class="fas fa-crown"></i> Complete 9-Item Breakfast Spread Included (15k FRW / Person):
            </div>
            <p style="font-size: 0.78rem; color: #d0d5e5; line-height: 1.4;">
                1. Scrambled eggs/Omelette with cheese • 2. Sausage • 3. Cheese potatoes • 4. French toast • 5. Vegetarian spaghetti • 6. Crepes/cupcakes • 7. Mixed fruits • 8. Coffee/Tea • 9. Fresh juice
            </p>
        </div>
    `;

    if (item.options && item.options.type) {
        optionsHTML += `
            <div class="customization-section">
                <div class="custom-title">Select Style / Flavor Preference</div>
                <div class="pill-group">
                    ${item.options.type.map((t, idx) => `
                        <div class="option-pill ${idx === 0 ? 'active' : ''}" onclick="selectModalType(this, '${t}')">
                            ${t}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    modalOptionsContainer.innerHTML = optionsHTML;
    updateModalTotalPrice();

    modalOverlay.classList.add('open');
}

function selectModalType(element, typeName) {
    const pills = element.parentElement.querySelectorAll('.option-pill');
    pills.forEach(p => p.classList.remove('active'));
    element.classList.add('active');

    currentModalOptions.selectedType = typeName;
    updateModalTotalPrice();
}

function changeModalQty(delta) {
    currentModalQty += delta;
    if (currentModalQty < 1) currentModalQty = 1;
    document.getElementById('modalQtyVal').textContent = `${currentModalQty} ${currentModalQty === 1 ? 'Person' : 'Persons'}`;
    updateModalTotalPrice();
}

function updateModalTotalPrice() {
    if (!selectedItemForModal) return;
    const basePrice = 15000;
    const itemTotal = basePrice * currentModalQty;

    const modalPrice = document.getElementById('modalPrice');
    if (modalPrice) modalPrice.textContent = `${itemTotal.toLocaleString()} FRW`;

    const addBtnText = document.getElementById('modalAddTotalText');
    if (addBtnText) addBtnText.textContent = `Order Full Breakfast • ${itemTotal.toLocaleString()} FRW`;
}

function setupModalListeners() {
    const modalOverlay = document.getElementById('itemModal');
    const closeBtn = document.getElementById('closeModalBtn');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('open');
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('open');
            }
        });
    }
}

function submitModalAddToCart(event) {
    if (!selectedItemForModal) return;

    // Play Thwip Sound
    thwipSound.currentTime = 0;
    thwipSound.play().catch(e => console.log("Audio play allowed on user click."));

    // Flying icon animation
    createFlyingIcon(event.currentTarget, selectedItemForModal.img);

    const unitPrice = 15000;
    const prefStr = currentModalOptions.selectedType || '';
    const packageName = "Full Spiderman Breakfast Package (15,000 FRW / Person)";

    cart.push({
        id: selectedItemForModal.id,
        isBreakfastItem: true,
        name: selectedItemForModal.name,
        price: unitPrice,
        img: selectedItemForModal.img,
        quantity: currentModalQty,
        notes: prefStr ? [prefStr] : []
    });

    saveSharedCart(cart);
    updateCartBadge();
    renderCartTray();

    // Close modal
    document.getElementById('itemModal').classList.remove('open');
}

function updateCartBadge() {
    cart = getSharedCart();
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cartBadgeCount');
    if (badge) badge.textContent = totalCount;
}

function renderCartTray() {
    cart = getSharedCart();
    const trayItems = document.getElementById('trayItems');
    const totalPriceEl = document.getElementById('totalPrice');
    const cartCountEl = document.getElementById('cartBadgeCount');

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountEl) cartCountEl.textContent = totalCount;

    if (!trayItems || !totalPriceEl) return;

    if (cart.length === 0) {
        trayItems.innerHTML = '<p class="empty-msg" style="text-align:center; color: var(--text-muted); margin-top: 40px;">Your tray is empty.</p>';
        totalPriceEl.textContent = "0 FRW";
        return;
    }

    trayItems.innerHTML = cart.map((item, index) => {
        const isPackage = item.id === 9000 || item.isBreakfastPackage;
        const priceVal = typeof item.price === 'number' ? item.price : parseInt(String(item.price).replace(/[^\d]/g, ''));
        const qtyLabel = isPackage
            ? `${item.quantity} ${item.quantity === 1 ? 'Person' : 'Persons'}`
            : `${item.quantity}`;

        return `
            <div class="tray-item">
                <div class="tray-item-info">
                    <strong>${item.name}</strong>
                    <p style="color: #ff6b00; font-weight: bold; font-size: 0.88rem;">${priceVal.toLocaleString()} FRW ${isPackage ? '/ Person' : ''}</p>
                    ${item.notes && item.notes.length > 0 ? `<div style="font-size:0.75rem; color: #a0a5ba; margin-top: 4px;">Preferences: ${item.notes.join(', ')}</div>` : ''}
                </div>
                <div class="tray-item-controls">
                    <button class="qty-btn" onclick="changeTrayQty(${index}, -1)">-</button>
                    <span class="qty-val" style="font-size: 0.8rem; padding: 0 4px; white-space: nowrap;">${qtyLabel}</span>
                    <button class="qty-btn" onclick="changeTrayQty(${index}, 1)">+</button>
                    <button onclick="removeTrayItem(${index})" class="delete-btn" title="Remove">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    const total = cart.reduce((sum, item) => {
        const p = typeof item.price === 'number' ? item.price : parseInt(String(item.price).replace(/[^\d]/g, ''));
        return sum + (p * item.quantity);
    }, 0);

    totalPriceEl.textContent = `${total.toLocaleString()} FRW`;
}

function changeTrayQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveSharedCart(cart);
    renderCartTray();
}

function removeTrayItem(index) {
    cart.splice(index, 1);
    saveSharedCart(cart);
    renderCartTray();
}

function openCartTray() {
    renderCartTray();
    const tray = document.getElementById('cartTray');
    if (tray) tray.classList.add('open');
}

function closeCartTray() {
    const tray = document.getElementById('cartTray');
    if (tray) tray.classList.remove('open');
}

function createFlyingIcon(button, imgUrl) {
    const icon = document.createElement('div');
    const btnRect = button.getBoundingClientRect();
    const cartTarget = document.getElementById('cartBadgeCount') || button;
    const cartRect = cartTarget.getBoundingClientRect();

    icon.style.position = 'fixed';
    icon.style.top = `${btnRect.top}px`;
    icon.style.left = `${btnRect.left}px`;
    icon.style.width = '45px';
    icon.style.height = '45px';
    icon.style.borderRadius = '50%';
    icon.style.backgroundImage = `url('${imgUrl}')`;
    icon.style.backgroundSize = 'cover';
    icon.style.backgroundPosition = 'center';
    icon.style.zIndex = '3000';
    icon.style.pointerEvents = 'none';
    icon.style.boxShadow = '0 0 20px #ff6b00';
    icon.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    document.body.appendChild(icon);

    setTimeout(() => {
        icon.style.top = `${cartRect.top}px`;
        icon.style.left = `${cartRect.left}px`;
        icon.style.transform = 'scale(0.2) rotate(360deg)';
        icon.style.opacity = '0';
    }, 10);

    setTimeout(() => icon.remove(), 800);
}
