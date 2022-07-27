import { StyleSheet } from 'react-native';
import tw from 'twrnc';

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain'
  }
});

export default {
  container: tw`m-2 p-2 pl-6 pb-8 pt-4 bg-gray-200 w-40`,
  image: [styles.image],
  title: tw`mt-2 text-lg font-semibold`,
  arrowIcon: tw`p-2 bg-black rounded-full w-10 mt-4`
};
