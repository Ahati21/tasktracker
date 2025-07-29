import React, { useState } from "react";

function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDate, setEditDate] = useState("");

  const startEdit = (index, task) => {
    setEditIndex(index);
    setEditTitle(task.title);
    setEditDate(task.dueDate);
  };

  const saveEdit = (index) => {
    onEdit(index, {
      title: editTitle,
      dueDate: editDate,
      done: tasks[index].done,
    });
    setEditIndex(null);
  };

  return (
    <table
      border="1"
      style={{ margin: "0 auto", width: "90%", borderCollapse: "collapse" }}
    >
      <thead>
        <tr style={{ backgroundColor: "#007bff", color: "white" }}>
          <th style={{ padding: "12px 15px" }}>Task</th>
          <th style={{ padding: "12px 15px" }}>Due Date</th>
          <th style={{ padding: "12px 15px" }}>Status</th>
          <th style={{ padding: "12px 15px" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, i) => (
          <tr
            key={i}
            style={{
              backgroundColor: i % 2 === 0 ? "#f2f2f2" : "white",
              textAlign: "center",
            }}
          >
            <td style={{ padding: "8px" }}>
              {editIndex === i ? (
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  style={{ padding: "6px" }}
                />
              ) : (
                <span
                  style={{
                    textDecoration: task.done ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </span>
              )}
            </td>
            <td style={{ padding: "8px" }}>
              {editIndex === i ? (
                <input
                  type="date"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                  style={{ padding: "6px" }}
                />
              ) : (
                task.dueDate
              )}
            </td>
            <td style={{ padding: "8px" }}>
              {task.done ? "✅ Done" : "❌ Not done"}
            </td>
            <td style={{ padding: "8px" }}>
              <button
                onClick={() => onToggle(i)}
                style={{ marginRight: "5px" }}
              >
                ✔️ Toggle
              </button>
              {editIndex === i ? (
                <button
                  onClick={() => saveEdit(i)}
                  style={{ marginRight: "5px" }}
                >
                  💾 Save
                </button>
              ) : (
                <button
                  onClick={() => startEdit(i, task)}
                  style={{ marginRight: "5px" }}
                >
                  ✏️ Edit
                </button>
              )}
              <button onClick={() => onDelete(i)}>🗑️ Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
