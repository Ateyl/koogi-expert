
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

export default function Navbar({ changeLanguage }) {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4 py-3">
      <div className="container position-relative">
        {/* Название по центру */}
        <Link className="navbar-brand mx-auto fw-bold text-uppercase" to="/">
          Koogiekspert
        </Link>

        {/* Кнопка-бургер */}
        <button
          className="navbar-toggler position-absolute end-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Меню и язык */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          {/* Ссылки влево */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">{t('home_title')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">{t('gallery')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">{t('contact')}</Link>
            </li>
          </ul>

          {/* Кнопки языков справа */}
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary" onClick={() => changeLanguage('en')}>EN</button>
            <button className="btn btn-outline-secondary" onClick={() => changeLanguage('ru')}>RU</button>
            <button className="btn btn-outline-info" onClick={() => changeLanguage('ee')}>EE</button>
          </div>
        </div>
      </div>
    </nav>
  );
}


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
//       <div className="container">
//         {/* Мобильное меню-кнопка */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Название фирмы по центру */}
//         <Link className="navbar-brand mx-auto fw-bold text-uppercase" to="/">
//           Моя Мебель
//         </Link>

//         {/* Меню справа */}
//         <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
//           <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">Главная</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/gallery">Галерея</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">Контакты</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// src/components/Navbar.js

// function Navbar({ changeLanguage }) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
//       <div className="container">
//         <a className="navbar-brand fw-bold" href="/">Koogiekspert</a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/">Главная</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/gallery">Галерея</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/contact">Контакты</a>
//             </li>
//           </ul>
//           <div className="d-flex">
//             <button
//               className="btn btn-outline-primary me-2"
//               onClick={() => changeLanguage('en')}
//             >
//               EN
//             </button>
//             <button
//               className="btn btn-outline-secondary"
//               onClick={() => changeLanguage('ru')}
//             >
//               RU
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
