import React, { useState, useEffect } from "react";
import "./Todo.css";
import CreateTask from "../Components/CreateTask"
import Task from "../Components/Task"


function Todo() {

	const [tasksRemaining, setTasksRemaining] = useState(0)

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

	useEffect(() => {
		setTasksRemaining(tasks.filter(task => !task.completed).length)
	})
	
	const addTask = title => {
		const newTasks = [ ...tasks, { title, completed: false}]
		setTasks(newTasks)
	}

	const completeTask = index => {
		const newTasks = [...tasks];
		newTasks[index].completed = true;
		setTasks(newTasks);
};

	const removeTask = index => {
		const newTasks = [...tasks]
		newTasks.splice(index, 1)
		setTasks(newTasks)
	}

  return (
    <div className="todo-container">
      <div className="header">TO DO ({tasksRemaining})</div>
      <div className="tasks">
        {tasks.map((task, index) => (
					<Task 
					task={task} 
					index={index}
					completeTask={completeTask}
					removeTask={removeTask}
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
