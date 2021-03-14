import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { defaultBreakingPoints } from '../config';

const withScreenSize = (Component: React.FunctionComponent<any>) => {
    const WithScreenSize = ({ ...props }) => {

        const { desktop, tablet } = defaultBreakingPoints;

        const isMobile = useMediaQuery({ query: `(max-width: ${tablet}px)` });
        const isTablet = useMediaQuery({ query: `(max-width: ${desktop}px)` });
        const isDesktop = useMediaQuery({ query: `(min-width: ${desktop}px)` });

        const screenSize = isMobile ? 'mobile' : isTablet ? 'tablet' : isDesktop && 'desktop';

        return <Component screenSize={screenSize} {...props} />;
    };

    return WithScreenSize;
};

export default withScreenSize;