import { StyleSheet } from 'react-native';

import tw from 'twrnc';

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
});

export default {
  container: tw`bg-white h-full`,
  logoContainer: tw`p-5`,
  logo: [styles.logo]
};
