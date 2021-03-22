import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../redux/store';

import { isObjectFilled } from '../../utils/shareable';

import ViewContainer from '../../components/ViewContainer';
import PortfolioDetailsSection from '../../features/portfolios/PortfolioDetailsSection';
import PortfoliosResultsSection from '../../features/portfolios/PortfoliosResultsSection';
import SectorPerformanceSlider from '../../features/sectorPerformance/SectorPerformanceSlider';
import PlaceholderSection from '../../components/PlaceholderSection';

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
                <section>
                    <span className={styles.sectionLabel}>Portfolios performance</span>
                    <PortfoliosResultsSection />
                </section>
                <section>
                    {
                        isObjectFilled(selectedPortfolio)
                            ? <PortfolioDetailsSection />
                            : <PlaceholderSection containerClassName={styles.placeholderContainer}>
                                <span className={styles.placeholderLabel}>Select portfolio</span>
                            </PlaceholderSection> 
                    }
                </section>
            </main>
            
        </ViewContainer>
    );
};

export default connector(Dashboard);