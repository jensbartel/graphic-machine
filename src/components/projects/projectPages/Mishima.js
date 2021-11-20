import OneImage from '../reuseComponents/OneImage';
import mishima1 from '../../../img/mishima/mishima_macbook.jpg';

const Mishima = () => {
    return (
        <div>
            <OneImage img1={mishima1} cssStyle='one-image-variant' />
            <div style={{ marginTop: '4rem' }}></div>

            {/* div below: replace later */}
            <div style={{ height: '4rem' }}></div>
        </div>
    );
};

export default Mishima;
