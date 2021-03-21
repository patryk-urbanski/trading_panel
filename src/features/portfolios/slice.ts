import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TQuotes } from '../../types/portfolios';

type Portfolios = {
    selectedPortfolio: {
        userId?: string,
        pfId?: string,
    },
    portfolioQuotes: {},
};


export const initialState: Portfolios = {
    selectedPortfolio: {},
    portfolioQuotes: {},
};

const portfolios = createSlice({
    name: 'portfolios',
    initialState,
    reducers: {
        setSelectedPortfolio(state, action: PayloadAction<{ userId: string, pfId: string}>) {

        state.selectedPortfolio = action.payload;
        },
        setPortfolioQuotes(state, action: PayloadAction<TQuotes>) {

        state.portfolioQuotes = action.payload;
        },
    },
});

export const {
    setSelectedPortfolio, setPortfolioQuotes
} = portfolios.actions;

export default portfolios.reducer;