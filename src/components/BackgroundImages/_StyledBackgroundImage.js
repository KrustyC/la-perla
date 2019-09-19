import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  h1 {
    font-size: 100px;
    color: #fff;
    margin-left: 60px;
    margin-bottom: -20px;
  }
`;

export default StyledBackgroundImage;
