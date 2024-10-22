import styles from '@/styles/showcase.module.scss';

const Showcase = () => {
    return (
        <div className={styles.showcase}>
            <img className={styles.bkgImage} src="/dss/images/showcase.jpg" alt="DJ using CD players." />
            <h1 className={styles.heading}>Welcome to the party!</h1>
            <p>Find the hottest DJ events</p>
        </div>
    );
};

export default Showcase;
