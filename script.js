// Data thực đơn cà phê chất lượng cao
const PRODUCTS = [
  {
    id: 1,
    name: "Cà Phê Muối Di Sản",
    category: "traditional",
    price: 35000,
    originalPrice: 42000,
    rating: 4.9,
    reviews: 248,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    description: "Sự kết hợp hoàn hảo giữa vị đắng đậm của Robusta Đắk Lắk và lớp kem mặn béo ngậy chuẩn vị Huế truyền thống.",
    tags: ["Đậm đà", "Béo ngậy", "Đặc sản"]
  },
  {
    id: 2,
    name: "Bạc Xỉu Kem Trứng 3 Tầng",
    category: "traditional",
    price: 39000,
    originalPrice: 45000,
    rating: 4.8,
    reviews: 185,
    badge: "Hot Trend",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
    description: "Hương vị ngọt dịu của sữa đặc kết hợp cùng chút cà phê phin nguyên chất và lớp bọt trứng đánh bông mịn như mây.",
    tags: ["Ngọt dịu", "Dễ uống", "Thơm ngậy"]
  },
  {
    id: 3,
    name: "Cà Phê Đen Đá Buôn Ma Thuột",
    category: "traditional",
    price: 29000,
    originalPrice: null,
    rating: 5.0,
    reviews: 312,
    badge: "Truyền Thống",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop",
    description: "Pha phin chậm từ 100% hạt Robusta sẻ núi cao, thơm mộc không tẩm ướp, hậu vị đắng thanh lưu luyến.",
    tags: ["100% Robusta", "Đậm sâu", "Nguyên bản"]
  },
  {
    id: 4,
    name: "Caramel Macchiato Nóng / Đá",
    category: "espresso",
    price: 52000,
    originalPrice: 59000,
    rating: 4.9,
    reviews: 167,
    badge: "Yêu Thích",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800&auto=format&fit=crop",
    description: "Cà phê Espresso hảo hạng hòa quyện cùng sữa tươi thanh trùng nóng hổi, điểm xuyết sốt caramel bơ thơm lừng.",
    tags: ["Espresso", "Caramel", "Hương thơm"]
  },
  {
    id: 5,
    name: "Cold Brew Cam Vàng Quế Thanh",
    category: "espresso",
    price: 49000,
    originalPrice: 55000,
    rating: 4.9,
    reviews: 198,
    badge: "Mới Ra Mắt",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop",
    description: "Cà phê ủ lạnh 24 giờ giải phóng vị chua thanh tự nhiên của Arabica Cầu Đất, đượm vị thơm the mát từ cam vàng và quế.",
    tags: ["Ủ lạnh 24h", "Tươi mát", "Low Acid"]
  },
  {
    id: 6,
    name: "Cappuccino Nghệ Thuật Latte",
    category: "espresso",
    price: 48000,
    originalPrice: null,
    rating: 4.8,
    reviews: 142,
    badge: "Thủ Công",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop",
    description: "Tỉ lệ vàng 1:1:1 giữa Espresso, sữa nóng và bọt sữa siêu mịn được tạo hình nghệ thuật bởi Barista chuyên nghiệp.",
    tags: ["Artisan", "Bọt mịn", "Italy Style"]
  },
  {
    id: 7,
    name: "Trà Sen Vàng Củ Năng Giòn",
    category: "tea",
    price: 46000,
    originalPrice: null,
    rating: 4.9,
    reviews: 220,
    badge: "Thanh Mát",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop",
    description: "Trà Ô Long thượng hạng tỏa ngát hương hoa sen, kem béo mặn nhẹ và những hạt sen bùi bùi cùng củ năng giòn ngọt.",
    tags: ["Thanh lọc", "Hạt sen", "Thanh mát"]
  },
  {
    id: 8,
    name: "Matcha Latte Uji Nhật Bản",
    category: "tea",
    price: 55000,
    originalPrice: 62000,
    rating: 4.9,
    reviews: 173,
    badge: "Nhập Khẩu",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop",
    description: "Bột trà xanh nguyên chất nhập khẩu từ vùng Uji (Kyoto) đánh cùng sữa tươi Hokkaido béo mịn thơm tự nhiên.",
    tags: ["Matcha Uji", "Chống oxy hóa", "Sữa tươi"]
  },
  {
    id: 9,
    name: "Bánh Sừng Bò Croissant Bơ Pháp",
    category: "bakery",
    price: 36000,
    originalPrice: 42000,
    rating: 4.9,
    reviews: 205,
    badge: "Nướng Mỗi Sáng",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop",
    description: "Vỏ ngoài giòn rụm ngàn lớp thơm nức mùi bơ thượng hạng Isigny Sainte-Mère, bên trong mềm xốp mọng ngậy.",
    tags: ["Bơ Pháp", "Bánh tươi", "Ăn kèm cafe"]
  },
  {
    id: 10,
    name: "Tiramisu Cà Phê Rượu Rum",
    category: "bakery",
    price: 45000,
    originalPrice: 50000,
    rating: 5.0,
    reviews: 164,
    badge: "Đặc Sản Ý",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop",
    description: "Lớp phô mai Mascarpone béo ngậy xếp cùng bánh ladyfinger ngâm đẫm cà phê Espresso và chút nồng nàn của rượu Rhum.",
    tags: ["Mascarpone", "Rượu Rhum", "Mềm mịn"]
  },
  {
    id: 11,
    name: "Cà Phê Nâu Lắc Kem Sữa",
    category: "traditional",
    price: 36000,
    originalPrice: null,
    rating: 4.8,
    reviews: 132,
    badge: null,
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop",
    description: "Cà phê phin truyền thống được lắc đá tạo bọt bông mịn màng, phủ lớp kem sữa nhẹ nhàng tươi mới.",
    tags: ["Lắc bọt", "Nâu đá", "Bùng tỉnh táo"]
  },
  {
    id: 12,
    name: "Trà Đào Cam Sả Mật Ong",
    category: "tea",
    price: 45000,
    originalPrice: 52000,
    rating: 4.8,
    reviews: 289,
    badge: "Giải Nhiệt",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
    description: "Vị trà thanh mát hòa cùng lát đào ngâm giòn ngọt, cam vàng mọng nước và hương sả thơm lừng làm bừng tỉnh năng lượng.",
    tags: ["Đào giòn", "Sả chanh", "Tươi mới"]
  }
];

