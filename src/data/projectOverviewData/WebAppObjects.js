import img_dummy from '../../img/banner/dummy.png';
import img_resnet from '../../img/banner/resnet_banner.png';
import img_MMAS from '../../img/banner/MMAS_banner-light.png';

// WEBAPPS
const ResNet = {
    id: 1,
    title: 'SBK-ResourceNet',
    titleFR: 'SBK-ResourceNet',
    img: img_resnet,
    description: 'In-house library management app for publishing company',
    desFR: `Système librairie pour une maison d'édition`,
    date: 'Upcoming',
    dateFR: 'Upcoming',
    tools: ['MERN', 'Realm', 'Swift', 'GCP'],
    url: '/webapps/resourcenet',
};

const ClientApp = {
    id: 2,
    title: 'ClientApp',
    titleFR: 'ClientApp',
    img: img_dummy,
    tools: ['MERN', 'Realm', 'Swift', 'GCP'],
    description: 'Web app with iOS client for iPad and web backoffice to register clients',
    desFR: 'Web app with iOS client for iPad and web backoffice to register clients',
    date: 'May-August 2021',
    dateFR: 'Mai-Août 2021',
    url: '/webapps/clientapp',
};

const MMAS = {
    id: 3,
    title: 'Miyanomori Museum of Art, Sapporo',
    titleFR: 'Miyanomori Museum of Art, Sapporo',
    img: img_MMAS,
    description: 'Collection management solution for private art museum',
    desFR: 'Collection management solution for private art museum',
    date: 'Jun 2020 (cancelled)',
    dateFR: 'Juin 2020',
    tools: ['MERN', 'GCP'],
    url: '/webapps/mmas',
};

const SecretPriceApp = {
    id: 4,
    title: 'Secret Price App',
    titleFR: 'Secret Price App',
    img: img_dummy,
    tools: ['Objective-C'],
    description: 'Price encryption app for art gallery',
    desFR: 'Price encryption app for art gallery',
    date: 'March 2020',
    dateFR: 'Mars 2020',
    url: '/webapps/priceapp',
};

// const TBA2 = {
//     id: 5,
//     title: 'TBA',
// };

const webAppsIntro = {
    headline: 'Web Apps',
    textEN: 'Congressional leaders moved to address the most immediate threat, working to complete a bill to prevent a government funding lapse at midnight on Thursday. Yet after days of intensive negotiations to bridge bitter differences in their party over Mr. Biden’s two biggest legislative priorities, the president and top Democrats appeared as far as ever from an agreement on their marquee social policy package, which the White House calls the Build Back Better plan.',
    textFR: `Il parle également de s'installer à Saint-Tropez : «Business est de plus en plus business, c'est-à-dire une saloperie et une simple question de gros sous m'obligera d'ici quelques jours à rallier directement St Tropez. A part, évidemment le plaisir de retrouver quelques copains [...] et le Salon d'automne que j'aurais voulu voir, je me console en somme sans grand effort. Paris devient de plus en plus un capharnaüm impossible où l'on rencontre de tout sauf ce qu'on aimait à y voir ou à y retrouver. Et c'est triste quand on aime encore, malgré tout, cette belle fille. On ne voit déjà plus que son maquillage. Dans très bientôt, ce ne sera qu'un souvenir. Un de plus. Aussi Vive le Var Vive le Var & St Tropez & le Pilon.» `,
};

const data = [ResNet, MMAS, ClientApp, SecretPriceApp];

export const webApps = {
    intro: webAppsIntro,
    projects: data,
};
