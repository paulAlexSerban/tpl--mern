import { FC } from 'react';
import { Task } from '../types.d';
import { useEditTask, useDeleteTask } from '../hooks/reactQueryHooks';

export type SingleItemProps = {
    item: Task;
};

const SingleItem: FC<SingleItemProps> = ({ item }) => {
    const { editTask, isPending: editTaskPending } = useEditTask();
    const { deleteTask, isPending: deleteTaskPending } = useDeleteTask();

    const handleEdit = () => {
        editTask({ taskId: item.id, isDone: !item.isDone });
    };

    const handleDelete = () => {
        deleteTask(item.id);
    };

    return (
        <div className="single-item">
            <input type="checkbox" checked={item.isDone} onChange={handleEdit} disabled={editTaskPending} />
            <p
                style={{
                    textTransform: 'capitalize',
                    textDecoration: item.isDone ? 'line-through' : 'none',
                }}
            >
                {item.title}
            </p>
            <button className="btn remove-btn" type="button" onClick={handleDelete}>
                {deleteTaskPending ? 'Deleting...' : 'Delete'}
            </button>
        </div>
    );
};
export default SingleItem;
