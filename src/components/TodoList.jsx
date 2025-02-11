import React, { useEffect, useState } from 'react';
import { TodoItem } from './TodoItem';
import { TaskService } from '../infrastructure/TaskService';

export const TodoList = ({
	todos,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	/* const service = new TaskService()
	const [task, setTask] = useState()
	useEffect(() => {
	  const getTasck = () => {
		service.getTask()
		.then(resp => setTask(resp))
	  }
	  getTasck()
	}, []) */
	
	return (
		<ul>
			{todos.map(todo => (
				<TodoItem
				key={todo.id}  // Usa todo.id, que es único
				todo={todo}
				handleUpdateTodo={handleUpdateTodo}
				handleDeleteTodo={handleDeleteTodo}
				handleCompleteTodo={handleCompleteTodo}
				/>
			))}
		</ul>
	);
};
