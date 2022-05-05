import { useEffect, useContext } from 'react';
import { webApps } from '../../data/projectOverviewData/WebAppObjects';
import AnimationContext from '../../context/animation/animationContext';

import OverviewPageItem from '../topLevelPageItems/OverviewPageItem';
import OverviewwPageItemClientApp from '../topLevelPageItems/OverviewPageItemClientApp';
import OverviewPageItemResNet from '../topLevelPageItems/OverviewPageItemResNet';

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
        <div className='overview'>
            <OverviewwPageItemClientApp id={1} data={ClientApp} />
            <OverviewPageItemResNet id={2} data={ResNet} />
            <OverviewPageItem id={3} data={MMAS} image={mmas} />
        </div>
    );
};

export default WebappsOverview2;
