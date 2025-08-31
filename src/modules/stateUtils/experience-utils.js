import { extractDescIdNumber } from '../utilities/misc-utilities';
import { initializeExperienceItem } from '../utilities/form-utilities';

export function updateExperience(
    event,
    itemId,
    property,
    state,
    stateUpdater,
    setPreviewStatus
) {
    let newVal = event.target.value;

    if (property === 'positionDescription') {
        const descId = event.target.id;
        // Position description is empty
        if (Object.keys(state[itemId][property]).length === 0) {
            newVal = {
                [descId]: event.target.value,
            };
        } else {
            newVal = {
                ...state[itemId][property],
                [descId]: event.target.value,
            };
        }
    }

    const newExp = {
        ...state,
        [itemId]: { ...state[itemId], [property]: newVal },
    };
    stateUpdater(newExp);
    setPreviewStatus(false);
}

export function addExpDescriptionBullets(
    itemId,
    state,
    stateUpdater,
    setPreviewStatus
) {
    const idList = Object.keys(state[itemId].positionDescription);
    let newDescId;
    if (idList.length === 0) {
        newDescId = `${itemId}-desc1`;
    } else {
        const latestId = idList[idList.length - 1];
        newDescId = `${itemId}-desc${extractDescIdNumber(latestId) + 1}`;
    }
    const newExp = {
        ...state,
        [itemId]: {
            ...state[itemId],
            positionDescription: {
                ...state[itemId].positionDescription,
                [newDescId]: '',
            },
        },
    };
    stateUpdater(newExp);
    setPreviewStatus(false);
}

export function removeExpDescriptionBullets(
    itemId,
    state,
    stateUpdater,
    setPreviewStatus
) {
    const idList = Object.keys(state[itemId].positionDescription);
    // Unlike experience items, allow a position to have no description
    if (idList.length === 0) {
        return;
    }

    const latestId = idList[idList.length - 1];
    const newExp = { ...state };
    delete newExp[itemId].positionDescription[latestId];

    stateUpdater(newExp);
    setPreviewStatus(false);
}

export function addExperienceItem(state, stateUpdater, setPreviewStatus) {
    const idList = Object.keys(state);
    const latestId = idList[idList.length - 1];
    const newId = Number(latestId.slice(3)) + 1;
    const newExp = {
        ...state,
        [`exp${newId}`]: initializeExperienceItem(),
    };

    stateUpdater(newExp);
    setPreviewStatus(false);
}

export function removeExperienceItem(state, stateUpdater, setPreviewStatus) {
    const idList = Object.keys(state);
    if (idList.length === 1) {
        return;
    }

    const latestId = idList[idList.length - 1];
    const newExp = { ...state };
    delete newExp[latestId];

    stateUpdater(newExp);
    setPreviewStatus(false);
}
