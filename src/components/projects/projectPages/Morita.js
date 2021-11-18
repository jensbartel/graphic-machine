import LargeTextCenter from '../reuseComponents/LargeTextCenter';
import MoritaData from '../../../data/projectData/MoritaData';
import TwoVideos from '../reuseComponents/TwoVideos';
import ThreeImages from '../reuseComponents/ThreeImages';
// import LargeImageLeft from '../reuseComponents/LargeImageLeft';

import desktopImg from '../../../img/morita/morita_macbook.jpg';
import ipadImg from '../../../img/morita/morita_ipad.jpg';
import iphoneImg from '../../../img/morita/morita_iphone.jpg';
import ImageCollage1 from '../reuseComponents/ImageCollage1';

// collage images
import collage1_1 from '../../../img/morita/morita_vip1.jpg';
import collage1_2 from '../../../img/morita/morita_vip2.jpg';
import collage1_3 from '../../../img/morita/mortia-part4-snippet.jpg';
import collage1_4 from '../../../img/morita/footnote.jpg';
import collage1_5 from '../../../img/morita/morita-part3-snippet.jpg';

const MoritaProject = () => {
    const { headline2, headline3, FootNoteText } = MoritaData;

    return (
        <>
            {/* <LargeImageLeft /> */}
            {/* <LargeTextCenter headline='Morita Shiryū Exhibition' /> */}
            <ThreeImages img1={desktopImg} img2={ipadImg} img3={iphoneImg} />
            <LargeTextCenter headline='Pullquote Animations' />
            <TwoVideos />
            <LargeTextCenter headline={headline2} />
            <ImageCollage1 img1={collage1_1} img2={collage1_2} img3={collage1_3} img4={collage1_4} img5={collage1_5} />
            <LargeTextCenter headline={headline3} text={FootNoteText} />

            {/* div below: replace later */}
            <div style={{ height: '4rem' }}></div>
        </>
    );
};

export default MoritaProject;
