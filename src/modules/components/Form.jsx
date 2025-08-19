import { useState } from 'react';

import {
    PersonalInfo,
    ExperienceItem,
    ProjectItem,
    EductionItem,
    SkillItem,
} from '../utilities/form-data';
import {
    initializePersonalInfo,
    initializeExperienceItem,
} from '../utilities/form-utilities';
import { extractDescIdNumber } from '../utilities/misc-utilities';

import Info from './Info';
import Experience from './Experience';
import Projects from './Projects';
import Eduction from './Eduction';
import Skills from './Skills';
import Summary from './Summary';

import '../../assets/stylesheets/Form.css';

function FormActions({ handleSubmission, handlePreview }) {
    return (
        <div className='form-buttons-cont'>
            <button className='submit-form' onClick={handleSubmission}>
                Save
            </button>
            <button className='preview-submission' onClick={handlePreview}>
                Preview
            </button>
        </div>
    );
}

export default function Form({ theme }) {
    const [info, setInfo] = useState(initializePersonalInfo());
    // By default sections that allow adding multiple segments start with 1 segment
    const [experience, setExperience] = useState({
        exp1: initializeExperienceItem(),
    });

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
        const idList = Object.keys(experience[itemId]);
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

    return (
        <form>
            <div className='form-header'>
                <h1 className='form-heading'>CV Details</h1>
                <p className='required-notice'>
                    Required fields are marked with an asterisk (*)
                </p>
            </div>
            <Info theme={theme} info={info} updateInfo={updateInfo} />
            <Experience
                theme={theme}
                experience={experience}
                updateExperience={updateExperience}
                addExperienceItem={addExperienceItem}
                removeExperienceItem={removeExperienceItem}
                addDescriptionBullets={addDescriptionBullets}
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
