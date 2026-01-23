import React from 'react';
import Flex from '../Flex/index.tsx';
import {
  Container,
  Hdd,
  TaskButton,
  TaskListUl,
  TaskText,
  Tittle,
  WrapperEmptyTasks,
  ButtonGroup,
  EmptyTaskText,
  TaskInput,
  SortSpan,
  SortButton,
  Line,
  Filters,
  FilterButton,
  Sort,
  FilterSpan,
  AddTaskButton,
  AddingGroup,
  StyledInput,
} from './TaskListStyledComponents.ts';
import Cross from '../../assets/cross.svg';
import Done from '../../assets/done.svg';
import Empty from '../../assets/empty.svg';
import Edit from '../../assets/edit.svg';
import Save from '../../assets/save.svg';
import Plus from '../../assets/plus.svg';
import { darkTheme } from '../../theme.ts';
import type { Task } from './task.type.ts';

type FilterType = 'all' | 'active' | 'completed';
type SortType = 'newest' | 'oldest';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onToggleTask: (id: string) => void;
  onEditTask: (id: string, newText: string) => void;
  onAddTask: (text: string) => void;
  isDarkTheme?: boolean;
  $darkTheme?: boolean;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDeleteTask,
  onToggleTask,
  onEditTask,
  onAddTask,
  isDarkTheme = true,
}) => {
  const [editTexts, setEditTexts] = React.useState<{ [key: string]: string }>({});
  const [filter, setFilter] = React.useState<FilterType>('all');
  const [sortBy, setSortBy] = React.useState<SortType>('newest');
  const [inputValue, setInputValue] = React.useState('');
  const [adding, setAdding] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      alert('Введите текст задачи!');
      return;
    }

    // Вызываем функцию из пропсов для добавления задачи
    onAddTask(inputValue.trim());

    // Очищаем поле ввода
    setInputValue('');
  };

  const filteredAndSortedTasks = React.useMemo(() => {
    //Фильтрация выполненых / не выполненых / всех
    let result = tasks.filter((task) => {
      if (filter === 'active') return !task.completed;
      if (filter === 'completed') return task.completed;
      return true;
    });

    //Сортировка новые / старые
    return result.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [tasks, filter, sortBy]);

  // Функция для начала редактирования
  const startEditing = (task: Task) => {
    setEditTexts({
      ...editTexts,
      [task.id]: task.text,
    });
    // Включаем режим редактирования для задачи
    onEditTask(task.id, task.text);
  };

  // Функция для сохранения изменений
  const saveEdit = (taskId: string) => {
    const newText = editTexts[taskId]?.trim();
    if (newText && newText !== '') {
      onEditTask(taskId, newText);
    }
    if (newText === '') {
      alert('Введите текст задачи');
    }
    // Убираем текст из временного хранилища
    const newEditTexts = { ...editTexts };
    delete newEditTexts[taskId];
    setEditTexts(newEditTexts);
  };

  // Функция для отмены редактирования
  const cancelEdit = (taskId: string) => {
    const newEditTexts = { ...editTexts };
    delete newEditTexts[taskId];
    setEditTexts(newEditTexts);
    onEditTask(taskId, tasks.find((t) => t.id === taskId)?.text || '');
  };

  // Обработчик изменения текста в поле редактирования
  const handleEditChange = (taskId: string, value: string) => {
    setEditTexts({
      ...editTexts,
      [taskId]: value,
    });
  };

  const handleEditKeyDown = (taskId: string, e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      saveEdit(taskId);
    } else if (e.key === 'Escape') {
      cancelEdit(taskId);
    }
  };

  return (
    <Flex justify="center" align="center">
      <Container $darkTheme={isDarkTheme}>
        <Flex justify="center" align="center">
          <Hdd $darkTheme={isDarkTheme}>
            <Tittle $darkTheme={isDarkTheme}>Ваш список задач</Tittle>
            <Line $darkTheme={isDarkTheme} />
            <Flex justify="space-between" align="center">
              <Flex align="center" justify="flex-start">
                <Filters $darkTheme={isDarkTheme}>
                  <FilterSpan $darkTheme={isDarkTheme}>Фильтрация:</FilterSpan>
                  <FilterButton
                    $active={filter === 'all'}
                    onClick={() => setFilter('all')}
                    $darkTheme={isDarkTheme}>
                    Все
                  </FilterButton>
                  <FilterButton
                    $active={filter === 'active'}
                    onClick={() => setFilter('active')}
                    $darkTheme={isDarkTheme}>
                    Активные
                  </FilterButton>
                  <FilterButton
                    $active={filter === 'completed'}
                    onClick={() => setFilter('completed')}
                    $darkTheme={isDarkTheme}>
                    Выполненные
                  </FilterButton>
                </Filters>
              </Flex>
              <Flex align="center" justify="flex-end">
                <Sort $darkTheme={isDarkTheme}>
                  <SortSpan $darkTheme={isDarkTheme}>Сортировка:</SortSpan>
                  <SortButton
                    $active={sortBy === 'newest'}
                    $darkTheme={isDarkTheme}
                    onClick={() => setSortBy('newest')}>
                    Новые
                  </SortButton>
                  <SortButton
                    $active={sortBy === 'oldest'}
                    $darkTheme={isDarkTheme}
                    onClick={() => setSortBy('oldest')}>
                    Старые
                  </SortButton>
                </Sort>
                <AddTaskButton $darkTheme={isDarkTheme} onClick={() => setAdding(!adding)}>
                  <img src={Plus} alt="Добавить задачу" width={20} height={20} />
                </AddTaskButton>
              </Flex>
            </Flex>
          </Hdd>
        </Flex>
        {adding ? (
          <form id="form" onSubmit={handleSubmit}>
            <Flex align="center" justify="center">
              <AddingGroup>
                <Flex direction="row" align="center">
                  <StyledInput
                    $darkTheme={isDarkTheme}
                    type="text"
                    id="taskInput"
                    placeholder="Введите задачу"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    autoComplete="off"
                  />
                  <TaskButton
                    $darkTheme={isDarkTheme}
                    style={{ padding: '5px', margin: '0 30px 0', height: '40px' }}
                    onClick={() => handleSubmit}
                    type="submit">
                    Добавить
                  </TaskButton>
                </Flex>
              </AddingGroup>
            </Flex>
          </form>
        ) : (
          ''
        )}

        {filteredAndSortedTasks.length === 0 ? (
          <WrapperEmptyTasks $darkTheme={isDarkTheme}>
            <Flex direction="column" align="center" justify="center">
              <img src={Empty} alt="Пусто" width="250" />
              <EmptyTaskText>Список задач пуст, добавьте задачу!</EmptyTaskText>
              <EmptyTaskText>Начните с малого </EmptyTaskText>
            </Flex>
          </WrapperEmptyTasks>
        ) : (
          <Flex align="center" justify="center" margin="10">
            <TaskListUl>
              {filteredAndSortedTasks.map((task) => {
                const isEditing = task.isEditing || false;

                return (
                  <li key={task.id}>
                    <Flex justify="space-between" align="center">
                      {isEditing ? (
                        // Режим редактирования
                        <TaskInput
                          $darkTheme={isDarkTheme}
                          type="text"
                          value={editTexts[task.id] || ''}
                          onChange={(e) => handleEditChange(task.id, e.target.value)}
                          onKeyDown={(e) => handleEditKeyDown(task.id, e)}
                          autoFocus
                        />
                      ) : (
                        <TaskText
                          $darkTheme={isDarkTheme}
                          style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            opacity: task.completed ? 0.6 : 1,
                          }}>
                          {task.text}
                        </TaskText>
                      )}
                      <ButtonGroup>
                        {isEditing ? (
                          <>
                            <TaskButton
                              type="button"
                              onClick={() => saveEdit(task.id)}
                              $darkTheme={isDarkTheme}>
                              <img src={Save} alt="Save" width={24} height={24} />
                            </TaskButton>
                            <TaskButton
                              type="button"
                              onClick={() => cancelEdit(task.id)}
                              $darkTheme={isDarkTheme}>
                              Отмена
                            </TaskButton>
                          </>
                        ) : (
                          <>
                            <TaskButton
                              type="button"
                              onClick={() => startEditing(task)}
                              $darkTheme={isDarkTheme}
                              disabled={task.completed}>
                              <img src={Edit} alt="Edit" width={24} height={24} />
                            </TaskButton>
                            <TaskButton
                              type="button"
                              onClick={() => onToggleTask(task.id)}
                              $darkTheme={isDarkTheme}
                              style={{
                                backgroundColor: task.completed
                                  ? darkTheme.colors.secondary
                                  : undefined,
                                borderColor: task.completed ? darkTheme.colors.text : undefined,
                              }}>
                              <img src={Done} alt="Done" width={32} height={32} />
                            </TaskButton>
                            <TaskButton
                              type="button"
                              onClick={() => onDeleteTask(task.id)}
                              $darkTheme={isDarkTheme}>
                              <img src={Cross} alt="Delete" width={32} height={32} />
                            </TaskButton>
                          </>
                        )}
                      </ButtonGroup>
                    </Flex>
                  </li>
                );
              })}
            </TaskListUl>
          </Flex>
        )}
      </Container>
    </Flex>
  );
};

export default TaskList;
