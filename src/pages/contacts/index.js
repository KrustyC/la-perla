import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Main from '../../uikit/Main';
import P from '../../uikit/P';
import BackgroundContacts from '../../components/BackgroundImages/BackgroundContacts';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import mapImg from '../../images/maps.jpg';
import Form from './Form';

const Img = styled.img`
  height: 450px;
  width: 100%;
`;

const Contacts = () => {
  const { t } = useTranslation('contacts');

  return (
    <div>
      <BackgroundContacts>
        <Navbar />
        <h1>{t('heading')}</h1>
      </BackgroundContacts>

      <Main>
        <div>
          <Img src={mapImg} alt="map" />
          <Form />
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
