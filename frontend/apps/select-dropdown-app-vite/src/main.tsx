import React from 'react';
import ReactDOM from 'react-dom/client';

import { Select } from '@wbk--mern-playground/react-cmp-lib';

import '@wbk--mern-playground/lsg-styles-generic/lib/components/atoms/utilities.css';
import '@wbk--mern-playground/lsg-styles-generic/lib/components/atoms/paragraph.css';
import '@wbk--mern-playground/lsg-styles-generic/lib/components/atoms/margin.css';
import '@wbk--mern-playground/lsg-styles-generic/lib/components/molecules/select.css';

const options = [
    {
        label: 'Strict Black',
        value: 'strict-black',
    },
    {
        label: 'Heavenly Green',
        value: 'heavenly-green',
    },
    {
        label: 'Sweet Pink',
        value: 'pink',
    },
];

const container = document.getElementById('root');
if (!container) {
    throw new Error('Failed to find the root element');
}
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <div style={{ padding: '40px' }}>
            <Select options={options} />
        </div>
    </React.StrictMode>
);
