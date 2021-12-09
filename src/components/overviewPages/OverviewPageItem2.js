import { useContext } from 'react';
import LangContext from '../../context/langContext';
import { Link } from 'react-router-dom';
import roundtable from '../../img/overview/roundtable.png'

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

    return (
        <div className='overview-item-container'>
            <div className='overview-inner'>
                <div className='text-container'>
                    <div>
                        <Link to={url}>
                            <p className='title'>{titleChoice}</p>
                        </Link>
                        <Link to={url}>
                            <p>{descriptionChoice}</p>
                            <p>{dateChoice}</p>
                        </Link>
                    </div>              
                </div>
                <div className='image-container'>
                    <div className="first-image">
                        <Link to={url} >
                            <img src={image} alt='' className='first-image'/>
                        </Link>
                    </div>
                    <div className='second-image'>
                        <Link to={url}>
                            <img src={roundtable} alt='' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewpageItem2;
