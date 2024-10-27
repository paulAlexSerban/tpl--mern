import { useState, useEffect, type ReactNode } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import Title from './components/Title';
import { MenuItemProps } from './components/MenuItem';
import HttpRequestFacade from './util/HttpRequestFacade'; // Import HttpRequestFacade

export type Categories = string[];

const RECIPE_LIST_API = 'http://localhost:3000/api/v1/recipes';
const api = new HttpRequestFacade(); // Create an instance of HttpRequestFacade

function App() {
    const [menuItems, setMenuItems] = useState<MenuItemProps[]>([]);
    const [filteredMenuItems, setFilteredMenuItems] = useState<MenuItemProps[]>([]);
    const [categories, setCategories] = useState<Categories>([]);
    const [filterCriteria, setFilterCriteria] = useState<string>('all');
    const [isFetching, setIsFetching] = useState<boolean>(true);

    const fetchPosts = async () => {
        setIsFetching(true);
        try {
            const data: MenuItemProps[] = await api.get(RECIPE_LIST_API);
            const categories = Array.from(new Set(data.map((item) => item.category))).filter(
                (category): category is string => category !== undefined
            );
            setCategories(categories);
            setMenuItems(data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsFetching(false);
        }
    };

    const filterItems = (category: string) => {
        if (category === 'all') {
            setFilteredMenuItems([]);
            setFilterCriteria('all');
            console.log({ menuItems });
            setMenuItems(menuItems);
            return;
        }
        const newItems = menuItems.filter((item) => item.category === category);
        setFilterCriteria(category);
        setFilteredMenuItems(newItems);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    let content: ReactNode;

    if (isFetching) {
        content = <p>Loading...</p>;
    } else if (menuItems.length > 0) {
        content = <Menu items={filterCriteria === 'all' ? menuItems : filteredMenuItems} />;
    } else {
        content = <p>No menu items found.</p>;
    }

    return (
        <main>
            <section className="menu">
                <Title text="our menu" />
                <Categories categories={categories} filterItems={filterItems} />
                {content}
            </section>
        </main>
    );
}

export default App;
