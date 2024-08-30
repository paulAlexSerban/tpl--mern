import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import type { FC } from 'react';
const Meals: FC = () => {
    return (
        <>
            <MealsSummary />
            <AvailableMeals />
        </>
    );
};

export default Meals;
