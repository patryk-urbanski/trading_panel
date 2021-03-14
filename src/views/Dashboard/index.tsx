import React from 'react';

import ViewContainer from '../../components/ViewContainer';

import SectorPerformanceSlider from '../../features/sectorPerformance/SectorPerformanceSlider';

const Dashboard = () => {
    return (
        <ViewContainer>
            <SectorPerformanceSlider />
        </ViewContainer>
    );
};

export default Dashboard;