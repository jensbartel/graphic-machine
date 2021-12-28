import { useEffect, useContext } from 'react';
import { webApps } from '../../data/projectOverviewData/WebAppObjects';
import AnimationContext from '../../context/animation/animationContext';

import OverviewPageItem from './OverviewPageItem';
import OverviewwPageItemClientApp from './OverviewPageItemClientApp';
import OverviewPageItemResNet from './OverviewPageItemResNet';

import mmas from '../../img/overview/mmas-macbook.jpg';

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
            <OverviewwPageItemClientApp id={1} data={ClientApp} />
            <OverviewPageItemResNet id={2} data={ResNet} />
            <OverviewPageItem id={3} data={MMAS} image={mmas} />
        </div>
    );
};

export default WebappsOverview2;
