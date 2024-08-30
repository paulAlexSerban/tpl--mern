import { useState } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import Title from './components/Title';
import items from './data';
import { MenuItemProps } from './components/MenuItem';

export type Categories = string[];

const allCategories: Categories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
    const [menuItems, setMenuItems] = useState<MenuItemProps[]>(items);
    const [categories, setCategories] = useState<Categories>(allCategories);

    const filterItems = (category: string) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <main>
            <section className="menu">
                <Title text="our menu" />
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
