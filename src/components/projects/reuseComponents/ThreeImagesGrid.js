const ThreeImagesGrid = props => {
    const { img1, img2, img3 } = props;
    return (
        <div className='three-images-grid'>
            <div className='element'>
                <img src={img1} alt='' />
            </div>
            <div className='element'>
                <img src={img2} alt='' />
            </div>
            <div className='element'>
                <img src={img3} alt='' />
            </div>
        </div>
    );
};

export default ThreeImagesGrid;
