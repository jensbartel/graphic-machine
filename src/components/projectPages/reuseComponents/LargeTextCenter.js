import html from 'html-react-parser';

const LargeTextCenter = props => {
    const { text, headline, css } = props;
    
    return (
        <>
            <div className='large-text-container'>
                <h2>{headline}</h2>
                <p className={css}>{html(text)}</p>
            </div>
        </>
    );
};

export default LargeTextCenter;
