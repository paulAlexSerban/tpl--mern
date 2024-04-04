function isValidText(value: string) {
    return value && value.trim().length > 0;
}

function isValidDate(value: Date | string) {
    const date: Date = new Date(value);
    return value && date instanceof Date && !isNaN(date.getTime());
}

function isValidImageUrl(value: string) {
    return value && value.startsWith('http');
}

export { isValidText, isValidDate, isValidImageUrl };
