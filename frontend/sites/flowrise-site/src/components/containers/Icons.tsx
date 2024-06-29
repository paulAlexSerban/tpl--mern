import { FC } from 'react';
import { memo } from 'react';
import SVGList from '../helpers/SVGList';

type IconsProps = {
    name: string;
};

const Icons: FC<IconsProps> = ({ name }) => {
    if (!SVGList[name]) {
        return SVGList.calendar();
    }

    return SVGList[name]();
};

export default memo(Icons);
