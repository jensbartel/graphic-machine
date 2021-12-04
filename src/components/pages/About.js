import portrait from '../../img/portrait-1.jpg';
import Inquiry from './Inquiry';

const About = () => {
    return (
        <div className='page'>
            <section className='portrait-and-bio'>
                <img src={portrait} alt='' />
            </section>
            <Inquiry />
        </div>
    );
};

export default About;
