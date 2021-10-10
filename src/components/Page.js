import { useContext } from 'react';
import LangContext from '../context/langContext';
import SectionIntro from '../components/SectionIntro';
import FilterContext from '../context/filterContext';

const Page = props => {
    const filterContext = useContext(FilterContext);
    const { setFilter } = filterContext;

    const {
        cssStyle,
        data: { intro, projects },
    } = props;

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

    const toolClick = tool => {
        setFilter(tool);
    };

    return (
        <>
            <SectionIntro text={intro} />
            <div className='page'>
                <div className={cssStyle}>
                    {projects.map(item =>
                        item.img ? (
                            // fully-defined div
                            // refactor this into separate component
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
                                <div className='img-container'>
                                    <img src={item.img} alt='' />
                                    <div></div>
                                </div>
                            </div>
                        ) : (
                            // dummy div, remove later
                            <div className='banner-dummy' key={item.id}>
                                {item.title}
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default Page;
