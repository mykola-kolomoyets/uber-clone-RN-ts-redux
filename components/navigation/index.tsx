import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import StackNavigator from './stack';

const Navigator = () => (
  <NavigationContainer>
    <SafeAreaProvider>
      <StackNavigator />
    </SafeAreaProvider>
  </NavigationContainer>
);
export default Navigator;
