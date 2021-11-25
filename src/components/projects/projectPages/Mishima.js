import { useEffect } from 'react';

// import OneImage from '../reuseComponents/OneImage';
import ThreeImages from '../reuseComponents/ThreeImages';
import TwoImages from '../reuseComponents/TwoImages';
import OneImage from '../reuseComponents/OneImage';
import mishima1 from '../../../img/mishima/mishima-macbook.jpg';
import mishima2 from '../../../img/mishima/mishima-ipad-eng.jpg';
import mishima3 from '../../../img/mishima/mishima-iphone.jpg';
import mishima4 from '../../../img/mishima/mishima-layout-01-2.jpg';
import mishima5 from '../../../img/mishima/mishima-layout-rows-2.jpg';
import mishima6 from '../../../img/mishima/parallax-visuals1.jpg';
import ProjectTitle from '../reuseComponents/ProjectTitle';
import LargeTextCenter from '../reuseComponents/LargeTextCenter';
import mishimaData from '../../../data/projectData/MishimaData';

import { webPages } from '../../../data/projectOverviewData/WebPageObjects';

const Mishima = () => {
    const { projects } = webPages;
    // const project = projects.filter(element => element.title.includes('Mishima'));
    const project = projects.Mishima;

    useEffect(() => {
        document.title = 'Mishima Ritsue';
    }, []);

    return (
        <div>
            <ProjectTitle project={project} />
            {/* <OneImage img1={mishima1} cssStyle='one-image-variant' /> */}
            <ThreeImages img1={mishima1} img2={mishima2} img3={mishima3} />
            <LargeTextCenter headline='Layout & Sales Value' />
            <TwoImages imgLeft={mishima4} imgRight={mishima5} />
            <LargeTextCenter headline='Parallax scroll' />
            <OneImage img1={mishima6} cssStyle='one-image-noBorder' />
            <LargeTextCenter text={mishimaData} />

            {/* div below: replace later */}
            <div style={{ height: '4rem' }}></div>
        </div>
    );
};

export default Mishima;
