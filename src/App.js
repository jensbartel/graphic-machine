import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Drawing from './components/pages/Drawing';
import Print from './components/pages/Print';
import WebApps from './components/pages/WebApps';
import WebPages from './components/pages/WebPages';

const App = () => {
    return (
        <Router>
            <div className='container'>
                <Navbar />
                <Route exact path='/webapps' component={WebApps} />
                <Route exact path='/webpages' component={WebPages} />
                <Route exact path='/print' component={Print} />
                <Route exact path='/drawing' component={Drawing} />
                <Route exact path='/about' component={About} />
            </div>
        </Router>
    );
};

export default App;
