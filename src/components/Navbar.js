import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LangContext from '../context/langContext';

const Navbar = () => {
    const langContext = useContext(LangContext);
    const { setLang, removeLang } = langContext;

    const onEnglish = () => {
        localStorage.removeItem('displayLanguage');
        removeLang();
    };

    const onFrench = () => {
        localStorage.setItem('displayLanguage', 'francais');
        setLang();
    };

    return (
        <>
            <div className='navbar'>
                <div className='wordmark'>GRIFOLD STUDIO</div>
                <div className='menu'>
                    <Link to='/webapps'>WEB APPS</Link>
                    <Link to='/webpages'>WEB PAGES</Link>
                    <Link to='/print'>PRINT</Link>
                    <Link to='/about'>ABOUT</Link>
                </div>
            </div>
            <div className='language-switch'>
                <button onClick={onEnglish}>ENGLISH×</button>
                <button onClick={onFrench}>FRANÇAIS</button>
            </div>
        </>
    );
};

export default Navbar;
