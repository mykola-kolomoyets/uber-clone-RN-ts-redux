import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slices } from '../../utils/store';
import { State } from '../index';

type NavigationState = {
  origin: any;
  destination: any;
  travelTimeInformation: any;
};

const initialState: NavigationState = {
  origin: null,
  destination: null,
  travelTimeInformation: null
};

const navigationSlice = createSlice({
  name: Slices.navigation,
  initialState,
  reducers: {
    setOrigin: (
      state,
      action: PayloadAction<{ origin: Pick<NavigationState, 'origin'> }>
    ) => {
      state.origin = action.payload.origin;
    },

    setDestination: (
      state,
      action: PayloadAction<{
        destination: Pick<NavigationState, 'destination'>;
      }>
    ) => {
      state.destination = action.payload.destination;
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
