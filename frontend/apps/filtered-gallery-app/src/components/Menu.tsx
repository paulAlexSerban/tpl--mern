import { FC } from 'react';
import MenuItem from './MenuItem';
import { MenuItemProps } from './MenuItem';

export type MenuProps = {
    items: MenuItemProps[];
};

const Menu: FC<MenuProps> = ({ items }) => {
    return (
        <div className="section-center">
            {items.map((menuItem) => {
                return <MenuItem key={menuItem.id} {...menuItem} />;
            })}
        </div>
    );
};

export default Menu;
