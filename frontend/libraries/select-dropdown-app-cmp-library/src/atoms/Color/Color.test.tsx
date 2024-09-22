import React from 'react';
import Color from './Color';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

test('renders all options passed to it', () => {
    const { getByTestId } = render(<Color hexCode="#000" />);
    expect(getByTestId('Color')).toHaveStyle('background-color: #000');
});
