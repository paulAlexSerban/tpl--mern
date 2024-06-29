import { FC } from 'react';
import clsx from 'clsx';
import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next';

type CustomButtonProps = {
    className?: string;
};

type ButtonProps = PrismicNextLinkProps & CustomButtonProps;

const Button: FC<ButtonProps> = ({ className, ...restProps }) => {
    const classes = clsx(
        'block w-fit bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-12 rounded-full font-display text-white font-bold text-base tracking-wider',
        className
    );
    return <PrismicNextLink {...restProps} className={classes} />;
};

export default Button;