// App State
let cart = JSON.parse(localStorage.getItem("aura_cafe_cart")) || [];
let activeCategory = "all";
let searchQuery = "";
let currentSelectedProduct = null;
let appliedVoucher = null;

// Voucher Database
const VOUCHERS = {
  "CAFE10": { type: "percent", value: 10, name: "Giảm 10% tổng hóa đơn" },
  "FREESHIP": { type: "shipping", value: 20000, name: "Miễn phí vận chuyển (20.000đ)" },
  "AURAPASSION": { type: "fixed", value: 30000, name: "Giảm trực tiếp 30.000đ (đơn từ 100k)", minOrder: 100000 }
};

// Utilities
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
};

// Save Cart
const saveCart = () => {
  localStorage.setItem("aura_cafe_cart", JSON.stringify(cart));
  updateCartUI();
};

// Toast Notifications
const showToast = (message, type = "success") => {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl transition-all duration-300 transform translate-y-3 opacity-0 text-sm font-medium z-50 ${
    type === "success" 
      ? "bg-stone-900 text-amber-200 border border-amber-600/30" 
      : type === "warning"
      ? "bg-amber-800 text-amber-100 border border-amber-500/40"
      : "bg-red-900 text-white border border-red-500/30"
  }`;

  const icon = type === "success" 
    ? `<svg class="w-5 h-5 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`
    : `<svg class="w-5 h-5 text-amber-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;

  toast.innerHTML = `${icon}<span>${message}</span>`;
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-3", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
  });

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 2800);
};

// Render Products
const renderProducts = () => {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  let filtered = PRODUCTS.filter((item) => {
    const matchCategory = activeCategory === "all" || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-20 h-20 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center text-amber-800">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h3 class="text-xl font-bold text-stone-800 mb-2 font-serif">Không tìm thấy thức uống nào</h3>
        <p class="text-stone-500 max-w-sm mx-auto mb-6 text-sm">Hãy thử tìm kiếm với từ khóa khác như "muối", "latte", "trà" hoặc chọn danh mục khác nhé!</p>
        <button onclick="resetFilters()" class="px-5 py-2.5 bg-amber-800 text-white rounded-full text-sm font-semibold hover:bg-amber-900 transition-all shadow-md">
          Xem tất cả đồ uống
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const discountBadge = product.originalPrice 
      ? `<span class="bg-red-500/90 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">-${Math.round((1 - product.price/product.originalPrice) * 100)}%</span>` 
      : '';

    return `
      <div class="group relative bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
        <!-- Image Container -->
        <div class="relative h-56 w-full overflow-hidden bg-stone-100">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <!-- Badges top -->
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            ${product.badge ? `<span class="bg-amber-900/90 backdrop-blur-md text-amber-200 text-xs font-semibold px-2.5 py-1 rounded-full shadow">${product.badge}</span>` : ''}
            ${discountBadge}
          </div>

          <!-- Quick view button -->
          <button 
            onclick="openQuickView(${product.id})" 
            class="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/95 text-stone-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-800 hover:text-white shadow-lg transform translate-y-2 group-hover:translate-y-0"
            title="Xem chi tiết & Tùy chọn"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          </button>
        </div>

        <!-- Content -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-1.5 mb-1.5">
              <div class="flex text-amber-500 text-xs">
                ${'★'.repeat(Math.floor(product.rating))}
              </div>
              <span class="text-xs font-semibold text-stone-700">${product.rating}</span>
              <span class="text-xs text-stone-400">(${product.reviews})</span>
            </div>

            <h3 class="font-serif font-bold text-lg text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1">
              ${product.name}
            </h3>

            <p class="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
              ${product.description}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1 mt-3">
              ${product.tags.map(t => `<span class="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md font-medium">${t}</span>`).join('')}
            </div>
          </div>

          <!-- Price & Add Action -->
          <div class="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
            <div>
              <span class="text-base font-bold text-amber-900 block font-serif">
                ${formatCurrency(product.price)}
              </span>
              ${product.originalPrice ? `<span class="text-xs text-stone-400 line-through">${formatCurrency(product.originalPrice)}</span>` : ''}
            </div>

            <button 
              onclick="quickAddToCart(${product.id})"
              class="flex items-center gap-1.5 px-3.5 py-2 bg-stone-900 text-amber-100 rounded-xl hover:bg-amber-800 active:scale-95 transition-all text-xs font-semibold shadow-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
              <span>Thêm món</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

// Reset filters
const resetFilters = () => {
  activeCategory = "all";
  searchQuery = "";
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  updateCategoryTabsUI();
  renderProducts();
};

// Update Category Tabs UI
const updateCategoryTabsUI = () => {
  document.querySelectorAll("[data-category-tab]").forEach(tab => {
    const cat = tab.getAttribute("data-category-tab");
    if (cat === activeCategory) {
      tab.className = "category-tab px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 tab-active";
    } else {
      tab.className = "category-tab px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-all duration-300";
    }
  });
};

// Add to Cart
const quickAddToCart = (productId) => {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const itemKey = `${prod.id}-M-default`;
  const existing = cart.find(item => item.itemKey === itemKey);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      itemKey,
      productId: prod.id,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      size: "M",
      ice: "100%",
      sweet: "100%",
      quantity: 1
    });
  }

  saveCart();
  showToast(`Đã thêm "${prod.name}" vào giỏ hàng!`);
};

