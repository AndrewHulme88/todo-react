import React from "react";

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <li className="list-group-item d-flex align-items-center">
      <label className="me-2">
        <input
          type="checkbox"
          className="form-check-input"
          checked={task.completed}
          onChange={onToggle}
        />
      </label>
      <span>{task.text}</span>
      <button className="btn btn-sm btn-danger ms-auto" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};
export default TaskItem;
