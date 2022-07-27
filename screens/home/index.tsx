import { SafeAreaView, View, Image } from 'react-native';

import { logoUri } from './home.constants';

import styles from './home.styles';
import NavOptions from '../../components/layout/nav-options';
import { FC } from 'react';
import { StackScreen } from '../../utils/navigation/stack';
import { Screens } from '../../utils/navigation/enums/screens';

const HomeScreen: FC<StackScreen<Screens.map>> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{ uri: logoUri }} />
      </View>

      <View>
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
