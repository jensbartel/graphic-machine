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
            <WebpageItem data={MoritaShiryu} image={moritaImage} />
            <WebpageItem data={Toki} image={tokiImage} />
            <WebpageItem data={Suda} image={sudaImage} />
            <WebpageItem data={Mishima} image={mishimaImage} />
        </div>
    );
};

export default WebpagesOverview;
