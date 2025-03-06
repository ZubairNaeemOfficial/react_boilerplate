import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    console.log("Adding Task:", task); 

    onAdd(task); 
    setTask(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
