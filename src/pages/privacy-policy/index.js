import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Main from '../../uikit/Main';
import P from '../../uikit/P';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Title = styled.h1`
  font-size: 50px;
  margin: 20px 0 50px 0;
  color: white;
`;

const PrivacyPolicy = () => {
  const { t } = useTranslation('privacy-policy');

  return (
    <div>
      <Navbar />
      <Main>
        <div>
          <Title>Privacy Policy</Title>

          <P>{t('firstPar')}</P>
          <P>{t('secondPar')}</P>
        </div>
      </Main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
