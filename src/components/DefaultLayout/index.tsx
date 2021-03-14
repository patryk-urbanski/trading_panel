import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../redux/store';

import Header from './Header';
import Sidebar from './Sidebar';
import { Spinner } from 'reactstrap';

import withScreenSize from '../../hoc/withScreenSize';

import styles from './index.module.scss';

const mapStateToProps = (state: RootState) => ({
    isLoading: state.global.isLoading
});

const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & {
    children: React.ReactNode,
};

const DefaultLayout = ({
    children,
    isLoading,
}: Props ) => {
    return (
        <div className={styles.globalContainer}>
            <Header />
            <div>
                <aside className={styles.globalSidebar}>
                    <Sidebar />
                </aside>
                <main className={styles.globalMain}>
                    {isLoading ? <Spinner size='lg' color='primary' /> : children}
                </main>
            </div>
        </div>
    );
};

export default withScreenSize(connector(DefaultLayout));
