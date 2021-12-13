import React, { useEffect, useContext } from 'react';
import OverviewpageItem2 from './OverviewPageItem2';

import mishimaImage from '../../img/overview/mishima.jpg';
import mishimaImage2 from '../../img/overview/mishima2.jpg';
import moritaImage from '../../img/overview/morita.jpg';
import moritaImage2 from '../../img/overview/roundtable.jpg';
import sudaImage from '../../img/overview/suda.jpg';
import sudaImage2 from '../../img/overview/suda2.jpg';
import tokiImage from '../../img/overview/toki.jpg';
import { webPages } from '../../data/projectOverviewData/WebPageObjects';

import AnimationContext from '../../context/animation/animationContext';
import OverviewpageItemToki from './OverviewPageItemToki';

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
            {animate.webpage1 === true ? <OverviewpageItem2 data={MoritaShiryu} image={moritaImage} image2={moritaImage2} /> : null}
            {animate.webpage2 === true ? <OverviewpageItem2 data={Suda} image={sudaImage} image2={sudaImage2} /> : null}

            {animate.webpage3 === true ? <OverviewpageItemToki data={Toki} image1={tokiImage} /> : null}
            {/* {animate.webpage3 === true ? <OverviewpageItem2 data={Toki} image={tokiImage} /> : null} */}
            {/* <OverviewpageItemToki data={Toki} image1={tokiImage} /> */}

            {animate.webpage4 === true ? <OverviewpageItem2 data={Mishima} image={mishimaImage} image2={mishimaImage2} /> : null}
        </div>
    );
};

export default WebpagesOverview2;
