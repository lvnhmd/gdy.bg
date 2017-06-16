// Action creator
export function selectSource(source) {
    console.log('A source has been selected: ', source.name);
    return {
        type: 'SRC_SELECTED',
        payload: source
    };
}