jest.mock('../../src/strings/_caseUtils', () => ({
    ...jest.requireActual('../../src/strings/_caseUtils'),
    calculateComplexity: (str: string) => {
        return {
            complexity: 10,
            length: str.length,
        };
    },
}));

jest.mock('uuid', () => ({
    v4: () => '1234',
}));

import * as caseUtils from '../../src/strings/_caseUtils';

describe('MockModules Test Suite', () => {
    test('calculateComplexity', () => {
        const result = caseUtils.calculateComplexity({} as any);
        console.log(result);
    });

    test('keep other functions as they are', () => {
        const result = caseUtils.toUpperCase('hello');
        console.log(result);
    });

    test('string with id', () => {
        const result = caseUtils.toLowerCaseQWithId('hello');
        console.log(result);
    });
});
