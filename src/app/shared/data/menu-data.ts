import { IMenuType, IMobileMenu } from "../types/menu-d-t";

const menuData:IMenuType[] = [
  {
    link: '/',
    title: 'Accueil',
  },
  {
    link: '/pages/about',
    title: 'Nyglo',
  },
  {
    link: '/shop',
    title: 'Produits',
  },
  {
    link: '/pages/blog',
    title: 'Notre Blog',
  },
  {
    link: '/pages/contact',
    title: 'Contact',
  },
]

export default menuData;

// mobile menus
export const mobile_menus:IMobileMenu[] = [
  {
    link: '/',
    title: 'Accueil',
  },
  {
    link: '/pages/about',
    title: 'Nyglo',
  },
  {
    link: '/shop',
    title: 'Produits',
  },
  {
    link: '/pages/blog',
    title: 'Notre Blog',
  },
  {
    link: '/pages/contact',
    title: 'Contact',
  },
];
