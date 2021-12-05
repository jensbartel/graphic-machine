import { useEffect } from 'react';
import tokiImage from '../../img/overview/toki.jpg';
import sudaImage from '../../img/overview/suda.jpg';
import moritaImage from '../../img/overview/morita.jpg';
import mishimaImage from '../../img/overview/mishima.jpg';

// data
import { webPages } from '../../data/projectOverviewData/WebPageObjects';
import OverviewpageItem from './OverviewPageItem';

const WebpagesOverview = () => {
    useEffect(() => {
        document.title = 'Web Pages';
    }, []);

    const { Toki, Suda, MoritaShiryu, Mishima } = webPages.projects;

    return (
        <div className='overview'>
            {/* <div className='parallax'> */}
            <OverviewpageItem data={MoritaShiryu} image={moritaImage} />
            <OverviewpageItem data={Toki} image={tokiImage} />
            <OverviewpageItem data={Suda} image={sudaImage} />
            <OverviewpageItem data={Mishima} image={mishimaImage} />
        </div>
    );
};

export default WebpagesOverview;
