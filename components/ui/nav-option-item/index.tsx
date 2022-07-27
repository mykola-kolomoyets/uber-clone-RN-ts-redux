import { FC } from 'react';

import { NavOption } from '../../layout/nav-options/nav-options.constants';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import styles from './nav-option-item.styles';
import { Icon } from '@rneui/themed';
import { useStackedNavigation } from '../../../utils/navigation/stack';
import { Screens } from '../../../utils/navigation/enums/screens';

type NavOptionItemProps = {
  data: NavOption;
};
const NavOptionItem: FC<NavOptionItemProps> = ({ data }) => {
  const navigation = useStackedNavigation();

  const onRedirectPress = (screen: Screens) => navigation.navigate(screen);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onRedirectPress(data.screen)}
    >
      <View>
        <Image style={styles.image} source={{ uri: data.image }} />
      </View>

      <Text style={styles.title}>{data.title}</Text>
      <Icon
        style={styles.arrowIcon}
        type="antdesign"
        name="arrowright"
        color="white"
      />
    </TouchableOpacity>
  );
};

export default NavOptionItem;
