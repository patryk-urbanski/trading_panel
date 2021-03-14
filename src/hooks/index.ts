import React, { useState, useEffect } from 'react';

export const useFetch = (fetchHandler: (params: any) => any, params?: any, dependencies = [], forceRefetch = false) => {
    const isMounted = React.useRef(true);

    const [ value, setValue ] = useState(null);

    const hydrateValues = async () => {
        const fetchedValues = await fetchHandler(params);

        if(isMounted.current){
            setValue(fetchedValues);
        }
    };
    
    useEffect(() => {
        isMounted.current = true;
        hydrateValues();

        return () => {
            isMounted.current = false;
            setValue(null);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [forceRefetch, ...dependencies]);

    return value;
};