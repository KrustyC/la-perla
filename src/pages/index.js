import React from 'react';
// import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

import BackgroundHome from '../components/BackgroundImages/BackgroundHome';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Main from '../uikit/Main';
import P from '../uikit/P';

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <div>
      <BackgroundHome>
        <Navbar />
        <h1>{t('heading')}</h1>
      </BackgroundHome>
      <Main>
        <div>
          <P>{t('firstPar')}</P>
          <P>{t('secondPar')}</P>
        </div>
      </Main>
      <Footer />
    </div>
  );
};

// export default translate('home')(Home);
export default Home;

// export const query = graphql`
//   query($lng: String!) {
//     locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "home" } }) {
//       ...TranslationFragment
//     }
//   }
// `;
