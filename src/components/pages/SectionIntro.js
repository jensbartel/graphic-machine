import { useContext } from 'react';
import LangContext from '../../context/langContext';

const SectionIntro = props => {
    const langContext = useContext(LangContext);
    const { lang } = langContext;

    return (
        <div className='section-intro'>
            <h4>{props.text.headline}</h4>
            {lang.state === 'francais' ? <p>{props.text.textFR}</p> : <p>{props.text.textEN}</p>}
        </div>
    );
};

export default SectionIntro;
