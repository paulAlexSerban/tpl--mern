import React from 'react';
import Paragraph from './Paragraph';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

test('renders all options passed to it', () => {
    const { getByTestId } = render(<Paragraph size="xl">Custom paragraph content</Paragraph>);
    expect(getByTestId('Paragraph')).toHaveClass('paragraph--xl');
    expect(getByTestId('Paragraph')).toHaveTextContent('Custom paragraph content');
});
