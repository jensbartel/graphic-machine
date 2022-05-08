import { useEffect } from 'react';

// components
import Headline from './reuseComponents/Headline';
import OneImage from './reuseComponents/OneImage';
import ProjectTitle from './reuseComponents/ProjectTitle';
import TwoImages from './reuseComponents/TwoImages';

// images
import backoffice1 from '../../img/clientapp/clientapp-backoffice-1.jpg';
import systemArchitecture from '../../img/clientapp/clientApp-visual-01.png';
import iOS1 from '../../img/clientapp/clientapp-1.jpg';
import iOS2 from '../../img/clientapp/clientapp-2.jpg';

import { clientApp } from '../../data/projectData.json'

const ClientApp = () => {
    useEffect(() => {
        document.title = 'Grifold Studio | Client App';
    }, []);

    return (
        <>
            <ProjectTitle project={clientApp} />
            <TwoImages imgLeft={iOS1} captionLeft={capLeft} imgRight={iOS2} captionRight={capRight} />
            <OneImage img1={backoffice1} cssStyle='one-image-variant-2' />
            <Headline headline='System Overview' />
            <OneImage img1={systemArchitecture} cssStyle='one-image-variant img-border' />
        </>
    );
};

export default ClientApp;

// refactor later
const capLeft = `Sign up view for clients on iPad.`;
const capRight = `Staff view to add notes.`;
