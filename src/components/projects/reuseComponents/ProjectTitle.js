import { useContext } from 'react';
import LangContext from '../../../context/langContext';

const ProjectTitle = props => {
    const project = props.project;
    const { title, titleFR, description, desFR, livePage, github, date, dateFR } = project;

    const langContext = useContext(LangContext);
    const { lang } = langContext;

    let titleChoice, descriptionChoice, dateChoice;
    if (lang.state === 'francais') {
        titleChoice = titleFR;
        descriptionChoice = desFR;
        dateChoice = dateFR;
    } else {
        titleChoice = title;
        descriptionChoice = description;
        dateChoice = date;
    }

    return (
        <div className='project-title'>
            <p>{titleChoice}</p>
            <a href={livePage} target='_blank' rel='noreferrer'>
                <i className='fas fa-map-marker-alt'></i>
                <span className=''>URL</span>
            </a>
            <a href={github} target='_blank' rel='noreferrer'>
                <i className='fab fa-github'></i>
                <span className=''>Github</span>
            </a>
            <p className='project-links'>
                {descriptionChoice},&nbsp;{dateChoice}
            </p>
        </div>
    );
};

export default ProjectTitle;
