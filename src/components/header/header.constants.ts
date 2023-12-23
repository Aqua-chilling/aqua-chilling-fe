export interface IMenuItem {
  label: string;
  navigation: string;
}

export const MENU_LIST: IMenuItem[] = [
  {
    label: 'Home',
    navigation: '/'
  },
  {
    label: 'Collections',
    navigation: '/collections/four-celestial-bowls'
  },
  {
    label: 'Inventory',
    navigation: '/inventory'
  }
];
