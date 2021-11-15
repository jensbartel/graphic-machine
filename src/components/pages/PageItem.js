import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import FilterContext from '../../context/filterContext';
import LangContext from '../../context/langContext';

const PageItem = props => {
    // Note: Filter context is not used currently; remove altogether?
    const filterContext = useContext(FilterContext);
    const { setFilter } = filterContext;

    const toolClick = tool => {
        setFilter(tool);
    };

    const langContext = useContext(LangContext);
    const { lang } = langContext;

    let titleChoice, descriptionChoice, dateChoice;
    if (lang.state === 'francais') {
        titleChoice = 'titleFR';
        descriptionChoice = 'desFR';
        dateChoice = 'dateFR';
    } else {
        titleChoice = 'title';
        descriptionChoice = 'description';
        dateChoice = 'date';
    }

    const { item } = props;

    const [isActive, setActive] = useState(false);
    const [animationType, setAnimationType] = useState();
    const toggleIn = id => {
        setActive(true);
        switch (id) {
            case 1:
                setAnimationType('banner-active-1');
                break;
            case 2:
                setAnimationType('banner-active-2');
                break;
            case 3:
                setAnimationType('banner-active-3');
                break;
            default:
                setAnimationType('banner-active');
                return;
        }
    };

    const toggleOut = id => {
        setActive(false);
        setAnimationType('');
    };

    return (
        <div className='category-top' key={item.id}>
            <div>
                <div className='title'>{item[titleChoice]}</div>
                <div className='tools'>
                    {item.tools.map(tool => (
                        <p key={tool} onClick={() => toolClick(tool)}>
                            {tool}
                        </p>
                    ))}
                </div>
            </div>
            <div className='item-details'>
                <p>{item[descriptionChoice]}</p>
                <p>{item[dateChoice]}</p>
            </div>
            <Link to={item.url}>
                <div className='img-container'>
                    <div id='background-to-toggle' className={isActive ? `${animationType}` : ''}></div>
                    <img src={item.img} alt='' />
                    <div onMouseEnter={() => toggleIn(item.id)} onMouseOut={() => toggleOut(item.id)}></div>
                </div>
            </Link>
        </div>
    );
};

export default PageItem;
