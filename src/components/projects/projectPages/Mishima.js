import OneImage from '../reuseComponents/OneImage';
import mishima1 from '../../../img/mishima/mishima_macbook.jpg';
import { webPages } from '../../../data/projectOverviewData/WebPageObjects';
import ProjectTitle from '../reuseComponents/ProjectTitle';

const Mishima = () => {
    const { projects } = webPages;
    const project = projects.filter(element => element.title.includes('Mishima'));

    return (
        <div>
            <ProjectTitle project={project} />
            <OneImage img1={mishima1} cssStyle='one-image-variant' />
            <div style={{ marginTop: '4rem' }}></div>

            {/* div below: replace later */}
            <div style={{ height: '4rem' }}></div>
        </div>
    );
};

export default Mishima;
