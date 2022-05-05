import { useEffect } from 'react';

import Headline from './reuseComponents/Headline';
import LargeTextCenter from './reuseComponents/LargeTextCenter';
import ProjectTitle from './reuseComponents/ProjectTitle';
import ThreeImagesGrid from './reuseComponents/ThreeImagesGrid';
import TwoImages from './reuseComponents/TwoImages';

import desktopImg from '../../img/suda/suda_macbook.jpg';
import iphoneImg from '../../img/suda/suda_iphone.jpg';
import iphoneImg2 from '../../img/suda/suda_iphone-2.jpg';
import sudaChronology from '../../img/suda/suda-chronology.jpg';
import sudaExhibitions from '../../img/suda/suda-exhibitions.jpg';
import sudaWorksENG from '../../img/suda/suda-work-section-ENG.jpg';
import sudaJP from '../../img/suda/suda-full-jp.jpg';

import SudaData from '../../data/projectData/SudaData';
import { webPages } from '../../data/projectOverviewData/WebPageObjects';

const SudaProject = () => {
    const { miscellaneous, miscHeadline } = SudaData;
    const { projects } = webPages;
    const project = projects.Suda;

    useEffect(() => {
        document.title = 'Grifold Studio | Suda Kokuta';
    }, []);

    return (
        <>
            <ProjectTitle project={project} />
            <ThreeImagesGrid img1={desktopImg} img2={iphoneImg} img3={iphoneImg2} />
            <Headline headline='Introducing the Artist' />
            <TwoImages imgLeft={sudaChronology} imgRight={sudaExhibitions} />
            <Headline headline='Bilingual: English &#38; Japanese Pages' />
            <TwoImages imgLeft={sudaWorksENG} imgRight={sudaJP} />
            <LargeTextCenter headline={miscHeadline} text={miscellaneous} />

            {/* div below: replace later */}
            <div style={{ height: '4rem' }}></div>
        </>
    );
};

export default SudaProject;
