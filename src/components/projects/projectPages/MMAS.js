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
import miya6 from '../../../img/mmas/mmas-mainview-1.jpg';

import { webApps } from '../../../data/projectOverviewData/WebAppObjects';
import MMASData from '../../../data/projectData/MMASData';
import LargeTextCenter from '../reuseComponents/LargeTextCenter';

const MMAS = () => {
    const { projects } = webApps;
    const project = projects.MMAS;
    const { exterior1, exterior2, mainView, searchMask, assistantEditor, searchResults, searchWorkView, headline1, text1 } = MMASData;

    useEffect(() => {
        document.title = 'Grifold Studio | MMAS';
    }, []);

    return (
        <>
            <ProjectTitle project={project} />
            <TwoImages imgLeft={miya1} captionLeft={exterior1} imgRight={miya2} captionRight={exterior2} />
            <OneImage img1={miya3} cssStyle='one-image mato' caption={html(mainView)} />
            <TwoImages imgLeft={miya4} imgRight={miya5} captionLeft={searchMask} captionRight={html(assistantEditor)} />
            <TwoImages imgLeft={miya6} imgRight={miya3} captionLeft={searchResults} captionRight={searchWorkView} />
            <LargeTextCenter headline={headline1} text={text1} />
        </>
    );
};

export default MMAS;
