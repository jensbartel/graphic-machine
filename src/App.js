import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import FilterState from './context/FilterState';
import LangContext from './context/langContext';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Page from './components/pages/Page';

import MMAS from './components/projects/projectPages/MMAS';
import ResNet from './components/projects/projectPages/ResNet';
import PriceApp from './components/projects/projectPages/PriceApp';
import ClientApp from './components/projects/projectPages/ClientApp';
import Morita from './components/projects/projectPages/Morita';

import { webApps } from './data/projectOverviewData/WebAppObjects';
import { webPages } from './data/projectOverviewData/WebPageObjects';
import { print } from './data/projectOverviewData/PrintObjects';

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
                    <Navbar />
                    <div className='content-container'>
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
