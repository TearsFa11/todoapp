import styled from 'styled-components';
import { darkTheme, lightTheme, type ThemeProps } from '../../theme';

export const Container = styled.div<ThemeProps>`
  width: 80%;
  background-color: ${({ $darkTheme }) =>
    $darkTheme ? darkTheme.colors.primary : lightTheme.colors.primary};
  color: ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.text : lightTheme.colors.text)};
  border: 3px solid;
  border-radius: 15px;
  border-color: ${({ $darkTheme }) =>
    $darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary};
  box-shadow: 0px 0px 15px 2px
    ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary)};
  transition: all 0.5s easy;
`;

export const Toolbar = styled.div<ThemeProps>`
  width: 100%;
  padding: 15px;
`;

export const Tittle = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThemeToggleButton = styled.button<ThemeProps>`
  background-color: ${({ $darkTheme }) =>
    $darkTheme ? darkTheme.colors.accent : lightTheme.colors.accent};
  color: ${({ $darkTheme }) => ($darkTheme ? '#ffffff' : '#ffffff')};
  border: 2px solid
    ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary)};
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px
      ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.text : lightTheme.colors.text)};
  }

  &:active {
    transform: translateY(0);
  }
`;
