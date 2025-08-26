function clearValid(errors) {
    const errorCopy = { ...errors };
    for (const section of Object.keys(errorCopy)) {
        if (errorCopy[section] === null) {
            delete errorCopy[section];
        }
    }

    return errorCopy;
}

export default function FormErrors({ errors }) {
    const errorCopy = clearValid(errors);

    if (Object.keys(errorCopy).length === 0) {
        return;
    }

    return (
        <div className='all-form-errors'>
            <h3>Review the following sections:</h3>
            {Object.keys(errorCopy).map((section, index) => {
                const labels = {
                    infoErrors: 'Personal Information',
                    experienceErrors: 'Experience',
                    projectsErrors: 'Projects',
                    educationErrors: 'Education',
                    skillsErrors: 'Skills',
                    summaryErrors: 'Summary',
                };

                return (
                    <span key={section}>
                        {labels[section]}
                        {index !== Object.keys(errorCopy).length - 1 ? ', ' : '.'}
                    </span>
                );
            })}
        </div>
    );
}
