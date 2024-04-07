import { FC, useState, useEffect, FormEvent } from 'react';
import { getData } from '../util/http';
type LoginFormProps = {
    onSubmit: (email: string, password: string) => Promise<void>;
};

const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        await onSubmit(email, password);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Log in</button>
        </form>
    );
};

const api = {
    login: async (email: string, password: string) => {
        console.log('login', email, password);
    },
};

const ConnectedLoginForm = () => {
    const handleSubmit = async (email: string, password: string) => {
        await api.login(email, password);
    };
    return <LoginForm onSubmit={handleSubmit} />;
};

export const useTodos = () => {
    const [todos, setTodos] = useState<TodoItemProps[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const data = await getData<TodoItemProps[]>('https://jsonplaceholder.typicode.com/todos');
            if (data) {
                setTodos(data);
            }
        };
        fetchTodos();
    }, []);

    return todos;
};

export type TodoItemProps = {
    id: number;
    title: string;
};

const TodoItem: FC<TodoItemProps> = ({ id, title }) => {
    return <li>{`ID: ${id}, Title: ${title}`}</li>;
};

const TodosPage = () => {
    const todos = useTodos();

    const renderTodos = () => {
        return todos.map((todo, index) => {
            return <TodoItem key={index} id={todo.id} title={todo.title} />;
        });
    };

    return (
        <div>
            <h1>My Todos:</h1>
            <ul>{renderTodos()}</ul>
        </div>
    );
};

const DIP = () => {
    return (
        <>
            <div>
                <h2>login Form</h2>
                <ConnectedLoginForm />
            </div>
            <div>
                <h2>ToDo Page</h2>
                <TodosPage />
            </div>
        </>
    );
};

export default DIP;
