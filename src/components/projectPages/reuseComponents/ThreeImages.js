const ThreeImages = props => {
    const { img1, img2, img3 } = props;
    return (
        <div className='three-images'>
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
        </div>
    );
};

export default ThreeImages;