// Open Quick View Modal with custom toppings/options
const openQuickView = (productId) => {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  currentSelectedProduct = prod;

  const modal = document.getElementById("product-modal");
  const modalContent = document.getElementById("product-modal-content");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Product Image -->
      <div class="relative rounded-2xl overflow-hidden bg-stone-100 h-64 md:h-full min-h-[260px]">
        <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover"/>
        ${prod.badge ? `<span class="absolute top-3 left-3 bg-amber-900/90 text-amber-200 text-xs font-semibold px-3 py-1 rounded-full">${prod.badge}</span>` : ''}
      </div>

      <!-- Details & Options -->
      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-amber-800 tracking-wider uppercase font-mono">Thực Đơn Aura Coffee</span>
            <div class="flex items-center gap-1 text-xs text-amber-600 font-semibold">
              ★ ${prod.rating} (${prod.reviews} đánh giá)
            </div>
          </div>
          <h2 class="text-2xl font-bold font-serif text-stone-900 mt-1">${prod.name}</h2>
          <p class="text-xs text-stone-500 mt-2 leading-relaxed">${prod.description}</p>
          <div class="mt-3 flex items-baseline gap-2">
            <span id="modal-price" class="text-2xl font-bold font-serif text-amber-900">${formatCurrency(prod.price)}</span>
            ${prod.originalPrice ? `<span class="text-sm text-stone-400 line-through">${formatCurrency(prod.originalPrice)}</span>` : ''}
          </div>

          <!-- Options -->
          <div class="mt-5 space-y-4 border-t border-stone-200/80 pt-4">
            <!-- Size Selector -->
            <div>
              <label class="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-2">Chọn Size ly</label>
              <div class="grid grid-cols-3 gap-2" id="option-sizes">
                <button type="button" onclick="selectSize('S', 0)" class="size-btn px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-700 hover:border-amber-700 focus:outline-none" data-size="S">
                  Size S <span class="block text-[10px] text-stone-400">Tiêu chuẩn</span>
                </button>
                <button type="button" onclick="selectSize('M', 5000)" class="size-btn px-3 py-2 rounded-xl border-2 border-amber-800 bg-amber-50/50 text-xs font-bold text-amber-900 focus:outline-none" data-size="M">
                  Size M <span class="block text-[10px] text-amber-700">+5.000đ</span>
                </button>
                <button type="button" onclick="selectSize('L', 10000)" class="size-btn px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-700 hover:border-amber-700 focus:outline-none" data-size="L">
                  Size L <span class="block text-[10px] text-stone-400">+10.000đ</span>
                </button>
              </div>
            </div>

            <!-- Ice & Sweetness -->
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">Lượng Đá</label>
                <select id="option-ice" class="w-full text-xs font-medium border border-stone-200 rounded-xl px-3 py-2 focus:ring-1 focus:ring-amber-700 outline-none bg-white">
                  <option value="100%">100% Đá (Tiêu chuẩn)</option>
                  <option value="70%">70% Đá vừa</option>
                  <option value="30%">30% Ít đá</option>
                  <option value="Nóng">Uống Nóng (Không đá)</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1.5">Độ Ngọt / Sữa</label>
                <select id="option-sweet" class="w-full text-xs font-medium border border-stone-200 rounded-xl px-3 py-2 focus:ring-1 focus:ring-amber-700 outline-none bg-white">
                  <option value="100%">100% Ngọt chuẩn vị</option>
                  <option value="70%">70% Ngọt dịu</option>
                  <option value="30%">30% Ít ngọt / Ít đường</option>
                  <option value="0%">Không đường / Không sữa</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Quantity & Add Button -->
        <div class="mt-6 pt-4 border-t border-stone-200 flex items-center gap-3">
          <div class="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-stone-50">
            <button onclick="adjustModalQty(-1)" class="w-9 h-9 flex items-center justify-center text-stone-600 hover:bg-stone-200 active:scale-95 text-sm font-bold">-</button>
            <span id="modal-qty" class="w-8 text-center text-xs font-bold text-stone-800">1</span>
            <button onclick="adjustModalQty(1)" class="w-9 h-9 flex items-center justify-center text-stone-600 hover:bg-stone-200 active:scale-95 text-sm font-bold">+</button>
          </div>
          <button 
            onclick="addCustomizedToCart()"
            class="flex-1 py-3 px-4 bg-amber-900 text-amber-100 font-semibold text-sm rounded-xl hover:bg-amber-950 transition-all shadow-md flex items-center justify-center gap-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span id="modal-add-text">Thêm vào giỏ • ${formatCurrency(prod.price + 5000)}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  selectedModalSize = 'M';
  selectedSizeExtra = 5000;
  modalQuantity = 1;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
};

