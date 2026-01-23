import styled from 'styled-components';

import { darkTheme, lightTheme, type ThemeProps } from '../../theme';

export const TaskListUl = styled.ul`
  width: 100%;
  list-style: none;
`;

export const Filters = styled.div<{ $darkTheme?: boolean }>`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

export const AddingGroup = styled.div<ThemeProps>`
  margin: 10px 10px 0;
  padding: 10px;
`;

export const AddTaskButton = styled.button<ThemeProps>`
  padding: 10px;
  background: ${({ $darkTheme }) =>
    $darkTheme ? darkTheme.colors.primary : lightTheme.colors.primary};
  border: 3px solid
    ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary)};
  border-radius: 10px;
  color: ${({ $darkTheme }) => ($darkTheme ? 'black' : 'white')};

  margin: 10px;
  transition: 0.3s ease-in-out;

  &::task.completed {
    opacity: 0.7;
    background-color: ${({ $darkTheme }) =>
      $darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary};
  }

  &:hover {
    transition: 0.3s ease-in-out;
    background-color: ${({ $darkTheme }) =>
      $darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary};
    border-color: ${({ $darkTheme }) =>
      $darkTheme ? darkTheme.colors.text : lightTheme.colors.text};
  }
`;

export const StyledInput = styled.input<ThemeProps>`
  transition: all 0.5s ease-in-out;
  padding: 15px;
  border: 3px solid
    ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary)};
  border-radius: 15px;
  background-color: ${({ $darkTheme }) =>
    $darkTheme ? darkTheme.colors.accent : lightTheme.colors.accent};
  color: ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.text : lightTheme.colors.text)};
  width: 600px;

  &::placeholder {
    color: ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.text : lightTheme.colors.text)};
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  &:focus::placeholder {
    opacity: 0.4;
    transition: opacity 0.5s ease;
  }

  &:focus {
    transition: all 0.5s ease-in-out;
    outline: none;
    border-color: ${({ $darkTheme }) =>
      $darkTheme ? darkTheme.colors.text : lightTheme.colors.text};
    box-shadow: 0 0 20px 3px
      ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.accent : lightTheme.colors.accent)};
  }
`;

export const FilterSpan = styled.span<ThemeProps>`
  margin-right: 5px;
  color: ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.text : lightTheme.colors.text)};
  padding: 10px;
`;

export const FilterButton = styled.button<{
  $active: boolean;
  $darkTheme?: boolean;
}>`
  padding: 10px 20px;
  border: none;
  background: transparent;
  color: ${({ $active, $darkTheme }) =>
    $active
      ? $darkTheme
        ? darkTheme.colors.text
        : lightTheme.colors.text
      : $darkTheme
        ? darkTheme.colors.primary
        : lightTheme.colors.primary};
  border-bottom: 3px solid
    ${({ $active, $darkTheme }) =>
      $active ? ($darkTheme ? darkTheme.colors.text : lightTheme.colors.text) : 'transparent'};
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.5s ease;
  position: relative;

  &:hover {
    color: ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.text : lightTheme.colors.text)};
  }
`;

export const SortSpan = styled.span<ThemeProps>`
  margin-right: 5px;
  color: ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.text : lightTheme.colors.text)};
  padding: 10px;
`;

export const Line = styled.hr<ThemeProps>`
  border-color: ${({ $darkTheme }) =>
    $darkTheme ? darkTheme.colors.text : lightTheme.colors.text};
  height: 2px;
  margin: 10px;
`;

export const Sort = styled.div<{ $darkTheme?: boolean }>`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

export const SortButton = styled.button<{
  $active: boolean;
  $darkTheme?: boolean;
}>`
  padding: 10px 20px;
  border: none;
  background: transparent;
  color: ${({ $active, $darkTheme }) =>
    $active
      ? $darkTheme
        ? darkTheme.colors.text
        : lightTheme.colors.text
      : $darkTheme
        ? darkTheme.colors.primary
        : lightTheme.colors.primary};
  border-bottom: 3px solid
    ${({ $active, $darkTheme }) =>
      $active ? ($darkTheme ? darkTheme.colors.text : lightTheme.colors.text) : 'transparent'};
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.5s ease;
  position: relative;

  &:hover {
    color: ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.text : lightTheme.colors.text)};
  }
`;

export const TaskInput = styled.input<ThemeProps>`
  transition: all 0.5s ease-in-out;
  margin: 10px;
  font-size: 32px;
  flex-grow: 1;
  padding: 10px 20px;
  padding: 10px;
  border: 3px solid
    ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.accent : lightTheme.colors.accent)};
  border-radius: 15px;
  background-color: ${({ $darkTheme }) =>
    $darkTheme ? darkTheme.colors.accent : lightTheme.colors.accent};
  color: ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.text : lightTheme.colors.text)};

  &:focus {
    transition: all 0.5s ease-in-out;
    outline: none;
    border-color: ${({ $darkTheme }) =>
      $darkTheme ? darkTheme.colors.text : lightTheme.colors.text};
    box-shadow: 0 0 20px 3px
      ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.accent : lightTheme.colors.accent)};
  }
`;

export const TaskText = styled.h1<ThemeProps>`
  padding-left: 20px;
  font-size: 32px;
  color: ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.text : lightTheme.colors.text)};
`;

export const ButtonGroup = styled.div`
  padding: 10px;
  margin: 10px;
`;

export const TaskButton = styled.button<ThemeProps>`
  padding: 3px;
  background: ${({ $darkTheme }) =>
    $darkTheme ? darkTheme.colors.accent : lightTheme.colors.accent};
  border: 3px solid
    ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary)};
  border-radius: 10px;

  margin: 10px;
  transition: 0.5s ease-in-out;

  &::task.completed {
    opacity: 0.7;
    background-color: ${({ $darkTheme }) =>
      $darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary};
  }

  &:hover {
    transition: 0.5s ease-in-out;
    background-color: ${({ $darkTheme }) =>
      $darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary};
    border-color: ${({ $darkTheme }) =>
      $darkTheme ? darkTheme.colors.text : lightTheme.colors.text};
  }
`;

export const Container = styled.div<ThemeProps>`
  width: 100%;
  min-width: 1600px;

  border: 3px solid;
  border-radius: 15px;
  border-color: ${({ $darkTheme }) =>
    $darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary};
  background-color: ${({ $darkTheme }) =>
    $darkTheme ? darkTheme.colors.primary : lightTheme.colors.primary};
  color: ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.text : lightTheme.colors.text)};

  padding: 10px;
`;

export const WrapperEmptyTasks = styled.div<ThemeProps>`
  border: 3px solid
    ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary)};
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
  min-height: 400px;
`;

export const EmptyTaskText = styled.h1<ThemeProps>`
  font-size: 30px;
`;

export const Tittle = styled.h1<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Hdd = styled.div<ThemeProps>`
  width: 100%;
  border: 3px solid
    ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary)};
  border-radius: 10px;

  padding: 10px;

  background-color: ${({ $darkTheme }) =>
    $darkTheme ? darkTheme.colors.accent : lightTheme.colors.accent};

  box-shadow: 0px 0px 50px 2px
    ${({ $darkTheme }) => ($darkTheme ? darkTheme.colors.secondary : lightTheme.colors.secondary)};
`;
