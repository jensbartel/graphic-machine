const Page = (props) => {
    const { cssStyle, data } = props;

    return (
        <div className='page'>
            <div className={cssStyle}>
                {data.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))}
            </div>
        </div>
    );
};

export default Page;
