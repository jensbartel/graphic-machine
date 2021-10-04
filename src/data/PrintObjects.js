// import img_dummy from '../img/banner/dummy.png';
import img_suda from '../img/banner/suda_banner.png';

const Suda = {
    id: 1,
    title: 'Suda Kokuta: Abstractions',
    img: img_suda,
    description: '28-page catalog for "Suda Kokuta: Abstractions" exhibition',
    date: 'July 2021',
    tools: ['InDesign', 'Photoshop'],
};

const Hayashi = {
    id: 2,
    title: 'Hayashi Takeshi: She',
};

const Yama2 = {
    id: 3,
    title: 'Yamaguchi Takeo: Watercolors (2)',
};

const Yama1 = {
    id: 4,
    title: 'Yamaguchi Takeo: Watercolors',
    // add the window decoration on item page!
};

const printIntro = {
    headline: 'Print Media',
    textEN: 'Printed catalogs etc.',
    textFR: 'Printed catalogs etc.',
};

const data = [Suda, Hayashi, Yama2, Yama1];

export const print = {
    intro: printIntro,
    projects: data,
};
