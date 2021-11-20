import img_morita from '../../img/banner/morita_banner.png';
import img_lavendarium from '../../img/banner/lavendarium_banner.png';
import img_suda from '../../img/banner/suda_banner.jpg';

const webPagesIntro = {
    headline: 'Web Pages',
    textEN: `When Henry Miller published his "character assassination" of Conrad Moricand in A Devil In Paradise (1956), it must have sent the then recently-deceased astrologer spinning in his grave. No longer alive to defend his reputation, Moricand has come off as a creepy, vain, poncey buffoon to readers for decades. It's fifty years later, and Moricand's corpse can stop spinning now that Karl Orend has come to his defense in The Brotherhood of Fools & Simpletons: Gods and Devils in Henry Miller's Utopia (Alyscamps Press, 2005).`,
    textFR: `Ces quatre belles lettres du mythique dandy Conrad Moricand, au peintre Marcel Mouillot, offrent un rare témoignage de la personnalité fantasque de ce fils d'aristocrates suisses, mécène, illustrateur et astrologue, ami de Pablo Picasso, Max Jacob, Henri Michaux, et plus tard, d'Henry Miller, à qui il inspira Un Diable au Paradis et qui l'invita à Big Sur : «Excuses, délices et orgues. J'ai tout du dégueulas. Vous m'avez comblé depuis mon départ : un charmant petit poème en prose et ce mirobolant chapeau équatorial, objet de nos convoitises. `,
};

// artword, Toki no Wasuremono, Morita Shiryū, Mishima, Kida, Kuroda, Suda, Lavendarium, HP Merger, this page --> total of 10 (TOO MUCH)
// omit: this page, Kuroda
// non-SBK: 4
// SBK: 6

// const artword = {
//     id: 100,
//     title: 'artword',
// };

const Lavendarium = {
    id: 2,
    title: 'Lavendarium',
    titleFR: 'Lavendarium',
    img: img_lavendarium,
    description: 'Artist portfolio, recreating a Squarespace template in React',
    desFR: 'Portfolio artiste, inspiré par un template Squarespace, créé en React',
    tools: ['React', 'GCP'],
    date: 'May 2021',
    dateFR: 'Mai 2021',
    url: '/',
};

const MoritaShiryu = {
    id: 1,
    title: 'Morita Shiryū Exhibition',
    titleFR: 'Éxposition Morita Shiryū',
    img: img_morita,
    description: 'Webpage for an exhibition on a Japanese postwar calligrapher',
    desFR: `Présentation d'un éxposition sur un calligraphe Japonais après-guerre`,
    tools: ['React', 'SASS', 'GCP'],
    date: 'December 2020',
    dateFR: 'Décembre 2020',
    url: 'webpages/morita',
};

// const Kuroda = {
//     id: 4,
//     title: 'Kuroda Seitarō Exhibition',
// };

const Mishima = {
    id: 5,
    title: 'Mishima Ritsue Exhibition',
};

const Kida = {
    id: 6,
    title: 'Kida Yasuhiko Exhibition',
};

const Toki = {
    id: 7,
    title: 'Toki no Wasuremono Mobile Page',
    img: img_lavendarium,
    description: 'Responsive layout for a webpage of a Tokyo-based gallery',
    tools: ['HTML/CSS/JS', 'PHP', 'Visual Basic'],
    date: 'Feb-May 2016',
    url: 'webpages/toki',
};

// const HPECMerger = {
//     id: 8,
//     title: 'Shibunkaku HP/EC Merger',
// };

// const thisPage = {
//     id: 9,
//     title: 'Grifold Studio (this page)',
// };

const Suda = {
    id: 3,
    title: 'Suda Kokuta Exhibition',
    titleFR: 'Éxposition Suda Kokuta',
    img: img_suda,
    description: 'Webpage for an exhibition on a Japanese postwar calligrapher',
    desFR: `Présentation d'un éxposition sur un calligraphe Japonais après-guerre`,
    tools: ['React', 'SASS', 'GCP'],
    date: 'December 2020',
    dateFR: 'Décembre 2020',
    url: 'webpages/suda',
};

const data = [MoritaShiryu, Suda, Lavendarium, Toki, Mishima, Kida];

export const webPages = {
    intro: webPagesIntro,
    projects: data,
};
