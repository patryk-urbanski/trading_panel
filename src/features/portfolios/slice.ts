import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Portfolios = {
    selectedPortfolio: {
        userId?: string,
        pfId?: string,
    } 
};

export const initialState: Portfolios = {
    selectedPortfolio: {},
};

const portfolios = createSlice({
    name: 'portfolios',
    initialState,
    reducers: {
        setSelectedPortfolio(state, action: PayloadAction<{ userId: string, pfId: string}>) {

        state.selectedPortfolio = action.payload;
        },
    },
});

export const {
    setSelectedPortfolio,
} = portfolios.actions;

export default portfolios.reducer;