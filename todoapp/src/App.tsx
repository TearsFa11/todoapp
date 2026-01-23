import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Container, CssBaseline } from '@mui/material';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import { darkTheme, lightTheme, type ThemeProps } from './theme';
import type { Task } from './components/TaskList/task.type';

const AppWrapper = styled.div<ThemeProps>`
  width: 100%;
  padding: 30px;
  min-height: 100vh;
  background-color: ${({ $darkTheme }) =>
    $darkTheme ? darkTheme.colors.background : lightTheme.colors.background};
  transition: all 0.5s ease;
`;
function App() {
  const [tasks, setTasks] = React.useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Состояние для темы
  const [isDarkTheme, setIsDarkTheme] = React.useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : true; // по умолчанию темная
  });

  // Сохраняем тему в localStorage
  React.useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  // Функция переключения темы
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Выбираем текущую тему
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text: text,
      completed: false,
      createdAt: new Date(),
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  };

  const editTask = (id: string, newText: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              text: newText,
              isEditing: !task.isEditing, // переключаем режим редактирования
            }
          : task,
      ),
    );
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <AppWrapper $darkTheme={isDarkTheme}>
        <CssBaseline />
        <Header onToggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />

        <Container maxWidth="lg" sx={{ mt: 10 }}>
          <TaskList
            tasks={tasks}
            onDeleteTask={deleteTask}
            onToggleTask={toggleTask}
            onEditTask={editTask}
            isDarkTheme={isDarkTheme}
            onAddTask={addTask}
          />
        </Container>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
