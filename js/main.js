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
    const isHomePage = path.endsWith('index.html') || path.endsWith('/') || path.endsWith('reinz/'); 
    
    const navClass = isHomePage ? 'navbar' : 'navbar navbar-dark';

    const headerHTML = `
        <nav class="${navClass}">
            <a href="index.html" class="nav-logo" aria-label="Rein'Z Home">
                <img src="img/reinz-logo.svg" class="reinz-logo" alt="Rein'Z Logo" width="140" height="45">
            </a>
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
                    <img src="img/reinz-logo.svg" class="reinz-logo" alt="Rein'Z Logo" width="140" height="45">
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
                    Manufactured by: Neurokem GmbH<br>
                    Made in Germany<br>` +
                    //<a href="tel:+97165348008" style="color:white; font-weight:bold;">+971 </a><br>  Temporarily hiding the phone until new business number is obtained. Remove the ` and + sign after updation
                    `<a href="mailto:mail@rein-z.com">mail@rein-z.com</a><br>
                    <a href="http://www.rein-z.com" style="color:white; font-weight:bold;" target="_blank">www.rein-z.com</a>
                </address>
            </div>
        </div>
        <div class="container footer-copyright">
            <hr style="border-color: #333; margin-bottom: 20px;">
            <p>Copyright 2026 Rein'Z. All rights Reserved</p>
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

    const initialCount = isHomePage ? 6 : reinzData.categories.length;
    const categoriesToShow = reinzData.categories.slice(0, initialCount);

    categoriesToShow.forEach(cat => {
        createCategoryCard(cat, grid);
    });

    // UPDATED: Button now redirects instead of loading inline
    if(isHomePage && loadMoreBtn) {
        if(reinzData.categories.length > 6) {
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
    
    const category = reinzData.categories.find(c => c.id === catId);

    if (category) {
        document.getElementById('category-title').innerText = `Browse our ${category.name} products`;
        if (reinzData.products[catId]) {
            currentCategoryProducts = reinzData.products[catId];
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
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='img/products/graphene.webp'">
            </div>
            <h3>${product.name}</h3>
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

    let descBodyHTML = '';
    if (product.desc.richHtml) {
        // Rich format: render pre-built HTML with subheadings
        descBodyHTML = `<div class="modal-rich-desc">${product.desc.richHtml}</div>`;
    } else {
        // Standard format: plain text + optional bullets
        let bulletsHTML = '';
        if (product.desc.bullets && product.desc.bullets.length > 0) {
            bulletsHTML = '<ul style="margin-top:10px; padding-left: 20px;">' + 
                        product.desc.bullets.map(b => `<li style="list-style:disc;">${b}</li>`).join('') + 
                        '</ul>';
        }
        descBodyHTML = `<p style="line-height:1.6;">${product.desc.text}</p>
                        <div class="modal-bullets">${bulletsHTML}</div>`;
    }

    modalContent.innerHTML = `
        <div class="modal-flex">
            <img src="${product.image}" alt="${product.name}" class="modal-img" loading="lazy" onerror="this.src='img/products/graphene.webp'">
            <div class="modal-details">
                <h2>${product.name}</h2>
                ${descBodyHTML}
            </div>
        </div>
    `;
    modal.classList.add('active');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('active');
}