import React, { useState } from "react";
import "./Todo.css";

function CreateTask({addTask}) {
	const [value, setValue] = useState("")
	//! using useState here, the component registers a state, value and a function for updating it (setValue)

	const handleSubmit = e => {
		e.preventDefault()
		if (!value) return 

		addTask(value)
		setValue("")
	}

	return (
		<form onSubmit={handleSubmit} >
			<input
			type="text"
			className="input"
			value={value}
			placeholder="Add New Task"
			onChange={e => setValue(e.target.value)}
			/>
		</form>
	)
}

export default CreateTask