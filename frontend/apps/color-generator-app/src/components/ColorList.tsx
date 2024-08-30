import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

import { FC } from 'react';

type ColorListProps = {
    colors: { hex: string; weight: number }[];
};

const ColorList: FC<ColorListProps> = ({ colors }) => {
    return (
        <section className="colors">
            {colors.map((color, index) => {
                return <SingleColor key={nanoid()} color={color} index={index} />;
            })}
        </section>
    );
};
export default ColorList;
