import { useEffect } from 'react';

import bannerImg from '../../../img/banner/resnet_banner.png';
import ProjectTitle from '../reuseComponents/ProjectTitle';
import OneImage from '../reuseComponents/OneImage';

import { webApps } from '../../../data/projectOverviewData/WebAppObjects';

const ResNet = () => {
    const { projects } = webApps;
    const project = projects.filter(element => element.title.includes('SBK-ResourceNet'));
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
