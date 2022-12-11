import { FormEvent, useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { TodoFormProps, TodoItem } from '../data/types';

export default function Form(props: TodoFormProps) {
	const { input, setInput, todos, setTodos, editTodo, setEditTodo } = props;

	useEffect(() => {
		if (editTodo) {
			setInput(editTodo.title);
		}
	}, [editTodo]);

	function updateTodo(item: TodoItem) {
		const newTodo = todos.map((todo) => {
			return todo.id === item.id ? (todo = item) : todo;
		});

		setTodos(newTodo);
		setEditTodo(null);
		setInput('');
	}

	function submitHandler(event: FormEvent) {
		event.preventDefault();
		if (!editTodo) {
			setTodos([...todos, { id: uuidV4(), title: input, completed: false }]);
			setInput('');
		} else {
			updateTodo({ id: editTodo.id, title: input, completed: editTodo.completed });
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<input
				className='task-input'
				type='text'
				name='todo'
				id='todo'
				placeholder='Enter a Todo...'
				value={input}
				onChange={(event) => setInput(event.target.value)}
				required
			/>
			<button
				className='button-add'
				type='submit'>
				{editTodo ? 'Ok' : 'Add'}
			</button>
		</form>
	);
}
