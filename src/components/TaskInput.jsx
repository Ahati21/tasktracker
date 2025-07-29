import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text, dueDate);
      setText("");
      setDueDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
