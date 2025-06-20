// import React from 'react';

// const Home = () => {
//     return (
//         <div>
//             <h1>Welcome to the Koogi Expert Furniture Store!</h1>
//             <p>Explore our collections and find the perfect furniture for your home.</p>
//         </div>
//     );
// };

// export default Home;
import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home_title')}</h1>
      <p>{t('home_description')}</p>
    </div>
  );
}

export default Home;
