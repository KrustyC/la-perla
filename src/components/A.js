import styled from 'styled-components';

const A = styled.a`
  text-transform: uppercase;
  color: #fff;
  position: relative;
  display: inline-block;
  text-decoration: none;

  &:visited,
  &:focus {
    color: inherit;
  }
  &:hover {
    color: inherit;
  }
`;

export default A;
