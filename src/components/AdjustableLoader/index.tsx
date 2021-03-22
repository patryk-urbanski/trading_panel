import React from 'react';
import clsx from 'clsx';
import { Spinner } from 'reactstrap';

import styles from './index.module.scss';

type Props = {
    className?: string
}

const DefaultLoader = ({
    className
}: Props) => {
    return (
        <div className={clsx(styles.loader, className)}>
            <Spinner size='md' color='light' />
        </div>
    );
};

export default DefaultLoader;