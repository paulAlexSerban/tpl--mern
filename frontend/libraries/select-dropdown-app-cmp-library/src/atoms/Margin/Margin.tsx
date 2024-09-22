import React from 'react';
import { spacing } from '@wbk--mern-playground/shared-foundation';

export interface MarginProps {
    space?: keyof typeof spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    children?: React.ReactNode;
}

const Margin: React.FC<MarginProps> = ({ space = 'xxxs', children, left, right, top, bottom }) => {
    let className = ``;

    if (!left && !right && !top && !bottom) {
        className = `margin-${space}`;
    }

    if (left) {
        className = `${className} margin-left-${space}`;
    }

    if (right) {
        className = `${className} margin-right-${space}`;
    }

    if (top) {
        className = `${className} margin-top-${space}`;
    }

    if (bottom) {
        className = `${className} margin-bottom-${space}`;
    }

    return (
        <div data-testid="Margin" className={className}>
            {children}
        </div>
    );
};

export default Margin;
