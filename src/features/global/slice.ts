import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Global = {
    isLoading: boolean;
    error: string | null;
};

export const initialState: Global = {
    isLoading: false,
    error: null,
};

const global = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>) {

            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {

            state.error = action.payload;
        },
    },
});

export const {
    setIsLoading, setError
} = global.actions;

export default global.reducer;