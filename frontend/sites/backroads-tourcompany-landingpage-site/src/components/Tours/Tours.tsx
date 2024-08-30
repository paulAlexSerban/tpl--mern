import { tours } from '@/data';
import Title from '@/components/Title/Title';
import CardList from '@/components/Cards/CardList';

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title="featured" subTitle="tours" />
            <CardList cards={tours} />
        </section>
    );
};
export default Tours;
