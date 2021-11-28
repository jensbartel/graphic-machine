import { Link } from 'react-scroll';

const BackToTop = () => {
    return (
        <Link to='pagetop' smooth={true}>
            <div className='back-to-top'>
                <i className='fas fa-chevron-up'></i>
            </div>
        </Link>
    );
};

export default BackToTop;
