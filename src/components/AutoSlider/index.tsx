import React from 'react';

import styles from './index.module.scss';

interface Slide {
    label: string,
    value: string | number
};

interface Props {
    slides: Slide[] | null
}

const AutoSlider = ({
    slides
}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.sliderContainer}>
                {
                    slides?.map((slide, index) => (
                        <div className={styles.slideElement} key={`${index}-${slide.label}-slide`}>
                            <span className={styles.slideLabel}>{slide.label}</span>
                            <span className={styles.slideValue}>{slide.value}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default AutoSlider;