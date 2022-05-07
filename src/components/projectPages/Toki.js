import { useEffect } from 'react';
import html from 'react-html-parser';

import Headline from './reuseComponents/Headline';
import LargeTextCenter from './reuseComponents/LargeTextCenter';
import OneImage from './reuseComponents/OneImage';
import ProjectTitle from './reuseComponents/ProjectTitle';

import tokiImg1 from '../../img/toki/toki-overview.jpg';
import tokiImg2 from '../../img/toki/toki-overview-2.jpg';
import tokiImg3 from '../../img/toki/backend-process.jpg';

import TokiData from '../../data/projectData/TokiData';
import { webPages } from '../../data/projectOverviewData/WebPageObjects';

const Toki = () => {
    const { introText, introHeadline, caption1, caption2, backendExplanation } = TokiData;
    const { projects } = webPages;
    const project = projects.Toki;

    useEffect(() => {
        document.title = 'Grifold Studio | Toki-no-Wasuremono';
    }, []);

    return (
        <>
            <ProjectTitle project={project} />
            <OneImage img1={tokiImg1} cssStyle='one-image' caption={caption1} />
            <OneImage img1={tokiImg2} cssStyle='one-image' caption={caption2} />
            <Headline headline='Migrating Old Content' />
            <OneImage img1={tokiImg3} cssStyle='one-image-variant-2' caption={html(backendExplanation)} />
            <LargeTextCenter headline={introHeadline} text={introText} />
        </>
    );
};

export default Toki;
