import { api } from '../../../utils/api';
import { getData } from '../generic';

export const getSectorPerformance = () => (dispatch: () => void) => getData(dispatch, api.getSectorPerformance);