let selectedModalSize = 'M';
let selectedSizeExtra = 5000;
let modalQuantity = 1;

const selectSize = (size, extraPrice) => {
  selectedModalSize = size;
  selectedSizeExtra = extraPrice;

  document.querySelectorAll(".size-btn").forEach(btn => {
    if (btn.getAttribute("data-size") === size) {
      btn.className = "size-btn px-3 py-2 rounded-xl border-2 border-amber-800 bg-amber-50/50 text-xs font-bold text-amber-900 focus:outline-none";
    } else {
      btn.className = "size-btn px-3 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-700 hover:border-amber-700 focus:outline-none";
    }
  });

  updateModalPrice();
};

const adjustModalQty = (delta) => {
  if (modalQuantity + delta >= 1) {
    modalQuantity += delta;
    const qtySpan = document.getElementById("modal-qty");
    if (qtySpan) qtySpan.textContent = modalQuantity;
    updateModalPrice();
  }
};

const updateModalPrice = () => {
  if (!currentSelectedProduct) return;
  const unitPrice = currentSelectedProduct.price + selectedSizeExtra;
  const total = unitPrice * modalQuantity;

  const priceEl = document.getElementById("modal-price");
  const addTextEl = document.getElementById("modal-add-text");

  if (priceEl) priceEl.textContent = formatCurrency(unitPrice);
  if (addTextEl) addTextEl.textContent = `Thêm vào giỏ • ${formatCurrency(total)}`;
};

