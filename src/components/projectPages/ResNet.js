import { useEffect } from 'react';

import ProjectTitle from './reuseComponents/ProjectTitle';

import OneImage from './reuseComponents/OneImage';
import bannerImg from '../../img/overview/resnet.jpg';

import { resNet } from '../../data/projectData.json'

const ResNet = () => {

    useEffect(() => {
        document.title = 'Grifold Studio | ResNet';
    }, []);

    return (
        <>
            <ProjectTitle project={resNet} />
            <OneImage img1={bannerImg} cssStyle='one-image-variant-2' />
        </>
    );
};

export default ResNet;
