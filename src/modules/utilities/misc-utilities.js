export function extractDescIdNumber(descId) {
    const individualChars = descId.split('');
    let idNumArray = [];
    for (let i = individualChars.length - 1; i >= 0; i-=1) {
        // Signifies that we've gone past the description id number
        if (individualChars[i] === 'c') {
            break;
        }
        idNumArray.push(individualChars[i]);
    }

    // number are now in reverse order
    idNumArray = idNumArray.reverse();

    return Number(idNumArray.join(''));
}