import PullquoteVideo1 from '../../../video/Morita-Pullquote1.mp4';
import PullquoteVideo2 from '../../../video/Morita-Pullquote2.mp4';

const TwoVideos = () => {
    return (
        <section className='video-2-container'>
            <div className='small-video'>
                <video width='460' height='288' autoPlay loop muted webkit-playsinline playsinline>
                    <source src={PullquoteVideo1} type='video/mp4' />
                </video>
                <p>Pullquote animation 1: Intro section.</p>
            </div>

            <div className='small-video'>
                <video width='460' height='288' autoPlay loop muted webkit-playsinline playsinline>
                    <source src={PullquoteVideo2} type='video/mp4' />
                </video>
                <p>Pullquote animation 2: Essay section, Chapter 2.</p>
            </div>
        </section>
    );
};

export default TwoVideos;
