import React from 'react';

const OneImage = props => {
    let { img1, caption, cssStyle } = props;
    // caption = 'Hello';
    return (
        <>
            <div className={cssStyle}>
                <img src={img1} alt='' />
            </div>
            <p className='caption'>{caption}</p>
        </>
    );
};

export default OneImage;
