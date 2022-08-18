import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Wanobi from './components/projectPages/Wanobi'

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
                        <Routes>
                            {/* <Route exact path='/'>
                                <Redirect to='./webpages' />
                            </Route> */}
                            <Route path='/' render={() => <Navigate to={'./webpages'} />} />

                            <Route exact path='/webpages' element={<WebpagesOverview />} />
                            <Route exact path='/webapps' element={<WebappsOverview />} />
                            <Route exact path='/about' element={<About />} />

                            {/* project pages */}
                            <Route exact path='/webapps/clientapp' element={<ClientApp />} />
                            <Route exact path='/webpages/morita' element={<Morita />} />
                            <Route exact path='/webapps/resourcenet' element={<ResNet />} />
                            <Route exact path='/webpages/suda' element={<Suda />} />
                            <Route exact path='/webpages/toki' element={<Toki />} />
                            <Route exact path='/webpages/wanobi' element={<Wanobi />} />

                            <Route element={<NotFound />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </AnimationState>
    );
};

export default App;
