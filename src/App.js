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
import MMAS from './components/projects/MMAS';
import ResNet from './components/projects/ResNet';
import PriceApp from './components/projects/PriceApp';
import ClientApp from './components/projects/ClientApp';
import Morita from './components/projects/Morita';

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
                        <Route exact path='/webapps/mmas' component={MMAS} />
                        <Route exact path='/webapps/resourcenet' component={ResNet} />
                        <Route exact path='/webapps/clientapp' component={ClientApp} />
                        <Route exact path='/webapps/priceapp' component={PriceApp} />
                        <Route exact path='/webpages/morita' component={Morita} />
                    </div>
                    <Footer />
                </div>
            </Router>
        </FilterState>
    );
};

export default App;
