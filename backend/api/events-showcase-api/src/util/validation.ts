function isValidText(value: string, minLength = 1) {
    return value && value.trim().length >= minLength;
}

function isValidDate(value: Date | string) {
    const date: Date = new Date(value);
    return value && date instanceof Date && !isNaN(date.getTime());
}

function isValidImageUrl(value: string) {
    return value && value.startsWith('http');
}

function isValidEmail(value: string) {
    return value && value.includes('@');
}
export { isValidText, isValidDate, isValidImageUrl, isValidEmail };
