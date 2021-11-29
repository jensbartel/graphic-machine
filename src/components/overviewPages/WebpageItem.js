import { useContext } from 'react';
import LangContext from '../../context/langContext';
import { Link } from 'react-router-dom';

const WebpageItem = props => {
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
        <div className='parallax-group'>
            <div className='parallax-inner'>
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
                    <div>
                        {tools.map(tool => (
                            <p key={tool}>{tool}</p>
                        ))}
                    </div>
                </div>
                <div className='image-container'>
                    <Link to={url}>
                        <img src={image} alt='' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WebpageItem;
