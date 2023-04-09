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
    color: #cfe0f2;
  }
`;

export const NavbarInfo = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  background-color: #878585;
  color: #fff;
  padding: 0 50px;
  margin-bottom: 2rem;
  transition: all 0.3s ease-in-out;
  z-index: 999;
  margin-bottom: 5rem;
  div {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    

    &:hover {
      color: #0077ff;
    }

    svg {
      margin-right: 10px;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: #514e4e54;
  }
`;