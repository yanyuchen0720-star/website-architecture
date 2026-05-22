/**
 * 主要 JavaScript 文件
 * 負責主要的頁面交互和事件處理
 */

// 頁面加載時初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('頁面已加載');
    initializeNavigation();
    initializeNewsletterForm();
    initializeButtonEvents();
});

/**
 * 初始化導航欄
 */
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // 點擊導航連結時關閉菜單
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });

    // 更新當前頁面的活動連結
    updateActiveLink();
}

/**
 * 更新活動導航連結
 */
function updateActiveLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/**
 * 初始化電子報表單
 */
function initializeNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleNewsletterSubmit(form);
    });
}

/**
 * 處理電子報提交
 */
function handleNewsletterSubmit(form) {
    const email = form.querySelector('input[type="email"]').value;
    const messageDiv = document.getElementById('message');

    // 簡單的郵件驗證
    if (validateEmail(email)) {
        messageDiv.textContent = '感謝您的訂閱！';
        messageDiv.classList.add('success');
        messageDiv.classList.remove('error');
        form.reset();

        // 3秒後清除消息
        setTimeout(() => {
            messageDiv.textContent = '';
            messageDiv.classList.remove('success');
        }, 3000);
    } else {
        messageDiv.textContent = '請輸入有效的電子郵件地址';
        messageDiv.classList.add('error');
        messageDiv.classList.remove('success');
    }
}

/**
 * 驗證電子郵件格式
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * 初始化按鈕事件
 */
function initializeButtonEvents() {
    const exploreBtn = document.querySelector('.hero-content .btn-primary');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const featuresSection = document.querySelector('.features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

/**
 * 滾動時添加視差效果（可選）
 */
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});
