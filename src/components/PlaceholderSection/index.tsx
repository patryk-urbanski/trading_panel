import React from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

type Props = {
    containerClassName?: string,
    children: React.ReactNode,
}

const PlaceholderSection = ({
    containerClassName,
    children,
}: Props) => {
    return (
        <div className={clsx(styles.container, containerClassName)}>
            {children}
        </div>
    );
};

export default PlaceholderSection;