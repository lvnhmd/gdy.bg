// Action creator
export function selectSource(source) {
    console.log('Asource has been selected: ', source.name);
    return {
        type: 'SRC_SELECTED',
        payload: source
    };
}