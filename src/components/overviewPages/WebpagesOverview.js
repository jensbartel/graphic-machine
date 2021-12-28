import { useEffect, useContext } from 'react';
import { webPages } from '../../data/projectOverviewData/WebPageObjects';
import AnimationContext from '../../context/animation/animationContext';

import OverviewPageItem from './OverviewPageItem';
import OverviewPageItemSuda from './OverviewPageItemSuda';
import OverviewPageItemToki from './OverviewPageItemToki';

import moritaImage from '../../img/overview/morita.jpg';
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
            <OverviewPageItem id={1} data={MoritaShiryu} image={moritaImage} />
            <OverviewPageItemToki id={2} data={Toki} />
            <OverviewPageItemSuda id={3} data={Suda} />
            <OverviewPageItem id={4} data={Mishima} image={mishimaImage} />
        </div>
    );
};

export default WebpagesOverview3;
