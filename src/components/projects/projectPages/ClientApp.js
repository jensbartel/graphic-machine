import { useEffect } from 'react';
import { webApps } from '../../../data/projectOverviewData/WebAppObjects';

import Headline from '../reuseComponents/Headline';
import OneImage from '../reuseComponents/OneImage';
import ProjectTitle from '../reuseComponents/ProjectTitle';
import TwoImages from '../reuseComponents/TwoImages';

import backoffice1 from '../../../img/clientapp/clientapp-backoffice-1.jpg';
import systemArchitecture from '../../../img/clientapp/clientApp-visual-01.png';
import iOS1 from '../../../img/clientapp/clientapp-1.jpg';
import iOS2 from '../../../img/clientapp/clientapp-2.jpg';

const ClientApp = () => {
    useEffect(() => {
        document.title = 'Grifold Studio | Client App';
    }, []);

    const { projects } = webApps;
    const project = projects.ClientApp;
    return (
        <>
            <ProjectTitle project={project} />
            <TwoImages imgLeft={iOS1} captionLeft={capLeft} imgRight={iOS2} captionRight={capRight} />
            <OneImage img1={backoffice1} cssStyle='one-image-variant-2' />
            <Headline headline='System Overview' />
            <OneImage img1={systemArchitecture} cssStyle='one-image-variant img-border' />
        </>
    );
};

export default ClientApp;

// refasctor later
const capLeft = `Sign up view for clients on iPad.`;
const capRight = `Staff view to add notes.`;
