import { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Page from './components/Page';
import Footer from './components/Footer';
import LangContext from './context/langContext';
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
        <Router>
            <div className='container'>
                <Navbar />
                <Route exact path='/webapps' render={() => <Page cssStyle='grid-two' data={webApps} />} />
                <Route exact path='/webpages' render={() => <Page cssStyle='grid-two' data={webPages} />} />
                <Route exact path='/print' render={() => <Page cssStyle='grid-two' data={print} />} />
                <Route exact path='/about' component={About} />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
