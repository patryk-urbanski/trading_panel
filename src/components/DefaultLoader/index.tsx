import React from 'react';

import { Spinner } from 'reactstrap';

import styles from './index.module.scss';

type Props = {
    isLoading: boolean,
}

const DefaultLoader = ({
    isLoading
}: Props) => {
    return isLoading ? (
        <div className={styles.container}>
            <Spinner size='lg' color='light' />
        </div>
    ) : null;
};

export default DefaultLoader;