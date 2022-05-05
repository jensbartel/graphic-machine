import { useEffect } from 'react';
import { webApps } from '../../../data/projectOverviewData/WebAppObjects';
import ProjectTitle from '../reuseComponents/ProjectTitle';
import OneImage from '../reuseComponents/OneImage';
import bannerImg from '../../../img/overview/resnet.jpg';

const ResNet = () => {
    const { projects } = webApps;
    const project = projects.ResNet;

    useEffect(() => {
        document.title = 'Grifold Studio | ResNet';
    }, []);

    return (
        <>
            <ProjectTitle project={project} />
            <OneImage img1={bannerImg} cssStyle='one-image-variant-2' />
        </>
    );
};

export default ResNet;
