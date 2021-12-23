import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import toki1 from '../../img/overview/toki1.jpg';
import toki2 from '../../img/overview/toki2.jpg';
import toki3 from '../../img/overview/toki3.jpg';
import toki4 from '../../img/overview/toki4.jpg';

import AnimationContext from '../../context/animation/animationContext';
import LangContext from '../../context/langContext';

const OverviewPageItemToki = props => {
    const {
        id,
        data: { title, titleFR, description, desFR, date, dateFR, url },
    } = props;

    const { ref, inView } = useInView({
        threshold: 0.25, // 1: element is fully visible, 0: element is not visible
        triggerOnce: true,
    });

    const animationContext = useContext(AnimationContext);
    const { setAnimation, animate } = animationContext;

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

    let trigger = true;
    const animateArray = Object.values(animate);
    switch (id) {
        case 1:
            trigger = animateArray[0];
            break;
        case 2:
            trigger = animateArray[1];
            break;
        case 3:
            trigger = animateArray[2];
            break;
        case 4:
            trigger = animateArray[3];
            break;
        default:
            break;
    }

    return (
        <div ref={ref} className='overview3-container' style={{ paddingBottom: '67.5%' }}>
            <div className='container-inner'>
                {/* headline */}
                <CSSTransition
                    key={1}
                    in={inView && trigger}
                    appear={true}
                    timeout={350}
                    classNames='transition-toki-1'
                    unmountOnExit
                >
                    <div className='title'>
                        <Link to={url}>
                            <p>{titleChoice}</p>
                        </Link>
                    </div>
                </CSSTransition>

                {/* description & date */}
                <CSSTransition
                    key={2}
                    in={inView && trigger}
                    appear={true}
                    timeout={700}
                    classNames='transition-toki-2'
                    unmountOnExit
                >
                    <div className='description'>
                        <Link to={url}>
                            <p>{descriptionChoice}</p>
                            <p>{dateChoice}</p>
                        </Link>
                    </div>
                </CSSTransition>

                {/* images */}
                <div className='toki2-images'>
                    <div className='toki2-images-inner'>
                        <CSSTransition
                            key={3}
                            in={inView && trigger}
                            appear={true}
                            timeout={950}
                            classNames='transition-toki-3'
                            unmountOnExit
                        >
                            <div className='toki2-one-image'>
                                <img src={toki1} alt='' />
                            </div>
                        </CSSTransition>

                        <CSSTransition
                            key={4}
                            in={inView && trigger}
                            appear={true}
                            timeout={1200}
                            classNames='transition-toki-4'
                            unmountOnExit
                        >
                            <div className='toki2-one-image'>
                                <img src={toki2} alt='' />
                            </div>
                        </CSSTransition>

                        <CSSTransition
                            key={5}
                            in={inView && trigger}
                            appear={true}
                            timeout={1450}
                            classNames='transition-toki-5'
                            unmountOnExit
                        >
                            <div className='toki2-one-image'>
                                <img src={toki3} alt='' />
                            </div>
                        </CSSTransition>

                        <CSSTransition
                            key={6}
                            in={inView && trigger}
                            appear={true}
                            timeout={1700}
                            classNames='transition-toki-6'
                            onEntered={() => {
                                setAnimation(id);
                            }}
                            unmountOnExit
                        >
                            <div className='toki2-one-image'>
                                <img src={toki4} alt='' />
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewPageItemToki;
