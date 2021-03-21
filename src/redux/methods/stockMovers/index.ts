import { api } from '../../../utils/api';
import { getData } from '../generic';

export const getStockMoversByRegion = (region: string) => (dispatch: () => void) => getData(dispatch, api.getStockMoversByRegion, region);