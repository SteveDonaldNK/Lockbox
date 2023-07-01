const HERO = {
    heading: "LA PREMIÈRE SOLUTIONS DE CASIERS INTELLIGENTS AU CAMEROUN",
    subHeading: "Rendre les livraisons et les retours de colis faciles et efficaces pour tous.",
    leftBtn: "COMMENCER À UTILISER I-BOX",
    rightBtn: "À PROPOS DE NOUS"
}

const ABOUT = {
    headingBlue: "Une réception",
    heading: "sans soucis pour vos courriers et colis",
    text: {
        p1: `Découvrez notre réseau en pleine expansion de boîtes postales électroniques pour le retrait de vos colis et courriers.
        Simplifiez vos opérations commerciales avec nos emplacements pratiques et centralisés.
        Notre plateforme innovante vous offre une solution de retrait efficace et sécurisée,
        vous permettant d'étendre votre portée et d'offrir une expérience pratique à vos clients.`,
        p2: `Rejoignez notre entreprise dynamique dès maintenant et profitez des avantages de notre réseau de boîtes postales électroniques.
        Simplifiez la gestion des colis et courriers entrants, améliorez votre efficacité opérationnelle et réduisez les coûts de livraison.
        Offrez à vos clients une expérience de retrait rapide, pratique et sécurisée grâce à notre solution centralisée.
        Optimisez votre processus de collecte avec nous.`
    }
}

const FEATURES = {
    headingBlue: "Les avantages",
    heading: " d'un abonnement chez",
    features: {
        unique: {
            heading: "PLUS d'expertise",
            text: "Nous sommes la premiere entreprise a offrir des solutions de casiers pour colis - soutenant les principaux clients résidentiels, commerciaux, universitaires et de transporteurs du Cameroun.",
        },
        lockers: {
            heading: "PLUS de casiers",
            text: "Nous proposons une variété de types et de tailles de casiers pour répondre aux besoins et aux exigences commerciales de nos clients.",
        },
        time: {
            heading: "PLUS de temps",
            text: "Nos solutions vous aideront à gagner plus de temps en simplifiant le processus de récupération de vos colis. Grâce à nos casiers intelligents, vous n'aurez plus besoin d'attendre en file d'attente pour retirer vos colis au bureau de poste ou à un point de collecte",
        },
    }
}

const OVERVIEW = {
    headingBlue: "Expérience de livraison ",
    heading: "révolutionnaire avec notre solution de casiers intelligents",
    text: {
        p1: `Dites adieu aux soucis de livraison et découvrez une nouvelle façon pratique et sécurisée de recevoir vos colis. Notre solution de casiers intelligents vous permet de gérer vos livraisons de manière simple et efficace, où et quand vous le souhaitez. Plus besoin d'attendre à la maison ou de se rendre au bureau de poste. Avec notre réseau de casiers intelligents, vous pouvez récupérer vos colis à votre convenance, 24 heures sur 24, 7 jours sur 7. Simplifiez votre vie et offrez-vous une expérience de livraison révolutionnaire avec notre solution de casiers intelligents. Ne manquez pas cette opportunité, rejoignez-nous dès maintenant !`,
    }
}

const MAP = {
    heading: "Livrez PLUS et recevez vos colis en toute sécurité; avec les casiers intelligents",
}

const TESTIMONIALS = [
    {
        neighborhood: 'Cradat',
        text: `"La solution de casiers intelligents va révolutionner notre processus de gestion des colis. Nous allons optimiser notre logistique en offrant à nos clients une expérience de livraison rapide et pratique. Grâce à ces casiers, nos clients peurront récupérer leurs colis à tout moment, ce qui va considérablement réduire les retards de livraison et les problèmes de réacheminement."`,
        name: 'Mbah Celine',
        socialStatus: 'Opérateur économique'
    },{
        neighborhood: 'Essos',
        text: `"Notre entreprise va intégrer la solution de casiers intelligents pour gérer efficacement les livraisons de nos employés et faciliter le processus de retour des articles. Cette solution va grandement améliorer notre productivité et va réduire les perturbations causées par les retards de livraison ou les absences des employés. De plus, nos employés apprécient la flexibilité offerte par les casiers, qui leur permet de récupérer leurs colis à tout moment qui leur convient."`,
        name: 'Arthur Onomo',
        socialStatus: 'Chef d\'entreprise'
    },{
        neighborhood: 'Ekounou', 
        text: "En integrant la solution de casiers intelligents dans notre magasin, nous allons améliorer significativement le processus de livraison et de retrait des commandes en ligne.",
        name: 'Gregoire Zogo', 
        socialStatus: 'Commercant',
    }
]

const CALLTOACTION = {
        heading: "Gagnez en temps avec les casiers intelligents de I-BOX",
    }
    
const HISTORY = [{
        event: 'Ouverture',
        notification: 'Boîte ouverte',
        date: '22-08-2001',
    }, {
        event: 'Fermeture',
        notification: 'Boîte fermée',
        date: '06-12-2012',
    }, {
        event: 'Bloqué',
        notification: 'Votre boîte est bloquée',
        date: '01-02-2022',
    }]
    
    const NOTIFICATIONS = [
        'Vous avez reçu un colis',
        'Vous avez ouvert votre boîte',
        'Vous avez refermé votre boîte',
        'Vous avez essayé d\'ouvrir votre boîte à 3 reprises, votre boîte est bloquée. Veuillez nous contacter pour en savoir plus.'
    ]
    
    const SUBSCRIPTION = {
        heading: 'Abonnement',
        pricing: [{
            period: 'retrait',
            price: '1500 XAF',
            label: 'Particulier',
            description: ['Une adresse postale', 'Une boîte postale', 'Un code de retrait'],
        },{
            period: 'Mois',
            price: '2100 XAF',
            label: 'Entreprise XL',
            description: ['Une adresse postale', 'Une boîte postale', 'Un code de retrait'],
        },{
            period: 'An',
            price: '25000 XAF',
            label: 'Entreprise XXL',
            description: ['Une adresse postale', 'Une boîte postale', 'Un code de retrait'],
        }
    ],
}

export { HERO, ABOUT, FEATURES, MAP, TESTIMONIALS, CALLTOACTION, SUBSCRIPTION, HISTORY, NOTIFICATIONS, OVERVIEW }