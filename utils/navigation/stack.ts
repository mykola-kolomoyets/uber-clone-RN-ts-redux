import { FunctionComponent } from 'react';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps
} from '@react-navigation/native-stack';

import { Screens } from './enums/screens';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

export type StackParamsList = {
  [Screens.main]: undefined;
  [Screens.map]: undefined;
  [Screens.eats]: undefined;
};

export const initialScreenProps: ScreenOptions = {
  [Screens.main]: {
    title: 'Main screen'
  },
  [Screens.map]: {
    title: 'map screen'
  },
  [Screens.eats]: {
    title: 'eats screen'
  }
};

export const initialStackNavigatorProps: NativeStackNavigationOptions = {
  headerShown: false
};

export type ScreensList = {
  [key in Screens]: FunctionComponent | FunctionComponent<StackScreen<key>>;
};

export type ScreenProps<T extends Screens> = {
  navigation: NativeStackNavigationProp<StackParamsList, T>;
};

export type ScreenOptions = {
  [key in Screens]:
    | NativeStackNavigationOptions
    | ((props: ScreenProps<key>) => NativeStackNavigationOptions);
};

export type StackScreen<ScreenName extends Screens> = NativeStackScreenProps<
  StackParamsList,
  ScreenName
>;

export const useStackedNavigation = () =>
  useNavigation<NativeStackNavigationProp<StackParamsList>>();

export const useStackedRoute = <ScreenName extends Screens>() =>
  useRoute<RouteProp<StackParamsList, ScreenName>>();
