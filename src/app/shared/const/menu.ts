import { PrimeIcons } from "primeng/api";
import { routes } from "../../app.routes";

export const HeaderMenu = [
    {
        label: 'Le club',
        items: [
            {
                label: 'Présentation du club',
                route: '/installation'
            },
            {
                label: 'Histoire et palmarès',
                route: '/configuration'
            },
            {
              label: 'Découverte du hockey',
              route: '/configuration'
          }
        ]
    },
    {
        label: 'L\'équipe D2',
        items: [
          {
              label: 'L\'équipe',
              route: '/installation'
          },
          {
              label: 'Calendrier et classement',
              route: '/configuration'
          }
      ]
    },
    {
        label: 'Espace partenaire',
        items: [
            {
                label: 'Nos partenaires',
                url: 'https://angular.io/'
            },
            {
                label: 'Devenir partenaire',
                url: 'https://vitejs.dev/'
            }
        ]
    },
    {
      label: 'Hockey amateur',
      items: [
          {
              label: 'Nos partenaires',
              url: 'https://angular.io/'
          },
          {
              label: 'Devenir partenaire',
              url: 'https://vitejs.dev/'
          }
      ]
    },
    {
      label: 'Infos pratiques',
      items: [
          {
              label: 'Nos partenaires',
              url: 'https://angular.io/'
          },
          {
              label: 'Devenir partenaire',
              url: 'https://vitejs.dev/'
          }
      ]
    },
    {
      label: 'Boutique',
      target: '_blank',
      url: 'https://belougas.sumupstore.com/'
    },
    {
      label: 'Billeterie',
      target: '_blank',
      url: 'https://www.helloasso.com/associations/toulouse-blagnac-hockey-club'
    }
];

export const FooterMenu = [
    {
        label: 'Mentions légales',
        route: '/mentions-legales'
    },
    {
      label: 'Hockeynet',
      target: '_blank',
      url: 'https://angular.io/'
    },
    {
      label: 'Billeterie',
      target: '_blank',
      url: 'https://angular.io/'
    },
    {
        target: '_blank',
        icon: PrimeIcons.FACEBOOK,
        url: 'https://angular.io/'
    },
    {
        target: '_blank',
        icon: PrimeIcons.LINKEDIN,
        url: 'https://angular.io/'
    },
    {
        target: '_blank',
        icon: PrimeIcons.INSTAGRAM,
        url: 'https://angular.io/'
    }
];