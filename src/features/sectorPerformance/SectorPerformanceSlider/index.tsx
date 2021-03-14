import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import AutoSlider from '../../../components/AutoSlider';

import { useFetch } from '../../../hooks';
import { getSeries } from '../../../redux/methods/timeSeries';
import { getSectorPerformance } from '../../../redux/methods/sectorPerformance';

const mapDispatch = {
    getSectorPerformance,
    getSeries
};

const connector = connect(null, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & {
    children?: React.ReactNode,
};

const SectorPerformanceSlider = ({
    children,
    getSectorPerformance,
    getSeries
}: Props) => {
    const sectorPerformance = useFetch(getSectorPerformance);
    console.log(sectorPerformance)
    // useEffect(() => {
    //     getSectorPerformance()
    // }, [])
    return (
        <h1>elo</h1>
    );
};

export default connector(SectorPerformanceSlider);