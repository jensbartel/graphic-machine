import PageItem from './PageItem';
import SectionIntro from './SectionIntro';

const Page = props => {
    const {
        cssStyle,
        data: { intro, projectsArray },
    } = props;

    return (
        <>
            <SectionIntro text={intro} />
            <div className='page'>
                <div className={cssStyle}>
                    {projectsArray.map(item =>
                        item.img ? (
                            <PageItem item={item} key={item.id} />
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
