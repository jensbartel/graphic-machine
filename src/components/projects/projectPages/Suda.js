import { useEffect } from 'react';
import LargeTextCenter from '../reuseComponents/LargeTextCenter';
import ThreeImagesGrid from '../reuseComponents/ThreeImagesGrid';
import TwoImages from '../reuseComponents/TwoImages';

import SudaData from '../../../data/projectData/SudaData';

import desktopImg from '../../../img/suda/suda_macbook.jpg';
import iphoneImg from '../../../img/suda/suda_iphone.jpg';
import iphoneImg2 from '../../../img/suda/suda_iphone-2.jpg';
import sudaChronology from '../../../img/suda/suda-chronology.jpg';
import sudaExhibitions from '../../../img/suda/suda-exhibitions.jpg';
import sudaWorksENG from '../../../img/suda/suda-work-section-ENG.jpg';
import sudaJP from '../../../img/suda/suda-full-jp.jpg';

import { webPages } from '../../../data/projectOverviewData/WebPageObjects';
import ProjectTitle from '../reuseComponents/ProjectTitle';

const SudaProject = () => {
    const { miscellaneous, miscHeadline } = SudaData;
    const { projects } = webPages;
    // const project = projects.filter(element => element.title.includes('Suda'));
    const project = projects.Suda;

    useEffect(() => {
        document.title = 'Suda Kokuta';
    }, []);

    return (
        <>
            <ProjectTitle project={project} />
            <ThreeImagesGrid img1={desktopImg} img2={iphoneImg} img3={iphoneImg2} />
            <LargeTextCenter headline='Introducing the Artist' />
            <TwoImages imgLeft={sudaChronology} imgRight={sudaExhibitions} />
            <LargeTextCenter headline='Bilingual: English &#38; Japanese Pages' />
            <TwoImages imgLeft={sudaWorksENG} imgRight={sudaJP} />
            <LargeTextCenter headline={miscHeadline} text={miscellaneous} />

            {/* div below: replace later */}
            <div style={{ height: '4rem' }}></div>
        </>
    );
};

export default SudaProject;
