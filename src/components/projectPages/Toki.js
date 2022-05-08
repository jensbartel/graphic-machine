import { useEffect } from 'react';
import html from 'react-html-parser';

// components
import Headline from './reuseComponents/Headline';
import LargeTextCenter from './reuseComponents/LargeTextCenter';
import OneImage from './reuseComponents/OneImage';
import ProjectTitle from './reuseComponents/ProjectTitle';

// images
import tokiImg1 from '../../img/toki/toki-overview.jpg';
import tokiImg2 from '../../img/toki/toki-overview-2.jpg';
import tokiImg3 from '../../img/toki/backend-process.jpg';

import { toki } from '../../data/projectData.json'

const Toki = () => {
    const { outline, caption1, caption2, backendExplanation, details } = toki;

    useEffect(() => {
        document.title = 'Grifold Studio | Toki-no-Wasuremono';
    }, []);

    return (
        <>
            <ProjectTitle project={toki} />
            <OneImage img1={tokiImg1} cssStyle='one-image' caption={html(caption1)} />
            <OneImage img1={tokiImg2} cssStyle='one-image' caption={html(caption2)} />
            <Headline headline='Migrating Old Content' />
            <OneImage img1={tokiImg3} cssStyle='one-image-variant-2' caption={html(backendExplanation)} />
            <LargeTextCenter headline='Toki-no-Wasuremono Gallery' text={outline} />
            <LargeTextCenter text={details} css='project-details' />
        </>
    );
};

export default Toki;
