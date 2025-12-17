import React from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

interface TodoItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  onDelete,
  onToggle,
}) => {
  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <label className="todo-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.text}</span>
      </label>

      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
