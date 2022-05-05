// WEBAPPS
// ResNet, ClientApp, MMAS, Secret Price Code, sbk-todoke --> Total of 5

const webAppsIntro = {
    headline: 'Web Apps',
    textEN: 'Congressional leaders moved to address the most immediate threat, working to complete a bill to prevent a government funding lapse at midnight on Thursday. Yet after days of intensive negotiations to bridge bitter differences in their party over Mr. Biden’s two biggest legislative priorities, the president and top Democrats appeared as far as ever from an agreement on their marquee social policy package, which the White House calls the Build Back Better plan.',
    textFR: `Il parle également de s'installer à Saint-Tropez : «Business est de plus en plus business, c'est-à-dire une saloperie et une simple question de gros sous m'obligera d'ici quelques jours à rallier directement St Tropez. A part, évidemment le plaisir de retrouver quelques copains [...] et le Salon d'automne que j'aurais voulu voir, je me console en somme sans grand effort. Paris devient de plus en plus un capharnaüm impossible où l'on rencontre de tout sauf ce qu'on aimait à y voir ou à y retrouver. Et c'est triste quand on aime encore, malgré tout, cette belle fille. On ne voit déjà plus que son maquillage. Dans très bientôt, ce ne sera qu'un souvenir. Un de plus. Aussi Vive le Var Vive le Var & St Tropez & le Pilon.» `,
};

const ClientApp = {
    id: 1,
    title: 'ClientApp',
    titleFR: 'ClientApp',
    description: 'Web/iOS app for iPad and web backoffice to register clients',
    desFR: 'Web/iOS app for iPad and web backoffice to register clients',
    tools: ['MERN', 'Realm', 'Swift', 'GCP'],
    date: 'May-August 2021',
    dateFR: 'Mai-Août 2021',
    url: '/webapps/clientapp',
    github: 'https://github.com/jensbartel/clientapp-backoffice.git',
};

const ResNet = {
    id: 2,
    title: 'ResourceNet',
    titleFR: 'ResourceNet',
    description: 'In-house library management app for publishing company',
    desFR: `Système librairie pour une maison d'édition`,
    tools: ['MERN', 'Realm', 'Swift', 'GCP'],
    date: 'Upcoming',
    dateFR: 'Projecté',
    url: '/webapps/resourcenet',
    github: '',
};



const dataArray = [ClientApp, ResNet ];

const data = { ClientApp, ResNet };

export const webApps = {
    intro: webAppsIntro,
    projects: data,
    projectsArray: dataArray,
};
