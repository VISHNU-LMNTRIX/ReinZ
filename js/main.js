/* js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    
    const path = window.location.pathname;
    
    if (path.includes('products.html')) {
        renderCategoriesPage(false); 
    } else if (path.includes('product-list.html')) {
        renderProductListPage();
    } else {
        if(document.getElementById('categories-grid')) {
            renderCategoriesPage(true); 
        }
    }
});

/* --- 1. Dynamic Header Injection --- */
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;

    const path = window.location.pathname;
    const isHomePage = path.endsWith('index.html') || path.endsWith('/') || path.endsWith('leksvin/'); 
    
    const navClass = isHomePage ? 'navbar' : 'navbar navbar-dark';

    const headerHTML = `
        <nav class="${navClass}">
            <a href="index.html" class="nav-logo">
                <svg class="leksvin-logo" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.69 35.13">
                  <defs>
                    <style>
                      .cls-1 { fill: #fff; }
                      .cls-2 { fill: #cb956d; }
                    </style>
                  </defs>
                  <path class="cls-1" d="M77.53,35.13h-22.66c-3.78,0-6.84-3.06-6.84-6.84V6.84c0-3.78,3.06-6.84,6.84-6.84h22.66c3.78,0,6.84,3.06,6.84,6.84v21.45c0,3.78-3.06,6.84-6.84,6.84"/>
                  <path class="cls-1" d="M168.72,1.36v20.85l-10.2-20.06v10.51l9.8,19.28h5.36V1.36h-4.96ZM157.69,1.36h-4.96v30.57h5V13.09h-.04V1.36ZM146.78,1.36h-4.96v30.57h4.96V1.36ZM131.53,1.36l-5.72,20.24,2.5,8.77,8.34-29h-5.12ZM119.23,1.36h-5.12l8.77,30.57h5v-.04L119.23,1.36ZM103.45,26.24c-.41.33-.88.59-1.41.76-.32.15-.67.24-1.07.28-.4.04-.83.07-1.31.07-1.46,0-2.79-.27-4.01-.81-1.22-.54-2.37-1.33-3.45-2.38l-3.14,3.75c1.38,1.51,3.01,2.64,4.9,3.38,1.89.74,3.8,1.11,5.74,1.11,1.32,0,2.58-.18,3.77-.55,1.19-.36,2.24-.92,3.14-1.68.9-.76,1.61-1.72,2.14-2.9.53-1.18.79-2.59.79-4.25,0-3.81-1.63-6.45-4.88-7.94-.93-.41-1.86-.76-2.8-1.05-.94-.29-1.9-.58-2.88-.87-.48-.12-.99-.27-1.55-.46-.56-.19-1.09-.44-1.59-.74-.5-.31-.92-.68-1.25-1.13-.33-.45-.5-1-.5-1.64,0-.7.15-1.26.46-1.68.3-.42.69-.76,1.15-1,.46-.25.97-.41,1.53-.5s1.08-.13,1.59-.13c1.43,0,2.74.26,3.93.78s2.34,1.28,3.45,2.27l2.9-3.97c-1.46-1.4-3.06-2.43-4.82-3.1-1.76-.67-3.59-1-5.5-1-1.24,0-2.45.16-3.61.48-1.16.32-2.19.84-3.08,1.55-.89.71-1.6,1.62-2.14,2.73-.54,1.11-.81,2.44-.81,4.01,0,1.34.2,2.46.62,3.36.41.9.97,1.66,1.67,2.27.7.61,1.52,1.11,2.46,1.5.94.39,1.92.76,2.96,1.11.5.15.99.29,1.47.44.48.15.94.29,1.39.44.56.15,1.12.33,1.69.57.57.23,1.09.53,1.57.89.48.36.87.81,1.17,1.33.3.52.46,1.15.46,1.88,0,.44-.07.92-.2,1.44-.21.58-.52,1.04-.93,1.37ZM23.73,1.36v16.96h16.43v-5.02h-11.47v-6.93h13.93V1.36h-18.89ZM28.7,19.24h-4.96v12.69l18.89.04v-5.06h-13.93v-7.68ZM4.96,1.36H0v30.57h4.96V1.36ZM18.38,26.87H5.76v5.06h12.62v-5.06Z"/>
                  <path class="cls-2" d="M61.98,4.75h-7.96l16.54,12.92-16.54,12.92h7.96l16.54-12.92-16.54-12.92Z"/>
                </svg>
            </a>
            
            <ul class="desktop-nav-links">
                <li><a href="products.html">Products</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="contact-us.html">Contact Us</a></li>
            </ul>
        </nav>

        <div class="hamburger" onclick="toggleMenu()">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>

        <div class="sliding-menu" id="slidingMenu">
            <ul class="flex-col">
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="contact-us.html">Contact Us</a></li>
            </ul>
        </div>
    `;
    headerPlaceholder.innerHTML = headerHTML;
}

