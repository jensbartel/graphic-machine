import LargeTextCenter from '../reuseComponents/LargeTextCenter';
import MoritaData from '../../../data/projectData/MoritaData';
import TwoVideos from '../reuseComponents/TwoVideos';
import ThreeImages from '../reuseComponents/ThreeImages';

import desktopImg from '../../../img/morita/morita_macbook.jpg';
import ipadImg from '../../../img/morita/morita_ipad.jpg';
import iphoneImg from '../../../img/morita/morita_iphone.jpg';
import vip1 from '../../../img/morita/morita_vip1.jpg';
import vip2 from '../../../img/morita/morita_vip2.jpg';

const MoritaProject = () => {
    const { headline2, headline3, FootNoteText } = MoritaData;

    return (
        <>
            <ThreeImages img1={desktopImg} img2={ipadImg} img3={iphoneImg} />
            <TwoVideos />
            <LargeTextCenter headline={headline2} />
            <ThreeImages img1={vip1} img2={vip2} />
            <LargeTextCenter headline={headline3} text={FootNoteText} />

            {/* div below: replace later */}
            <div style={{ height: '4rem' }}></div>
        </>
    );
};

export default MoritaProject;
