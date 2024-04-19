import PageContent from '../components/PageContent';

const HomePage = () => {
    return (
        <PageContent title="Welcome to the Events Showcase App">
            <p
                style={{
                    textAlign: 'center',
                    fontSize: '1.5rem',
                    color: '#666',
                    width: '60ch',
                    margin: '0 auto',
                }}
            >
                This is a showcase app for a fictional event management company. Feel free to browse around and check
                out the events we host.
            </p>
        </PageContent>
    );
};

export default HomePage;
