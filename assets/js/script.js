// =========================================
// DATA PRODUK (8 Produk Terverifikasi)
// Hanya produk yang gambarnya sudah terbukti berhasil di-load
// =========================================
const products = [
    // Sepak Bola (3)
    { 
        id: 1, 
        name: "Bola Sepak Pro", 
        category: "Sepak Bola", 
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop",
        icon: "⚽",
        price: 250000, 
        desc: "Bola standar FIFA dengan jahitan mesin presisi tinggi." 
    },
    { 
        id: 2, 
        name: "Bola Futsal Premium", 
        category: "Sepak Bola", 
        image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=400&fit=crop",
        icon: "⚽",
        price: 180000, 
        desc: "Low bounce khusus untuk lapangan futsal indoor." 
    },
    { 
        id: 4, 
        name: "Sepatu Bola FG", 
        category: "Sepak Bola", 
        image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=400&h=400&fit=crop",
        icon: "👟",
        price: 750000, 
        desc: "Stud firm ground untuk lapangan rumput alami." 
    },
    
    // Badminton (1)
    { 
        id: 8, 
        name: "Tas Raket 3 Slot", 
        category: "Badminton", 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        icon: "🎒",
        price: 275000, 
        desc: "Tas backpack waterproof dengan kompartemen terpisah." 
    },
    
    // Running (3)
    { 
        id: 14, 
        name: "Sepatu Running Ultra", 
        category: "Running", 
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        icon: "",
        price: 850000, 
        desc: "Sepatu lari dengan bantalan foam responsif dan breathable." 
    },
    { 
        id: 15, 
        name: "Kaos Dry-Fit", 
        category: "Running", 
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
        icon: "👕",
        price: 150000, 
        desc: "Kaos olahraga teknologi quick-dry dan anti-bakteri." 
    },
    { 
        id: 16, 
        name: "Botol Sport 1L", 
        category: "Running", 
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
        icon: "",
        price: 85000, 
        desc: "Tumbler sport BPA-free dengan penanda waktu minum." 
    },
    
    // Yoga (1)
    { 
        id: 18, 
        name: "Yoga Mat Premium", 
        category: "Yoga", 
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
        icon: "",
        price: 150000, 
        desc: "Matras yoga TPE tebal 6mm dengan tekstur anti-slip." 
    }
];

// =========================================
// STATE & UTILITAS
// =========================================
let cart = [];

