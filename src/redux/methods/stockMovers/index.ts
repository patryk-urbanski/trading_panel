import { api } from '../../../utils/api';
import { getData } from '../generic';

export const getStockMoversByRegion = (region: string) => (dispatch: () => void) => getData(dispatch, api.getStockMoversByRegion, region);
export const getPopularPortfolioReturns = () => (dispatch: () => void) => getData(dispatch, api.getPopularPortfolioReturns);
