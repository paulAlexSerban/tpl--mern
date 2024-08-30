import { useState, FormEvent, ChangeEvent } from 'react';
import { useCreateTask } from '../hooks/reactQueryHooks';

const Form = () => {
    const [newItemName, setNewItemName] = useState<string>('');
    const { isPending, createTask } = useCreateTask();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        createTask(
            { title: newItemName },
            {
                onSuccess: () => {
                    setNewItemName('');
                },
            }
        );
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewItemName(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>task bud</h4>
            <div className="form-control">
                <input type="text " className="form-input" value={newItemName} onChange={handleChange} />
                <button type="submit" className="btn" disabled={isPending}>
                    add task
                </button>
            </div>
        </form>
    );
};
export default Form;
