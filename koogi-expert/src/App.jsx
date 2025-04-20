import { Routes, Route, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  const { t, i18n } = useTranslation()  // Получаем доступ к t и i18n

  function changeLanguage(lang) {
    i18n.changeLanguage(lang)  // Меняем язык
  }

  return (
    <div>
      {/* Переключатель языков */}
      <nav style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('ru')}>RU</button>
        <button onClick={() => changeLanguage('ee')}>EE</button>
      </nav>

      {/* Навигация */}
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to="/">{t('home_title')}</Link>
        <Link to="/gallery">{t('gallery')}</Link>
        <Link to="/contact">{t('contact')}</Link>
      </nav>

      {/* Маршруты */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
