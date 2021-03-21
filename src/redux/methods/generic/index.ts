import { setIsLoading, setError } from '../../../features/globalStates/slice';

interface Payload {
    payload: boolean | string | null,
};

export const getData = async (dispatch: (action: Payload) => void, apiCall: (params: any) => any, params?: any) => {
    dispatch(setIsLoading(true));
    const result = await apiCall(params);

    dispatch(setIsLoading(false))

    const { error, httpError, unhandledError } = result;

    if (error || httpError || unhandledError ) {
        if(unhandledError) {
            //TODO: establish proper method to report unhandler errors
            console.log(unhandledError);
        }
        dispatch(setError(error || httpError));
    } else {
        return result;
    }
};

export const clearError = () => async (dispatch: (action: Payload) => void) => dispatch(setError(null));