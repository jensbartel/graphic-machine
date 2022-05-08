import { useEffect } from 'react';
import LargeTextCenter from './reuseComponents/LargeTextCenter';
import ProjectTitle from './reuseComponents/ProjectTitle';

// images
import img1 from '../../img/toki/toki-artboard--top.jpg';
import img2 from '../../img/toki/toki-artboard--current-exh.jpg';
import img3 from '../../img/toki/toki-artboard--main-artists.jpg';
import img4 from '../../img/toki/toki-artboard--all-artists.jpg';

import img5 from '../../img/toki/toki-artboard--exhibition.jpg';
import img6 from '../../img/toki/toki-artboard--work.jpg';
import img7 from '../../img/toki/toki-artboard--inquiry.jpg';
import img8 from '../../img/toki/toki-artboard--past-exhibition.jpg';
import img9 from '../../img/toki/toki-artboard--work-with-menu.jpg'
import img10 from '../../img/toki/toki-artboard--inquiry-confirm.jpg'
import img11 from '../../img/toki/toki-artboard--inquiry-thanks.jpg'

import { toki } from '../../data/projectData.json';

const Toki = () => {
    const { outline, details } = toki;

    useEffect(() => {
        document.title = 'Grifold Studio | Toki-no-Wasuremono';
    }, []);

    return (
        <>
            <ProjectTitle project={toki} />

            <div className='four-images'>
                <div className='left'>
                    <div>
                        <p>Top Page</p>
                        <img src={img1} alt='' />
                    </div>
                    <div>
                        <p>Current Exhibition</p>
                        <img src={img2} alt='' />
                    </div>
                </div>
                <div className='right'>
                    <div>
                        <p>Main Artists</p>
                        <img src={img3} alt='' />
                    </div>
                    <div>
                        <p>All Artists</p>
                        <img src={img4} alt='' />
                    </div>
                </div>
            </div>

            <div className='four-images'>
                <div className='left'>
                    <div>
                        <p>Exhibition Page</p>
                        <img src={img5} alt='' />
                    </div>
                    <div>
                        <article>
                            <p>Work Page</p>
                            <img src={img6} alt='' />
                        </article>
                        <article>
                            <p>Work Page (menu open)</p>
                            <img src={img9} alt='' />
                        </article>
                    </div>
                </div>
                <div className='right'>
                    <div>
                        <article>
                            <p>Inquiry</p>
                            <img src={img7} alt='' />
                        </article>
                        <article>
                            <p>Inquiry Confirmation</p>
                            <img src={img10} alt='' />
                        </article>
                    </div>
                    <div>
                        <article>
                            <p>Past Exhibitions</p>
                            <img src={img8} alt='' />
                        </article>
                        <article>
                            <p>Thank You</p>
                            <img src={img11} alt='' />
                        </article>
                    </div>
                </div>
            </div>

            <LargeTextCenter headline='Toki-no-Wasuremono Gallery' text={outline} />
            <LargeTextCenter text={details} css='project-details' />
        </>
    );
};

export default Toki;
