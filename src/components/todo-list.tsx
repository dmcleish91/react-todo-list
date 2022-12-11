import { AnimatePresence, motion } from 'framer-motion';
import { TodoItem, TodoListProps } from '../data/types';

export default function TodoList(props: TodoListProps) {
	const { todos, setTodos, setEditTodo } = props;

	function handleComplete(item: TodoItem) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === item.id) return { ...item, completed: !item.completed };
				return todo;
			})
		);
	}

	function handleDelete(item: TodoItem) {
		setTodos(todos.filter((todo) => todo.id !== item.id));
	}

	function handleEdit(item: TodoItem) {
		const findTodo = todos.find((todo) => todo.id === item.id);
		if (findTodo) setEditTodo(findTodo);
	}

	return (
		<AnimatePresence>
			<div>
				{todos.map((todo) => {
					return (
						<motion.li
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='list-item'
							key={todo.id}>
							<input
								type='text'
								name='todoItem'
								id='todoItem'
								className={`list ${todo.completed ? 'complete' : ''}`}
								value={todo.title}
								onChange={(event) => event.preventDefault()}
							/>
							<button
								className='button-complete task-button'
								onClick={() => handleComplete(todo)}>
								<i className='fa fa-check-circle'></i>
							</button>
							<button
								className='button-edit task-button'
								onClick={() => handleEdit(todo)}>
								<i className='fa fa-edit'></i>
							</button>
							<button
								className='button-delete task-button'
								onClick={() => handleDelete(todo)}>
								<i className='fa fa-trash'></i>
							</button>
						</motion.li>
					);
				})}
			</div>
		</AnimatePresence>
	);
}
