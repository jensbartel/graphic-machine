import './App.css';
import { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FilterState from './context/FilterState';

import About from './components/About';
import Footer from './components/Footer';
import LangContext from './context/langContext';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Page from './components/Page';

import { webApps } from './data/WebAppObjects';
import { webPages } from './data/WebPageObjects';
import { print } from './data/PrintObjects';

const App = () => {
    const langContext = useContext(LangContext);
    const { setLang, removeLang } = langContext;

    useEffect(() => {
        if (localStorage.getItem('displayLanguage')) {
            setLang();
        } else {
            removeLang();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <FilterState>
            <Router>
                <div className='page-container'>
                    <div className='content-container'>
                        <Navbar />
                        <Route exact path='/webapps' render={() => <Page cssStyle='grid-two' data={webApps} />} />
                        <Route exact path='/webpages' render={() => <Page cssStyle='grid-two' data={webPages} />} />
                        <Route exact path='/print' render={() => <Page cssStyle='grid-two' data={print} />} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/' component={NotFound} />
                    </div>
                    <Footer />
                </div>
            </Router>
        </FilterState>
    );
};

export default App;
