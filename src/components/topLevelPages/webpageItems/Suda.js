import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import AnimationContext from '../../context/animation/animationContext';
import LangContext from '../../context/langContext';

import sudaLeft from '../../img/overview/suda-left.jpg';
import sudaRight from '../../img/overview/suda-right.jpg';

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
                <div className='suda-images'>
                    <div className='suda-inner'>
                        <CSSTransition
                            key={3}
                            in={inView && trigger}
                            appear={true}
                            timeout={950}
                            classNames='transition-toki-3'
                            unmountOnExit
                        >
                            <div className='suda-left-container'>
                                <img src={sudaLeft} alt='' />
                            </div>
                        </CSSTransition>

                        <CSSTransition
                            key={4}
                            in={inView && trigger}
                            appear={true}
                            timeout={1200}
                            classNames='transition-toki-4'
                            onEntered={() => {
                                setAnimation(id);
                            }}
                            unmountOnExit
                        >
                            <div className='suda-right-container'>
                                <img src={sudaRight} alt='' />
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewPageItemSuda;
