import React from 'react';
import BackgroundContacts from '../../components/BackgroundImages/BackgroundContacts';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Contacts = () => (
  <div>
    <BackgroundContacts>
      <Navbar />
    </BackgroundContacts>
    Contacts
    <Footer />
  </div>
);

export default Contacts;
