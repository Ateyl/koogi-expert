import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Navbar from './Navbar'  // Новый компонент навигации

function App() {
  const { i18n } = useTranslation()

  function changeLanguage(lang) {
    i18n.changeLanguage(lang)
  }

  return (
    <div>
      <Navbar changeLanguage={changeLanguage} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
