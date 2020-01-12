import React from 'react';
import styled from 'styled-components';
import { Translation } from 'react-i18next';
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

  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;

const Navbar = () => (
  <Nav>
    {links.navbarLinks.map(({ label, to }) => (
      <Link key={to} to={to}>
        {label}
      </Link>
    ))}
    <Translation>
      {(_, { i18n }) => (
        <>
          <Icon active={i18n.language === 'it'}>
            <ItalySvg onClick={() => i18n.changeLanguage('it')} />
          </Icon>
          <Icon active={i18n.language === 'en'}>
            <UkSvg onClick={() => i18n.changeLanguage('en')} />
          </Icon>
        </>
      )}
    </Translation>
  </Nav>
);

export default Navbar;
