import React from 'react';

const BackToTop = () => {
    const toTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className='back-to-top' onClick={() => toTop()}>
            <i className='fas fa-chevron-up'></i>
        </div>
    );
};

export default BackToTop;
