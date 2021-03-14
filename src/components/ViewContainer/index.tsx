import React from 'react';

import styles from './index.module.scss';

type Props = {
    children: React.ReactNode
}

const ViewContainer = ({
    children
}: Props) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default ViewContainer;