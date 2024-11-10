import React, { useState, type FC } from 'react';
import axios from 'axios';

type CommentCreateProps = {
    postId: string;
};

const CommentCreate: FC<CommentCreateProps> = ({ postId }) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        await axios.post(`http://localhost:3000/api/comments/${postId}`, {
            content,
        });

        setContent('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input value={content} onChange={(e) => setContent(e.target.value)} className="form-control" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default CommentCreate;
