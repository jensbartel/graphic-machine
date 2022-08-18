// import { useEffect, useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
// import AnimationContext from '../../context/animation/animationContext'
import MoritaTop from './webpageItems/MoritaTop';
import SudaTop from './webpageItems/SudaTop'
import TokiTop from './webpageItems/TokiTop'
import WanobiTop from './webpageItems/WanobiTop';

const WebpagesOverview = () => {
    // const animationContext = useContext(AnimationContext);
    // let { clearAnimation } = animationContext;

    const navigate = useNavigate();

    useEffect(() => {
        // document.title = 'Grifold Studio | Web Pages';
        // note: returning a function means that function mimics componentWillUnmount
        // return () => {
        //     clearAnimation();
        // };

        navigate(-1);
        // eslint-disable-next-line
    }, []);
    return (
        <div className='overview'>
            <MoritaTop id={1} />
            <TokiTop id={2} />
            <SudaTop id={3} />
            <WanobiTop id={4} />
        </div>
    );
};

export default WebpagesOverview;
