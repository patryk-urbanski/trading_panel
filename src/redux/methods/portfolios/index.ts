import { api } from '../../../utils/api';
import { getData } from '../generic';

import { setSelectedPortfolio, setPortfolioQuotes } from '../../../features/portfolios/slice';

type TSelectPortfolioPayload = {
    payload: {
        userId: string,
        pfId: string,
    }
};

export const getPopularPortfolioReturns = () => (dispatch: () => void) => getData(dispatch, api.getPopularPortfolioReturns);

export const getPortfolioDetails = (params: { userId?: string, pfId?: string }) => (dispatch: (action: any) => void) => getData(dispatch, api.getPortfolioDetails, params)
    .then(response => {
        const { finance: { result } } = response;
        const { quotes } = result[0];

        dispatch(setPortfolioQuotes(quotes))
    });

export const selectPortfolio = ({ userId, pfId }: { userId: string, pfId: string }) => (dispatch: (action: TSelectPortfolioPayload) => void) => dispatch(setSelectedPortfolio({ userId, pfId }));

