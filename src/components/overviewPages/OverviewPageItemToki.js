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
        data: { id, title, titleFR, description, desFR, date, dateFR },
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
            <Link to='./webpages/toki'>
                <div className='overview-toki-inner'>
                    <CSSTransition key={1} in={show} appear={true} timeout={500} classNames='transition-toki-1'>
                        <p className='title'>{titleChoice}</p>
                    </CSSTransition>

                    <div className='description'>
                        <CSSTransition key={1} in={show} appear={true} timeout={1000} classNames='transition-toki-2'>
                            <div className='descript'>
                                <p>{descriptionChoice}</p>
                                <p>{dateChoice}</p>
                            </div>
                        </CSSTransition>
                    </div>

                    <div className='overview-toki-images'>
                        <div className='overview-toki-images-inner'>
                            <div className='first-image'>
                                <CSSTransition key={1} in={show} appear={true} timeout={1250} classNames='transition-toki-3'>
                                    <img src={toki1} alt='' className='first-image' />
                                </CSSTransition>
                            </div>
                            <div className='second-image'>
                                <CSSTransition key={1} in={show} appear={true} timeout={1500} classNames='transition-toki-4'>
                                    <img src={toki2} alt='' />
                                </CSSTransition>
                            </div>
                            <div className='third-image'>
                                <CSSTransition key={1} in={show} appear={true} timeout={1750} classNames='transition-toki-5'>
                                    <img src={toki3} alt='' className='first-image' />
                                </CSSTransition>
                            </div>
                            <div className='fourth-image'>
                                <CSSTransition
                                    key={1}
                                    in={show}
                                    appear={true}
                                    timeout={2000}
                                    classNames='transition-toki-6'
                                    addEndListener={node => {
                                        node.addEventListener(
                                            'transitionend',
                                            () => {
                                                setTimeout(() => {
                                                    setAnimation(id);
                                                }, 500);
                                            },
                                            false
                                        );
                                    }}
                                >
                                    <img src={toki4} alt='' />
                                </CSSTransition>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default OverviewpageItemToki;
