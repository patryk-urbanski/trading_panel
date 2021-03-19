import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { motion } from "framer-motion"

import { useFetch } from '../../../hooks';
import { getPopularPortfolioReturns } from '../../../redux/methods/stockMovers';

import Dropdown from '../../../components/Dropdown';
import StockMoverTile from '../StockMoverTile';

import  styles from './index.module.scss';

const mapDispatch = {
    getPopularPortfolioReturns,
};

const connector = connect(null, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & {
    children?: React.ReactNode,
};

type Portfolios = {
    finance?: {
        result: Array<{
            portfolios: Array<{
                pfId: string,
                name: string,
                shortDescription: string,
                dailyPercentGain: number,
                userId: string,
            }>
        }>;
    }
}

const StockMoversContainer = ({
    getPopularPortfolioReturns
}: Props) => {
    const [ portfolioSelection, setPortfolioSelection ] = useState<string | number>('Winners');
    const portfolios = useFetch(getPopularPortfolioReturns, 'US')

    const constructTiles = (portfolioList: Portfolios) => {
        const { finance } = portfolioList;

        const portfolios = finance?.result[0].portfolios.map(({ pfId, name, shortDescription, dailyPercentGain, userId }) => ({
            pfId, name, shortDescription, dailyPercentGain, userId
        }));

        const positiveReturns = portfolios?.filter(({ dailyPercentGain }) => dailyPercentGain > 0).sort((prev, next) => next.dailyPercentGain - prev.dailyPercentGain);
        const negativeReturns = portfolios?.filter(({ dailyPercentGain }) => dailyPercentGain < 0).sort((prev, next) => next.dailyPercentGain - prev.dailyPercentGain);

        return portfolioSelection === 'Winners' ? positiveReturns : negativeReturns;
    };

    const handleSelectPortfolio = (userId: string, pfId: string) => () => {
        console.log(userId, pfId)
    };

    const dropdownOptions = [
        {
            id: 'Winners',
            label: 'Winners'
        },
        {
            id: 'Loosers',
            label: 'Loosers'
        }
    ]

    return portfolios ? (
        <div>
            <Dropdown
                options={dropdownOptions}
                currentSelectionLabel={portfolioSelection}
                performSelection={setPortfolioSelection}
            />
            <div className={styles.tilesContainer}>
                {
                    constructTiles(portfolios)?.map((tile, index) => (
                        <StockMoverTile
                            { ...tile}
                            onClick={handleSelectPortfolio(tile.userId, tile.pfId)}
                            key={`${tile.pfId}-${index}-tile`}
                        />
                    ))
                }
            </div>
        </div>
    ) : null;
};

export default connector(StockMoversContainer);