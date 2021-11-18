import imgLeft from '../../../img/suda/suda-chronology.jpg';
import imgRight from '../../../img/suda/suda-exhibitions.jpg';

const TwoImages = () => {
    return (
        <div className='two-images'>
            <div className='left-img'>
                <img src={imgLeft} alt='' />
            </div>
            <div className='right-img'>
                <img src={imgRight} alt='' />
            </div>
        </div>
    );
};

export default TwoImages;
