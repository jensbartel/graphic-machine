import { useEffect } from 'react';

import OneImage from '../reuseComponents/OneImage';
import ProjectTitle from '../reuseComponents/ProjectTitle';

import bannerImg from '../../../img/overview/dummy.jpg';

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
            <OneImage img1={bannerImg} cssStyle='one-image-variant-2' />
        </>
    );
};

export default MMAS;
