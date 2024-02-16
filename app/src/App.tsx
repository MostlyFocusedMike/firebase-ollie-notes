import SiteHeadingAndNav from './components/SiteHeadingAndNav';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import User from './pages/UserPage';
import SignInPage from './pages/SignInPage';
import AboutPage from './pages/AboutPage';
import NotesPage from './pages/NotesPage';

function App() {
  return (
    <>
    <SiteHeadingAndNav />
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/users/:userUid' element={<User />} />
        <Route path='/users/:userUid/notes' element={<NotesPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </main>
    </>
  )
}

export default App
