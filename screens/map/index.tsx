import React from 'react';
import { View, Text } from 'react-native';

import styles from './map.styles';
import MapView from '../../components/ui/map-view';
import MapStackNavigator from '../../components/navigation/map-stack';

const MapScreen = () => {
  return (
    <View>
      <View style={styles.upView}>
        <MapView />
      </View>

      <View style={styles.bottomView}>
        <MapStackNavigator />
      </View>
    </View>
  );
};

export default MapScreen;
