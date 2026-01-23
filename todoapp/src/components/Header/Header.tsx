import React from 'react';
import 'styled-components';
import Flex from '../Flex';
import { Container, ThemeToggleButton, Tittle, Toolbar } from './HeaderStyledComponents.ts';
import Sun from '../../assets/sun.svg';
import Moon from '../../assets/moon.svg';
import type { ThemeProps } from '../../theme.ts';

interface HeaderProps extends ThemeProps {
  onToggleTheme?: () => void; // сделай опциональным, если не всегда передается
  isDarkTheme?: boolean; // сделай опциональным
}

const Header: React.FC<HeaderProps> = ({
  onToggleTheme,
  isDarkTheme = true, // значение по умолчанию
  $darkTheme = true, // значение по умолчанию для стилей
}) => {
  return (
    <Flex justify="center" align="center">
      <Container $darkTheme={isDarkTheme}>
        <Toolbar>
          <Flex justify="center" align="center">
            <Tittle>ToDoApp</Tittle>
            {onToggleTheme && (
              <ThemeToggleButton
                onClick={onToggleTheme}
                $darkTheme={isDarkTheme}
                title={$darkTheme ? 'Переключить на светлую тему' : 'Переключить на темную тему'}>
                {isDarkTheme ? (
                  <>
                    <img src={Sun} alt="Save" width={24} height={24} />
                  </>
                ) : (
                  <>
                    <img src={Moon} alt="Save" width={24} height={24} />
                  </>
                )}
              </ThemeToggleButton>
            )}
          </Flex>
        </Toolbar>
      </Container>
    </Flex>
  );
};

export default Header;
