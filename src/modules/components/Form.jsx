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
    createInfoInputs,
    getCollapseImgSrc,
    findCollapseTarget,
} from '../utilities/form-utilities';
import '../../assets/stylesheets/Form.css';

function Info({ theme }) {
    const [info, setInfo] = useState(initializePersonalInfo());
    const [collapsed, collapseSection] = useState(false);
    const [ collapseSectionHeight, setCollapseSectionHeight ] = useState(0);

    const collapseImgSrc = getCollapseImgSrc(theme, collapsed);

    function updateInfo(event, property) {
        const newVal = event.target.value;
        const newInfo = { ...info, [property]: newVal };
        setInfo(newInfo);
    }

    function updateCollapse(event) {
        event.preventDefault();

        const targetCont = findCollapseTarget(event.target);
        // Will always be the true height of the section
        let sectionHeight = collapseSectionHeight;
        // Update this components collapsible section height only if said section is expanded
        if (targetCont.offsetHeight > 0) {
            sectionHeight = targetCont.offsetHeight;
            setCollapseSectionHeight(sectionHeight);
        }
        
        document.documentElement.style.setProperty('--collapse-height', `${sectionHeight}px`);

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

    return (
        <div className='form-section'>
            <h2 className='form-section-heading'>
                <span>Personal Information</span>
                <button
                    aria-label={
                        collapsed ? 'Expand Section' : 'Collapse Section'
                    }
                    className='img-button'
                    onClick={(event) => updateCollapse(event)}
                >
                    <img
                        src={collapseImgSrc}
                        alt={collapsed ? 'Expand Section' : 'Collapse Section'}
                        className='collapse-icon'
                    />
                </button>
            </h2>
            <div className="form-inputs">{createInfoInputs(info, updateInfo)}</div>
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
            <Info theme={theme} />
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
