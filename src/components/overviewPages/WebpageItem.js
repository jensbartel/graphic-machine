import { useContext } from 'react';
import { Link } from 'react-router-dom';
import LangContext from '../../context/langContext';

const WebpageItem = props => {
    const {
        data: { title, titleFR, description, desFR, date, dateFR, tools, url },
        image,
        css,
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
            <div className={css}>
                <div className='parallax-inner'>
                    <div className='text-container'>
                        <div>
                            <Link to={url}>
                                <p className='title'>{titleChoice}</p>
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
                    <div className='inner-image'>
                        <Link to={url}>
                            <img src={image} alt='' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebpageItem;
