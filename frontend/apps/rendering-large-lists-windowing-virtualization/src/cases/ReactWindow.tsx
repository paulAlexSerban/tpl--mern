import type { FC } from 'react';
import { type Data } from './Data.type';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

const ReactWindow: FC<{ data: Data }> = ({ data }) => {
    // Define Row component matching the expected type
    const Row: FC<ListChildComponentProps> = ({ index, style }) => {
        const newStyle = {
            ...style,
            border: '1px solid black',
            padding: '1rem',
        };
        return (
            <div key={index} style={newStyle} className="post">
                <h3>{`${data[index].title}-${data[index].id}`}</h3>
                <p>{data[index].body}</p>
            </div>
        );
    };

    return (
        <List width={1400} height={700} itemCount={data.length} itemSize={220}>
            {Row}
        </List>
    );
};

export default ReactWindow;
