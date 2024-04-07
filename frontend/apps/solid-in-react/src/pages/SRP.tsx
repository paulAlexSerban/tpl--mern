import { useState, useEffect, FC } from 'react';
import axios from 'axios';

type TodoItemProps = {
    id: number;
    title: string;
};

function useTodos() {
    const [todos, setTodos] = useState<TodoItemProps[]>([]);

    useEffect(() => {
        async function getTodos() {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
            const firstTen = data.slice(0, 10);
            setTodos(firstTen);
        }
        getTodos();
    }, []);

    return todos;
}

const TodoItem: FC<TodoItemProps> = ({ id, title }) => {
    return <li>{`ID: ${id}, Title: ${title}`}</li>;
};

const TodosPage = () => {
    const todos = useTodos();

    const renderTodos = () => {
        return todos.map((todo) => {
            return <TodoItem id={todo.id} title={todo.title} />;
        });
    };

    return (
        <div>
            <h1>My Todos:</h1>
            <ul>{renderTodos()}</ul>
        </div>
    );
};

export default TodosPage;

/**
 * Avoid over-fragmentation.
 *
 * These principles are here to help achieve at least one of the three main goals:
 *
 * Introduce desired functionality for our use case.
 * Make our code more maintainable by making it easier to read, more extensible, etc.
 * Increase the robustness of our code by increasing its testability, or adding better error handling.
 *
 * When dogmatically following a principle becomes counterproductive to these aims, it might be time to take a step back.
 *
 * React practice: Use a combination of separate components and custom hooks to modularise larger components.
 */
