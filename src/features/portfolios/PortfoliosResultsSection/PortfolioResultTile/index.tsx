import React, { MouseEventHandler } from 'react';

import styles from './index.module.scss';

type Props = {
    pfId: string,
    name: string,
    shortDescription: string,
    dailyPercentGain: number,
    onClick?: MouseEventHandler<HTMLDivElement>,
    tileColor?: string,
};

const PortfolioResultTile = ({
    name,
    dailyPercentGain,
    onClick,
    tileColor
}: Props) => {

    return (
        <div className={styles.tile} style={{ backgroundColor: tileColor }} onClick={onClick}>
            <span>{name}</span>
            <span>{dailyPercentGain.toFixed(2)}</span>
        </div>
    );
};

export default PortfolioResultTile;