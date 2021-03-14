import { setIsLoading } from '../../../features/global/slice';

interface Payload {
    payload: boolean,
};

export const getData = async (dispatch: (action: Payload) => void, apiCall: (params: any) => any, params: any) => {
    dispatch(setIsLoading(true));

    const result = await apiCall(params);


    dispatch(setIsLoading(false))

    const { error, httpError, unhandledError } = result;
    if (error || httpError || unhandledError ) {
        console.log('error')
    } else {
        return result;
    }
}