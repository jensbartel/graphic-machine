import LargeImageLeft from '../reuseComponents/LargeImageLeft';
import LargeTextCenter from '../reuseComponents/LargeTextCenter';
import LargeVideo from '../reuseComponents/LargeVideo';
import MoritaData from '../../../data/projectData/MoritaData';

const MoritaProject = () => {
    const { headline1, headline2, testText1, MoritaVIPText, headline3, FootNoteText } = MoritaData;

    return (
        <>
            {/* note: most data for large image left is currently hard-coded; replace */}
            <LargeImageLeft />
            <LargeTextCenter headline={headline1} text={testText1} />
            <LargeVideo />
            <LargeTextCenter headline={headline2} text={MoritaVIPText} />
            <LargeTextCenter headline={headline3} text={FootNoteText} />

            {/* div below: replace later */}
            <div style={{ height: '4rem' }}></div>
        </>
    );
};

export default MoritaProject;
