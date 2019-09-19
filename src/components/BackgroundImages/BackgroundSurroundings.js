import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

import StyledBackgroundImage from './_StyledBackgroundImage';

const BackgroundSurroundings = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "surroundings.jpg" }) {
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

BackgroundSurroundings.propTypes = {
  children: PropTypes.any,
};

BackgroundSurroundings.defaultProps = {
  children: null,
};

export default BackgroundSurroundings;