/* --- 2. Dynamic Footer Injection --- */
function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    const footerHTML = `
        <div class="container footer-content">
            <div class="footer-col">
                <div class="footer-logo">
                    <svg class="leksvin-logo" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.69 35.13">
                      <defs>
                        <style>
                          .cls-1 { fill: #fff; }
                          .cls-2 { fill: #cb956d; }
                        </style>
                      </defs>
                      <path class="cls-1" d="M77.53,35.13h-22.66c-3.78,0-6.84-3.06-6.84-6.84V6.84c0-3.78,3.06-6.84,6.84-6.84h22.66c3.78,0,6.84,3.06,6.84,6.84v21.45c0,3.78-3.06,6.84-6.84,6.84"/>
                      <path class="cls-1" d="M168.72,1.36v20.85l-10.2-20.06v10.51l9.8,19.28h5.36V1.36h-4.96ZM157.69,1.36h-4.96v30.57h5V13.09h-.04V1.36ZM146.78,1.36h-4.96v30.57h4.96V1.36ZM131.53,1.36l-5.72,20.24,2.5,8.77,8.34-29h-5.12ZM119.23,1.36h-5.12l8.77,30.57h5v-.04L119.23,1.36ZM103.45,26.24c-.41.33-.88.59-1.41.76-.32.15-.67.24-1.07.28-.4.04-.83.07-1.31.07-1.46,0-2.79-.27-4.01-.81-1.22-.54-2.37-1.33-3.45-2.38l-3.14,3.75c1.38,1.51,3.01,2.64,4.9,3.38,1.89.74,3.8,1.11,5.74,1.11,1.32,0,2.58-.18,3.77-.55,1.19-.36,2.24-.92,3.14-1.68.9-.76,1.61-1.72,2.14-2.9.53-1.18.79-2.59.79-4.25,0-3.81-1.63-6.45-4.88-7.94-.93-.41-1.86-.76-2.8-1.05-.94-.29-1.9-.58-2.88-.87-.48-.12-.99-.27-1.55-.46-.56-.19-1.09-.44-1.59-.74-.5-.31-.92-.68-1.25-1.13-.33-.45-.5-1-.5-1.64,0-.7.15-1.26.46-1.68.3-.42.69-.76,1.15-1,.46-.25.97-.41,1.53-.5s1.08-.13,1.59-.13c1.43,0,2.74.26,3.93.78s2.34,1.28,3.45,2.27l2.9-3.97c-1.46-1.4-3.06-2.43-4.82-3.1-1.76-.67-3.59-1-5.5-1-1.24,0-2.45.16-3.61.48-1.16.32-2.19.84-3.08,1.55-.89.71-1.6,1.62-2.14,2.73-.54,1.11-.81,2.44-.81,4.01,0,1.34.2,2.46.62,3.36.41.9.97,1.66,1.67,2.27.7.61,1.52,1.11,2.46,1.5.94.39,1.92.76,2.96,1.11.5.15.99.29,1.47.44.48.15.94.29,1.39.44.56.15,1.12.33,1.69.57.57.23,1.09.53,1.57.89.48.36.87.81,1.17,1.33.3.52.46,1.15.46,1.88,0,.44-.07.92-.2,1.44-.21.58-.52,1.04-.93,1.37ZM23.73,1.36v16.96h16.43v-5.02h-11.47v-6.93h13.93V1.36h-18.89ZM28.7,19.24h-4.96v12.69l18.89.04v-5.06h-13.93v-7.68ZM4.96,1.36H0v30.57h4.96V1.36ZM18.38,26.87H5.76v5.06h12.62v-5.06Z"/>
                      <path class="cls-2" d="M61.98,4.75h-7.96l16.54,12.92-16.54,12.92h7.96l16.54-12.92-16.54-12.92Z"/>
                    </svg>
                </div>
                <div class="social-links">
                    <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>

            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="contact-us.html">Contact Us</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Contact</h4>
                <address style="font-style: normal; opacity: 0.8; line-height: 1.8;">
                    Head Office: 6th Street, Industrial Area 15,<br>Sharjah, UAE<br>
                    Store: 10th Street, Industrial Area 15<br>
                    <a href="tel:+97165348008" style="color:white; font-weight:bold;">+971 65348008</a><br>
                    <a href="mailto:mail@leksvin.com">mail@leksvin.com</a>
                </address>
            </div>
        </div>
        <div class="container footer-copyright">
            <hr style="border-color: #333; margin-bottom: 20px;">
            <p>Copyright 2025 Leksvin. All rights Reserved</p>
        </div>
    `;
    footerPlaceholder.innerHTML = footerHTML;
}

