import { useEffect, useState } from 'react';
import Form from './components/todo-form';
import Header from './components/header';
import TodoList from './components/todo-list';
import { TodoItem } from './data/types';

function App() {
	const initialState = setInitialState();
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState<TodoItem[]>(initialState);
	const [editTodo, setEditTodo] = useState<null | TodoItem>(null);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	});

	function setInitialState() {
		const storageData = localStorage.getItem('todos');
		return storageData ? JSON.parse(storageData) : [];
	}

	return (
		<div className='container'>
			<div className='app-wrapper'>
				<div>
					<Header />
				</div>
				<div>
					<Form
						input={input}
						setInput={setInput}
						todos={todos}
						setTodos={setTodos}
						editTodo={editTodo}
						setEditTodo={setEditTodo}
					/>
				</div>
				<div>
					<TodoList
						todos={todos}
						setTodos={setTodos}
						setEditTodo={setEditTodo}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
