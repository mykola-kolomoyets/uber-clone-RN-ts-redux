import React, { FC } from 'react';

import { NavOption } from '../../layout/nav-options/nav-options.constants';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import styles from './nav-option-item.styles';
import { Icon } from '@rneui/themed';
import { useStackedNavigation } from '../../../utils/navigation/stack';
import { Screens } from '../../../utils/navigation/enums/screens';
import { useSelector } from '../../../store';

type NavOptionItemProps = {
  data: NavOption;
};
const NavOptionItem: FC<NavOptionItemProps> = ({ data }) => {
  const origin = useSelector((state) => state.navigation.origin);

  const navigation = useStackedNavigation();

  const onRedirectPress = (screen: Screens) =>
    origin?.location && navigation.navigate(screen);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onRedirectPress(data.screen)}
      disabled={!origin?.location}
    >
      <View style={!origin?.location && styles.disabled}>
        <Image style={styles.image} source={{ uri: data.image }} />

        <Text style={styles.title}>{data.title}</Text>
        <Icon
          style={styles.arrowIcon}
          type="antdesign"
          name="arrowright"
          color="white"
        />
      </View>
    </TouchableOpacity>
  );
};

export default NavOptionItem;
