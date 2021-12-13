import React, { useEffect, useContext } from 'react';
import OverviewpageItem2 from './OverviewPageItem2';

import mishimaImage from '../../img/overview/mishima.jpg';
import moritaImage from '../../img/overview/morita.jpg';
import sudaImage from '../../img/overview/suda.jpg';
import tokiImage from '../../img/overview/toki.jpg';
import { webPages } from '../../data/projectOverviewData/WebPageObjects';

import AnimationContext from '../../context/animation/animationContext';

const WebpagesOverview2 = () => {
    const animationContext = useContext(AnimationContext);
    let { animate, clearAnimation } = animationContext;

    useEffect(() => {
        document.title = 'Grifold Studio | Web Pages';
        // note: returning a function means that function mimics componentWillUnmount
        return () => {
            clearAnimation();
        };
        // eslint-disable-next-line
    }, []);

    const { MoritaShiryu, Suda, Toki, Mishima } = webPages.projects;

    return (
        <div className='overview2'>
            {animate.webpage1 === true ? <OverviewpageItem2 data={MoritaShiryu} image={moritaImage} /> : null}
            {animate.webpage2 === true ? <OverviewpageItem2 data={Suda} image={sudaImage} /> : null}
            {animate.webpage3 === true ? <OverviewpageItem2 data={Toki} image={tokiImage} /> : null}
            {animate.webpage4 === true ? <OverviewpageItem2 data={Mishima} image={mishimaImage} /> : null}
        </div>
    );
};

export default WebpagesOverview2;
