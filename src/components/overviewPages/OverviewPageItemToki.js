import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import toki1 from '../../img/overview/toki1.jpg';
import toki2 from '../../img/overview/toki2.jpg';
import toki3 from '../../img/overview/toki3.jpg';
import toki4 from '../../img/overview/toki4.jpg';

import LangContext from '../../context/langContext';

import AnimationContext from '../../context/animation/animationContext';

const OverviewpageItemToki = props => {
    const animationContext = useContext(AnimationContext);
    const { setAnimation } = animationContext;

    const {
        data: { id, title, titleFR, description, desFR, date, dateFR, url },
        image,
        image2,
    } = props;

    const langContext = useContext(LangContext);
    const { lang } = langContext;

    let titleChoice, descriptionChoice, dateChoice;
    if (lang.state === 'francais') {
        titleChoice = titleFR;
        descriptionChoice = desFR;
        dateChoice = dateFR;
    } else {
        titleChoice = title;
        descriptionChoice = description;
        dateChoice = date;
    }

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(!show);
        // eslint-disable-next-line
    }, []);

    return (
        <div className='overview-toki-container'>
            <div className='overview-toki-inner'>
                <p className='title'>{titleChoice}</p>

                <div className='description'>
                    <p>{descriptionChoice}</p>
                    <p>{dateChoice}</p>
                </div>

                <div className='overview-toki-images'>
                    <div className='overview-toki-images-inner'>
                        <div className='first-image'>
                            <img src={toki1} alt='' className='first-image' />
                        </div>
                        <div className='second-image'>
                            <img src={toki2} alt='' />
                        </div>
                        <div className='third-image'>
                            <img src={toki3} alt='' className='first-image' />
                        </div>
                        <div className='fourth-image'>
                            <img src={toki4} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewpageItemToki;
