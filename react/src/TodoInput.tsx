import React, { useState } from "react";

interface TodoInputProps {
  onAdd: (task: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    onAdd(value.trim());
    setValue("");
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add a new task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TodoInput;
