import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  color: #fff;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;

  &:visited,
  &:focus {
    color: #fff;
  }
  &:hover {
    color: #fff;
  }
`;

export default StyledLink;
