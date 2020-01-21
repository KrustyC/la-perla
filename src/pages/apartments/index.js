import React from 'react';
import { useTranslation } from 'react-i18next';
import BackgroundApartments from '../../components/BackgroundImages/BackgroundApartments';
import Main from '../../uikit/Main';
import P from '../../uikit/P';
import Carousel from '../../components/Carousel';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ExtraInfo from './ExtraInfo';
import apartmentImg from '../../images/apartment.jpg';
import Title from '../../uikit/Title';
import contactsImg from '../../images/contacts.jpg';
import homeImg from '../../images/home.jpg';
import images from '../../images/carousel';
// const images = [apartmentImg, contactsImg, homeImg];

const Apartments = () => {
  const { t } = useTranslation('apartments');

  return (
    <div>
      <BackgroundApartments>
        <Navbar />
        <Title>{t('heading')}</Title>
      </BackgroundApartments>
      <Main>
        <div>
          <P>{t('firstPar')}</P>
          <P>{t('secondPar')}</P>
          <P>{t('thirdPar')}</P>
          <P>{t('fourthPar')}</P>
          <P>{t('fifthPar')}</P>
          <P>{t('sixthPar')}</P>
          <P>{t('seventhPar')}</P>
          <P>{t('eighthPar')}</P>
          <P>{t('ninthPar')}</P>
        </div>
      </Main>
      <Carousel items={images} />
      <ExtraInfo />
      <Footer />
    </div>
  );
};

export default Apartments;
