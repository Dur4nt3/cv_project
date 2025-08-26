export function validateMultipleSegmentsSection(sectionErrors) {
    const errorCopy = { ...sectionErrors };

    for (const key of Object.keys(sectionErrors)) {
        for (const inputKey of Object.keys(sectionErrors[key])) {
            const inputError = sectionErrors[key][inputKey];

            if (inputError !== true) {
                delete errorCopy[key][inputKey];
            }
        }

        if (Object.keys(errorCopy[key]).length === 0) {
            delete errorCopy[key];
        }
    }

    return Object.keys(errorCopy).length === 0 ? null : errorCopy;
}
