import { useContext } from 'react';
import { useState, useEffect } from 'react';

import LangContext from '../../context/langContext';
import { Link } from 'react-router-dom';
import roundtable from '../../img/overview/roundtable.jpg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const OverviewpageItem2 = props => {
    const {
        data: { title, titleFR, description, desFR, date, dateFR, tools, url },
        image,
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

    const buttonClicked = () => {
        setShow(!show);
    };

    useEffect(() => {
        setShow(!show);
        // eslint-disable-next-line
    }, []);

    return (
        <div className='overview-item-container'>
            <div className='overview-inner'>
                <TransitionGroup>
                    <Link to={url}>
                        <CSSTransition key={1} in={show} appear={true} timeout={500} classNames='transition'>
                            <p className='title'>{titleChoice}</p>
                        </CSSTransition>
                    </Link>

                    <Link to={url}>
                        <CSSTransition key={2} in={show} appear={true} timeout={1000} classNames='trans-2'>
                            <div className='description'>
                                <p>{descriptionChoice}</p>
                                <p>{dateChoice}</p>
                            </div>
                        </CSSTransition>
                    </Link>

                    <div className='first-image'>
                        <Link to={url}>
                            <CSSTransition key={3} in={show} appear={true} timeout={1500} classNames='trans-3'>
                                <img src={image} alt='' className='first-image' />
                            </CSSTransition>
                        </Link>
                        <div className='second-image'>
                            <Link to={url}>
                                <CSSTransition key={4} in={show} appear={true} timeout={2000} classNames='trans-4'>
                                    <img src={roundtable} alt='' />
                                </CSSTransition>
                            </Link>
                        </div>
                    </div>
                </TransitionGroup>
            </div>
        </div>
    );
};

export default OverviewpageItem2;
