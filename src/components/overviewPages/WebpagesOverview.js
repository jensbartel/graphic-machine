import { useEffect, useContext } from 'react';
import { webPages } from '../../data/projectOverviewData/WebPageObjects';
import AnimationContext from '../../context/animation/animationContext';

import OverviewPageItem from './OverviewPageItem';
import OverviewPageItemToki from './OverviewPageItemToki';

import moritaImage from '../../img/overview/morita.jpg';
// import sudaImage from '../../img/overview/suda.jpg';
import mishimaImage from '../../img/overview/mishima.jpg';
import OverviewPageItemSuda from './OverviewPageItemSuda';

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
            <OverviewPageItem id={1} data={MoritaShiryu} image={moritaImage} />
            <OverviewPageItemToki id={2} data={Toki} />
            {/* <OverviewPageItem id={3} data={Suda} image={sudaImage} /> */}
            <OverviewPageItemSuda id={3} data={Suda} />
            <OverviewPageItem id={4} data={Mishima} image={mishimaImage} />
        </div>
    );
};

export default WebpagesOverview3;
