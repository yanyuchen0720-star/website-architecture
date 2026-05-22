# 網站架構範例

一個現代化的 HTML、CSS 和 JavaScript 網站架構，適合初學者和中級開發者學習。

## 📁 項目結構

```
website-architecture/
├── index.html              # 首頁
├── README.md              # 項目說明文件
├── css/
│   ├── style.css          # 主樣式表
│   └── responsive.css     # 響應式設計
├── js/
│   ├── main.js            # 主要 JavaScript 邏輯
│   ├── utils.js           # 工具函數
│   └── api.js             # API 調用（預留）
├── assets/
│   ├── images/            # 圖片資源
│   └── fonts/             # 字體資源
└── pages/
    ├── about.html         # 關於我們
    ├── services.html      # 服務頁面
    └── contact.html       # 聯絡我們
```

## ✨ 主要特性

- ✅ **響應式設計** - 完美適配桌面、平板和手機設備
- ✅ **現代化 UI** - 使用 CSS Grid 和 Flexbox
- ✅ **交互功能** - 導航菜單、表單驗證等
- ✅ **干淨代碼** - 清晰的代碼結構和註釋
- ✅ **易於擴展** - 模塊化的設計便於添加新功能

## 🚀 快速開始

### 1. 克隆或下載項目

```bash
git clone https://github.com/yanyuchen0720-star/website-architecture.git
cd website-architecture
```

### 2. 本地運行

在瀏覽器中打開 `index.html` 文件，或使用本地服務器：

```bash
# 使用 Python 3
python -m http.server 8000

# 或使用 Python 2
python -m SimpleHTTPServer 8000
```

然後訪問 `http://localhost:8000`

### 3. 瀏覽頁面

- 首頁: `index.html`
- 關於我們: `pages/about.html`
- 服務: `pages/services.html`
- 聯絡我們: `pages/contact.html`

## 📋 文件說明

### HTML 文件

- **index.html** - 首頁，包含導航、頁首 Banner 和特性部分
- **pages/about.html** - 關於公司的信息頁面
- **pages/services.html** - 服務介紹頁面
- **pages/contact.html** - 聯絡表單頁面

### CSS 文件

- **style.css** - 主要樣式表，包括：
  - 全局樣式和 CSS 變數
  - 導航欄樣式
  - 頁首 Banner 樣式
  - 按鈕和卡片樣式
  - 動畫效果

- **responsive.css** - 響應式設計樣式，適配：
  - 平板設備 (768px 以下)
  - 手機設備 (480px 以下)

### JavaScript 文件

- **main.js** - 主要功能：
  - 導航菜單交互
  - 表單驗證
  - 按鈕事件處理

- **utils.js** - 通用工具函數：
  - URL 參數獲取
  - 防抖/節流函數
  - 本地存儲操作
  - 日期格式化
  - 設備檢測等

## 🎨 自定義

### 修改主題顏色

在 `css/style.css` 中修改 CSS 變數：

```css
:root {
    --primary-color: #007bff;      /* 主要顏色 */
    --secondary-color: #6c757d;    /* 次要顏色 */
    --success-color: #28a745;      /* 成功顏色 */
    /* 更多顏色... */
}
```

### 修改內容

直接編輯 HTML 文件中的內容，替換文本和連結。

### 添加自定義樣式

在 `css/style.css` 或 `css/responsive.css` 中添加新的 CSS 規則。

## 📱 設備適配

項目支持以下設備：

| 設備類型 | 寬度範圍 | 備註 |
|---------|---------|------|
| 手機 | < 480px | 單列布局 |
| 小平板 | 480px - 768px | 雙列布局 |
| 平板 | 768px - 1024px | 三列布局 |
| 桌面 | > 1024px | 全寬布局 |

## 🔧 功能介紹

### 導航菜單

- 響應式導航欄
- 手機端漢堡菜單
- 活動連結指示

### 表單

- 電子報訂閱表單
- 聯絡表單
- 郵件驗證
- 成功/錯誤提示

### 交互效果

- 平滑滾動
- 按鈕懸停效果
- 卡片陰影動畫
- 入場動畫

## 📚 學習資源

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

## 🤝 貢獻

歡迎提出問題和建議！

## 📄 許可證

MIT License

## 📞 聯絡方式

如有問題，請通過以下方式聯絡：

- GitHub: [@yanyuchen0720-star](https://github.com/yanyuchen0720-star)
- Email: your-email@example.com

---

**最後更新**: 2026 年 5 月 22 日
