const TwoImages = props => {
    const { imgLeft, imgRight } = props;
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
