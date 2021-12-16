import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const WebpagesOverview3 = () => {
    const { ref, inView } = useInView({
        threshold: 0.25, // 1: element is fully visible, 0: element is not visible
        triggerOnce: true,
    });

    useEffect(() => {
        console.log(inView);
        // eslint-disable-next-line
    }, []);

    const clicked = () => {
        console.log('clicked');
        console.log(inView);
    };

    const randomVariable = false;

    return (
        <div className='overview3'>
            <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
                <button style={{ border: 'none', padding: '0.5rem 3rem', borderRadius: '5px' }} onClick={() => clicked()}>
                    Click
                </button>
            </div>

            <div className={inView ? 'overview3-container active' : 'overview3-container'}>Hi there 1</div>
            <div className={inView ? 'overview3-container active' : 'overview3-container'}>Hi there 2</div>

            {/* below, the "trigger" item */}
            <div ref={ref} className='overview3-container'>
                Hi there 3
            </div>

            <div className={inView ? 'overview3-container active' : 'overview3-container'}>Hi there 4</div>
            <div className={inView && randomVariable ? 'overview3-container active' : 'overview3-container'}>Hi there 5</div>
            <div className={inView ? 'overview3-container active' : 'overview3-container'}>Hi there 6</div>
        </div>
    );
};

export default WebpagesOverview3;
