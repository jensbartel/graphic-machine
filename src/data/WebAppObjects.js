import img_dummy from '../img/banner/dummy.png';
import img_resnet from '../img/banner/resnet_banner.png';

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
    dateFR: 'Mai-Auguste 2021',
};

const MMAS = {
    id: 3,
    title: 'Miyanomori Museum of Art, Sapporo',
    img: img_dummy,
    description: 'Collection management solution for private art museum',
    date: 'Jun 2020 (cancelled)',
    tools: ['MERN', 'GCP'],
};

const SecretPriceApp = {
    id: 4,
    title: 'Secret Price App',
    img: img_dummy,
    tools: ['Objective-C'],
    description: 'Price encryption app for art gallery',
    date: 'March 2020',
};

// const TBA2 = {
//     id: 5,
//     title: 'TBA',
// };

export const webApps = [ResNet, ClientApp, MMAS, SecretPriceApp];
