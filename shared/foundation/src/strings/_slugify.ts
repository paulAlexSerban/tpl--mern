type StringifyOptions = {
    lower?: boolean;
};

const slugify = (text: string, options: StringifyOptions): string => {
    const slug = text
        .toString()
        .normalize('NFD') // split an accented letter in the base letter and the accent
        .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
        .replace(/\s+/g, '-') // separator
        .slice(0, 200); // limit to 200 chars

    return options && options.lower ? slug.toLowerCase() : slug;
};

export default slugify;
