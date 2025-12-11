import React from "react";

interface TodoItemProps {
  task: string;
  index: number;
  onDelete: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, index, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{task}</span>
      <button onClick={() => onDelete(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;
