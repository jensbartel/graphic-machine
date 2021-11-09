import LargeImageLeft from '../reuseComponents/LargeImageLeft';
import LargeTextCenter from '../reuseComponents/LargeTextCenter';
import LargeVideo from '../reuseComponents/LargeVideo';

import MoritaData from '../../../data/projectData/MoritaData';

const MoritaProject = () => {
    const { headline1, headline2, testText1, MoritaVIPText } = MoritaData;

    return (
        <>
            <LargeImageLeft />
            <LargeTextCenter headline={headline1} text={testText1} />
            <LargeTextCenter headline={headline2} text={MoritaVIPText} />
            <LargeVideo />
        </>
    );
};

export default MoritaProject;
