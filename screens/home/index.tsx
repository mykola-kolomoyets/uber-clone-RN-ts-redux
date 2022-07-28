import React, { FC } from 'react';
import { SafeAreaView, View, Image, Text } from 'react-native';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete
} from 'react-native-google-places-autocomplete';

import { useDispatch } from '../../store';

import { GOOGLE_API_KEY } from '@env';

import NavOptions from '../../components/layout/nav-options';

import { StackScreen } from '../../utils/navigation/stack';
import { Screens } from '../../utils/navigation/enums/screens';

import { logoUri } from './home.constants';

import styles, { googleInputStyles } from './home.styles';
import { setDestination, setOrigin } from '../../store/slices/navigation';
import { batch } from 'react-redux';

const HomeScreen: FC<StackScreen<Screens.map>> = () => {
  const dispatch = useDispatch();

  const onLocationPress = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => {
    batch(() => {
      dispatch(
        setOrigin({
          location: details?.geometry?.location,
          description: data.description
        })
      );

      dispatch(setDestination(null));
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{ uri: logoUri }} />

        <GooglePlacesAutocomplete
          fetchDetails
          query={{
            key: GOOGLE_API_KEY,
            language: 'en'
          }}
          onPress={onLocationPress}
          styles={googleInputStyles}
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
