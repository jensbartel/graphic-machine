import LargeTextCenter from '../reuseComponents/LargeTextCenter';
// import LargeImageLeft from '../reuseComponents/LargeImageLeft';
// import MoritaData from '../../../data/projectData/MoritaData';
// import ThreeImages from '../reuseComponents/ThreeImages';
import ThreeImagesGrid from '../reuseComponents/ThreeImagesGrid';
import TwoImages from '../reuseComponents/TwoImages';

import desktopImg from '../../../img/suda/suda_macbook.jpg';
// import ipadImg from '../../../img/morita/morita_ipad.jpg';
import iphoneImg from '../../../img/suda/suda_iphone.jpg';
import iphoneImg2 from '../../../img/suda/suda_iphone-2.jpg';

const SudaProject = () => {
    // const { headline2, headline3, FootNoteText } = MoritaData;

    return (
        <>
            <ThreeImagesGrid img1={desktopImg} img2={iphoneImg} img3={iphoneImg2} />
            <LargeTextCenter headline='Introducing the Artist' />
            <TwoImages />
            {/* div below: replace later */}
            <div style={{ height: '4rem' }}></div>
        </>
    );
};

export default SudaProject;
