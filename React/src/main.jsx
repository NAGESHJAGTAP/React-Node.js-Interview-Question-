import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './assets/Component/Counter.jsx'
import Todo_list from './assets/Component/Todo_list.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter/>
    <Todo_list/>
  </StrictMode>,
)
