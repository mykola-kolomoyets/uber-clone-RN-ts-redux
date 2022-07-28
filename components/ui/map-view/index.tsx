import React from 'react';
import { Text, View } from 'react-native';
import Map, { Marker, Region } from 'react-native-maps';

import styles from './map-view.styles';
import { useSelector } from '../../../store';

const initialRegion: Region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

const MapView = () => {
  const origin = useSelector((state) => state.navigation.origin);

  return (
    <Map
      style={styles.map}
      initialRegion={{
        ...initialRegion,
        latitude: origin?.location?.lat || initialRegion.latitude,
        longitude: origin?.location?.lng || initialRegion.longitude
      }}
      mapType="mutedStandard"
    >
      {origin?.location && (
        <Marker
          title="Origin"
          identifier="origin"
          description={origin.description}
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng
          }}
        />
      )}
    </Map>
  );
};

export default MapView;
