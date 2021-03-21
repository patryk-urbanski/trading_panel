import React from 'react';

import styles from './index.module.scss';

type Props = {
    shortName: string,
    regularMarketChangePercent: number,
    rowColor?: string,
};

const PortfolioDetailsRow = ({
    shortName,
    regularMarketChangePercent,
    rowColor
}: Props) => {

    return (
        <div className={styles.row} style={{ backgroundColor: rowColor }}>
            <span className={styles.name}>{shortName}</span>
            <span className={styles.value}>{regularMarketChangePercent.toFixed(2)}</span>
        </div>
    );
};

export default PortfolioDetailsRow;