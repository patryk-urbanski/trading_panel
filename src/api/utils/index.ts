interface Props {
    path: string,
    httpMethod: string,
    service: 'alpha' | 'yahoo'
}

const constructHeaders = (service: 'alpha' | 'yahoo') => {
    switch(service) {
        case 'alpha': return ({
            "x-rapidapi-key": process.env.REACT_APP_API_KEY_ALPHA,
            "x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
        });
        case 'yahoo': return ({
            "x-rapidapi-key": process.env.REACT_APP_API_KEY_YAHOO,
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        });
        default: return null;
    };
}

export const fetchFromApi = async ({
    path,
    httpMethod,
    service
}: Props ) => {
    const requestObject: any = {
        "method": httpMethod,
        "headers": constructHeaders(service)
    }

    try {
        const response = await fetch(path, requestObject);

        if (response.ok) {
            const result = await response.json();

            if(result) {
                if (result.error) {
                    throw Error(JSON.stringify(result));
                }
                return result 
            } else {
                return {
                    error: `Unexpected result shape: ${JSON.stringify(result)}`,
                };
            }
        } else if (response.status !== 200) {
            return {
                httpError: response.statusText,
            };
        }
    } catch(error) {
        return {
            unhandledError: error
        };
    }
};