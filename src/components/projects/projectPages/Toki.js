import OneImage from '../reuseComponents/OneImage';
import tokiImg1 from '../../../img/toki/toki-overview.jpg';
import tokiImg2 from '../../../img/toki/toki-overview-2.jpg';
import TokiData from '../../../data/projectData/TokiData';
import LargeTextCenter from '../reuseComponents/LargeTextCenter';
import ProjectTitle from '../reuseComponents/ProjectTitle';
import { webPages } from '../../../data/projectOverviewData/WebPageObjects';

const Toki = () => {
    const { introText, introHeadline, caption1, caption2 } = TokiData;
    const { projects } = webPages;
    const project = projects.filter(element => element.title.includes('Toki'));

    return (
        <div>
            <ProjectTitle project={project} />
            <OneImage img1={tokiImg1} cssStyle='one-image' caption={caption1} />
            <div style={{ marginTop: '4rem' }}></div>
            <OneImage img1={tokiImg2} cssStyle='one-image' caption={caption2} />
            <LargeTextCenter headline={introHeadline} text={introText} />

            {/* div below: replace later */}
            <div style={{ height: '4rem' }}></div>
        </div>
    );
};

export default Toki;
