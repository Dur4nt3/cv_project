function infoValid(infoErrors) {
    const errorCopy = { ...infoErrors };

    for (const key of Object.keys(infoErrors)) {
        if (infoErrors[key] !== true) {
            delete errorCopy[key]
        }
    }

    return Object.keys(errorCopy).length === 0 ? null : errorCopy;
}

export default function validateInfo(info) {
    const infoErrors = {};

    infoErrors.fullName = info.fullName === '';

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email);
    infoErrors.email = !emailValid;

    infoErrors.position = info.position === '';

    return infoValid(infoErrors);
}
