/**
 * 工具函數文件
 * 包含可重複使用的通用功能
 */

/**
 * 獲取 URL 參數
 * @param {string} paramName - 參數名稱
 * @returns {string|null} - 參數值或 null
 */
function getUrlParameter(paramName) {
    const params = new URLSearchParams(window.location.search);
    return params.get(paramName);
}

/**
 * 延遲執行函數
 * @param {function} callback - 回調函數
 * @param {number} delay - 延遲時間（毫秒）
 * @returns {number} - 超時 ID
 */
function delayExecution(callback, delay) {
    return setTimeout(callback, delay);
}

/**
 * 防抖函數（Debounce）
 * @param {function} func - 要防抖的函數
 * @param {number} wait - 等待時間（毫秒）
 * @returns {function} - 防抖後的函數
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 節流函數（Throttle）
 * @param {function} func - 要節流的函數
 * @param {number} limit - 時間限制（毫秒）
 * @returns {function} - 節流後的函數
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * 本地儲存 - 設置值
 * @param {string} key - 鍵名
 * @param {*} value - 值
 */
function setLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('本地儲存失敗:', error);
    }
}

/**
 * 本地儲存 - 獲取值
 * @param {string} key - 鍵名
 * @returns {*} - 儲存的值
 */
function getLocalStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('讀取本地儲存失敗:', error);
        return null;
    }
}

/**
 * 本地儲存 - 刪除值
 * @param {string} key - 鍵名
 */
function removeLocalStorage(key) {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('刪除本地儲存失敗:', error);
    }
}

/**
 * 格式化日期
 * @param {Date} date - 日期對象
 * @param {string} format - 格式字符串 (例如: 'YYYY-MM-DD')
 * @returns {string} - 格式化的日期字符串
 */
function formatDate(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');

    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
}

/**
 * 複製文本到剪貼板
 * @param {string} text - 要複製的文本
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('文本已複製到剪貼板');
    } catch (error) {
        console.error('複製失敗:', error);
    }
}

/**
 * 檢查網絡連接
 * @returns {boolean} - 是否在線
 */
function isOnline() {
    return navigator.onLine;
}

/**
 * 檢測設備類型
 * @returns {string} - 'mobile' 或 'desktop'
 */
function detectDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        ? 'mobile' 
        : 'desktop';
}

/**
 * 生成隨機顏色
 * @returns {string} - 十六進制顏色值
 */
function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

/**
 * 深度複製對象
 * @param {object} obj - 要複製的對象
 * @returns {object} - 複製後的對象
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
