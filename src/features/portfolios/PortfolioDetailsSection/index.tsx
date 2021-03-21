import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../../redux/store';

import { getPortfolioDetails } from '../../../redux/methods/portfolios';
import { isObjectFilled, generateColorLightness } from '../../../utils/shareable';
import { constructDetailsRows } from '../../../utils/portfolios';

import PortfolioDetailsRow from '../../../components/portfolios/PortfolioDetailsRow';

import styles from './index.module.scss';

const mapDispatch = {
    getPortfolioDetails,
};

const mapStateToProps = (state: RootState) => ({
    selectedPortfolio: state.portfolios.selectedPortfolio,
    portfolioQuotes: state.portfolios.portfolioQuotes,
});

const connector = connect(mapStateToProps, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>

const PortfolioDetailsSection = ({
    selectedPortfolio,
    getPortfolioDetails,
    portfolioQuotes,
}: ReduxProps) => {

    useEffect(() => {
        if(isObjectFilled(selectedPortfolio)) {
            getPortfolioDetails(selectedPortfolio)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedPortfolio])

    return isObjectFilled(portfolioQuotes) ? (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.scroller}>
                    <div className={styles.rowContainer}>
                        {
                            constructDetailsRows(portfolioQuotes).map((quote, index, arr) => (
                                <PortfolioDetailsRow
                                    { ...quote}
                                    key={`${quote.messageBoardId}-${index}-tile`}
                                    rowColor={`hsl(132deg, 100%, ${generateColorLightness(index, arr.length, 40, 10)}%)`}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className={styles.scroller}>
                    <div className={styles.rowContainer}>
                        {
                            constructDetailsRows(portfolioQuotes, false).map((quote, index, arr) => (
                                <PortfolioDetailsRow
                                    { ...quote}
                                    key={`${quote.messageBoardId}-${index}-tile`}
                                    rowColor={`hsl(250deg, 100%, ${generateColorLightness(index, arr.length, 40, 10)}%)`}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default connector(PortfolioDetailsSection);