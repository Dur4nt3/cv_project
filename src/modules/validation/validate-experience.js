import { validateMultipleSegmentsSection } from './validation-utilities';

function positionDatesErrors(startDate, endDate) {
    const dateErrors = [false, false];

    dateErrors[0] = Number.isNaN(new Date(startDate).getTime());
    dateErrors[1] = Number.isNaN(new Date(endDate).getTime());

    // Starting a position before finishing it => ERROR
    if (new Date(startDate) > new Date(endDate)) {
        dateErrors[0] = true;
        dateErrors[1] = true;
    }

    // future positions are NOT allowed
    if (new Date(startDate) > new Date()) {
        dateErrors[0] = true;
    }

    // This means a person has start a position but hasn't finished it yet
    // Furthermore it means that said person does NOT no the target end date for their current position
    if (endDate === '') {
        dateErrors[1] = false;
    }

    return dateErrors;
}

function validateExperienceItem(experienceItem) {
    const experienceItemErrors = {};

    experienceItemErrors.position = experienceItem.position === '';
    experienceItemErrors.companyName = experienceItem.companyName === '';
    experienceItemErrors.companyLocation =
        experienceItem.companyLocation === '';

    [
        experienceItemErrors.positionStartDate,
        experienceItemErrors.positionEndDate,
    ] = positionDatesErrors(
        experienceItem.positionStartDate,
        experienceItem.positionEndDate
    );

    return experienceItemErrors;
}

export default function validateExperience(experience) {
    const experienceErrors = {};

    for (const key of Object.keys(experience)) {
        experienceErrors[key] = validateExperienceItem(experience[key]);
    }

    return validateMultipleSegmentsSection(experienceErrors);
}
