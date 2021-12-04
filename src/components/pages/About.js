import portrait from '../../img/portrait-1.jpg';
import Bio from './Bio';
import Inquiry from './Inquiry';

const About = () => {
    return (
        <>
            <section className='portrait-and-bio'>
                <figure>
                    <img src={portrait} alt='' />
                    <figcaption>New York, fall 2019.</figcaption>
                </figure>
                <Bio />
            </section>
            <Inquiry />
        </>
    );
};

export default About;
