import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';

const ToggleButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text};
`;

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </ToggleButton>
  );
}

export default ThemeToggleButton;

