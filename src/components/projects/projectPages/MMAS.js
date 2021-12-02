import { useEffect } from 'react';
import html from 'react-html-parser';

import OneImage from '../reuseComponents/OneImage';
import ProjectTitle from '../reuseComponents/ProjectTitle';
import TwoImages from '../reuseComponents/TwoImages';

import miya1 from '../../../img/mmas/miyanomori-outside-01.jpg';
import miya2 from '../../../img/mmas/miyanomori-outside-02.jpg';
import miya3 from '../../../img/mmas/mmas-mainview-2.jpg';
import miya4 from '../../../img/mmas/mmas-mainview-3.jpg';
import miya5 from '../../../img/mmas/mmas-mainview-4.jpg';

import { webApps } from '../../../data/projectOverviewData/WebAppObjects';
import MMASData from '../../../data/projectData/MMASData';

const MMAS = () => {
    const { projects } = webApps;
    const project = projects.MMAS;
    const { mainView, searchMask, assistantEditor } = MMASData;

    useEffect(() => {
        document.title = 'MMAS';
    }, []);

    return (
        <>
            <ProjectTitle project={project} />
            <TwoImages imgLeft={miya1} imgRight={miya2} />
            <OneImage img1={miya3} cssStyle='one-image mato' caption={html(mainView)} />
            <TwoImages imgLeft={miya4} imgRight={miya5} captionLeft={searchMask} captionRight={assistantEditor} />

            {/* below: remove later */}
            <div style={{ height: '20rem' }}></div>
        </>
    );
};

export default MMAS;
