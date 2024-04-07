import { fontSize } from '../../src/settings';

test('snapshot of fontsizes', () => {
    expect(fontSize).toMatchSnapshot();
});
