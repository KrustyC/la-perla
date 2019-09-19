import React from 'react';
import BackgroundSurroundings from '../../components/BackgroundImages/BackgroundSurroundings';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Surroundings = () => (
  <div>
    <BackgroundSurroundings>
      <Navbar />
    </BackgroundSurroundings>
    Surroundings
    <Footer />
  </div>
);

export default Surroundings;
