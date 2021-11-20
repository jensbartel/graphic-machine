import OneImage from '../reuseComponents/OneImage';
import tokiImg1 from '../../../img/toki/toki-overview.jpg';
import tokiImg2 from '../../../img/toki/toki-overview-2.jpg';
import TokiData from '../../../data/projectData/TokiData';
import LargeTextCenter from '../reuseComponents/LargeTextCenter';

const Toki = () => {
    const { introText, introHeadline } = TokiData;
    return (
        <div>
            <OneImage img1={tokiImg1} cssStyle='one-image' />
            <div style={{ marginTop: '4rem' }}></div>
            <OneImage img1={tokiImg2} cssStyle='one-image' />
            <LargeTextCenter headline={introHeadline} text={introText} />

            {/* div below: replace later */}
            <div style={{ height: '4rem' }}></div>
        </div>
    );
};

export default Toki;
