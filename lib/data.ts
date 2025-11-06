export type LinkItem = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  image: string;       
  tags: string[];
  links?: LinkItem[];
};

export type Service = {
  title: string;
  price: string;       
  description: string;
  bullets: string[];
};

export type Customer = {
  name: string;
  logo: string;        
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;       
};


export const projects: Project[] = [
  {
    slug: 'panda-tree',
    title: 'PandaTree — Système National de Gestion et Cartographie des Arbres',
    excerpt:
      'Web, Mobile, API pour la reconnaissance et la cartographie des arbres en Côte d’Ivoire.',
    description:
      'Plateforme complète pour gérer l’inventaire des arbres, avec applications web & mobile, API sécurisée et back-office d’administration.',
    image: '/projects/pandatree.png',
    tags: ['Web', 'Mobile', 'API', 'Geo'],
    links: [],
  },
  {
    slug: 'spaghetti-abidjan',
    title: 'Spaghetti d’Abidjan',
    excerpt: 'Application web & mobile de gestion du temps.',
    description:
      'Gestion des tâches, suivi du temps, rapports, notifications. Stack: Django, DRF, Next.js, Flutter.',
    image: '/projects/spaghetti.png',
    tags: ['Productivité', 'SaaS'],
    links: [],
  },
  {
    slug: 'allocar',
    title: 'AlloCar — Covoiturage intelligent en Afrique',
    excerpt: 'Backend, Mobile, Web, SaaS, Fintech, Transport.',
    description:
      'Plateforme multi-tenant de covoiturage avec paiements intégrés, apps mobiles et portail web.',
    image: '/projects/allocar.png',
    tags: ['Transport', 'Fintech', 'SaaS'],
    links: [],
  },
  {
    slug: 'octogone',
    title: 'School Management System (Octogone)',
    excerpt: 'Application web SaaS de gestion scolaire.',
    description:
      'Inscription, notes, emplois du temps, reporting, portail parent/élève, API REST.',
    image: '/projects/octogone.png',
    tags: ['EdTech', 'SaaS'],
    links: [],
  },
  {
    slug: 'times-trackers',
    title: 'TimesTrackers – Gestion des présences & RH',
    excerpt: 'SaaS RH, suivi temps & optimisation.',
    description:
      'Présences, RH, reporting, intégrations (RFID/QR/biométrie), temps réel.',
    image: '/projects/times.png',
    tags: ['SaaS', 'RH'],
    links: [],
  },
  {
    slug: 'sentinelle',
    title: 'Sentinelle – Gestion de Personnel',
    excerpt: 'Application web RH & sécurité.',
    description:
      'Gestion du personnel, géolocalisation, ressources, reporting personnalisé.',
    image: '/projects/sentinelle.png',
    tags: ['RH', 'SaaS'],
    links: [],
  },
];

export const services: Service[] = [
  {
    title: '🛠️ Développement Backend & APIs',
    price: '$500',
    description:
      'Architectures backend robustes (Python/Django/DRF/FASTAPI), APIs REST sécurisées.',
    bullets: ['Modélisation & DB', 'Auth & Permissions', 'CI/CD', 'Tests'],
  },
  {
    title: '🌐 Développement Web',
    price: '$700',
    description:
      'Apps web modernes (Next.js/Angular), SEO & performances.',
    bullets: ['Design responsive', 'SSR/SSG', 'Accessibilité', 'SEO'],
  },
  {
    title: '📱 Développement Mobile',
    price: '$800',
    description:
      'Apps mobiles Flutter iOS/Android connectées à vos APIs.',
    bullets: ['Push', 'Paiements', 'Map & GPS', 'Realtime'],
  },
  {
    title: '☁️ Intégration Cloud & Déploiement',
    price: '$200',
    description:
      'Docker, Nginx, Gunicorn, pipelines CI/CD, sécurité & observabilité.',
    bullets: ['Docker/Compose', 'Nginx', 'Monitoring', 'Scalabilité'],
  },
  {
    title: '🧠 Conception & Architecture',
    price: 'Sur devis',
    description:
      'Clean Architecture, DDD, bonnes pratiques & revues.',
    bullets: ['DDD', 'Clean Code', 'Diagrammes', 'Coaching'],
  },
  {
    title: '🔄 Automatisation & Async',
    price: '$200',
    description:
      'Celery & Redis pour tâches en arrière-plan & intégrations.',
    bullets: ['Workers', 'Webhooks', 'Scraping', 'ETL'],
  },
  {
    title: '🔄 Maintenance & Support',
    price: '$200/mois',
    description:
      'Correction de bugs, mises à jour, optimisation & évolutions.',
    bullets: ['SLA', 'Monitoring', 'Roadmap', 'Perf'],
  },
];

export const customers: Customer[] = [
  { name: 'Illigo', logo: '/customers/illigo.png' },
  { name: 'MINADER', logo: '/customers/minader.png' },
  { name: 'Saas Group', logo: '/customers/saas.png' },
  { name: 'IIPEA', logo: '/customers/iipea.png' },
  { name: 'Ordre des Architectes de Côte d’Ivoire', logo: '/customers/architectes.png' },
  { name: 'CEPICI', logo: '/customers/cepici.png' },
  { name: 'INNOV GROUP', logo: '/customers/innov.png' },
];

export const posts: Post[] = [
  {
    slug: 'premier-projet-django',
    title: 'Créer votre premier projet Django',
    excerpt: 'Django est un framework web populaire…',
    image: '/news/django.png',
  },
  {
    slug: 'decouvrir-flask',
    title: 'Découvrir Flask',
    excerpt: 'Flask est un micro framework Python…',
    image: '/news/flask.png',
  },
  {
    slug: 'doc-auto',
    title: '🚀 Simplifiez la doc de vos projets !',
    excerpt: 'Générez la documentation en un clic…',
    image: '/news/doc.png',
  },
  {
    slug: 'clean-architecture',
    title: 'Les bases de la Clean Architecture',
    excerpt: 'Définition, avantages et mise en œuvre…',
    image: '/news/clean.png',
  },
];
