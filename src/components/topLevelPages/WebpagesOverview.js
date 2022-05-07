import { useEffect, useContext } from 'react';
import { webPages } from '../../data/projectOverviewData/WebPageObjects';
import AnimationContext from '../../context/animation/animationContext'

import DefaultWebpageItem from './webpageItems/DefaultWebpageItem'
import SudaTop from './webpageItems/SudaTop'
import TokiTop from './webpageItems/TokiTop'

import moritaImage from '../../img/overview/morita.jpg';

const WebpagesOverview = () => {
    const animationContext = useContext(AnimationContext);
    let { clearAnimation } = animationContext;

    const { MoritaShiryu, Toki, Suda } = webPages.projects;

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
            <DefaultWebpageItem id={1} data={MoritaShiryu} image={moritaImage} />
            <TokiTop id={2} data={Toki} />
            <SudaTop id={3} data={Suda} />
        </div>
    );
};

export default WebpagesOverview;
