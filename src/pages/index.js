import React from 'react';
import styled from 'styled-components';
import BackgroundHome from '../components/BackgroundImages/BackgroundHome';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Header = styled.div`
  height: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const Home = () => (
  <div>
    {/* <Header> */}
    <BackgroundHome>
      <Navbar />
      <h1>La Perla di Isola Bella</h1>
    </BackgroundHome>
    {/* </Header> */}
    <Footer />
  </div>
);

export default Home;
