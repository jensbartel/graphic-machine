// import OneImage from '../reuseComponents/OneImage';
import ThreeImages from '../reuseComponents/ThreeImages';
import mishima1 from '../../../img/mishima/mishima-macbook.jpg';
import mishima2 from '../../../img/mishima/mishima-ipad-eng.jpg';
import mishima3 from '../../../img/mishima/mishima-iphone.jpg';
import { webPages } from '../../../data/projectOverviewData/WebPageObjects';
import ProjectTitle from '../reuseComponents/ProjectTitle';
import LargeTextCenter from '../reuseComponents/LargeTextCenter';

const Mishima = () => {
    const { projects } = webPages;
    const project = projects.filter(element => element.title.includes('Mishima'));

    return (
        <div>
            <ProjectTitle project={project} />
            {/* <OneImage img1={mishima1} cssStyle='one-image-variant' /> */}
            <ThreeImages img1={mishima1} img2={mishima2} img3={mishima3} />
            <LargeTextCenter headline='Layout & Sales Value' />
            {/* <div style={{ marginTop: '4rem' }}></div> */}

            {/* div below: replace later */}
            <div style={{ height: '4rem' }}></div>
        </div>
    );
};

export default Mishima;
