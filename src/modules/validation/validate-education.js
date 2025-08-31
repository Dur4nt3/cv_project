import { validateMultipleSegmentsSection } from './validation-utilities';

function validateEducationItem(educationItem) {
    const educationItemErrors = {};

    educationItemErrors.institution = educationItem.institution === '';
    educationItemErrors.label = educationItem.label === '';
    educationItemErrors.gradDate = Number.isNaN(
        new Date(educationItem.gradDate).getTime()
    );

    return educationItemErrors;
}

export default function validateEducation(education) {
    const educationErrors = {};

    for (const key of Object.keys(education)) {
        educationErrors[key] = validateEducationItem(education[key]);
    }

    return validateMultipleSegmentsSection(educationErrors);
}
