import styled from 'styled-components';
import media from 'styled-media-query';

const P = styled.p`
  color: #949494;
  font-size: 20px;
  font-weight: 600;

  ${media.lessThan('large')`
    padding: 0 30px;
  `}
`;

export default P;
