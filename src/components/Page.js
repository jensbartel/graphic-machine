const Page = props => {
    const { cssStyle, data } = props;

    return (
        <div className='page'>
            <div className={cssStyle}>
                {data.map(item =>
                    item.img ? (
                        // fully-defined div
                        <div className='category-top' key={item.id}>
                            <div>
                                <div className='title'>{item.title}</div>
                                <div className='tools'>
                                    {item.tools.map(tool => (
                                        <p>{tool}</p>
                                    ))}
                                </div>
                            </div>
                            <div className='item-details'>
                                <p>{item.description}</p>
                                <p>{item.date}</p>
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
