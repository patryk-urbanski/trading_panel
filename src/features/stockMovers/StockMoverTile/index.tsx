import React, { MouseEventHandler } from 'react';

import styles from './index.module.scss';

type Props = {
    pfId: string,
    name: string,
    shortDescription: string,
    dailyPercentGain: number,
    onClick?: MouseEventHandler<HTMLDivElement> 
};

const StockMoverTile = ({
    name,
    dailyPercentGain,
    onClick,
}: Props) => {

    const generateTileLayout = (dailyPercentGain: number) => {
        return ({
            backgroundColor: dailyPercentGain > 0 ? '#6ee34d' : '#e01414',
        })
    };
    return (
        <div className={styles.tile} style={generateTileLayout(dailyPercentGain)} onClick={onClick}>
            <span>{name}</span>
            <span>{dailyPercentGain.toFixed(2)}</span>
        </div>
    );
};

export default StockMoverTile;