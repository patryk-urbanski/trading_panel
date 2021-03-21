import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { portfolioResultOptions } from '../../../config';

import { useFetch } from '../../../hooks';
import { getPopularPortfolioReturns, selectPortfolio } from '../../../redux/methods/portfolios';
import { generateColorLightness } from '../../../utils/shareable';
import { constructReturnsTiles } from '../../../utils/portfolios';

import Dropdown from '../../../components/Dropdown';
import PortfolioResultTile from '../../../components/portfolios/PortfolioResultTile';

import  styles from './index.module.scss';

const mapDispatch = {
    getPopularPortfolioReturns,
    selectPortfolio,
};

const connector = connect(null, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & {
    children?: React.ReactNode,
};

const PortfoliosResultsSection = ({
    getPopularPortfolioReturns,
    selectPortfolio,
}: Props) => {
    const [ portfolioSelection, setPortfolioSelection ] = useState<string | number>(portfolioResultOptions[0]);

    const portfolios = useFetch(getPopularPortfolioReturns, 'US')

    const handleSelectPortfolio = (userId: string, pfId: string) => () => {
        selectPortfolio({ userId, pfId });
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
                        constructReturnsTiles(portfolios, portfolioSelection)?.map((tile, index, arr) => (
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