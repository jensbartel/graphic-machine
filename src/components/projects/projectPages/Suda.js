import LargeTextCenter from '../reuseComponents/LargeTextCenter';
import ThreeImagesGrid from '../reuseComponents/ThreeImagesGrid';
import TwoImages from '../reuseComponents/TwoImages';

import desktopImg from '../../../img/suda/suda_macbook.jpg';
import iphoneImg from '../../../img/suda/suda_iphone.jpg';
import iphoneImg2 from '../../../img/suda/suda_iphone-2.jpg';

const SudaProject = () => {
    return (
        <>
            <ThreeImagesGrid img1={desktopImg} img2={iphoneImg} img3={iphoneImg2} />
            <LargeTextCenter headline='Introducing the Artist' />
            <TwoImages />
            <LargeTextCenter headline='Bilingual: English & Japanese Pages' />

            {/* div below: replace later */}
            <div style={{ height: '4rem' }}></div>
        </>
    );
};

export default SudaProject;
