import PageItem from './PageItem';
import SectionIntro from './SectionIntro';

const Page = props => {
    const {
        cssStyle,
        data: { intro, projectsArray },
    } = props;

    // const projArray = Array.of(projects);
    // console.log(projects);
    // console.log(projArray);

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
