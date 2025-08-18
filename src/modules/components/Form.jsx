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
import Info from './Info';
import Experience from './Experience';
import '../../assets/stylesheets/Form.css';

function Projects() {
    // const [projects, setProjects] = useState(null);

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>Projects</h2>
        </div>
    );
}

function Eduction() {
    // const [eduction, setEducation] = useState(null);

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>Eduction</h2>
        </div>
    );
}

function Skills() {
    // const [skills, setSkills] = useState(null);

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>Skills</h2>
        </div>
    );
}

function Summary() {
    // const [summary, setSummary] = useState('');

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>Summary</h2>
        </div>
    );
}

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

    function updateExperience(event, itemId, property) {
        const newVal = event.target.value;
        const newExp = {
            ...experience,
            [itemId]: { ...experience[itemId], [property]: newVal },
        };
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
