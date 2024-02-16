import ReactDOM from 'react-dom/client'
import CurrentUserContextProvider from './contexts/CurrentUserContextProvider.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CurrentUserContextProvider>
    <App />
  </CurrentUserContextProvider>
)
