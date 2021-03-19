import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import AutoSlider from '../../../components/AutoSlider';
import ButtonGroup from '../../../components/ButtonGroup';

import { sectorPerformanceTimeRangeEnum } from '../../../config/enums';

import { useFetch } from '../../../hooks';
import { getSectorPerformance } from '../../../redux/methods/sectorPerformance';

import styles from './index.module.scss';

const mapDispatch = {
    getSectorPerformance,
};

const connector = connect(null, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>

type Props = ReduxProps & {
    children?: React.ReactNode,
};

const SectorPerformanceSlider = ({
    getSectorPerformance,
}: Props) => {
    const [ timeRange, setTimeRange ] = useState<string | number>("Day")
    const sectorPerformance = useFetch(getSectorPerformance);

    const generatedSlides = sectorPerformance && Object.keys(sectorPerformance[sectorPerformanceTimeRangeEnum[timeRange]]).map(sector => ({
        label: sector,
        value: sectorPerformance?.[sectorPerformanceTimeRangeEnum[timeRange]][sector]
    }));

    const timeRangeOptions = Object.keys(sectorPerformanceTimeRangeEnum).map(key => ({ id: key, label: key }))

    const generateValueColor = (value: string)  => parseFloat(value) > 0 ? '#46eb34' : '#eb4034';

    return sectorPerformance ? (
        <React.Fragment>
            <AutoSlider
                adjustValueColor={generateValueColor}
                slides={generatedSlides}
            />
            <aside className={styles.timeRangePickerContainer}>
                <ButtonGroup
                    options={timeRangeOptions}
                    performSelect={setTimeRange}
                    currentSelection={timeRange}
                    btnClass={styles.timeRangeButtons}
                />
            </aside>
        </React.Fragment>
    ): null
};

export default connector(SectorPerformanceSlider);