const closeQuickView = () => {
  const modal = document.getElementById("product-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
  currentSelectedProduct = null;
};

const addCustomizedToCart = () => {
  if (!currentSelectedProduct) return;

  const ice = document.getElementById("option-ice")?.value || "100%";
  const sweet = document.getElementById("option-sweet")?.value || "100%";
  const unitPrice = currentSelectedProduct.price + selectedSizeExtra;
  const itemKey = `${currentSelectedProduct.id}-${selectedModalSize}-${ice}-${sweet}`;

  const existing = cart.find(item => item.itemKey === itemKey);
  if (existing) {
    existing.quantity += modalQuantity;
  } else {
    cart.push({
      itemKey,
      productId: currentSelectedProduct.id,
      name: currentSelectedProduct.name,
      price: unitPrice,
      image: currentSelectedProduct.image,
      size: selectedModalSize,
      ice,
      sweet,
      quantity: modalQuantity
    });
  }

  saveCart();
  closeQuickView();
  showToast(`Đã thêm ${modalQuantity}x ${currentSelectedProduct.name} (${selectedModalSize})!`);
};

// Update Cart UI
const updateCartUI = () => {
  const badge = document.getElementById("cart-badge");
  const drawerItems = document.getElementById("cart-drawer-items");
  const subtotalEl = document.getElementById("cart-subtotal");
  const discountEl = document.getElementById("cart-discount");
  const shippingEl = document.getElementById("cart-shipping");
  const totalEl = document.getElementById("cart-total");
  const freeShipBar = document.getElementById("freeship-progress");
  const freeShipText = document.getElementById("freeship-text");

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (badge) {
    badge.textContent = totalCount;
    badge.classList.toggle("hidden", totalCount === 0);
  }

  const rawSubtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Free shipping threshold: 150,000 VND
  const FREE_SHIPPING_LIMIT = 150000;
  let baseShipping = rawSubtotal > 0 ? (rawSubtotal >= FREE_SHIPPING_LIMIT ? 0 : 20000) : 0;

  // Calculate discounts
  let discountAmount = 0;
  if (appliedVoucher) {
    if (appliedVoucher.type === "percent") {
      discountAmount = Math.round(rawSubtotal * (appliedVoucher.value / 100));
    } else if (appliedVoucher.type === "fixed") {
      if (rawSubtotal >= (appliedVoucher.minOrder || 0)) {
        discountAmount = appliedVoucher.value;
      }
    } else if (appliedVoucher.type === "shipping") {
      baseShipping = 0;
    }
  }

  const finalTotal = Math.max(0, rawSubtotal - discountAmount + baseShipping);

  if (subtotalEl) subtotalEl.textContent = formatCurrency(rawSubtotal);
  if (discountEl) discountEl.textContent = `-${formatCurrency(discountAmount)}`;
  if (shippingEl) shippingEl.textContent = rawSubtotal === 0 ? "0đ" : (baseShipping === 0 ? "Miễn phí" : formatCurrency(baseShipping));
  if (totalEl) totalEl.textContent = formatCurrency(finalTotal);

  // Free shipping progress bar
  if (freeShipBar && freeShipText) {
    if (rawSubtotal === 0) {
      freeShipBar.style.width = "0%";
      freeShipText.textContent = "Mua thêm 150.000đ để được Freeship!";
    } else if (rawSubtotal >= FREE_SHIPPING_LIMIT) {
      freeShipBar.style.width = "100%";
      freeShipText.innerHTML = "🎉 <b>Chúc mừng!</b> Đơn hàng của bạn đủ điều kiện <b>Freeship toàn quốc</b>!";
    } else {
      const remaining = FREE_SHIPPING_LIMIT - rawSubtotal;
      const pct = Math.min(100, Math.round((rawSubtotal / FREE_SHIPPING_LIMIT) * 100));
      freeShipBar.style.width = `${pct}%`;
      freeShipText.textContent = `Mua thêm ${formatCurrency(remaining)} nữa để được Freeship!`;
    }
  }

  // Render items list
  if (drawerItems) {
    if (cart.length === 0) {
      drawerItems.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-center p-6 text-stone-400">
          <div class="w-16 h-16 mb-3 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </div>
          <p class="font-serif font-bold text-stone-700 text-base">Giỏ hàng của bạn đang trống</p>
          <p class="text-xs text-stone-500 mt-1 max-w-xs">Hãy chọn ngay những ly cà phê nguyên chất tuyệt hảo từ Aura Coffee nhé!</p>
          <button onclick="toggleCartDrawer(false)" class="mt-4 px-4 py-2 bg-amber-900 text-white text-xs font-semibold rounded-full hover:bg-amber-950">
            Tiếp tục mua hàng
          </button>
        </div>
      `;
    } else {
      drawerItems.innerHTML = cart.map(item => `
        <div class="flex gap-3 p-3 bg-stone-50/70 border border-stone-200/60 rounded-2xl items-center hover:bg-stone-50 transition-colors">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <h4 class="font-bold text-xs text-stone-800 truncate font-serif">${item.name}</h4>
            <div class="text-[10px] text-stone-500 mt-0.5 space-x-1">
              <span class="bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-medium">Size ${item.size}</span>
              ${item.ice ? `<span>• ${item.ice} đá</span>` : ''}
              ${item.sweet ? `<span>• ${item.sweet} ngọt</span>` : ''}
            </div>
            <div class="text-xs font-bold text-amber-900 mt-1">
              ${formatCurrency(item.price)}
            </div>
          </div>

          <div class="flex flex-col items-end gap-1.5 flex-shrink-0">
            <button onclick="removeFromCart('${item.itemKey}')" class="text-stone-400 hover:text-red-600 transition-colors text-xs p-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
            <div class="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-white text-xs">
              <button onclick="updateCartItemQty('${item.itemKey}', -1)" class="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-100">-</button>
              <span class="w-6 text-center font-bold text-stone-800">${item.quantity}</span>
              <button onclick="updateCartItemQty('${item.itemKey}', 1)" class="w-6 h-6 flex items-center justify-center text-stone-600 hover:bg-stone-100">+</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
};

const updateCartItemQty = (itemKey, delta) => {
  const item = cart.find(i => i.itemKey === itemKey);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.itemKey !== itemKey);
  }
  saveCart();
};

const removeFromCart = (itemKey) => {
  cart = cart.filter(i => i.itemKey !== itemKey);
  saveCart();
  showToast("Đã xóa món khỏi giỏ hàng", "warning");
};

const clearCart = () => {
  if (cart.length === 0) return;
  cart = [];
  saveCart();
  showToast("Đã xóa sạch giỏ hàng", "warning");
};

// Toggle Cart Drawer
const toggleCartDrawer = (show) => {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (!drawer || !overlay) return;

  if (show) {
    overlay.classList.remove("hidden");
    setTimeout(() => {
      overlay.classList.remove("opacity-0");
      drawer.classList.remove("translate-x-full");
    }, 10);
  } else {
    drawer.classList.add("translate-x-full");
    overlay.classList.add("opacity-0");
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 300);
  }
};

