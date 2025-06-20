import React from 'react';
import './Home.css';
import { useTranslation } from 'react-i18next';
import heroImage from '../assets/hero.jpg';

function Home() {
  const { t } = useTranslation();

  const features = [
    {
      img: '/images/feature1.jpg',
      alt: 'Design',
      title: t('feature_design'),
      desc: t('feature_design_desc'),
    },
    {
      img: '/images/feature2.jpg',
      alt: 'Quality',
      title: t('feature_quality'),
      desc: t('feature_quality_desc'),
    },
    {
      img: '/images/feature3.jpg',
      alt: 'Support',
      title: t('feature_support'),
      desc: t('feature_support_desc'),
    },
  ];

  return (
    <div className="home-container">
      {/* HERO BLOCK */}
      <div
        className="hero-section d-flex flex-column justify-content-center align-items-center text-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">{t('home_title')}</h1>
          <p className="hero-subtitle">{t('home_description')}</p>
          <button className="btn btn-primary mt-3">{t('view_gallery')}</button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="container mt-5">
        <div className="row">
          {features.map(({ img, alt, title, desc }, idx) => (
            <div key={idx} className="col-md-4 mb-4">
              <div className="card text-center shadow-sm p-3">
                <img src={img} alt={alt} className="mb-3 img-fluid feature-img" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
