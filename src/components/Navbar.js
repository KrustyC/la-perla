import React from 'react';
import styled from 'styled-components';
import ItalySvg from '../assets/icons/flags/italy.svg';
import UkSvg from '../assets/icons/flags/united-kingdom.svg';
import Link from './Link';

import links from '../utils/links';

const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 130px;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 50px;

  > *:not(:last-child) {
    margin-right: 100px;
  }
`;

const Icon = styled.div`
  margin: 0;
  cursor: pointer;
  svg {
    width: 50px;
    height: 30px;
  }
  &:not(:last-of-type) {
    margin-right: 0px;
  }
`;

const Navbar = () => (
  <Nav>
    {links.navbarLinks.map(({ label, to }) => (
      <Link to={to}>{label}</Link>
    ))}
    <Icon>
      <ItalySvg />
    </Icon>
    <Icon>
      <UkSvg />
    </Icon>
  </Nav>
);

export default Navbar;
