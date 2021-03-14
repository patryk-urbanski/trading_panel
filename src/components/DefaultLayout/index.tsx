import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../redux/store';

import { clearError } from '../../redux/methods/generic';

import Header from './Header';
import Sidebar from './Sidebar';
import ErrorModal from '../ErrorModal';

import { Spinner } from 'reactstrap';

import withScreenSize from '../../hoc/withScreenSize';

import styles from './index.module.scss';

const mapStateToProps = (state: RootState) => ({
    isLoading: state.global.isLoading,
    error: state.global.error,
});

const mapDispatch = {
    clearError,
};

const connector = connect(mapStateToProps, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & {
    children: React.ReactNode,
};

const DefaultLayout = ({
    children,
    isLoading,
    error,
    clearError,
}: Props ) => {
    return (
        <div className={styles.globalContainer}>
            <Header />
            <div>
                <aside className={styles.globalSidebar}>
                    <Sidebar />
                </aside>
                <main className={styles.globalMain}>
                    {children}
                    {isLoading && <Spinner size='lg' color='primary' />}
                </main>
            </div>
            <ErrorModal
                error={error}
                clearErrorHandler={clearError}
            />
        </div>
    );
};

export default withScreenSize(connector(DefaultLayout));
