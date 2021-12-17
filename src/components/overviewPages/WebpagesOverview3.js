import { useEffect, useContext } from 'react';
import OverviewPageItem3 from './OverviewPageItem3';
import AnimationContext from '../../context/animation/animationContext';
import { webPages } from '../../data/projectOverviewData/WebPageObjects';

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
            <OverviewPageItem3 id={1} data={MoritaShiryu} />
            <OverviewPageItem3 id={2} data={Toki} />
            <OverviewPageItem3 id={3} data={Suda} />
            <OverviewPageItem3 id={4} data={Mishima} />
            {/* <OverviewPageItem3 id='5' />
            <OverviewPageItem3 id='6' /> */}
        </div>
    );
};

export default WebpagesOverview3;
