import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

type Post = {
    id: string;
    post: {
        id: string;
        title: string;
    };
    comments: {
        id: string;
        content: string;
        postId: string;
    }[];
};

const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:3000/api/query/posts');

        setPosts(res.data.posts);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    if (posts.length === 0) {
        return <div>Loading...</div>;
    }

    const renderedPosts = posts.map((post) => {
        return (
            <div className="card" style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
                <div className="card-body">
                    <h3>{post.post.title}</h3>
                    <CommentList postId={post.id} comments={post.comments} />
                    <CommentCreate postId={post.id} />
                </div>
            </div>
        );
    });

    return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>;
};

export default PostList;
