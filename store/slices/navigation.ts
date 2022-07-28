import { Point } from 'react-native-google-places-autocomplete';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Slices } from '../../utils/store';

import { State } from '../index';

type NavigationState = {
  origin: { location: Point | undefined; description: string };
  destination: any;
  travelTimeInformation: any;
};

const initialState: NavigationState = {
  origin: { location: undefined, description: '' },
  destination: null,
  travelTimeInformation: null
};

const navigationSlice = createSlice({
  name: Slices.navigation,
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<NavigationState['origin']>) => {
      state.origin = action.payload;
    },

    setDestination: (
      state,
      action: PayloadAction<NavigationState['destination']>
    ) => {
      state.destination = action.payload;
    },

    setTravelTimeInformation: (
      state,
      action: PayloadAction<{
        travelTimeInformation: Pick<NavigationState, 'travelTimeInformation'>;
      }>
    ) => {
      state.travelTimeInformation = action.payload.travelTimeInformation;
    }
  }
});

export const { setOrigin, setTravelTimeInformation, setDestination } =
  navigationSlice.actions;

export default navigationSlice.reducer;
