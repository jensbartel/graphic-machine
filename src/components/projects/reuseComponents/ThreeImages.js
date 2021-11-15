import React from 'react';
// import desktopImg from '../../../img/morita/morita_macbook.jpg';
// import ipadImg from '../../../img/morita/morita_ipad.jpg';
// import iphoneImg from '../../../img/morita/morita_iphone.jpg';

const ThreeImages = props => {
    const { img1, img2, img3 } = props;
    return (
        <div className='two-images'>
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            {/* <p>Desktop view.</p> */}
        </div>
    );
};

export default ThreeImages;
