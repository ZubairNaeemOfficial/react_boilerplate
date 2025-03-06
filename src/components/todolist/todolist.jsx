import React, { useState, useEffect } from "react";
import TodoItem from "./todoitems";
import AddTask from "./addtask";

const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
function handleStorage() {
    localStorage.setItem("tasks",JSON.stringify( tasks));
   }
   useEffect(() => {
    handleStorage();
}, [tasks]);


  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2> To-Do List</h2>
      <AddTask onAdd={addTask} />
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <TodoItem key={index} task={task} onDelete={()=> deleteTask(index)} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
