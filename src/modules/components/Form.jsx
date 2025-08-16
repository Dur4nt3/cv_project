import { useState } from 'react';

import {
    PersonalInfo,
    ExperienceItem,
    ProjectItem,
    EductionItem,
    SkillItem,
} from '../utilities/form-data';
import { initializePersonalInfo } from '../utilities/form-utilities';
import '../../assets/stylesheets/Form.css';

function Info() {
    const [info, setInfo] = useState(initializePersonalInfo());

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>Personal Information</h2>
        </div>
    );
}

function Experience() {
    const [experience, setExperience] = useState(null);

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>Experience</h2>
        </div>
    );
}

function Projects() {
    const [projects, setProjects] = useState(null);

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>Projects</h2>
        </div>
    );
}

function Eduction() {
    const [eduction, setEducation] = useState(null);

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>Eduction</h2>
        </div>
    );
}

function Skills() {
    const [skills, setSkills] = useState(null);

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>Skills</h2>
        </div>
    );
}

function Summary() {
    const [summary, setSummary] = useState('');

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>Summary</h2>
        </div>
    );
}

function FormActions({ handleSubmission, handlePreview }) {
    return (
        <div className='form-buttons-cont'>
            <button className='submit-form'>Submit</button>
            <button className='preview-submission'>Preview</button>
        </div>
    );
}

export default function Form({ submissionHandler }) {
    function handleSubmission() {
        console.log('placeholder function for submission');
    }

    function handlePreview() {
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
            <Info />
            <Experience />
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
