const TwoImages = props => {
    const { imgLeft, imgRight, captionLeft, captionRight } = props;
    return (
        <div className='two-images'>
            <div className='left-img'>
                <img src={imgLeft} alt='' />
                {captionLeft && <p className='caption-no-margin'>{captionLeft}</p>}
            </div>
            <div className='right-img'>
                <img src={imgRight} alt='' />
                {captionLeft && <p className='caption-no-margin'>{captionRight}</p>}
            </div>
        </div>
    );
};

export default TwoImages;
