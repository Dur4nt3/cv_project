import validateInfo from './validate-info';
import validateExperience from './validate-experience';
import validateProjects from './validate-projects';
import validateEducation from './validate-education';
import validateSkills from './validate-skills';
import validateSummary from './validate-summary';

function allValid(errors) {
    let nullCount = 0;

    for (const key of Object.keys(errors)) {
        if (errors[key] === null) {
            nullCount += 1;
        }
    }

    return nullCount === Object.keys(errors).length;
}

// NOTE: As this is a CV the aim is not to make sure each input is exactly as expected
// The general goal is to provide a QOL with the validation
// This gives users a higher chance of generating their desired CV
export default function validateForm(stateObj, toggledSections) {
    const errors = {
        infoErrors: null,
        experienceErrors: null,
        projectsErrors: null,
        educationErrors: null,
        skillsErrors: null,
        summaryErrors: null,
    };

    errors.infoErrors = validateInfo(stateObj.info);

    errors.experienceErrors = toggledSections.experience
        ? validateExperience(stateObj.experience)
        : null;

    errors.projectsErrors = toggledSections.projects
        ? validateProjects(stateObj.projects)
        : null;

    errors.educationErrors = toggledSections.education
        ? validateEducation(stateObj.education)
        : null;

    errors.skillsErrors = toggledSections.skills
        ? validateSkills(stateObj.skills)
        : null;

    errors.summaryErrors = toggledSections.summary
        ? validateSummary(stateObj.summary)
        : null;

    if (allValid(errors)) {
        return null;
    }
    return errors;
}
