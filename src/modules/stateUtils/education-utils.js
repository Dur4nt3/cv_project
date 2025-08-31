import { initializeEducationItem } from '../utilities/form-utilities';

export function updateEducation(
    event,
    itemId,
    property,
    state,
    stateUpdater,
    setPreviewStatus
) {
    const newVal = event.target.value;

    const newEdu = {
        ...state,
        [itemId]: { ...state[itemId], [property]: newVal },
    };
    stateUpdater(newEdu);
    setPreviewStatus(false);
}

export function addEducationItem(state, stateUpdater, setPreviewStatus) {
    const idList = Object.keys(state);
    const latestId = idList[idList.length - 1];
    const newId = Number(latestId.slice(3)) + 1;
    const newEdu = {
        ...state,
        [`edu${newId}`]: initializeEducationItem(),
    };

    stateUpdater(newEdu);
    setPreviewStatus(false);
}

export function removeEducationItem(state, stateUpdater, setPreviewStatus) {
    const idList = Object.keys(state);
    if (idList.length === 1) {
        return;
    }

    const latestId = idList[idList.length - 1];
    const newEdu = { ...state };
    delete newEdu[latestId];

    stateUpdater(newEdu);
    setPreviewStatus(false);
}
