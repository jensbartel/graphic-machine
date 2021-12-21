import { useEffect, useContext } from 'react';
import OverviewPageItem3 from './OverviewPageItem3';
import AnimationContext from '../../context/animation/animationContext';
import { webApps } from '../../data/projectOverviewData/WebAppObjects';
import clientAppImg from '../../img/clientapp/clientApp-visual-02.png';
import resnet from '../../img/overview/resnet.jpg';
import mmas from '../../img/overview/mockup-test.jpg';

const WebappsOverview2 = () => {
    const animationContext = useContext(AnimationContext);
    let { clearAnimation } = animationContext;

    const { ClientApp, ResNet, MMAS } = webApps.projects;

    useEffect(() => {
        document.title = 'Grifold Studio | Web Apps';
        return () => {
            clearAnimation();
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div className='overview3'>
            <OverviewPageItem3 id={1} data={ClientApp} image={clientAppImg} />
            <OverviewPageItem3 id={2} data={ResNet} image={resnet} />
            <OverviewPageItem3 id={3} data={MMAS} image={mmas} />
        </div>
    );
};

export default WebappsOverview2;
