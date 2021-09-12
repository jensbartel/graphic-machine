import { Link } from 'react-router-dom';

const Navbar = () => {
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
                <button>×ENGLISH</button>
                <button>FRANÇAIS</button>
            </div>
        </>
    );
};

export default Navbar;
