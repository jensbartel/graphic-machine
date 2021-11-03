import MMAS_banner from '../../img/banner/morita_banner.png';

const MMAS = () => {
    return (
        <div className='project'>
            <p>Morita Shiryū Exhibition</p>
            <div className='project-grid'>
                <img src={MMAS_banner} alt='' />
                <div className='text-column'>
                    <h4>Outline</h4>
                    <p>
                        Event page for the exhibition <strong>Morita Shiryū: Bokujin</strong> at Shibunkaku held January–February 2021 in Kyoto and Tokyo. On
                        May 13, 2014, Mark Ryden released an album entitled The Gay Nineties Old Tyme Music: Daisy Bell, that features Scarling along with other
                        artists all giving a different rendition of the same song, "Daisy Bell (Bicycle Built for Two)". The album, printed on 180 g red vinyl,
                        was limited to 999 copies, all hand-numbered and signed by Ryden. Half of the records were sold at the Michael Kohn gallery. The
                        proceeds from the record will benefit Little Kids Rock, a nonprofit that supports musical education in disadvantaged elementary schools.
                        <br />
                        <br />
                    </p>
                    <p style={{ fontSize: '1rem' }}>
                        <i>Gist</i>
                    </p>
                    <p>A major project for the gallery, this exhibition aims to give a survey-type of overview of the artist Morita Shiryū's life and work.</p>
                </div>
            </div>
        </div>
    );
};

export default MMAS;
