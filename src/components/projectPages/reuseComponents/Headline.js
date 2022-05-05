const Headline = props => {
    const { headline } = props;
    return (
        <>
            <div className='headline'>
                <h2>{headline}</h2>
            </div>
        </>
    );
};

export default Headline;
