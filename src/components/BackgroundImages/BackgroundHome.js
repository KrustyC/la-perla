import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import StyledBackgroundImage from './_StyledBackgroundImage';

const BackgroundHome = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "home.jpg" }) {
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

BackgroundHome.propTypes = {
  children: PropTypes.any,
};

BackgroundHome.defaultProps = {
  children: null,
};

export default BackgroundHome;
