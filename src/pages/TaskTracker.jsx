import React, { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

function TaskTracker() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h2>Task Tracker</h2>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default TaskTracker;
