import html from 'react-html-parser';

const LargeTextCenter = props => {
    const { text, headline } = props;
    return (
        <>
            <div className='large-text-container'>
                <h2 className='headline'>{headline}</h2>
                {html(text)}
            </div>
        </>
    );
};

export default LargeTextCenter;
