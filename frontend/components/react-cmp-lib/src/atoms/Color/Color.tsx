import React from 'react';
import { spacing } from '@wbk--mern-playground/shared-foundation';

export interface ColorProps {
    hexCode: string;
    width?: keyof typeof spacing;
    height?: keyof typeof spacing;
}

/**
 * Color
 * @param param0
 * @returns
 */
const Color: React.FC<ColorProps> = ({ hexCode, width = spacing.sm, height = spacing.sm }) => {
    const className = `width-${width} height-${height}`;

    return (
        <div
            data-testid="Color"
            className={className}
            style={{
                backgroundColor: hexCode,
            }}
        ></div>
    );
};

export default Color;
