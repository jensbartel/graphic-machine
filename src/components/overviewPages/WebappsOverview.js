import { useEffect } from 'react';
import dummy from '../../img/overview/dummy.jpg';
import clientAppImg from '../../img/clientapp/clientApp-visual-02.png';
import mmas from '../../img/overview/mmas.jpg';

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
            <WebpageItem data={ClientApp} image={clientAppImg} />
            <WebpageItem data={ResNet} image={dummy} />
            <WebpageItem data={MMAS} image={mmas} />
        </div>
    );
};

export default WebappsOverview;
