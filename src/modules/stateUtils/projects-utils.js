import { initializeProjectItem } from '../utilities/form-utilities';

export function updateProjects(event, itemId, property, state, stateUpdater) {
    let newVal = event.target.value;

    if (property === 'description') {
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

    const newPro = {
        ...state,
        [itemId]: { ...state[itemId], [property]: newVal },
    };
    stateUpdater(newPro);
}

export function addProjectItem(state, stateUpdater) {
    const idList = Object.keys(state);
    const latestId = idList[idList.length - 1];
    const newId = Number(latestId.slice(3)) + 1;
    const newPro = {
        ...state,
        [`pro${newId}`]: initializeProjectItem(),
    };

    stateUpdater(newPro);
}
