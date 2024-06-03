import SingleItem, { SingleItemProps } from './SingleItem';
import { useFetchTasks } from '../hooks/reactQueryHooks';

const Items = () => {
    const { isPending, isError, data } = useFetchTasks();

    if (isPending) {
        return <p style={{ marginTop: '1rem ' }}>Loading...</p>;
    }
    if (isError) {
        return <p style={{ marginTop: '1rem ' }}>There was an error...</p>;
    }

    console.log(data);

    return (
        <div className="items">
            {data?.taskList.map((item: SingleItemProps['item']) => {
                return <SingleItem key={item.id} item={item} />;
            })}
        </div>
    );
};
export default Items;
