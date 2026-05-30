const CACHE_NAME = 'spiderman-menu-v2';
const STATIC_CACHE = 'spiderman-static-v1';
const IMAGE_CACHE = 'spiderman-images-v1';
const EXTERNAL_CACHE = 'spiderman-external-v1';

const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './Images/sgc_logo.png',
  './Images/offline-fallback.svg'
];

const productImages = [
  './Images/african_coffee.jfif',
  './Images/african_tea.jpg',
  './Images/americano.jfif',
  './Images/Bavaria.jpg',
  './Images/BEEF BOURGUIGNON.jfif',
  './Images/BEEF MUSHROOM STEAK.jfif',
  './Images/beef_burger.jpg',
  './Images/Beef Sizzling.jfif',
  './Images/beef_special.jfif',
  './Images/black_coffee.jfif',
  './Images/black_tea.jpg',
  './Images/brochette.jpg',
  './Images/cafe_latte.jfif',
  './Images/cafe_mocha.jfif',
  './Images/cappuccino.jfif',
  './Images/carbonara_pasta.jfif',
  './Images/Carrot_Juice.jfif',
  './Images/CHAIRMAN PORK.jfif',
  './Images/Cheese potatoes.jfif',
  './Images/CHEF SIGNATURE SALAD.jfif',
  './Images/CHICKEN AND MANGO SALAD.jfif',
  './Images/Chicken butter garlic.jfif',
  './Images/chicken_burger.jpg',
  './Images/chicken_dry_fries.jfif',
  './Images/chicken_leg.jfif',
  './Images/chicken_lolipop.jfif',
  './Images/CHICKEN PLATTER.jfif',
  './Images/Chicken Sizzling.jfif',
  './Images/chicken_soup.jfif',
  './Images/chicken_special.jfif',
  './Images/chicken_whole.jfif',
  './Images/chicken_wings.jfif',
  './Images/chicken.jpg',
  './Images/chips_banana.jfif',
  './Images/chips_liver.jfif',
  './Images/chips.jpg',
  './Images/Cinnamon_Tea.jfif',
  './Images/cloves_tea.jfif',
  './Images/cocktail_juice.jpg',
  './Images/cotton_candy_mojito.jpg',
  './Images/cotton_candy.jfif',
  './Images/detox_juice.jfif',
  './Images/double_burger.jpg',
  './Images/download (4).jpg',
  './Images/espresso_double.jfif',
  './Images/espresso_macchiato.jfif',
  './Images/Espresso_Tonic.jfif',
  './Images/fanta.jpg',
  './Images/FILLET MIGNON.jfif',
  './Images/fish_burger.jfif',
  './Images/frappucino.jpg',
  './Images/fresh_juice.jpg',
  './Images/frozen.jpg',
  './Images/fruit_cut.jfif',
  './Images/ginger_tea.jpg',
  './Images/goat_leg_oven.jfif',
  './Images/goat_ribs_oven.jfif',
  './Images/green_tea.jpg',
  './Images/grilled_banana.jfif',
  './Images/grilled_chicken.jpg',
  './Images/grilled_goat_leg.jfif',
  './Images/grilled_goat_ribs.jfif',
  './Images/grilled_potato_plate.jfif',
  './Images/grilled_potato.jfif',
  './Images/hibiscus_tea.jfif',
  './Images/hot_chocolate.jpg',
  './Images/hot_milk.jfif',
  './Images/ice_cream.jfif',
  './Images/iced cafe.jpg',
  './Images/iced_americano.jpg',
  './Images/iced_cappucino.jpg',
  './Images/iced_latte.jpg',
  './Images/Iced_Teae.jpg',
  './Images/kawunga.jfif',
  './Images/Latte_Macchiato.jfif',
  './Images/lemon_tea.jfif',
  './Images/long_black.jfif',
  './Images/macedoine.jfif',
  './Images/mango_juice.jpg',
  './Images/mango_mojito.jpg',
  './Images/mangojuice.jpg',
  './Images/meat_ball_with_chips.jfif',
  './Images/meatlovers.jpg',
  './Images/MEXICAN PIZZA.jfif',
  './Images/milkshakes.jpg',
  './Images/mini_brochette.jfif',
  './Images/Mix Vegetable Sizzling.jfif',
  './Images/mushroom_cream_soup.jfif',
  './Images/muzuzu_plate.jfif',
  './Images/noodles_soup.jfif',
  './Images/OSSO BUCO.jfif',
  './Images/p1.jpg',
  './Images/p2.jpg',
  './Images/p3.jpg',
  './Images/p5.jpg',
  './Images/p6.jpg',
  './Images/p7.jpg',
  './Images/panache.jpg',
  './Images/passion_mojito.jpg',
  './Images/pasta.jpg',
  './Images/PEPPER STEAK.jfif',
  './Images/pineapple_mojito.jpg',
  './Images/pizza.jpg',
  './Images/plain_rice.jfif',
  './Images/Pomme Napolitano.jfif',
  './Images/pop_corn.jfif',
  './Images/PORK CHOP.jfif',
  './Images/Pork Sizzling.jfif',
  './Images/RAGOUT DU CHEVRE.jfif',
  './Images/redbull.jpg',
  './Images/sgc_logo1.png',
  './Images/sgc_logo2.png',
  './Images/smoothie.jpg',
  './Images/spice_tea.jpg',
  './Images/SPIDERMAN BEEF FULL.jfif',
  './Images/spiderman_mojito.jpg',
  './Images/SPIDERMAN MIX GRILL.jfif',
  './Images/spiderman_special_chicken.jfif',
  './Images/Steak ang Pomme.jfif',
  './Images/sugarcane_tea.jfif',
  './Images/tripple_burger.jpg',
  './Images/TUNA AND AVOCADO.jfif',
  './Images/veg_rice.jfif',
  './Images/veg_soup.jfif',
  './Images/water.jpg',
  './Images/watermelon_mojito.jpg',
  './Images/whole_tilapia_fish.jfif',
  './Images/zingaro_brochette.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(urlsToCache)),
      caches.open(IMAGE_CACHE).then(cache => cache.addAll(productImages))
    ])
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Handle local image requests
  if (event.request.destination === 'image' && url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request).then(fetchResponse => {
          return caches.open(IMAGE_CACHE).then(cache => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        }).catch(() => {
          // If both cache and network fail, return the fallback image
          return caches.match('./Images/offline-fallback.svg');
        });
      })
    );
    return;
  }

  // Handle external resources (Google Fonts, Font Awesome)
  if (url.origin.includes('fonts.googleapis.com') || 
      url.origin.includes('fonts.gstatic.com') || 
      url.origin.includes('cdnjs.cloudflare.com')) {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request).then(fetchResponse => {
          return caches.open(EXTERNAL_CACHE).then(cache => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
    return;
  }

  // Default strategy: Cache first, then network
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  const cacheAllowlist = [STATIC_CACHE, IMAGE_CACHE, EXTERNAL_CACHE];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheAllowlist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});