import React, { useState, useEffect } from "react";

const TaskForm = ({ onAdd, onEdit, isEditing, task }) => {
  const [taskText, setTaskText] = useState(task.text || "");
  const [taskDueDate, setTaskDueDate] = useState(task.dueDate || "");
  const [taskPriority, setTaskPriority] = useState(task.priority || "medium");

  useEffect(() => {
    if (isEditing) {
      setTaskText(task.text);
      setTaskDueDate(task.dueDate);
      setTaskPriority(task.priority);
    }
  }, [isEditing, task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      const newTask = {
        text: taskText,
        dueDate: taskDueDate,
        priority: taskPriority,
        completed: false
      };
      if (isEditing) {
        onEdit(task, newTask);
      } else {
        onAdd(newTask);
      }
      setTaskText("");
      setTaskDueDate("");
      setTaskPriority("medium");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add or edit a task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input
          type="date"
          className="form-control mt-2"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
        />
        <select
          className="form-control mt-2"
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        {isEditing ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TaskForm;
