import React from 'react';
import media from 'styled-media-query';
import styled from 'styled-components';
import Link from '../Link';
import links from '../../utils/links';

const Container = styled.div`
  background: #000;
  padding: 100px;
  height: 50vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan('large')`
    height: 100%;
    padding: 50px 30px;
    align-items: flex-start;
  `}

  ${media.lessThan('small')`
    flex-direction: column;
  `}
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  height: 100%;

  ${media.greaterThan('large')`
    &:not(:last-of-type) {
      border-right: 3px solid #fff;
    }
  `}

  ${media.lessThan('small')`
    width: 100%;
    align-items: flex-start;
    &:not(:first-of-type) {
      border-top: 3px solid #fff;
      padding-top: 20px;
    }
  `}

  /* ${media.lessThan('large')`
    width: 100%;
  `} */
`;

const List = styled.ul`
  width: 80%;
  list-style: none;
  margin: 0;
`;

const Li = styled.li`
  padding: 0;
`;

const B = styled.b``;

const Info = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const Socials = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
`;

const Social = styled.li`
  padding: 0;
`;

const IconContainer = styled.a`
  text-decoration: none;
  margin: 1.5rem 0;
  svg {
    fill: white;
    width: 50px;
    height: 50px;

    ${media.lessThan('large')`
      width: 25px;
      height: 25px;
    `}
  }
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const Footer = () => (
  <Container>
    <Block>
      <List>
        {links.navbarLinks.map(({ label, to }) => (
          <Li key={to}>
            <Link to={to}>{label}</Link>
          </Li>
        ))}
      </List>
    </Block>
    <Block>
      <List>
        {links.footerLinks.map(({ label, to }) => (
          <Li key={to}>
            <Link to={to}>{label}</Link>
          </Li>
        ))}
      </List>
    </Block>
    <Block>
      <Info>
        <B css="text-transform: uppercase;">Contact</B>
        <br />
        <B>+39 387 6542411</B>
        <B>marco@villettetaormina.com</B>
        <br />
        <Socials>
          {links.socialLinks.map(({ url, icon: Icon }) => (
            <IconContainer key={url} href={url}>
              <Icon />
            </IconContainer>
          ))}
          <Social />
        </Socials>
      </Info>
    </Block>
  </Container>
);

export default Footer;
