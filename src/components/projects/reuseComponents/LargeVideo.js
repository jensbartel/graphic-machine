import PullquoteVideo1 from '../../../video/Morita-Pullquote1.mov';

const LargeVideo = () => {
    return (
        <div className='large-video'>
            <video loop>
                <source src={PullquoteVideo1} type='video/mov' />
            </video>
            {/* <video src='../../video/video/Morita-Pullquote1.mov'></video> */}
        </div>
    );
};

export default LargeVideo;
