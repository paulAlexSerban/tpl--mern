import React from 'react';
import Margin from './Margin';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

test('renders all options passed to it', () => {
    const { getByTestId } = render(<Margin space="xxxs" left />);
    expect(getByTestId('Margin')).toHaveClass('margin-left-xxxs');
});
