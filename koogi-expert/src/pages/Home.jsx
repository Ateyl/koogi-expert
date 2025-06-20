import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>{t('home_title')}</h1>
        <p>{t('home_description')}</p>
        <button className="cta-button">{t('view_gallery')}</button>
      </header>

      <section className="features">
        <div className="feature-card">
          <img src="/icons/design.svg" alt="Design" />
          <h3>{t('feature_design')}</h3>
          <p>{t('feature_design_desc')}</p>
        </div>
        <div className="feature-card">
          <img src="/icons/quality.svg" alt="Quality" />
          <h3>{t('feature_quality')}</h3>
          <p>{t('feature_quality_desc')}</p>
        </div>
        <div className="feature-card">
          <img src="/icons/support.svg" alt="Support" />
          <h3>{t('feature_support')}</h3>
          <p>{t('feature_support_desc')}</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
