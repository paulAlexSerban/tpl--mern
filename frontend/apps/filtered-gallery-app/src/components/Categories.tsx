import { Categories as CategoriesType } from '../App';
import { FC } from 'react';

type CategoriesProps = {
    categories: CategoriesType;
    filterItems: (category: string) => void;
};

const Categories: FC<CategoriesProps> = ({ categories, filterItems }) => {
    return (
        <div className="btn-container">
            <button type="button" className="btn" onClick={() => filterItems('all')}>
                all
            </button>
            {categories.map((category) => {
                return (
                    <button type="button" className="btn" key={category} onClick={() => filterItems(category)}>
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;
