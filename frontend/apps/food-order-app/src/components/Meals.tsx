import { FC } from 'react';
import useHttp from '../hooks/useHttp';
import MealItem from './MealItem';
import Error from './Error';
type RawMealData = {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
};

// declaring the request config outside of the component so that it doesn't get re-created on every component re-render
// it is passed as a dependency to the useHttp hook, so that the hook knows when to re-send the request
const requestConfig = {
    method: 'GET',
};

const Meals: FC = () => {
    const {
        data: loadedMeals,
        isLoading,
        error,
    } = useHttp<RawMealData[]>('http://localhost:4001/meals', requestConfig, []);

    console.log({ loadedMeals });
    if (isLoading) {
        return <p className="center">Loading meals...</p>;
    }
    if (error) {
        return <Error title="Failed to fetch meals" message={error} />;
    }
    if (loadedMeals?.length === 0 || !loadedMeals) {
        return <p>No mealsfound.</p>;
    }

    return (
        <ul id="meals">
            {!isLoading &&
                loadedMeals?.map((meal) => (
                    <MealItem
                        key={meal.id}
                        name={meal.name}
                        description={meal.description}
                        price={meal.price}
                        image={meal.image}
                    />
                ))}
        </ul>
    );
};

export default Meals;
