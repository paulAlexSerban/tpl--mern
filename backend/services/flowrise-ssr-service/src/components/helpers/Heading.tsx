import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

type HeadingProps = {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    children: ReactNode;
    size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
};

const sizes = {
    xl: 'text-5xl  md:text-7xl',
    lg: 'text-4xl  md:text-6xl',
    md: 'text-3xl  md:text-5xl',
    sm: 'text-2xl  md:text-4xl',
    xs: 'text-xl  md:text-3xl',
    xxs: 'text-lg  md:text-2xl',
};

const Heading: FC<HeadingProps> = ({ as: Comp = 'h2', className, children, size = 'lg' }) => {
    const classes = clsx('font-bold leading-tight tracking-tight font-display text-slate-700', className, sizes[size]);
    return <Comp className={classes}>{children}</Comp>;
};
export default Heading;
