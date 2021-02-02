import React, { useState } from "react";
import "./Todo.css";

function Task({ task }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
    </div>
  );
}
function Todo() {
  const [tasks, setTasks] = useState([
    {
      title: "Walk the dog",
      completed: true,
    },
    {
      title: "Yoga practice",
      completed: true,
    },
    {
      title: "Practice Spanish",
      completed: false,
    },
  ]);
  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
