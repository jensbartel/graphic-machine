import { useEffect } from 'react';
import dummy from '../../img/overview/dummy.jpg';

// data
import { webApps } from '../../data/projectOverviewData/WebAppObjects';
import WebpageItem from './WebpageItem';

const WebappsOverview = () => {
    useEffect(() => {
        document.title = 'Grifold Studio | Web Apps';
    }, []);

    const { ResNet, MMAS, ClientApp } = webApps.projects;

    return (
        <div className='overview'>
            <WebpageItem data={ClientApp} image={dummy} />
            <WebpageItem data={ResNet} image={dummy} />
            <WebpageItem data={MMAS} image={dummy} />
        </div>
    );
};

export default WebappsOverview;
