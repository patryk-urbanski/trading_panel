export const generateColorLightness = (index: number, numberOfTiles: number, initalLightness = 1, finalLightness = 0) => {
    const step = (initalLightness - finalLightness) / numberOfTiles;
    console.log(initalLightness - (step * index))
    return initalLightness - (step * index); 
};

export const isObjectFilled = (object: object) => object && JSON.stringify(object) !== '{}';