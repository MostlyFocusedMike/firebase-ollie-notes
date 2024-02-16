import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import CurrentUserContextProvider from './contexts/CurrentUserContextProvider.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CurrentUserContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CurrentUserContextProvider>
)