// Apply Voucher
const applyVoucher = () => {
  const input = document.getElementById("voucher-input");
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (!code) {
    showToast("Vui lòng nhập mã giảm giá", "warning");
    return;
  }

  if (VOUCHERS[code]) {
    appliedVoucher = VOUCHERS[code];
    appliedVoucher.code = code;
    showToast(`Áp dụng mã ${code} thành công: ${appliedVoucher.name}!`);
    updateCartUI();
  } else {
    showToast("Mã giảm giá không hợp lệ hoặc đã hết hạn", "error");
  }
};

// Checkout Modal
const openCheckoutModal = () => {
  if (cart.length === 0) {
    showToast("Giỏ hàng đang trống, hãy thêm đồ uống trước nhé!", "warning");
    return;
  }
  toggleCartDrawer(false);

  const modal = document.getElementById("checkout-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    updateCheckoutSummary();
  }
};

const closeCheckoutModal = () => {
  const modal = document.getElementById("checkout-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
};

const updateCheckoutSummary = () => {
  const summaryEl = document.getElementById("checkout-items-summary");
  const totalEl = document.getElementById("checkout-total-val");
  if (!summaryEl || !totalEl) return;

  const rawSubtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  let baseShipping = rawSubtotal >= 150000 ? 0 : 20000;
  let discountAmount = 0;

  if (appliedVoucher) {
    if (appliedVoucher.type === "percent") {
      discountAmount = Math.round(rawSubtotal * (appliedVoucher.value / 100));
    } else if (appliedVoucher.type === "fixed" && rawSubtotal >= (appliedVoucher.minOrder || 0)) {
      discountAmount = appliedVoucher.value;
    } else if (appliedVoucher.type === "shipping") {
      baseShipping = 0;
    }
  }

  const finalTotal = Math.max(0, rawSubtotal - discountAmount + baseShipping);

  summaryEl.innerHTML = cart.map(item => `
    <div class="flex justify-between items-center text-xs py-1 border-b border-stone-100">
      <span class="text-stone-700">${item.quantity}x ${item.name} (${item.size})</span>
      <span class="font-semibold text-stone-900">${formatCurrency(item.price * item.quantity)}</span>
    </div>
  `).join('');

  totalEl.textContent = formatCurrency(finalTotal);
};

// Complete Order
const handleCheckoutSubmit = (event) => {
  event.preventDefault();

  const name = document.getElementById("customer-name")?.value;
  const phone = document.getElementById("customer-phone")?.value;
  const address = document.getElementById("customer-address")?.value;
  const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value || "COD";

  if (!name || !phone || !address) {
    showToast("Vui lòng điền đầy đủ thông tin giao hàng", "warning");
    return;
  }

  // Show order success modal
  closeCheckoutModal();

  const successModal = document.getElementById("order-success-modal");
  const orderIdSpan = document.getElementById("order-code");
  const orderTimeSpan = document.getElementById("order-time");
  const orderMethodSpan = document.getElementById("order-payment-method");

  const randomCode = "AUR-" + Math.floor(100000 + Math.random() * 900000);
  if (orderIdSpan) orderIdSpan.textContent = randomCode;
  if (orderTimeSpan) orderTimeSpan.textContent = new Date().toLocaleString("vi-VN");
  if (orderMethodSpan) {
    orderMethodSpan.textContent = paymentMethod === "COD" ? "Thanh toán khi nhận hàng (COD)" : (paymentMethod === "QR" ? "Chuyển khoản VietQR / MoMo" : "Thẻ ATM / Visa");
  }

  if (successModal) {
    successModal.classList.remove("hidden");
    successModal.classList.add("flex");
  }

  // Clear cart
  cart = [];
  appliedVoucher = null;
  saveCart();
};

const closeOrderSuccessModal = () => {
  const successModal = document.getElementById("order-success-modal");
  if (successModal) {
    successModal.classList.add("hidden");
    successModal.classList.remove("flex");
  }
};

// Initial Setup
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();

  // Category Tab Click Listeners
  document.querySelectorAll("[data-category-tab]").forEach(tab => {
    tab.addEventListener("click", () => {
      activeCategory = tab.getAttribute("data-category-tab");
      updateCategoryTabsUI();
      renderProducts();
    });
  });

  // Search input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Newsletter subscribe
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("newsletter-email");
      if (emailInput && emailInput.value) {
        showToast("Cảm ơn bạn! Mã giảm giá 15% đã được gửi qua email.");
        emailInput.value = "";
      }
    });
  }
});
