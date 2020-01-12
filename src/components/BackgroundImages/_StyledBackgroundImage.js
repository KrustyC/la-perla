import styled, { css } from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 85vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  ${({ fluid }) =>
    fluid &&
    css`
      &::before {
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1),
            rgba(117, 19, 93, 0),
            rgba(117, 19, 93, 0),
            rgba(117, 19, 93, 0)
          ),
          url(${fluid.srcWebp}) !important;
      }
    `}

  h1 {
    font-size: 100px;
    color: #fff;
    margin-left: 60px;
    margin-bottom: -20px;
  }
`;

export default StyledBackgroundImage;
