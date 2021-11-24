import { useEffect } from 'react';

import iOS1 from '../../../img/clientapp/clientapp-1.jpg';
import iOS2 from '../../../img/clientapp/clientapp-2.jpg';
import backoffice1 from '../../../img/clientapp/clientapp-backoffice-1.jpg';
import ProjectTitle from '../reuseComponents/ProjectTitle';
import OneImage from '../reuseComponents/OneImage';

import { webApps } from '../../../data/projectOverviewData/WebAppObjects';
import TwoImages from '../reuseComponents/TwoImages';

const ClientApp = () => {
    useEffect(() => {
        document.title = 'Client App';
    }, []);
    const { projects } = webApps;
    const project = projects.filter(element => element.title.includes('SBK-Client'));
    return (
        <>
            <ProjectTitle project={project} />
            {/* <OneImage img1={bannerImg} cssStyle='one-image-variant-2' /> */}
            <TwoImages imgLeft={iOS1} imgRight={iOS2} />
            <OneImage img1={backoffice1} cssStyle='one-image-variant-2' />
        </>
    );
};

export default ClientApp;
