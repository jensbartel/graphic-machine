import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import AnimationContext from '../../../context/animation/animationContext';
import LangContext from '../../../context/lang/langContext';

// images
import resnet1 from '../../../img/overview/resnet2-1.jpg';
import resnet2 from '../../../img/overview/resnet2-2.jpg';
import resnet3 from '../../../img/overview/resnet2-3.jpg';
import resnet4 from '../../../img/overview/resnet2-4.jpg';

import { resNet } from '../../../data/projectData.json'


const OverviewPageItemResNet = props => {
    const { title, titleFR, description, desFR, date, dateFR, url } = resNet;
    const { id } = props;

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
        <div ref={ref} className='overview-container'>
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
                <div className='toki-images'>
                    <div className='toki-images-inner'>
                        <CSSTransition
                            key={3}
                            in={inView && trigger}
                            appear={true}
                            timeout={950}
                            classNames='transition-toki-3'
                            unmountOnExit
                        >
                            <div className='toki-one-image'>
                                <img src={resnet1} alt='' />
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
                            <div className='toki-one-image'>
                                <img src={resnet2} alt='' />
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
                            <div className='toki-one-image'>
                                <img src={resnet3} alt='' />
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
                            <div className='toki-one-image'>
                                <img src={resnet4} alt='' />
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewPageItemResNet;
