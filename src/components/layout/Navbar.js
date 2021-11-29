import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
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
                    <NavLink to='/'>GRIFOLD STUDIO</NavLink>
                </div>
                <div className='menu'>
                    <NavLink to='/webpages' activeStyle={active}>
                        WEB PAGE<span>S</span>
                    </NavLink>
                    <NavLink to='/webapps' activeStyle={active}>
                        WEB APP<span>S</span>
                    </NavLink>
                    <NavLink to='/about' activeStyle={active}>
                        ABOU<span>T</span>
                    </NavLink>
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

const active = {
    color: '#777',
    borderBottom: '1px dotted #777',
    // marginTop: '1px',
};
