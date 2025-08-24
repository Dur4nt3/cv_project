import { useState } from 'react';

import {
    initializePersonalInfo,
    initializeExperienceItem,
    initializeToggledSections,
    initializeProjectItem,
} from '../utilities/form-utilities';
import { updateInfo } from '../stateUtils/info-utils';
import {
    updateExperience,
    addDescriptionBullets,
    removeDescriptionBullets,
    addExperienceItem,
    removeExperienceItem,
} from '../stateUtils/experience-utils';
import { addProjectItem, updateProjects } from '../stateUtils/projects-utils';

import FormHeader from './FormHeader';
import Info from './Info';
import Experience from './Experience';
import Projects from './Projects';
import Eduction from './Eduction';
import Skills from './Skills';
import Summary from './Summary';
import FormActions from './FormActions';
import ClearNotice from './ClearNotice';

import '../../assets/stylesheets/Form.css';

import clearDark from '../../assets/media/icons/clear-dark-mode.svg';

export default function Form({ theme }) {
    const [info, setInfo] = useState(initializePersonalInfo());
    // By default sections that allow adding multiple segments start with 1 segment
    const [experience, setExperience] = useState({
        exp1: initializeExperienceItem(),
    });
    const [projects, setProjects] = useState({
        pro1: initializeProjectItem(),
    });

    const [clearNoticeShown, updateClearNoticeStatus] = useState(false);
    const [toggledSections, toggleSection] = useState(
        initializeToggledSections()
    );

    function updateInfoRedirect(event, property) {
        updateInfo(event, property, info, setInfo);
    }

    function updateExperienceRedirect(event, itemId, property) {
        updateExperience(event, itemId, property, experience, setExperience);
    }

    function addExperienceItemRedirect() {
        addExperienceItem(experience, setExperience);
    }

    function removeExperienceItemRedirect() {
        removeExperienceItem(experience, setExperience);
    }

    function addDescriptionBulletsRedirect(itemId) {
        addDescriptionBullets(itemId, experience, setExperience);
    }

    function removeDescriptionBulletsRedirect(itemId) {
        removeDescriptionBullets(itemId, experience, setExperience);
    }

    function updateProjectsRedirect(event, itemId, property) {
        updateProjects(event, itemId, property, projects, setProjects);
    }

    function addProjectItemRedirect() {
        addProjectItem(projects, setProjects);
    }

    function handleSubmission(event) {
        event.preventDefault();
        console.log('placeholder function for submission');
    }

    function handlePreview(event) {
        event.preventDefault();
        console.log('placeholder function for preview');
    }

    function clearAll() {
        setInfo(initializePersonalInfo());

        const newExp = { ...experience };
        for (const key of Object.keys(newExp)) {
            newExp[key] = initializeExperienceItem();
        }

        setExperience(newExp);

        updateClearNoticeStatus(false);
    }

    function handleSectionToggle(section) {
        const newToggles = { ...toggledSections };
        newToggles[section] = !newToggles[section];
        toggleSection(newToggles);
    }

    return (
        <form>
            {clearNoticeShown && (
                <ClearNotice
                    updateClearNoticeStatus={updateClearNoticeStatus}
                    clearAll={clearAll}
                />
            )}
            <FormHeader
                updateClearNotice={updateClearNoticeStatus}
                imgSrc={clearDark}
            />
            <Info theme={theme} info={info} updateInfo={updateInfoRedirect} />
            <Experience
                theme={theme}
                toggled={toggledSections.experience}
                handleSectionToggle={handleSectionToggle}
                experience={experience}
                updateExperience={updateExperienceRedirect}
                addExperienceItem={addExperienceItemRedirect}
                removeExperienceItem={removeExperienceItemRedirect}
                addDescriptionBullets={addDescriptionBulletsRedirect}
                removeDescriptionBullets={removeDescriptionBulletsRedirect}
            />
            <Projects
                theme={theme}
                toggled={toggledSections.projects}
                handleSectionToggle={handleSectionToggle}
                projects={projects}
                updateProjects={updateProjectsRedirect}
                addProjectItem={addProjectItemRedirect}
            />
            <Eduction />
            <Skills />
            <Summary />
            <FormActions
                handleSubmission={handleSubmission}
                handlePreview={handlePreview}
            />
        </form>
    );
}
