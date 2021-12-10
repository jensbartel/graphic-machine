import { useEffect } from 'react';
import moritaImage from '../../img/overview/morita.jpg';
import sudaImage from '../../img/overview/suda.jpg';
import OverviewpageItem2 from './OverviewPageItem2';
import { webPages } from '../../data/projectOverviewData/WebPageObjects';

const WebpagesOverview2 = () => {
    useEffect(() => {
        document.title = 'Grifold Studio | Web Pages';
    }, []);

    const { MoritaShiryu, Suda } = webPages.projects;

    return (
        <div className='overview2'>
            <OverviewpageItem2 data={MoritaShiryu} image={moritaImage} />
            <OverviewpageItem2 data={Suda} image={sudaImage} />
            <OverviewpageItem2 data={Suda} image={sudaImage} />
            <OverviewpageItem2 data={Suda} image={sudaImage} />
        </div>
    );
};

export default WebpagesOverview2;
