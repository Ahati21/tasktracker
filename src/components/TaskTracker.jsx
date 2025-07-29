import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./TaskTracker.css";

function TaskTracker() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks"));
    if (stored) setTasks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task Tracker</h2>
      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onEdit={updateTask}
        onDelete={deleteTask}
        onToggle={toggleDone}
      />
    </div>
  );
}

export default TaskTracker;
