const menuData = {
    foodMenu: [
        {
            category: "Specials ",
            items: [
                { id: 101, name: "Chicken Special (Local)", price: "25,000 / 15,000", category: "food", img: "Images/chicken_special.jfif", badge: "Oven" },
                { id: 102, name: "Chicken Special (Modern)", price: "30,000 / 17,000", category: "food", img: "Images/chicken_special.jfif", badge: "Oven" },
                { id: 103, name: "Spiderman Special Chicken", price: "35,000 / 20,000", category: "food", img: "Images/spiderman_special_chicken.jfif", badge: "Oven" },
                { id: 104, name: "Beef Special", price: "30,000 / 17,000", category: "food", img: "Images/beef_special.jfif", badge: "Oven" },
                { id: 106, name: "Chicken Whole (Local)", price: "18,000 / 12,000", category: "food", img: "Images/chicken_whole.jfif", badge: "Oven" },
                { id: 107, name: "Goat Leg ", price: 20000, category: "food", img: "Images/goat_leg_oven.jfif", badge: "Oven" },
                { id: 108, name: "Goat Ribs ", price: 18000, category: "food", img: "Images/goat_ribs_oven.jfif", badge: "Oven" },
                { id: 109, name: "Goat Leg Special", price: 25000, category: "food", img: "Images/goat_leg_special.jfif", badge: "Oven" },
                { id: 110, name: "Osso Buco", price: "30,000 / 15,000", category: "food", desc: "Braised Beef Osso Buco enhanced with fresh herbs and served with house potatoes.", img: "Images/OSSO BUCO.jfif" },
                { id: 111, name: "Chairman Pork", price: 10000, category: "food", desc: "Marinated Pork. African style fried, served with Gaccumbavali and a choice accompaniment.", img: "Images/CHAIRMAN PORK.jfif" },
                { id: 112, name: "Spiderman Beef Full", price: 40000, category: "food", desc: "Marinated tomahawk steak cooked African style enhanced with lemon and caramelized onions.", img: "Images/SPIDERMAN BEEF FULL.jfif" },
                { id: 113, name: "Chicken Platter", price: 30000, category: "food", desc: "A mix chicken platter made of buffalo chicken wings, chicken thighs, chicken and chicken sausage with plantain or potatoes.", img: "Images/CHICKEN PLATTER.jfif" },
                { id: 114, name: "Ragout du Chevre", price: 15000, category: "food", desc: "Fried Goat meat served with choice of accompaniment.", img: "Images/RAGOUT DU CHEVRE.jfif" },
                { id: 115, name: "Spiderman Mix Grill", price: 60000, category: "food", desc: "House mix grill platter made of Beef, chicken, Goat, Pork and fish served with a choice of accompaniment.", img: "Images/SPIDERMAN MIX GRILL.jfif" },
                { id: 116, name: "Pork Chop", price: 10000, category: "food", desc: "Freshly prepared at Spiderman Game Center.", img: "Images/PORK CHOP.jfif" }
            ]
        },
        {
            category: "Grilled ",
            items: [
                { id: 201, name: "Spiderman Meat Lovers", price: 40000, category: "food", desc: "Premium selection of grilled meats, sausages & sides", img: "Images/meatlovers.jpg", badge: "Combo" },
                { id: 202, name: "Grilled Chicken (Modern)", price: "20,000 / 11,000", category: "food", img: "Images/grilled_chicken.jpg", badge: "Nyamachoma" },
                { id: 203, name: "Grilled Chicken (Local)", price: "18,000 / 10,000", category: "food", img: "Images/grilled_chicken.jpg", badge: "Nyamachoma" },
                { id: 205, name: "Goat Leg", price: 18000, category: "food", desc: "Served with some potato", img: "Images/grilled_goat_leg.jfif", badge: "Nyamachoma" },
                { id: 206, name: "Goat Ribs", price: 15000, category: "food", desc: "Served with some potato", img: "Images/grilled_goat_ribs.jfif", badge: "Nyamachoma" },
                { id: 207, name: "Whole Tilapia Fish", price: 20000, category: "food", img: "Images/whole_tilapia_fish.jfif", badge: "Nyamachoma" }
            ]
        },
        {
            category: "Brochettes",
            items: [
                { id: 301, name: "Fish Brochette", price: 4000, category: "food", img: "Images/brochette.jpg" },
                { id: 302, name: "Beef Brochette", price: 4000, category: "food", img: "Images/brochette.jpg" },
                { id: 303, name: "Chicken Brochette", price: 4000, category: "food", img: "Images/brochette.jpg" },
                { id: 304, name: "Zingaro Brochette", price: 3000, category: "food", img: "Images/zingaro_brochette.jpg" },
                { id: 305, name: "Liver Brochette", price: 3000, category: "food", img: "Images/brochette.jpg" },
                { id: 306, name: "Goat Brochette", price: 3000, category: "food", img: "Images/brochette.jpg" },
                { id: 307, name: "2 Min Brochette with Chips", price: 5000, category: "food", img: "Images/mini_brochette.jfif" }
            ]
        },
        {
            category: "Sizzling",
            items: [
                { id: 1101, name: "Chicken Sizzling", price: 12000, category: "food", img: "Images/Chicken Sizzling.jfif" },
                { id: 1102, name: "Beef Sizzling", price: 12000, category: "food", img: "Images/Beef Sizzling.jfif" },
                { id: 1103, name: "Mix Vegetable Sizzling", price: 8000, category: "food", img: "Images/Mix Vegetable Sizzling.jfif" },
                { id: 1104, name: "Pork Sizzling", price: 12000, category: "food", img: "Images/Pork Sizzling.jfif" }
            ]
        },
        {
            category: "Soup",
            items: [
                { id: 401, name: "Veg Soup", price: 4000, category: "kids", subcat: "Kids Menu", img: "Images/veg_soup.jfif" },
                { id: 402, name: "Chicken Soup", price: 6000, category: "kids", subcat: "Kids Menu", img: "Images/chicken_soup.jfif" },
                { id: 403, name: "Chicken Noodle Soup", price: 6000, category: "kids", subcat: "Kids Menu", img: "Images/noodles_soup.jfif" },
                { id: 404, name: "Mushroom Cream Soup", price: 6000, category: "kids", subcat: "Kids Menu", img: "Images/mushroom_cream_soup.jfif" }
            ]
        },
        {
            category: "Pizza",
            items: [
                { id: 405, name: "4 Season Pizza", price: "8,000 / 12,000", category: "kids", subcat: "Kids Menu", desc: "Mushroom, Ham, Veg & Sausage", img: "Images/pizza.jpg" },
                { id: 406, name: "Chicken Pizza", price: "8,000 / 12,000", category: "kids", subcat: "Kids Menu", desc: "Chicken, Vegetables", img: "Images/pizza.jpg" },
                { id: 407, name: "Bolognese Pizza", price: "8,000 / 10,000", category: "kids", subcat: "Kids Menu", desc: "bolognese sauce, Ham, Veg ", img: "Images/pizza.jpg" },
                { id: 408, name: "Beef Pizza", price: "10,000 / 12,000", category: "kids", subcat: "Kids Menu", desc: "Beef, Vegetables", img: "Images/pizza.jpg" },
                { id: 409, name: "Meat Lovers Pizza", price: "10,000 / 14,000", category: "kids", subcat: "Kids Menu", desc: "Beef, chicken, ham, sausage & veg", img: "Images/pizza.jpg" },
                { id: 410, name: "Peperone (Pepperoni) Pizza", price: "8,000 / 11,000", category: "kids", subcat: "Kids Menu", desc: "Sausages & Cheese", img: "Images/pizza.jpg" },
                { id: 411, name: "Hawaii Pizza", price: "8,000 / 12,000", category: "kids", subcat: "Kids Menu", desc: "Chicken, pineapple, ham, Vegetables", img: "Images/pizza.jpg" },
                { id: 412, name: "Margarita Pizza", price: "8,000 / 10,000", category: "kids", subcat: "Kids Menu", desc: "Cheese, Vegetables", img: "Images/pizza.jpg" },
                { id: 424, name: "Mexican Pizza", price: 12000, category: "kids", subcat: "Kids Menu", desc: "Made of tomato sauce, Oregano, Onion, green pepper, Minced beef, green chili.", img: "Images/MEXICAN PIZZA.jfif" }
            ]
        },
        {
            category: "Burger with Chips",
            items: [
                { id: 410, name: "Spiderman Double Burger", price: 12000, category: "kids", subcat: "Kids Menu", img: "Images/double_burger.jpg" },
                { id: 411, name: "Beef Burger", price: 6000, category: "kids", subcat: "Kids Menu", img: "Images/beef_burger.jpg" },
                { id: 412, name: "Chicken Burger", price: 8000, category: "kids", subcat: "Kids Menu", img: "Images/chicken_burger.jpg" },
                { id: 413, name: "Triple Beef Burger", price: 15000, category: "kids", subcat: "Kids Menu", img: "Images/tripple_burger.jpg" },
                { id: 423, name: "Fish Burger", price: 8000, category: "kids", subcat: "Kids Menu", img: "Images/fish_burger.jfif" }
            ]
        },
        {
            category: "Pasta",
            items: [
                { id: 414, name: "Pasta Bolognese", price: 6000, category: "kids", subcat: "Kids Menu", img: "Images/pasta.jpg" },
                { id: 415, name: "Pasta Vegetarian", price: 4000, category: "kids", subcat: "Kids Menu", img: "Images/pasta.jpg" },
                { id: 416, name: "Carbonara Pasta", price: 6000, category: "kids", subcat: "Kids Menu", img: "Images/carbonara_pasta.jfif" },
                { id: 425, name: "Pomme Napolitano", price: 10000, category: "kids", subcat: "Kids Menu", img: "Images/Pomme Napolitano.jfif" },
                { id: 426, name: "Steak and Pomme", price: 12000, category: "kids", subcat: "Kids Menu", img: "Images/Steak and Pomme.jfif" }
            ]
        },
        {
            category: "Beef Dishes",
            items: [
                { id: 1201, name: "Fillet Mignon", price: 10000, category: "food", desc: "Marinated end part of fillet pan seared with choice of accompaniment.", img: "Images/FILLET MIGNON.jfif" },
                { id: 1202, name: "Beef Mushroom Steak", price: 10000, category: "food", desc: "Marinated Beef fillet pan seared and with choice of accompaniment.", img: "Images/BEEF MUSHROOM STEAK.jfif" },
                { id: 1203, name: "Pepper Steak", price: 10000, category: "food", desc: "Beef Fillet Steak cooked in pepper sauce finished with fresh herbs.", img: "Images/PEPPER STEAK.jfif" },
                { id: 1204, name: "Beef Bourguignon", price: 10000, category: "food", desc: "Beef fillet cube cooked in Red Sauce finished with fresh herbs.", img: "Images/BEEF BOURGUIGNON.jfif" }
            ]
        },
        {
            category: "Cold Starter",
            items: [
                { id: 1301, name: "Chef Signature Salad", price: 9000, category: "food", desc: "Lettuce, tomatoes, carrots, cucumber, onions, avocado, marinated fried chicken, honey mustard dressing.", img: "Images/CHEF SIGNATURE SALAD.jfif" },
                { id: 1302, name: "Tuna and Avocado", price: 10000, category: "food", desc: "Lettuce, avocado and tuna fried fish with balsamic dressing.", img: "Images/TUNA AND AVOCADO.jfif" },
                { id: 1303, name: "Chicken and Mango Salad", price: 10000, category: "food", desc: "Chicken and mango on a bed of mix garden salad.", img: "Images/CHICKEN AND MANGO SALAD.jfif" }
            ]
        },
        {
            category: "Meat with Chips",
            items: [
                { id: 417, name: "Chicken Wings", price: 6000, category: "kids", subcat: "Kids Menu", img: "Images/chicken_wings.jfif" },
                { id: 418, name: "Chicken Lollipops", price: 7000, category: "kids", subcat: "Kids Menu", img: "Images/chicken_lolipop.jfif" },
                { id: 419, name: "Chips Liver", price: 5000, category: "kids", subcat: "Kids Menu", img: "Images/chips_liver.jfif" },
                { id: 420, name: "Meatball with Chips", price: 5000, category: "kids", subcat: "Kids Menu", img: "Images/meat_ball_with_chips.jfif" },
                { id: 421, name: "Chicken Leg", price: 10000, category: "kids", subcat: "Kids Menu", img: "Images/chicken_leg.jfif" },
                { id: 422, name: "Chicken butter garlic", price: 10000, category: "kids", subcat: "Kids Menu", img: "Images/Chicken butter garlic.jfif" }
            ]
        },
        {
            category: "Side Dishes",
            items: [
                { id: 501, name: "Chips Banana", price: 3000, category: "sides-dessert", subcat: "Side Dishes", img: "Images/chips_banana.jfif" },
                { id: 502, name: "Chips Potato", price: 3000, category: "sides-dessert", subcat: "Side Dishes", img: "Images/chips.jpg" },
                { id: 503, name: "Grilled Potato Plate", price: 2000, category: "sides-dessert", subcat: "Side Dishes", img: "Images/grilled_potato_plate.jfif" },
                { id: 504, name: "Grilled Banana Plate (4 pcs)", price: "2,000 / 1,000", category: "sides-dessert", subcat: "Side Dishes", img: "Images/grilled_banana.jfif" },
                { id: 505, name: "Chicken Dry Fried", price: 6000, category: "sides-dessert", subcat: "Side Dishes", img: "Images/chicken_dry_fries.jfif" },
                { id: 506, name: "Muzuzu Plate", price: 4000, category: "sides-dessert", subcat: "Side Dishes", img: "Images/muzuzu_plate.jfif" },
                { id: 507, name: "Veg. Rice", price: 4000, category: "sides-dessert", subcat: "Side Dishes", img: "Images/veg_rice.jfif" },
                { id: 508, name: "Plain Rice", price: 3000, category: "sides-dessert", subcat: "Side Dishes", img: "Images/plain_rice.jfif" },
                { id: 509, name: "Kawunga", price: 2000, category: "sides-dessert", subcat: "Side Dishes", img: "Images/kawunga.jfif" },
                { id: 510, name: "Cheese Potatoes", price: 5000, category: "sides-dessert", subcat: "Side Dishes", img: "Images/Cheese potatoes.jfif" }
            ]
        },
        {
            category: "Dessert",
            items: [
                { id: 601, name: "Fruit Cut", price: 6000, category: "sides-dessert", subcat: "Sides & Dessert", img: "Images/fruit_cut.jfif" },
                { id: 602, name: "Macedoine", price: 6000, category: "sides-dessert", subcat: "Sides & Dessert", img: "Images/macedoine.jfif" },
                { id: 603, name: "Ice Cream", price: 1500, category: "sides-dessert", subcat: "Sides & Dessert", img: "Images/ice_cream.jfif" },
                { id: 604, name: "Pop Corn", price: 1000, category: "sides-dessert", subcat: "Sides & Dessert", img: "Images/pop_corn.jfif" },
                { id: 605, name: "Cotton Candy", price: 1500, category: "sides-dessert", subcat: "Sides & Dessert", img: "Images/cotton_candy.jfif" }
            ]
        }
    ],
    drinkMenu: [
        {
            category: "Fresh Drinks",
            items: [
                { id: 950, name: "Milkshake", price: 5500, category: "drinks", subcat: "Fresh Drinks", desc: "Vanilla / Strawberry / Chocolate", img: "Images/milkshakes.jpg" },
                { id: 951, name: "Smoothies", price: 6000, category: "drinks", subcat: "Fresh Drinks", desc: "Mango Smoothie / Banana Berry / Coffee Paste", img: "Images/smoothie.jpg" },
                { id: 952, name: "Fresh Juice", price: 4000, category: "drinks", subcat: "Fresh Drinks", desc: "Pineapple, Passion, Tomato, Carrot, etc.", img: "Images/fresh_juice.jpg" },
                { id: 953, name: "Cocktail Juice(Mocktail)", price: 5000, category: "drinks", subcat: "Fresh Drinks", img: "Images/cocktail_juice.jpg" },
                { id: 954, name: "Mango Juice", price: 5000, category: "drinks", subcat: "Fresh Drinks", img: "Images/mango_juice.jpg" },
                { id: 955, name: "Frozen Juice", price: 5000, category: "drinks", subcat: "Fresh Drinks", desc: "Mint, Lemongrass, Ginger, Melon/Pineapple", img: "Images/frozen.jpg" },
                { id: 1007, name: "Detox Juice", price: 6000, category: "drinks", subcat: "Fresh Drinks", img: "Images/detox_juice.jfif" },
                { id: 1008, name: "Carrot Juice", price: 4000, category: "drinks", subcat: "Fresh Drinks", img: "Images/Carrot_Juice.jfif" }
            ]
        },
        {
            category: "Virgin Mojito",
            items: [
                { id: 1001, name: "Pineapple Mojito", price: 5000, category: "drinks", subcat: "Virgin Mojito", desc: "Lemon Juice, Mint, Pineapple, Sprite", img: "Images/pineapple_mojito.jpg" },
                { id: 1002, name: "Passion Mojito", price: 5000, category: "drinks", subcat: "Virgin Mojito", desc: "Lemon Juice, Mint, Passion, Sprite", img: "Images/passion_mojito.jpg" },
                { id: 1003, name: "Watermelon Mojito", price: 4000, category: "drinks", subcat: "Virgin Mojito", desc: "Lemon Juice, Mint, Melon, Sprite", img: "Images/watermelon_mojito.jpg" },
                { id: 1004, name: "Mango Mojito", price: 5000, category: "drinks", subcat: "Virgin Mojito", desc: "Lemon Juice, Mint, Mango, Sprite", img: "Images/mango_mojito.jpg" },
                { id: 1005, name: "Spiderman Mojito", price: 6000, category: "drinks", subcat: "Virgin Mojito", desc: "Signature Spidey Blend", img: "Images/spiderman_mojito.jpg" },
                { id: 1006, name: "Cotton Candy Mojito", price: 4500, category: "drinks", subcat: "Virgin Mojito", desc: "Sweet Cotton Candy & Lemon", img: "Images/cotton_candy_mojito.jpg" }
            ]
        },
        {
            category: "Hot/Cold Tea",
            items: [
                { id: 809, name: "African Tea with Sugar", price: 3500, category: "drinks", subcat: "Hot Tea", img: "Images/african_tea.jpg" },
                { id: 814, name: "African Tea with Honey", price: 4000, category: "drinks", subcat: "Hot Tea", img: "Images/african_tea.jpg" },
                { id: 805, name: "Spice Tea", price: 4000, category: "drinks", subcat: "Hot Tea", img: "Images/spice_tea.jpg" },
                { id: 810, name: "Hot Chocolate", price: 4000, category: "drinks", subcat: "Hot Tea", img: "Images/hot_chocolate.jpg" },
                { id: 815, name: "Hot / Cold Milk", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/hot_milk.jfif" },
                { id: 803, name: "Ginger Tea", price: 3500, category: "drinks", subcat: "Hot Tea", img: "Images/ginger_tea.jpg" },
                { id: 801, name: "Lemon Tea", price: 3500, category: "drinks", subcat: "Hot Tea", img: "Images/lemon_tea.jfif" },
                { id: 802, name: "Black Tea", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/black_tea.jpg" },
                { id: 804, name: "Green Tea", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/green_tea.jpg" },
                { id: 806, name: "Mint Tea", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/green_tea.jpg" },
                { id: 807, name: "Sugarcane Tea", price: 3500, category: "drinks", subcat: "Hot Tea", img: "Images/sugarcane_tea.jfif" },
                { id: 808, name: "Russian Tea", price: 3500, category: "drinks", subcat: "Hot Tea", img: "Images/black_tea.jpg" },
                { id: 811, name: "Hibiscus Tea", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/hibiscus_tea.jfif" },
                { id: 812, name: "Cloves Tea", price: 4000, category: "drinks", subcat: "Hot Tea", img: "Images/cloves_tea.jfif" },
                { id: 813, name: "Cinnamon Tea", price: 3000, category: "drinks", subcat: "Hot Tea", img: "Images/Cinnamon_Tea.jfif" }
            ]
        },
        {
            category: "Coffee (Hot)",
            items: [
                { id: 901, name: "Espresso Double", price: 3000, category: "drinks", subcat: "Coffee", img: "Images/espresso_double.jfif" },
                { id: 902, name: "Cappuccino", price: 3500, category: "drinks", subcat: "Coffee", img: "Images/cappuccino.jfif" },
                { id: 904, name: "Cafe Mocha", price: 4000, category: "drinks", subcat: "Coffee", img: "Images/cafe_mocha.jfif" },
                { id: 905, name: "Espresso Macchiato", price: 3000, category: "drinks", subcat: "Coffee", img: "Images/espresso_macchiato.jfif" },
                { id: 906, name: "Latte Macchiato", price: 3000, category: "drinks", subcat: "Coffee", img: "Images/Latte_Macchiato.jfif" },
                { id: 907, name: "Long Black", price: 3000, category: "drinks", subcat: "Coffee", img: "Images/long_black.jfif" },
                { id: 908, name: "Black Coffee", price: 3000, category: "drinks", subcat: "Coffee", img: "Images/black_coffee.jfif" },
                { id: 909, name: "Americano", price: 3000, category: "drinks", subcat: "Coffee", img: "Images/americano.jfif" },
                { id: 910, name: "African Coffee", price: 3500, category: "drinks", subcat: "Coffee", img: "Images/african_coffee.jfif" },
                { id: 911, name: "Espresso Tonic", price: 4000, category: "drinks", subcat: "Coffee", img: "Images/Espresso_Tonic.jfif" },
                { id: 903, name: "Cafe Latte", price: 3000, category: "drinks", subcat: "Coffee", img: "Images/cafe_latte.jfif" }
            ]
        },
        {
            category: "Cold Coffee",
            items: [
                { id: 920, name: "Frappuccino", price: 4500, category: "drinks", subcat: "Cold Coffee", desc: "Ice, espresso, ice cream/mocha/vanilla + syrup", img: "Images/frappucino.jpg" },
                { id: 921, name: "Iced Coffee Mocha", price: 4000, category: "drinks", subcat: "Cold Coffee", img: "Images/iced_latte.jpg" },
                { id: 922, name: "Iced Coffee Cappuccino", price: 4000, category: "drinks", subcat: "Cold Coffee", img: "Images/iced_cappucino.jpg" },
                { id: 923, name: "Iced Coffee Americano", price: 3000, category: "drinks", subcat: "Cold Coffee", img: "Images/iced_americano.jpg" },
                { id: 924, name: "Iced Coffee Latte", price: 4000, category: "drinks", subcat: "Cold Coffee", img: "Images/iced_latte.jpg" }
            ]
        },
        {
            category: "Soft Drinks",
            items: [
                { id: 701, name: "Water (Small)", price: 1500, category: "drinks", subcat: "Soft Drinks", img: "Images/water.jpg" },
                { id: 702, name: "Fanta (Small)", price: 1500, category: "drinks", subcat: "Soft Drinks", img: "Images/fanta.jpg" },
                { id: 703, name: "Panache", price: 2000, category: "drinks", subcat: "Soft Drinks", img: "Images/panache.jpg" },
                { id: 704, name: "Redbull", price: 4000, category: "drinks", subcat: "Soft Drinks", img: "Images/redbull.jpg" },
                { id: 705, name: "Bavaria Non Alc", price: 4000, category: "drinks", subcat: "Soft Drinks", img: "Images/Bavaria.jpg" }
            ]
        }
    ]
};

// Flatten menu for easier searching and filtering
const allItems = [
    ...menuData.foodMenu.flatMap(cat => cat.items.map(i => ({ ...i, mainCat: i.category, subCatName: cat.category }))),
    ...menuData.drinkMenu.flatMap(cat => cat.items.map(i => ({ ...i, mainCat: i.category, subCatName: cat.category })))
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

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
            console.log('Service Worker registration failed:', error);
        });
}
