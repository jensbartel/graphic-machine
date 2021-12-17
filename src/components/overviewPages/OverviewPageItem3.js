import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import AnimationContext from '../../context/animation/animationContext';

const OverviewPageItem3 = props => {
    const {
        id,
        data: { title, description },
    } = props;
    const { ref, inView } = useInView({
        threshold: 0.5, // 1: element is fully visible, 0: element is not visible
        triggerOnce: true,
    });

    const animationContext = useContext(AnimationContext);
    const { setAnimation, animate } = animationContext;

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
        <div ref={ref} className={inView ? 'overview3-container active' : 'overview3-container'}>
            <div className='container-inner'>
                <CSSTransition
                    key={1}
                    in={inView && trigger}
                    appear={true}
                    timeout={1000}
                    classNames='anim-1'
                    unmountOnExit
                >
                    <div className='title'>{title}</div>
                </CSSTransition>
                <CSSTransition
                    key={2}
                    in={inView && trigger}
                    appear={true}
                    timeout={2000}
                    classNames='anim-2'
                    unmountOnExit
                >
                    <div className='description'>{description}</div>
                </CSSTransition>
                <CSSTransition
                    key={3}
                    in={inView && trigger}
                    appear={true}
                    timeout={3000}
                    classNames='anim-3'
                    onEntered={() => {
                        setAnimation(id);
                    }}
                    unmountOnExit
                >
                    <div className='image'>Image</div>
                </CSSTransition>
                {/* <div className='description'>Description</div> */}
                {/* <div className='image'>Image</div> */}
            </div>
        </div>
    );
};

export default OverviewPageItem3;
