import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import FilterState from './context/FilterState';
import LangContext from './context/langContext';

import About from './components/pages/About';
import ClientApp from './components/projects/projectPages/ClientApp';
import Footer from './components/layout/Footer';
import MMAS from './components/projects/projectPages/MMAS';
import Morita from './components/projects/projectPages/Morita';
import Suda from './components/projects/projectPages/Suda';
import Toki from './components/projects/projectPages/Toki';
import Mishima from './components/projects/projectPages/Mishima';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import Page from './components/pages/Page';
import PriceApp from './components/projects/projectPages/PriceApp';
import ResNet from './components/projects/projectPages/ResNet';

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
                        <Route exact path='/webpages/suda' component={Suda} />
                        <Route exact path='/webpages/toki' component={Toki} />
                        <Route exact path='/webpages/mishima' component={Mishima} />
                    </div>
                    <Footer />
                </div>
            </Router>
        </FilterState>
    );
};

export default App;
