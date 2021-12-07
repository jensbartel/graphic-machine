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
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sint ab corrupti officiis. Deleniti facere inventore et! Nisi aperiam, vitae
                    praesentium corporis velit maiores, maxime harum impedit qui minima autem molestiae enim distinctio nesciunt eos architecto iusto?
                    Accusantium, assumenda totam.
                </p>
            </section>

            <Inquiry />
        </>
    );
};

export default About;
