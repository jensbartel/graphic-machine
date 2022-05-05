import PullquoteVideo1 from '../../../video/Morita-Pullquote1.mp4';

const LargeVideo = () => {
    return (
        <div className='video-container'>
            <div className='large-video'>
                <video width='640' height='400' autoPlay loop muted>
                    <source src={PullquoteVideo1} type='video/mp4' />
                </video>
                <p>Pullquote animation.</p>
            </div>
        </div>
    );
};

export default LargeVideo;
