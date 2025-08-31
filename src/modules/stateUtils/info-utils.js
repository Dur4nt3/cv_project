export function updateInfo(
    event,
    property,
    state,
    stateUpdater,
    setPreviewStatus
) {
    const newVal = event.target.value;
    const newInfo = { ...state, [property]: newVal };
    stateUpdater(newInfo);
    setPreviewStatus(false)
}
