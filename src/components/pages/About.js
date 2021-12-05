import portrait from '../../img/about/portrait-1.jpg';
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

            <section className='further-projects'>
                <strong>Further Projects</strong>
                <p>...</p>
            </section>

            <Inquiry />
        </>
    );
};

export default About;
