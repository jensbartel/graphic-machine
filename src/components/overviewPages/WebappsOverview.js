import { useEffect } from 'react';
import clientAppImg from '../../img/clientapp/clientApp-visual-02.png';
import mmas from '../../img/overview/mmas.jpg';
import resnet from '../../img/overview/resnet.jpg';

// data
import { webApps } from '../../data/projectOverviewData/WebAppObjects';
import OverviewpageItem from './OverviewPageItem';

const WebappsOverview = () => {
    useEffect(() => {
        document.title = 'Grifold Studio | Web Apps';
    }, []);

    const { ResNet, MMAS, ClientApp } = webApps.projects;

    return (
        <div className='overview'>
            <OverviewpageItem data={ClientApp} image={clientAppImg} />
            <OverviewpageItem data={ResNet} image={resnet} />
            <OverviewpageItem data={MMAS} image={mmas} />
        </div>
    );
};

export default WebappsOverview;
