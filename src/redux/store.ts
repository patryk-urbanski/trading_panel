import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import globalReducer, { initialState as globalInitialState } from '../features/globalStates/slice';
import portfoliosReducer, { initialState as portfoliosInitialState } from '../features/portfolios/slice';

const initialState = {
  global: globalInitialState,
  portfolios: portfoliosInitialState,
}

export const store = configureStore({
  reducer: {
    global: globalReducer,
    portfolios: portfoliosReducer,
  },
  preloadedState: initialState
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
