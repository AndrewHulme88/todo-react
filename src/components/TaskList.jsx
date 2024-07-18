import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onDelete={() => onDelete(index)}
            onToggle={() => onToggle(index)}
          />
        ))}
      </ul>
    </div>
  );
};
export default TaskList;
