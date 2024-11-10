import { type FC } from 'react';

type Comment = {
    id: string;
    content: string;
    postId: string;
    status: string;
};

type CommentListProps = {
    postId: string;
    comments: Comment[];
};

const CommentList: FC<CommentListProps> = ({ comments }) => {
    const renderedComments = comments.map((comment) => {
        let { content, status } = comment;
        if (status === 'rejected') {
            content = 'This comment has been rejected';
        }
        if (status === 'pending') {
            content = 'This comment is awaiting moderation';
        }

        return (
            <li key={comment.id}>
                <p>{content}</p>
            </li>
        );
    });

    return <ul>{renderedComments}</ul>;
};

export default CommentList;
