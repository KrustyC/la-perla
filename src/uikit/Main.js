import styled from 'styled-components';
import media from 'styled-media-query';

const Main = styled.div`
  min-height: 50vh;
  background: #131313;
  color: #949494;

  > div {
    padding: 100px 0;
    margin: 0 auto;
    max-width: 768px;
    text-align: left;

    ${media.lessThan('large')`
      padding: 40px 0;
    `}
  }
`;

export default Main;
