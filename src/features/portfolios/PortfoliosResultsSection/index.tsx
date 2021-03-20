import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { portfolioResultOptions } from '../../../config';

import { useFetch } from '../../../hooks';
import { getPopularPortfolioReturns } from '../../../redux/methods/stockMovers';
import { generateColorLightness } from '../../../utils/components';

import Dropdown from '../../../components/Dropdown';
import PortfolioResultTile from './PortfolioResultTile';

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

const PortfoliosResultsSection = ({
    getPopularPortfolioReturns
}: Props) => {
    const [ portfolioSelection, setPortfolioSelection ] = useState<string | number>(portfolioResultOptions[0]);

    const portfolios = useFetch(getPopularPortfolioReturns, 'US')

    const constructTiles = (portfolioList: Portfolios) => {
        const { finance } = portfolioList;

        const portfolios = finance?.result[0].portfolios.map(({ pfId, name, shortDescription, dailyPercentGain, userId }) => ({
            pfId, name, shortDescription, dailyPercentGain, userId
        }));

        const positiveReturns = portfolios?.filter(({ dailyPercentGain }) => dailyPercentGain > 0).sort((prev, next) => next.dailyPercentGain - prev.dailyPercentGain);
        const negativeReturns = portfolios?.filter(({ dailyPercentGain }) => dailyPercentGain < 0).sort((prev, next) => prev.dailyPercentGain - next.dailyPercentGain);

        return portfolioSelection === 'winners' ? positiveReturns : negativeReturns;
    };

    const handleSelectPortfolio = (userId: string, pfId: string) => () => {
        console.log(userId, pfId)
    };

    const dropdownOptions = portfolioResultOptions.map(option => ({ id: option, label: `Last session's ${option}` }));

    
    return portfolios ? (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.dropdown}>
                    <Dropdown
                        options={dropdownOptions}
                        currentSelectionLabel={dropdownOptions.find(option => option.id === portfolioSelection)?.label || 'Select'}
                        performSelection={setPortfolioSelection}
                    />
                </div>
                <div className={styles.tilesContainer}>
                    {
                        constructTiles(portfolios)?.map((tile, index, arr) => (
                            <PortfolioResultTile
                                { ...tile}
                                onClick={handleSelectPortfolio(tile.userId, tile.pfId)}
                                key={`${tile.pfId}-${index}-tile`}
                                tileColor={`hsl(${portfolioSelection === 'winners' ? 135 : 360}deg, 100%, ${generateColorLightness(index, arr.length, 40, 10)}%)`}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    ) : null;
};

export default connector(PortfoliosResultsSection);