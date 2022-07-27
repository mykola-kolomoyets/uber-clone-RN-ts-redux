import { Screens } from '../../../utils/navigation/enums/screens';

export type NavOption = {
  id: string;
  title: string;
  image: string;
  screen: Screens;
};

export const mockData: NavOption[] = [
  {
    id: '1',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: Screens.map
  },
  {
    id: '2',
    title: 'order food',
    image: 'https://links.papareact.com/28w',
    screen: Screens.eats
  }
];
