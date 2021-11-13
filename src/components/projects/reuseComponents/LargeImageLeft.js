import html from 'react-html-parser';
import MMAS_banner from '../../../img/banner/morita_banner.png';
import MoritaData from '../../../data/projectData/MoritaData';

const LargeImageLeft = () => {
    const { outline } = MoritaData;
    const headline = 'Morita Shiryū Exhibition';
    const imageCaption = 'Morita page top section.';
    const URL = 'https://moritashiryu-bokujin.com/english';
    const github = 'https://github.com/jensbartel/morita_refactor-review';
    const outlineHeader = 'Project Outline';

    return (
        <div className='project'>
            <p>{headline}</p>
            <div className='project-grid'>
                {/* left column for image */}
                <div>
                    <img src={MMAS_banner} alt='' />
                    <p className='image-caption'>{imageCaption}</p>
                </div>

                {/* right column for text */}
                <div>
                    <div className='project-links'>
                        <a href={URL} target='_blank' rel='noreferrer'>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>URL</span>
                        </a>
                        <a href={github} target='_blank' rel='noreferrer'>
                            <i className='fab fa-github'></i>
                            <span>Github</span>
                        </a>
                    </div>
                    <h2>{outlineHeader}</h2>
                    <p>{html(outline)}</p>
                </div>
            </div>
        </div>
    );
};

export default LargeImageLeft;
