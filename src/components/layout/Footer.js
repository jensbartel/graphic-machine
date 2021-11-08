import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <p>
                &#169; Grifold Studio 2021. All rights reserved.
                <br />
                For inquiries please use the contact form on the{' '}
                <strong>
                    <Link to='/about'>About</Link>
                </strong>{' '}
                page.
            </p>
            <p>
                <a href='https://www.linkedin.com/in/jens-bartel-4552854b/' target='_blank' rel='noreferrer'>
                    <i className='fab fa-linkedin'></i>{' '}
                </a>
                <a href='https://www.instagram.com/grifoldstudio/' target='_blank' rel='noreferrer'>
                    <i className='fab fa-instagram'></i>
                </a>
            </p>
        </div>
    );
};

export default Footer;
