import React, { useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    if (!text.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  return (
    <div className="container">
      <h1 className="title">React TypeScript Todo App</h1>

      <TodoInput onAdd={addTask} />

      <div className="task-list">
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
