import { useState } from 'react';
import { Person } from './types';
import List from './components/List';

import data from './data';

const App = () => {
    const [people, setPeople] = useState<Person[]>(data);

    const handleCleatList = () => {
        setPeople([]);
    };

    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List people={people} />
                <button type="button" className="btn btn-block" onClick={handleCleatList}>
                    clear all
                </button>
            </section>
        </main>
    );
};

export default App;
