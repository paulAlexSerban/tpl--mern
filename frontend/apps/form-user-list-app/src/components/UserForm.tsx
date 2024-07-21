import React, { useState, FC } from 'react';
import { User } from '../types.d';

type UserFormProps = {
    onUserAdd: (user: User) => void;
};

const UserForm: FC<UserFormProps> = ({ onUserAdd }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        onUserAdd({ name, email });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Names</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button>Add User</button>
        </form>
    );
};

export default UserForm;
