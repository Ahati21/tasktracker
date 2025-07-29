import React, { useState } from "react";

function TaskItem({
  task,
  deleteTask,
  toggleComplete,
  startEdit,
  saveEdit,
  isEditing,
}) {
  const [editText, setEditText] = useState(task.text);

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: "1px solid #ccc",
      }}
    >
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{ flex: 1 }}
          />
          <button
            onClick={() => saveEdit(task.id, editText)}
            style={{ marginLeft: "10px" }}
          >
            💾
          </button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(task.id)}
            style={{
              flex: 1,
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
              color: task.completed ? "gray" : "black",
            }}
          >
            {task.text}
          </span>
          <button
            onClick={() => startEdit(task.id)}
            style={{ marginRight: "5px" }}
          >
            ✏️
          </button>
          <button onClick={() => deleteTask(task.id)}>🗑️</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
