import React from 'react'
import ReactDOM from 'react-dom/client'

import 'antd/dist/antd.css'; /* 配置插件按需引入 */

import App from './App'
import "@/assets/css/reset.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