/* --- 3. Menu Toggle --- */
function toggleMenu() {
    const menu = document.getElementById('slidingMenu');
    const hamburger = document.querySelector('.hamburger');
    if (menu && hamburger) {
        menu.classList.toggle('open');
        hamburger.classList.toggle('active');
    }
}

/* --- 4. Render Categories --- */
function renderCategoriesPage(isHomePage = false) {
    const grid = document.getElementById('categories-grid');
    const loadMoreBtn = document.getElementById('load-more-cats-btn');
    
    if(!grid) return;
    grid.innerHTML = ''; 

    const initialCount = isHomePage ? 6 : leksvinData.categories.length;
    const categoriesToShow = leksvinData.categories.slice(0, initialCount);

    categoriesToShow.forEach(cat => {
        createCategoryCard(cat, grid);
    });

    // UPDATED: Button now redirects instead of loading inline
    if(isHomePage && loadMoreBtn) {
        if(leksvinData.categories.length > 6) {
            loadMoreBtn.style.display = 'inline-block';
            loadMoreBtn.onclick = function(e) {
                e.preventDefault();
                window.location.href = 'products.html'; // Redirect to products page
            };
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }
}

function createCategoryCard(cat, container) {
    const card = document.createElement('a');
    card.className = 'category-item';
    card.href = `product-list.html?category=${cat.id}`;
    card.innerHTML = `
        <div class="category-circle">
            <img src="${cat.image}" alt="${cat.name}" loading="lazy">
        </div>
        <p>${cat.name}</p>
    `;
    container.appendChild(card);
}

/* --- 5. Render Product List Logic --- */
let displayedProducts = 0;
const PRODUCTS_PER_PAGE = 15;
let currentCategoryProducts = [];

function renderProductListPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const catId = urlParams.get('category');
    
    const category = leksvinData.categories.find(c => c.id === catId);

    if (category) {
        document.getElementById('category-title').innerText = `Browse our ${category.name} products`;
        if (leksvinData.products[catId]) {
            currentCategoryProducts = leksvinData.products[catId];
        } else {
            currentCategoryProducts = []; 
        }
        loadMoreProducts();
    } else {
        document.getElementById('category-title').innerText = 'Category Not Found';
    }
}

function loadMoreProducts() {
    const grid = document.getElementById('products-grid');
    const btn = document.getElementById('load-more-btn');
    
    const nextBatch = currentCategoryProducts.slice(displayedProducts, displayedProducts + PRODUCTS_PER_PAGE);
    
    if(nextBatch.length === 0 && displayedProducts === 0) {
        grid.innerHTML = '<p class="no-products" style="grid-column: 1/-1; text-align: center; padding: 20px;">No products currently available in this category.</p>';
        if(btn) btn.style.display = 'none';
        return;
    }

    nextBatch.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        let shortDesc = product.desc.text;
        if(shortDesc.length > 80) {
            shortDesc = shortDesc.substring(0, 80) + '...';
        }

        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='img/product-category/cleaning_and_detailing.jpg'">
            </div>
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <p class="short-desc">${shortDesc}</p>
            <button class="btn-text" onclick="openProductModal('${product.id}')">Details <i class="fa-solid fa-arrow-right"></i></button>
        `;
        grid.appendChild(card);
    });

    displayedProducts += nextBatch.length;

    if (btn) {
        if (displayedProducts >= currentCategoryProducts.length) {
            btn.style.display = 'none';
        } else {
            btn.style.display = 'inline-block';
        }
    }
}

/* --- 6. Product Modal Logic --- */
function openProductModal(productId) {
    let product = null;
    if (currentCategoryProducts.length > 0) {
        product = currentCategoryProducts.find(p => p.id === productId);
    } 
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const modalContent = document.getElementById('modal-body');

    let bulletsHTML = '';
    if (product.desc.bullets && product.desc.bullets.length > 0) {
        bulletsHTML = '<ul style="margin-top:10px; padding-left: 20px;">' + 
                      product.desc.bullets.map(b => `<li style="list-style:disc;">${b}</li>`).join('') + 
                      '</ul>';
    }

    modalContent.innerHTML = `
        <div class="modal-flex">
            <img src="${product.image}" alt="${product.name}" class="modal-img" onerror="this.src='img/product-category/cleaning_and_detailing.jpg'">
            <div class="modal-details">
                <h2>${product.name}</h2>
                <h3 class="modal-price" style="color:#CB956D; margin: 10px 0;">${product.price}</h3>
                <p style="line-height:1.6;">${product.desc.text}</p>
                <div class="modal-bullets">${bulletsHTML}</div>
            </div>
        </div>
    `;
    modal.classList.add('active');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('active');
}