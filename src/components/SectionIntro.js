import { webPagesIntro } from '../data/SectionIntroObjects';

const SectionIntro = props => {
    return (
        <div className='section-intro'>
            <h4>{webPagesIntro.headline}</h4>
            <p>{webPagesIntro.textEN}</p>
        </div>
    );
};

export default SectionIntro;
