export const generateColorLightness = (index: number, numberOfTiles: number, initalLightness = 50, finalLightness = 20) => {
    const step = (initalLightness - finalLightness) / numberOfTiles;

    return initalLightness - (step * index); 
};

export const isObjectFilled = (object: object) => object && JSON.stringify(object) !== '{}';