const categoryColors = {
    "Sepak Bola": { bg: "bg-sky-100", text: "text-sky-700", border: "border-sky-200", badge: "bg-sky-500" },
    "Badminton": { bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-200", badge: "bg-emerald-500" },
    "Fitness": { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200", badge: "bg-amber-500" },
    "Running": { bg: "bg-violet-100", text: "text-violet-700", border: "border-violet-200", badge: "bg-violet-500" },
    "Yoga": { bg: "bg-pink-100", text: "text-pink-700", border: "border-pink-200", badge: "bg-pink-500" },
    "Renang": { bg: "bg-cyan-100", text: "text-cyan-700", border: "border-cyan-200", badge: "bg-cyan-500" }
};

const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(number);
};

// =========================================
// RENDER PRODUK (dengan fallback jika gambar error)
// =========================================
const renderProducts = () => {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = products.map(product => {
        const colors = categoryColors[product.category];
        return `
            <article class="card-hover bg-white rounded-2xl shadow-sm border ${colors.border} overflow-hidden flex flex-col transition-shadow hover:shadow-lg">
                <!-- Image Container dengan Fallback -->
                <div class="product-image-container relative">
                    <img 
                        src="${product.image}" 
                        alt="${product.name}"
                        class="w-full h-full product-img"
                        loading="lazy"
                        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                    >
                    <!-- Fallback: Emoji + Warna Kategori (hanya muncul jika gambar error) -->
                    <div class="emoji-fallback absolute inset-0 items-center justify-center ${colors.bg}">
                        <span class="text-7xl">${product.icon}</span>
                    </div>
                    <div class="absolute top-3 left-3">
                        <span class="inline-block px-3 py-1 text-xs font-bold text-white rounded-full ${colors.badge} shadow-md">
                            ${product.category}
                        </span>
                    </div>
                </div>
                
                <!-- Info -->
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="font-bold text-gray-900 mb-1 clamp-text">${product.name}</h3>
                    <p class="text-gray-500 mb-4 flex-grow clamp-text">${product.desc}</p>
                    
                    <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <span class="font-bold text-lg text-gray-900">${formatRupiah(product.price)}</span>
                        <button onclick="addToCart(${product.id})" 
                            class="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition flex items-center gap-2 active:scale-95">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                            Keranjang
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
};

// =========================================
// LOGIKA KERANJANG
// =========================================
const addToCart = (id) => {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(`${product.name} ditambahkan ke keranjang`);
};

const updateQty = (id, change) => {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            removeFromCart(id);
            return;
        }
    }
    updateCartUI();
};

const removeFromCart = (id) => {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
};

const updateCartUI = () => {
    // Update Badge
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById("cartBadge");
    badge.textContent = totalItems;
    
    if (totalItems > 0) {
        badge.classList.remove("scale-0");
        badge.classList.add("scale-100");
    } else {
        badge.classList.remove("scale-100");
        badge.classList.add("scale-0");
    }

    // Update Modal Content
    const cartItemsContainer = document.getElementById("cartItems");
    const cartEmpty = document.getElementById("cartEmpty");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const cartTotal = document.getElementById("cartTotal");

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "";
        cartItemsContainer.classList.add("hidden");
        cartEmpty.classList.remove("hidden");
        checkoutBtn.disabled = true;
        cartTotal.textContent = formatRupiah(0);
    } else {
        cartItemsContainer.classList.remove("hidden");
        cartEmpty.classList.add("hidden");
        checkoutBtn.disabled = false;

        cartItemsContainer.innerHTML = cart.map(item => {
            const colors = categoryColors[item.category];
            return `
                <div class="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-200 relative">
                        <img 
                            src="${item.image}" 
                            alt="${item.name}"
                            class="w-full h-full object-cover cart-item-img"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                        >
                        <div class="emoji-fallback-cart absolute inset-0 items-center justify-center ${colors.bg}">
                            <span class="text-3xl">${item.icon}</span>
                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="font-semibold text-gray-900 text-sm truncate">${item.name}</h4>
                        <p class="text-xs text-gray-500">${formatRupiah(item.price)}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="updateQty(${item.id}, -1)" class="w-7 h-7 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 active:scale-95 transition">-</button>
                        <span class="text-sm font-semibold w-4 text-center">${item.qty}</span>
                        <button onclick="updateQty(${item.id}, 1)" class="w-7 h-7 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 active:scale-95 transition">+</button>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-600 p-1" aria-label="Hapus item">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            `;
        }).join("");

        const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        cartTotal.textContent = formatRupiah(total);
    }
};

// =========================================
// MODAL & INTERAKSI UI
// =========================================
const toggleCartModal = (show) => {
    const modal = document.getElementById("cartModal");
    const body = document.body;
    
    if (show) {
        modal.classList.remove("hidden");
        body.classList.add("modal-open");
    } else {
        modal.classList.add("hidden");
        body.classList.remove("modal-open");
    }
};

const toggleSuccessModal = (show) => {
    const modal = document.getElementById("successModal");
    const body = document.body;
    
    if (show) {
        modal.classList.remove("hidden");
        body.classList.add("modal-open");
    } else {
        modal.classList.add("hidden");
        body.classList.remove("modal-open");
    }
};

const checkout = () => {
    if (cart.length === 0) return;
    
    // Reset cart
    cart = [];
    updateCartUI();
    
    // Tutup cart, buka success
    toggleCartModal(false);
    setTimeout(() => {
        toggleSuccessModal(true);
    }, 200);
};

// Toast Notification
const showToast = (message) => {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = "bg-gray-900 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 pointer-events-auto toast-enter";
    toast.innerHTML = `
        <span class="text-green-400 text-xl">✓</span>
        <span class="text-sm font-medium clamp-text">${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove("toast-enter");
        toast.classList.add("toast-exit");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2000);
};

// =========================================
// EVENT LISTENERS
// =========================================
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartUI();

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // Cart Modal Triggers
    const cartBtn = document.getElementById("cartBtn");
    const closeCartBtn = document.getElementById("closeCartBtn");
    const cartBackdrop = document.getElementById("cartBackdrop");

    cartBtn.addEventListener("click", () => toggleCartModal(true));
    closeCartBtn.addEventListener("click", () => toggleCartModal(false));
    cartBackdrop.addEventListener("click", () => toggleCartModal(false));

    // Success Modal Triggers
    const checkoutBtn = document.getElementById("checkoutBtn");
    const closeSuccessBtn = document.getElementById("closeSuccessBtn");
    const successBackdrop = document.getElementById("successBackdrop");

    checkoutBtn.addEventListener("click", checkout);
    closeSuccessBtn.addEventListener("click", () => toggleSuccessModal(false));
    successBackdrop.addEventListener("click", () => toggleSuccessModal(false));

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });
});