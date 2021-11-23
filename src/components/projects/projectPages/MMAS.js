import { useEffect } from 'react';
// import MMAS_banner from '../../../img/banner/MMAS_banner-light.png';

const MMAS = () => {
    useEffect(() => {
        document.title = 'MMAS';
    }, []);
    return (
        <div className='project'>
            <p>Miyanomori Museum of Art, Sapporo</p>
        </div>
    );
};

export default MMAS;
