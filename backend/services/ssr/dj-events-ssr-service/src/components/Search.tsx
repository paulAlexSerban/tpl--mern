import styles from '@/styles/search.module.scss';
import { useRouter } from 'next/router';
import { useState, FC } from 'react';

const Search: FC = () => {
    const [term, setTerm] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push(`/events/search?term=${term}`);
        setTerm('');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
    };

    return (
        <div className={styles.search}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={term} onChange={(e) => handleChange(e)} placeholder="Search events" />
            </form>
        </div>
    );
};

export default Search;
