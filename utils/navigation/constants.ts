import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackParamsList } from './stack';

import { Screens } from './enums/screens';

import HomeScreen from '../../screens/home';
import MapScreen from '../../screens/map';
import EatsScreen from '../../screens/eats';

export const Stack = createNativeStackNavigator<StackParamsList>();

export const screens = {
  [Screens.main]: HomeScreen,
  [Screens.map]: MapScreen,
  [Screens.eats]: EatsScreen
};
