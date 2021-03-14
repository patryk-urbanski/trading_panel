interface Props {
    path: string,
    httpMethod: string,
}

const fetchFromApi = async ({
    path,
    httpMethod,
}: Props ) => {
    const requestObject: any = {
        "method": httpMethod,
        "headers": {
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
            "x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
        }
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
            const error = {
                status: response.status,
                message: response.statusText,
            };
            return {
                httpError: error,
            };
        }
    } catch(error) {
        return {
            unhandledError: error
        };
    }
};

const apiCalls = () => {
    const getTimeSeries = () => {
        return fetchFromApi({
            path: "https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact",
            httpMethod: "GET"
        })
    };

    return {
        getTimeSeries
    }
};

export default apiCalls;