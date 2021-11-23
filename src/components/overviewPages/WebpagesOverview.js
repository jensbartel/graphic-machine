import { useEffect } from 'react';

const WebpagesOverview = () => {
    useEffect(() => {
        document.title = 'Web Pages';
    }, []);
    return (
        <div class='parallax'>
            <div class='parallax-group'>
                Base Layer
                <div class='parallax-layer parallax-layer-deep'>Deep</div>
            </div>
            <div class='parallax-group'>
                Base Layer 2<div class='parallax-layer parallax-layer-fore'>Foreground</div>
            </div>
            <div class='parallax-group'>
                Base Layer 3<div class='parallax-layer parallax-layer-back'>Background</div>
            </div>
        </div>
    );
};

export default WebpagesOverview;
