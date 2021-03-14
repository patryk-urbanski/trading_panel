import { api } from '../../../utils/api';
import { getData } from '../generic';

export const getSeries = (params: any) => (dispatch: () => void) => getData(dispatch, api.getTimeSeries, params);