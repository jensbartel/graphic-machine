import { useEffect } from 'react';
import ProjectTitle from './reuseComponents/ProjectTitle';
import LargeTextCenter from './reuseComponents/LargeTextCenter';

// images
import img1 from '../../img/wanobi/artboard-wanobi--login.png';
import img2 from '../../img/wanobi/artboard-wanobi--signup.png';
import img3 from '../../img/wanobi/artboard-wanobi--about.png';
import img4 from '../../img/wanobi/artboard-wanobi--top.png';
import img5 from '../../img/wanobi/artboard-wanobi--sidemenu.png';
import img6 from '../../img/wanobi/artboard-wanobi--faq.png';
import img7 from '../../img/wanobi/artboard-wanobi--work.png';
import img8 from '../../img/wanobi/artboard-wanobi--works.png';

import img9 from '../../img/wanobi/artboard-wanobi--create-account.png';
import img10 from '../../img/wanobi/artboard-wanobi--create-account-thanks.png';
import img11 from '../../img/wanobi/artboard-wanobi--terms-of-use.png';
import img12 from '../../img/wanobi/artboard-wanobi--inquiry.png';
import img13 from '../../img/wanobi/artboard-wanobi--inquiry-confirm.png';
import img14 from '../../img/wanobi/artboard-wanobi--inquiry-received.png';
import img15 from '../../img/wanobi/artboard-wanobi--works-advanced-search.png';

import { wanobi } from '../../data/projectData.json';

const Wanobi = () => {
    const { title, outline, details } = wanobi;

    useEffect(() => {
        document.title = 'Grifold Studio | Wanobi';
    }, []);

    return (
        <>
            <ProjectTitle project={wanobi} />

            <div className='four-images'>
                <div className='left'>
                    <div>
                        <article>
                            <p>Login and Sign Up</p>
                            <img src={img1} alt='' />
                            <br />
                            <br />
                            <img src={img2} alt='' />
                        </article>
                        <article>
                            <p>About</p>
                            <img src={img3} alt='' />
                        </article>
                    </div>
                    <div>
                        <article>
                            <p>Top Page</p>
                            <img src={img4} alt='' />
                        </article>
                        <article>
                            <p>Drop-down Menu</p>
                            <img src={img5} alt='' />
                        </article>
                        <article>
                            <p>FAQ</p>
                            <img src={img6} alt='' />
                        </article>
                    </div>
                </div>
                <div className='right'>
                    <div>
                        <p>Work Page</p>
                        <img src={img7} alt='' />
                    </div>
                    <div>
                        <p>Works Overview</p>
                        <img src={img8} alt='' />
                    </div>
                </div>
            </div>

            <div className='four-images'>
                <div className='left'>
                    <div>
                        <article>
                            <p>Create an Account</p>
                            <img src={img9} alt='' />
                            <br />
                            <br />
                            <img src={img10} alt='' />
                        </article>
                    </div>
                    <div>
                        <p>Terms of Use</p>
                        <img src={img11} alt='' />
                    </div>
                </div>
                <div className='right'>
                    <div>
                        <article>
                            <p>Inquiry (drop-down menu open)</p>
                            <img src={img12} alt='' />
                        </article>
                        <article>
                            <p>Inquiry Confirm</p>
                            <img src={img13} alt='' />
                        </article>
                        <article>
                            <p>Inquiry Thanks</p>
                            <img src={img14} alt='' />
                        </article>
                    </div>
                    <div>
                        <p>Works (Advanced Search)</p>
                        <img src={img15} alt='' />
                    </div>
                </div>
            </div>

            <LargeTextCenter headline={title} text={outline} />
            <LargeTextCenter text={details} css='project-details' />
        </>
    );
};

export default Wanobi;
