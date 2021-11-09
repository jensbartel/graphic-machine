const LargeTextCenter = props => {
    const { text, headline } = props;
    return (
        <>
            <div className='large-text-container'>
                <h2 className='headline'>{headline}</h2>
                {text}
            </div>
        </>
    );
};

export default LargeTextCenter;
