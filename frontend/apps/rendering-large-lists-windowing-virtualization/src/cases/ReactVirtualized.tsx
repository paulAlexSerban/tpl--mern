import type { FC } from 'react';
import { type Data, type RowData } from './Data.type';
import { List } from 'react-virtualized';
import 'react-virtualized/styles.css';

const ReactVirtualized: FC<{ data: Data }> = ({ data }) => {
    const renderRow = ({ index, key, style }: RowData) => {
        const newStyle = {
            ...style,
            border: '1px solid black',
            padding: '1rem',
        };

        return (
            <div key={key} style={newStyle} className="post">
                <h3>{`${data[index].title}-${data[index].id}`}</h3>
                <p>{data[index].body}</p>
            </div>
        );
    };
    return <List width={1200} height={1200} rowRenderer={renderRow} rowCount={data.length} rowHeight={220} />;
};

export default ReactVirtualized;
