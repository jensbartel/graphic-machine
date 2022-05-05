import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import AnimationContext from '../../context/animation/animationContext';
import LangContext from '../../context/langContext';

import clientAppLeft from '../../img/overview/clientApp-2.jpg';
import clientAppRight from '../../img/overview/clientApp-1.jpg';
import clientAppTop from '../../img/overview/clientApp-3.png';
import clientAppTopRight from '../../img/overview/clientApp-4.png';

const OverviewPageItemSuda = props => {
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
        <div ref={ref} className='overview-container overview-suda-container'>
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
                <div className='client-app-images'>
                    <div className='client-app-inner'>
                        <CSSTransition
                            key={3}
                            in={inView && trigger}
                            appear={true}
                            timeout={950}
                            classNames='transition-toki-3'
                            unmountOnExit
                        >
                            <div className='client-app-left-container'>
                                <img src={clientAppLeft} alt='' />
                            </div>
                        </CSSTransition>

                        <CSSTransition
                            key={4}
                            in={inView && trigger}
                            appear={true}
                            timeout={1200}
                            classNames='transition-toki-7'
                            unmountOnExit
                        >
                            <div className='client-app-top'>
                                <img src={clientAppTop} alt='' />
                            </div>
                        </CSSTransition>

                        <CSSTransition
                            key={5}
                            in={inView && trigger}
                            appear={true}
                            timeout={1450}
                            classNames='transition-toki-8'
                            unmountOnExit
                        >
                            <div className='client-app-right-container'>
                                <img src={clientAppRight} alt='' />
                            </div>
                        </CSSTransition>

                        <CSSTransition
                            key={6}
                            in={inView && trigger}
                            appear={true}
                            timeout={1700}
                            classNames='transition-toki-9'
                            onEntered={() => {
                                setAnimation(id);
                            }}
                            unmountOnExit
                        >
                            <div className='client-app-right'>
                                <img src={clientAppTopRight} alt='' />
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewPageItemSuda;
