import { validateMultipleSegmentsSection } from './validation-utilities';

function validateSkillsItem(skillsItem) {
    const skillsItemErrors = {};

    skillsItemErrors.type = skillsItem.type === '';
    skillsItemErrors.description = skillsItem.description === '';

    return skillsItemErrors;
}

export default function validateSkills(skills) {
    const skillsErrors = {};

    for (const key of Object.keys(skills)) {
        skillsErrors[key] = validateSkillsItem(skills[key]);
    }

    return validateMultipleSegmentsSection(skillsErrors);
}
