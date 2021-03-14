import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Global {
    isLoading: boolean;
};

export const initialState: Global = {
    isLoading: false
};

const global = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {

            state.isLoading = action.payload;
        },
    },
});

export const {
    setIsLoading,
} = global.actions;

export default global.reducer;