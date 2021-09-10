const Page = props => {
    const { cssStyle, data } = props;

    return (
        <div className='page'>
            <div className={cssStyle}>{data.map(item => (
                item.img ? 
                    // fully-defined div
                    <div className='category-top' key={item.id}>
                        <div>
                            <div className='title'>{item.title}</div>
                            <div className="tools">
                                {item.tools.map(tool => (
                                    <p>{tool}</p>
                                ))}
                            </div>
                        </div>
                        <p>{item.description}</p>
                        <p>{item.date}</p>
                        <img src={item.img} alt=''/>    
                    </div> 
                : 
                    // dummy div
                    <div className='banner-dummy' key={item.id}>{item.title}</div>))} 
            </div>
        </div>
    );
};

export default Page;
