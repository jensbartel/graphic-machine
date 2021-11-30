import { useEffect } from 'react';

import OneImage from '../reuseComponents/OneImage';
import ProjectTitle from '../reuseComponents/ProjectTitle';
import TwoImages from '../reuseComponents/TwoImages';

import backoffice1 from '../../../img/clientapp/clientapp-backoffice-1.jpg';
import iOS1 from '../../../img/clientapp/clientapp-1.jpg';
import iOS2 from '../../../img/clientapp/clientapp-2.jpg';

import { webApps } from '../../../data/projectOverviewData/WebAppObjects';

const ClientApp = () => {
    useEffect(() => {
        document.title = 'Client App';
    }, []);

    const { projects } = webApps;
    const project = projects.ClientApp;
    return (
        <>
            <ProjectTitle project={project} />
            <TwoImages imgLeft={iOS1} imgRight={iOS2} />
            <OneImage img1={backoffice1} cssStyle='one-image-variant-2' />
        </>
    );
};

export default ClientApp;
