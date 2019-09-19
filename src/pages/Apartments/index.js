import React from 'react';
import BackgroundApartments from '../../components/BackgroundImages/BackgroundApartments';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Apartments = () => (
  <div>
    <BackgroundApartments>
      <Navbar />
    </BackgroundApartments>
    Apartments
    <Footer />
  </div>
);

export default Apartments;
