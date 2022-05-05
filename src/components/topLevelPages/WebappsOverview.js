import { useEffect, useContext } from 'react';
import { webApps } from '../../data/projectOverviewData/WebAppObjects';
import AnimationContext from '../../context/animation/animationContext';

import DefaultWebpageItem from './webpageItems/DefaultWebpageItem';
import ClientAppTop from './webappItems/ClientAppTop';
import ResNetTop from './webappItems/ResNetTop';

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
            <ClientAppTop id={1} data={ClientApp} />
            <ResNetTop id={2} data={ResNet} />
            <DefaultWebpageItem id={3} data={MMAS} image={mmas} />
        </div>
    );
};

export default WebappsOverview2;
