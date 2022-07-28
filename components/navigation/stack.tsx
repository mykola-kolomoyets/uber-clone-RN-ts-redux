import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  initialScreenProps,
  initialStackNavigatorProps,
  ScreenOptions,
  StackParamsList
} from '../../utils/navigation/stack';
import { Screens } from '../../utils/navigation/enums/screens';

import HomeScreen from '../../screens/home';
import MapScreen from '../../screens/map';
import EatsScreen from '../../screens/eats';

export const Stack = createNativeStackNavigator<StackParamsList>();
export const screens = {
  [Screens.main]: HomeScreen,
  [Screens.map]: MapScreen,
  [Screens.eats]: EatsScreen
};

const StackNavigator = () => {
  const screenOptions: ScreenOptions<Screens> = {
    [Screens.main]: {
      ...initialScreenProps[Screens.main]
    },
    [Screens.map]: {
      ...initialScreenProps[Screens.map]
    },
    [Screens.eats]: {
      ...initialScreenProps[Screens.eats]
    }
  };

  return (
    <Stack.Navigator screenOptions={initialStackNavigatorProps}>
      {Object.entries(screens).map(([name, component]) => (
        <Stack.Screen
          key={name}
          {...{
            name: name as Screens,
            component,
            options: screenOptions[name as Screens]
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
