import { useEffect } from 'react';
import tokiImage from '../../img/overview/toki.png';
import sudaImage from '../../img/overview/suda.png';
import moritaImage from '../../img/overview/morita.png';
import mishimaImage from '../../img/overview/mishima.png';

const WebpagesOverview = () => {
    useEffect(() => {
        document.title = 'Web Pages';
    }, []);
    return (
        <div class='parallax'>
            {/* Toki-no-Wasuremono */}
            <div class='parallax-group'>
                <div class='parallax-layer parallax-layer-toki'>
                    <div className='parallax-inner'>
                        <div className='text-container'>
                            <div>
                                <h2>Toki-no-Wasuremono Gallery</h2>
                                <p>Mobile phone layout for a webpage of a Tokyo-based gallery</p>
                                <p>January–May 2016</p>
                            </div>
                            <div>
                                <p>HTML/CSS/JS&nbsp;&nbsp;&nbsp;PHP</p>
                            </div>
                        </div>
                        <div className='inner-image'>
                            <img src={tokiImage} alt='' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Suda Kokuta */}
            <div class='parallax-group'>
                <div class='parallax-layer parallax-layer-suda'>
                    <div className='parallax-inner'>
                        <div className='text-container'>
                            <div>
                                <h2>Suda Kokuta: Abstractions</h2>
                                <p>Webpage for an exhibition of a Japanese painter</p>
                                <p>August 2021</p>
                            </div>
                            <div>
                                <p>HTML/CSS/JS</p>
                            </div>
                        </div>
                        <div className='inner-image'>
                            <img src={sudaImage} alt='' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Morita Shiryu */}
            <div class='parallax-group'>
                <div class='parallax-layer parallax-layer-morita'>
                    <div className='parallax-inner'>
                        <div className='text-container'>
                            <div>
                                <h2>Morita Shiryū Exhibition</h2>
                                <p>Webpage for an exhibition of a Japanese postwar calligrapher</p>
                                <p>December 2020</p>
                            </div>
                            <div>
                                <p>React&nbsp;&nbsp;&nbsp;SASS&nbsp;&nbsp;&nbsp;GCP</p>
                            </div>
                        </div>
                        <div className='inner-image'>
                            <img src={moritaImage} alt='' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mishima Ritsue */}
            <div class='parallax-group'>
                <div class='parallax-layer parallax-layer-mishima'>
                    <div className='parallax-inner'>
                        <div className='text-container'>
                            <div>
                                <h2>Mishima Ritsue Exhibition</h2>
                                <p>Venetian-based Japanese glass artist</p>
                                <p>May 2020</p>
                            </div>
                            <div>
                                <p>HTML/CSS/JS</p>
                            </div>
                        </div>
                        <div className='inner-image'>
                            <img src={mishimaImage} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebpagesOverview;
