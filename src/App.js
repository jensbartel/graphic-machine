import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useEffect, useContext } from 'react';

import AnimationState from './context/animation/AnimationState'
import LangContext from './context/lang/langContext'

import About from './components/topLevelPages/About'
import ClientApp from './components/projectPages/ClientApp'
import Footer from './components/layoutItems/Footer'
import Morita from './components/projectPages/Morita'
import Navbar from './components/layoutItems/Navbar'
import NotFound from './components/topLevelPages/NotFound'
import ResNet from './components/projectPages/ResNet'
import ScrollToTop from './components/layoutItems/Scroll'
import Suda from './components/projectPages/Suda'
import Toki from './components/projectPages/Toki'

import WebappsOverview from './components/topLevelPages/WebappsOverview';
import WebpagesOverview from './components/topLevelPages/WebpagesOverview';


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
