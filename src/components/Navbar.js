import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Translation } from 'react-i18next';
import ItalySvg from '../assets/icons/flags/italy.svg';
import UkSvg from '../assets/icons/flags/united-kingdom.svg';
import links from '../utils/links';
import Link from './Link';
import Burger from './Burger';

const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  /* width: 100vw; */
  height: 130px;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 50px;

  ${media.lessThan('large')`
    padding: 0 30px;
    justify-content: flex-end;
  `}

  > *:not(:last-child) {
    margin-right: 100px;
  }
`;

const List = styled.span`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  align-items: center;
  ${media.lessThan('large')`
    display: none;
  `}

  a {
    &:not(:last-of-type) {
      margin-right: 40px;
    }
  }
`;

const Icon = styled.div`
  margin: 0;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
  }

  &:first-of-type {
    margin-right: 10px;
  }

  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;

const Flags = styled.div`
  display: flex;
`;

const Navbar = () => (
  <Nav>
    <List>
      {links.navbarLinks.map(({ label, to }) => (
        <Link key={to} to={to}>
          {label}
        </Link>
      ))}
    </List>
    <Burger />
    <Flags>
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
    </Flags>
  </Nav>
);

export default Navbar;
