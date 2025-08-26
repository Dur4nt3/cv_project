import { validateMultipleSegmentsSection } from './validation-utilities';

function validateProjectsItem(projectsItem) {
    const projectsItemErrors = {};

    projectsItemErrors.name = projectsItem.name === '';
    projectsItemErrors.link = projectsItem.link === '';

    return projectsItemErrors;
}

export default function validateProjects(projects) {
    const projectsErrors = {};

    for (const key of Object.keys(projects)) {
        projectsErrors[key] = validateProjectsItem(projects[key]);
    }

    return validateMultipleSegmentsSection(projectsErrors);
}
