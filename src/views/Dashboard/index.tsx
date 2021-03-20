import React from 'react';

import ViewContainer from '../../components/ViewContainer';
import PortfoliosResultsSection from '../../features/portfolios/PortfoliosResultsSection';
import SectorPerformanceSlider from '../../features/sectorPerformance/SectorPerformanceSlider';

const Dashboard = () => {
    return (
        <ViewContainer>
            <SectorPerformanceSlider />
            <PortfoliosResultsSection />
        </ViewContainer>
    );
};

export default Dashboard;