import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import LangContext from '../../context/lang/langContext';

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
                    <NavLink to='/' style={{pointerEvents: 'none'}}>GRIFOLD STUDIO</NavLink>
                </div>
                <div className='menu'>
                    <div>
                        <NavLink to='/webpages' style={active}>
                        {/* <NavLink to='/webpages' activeStyle={active} style={{pointerEvents: 'none'}}> */}
                            WEB PAGE<span>S</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/webapps' style={{pointerEvents: 'none'}}>
                            WEB APP<span>S</span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/about' style={{pointerEvents: 'none'}}>
                            ABOU<span>T</span>
                        </NavLink>
                    </div>
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

// const active = {
//     color: '#777',
//     borderBottom: '1px dotted #777',
    // lineHeight: '0.95',
    // paddingTop: '0.2rem',
// };

const active = {
    color: '#777',
    borderBottom: '1px dotted #777',
    pointerEvents: 'none'
};
