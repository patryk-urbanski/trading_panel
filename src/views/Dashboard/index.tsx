import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../redux/store';

import ViewContainer from '../../components/ViewContainer';
import PortfolioDetailsSection from '../../features/portfolios/PortfolioDetailsSection';
import PortfoliosResultsSection from '../../features/portfolios/PortfoliosResultsSection';
import SectorPerformanceSlider from '../../features/sectorPerformance/SectorPerformanceSlider';

import styles from './index.module.scss';

const mapStateToProps = (state: RootState) => ({
    selectedPortfolio: state.portfolios.selectedPortfolio,
});

const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>

const Dashboard = ({
    selectedPortfolio
}: ReduxProps) => {
    return (
        <ViewContainer>
            <SectorPerformanceSlider />
            <main className={styles.main}>
                <PortfoliosResultsSection />
                {
                    selectedPortfolio ? <PortfolioDetailsSection /> : <h1>elo</h1>
                }
            </main>
            
        </ViewContainer>
    );
};

export default connector(Dashboard);