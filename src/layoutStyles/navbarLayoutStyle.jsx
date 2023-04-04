import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: #000;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #94c7fd;
  }
`;

export const NavbarInfo = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 0 50px;

  div {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      color: #0077ff;
    }
  }
`;