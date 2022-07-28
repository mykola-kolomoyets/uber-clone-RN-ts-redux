import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  initialStackNavigatorProps,
  MapScreenOptions,
  MapStackParamList
} from '../../utils/navigation/stack';
import { MapScreens } from '../../utils/navigation/enums/screens';

import NavigatorScreen from '../../screens/map-screens/navigator';
import RideCardScreen from '../../screens/map-screens/ride-options';

export const MapStack = createNativeStackNavigator<MapStackParamList>();

export const mapScreens = {
  [MapScreens.navigate]: NavigatorScreen,
  [MapScreens.rideCard]: RideCardScreen
};

const MapStackNavigator = () => {
  const screenOptions: MapScreenOptions<MapScreens> = {
    [MapScreens.navigate]: {},
    [MapScreens.rideCard]: {}
  };

  return (
    <MapStack.Navigator screenOptions={initialStackNavigatorProps}>
      {Object.entries(mapScreens).map(([name, component]) => (
        <MapStack.Screen
          key={name}
          {...{
            name: name as MapScreens,
            component,
            options: screenOptions[name as MapScreens]
          }}
        />
      ))}
    </MapStack.Navigator>
  );
};

export default MapStackNavigator;
