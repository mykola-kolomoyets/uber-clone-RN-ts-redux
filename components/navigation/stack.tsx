import { screens, Stack } from '../../utils/navigation/constants';
import {
  initialScreenProps,
  initialStackNavigatorProps,
  ScreenOptions
} from '../../utils/navigation/stack';
import { Screens } from '../../utils/navigation/enums/screens';

const StackNavigator = () => {
  const screenOptions: ScreenOptions = {
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
