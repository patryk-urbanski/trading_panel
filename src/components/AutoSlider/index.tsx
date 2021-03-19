import React from 'react';

import styles from './index.module.scss';

interface Slide {
    label: string,
    value: string
};

interface Props {
    slides: Slide[] | null,
    adjustValueColor?: (value: string) => string
}

const AutoSlider = ({
    slides,
    adjustValueColor
}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.sliderContainer}>
                {
                    slides?.map((slide, index) => (
                        <div className={styles.slideElement} key={`${index}-${slide.label}-slide`}>
                            <span
                                className={styles.slideLabel}
                            >   {slide.label}
                            </span>
                            <span
                                className={styles.slideValue}
                                style={{color: adjustValueColor && adjustValueColor(slide.value)}}
                            >
                                {slide.value}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default AutoSlider;