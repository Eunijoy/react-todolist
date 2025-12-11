import React, { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";


const App: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="title">React TypeScript Todo App</h1>

      <TodoInput onAdd={addTask} />

      <div className="task-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
