import { useContext } from 'react';
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
                    <img src={item.img} alt='' />
                    <div></div>
                </div>
            </Link>
        </div>
    );
};

export default PageItem;
