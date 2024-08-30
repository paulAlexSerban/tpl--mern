import './App.scss';
import Registration from './components/Registration';
function App() {
    return (
        <div className="app-container">
            <Registration layout="centered" buttonStyle="primary" label="Submit now" />
            <Registration layout="horizontal" buttonStyle="secondary" label="Submit now" />
        </div>
    );
}

export default App;
