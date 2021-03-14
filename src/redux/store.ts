import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import globalReducer, { initialState as globalInitialState } from '../features/global/slice';

const initialState = {
  global: globalInitialState,
}

export const store = configureStore({
  reducer: {
    global: globalReducer,
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
