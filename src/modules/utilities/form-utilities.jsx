import {
    PersonalInfo,
    ExperienceItem,
    ProjectItem,
    EducationItem,
    SkillItem,
} from '../utilities/form-data';

import plusLightSvg from '../../assets/media/icons/plus-light-mode.svg';
import plusDarkSvg from '../../assets/media/icons/plus-dark-mode.svg';
import minusLightSvg from '../../assets/media/icons/minus-light-mode.svg';
import minusDarkSvg from '../../assets/media/icons/minus-dark-mode.svg';

export function initializePersonalInfo() {
    return new PersonalInfo('', '', '', '', '', '', '');
}

export function initializeExperienceItem() {
    return new ExperienceItem('', '', '', '', '', {});
}

export function initializeProjectItem() {
    return new ProjectItem('', '', {});
}

export function initializeEducationItem() {
    return new EducationItem('', '', '', '');
}

export function initializeSkillsItem() {
    return new SkillItem('', '');
}

export function getCollapseImgSrc(theme, collapsed) {
    if (theme === 'light' && collapsed) {
        return plusLightSvg;
    }

    if (theme === 'light' && !collapsed) {
        return minusLightSvg;
    }

    if (theme === 'dark' && collapsed) {
        return plusDarkSvg;
    }

    return minusDarkSvg;
}

export function findCollapseTarget(startElement) {
    if (startElement.nodeName === 'BUTTON') {
        return startElement.parentNode.parentNode.querySelector('.form-inputs');
    }
    if (startElement.nodeName === 'IMG') {
        return startElement.parentNode.parentNode.parentNode.querySelector(
            '.form-inputs'
        );
    }
}

export function updateCollapse(
    event,
    collapsed,
    collapseSection,
    collapseSectionHeight,
    setCollapseSectionHeight
) {
    event.preventDefault();

    const targetCont = findCollapseTarget(event.target);
    // Will always be the true height of the section
    let sectionHeight = collapseSectionHeight;
    // Update this components collapsible section height only if said section is expanded
    if (targetCont.offsetHeight > 0) {
        sectionHeight = targetCont.offsetHeight;
        setCollapseSectionHeight(sectionHeight);
    }

    document.documentElement.style.setProperty(
        '--collapse-height',
        `${sectionHeight}px`
    );

    if (collapsed) {
        targetCont.classList.add('expand-cont');
        targetCont.classList.remove('collapse-cont');
    } else {
        targetCont.classList.add('collapse-cont');
        targetCont.classList.remove('expand-cont');
    }
    setTimeout(() => {
        collapseSection(!collapsed);
    }, 650);
}

export function initializeToggledSections() {
    return {
        experience: true,
        projects: false,
        education: true,
        skills: true,
        summary: false,
    };
}

export function clearAll(stateUpdaters, states, updateClearNoticeStatus) {
    stateUpdaters.info(initializePersonalInfo());

    const newExp = { ...states.experience };
    for (const key of Object.keys(newExp)) {
        newExp[key] = initializeExperienceItem();
    }

    stateUpdaters.experience(newExp);

    const newPro = { ...states.projects };
    for (const key of Object.keys(newPro)) {
        newPro[key] = initializeProjectItem();
    }

    stateUpdaters.projects(newPro);

    const newEdu = { ...states.education };
    for (const key of Object.keys(newEdu)) {
        newEdu[key] = initializeEducationItem();
    }

    stateUpdaters.education(newEdu);

    const newSkills = { ...states.skills };
    for (const key of Object.keys(newSkills)) {
        newSkills[key] = initializeSkillsItem();
    }

    stateUpdaters.skills(newSkills);

    stateUpdaters.summary('');

    updateClearNoticeStatus(false);
}
