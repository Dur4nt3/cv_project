import { initializeSkillsItem } from '../utilities/form-utilities';

export function updateSkills(
    event,
    itemId,
    property,
    state,
    stateUpdater,
    setPreviewStatus
) {
    const newVal = event.target.value;

    const newSkills = {
        ...state,
        [itemId]: { ...state[itemId], [property]: newVal },
    };

    stateUpdater(newSkills);
    setPreviewStatus(false);
}

export function addSkillsItem(state, stateUpdater, setPreviewStatus) {
    const idList = Object.keys(state);
    const latestId = idList[idList.length - 1];
    const newId = Number(latestId.slice(5)) + 1;
    const newSkills = {
        ...state,
        [`skill${newId}`]: initializeSkillsItem(),
    };

    stateUpdater(newSkills);
    setPreviewStatus(false);
}

export function removeSkillsItem(state, stateUpdater, setPreviewStatus) {
    const idList = Object.keys(state);
    if (idList.length === 1) {
        return;
    }

    const latestId = idList[idList.length - 1];
    const newSkills = { ...state };
    delete newSkills[latestId];

    stateUpdater(newSkills);
    setPreviewStatus(false);
}
