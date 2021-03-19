import React from 'react';

import ViewContainer from '../../components/ViewContainer';

import SectorPerformanceSlider from '../../features/sectorPerformance/SectorPerformanceSlider';
import StockMoversContainer from '../../features/stockMovers/StockMoversContainer';

const Dashboard = () => {
    return (
        <ViewContainer>
            <SectorPerformanceSlider />
            <StockMoversContainer />
        </ViewContainer>
    );
};

export default Dashboard;