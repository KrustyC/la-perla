import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import StyledBackgroundImage from './_StyledBackgroundImage';

const BackgroundContacts = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "contacts.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <StyledBackgroundImage
          Tag="section"
          fluid={imageData}
          backgroundColor="#040e18"
        >
          {children}
        </StyledBackgroundImage>
      );
    }}
  />
);

BackgroundContacts.propTypes = {
  children: PropTypes.any,
};

BackgroundContacts.defaultProps = {
  children: null,
};

export default BackgroundContacts;
