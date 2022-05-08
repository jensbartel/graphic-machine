import { useEffect, useContext } from 'react';
import AnimationContext from '../../context/animation/animationContext'
import MoritaTop from './webpageItems/MoritaTop';
import SudaTop from './webpageItems/SudaTop'
import TokiTop from './webpageItems/TokiTop'

const WebpagesOverview = () => {
    const animationContext = useContext(AnimationContext);
    let { clearAnimation } = animationContext;

    useEffect(() => {
        document.title = 'Grifold Studio | Web Pages';
        // note: returning a function means that function mimics componentWillUnmount
        return () => {
            clearAnimation();
        };
        // eslint-disable-next-line
    }, []);
    return (
        <div className='overview'>
            <MoritaTop id={1} />
            <TokiTop id={2} />
            <SudaTop id={3} />
        </div>
    );
};

export default WebpagesOverview;
