import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import AnimationContext from '../../context/animation/animationContext';
import LangContext from '../../context/langContext';

const OverviewPageItem = props => {
    const {
        id,
        data: { title, titleFR, description, desFR, date, dateFR, url },
        image,
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

    // the approach seems awkward but it appears to work
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
        // remove the 'active' class later
        <div ref={ref} className={inView ? 'overview-container active' : 'overview-container'}>
            <div className='container-inner'>
                <CSSTransition
                    key={1}
                    in={inView && trigger}
                    appear={true}
                    timeout={350}
                    classNames='anim-1'
                    unmountOnExit
                >
                    <div className='title'>
                        <Link to={url}>
                            <p>{titleChoice}</p>
                        </Link>
                    </div>
                </CSSTransition>
                <CSSTransition
                    key={2}
                    in={inView && trigger}
                    appear={true}
                    timeout={700}
                    classNames='anim-2'
                    unmountOnExit
                >
                    <div className='description'>
                        <Link to={url}>
                            <p>{descriptionChoice}</p>
                            <p>{dateChoice}</p>
                        </Link>
                    </div>
                </CSSTransition>
                <CSSTransition
                    key={3}
                    in={inView && trigger}
                    appear={true}
                    timeout={1050}
                    classNames='anim-3'
                    onEntered={() => {
                        // setTimeout(() => {
                        setAnimation(id);
                        // }, 350);
                    }}
                    unmountOnExit
                >
                    <div className='image'>
                        <Link to={url}>
                            <img src={image} alt='' />
                        </Link>
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
};

export default OverviewPageItem;
