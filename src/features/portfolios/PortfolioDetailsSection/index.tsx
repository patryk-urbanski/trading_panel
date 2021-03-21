import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../../redux/store';

import { useFetch } from '../../../hooks';
import { getPortfolioDetails, selectPortfolio } from '../../../redux/methods/portfolios';

import { constructDetailsRows } from '../../../utils/portfolios';

import styles from './index.module.scss';

const mapDispatch = {
    getPortfolioDetails,
};

const mapStateToProps = (state: RootState) => ({
    selectedPortfolio: state.portfolios.selectedPortfolio,
});

const connector = connect(mapStateToProps, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & {
    children?: React.ReactNode,
};

const PortfolioDetailsSection = ({
    selectedPortfolio,
    getPortfolioDetails
}: Props) => {
    const portfolioDetails = useFetch(getPortfolioDetails, selectedPortfolio, [], true);

    return portfolioDetails ? (
        <div className={styles.continaer}>
            <div className={styles.wrapper}>
                {
                    constructDetailsRows(portfolioDetails)?.map(({shortName, regularMarketChangePercent, messageBoardId }) => (
                        <div key={`${messageBoardId}-detailRow`}>
                            <span>{shortName}</span>
                            <span>{regularMarketChangePercent}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    ) : null;
};

export default connector(PortfolioDetailsSection);