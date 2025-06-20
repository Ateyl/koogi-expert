// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar({ changeLanguage }) {
  const { t } = useTranslation()

  return (
    <header>
      {/* Переключатель языков */}
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('ru')}>RU</button>
        <button onClick={() => changeLanguage('ee')}>EE</button>
      </nav>

      {/* Навигационные ссылки */}
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Link to="/">{t('home_title')}</Link>
        <Link to="/gallery">{t('gallery')}</Link>
        <Link to="/contact">{t('contact')}</Link>
      </nav>
    </header>
  )
}

export default function Navbar({ changeLanguage }) {
  // ...
}