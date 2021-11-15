import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LangContext from '../../context/langContext';

const Navbar = () => {
    const langContext = useContext(LangContext);
    const { lang, setLang, removeLang } = langContext;

    const onEnglish = () => {
        localStorage.removeItem('displayLanguage');
        removeLang();
    };

    const onFrench = () => {
        localStorage.setItem('displayLanguage', 'francais');
        setLang();
    };

    return (
        <nav>
            <div className='overlay'></div>

            <section className='navbar'>
                <div className='wordmark'>
                    <Link to='/'>GRIFOLD STUDIO</Link>
                </div>
                <div className='menu'>
                    <Link to='/webapps'>WEB APPS</Link>
                    <Link to='/webpages'>WEB PAGES</Link>
                    <Link to='/print'>PRINT</Link>
                    <Link to='/about'>ABOUT</Link>
                </div>
            </section>

            <section className='language-switch'>
                <button onClick={onEnglish}>
                    ENGLISH{lang.state === 'francais' ? <span className='indicator-off'>×</span> : <span className='indicator-active'>×</span>}
                </button>
                <button onClick={onFrench}>
                    FRANÇAIS{lang.state === 'francais' ? <span className='indicator-active'>×</span> : <span className='indicator-off'>×</span>}
                </button>
            </section>
        </nav>
    );
};

export default Navbar;
