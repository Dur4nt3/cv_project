import { useState } from 'react';

import {
    initializePersonalInfo,
    initializeExperienceItem,
    initializeToggledSections,
    initializeProjectItem,
    initializeEducationItem,
    initializeSkillsItem,
    clearAll,
} from '../utilities/form-utilities';

import { updateInfo } from '../stateUtils/info-utils';
import {
    updateExperience,
    addExpDescriptionBullets,
    removeExpDescriptionBullets,
    addExperienceItem,
    removeExperienceItem,
} from '../stateUtils/experience-utils';
import {
    addProjectItem,
    updateProjects,
    removeProjectItem,
    addProDescriptionBullets,
    removeProDescriptionBullets,
} from '../stateUtils/projects-utils';
import {
    updateEducation,
    addEducationItem,
    removeEducationItem,
} from '../stateUtils/education-utils';
import {
    updateSkills,
    addSkillsItem,
    removeSkillsItem,
} from '../stateUtils/skills-utils';

import validateForm from '../validation/validate-form';

import FormHeader from './FormHeader';
import Info from './Info';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Eduction';
import Skills from './Skills';
import Summary from './Summary';
import FormActions from './FormActions';
import ClearNotice from './ClearNotice';
import FormErrors from './FormErrors';

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
    const [education, setEducation] = useState({
        edu1: initializeEducationItem(),
    });
    const [skills, setSkills] = useState({
        skill1: initializeSkillsItem(),
    });

    const [summary, setSummary] = useState('');

    const [errors, setErrors] = useState({
        infoErrors: null,
        experienceErrors: null,
        projectsErrors: null,
        educationErrors: null,
        skillsErrors: null,
        summaryErrors: null,
    });

    const [previewReady, setPreviewStatus] = useState(false);

    const [clearNoticeShown, updateClearNoticeStatus] = useState(false);
    const [toggledSections, toggleSection] = useState(
        initializeToggledSections()
    );

    const stateObj = {
        info,
        experience,
        projects,
        education,
        skills,
        summary,
    };

    function handleCheck(event) {
        event.preventDefault();
        const formErrors = validateForm(stateObj, toggledSections);
        if (formErrors === null) {
            console.log('ready to preview');
            console.log(toggledSections);
            setErrors({
                infoErrors: null,
                experienceErrors: null,
                projectsErrors: null,
                educationErrors: null,
                skillsErrors: null,
                summaryErrors: null,
            });
            setPreviewStatus(true);
        } else {
            console.log('errors found')
            setPreviewStatus(false);
            setErrors(formErrors);
        }
    }

    function handleSectionToggle(section) {
        const newToggles = { ...toggledSections };
        newToggles[section] = !newToggles[section];
        toggleSection(newToggles);
        setPreviewStatus(false);
    }

    return (
        <form>
            {clearNoticeShown && (
                <ClearNotice
                    updateClearNoticeStatus={updateClearNoticeStatus}
                    clearAll={() => {
                        clearAll(
                            {
                                info: setInfo,
                                experience: setExperience,
                                projects: setProjects,
                                education: setEducation,
                                skills: setSkills,
                                summary: setSummary,
                            },
                            stateObj,
                            updateClearNoticeStatus
                        );
                    }}
                />
            )}
            <FormHeader
                updateClearNotice={updateClearNoticeStatus}
                imgSrc={clearDark}
            />
            <Info
                theme={theme}
                info={info}
                updateInfo={updateInfo}
                stateUpdater={setInfo}
                errors={errors.infoErrors}
                setPreviewStatus={setPreviewStatus}
            />
            <Experience
                theme={theme}
                toggled={toggledSections.experience}
                handleSectionToggle={handleSectionToggle}
                experience={experience}
                stateUpdater={setExperience}
                updateExperience={updateExperience}
                addExperienceItem={addExperienceItem}
                removeExperienceItem={removeExperienceItem}
                addDescriptionBullets={addExpDescriptionBullets}
                removeDescriptionBullets={removeExpDescriptionBullets}
                errors={errors.experienceErrors}
                setPreviewStatus={setPreviewStatus}
            />
            <Projects
                theme={theme}
                toggled={toggledSections.projects}
                handleSectionToggle={handleSectionToggle}
                projects={projects}
                stateUpdater={setProjects}
                updateProjects={updateProjects}
                addProjectItem={addProjectItem}
                removeProjectItem={removeProjectItem}
                addDescriptionBullets={addProDescriptionBullets}
                removeDescriptionBullets={removeProDescriptionBullets}
                errors={errors.projectsErrors}
                setPreviewStatus={setPreviewStatus}
            />
            <Education
                theme={theme}
                toggled={toggledSections.education}
                handleSectionToggle={handleSectionToggle}
                education={education}
                stateUpdater={setEducation}
                updateEducation={updateEducation}
                addEducationItem={addEducationItem}
                removeEducationItem={removeEducationItem}
                errors={errors.educationErrors}
                setPreviewStatus={setPreviewStatus}
            />
            <Skills
                theme={theme}
                toggled={toggledSections.skills}
                handleSectionToggle={handleSectionToggle}
                skills={skills}
                stateUpdater={setSkills}
                updateSkills={updateSkills}
                addSkillsItem={addSkillsItem}
                removeSkillsItem={removeSkillsItem}
                errors={errors.skillsErrors}
                setPreviewStatus={setPreviewStatus}
            />
            <Summary
                theme={theme}
                toggled={toggledSections.summary}
                handleSectionToggle={handleSectionToggle}
                summary={summary}
                setSummary={setSummary}
                errors={errors.summaryErrors}
                setPreviewStatus={setPreviewStatus}
            />
            <FormErrors errors={errors} />
            <FormActions
                handleCheck={handleCheck}
                theme={theme}
                setPreviewStatus={setPreviewStatus}
                previewReady={previewReady}
                stateObj={stateObj}
                toggledSections={toggledSections}
            />
        </form>
    );
}
