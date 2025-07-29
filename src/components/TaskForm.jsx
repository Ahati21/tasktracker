import React, { useState } from "react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) return;
    onAdd({ title, dueDate, done: false });
    setTitle("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Task name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
