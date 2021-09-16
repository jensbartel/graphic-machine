// import img_dummy from '../img/banner/dummy.png';
import img_morita from '../img/banner/morita_banner.png';
import img_lavendarium from '../img/banner/lavendarium_banner.png';

const artword = {
    id: 1,
    title: 'artword',
};

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
};

const MoritaShiryu = {
    id: 3,
    title: 'Morita Shiryū Exhibition',
    titleFR: 'Éxposition Morita Shiryū',
    img: img_morita,
    description: 'Webpage for an exhibition on a Japanese postwar calligrapher',
    desFR: `Présentation d'un éxposition sur un calligraphe Japonais après-guerre`,
    tools: ['React', 'SASS', 'GCP'],
    date: 'December 2020',
    dateFR: 'Décembre 2020',
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

// const Toki = {
//     id: 7,
//     title: 'Toki no Wasuremono Mobile Page',
//     img: img_dummy,
//     description: 'Responsive layout for a webpage of a Tokyo-based gallery',
//     tools: ['HTML/CSS/JS', 'PHP', 'Visual Basic'],
//     date: 'Feb-May 2016'
// };

// const HPECMerger = {
//     id: 8,
//     title: 'Shibunkaku HP/EC Merger',
// };

// const thisPage = {
//     id: 9,
//     title: 'Grifold Studio (this page)',
// };

const Suda = {
    id: 10,
    title: 'Suda Kokuta Exhibition',
};

export const webPages = [MoritaShiryu, Lavendarium, Suda, artword, Mishima, Kida];
