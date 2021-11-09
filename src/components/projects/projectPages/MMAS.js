import MMAS_banner from '../../../img/banner/MMAS_banner-light.png';

const MMAS = () => {
    return (
        <div className='project'>
            <p>Miyanomori Museum of Art, Sapporo</p>
            <div className='project-grid'>
                <img src={MMAS_banner} alt='' />
                <div className='text-column'>
                    <h3>Outline</h3>
                    <p>
                        Scott Mitchell Putesky (April 28, 1968 – October 22, 2017),[2] also known as Daisy Berkowitz, was an American musician, songwriter,
                        composer, visual artist, and record producer. He was the co-founder of the rock band Marilyn Manson & the Spooky Kids (later shortened
                        to just Marilyn Manson), and was the guitarist for the band until 1996. After leaving Marilyn Manson, Putesky was involved in a number
                        of other projects such as Three ton Gate, The Linda Blairs, Jack Off Jill, Stuck on Evil (previously called Rednecks on Drugs), Kill
                        Miss Pretty, and The Daisy Kids.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MMAS;
