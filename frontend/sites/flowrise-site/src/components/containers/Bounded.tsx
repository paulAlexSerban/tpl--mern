import type { FC, ElementType, ReactNode } from "react";
import clsx from "clsx";

type BoundedProps = {
    as?: ElementType
    className?: string;
    children?: ReactNode;
}

const Bounded:FC<BoundedProps> = ({as:Comp = "section", className, children, ...restProps}) => {
    const classes = clsx("px-4 py-10 md:py-14 md:px-6 lg:py-16", className);
    
    return (
        <Comp className={classes} {...restProps}>
            <div className="mx-auto w-full max-w-6xl">
                {children}
            </div>
        </Comp>
    )
}

export default Bounded;