import React from 'react';

const OneImage = props => {
    const { img1, cssStyle } = props;
    return (
        <>
            <div className={cssStyle}>
                <img src={img1} alt='' />
            </div>
            <p>Damn right.</p>
        </>
    );
};

export default OneImage;
