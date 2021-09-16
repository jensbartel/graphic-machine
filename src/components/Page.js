import { useContext } from 'react';
import LangContext from '../context/langContext';

const Page = props => {
    const { cssStyle, data } = props;

    const langContext = useContext(LangContext);
    const { lang } = langContext;

    // odd: the language string is inside an object 'lang', with a key 'lang'
    // rectify later

    let titleChoice, descriptionChoice, dateChoice;
    if (lang.lang === 'francais') {
        titleChoice = 'titleFR';
        descriptionChoice = 'desFR';
        dateChoice = 'dateFR';
    } else {
        titleChoice = 'title';
        descriptionChoice = 'description';
        dateChoice = 'date';
    }

    return (
        <div className='page'>
            <div className={cssStyle}>
                {data.map(item =>
                    item.img ? (
                        // fully-defined div
                        <div className='category-top' key={item.id}>
                            <div>
                                <div className='title'>{item[titleChoice]}</div>
                                <div className='tools'>
                                    {item.tools.map(tool => (
                                        <p key={tool}>{tool}</p>
                                    ))}
                                </div>
                            </div>
                            <div className='item-details'>
                                <p>{item[descriptionChoice]}</p>
                                <p>{item[dateChoice]}</p>
                            </div>
                            <div className='img-container'>
                                <img src={item.img} alt='' />
                                <div></div>
                            </div>
                        </div>
                    ) : (
                        // dummy div
                        <div className='banner-dummy' key={item.id}>
                            {item.title}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Page;
