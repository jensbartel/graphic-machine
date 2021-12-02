import { useEffect } from 'react';

import ProjectTitle from '../reuseComponents/ProjectTitle';
import TwoImages from '../reuseComponents/TwoImages';

import miya1 from '../../../img/mmas/miyanomori-outside-01.jpg';
import miya2 from '../../../img/mmas/miyanomori-outside-02.jpg';

import { webApps } from '../../../data/projectOverviewData/WebAppObjects';

const MMAS = () => {
    const { projects } = webApps;
    const project = projects.MMAS;

    useEffect(() => {
        document.title = 'MMAS';
    }, []);

    return (
        <>
            <ProjectTitle project={project} />
            <TwoImages imgLeft={miya1} imgRight={miya2} />

            {/* below: remove later */}
            <div style={{ height: '20rem' }}></div>
        </>
    );
};

export default MMAS;
