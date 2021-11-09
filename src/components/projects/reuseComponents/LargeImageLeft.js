import html from 'react-html-parser';
import MMAS_banner from '../../../img/banner/morita_banner.png';
import MoritaData from '../../../data/projectData/MoritaData';

const LargeImageLeft = () => {
    const { outline } = MoritaData;

    return (
        <div className='project'>
            <p>Morita Shiryū Exhibition</p>
            <div className='project-grid'>
                <div className='image-column'>
                    <img src={MMAS_banner} alt='' />
                    <p className='image-caption'>Morita page top section.</p>
                </div>
                <div className='text-column'>
                    <div className='project-links'>
                        <a href='https://moritashiryu-bokujin.com/english'>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>URL</span>
                        </a>
                        <a href='https://github.com/jensbartel/morita_refactor-review'>
                            <i className='fab fa-github'></i>
                            <span>Github</span>
                        </a>
                    </div>
                    <h2>Project Outline</h2>
                    <p>{html(outline)}</p>
                </div>
            </div>
        </div>
    );
};

export default LargeImageLeft;
