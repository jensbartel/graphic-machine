import React from 'react';

const ImageCollage1 = props => {
    const { img1, img2, img3, img5 } = props;
    return (
        <section className='image-collage-1'>
            <div id='item-1'>
                <img src={img1} alt='' />
            </div>
            <div id='item-2'>
                <img src={img2} alt='' />
            </div>
            <div id='item-3'>
                <img src={img3} alt='' />
            </div>
            <div id='item-4'></div>
            <div id='item-5'>
                <img src={img5} alt='' />
            </div>
        </section>
    );
};

export default ImageCollage1;
