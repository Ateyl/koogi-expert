import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {
  const { i18n } = useTranslation()

  function changeLanguage(lang) {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <Navbar changeLanguage={changeLanguage} />
      <main className="container py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App

