🚀 前端面試專案 (Vue 3 + Pinia + Shadcn UI)
這是一個使用 Vue 3 (TypeScript) 開發的登入與控制面板系統。整合了 Pinia 進行狀態管理，並使用 Axios 對接遠端 API 進行帳號建立與驗證。

🛠 技術棧 (Tech Stack)
框架: Vue 3 (Composition API)

建構工具: Vite

狀態管理: Pinia

路由: Vue Router

樣式: Tailwind CSS

UI 組件庫: Shadcn UI (Vue)

HTTP 請求: Axios

📋 快速開始 (Quick Start)
請確保您的電腦已安裝 Node.js (建議版本 18.x 或以上)。

1. 複製專案 (Clone Project)
   Bash
   git clone <您的專案倉庫網址>
   cd <專案資料夾名稱>
2. 安裝依賴 (Install Dependencies)
   使用 npm 或 pnpm 安裝所需的套件：

Bash
npm install

# 或者

pnpm install 3. 本地開發模式 (Run Development Server)
啟動 Vite 開發伺服器，預設運行於 http://localhost:5173：

Bash
npm run dev

🔐 功能說明 (Features)

身分驗證:

串接 https://api-frontend-interview-server.metcfire.com.tw/create-account。

請求 Header 包含自定義 interviewername。

持久化儲存: 成功登入後，accountId 會自動儲存在 localStorage，確保重新整理頁面後仍保持登入狀態。

路由守衛:

未登入時嘗試進入 /dashboard 會被自動導向 /login。

已登入時訪問 /login 會自動跳轉回 /dashboard。

📦 打包生產環境 (Build for Production)
若要部署專案，請執行以下命令產生 dist 資料夾：

npm run build
執行預覽（測試打包後的結果）：

npm run preview
💡 注意事項
API 限制: 本專案目前對接測試環境 API，請確保網路連線正常。

環境變數: 若需修改 API URL，請至 src/stores/auth.ts 中進行修改。
