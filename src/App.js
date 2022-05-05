import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import AnimationState from './context/animation/AnimationState';
import LangContext from './context/langContext';

import About from './components/pages/About';
import ClientApp from './components/projects/projectPages/ClientApp';
import Footer from './components/layout/Footer';
import Mishima from './components/projects/projectPages/Mishima';
import MMAS from './components/projects/projectPages/MMAS';
import Morita from './components/projects/projectPages/Morita';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import ResNet from './components/projects/projectPages/ResNet';
import ScrollToTop from './components/layout/Scroll';
import Suda from './components/projects/projectPages/Suda';
import Toki from './components/projects/projectPages/Toki';
import WebappsOverview from './components/overviewPages/WebappsOverview';
import WebpagesOverview from './components/overviewPages/WebpagesOverview';

const App = () => {
    const langContext = useContext(LangContext);
    const { setLang } = langContext;
    // const { setLang, removeLang } = langContext;

    useEffect(() => {
        if (localStorage.getItem('displayLanguage')) {
            setLang();
        }
        // else {
        //     removeLang();
        // }
        // eslint-disable-next-line
    }, []);

    return (
        <AnimationState>
            <Router>
                <ScrollToTop />
                <div id='pagetop'></div>
                <div className='page-container'>
                    <Navbar />
                    <div className='content-container'>
                        <Switch>
                            <Route exact path='/'>
                                <Redirect to='./webpages' />
                            </Route>
                            <Route exact path='/webpages' component={WebpagesOverview} />
                            <Route exact path='/webapps' component={WebappsOverview} />
                            <Route exact path='/about' component={About} />

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
        </AnimationState>
    );
};

export default App;
