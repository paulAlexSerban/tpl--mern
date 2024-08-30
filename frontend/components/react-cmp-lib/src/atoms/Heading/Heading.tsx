import React from 'react';

const headingLevels = [1, 2, 3, 4, 5, 6];
const textAligns = ['left', 'center', 'right'];

export interface HeadingProps {
    title: string;
    subtitle?: string;
    level?: (typeof headingLevels)[number];
    align?: (typeof textAligns)[number];
    className?: string;
    children?: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, level, align, className, ...props }) => {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    const classes = [className, 'heading'];
    className && classes.push(className);
    level && classes.push(`heading--${level}`);
    align && classes.push(`heading--align-${align}`);
    return (
        <HeadingTag className={classes.join(' ')} {...props}>
            {title}
            {subtitle && <span>{subtitle}</span>}
        </HeadingTag>
    );
};

Heading.defaultProps = {
    level: 2,
    align: 'center',
};

export default Heading;
