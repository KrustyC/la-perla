import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useTranslation } from 'react-i18next';
import Main from '../../uikit/Main';
import P from '../../uikit/P';
import Title from '../../uikit/Title';
import BackgroundContacts from '../../components/BackgroundImages/BackgroundContacts';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import mapImg from '../../images/maps.jpg';
import Form from './Form';

const Img = styled.img`
  height: 450px;
  width: 100%;

  ${media.lessThan('large')`
    height: 250px;
  `}
`;

const Div = styled.div`
  ${media.lessThan('large')`
    padding: 20px !important;
  `}
`;

const Contacts = () => {
  const { t } = useTranslation('contacts');

  return (
    <div>
      <BackgroundContacts>
        <Navbar />
        <Title>{t('heading')}</Title>
      </BackgroundContacts>

      <Main>
        <div>
          <Div>
            <Img src={mapImg} alt="map" />
            <Form />
          </Div>
          <br />
          <br />
          <P>{t('firstPar')}</P>
          <P>{t('secondPar')}</P>
          <P>{t('thirdPar')}</P>
          <P>{t('fourthPar')}</P>
        </div>
      </Main>
      <Footer />
    </div>
  );
};

export default Contacts;
