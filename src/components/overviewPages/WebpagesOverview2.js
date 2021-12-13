// import React, { useContext } from 'react';
import React, { useEffect, useContext } from 'react';
import moritaImage from '../../img/overview/morita.jpg';
import OverviewpageItem2 from './OverviewPageItem2';
import { webPages } from '../../data/projectOverviewData/WebPageObjects';
import sudaImage from '../../img/overview/suda.jpg';
import tokiImage from '../../img/overview/toki.jpg';
import mishimaImage from '../../img/overview/mishima.jpg';

import AnimationContext from '../../context/animation/animationContext';

const WebpagesOverview2 = () => {
    const animationContext = useContext(AnimationContext);
    const { animate } = animationContext;

    useEffect(() => {
        document.title = 'Grifold Studio | Web Pages';
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
