import { useEffect } from 'react';
import tokiImage from '../../img/overview/toki.jpg';
import sudaImage from '../../img/overview/suda.jpg';
import moritaImage from '../../img/overview/morita.jpg';
import mishimaImage from '../../img/overview/mishima.jpg';

// data
import { webPages } from '../../data/projectOverviewData/WebPageObjects';
import WebpageItem from './WebpageItem';

const WebpagesOverview = () => {
    useEffect(() => {
        document.title = 'Web Pages';
    }, []);

    const { Toki, Suda, MoritaShiryu, Mishima } = webPages.projects;

    return (
        <div className='parallax'>
            <WebpageItem data={MoritaShiryu} image={moritaImage} css='parallax-layer parallax-layer-morita' />
            <WebpageItem data={Toki} image={tokiImage} css='parallax-layer parallax-layer-toki' />
            <WebpageItem data={Suda} image={sudaImage} css='parallax-layer parallax-layer-suda' />
            <WebpageItem data={Mishima} image={mishimaImage} css='parallax-layer parallax-layer-mishima' />
        </div>
    );
};

export default WebpagesOverview;
