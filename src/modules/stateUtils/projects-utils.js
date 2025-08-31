import { initializeProjectItem } from '../utilities/form-utilities';
import { extractDescIdNumber } from '../utilities/misc-utilities';

export function updateProjects(
    event,
    itemId,
    property,
    state,
    stateUpdater,
    setPreviewStatus
) {
    let newVal = event.target.value;

    if (property === 'description') {
        const descId = event.target.id;
        // Position is empty
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

    const newPro = {
        ...state,
        [itemId]: { ...state[itemId], [property]: newVal },
    };
    stateUpdater(newPro);
    setPreviewStatus(false);
}

export function addProjectItem(state, stateUpdater, setPreviewStatus) {
    const idList = Object.keys(state);
    const latestId = idList[idList.length - 1];
    const newId = Number(latestId.slice(3)) + 1;
    const newPro = {
        ...state,
        [`pro${newId}`]: initializeProjectItem(),
    };

    stateUpdater(newPro);
    setPreviewStatus(false);
}

export function removeProjectItem(state, stateUpdater, setPreviewStatus) {
    const idList = Object.keys(state);
    if (idList.length === 1) {
        return;
    }

    const latestId = idList[idList.length - 1];
    const newPro = { ...state };
    delete newPro[latestId];

    stateUpdater(newPro);
    setPreviewStatus(false);
}

export function addProDescriptionBullets(
    itemId,
    state,
    stateUpdater,
    setPreviewStatus
) {
    const idList = Object.keys(state[itemId].description);
    let newDescId;
    if (idList.length === 0) {
        newDescId = `${itemId}-desc1`;
    } else {
        const latestId = idList[idList.length - 1];
        newDescId = `${itemId}-desc${extractDescIdNumber(latestId) + 1}`;
    }
    const newPro = {
        ...state,
        [itemId]: {
            ...state[itemId],
            description: {
                ...state[itemId].description,
                [newDescId]: '',
            },
        },
    };
    stateUpdater(newPro);
    setPreviewStatus(false);
}

export function removeProDescriptionBullets(
    itemId,
    state,
    stateUpdater,
    setPreviewStatus
) {
    const idList = Object.keys(state[itemId].description);
    // Unlike experience items, allow a position to have no description
    if (idList.length === 0) {
        return;
    }

    const latestId = idList[idList.length - 1];
    const newPro = { ...state };
    delete newPro[itemId].description[latestId];

    stateUpdater(newPro);
    setPreviewStatus(false);
}
