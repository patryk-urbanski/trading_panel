import React from 'react';

type Props = {
    slides: { label: string, value: string | number}[]
}

const AutoSlider = ({
    slides
}: Props) => {
    <div>
        {
            slides.map(slide => (
                <div>
                    <span>{slide.label}</span>
                    <span>{slide.value}</span>
                </div>
            ))
        }
    </div>
};

export default AutoSlider;