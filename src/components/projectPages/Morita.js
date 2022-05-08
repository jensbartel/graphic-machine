import { useEffect } from 'react';

// components
import Headline from './reuseComponents/Headline';
import ImageCollage1 from './reuseComponents/ImageCollage1';
import LargeTextCenter from './reuseComponents/LargeTextCenter';
import ProjectTitle from './reuseComponents/ProjectTitle';
import ThreeImages from './reuseComponents/ThreeImages';
import TwoVideos from './reuseComponents/TwoVideos';

// images
import collage1_1 from '../../img/morita/morita_vip1.jpg';
import collage1_2 from '../../img/morita/morita_vip2.jpg';
import collage1_3 from '../../img/morita/mortia-part4-snippet.jpg';
import collage1_4 from '../../img/morita/footnote.jpg';
import collage1_5 from '../../img/morita/morita-part3-snippet.jpg';
import desktopImg from '../../img/morita/morita_macbook.jpg';
import ipadImg from '../../img/morita/morita_ipad.jpg';
import iphoneImg from '../../img/morita/morita_iphone.jpg';

import { morita } from '../../data/projectData.json'

const MoritaProject = () => {
    const { outline, details } = morita;

    useEffect(() => {
        document.title = 'Grifold Studio | Morita Shiryū';
    }, []);

    return (
        <>
            <ProjectTitle project={morita} />
            <ThreeImages img1={desktopImg} img2={ipadImg} img3={iphoneImg} />
            <Headline headline='Pullquote Animations' />
            <TwoVideos />
            <Headline headline='Exhibition Main Page &#38; VIP Pages' />
            <ImageCollage1 img1={collage1_1} img2={collage1_2} img3={collage1_3} img4={collage1_4} img5={collage1_5} />
            <LargeTextCenter headline='Navigation &#38; Animations; Miscellaneous' text={outline} />
            <LargeTextCenter text={details} css='project-details' />
        </>
    );
};

export default MoritaProject;
