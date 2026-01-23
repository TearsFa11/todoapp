export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  isEditing?: boolean;
}

export interface AddTaskFormProps {
  onAddTask: (text: string) => void;
  isDarkTheme?: boolean;
}
