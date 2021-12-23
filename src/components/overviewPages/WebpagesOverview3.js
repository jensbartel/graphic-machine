import { useEffect, useContext } from 'react';
import { webPages } from '../../data/projectOverviewData/WebPageObjects';
import AnimationContext from '../../context/animation/animationContext';

import OverviewPageItem3 from './OverviewPageItem3';
import OverviewPageItemToki2 from './OverviewPageItemToki2';

import moritaImage from '../../img/overview/morita.jpg';
import sudaImage from '../../img/overview/suda.jpg';
import tokiImage from '../../img/overview/toki.jpg';
import mishimaImage from '../../img/overview/mishima.jpg';

const WebpagesOverview3 = () => {
    const animationContext = useContext(AnimationContext);
    let { clearAnimation } = animationContext;

    const { MoritaShiryu, Toki, Suda, Mishima } = webPages.projects;

    useEffect(() => {
        document.title = 'Grifold Studio | Web Pages';
        // note: returning a function means that function mimics componentWillUnmount
        return () => {
            clearAnimation();
        };
        // eslint-disable-next-line
    }, []);
    return (
        <div className='overview3'>
            <OverviewPageItem3 id={1} data={MoritaShiryu} image={moritaImage} />
            <OverviewPageItemToki2 id={2} data={Toki} image={tokiImage} />
            <OverviewPageItem3 id={3} data={Suda} image={sudaImage} />
            <OverviewPageItem3 id={4} data={Mishima} image={mishimaImage} />
        </div>
    );
};

export default WebpagesOverview3;
