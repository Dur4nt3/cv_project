export function updateInfo(event, property, state, stateUpdater) {
    const newVal = event.target.value;
    const newInfo = { ...state, [property]: newVal };
    stateUpdater(newInfo);
}
