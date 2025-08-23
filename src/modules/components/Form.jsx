import { useState } from 'react';

import {
    initializePersonalInfo,
    initializeExperienceItem,
    initializeToggledSections,
} from '../utilities/form-utilities';
import { extractDescIdNumber } from '../utilities/misc-utilities';

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
    const [clearNoticeShown, updateClearNoticeStatus] = useState(false);
    const [toggledSections, toggleSection] = useState(
        initializeToggledSections()
    );

    function updateInfo(event, property) {
        const newVal = event.target.value;
        const newInfo = { ...info, [property]: newVal };
        setInfo(newInfo);
    }

    // Use only for updating EXISTING values
    function updateExperience(event, itemId, property) {
        let newVal = event.target.value;

        if (property === 'positionDescription') {
            const descId = event.target.id;
            // Position description is empty
            if (Object.keys(experience[itemId][property]).length === 0) {
                newVal = {
                    [descId]: event.target.value,
                };
            } else {
                newVal = {
                    ...experience[itemId][property],
                    [descId]: event.target.value,
                };
            }
        }

        const newExp = {
            ...experience,
            [itemId]: { ...experience[itemId], [property]: newVal },
        };
        setExperience(newExp);
    }

    function addDescriptionBullets(itemId) {
        const idList = Object.keys(experience[itemId].positionDescription);
        let newDescId;
        if (idList.length === 0) {
            newDescId = `${itemId}-desc1`;
        } else {
            const latestId = idList[idList.length - 1];
            newDescId = `${itemId}-desc${extractDescIdNumber(latestId) + 1}`;
        }
        const newExp = {
            ...experience,
            [itemId]: {
                ...experience[itemId],
                positionDescription: {
                    ...experience[itemId].positionDescription,
                    [newDescId]: '',
                },
            },
        };
        setExperience(newExp);
    }

    function removeDescriptionBullets(itemId) {
        const idList = Object.keys(experience[itemId].positionDescription);
        // Unlike experience items, allow a position to have no description
        if (idList.length === 0) {
            return;
        }

        const latestId = idList[idList.length - 1];
        const newExp = { ...experience };
        delete newExp[itemId].positionDescription[latestId];

        setExperience(newExp);
    }

    function addExperienceItem() {
        const idList = Object.keys(experience);
        const latestId = idList[idList.length - 1];
        const newId = Number(latestId.slice(3)) + 1;
        const newExp = {
            ...experience,
            [`exp${newId}`]: initializeExperienceItem(),
        };

        setExperience(newExp);
    }

    function removeExperienceItem() {
        const idList = Object.keys(experience);
        if (idList.length === 1) {
            return;
        }

        const latestId = idList[idList.length - 1];
        const newExp = { ...experience };
        delete newExp[latestId];

        setExperience(newExp);
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
        newToggles[section] = !(newToggles[section]);
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
            <Info theme={theme} info={info} updateInfo={updateInfo} />
            <Experience
                theme={theme}
                toggled={toggledSections.experience}
                handleSectionToggle={handleSectionToggle}
                experience={experience}
                updateExperience={updateExperience}
                addExperienceItem={addExperienceItem}
                removeExperienceItem={removeExperienceItem}
                addDescriptionBullets={addDescriptionBullets}
                removeDescriptionBullets={removeDescriptionBullets}
            />
            <Projects />
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
