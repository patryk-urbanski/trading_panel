import { api } from '../../../utils/api';
import { getData } from '../generic';

import { setSelectedPortfolio } from '../../../features/portfolios/slice';

interface SelectPortfolioPayload {
    payload: {
        userId: string,
        pfId: string,
    }
};

export const getPopularPortfolioReturns = () => (dispatch: () => void) => getData(dispatch, api.getPopularPortfolioReturns);
export const getPortfolioDetails = (params: { userId: string, pfId: string }) => (dispatch: () => void) => getData(dispatch, api.getPortfolioDetails, params);

export const selectPortfolio = ({ userId, pfId }: { userId: string, pfId: string }) => (dispatch: (action: SelectPortfolioPayload) => void) => dispatch(setSelectedPortfolio({ userId, pfId }));

