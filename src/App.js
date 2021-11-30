import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import LangContext from './context/langContext';

import About from './components/pages/About';
import ClientApp from './components/projects/projectPages/ClientApp';
import Footer from './components/layout/Footer';
import Mishima from './components/projects/projectPages/Mishima';
import MMAS from './components/projects/projectPages/MMAS';
import Morita from './components/projects/projectPages/Morita';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import Page from './components/pages/Page';
import ResNet from './components/projects/projectPages/ResNet';
import Suda from './components/projects/projectPages/Suda';
import Toki from './components/projects/projectPages/Toki';
import WebpagesOverview from './components/overviewPages/WebpagesOverview';
import WebappsOverview from './components/overviewPages/WebappsOverview';

// import { print } from './data/projectOverviewData/PrintObjects';
// import { webApps } from './data/projectOverviewData/WebAppObjects';
import { webPages } from './data/projectOverviewData/WebPageObjects';

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
        <Router>
            <div id='pagetop'></div>
            <div className='page-container'>
                <Navbar />
                <div className='content-container'>
                    <Switch>
                        <Route exact path='/' component={WebpagesOverview} />
                        <Route exact path='/webpages' component={WebpagesOverview} />
                        <Route exact path='/webapps' component={WebappsOverview} />
                        <Route exact path='/about' component={About} />

                        {/* delete later */}
                        <Route exact path='/webpage' render={() => <Page cssStyle='grid-two' data={webPages} />} />
                        {/* <Route exact path='/webapps' render={() => <Page cssStyle='grid-two' data={webApps} />} /> */}
                        {/* <Route exact path='/print' render={() => <Page cssStyle='grid-two' data={print} />} /> */}

                        {/* project pages */}
                        <Route exact path='/webapps/clientapp' component={ClientApp} />
                        <Route exact path='/webpages/mishima' component={Mishima} />
                        <Route exact path='/webapps/mmas' component={MMAS} />
                        <Route exact path='/webpages/morita' component={Morita} />
                        <Route exact path='/webapps/resourcenet' component={ResNet} />
                        <Route exact path='/webpages/suda' component={Suda} />
                        <Route exact path='/webpages/toki' component={Toki} />

                        <Route component={NotFound} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
