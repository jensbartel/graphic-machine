// import { useEffect, useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import AnimationContext from '../../context/animation/animationContext';

import ClientAppTop from './webappItems/ClientAppTop';
import ResNetTop from './webappItems/ResNetTop';

const WebappsOverview = () => {
    // const animationContext = useContext(AnimationContext);
    // let { clearAnimation } = animationContext;

    const navigate = useNavigate();

    useEffect(() => {
        // document.title = 'Grifold Studio | Web Apps';
        // return () => {
        //     clearAnimation();
        // };

        navigate(-1);
        // eslint-disable-next-line
    }, []);

    return (
        <div className='overview'>
            <ClientAppTop id={1} />
            <ResNetTop id={2} />
        </div>
    );
};

export default WebappsOverview;
