import { useEffect, useContext } from 'react';
import { webApps } from '../../data/projectOverviewData/WebAppObjects';
import AnimationContext from '../../context/animation/animationContext';

import OverviewPageItem from './OverviewPageItem';

import clientAppImg from '../../img/clientapp/clientApp-visual-02.png';
import mmas from '../../img/overview/mockup-test.jpg';
import OverviewPageItemResNet from './OverviewPageItemResNet';

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
            <OverviewPageItem id={1} data={ClientApp} image={clientAppImg} />
            {/* <OverviewPageItem id={2} data={ResNet} image={resnet} /> */}
            <OverviewPageItemResNet id={2} data={ResNet} />
            <OverviewPageItem id={3} data={MMAS} image={mmas} />
        </div>
    );
};

export default WebappsOverview2;
