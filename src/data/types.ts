export type TodoItem = {
	id: string;
	title: string;
	completed: boolean;
};

export type TodoFormProps = {
	input: string;
	setInput: (value: string) => void;
	todos: TodoItem[];
	setTodos: (value: TodoItem[]) => void;
	editTodo: TodoItem | null;
	setEditTodo: (value: TodoItem | null) => void;
};

export type TodoListProps = {
	todos: TodoItem[];
	setTodos: (value: TodoItem[]) => void;
	setEditTodo: (value: TodoItem) => void;
};
