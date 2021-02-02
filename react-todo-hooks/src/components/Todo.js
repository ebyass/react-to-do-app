import React, { useState } from "react";
import "./Todo.css";
import CreateTask from "../Components/CreateTask"

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
	
	const addTask = title => {
		const newTasks = [ ...tasks, { title, completed: false}]
		setTasks(newTasks)
	}

  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div className="tasks">
        {tasks.map((task, index) => (
					<Task 
					task={task} 
					index={index} 
					key={index} />
        ))}
      </div>
			<div className="create-task">
				<CreateTask addTask={addTask} />
			</div>
    </div>
  );
}

export default Todo;
