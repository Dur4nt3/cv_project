import { PersonalInfo, EductionItem, SkillItem } from '../utilities/form-data';

export function initializePersonalInfo() {
    return new PersonalInfo('', '', '', '', '', '', '');
}

export function createInfoInputs(infoObj, changeCallback) {
    const inputList = Object.keys(infoObj).map((key) => {
        let inputType;
        let label;
        const requiredFields = ['fullName', 'email', 'position'];
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
                />
            </div>
        );
    });

    return inputList;
}
