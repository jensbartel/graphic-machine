// import img_dummy from '../img/banner/dummy.png';
import img_suda from '../../img/banner/suda_banner.png';
import img_hayashi from '../../img/banner/hayashi_banner.png';
import img_yamagu1 from '../../img/banner/yamagu1_banner.png';
import img_yamagu2 from '../../img/banner/yamagu2_banner.png';

const Suda = {
    id: 1,
    title: 'Suda Kokuta: Abstractions',
    titleFR: 'Suda Kokuta: Abstractions',
    img: img_suda,
    description: '28-page catalog for "Suda Kokuta: Abstractions" exhibition',
    desFR: `28-page catalogue pour l'exposition "Suda Kokuta: Abstractions"`,
    date: 'July 2021',
    dateFR: 'Julliet 2021',
    tools: ['InDesign', 'Photoshop'],
};

const Hayashi = {
    id: 2,
    title: 'Hayashi Takeshi: She',
    titleFR: 'Hayashi Takeshi: She',
    img: img_hayashi,
    description: '28-page catalog for "Hayashi Takeshi: She" exhibition',
    desFR: `28-page catalogue pour l'exposition "Hayashi Takeshi: She" exhibition`,
    date: 'July 2020',
    dateFR: 'Juillet 2020',
    tools: ['InDesign', 'Photoshop'],
};

const Yama2 = {
    id: 3,
    title: 'Yamaguchi Takeo: Watercolors (2)',
    titleFR: 'Yamaguchi Takeo: Watercolors (2)',
    img: img_yamagu2,
    description: '32-page catalog for "Yamaguchi Takeo: Watercolors (2)" exhibition',
    desFR: '32-page catalog for "Yamaguchi Takeo: Watercolors (2)" exhibition',
    date: 'Extended production hell',
    dateFR: 'Délibérément lancé dans production hell',
    tools: ['InDesign', 'Photoshop'],
};

const Yama1 = {
    id: 4,
    title: 'Yamaguchi Takeo: Watercolors',
    titleFR: 'Yamaguchi Takeo: Watercolors',
    img: img_yamagu1,
    description: '44-page catalog for "Yamaguchi Takeo: Watercolors" exhibition',
    desFR: '44-page catalog for "Yamaguchi Takeo: Watercolors" exhibition',
    date: 'June 2020',
    dateFR: 'Juin 2020',
    tools: ['InDesign', 'Photoshop'],
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
