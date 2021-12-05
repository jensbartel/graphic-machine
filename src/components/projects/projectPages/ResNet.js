import { useEffect } from 'react';

import bannerImg from '../../../img/overview/resnet.jpg';
import ProjectTitle from '../reuseComponents/ProjectTitle';
import OneImage from '../reuseComponents/OneImage';

import { webApps } from '../../../data/projectOverviewData/WebAppObjects';

const ResNet = () => {
    const { projects } = webApps;
    const project = projects.ResNet;

    useEffect(() => {
        document.title = 'ResNet';
    }, []);

    return (
        <>
            <ProjectTitle project={project} />
            <OneImage img1={bannerImg} cssStyle='one-image-variant-2' />
        </>
    );
};

export default ResNet;
