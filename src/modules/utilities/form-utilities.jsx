import {
    PersonalInfo,
    ExperienceItem,
    EductionItem,
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
    return new ExperienceItem('','','','','', {});
}

export function createInfoInputs(infoObj, changeCallback) {
    const inputList = Object.keys(infoObj).map((key) => {
        let inputType;
        let label;
        const requiredFields = ['fullName', 'email', 'position'];
        const placeholders = {
            fullName: 'E.g., John Doe',
            phoneNumber: 'E.g., +1 800 000000',
            email: 'E.g., example@vendor.tld',
            location: 'E.g., Austin, Texas',
            linkedInProfile: 'E.g., https://www.linkedin.com/in/johndoe',
            position: 'E.g., Fullstack Web Developer',
        };
        switch (key) {
            case 'email':
                inputType = 'email';
                label = 'Email';
                break;

            case 'linkedInProfile':
                inputType = 'url';
                label = 'LinkedIn Profile';
                break;

            case 'phoneNumber':
                inputType = 'tel';
                label = 'Phone Number';
                break;

            case 'fullName':
                inputType = 'text';
                label = 'Full Name';
                break;

            default:
                inputType = 'text';
                label = key.charAt(0).toUpperCase() + key.slice(1);
        }

        const required = requiredFields.includes(key);

        return (
            <div className='form-row' key={key}>
                <label htmlFor={key} className='form-label'>
                    {label}
                    {required && <span className='required-indicator'>*</span>}
                </label>
                <input
                    id={key}
                    className='form-input'
                    type={inputType}
                    required={required}
                    value={infoObj[key]}
                    onChange={(event) => changeCallback(event, key)}
                    placeholder={placeholders[key]}
                />
            </div>
        );
    });

    return inputList;
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

export function createPositionDescription(positionDescription, itemId) {
    return <div className="position-description" key={itemId}>
        <h4 className="position-description-header">Position Description</h4>
    </div>
}