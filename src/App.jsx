import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (isEditing) {
      const updatedTasks = tasks.map((t, index) =>
        index === editTaskId ? task : t
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditTaskId(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const setTaskToEdit = (index) => {
    setIsEditing(true);
    setEditTaskId(index);
  };

  const filterTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <div className="container">
      <h1>My Task Planner</h1>
      <TaskForm
        onAdd={addTask}
        onEdit={addTask}
        isEditing={isEditing}
        task={isEditing ? tasks[editTaskId] : {}}
      />
      <div className="filter-bar">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={clearCompleted} className="btn btn-danger ms-2">
          Clear Completed
        </button>
      </div>
      <TaskList
        tasks={filterTasks()}
        onDelete={deleteTask}
        onToggle={toggleTask}
        onEdit={setTaskToEdit}
      />
    </div>
  );
};

export default App;
