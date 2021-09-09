import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Page from './components/Page';

import { webApps } from './data/WebAppObjects';
import { webPages } from './data/WebPageObjects';
import { print } from './data/PrintObjects';
// import { drawings } from './data/DrawingObjects';

const App = () => {
    return (
        <Router>
            <div className='container'>
                <Navbar />
                <Route
                    exact
                    path='/webapps'
                    render={() => <Page cssStyle='grid-two' data={webApps} />}
                />
                <Route
                    exact
                    path='/webpages'
                    render={() => <Page cssStyle='grid-two' data={webPages} />}
                />
                <Route
                    exact
                    path='/print'
                    render={() => <Page cssStyle='grid-two' data={print} />}
                />
                {/* <Route
                    exact
                    path='/drawing'
                    render={() => (
                        <Page cssStyle='grid-three' data={drawings} />
                    )}
                /> */}
                <Route exact path='/about' component={About} />
            </div>
        </Router>
    );
};

export default App;
